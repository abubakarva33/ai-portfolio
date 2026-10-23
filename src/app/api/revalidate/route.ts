import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const token = process.env.GHL_API_TOKEN;
    const locationId = process.env.GHL_LOCATION_ID;

    if (!token || !locationId) {
      return NextResponse.json(
        { message: "GHL configuration is missing." },
        { status: 500 }
      );
    }

    const data = await request.json();

    const {
      full_name,
      email,
      phone,
      website,
      select_service,
      business_challenge,
      utmSource,
    } = data;

    if (
      typeof full_name !== "string" ||
      full_name.trim().length < 2 ||
      typeof email !== "string" ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      !Array.isArray(select_service) ||
      select_service.length === 0 ||
      !select_service.every((s: unknown) => typeof s === "string") ||
      typeof business_challenge !== "string" ||
      business_challenge.trim().length < 5
    ) {
      return NextResponse.json(
        { message: "Please check your form details." },
        { status: 400 }
      );
    }

    const services = select_service as string[];
    const nameParts = full_name.trim().split(/\s+/);
    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join(" ");

    const response = await fetch(
      "https://services.leadconnectorhq.com/contacts/",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          Version: "v3",
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          locationId,
          firstName,
          lastName,
          name: full_name.trim(),
          email: email.trim(),
          ...(typeof phone === "string" && phone.trim()
            ? { phone: phone.trim() }
            : {}),
          ...(typeof website === "string" && website.trim()
            ? { website: website.trim() }
            : {}),
          source:
            typeof utmSource === "string" && utmSource.trim()
              ? utmSource.trim().slice(0, 100)
              : "Portfolio Contact Form",
          tags: [
            "Portfolio Contact Form",
            ...services.map((s) => `Service: ${s}`),
          ],
        }),
        cache: "no-store",
      }
    );

    const result = await response.json().catch(() => ({}));

    if (!response.ok) {
      console.error("GHL contact creation failed:", response.status);

      return NextResponse.json(
        {
          message:
            response.status === 401 || response.status === 403
              ? "GHL authentication or permissions failed."
              : "Could not submit your request. Please try again.",
        },
        { status: 502 }
      );
    }

    const contactId = result?.contact?.id;

    // Save the business challenge and service selections as a contact note.
    if (contactId) {
      const noteResponse = await fetch(
        `https://services.leadconnectorhq.com/contacts/${encodeURIComponent(contactId)}/notes`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            Version: "v3",
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            title: "Portfolio Contact Form Submission",
            body: [
              `Business Challenge:\n${business_challenge.trim()}`,
              `Selected Services: ${services.join(", ")}`,
              ...(typeof utmSource === "string" && utmSource.trim()
                ? [`UTM Source: ${utmSource.trim().slice(0, 100)}`]
                : []),
            ].join("\n\n"),
          }),
          cache: "no-store",
        }
      );

      if (!noteResponse.ok) {
        // Contact creation succeeded; don't invite a duplicate resubmission.
        console.error(
          "GHL contact note creation failed:",
          noteResponse.status
        );
      }
    }

    return NextResponse.json({
      success: true,
      message: "Your request has been submitted successfully.",
    });
  } catch (error) {
    console.error(
      "GHL contact route error:",
      error instanceof Error ? error.message : "Unknown error"
    );

    return NextResponse.json(
      { message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}