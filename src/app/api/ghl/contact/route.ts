import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

const GHL_API_BASE = 'https://services.leadconnectorhq.com';

export async function POST(req: NextRequest) {
  const token = process.env.GHL_API_TOKEN;
  const locationId = process.env.GHL_LOCATION_ID;

  if (!token || !locationId) {
    console.error('[GHL] Missing env vars');
    return NextResponse.json({ message: 'Server configuration error.' }, { status: 500 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ message: 'Invalid request body.' }, { status: 400 });
  }

  const { full_name, email, phone, website, select_service, business_challenge, utmSource } = body;

  if (!full_name || !email) {
    return NextResponse.json({ message: 'Name and email are required.' }, { status: 400 });
  }

  const nameParts = String(full_name).trim().split(/\s+/);
  const firstName = nameParts[0] ?? '';
  const lastName = nameParts.slice(1).join(' ') || '';

  const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
    Version: '2021-07-28',
  };

  const contactPayload: Record<string, unknown> = {
    locationId,
    firstName,
    lastName,
    email: String(email).trim().toLowerCase(),
    source: utmSource ? String(utmSource) : 'Portfolio Contact Form',
  };

  if (phone && String(phone).trim()) {
    contactPayload.phone = String(phone).trim();
  }

  // Upsert contact
  let contactId: string | undefined;
  try {
    const { data } = await axios.post(
      `${GHL_API_BASE}/contacts/upsert`,
      contactPayload,
      { headers, timeout: 15000 },
    );
    contactId = data?.contact?.id;
    console.log('[GHL] Contact upserted:', contactId);
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error('[GHL] Contact upsert failed:', err.response?.status, err.response?.data);
      return NextResponse.json(
        { message: err.response?.data?.message || 'Failed to submit contact. Please try again.' },
        { status: 502 },
      );
    }
    console.error('[GHL] Unexpected error:', err);
    return NextResponse.json(
      { message: 'Network error. Please try again.' },
      { status: 502 },
    );
  }

  // Add note (non-fatal)
  if (contactId) {
    const services = Array.isArray(select_service)
      ? (select_service as string[]).join(', ')
      : 'N/A';
    const noteLines = [
      `Services Interested: ${services}`,
      website ? `Website: ${website}` : null,
      `Business Challenge: ${business_challenge ?? 'N/A'}`,
      utmSource ? `UTM Source: ${utmSource}` : null,
    ].filter(Boolean);

    try {
      await axios.post(
        `${GHL_API_BASE}/contacts/${contactId}/notes`,
        { body: noteLines.join('\n') },
        { headers, timeout: 10000 },
      );
    } catch (err) {
      console.warn('[GHL] Note creation failed (non-fatal):', axios.isAxiosError(err) ? err.response?.data : err);
    }
  }

  return NextResponse.json({ success: true }, { status: 200 });
}
