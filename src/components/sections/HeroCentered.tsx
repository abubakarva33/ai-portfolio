import Link from "next/link";
import { User, Bot, CalendarCheck, Check, type LucideIcon } from "lucide-react";

type FlowStep = {
  icon: LucideIcon;
  title: string;
  sub: string;
  border: string;
  iconColor: string;
};

const flow: FlowStep[] = [
  { icon: User, title: "New lead", sub: "Form or ad enquiry", border: "border-white/15", iconColor: "text-violet-300" },
  { icon: Bot, title: "AI agent replies", sub: "Qualifies in seconds", border: "border-violet-500/70", iconColor: "text-violet-300" },
  { icon: CalendarCheck, title: "Call booked", sub: "Calendar synced", border: "border-white/15", iconColor: "text-violet-300" },
  { icon: Check, title: "GHL updated", sub: "Pipeline & follow-ups", border: "border-emerald-400/60", iconColor: "text-emerald-300" },
];

export default function HeroCentered() {
  return (
    <section id="home" className="relative z-10 overflow-hidden hero-purple-bg py-10">
      {/* Dark overlay over background images */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#090a0f]/20 via-[#090a0f]/40 to-[#090a0f]/60" />

      <div className="relative z-10 flex flex-col items-center gap-7 px-6 pb-40 pt-28 text-center text-white">
        {/* Badge */}
      <div className="flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2 text-sm text-zinc-200">
        <span className="h-2 w-2 rounded-full bg-emerald-400" />
        Abubakar Siddik · AI Automation &amp; GoHighLevel Expert
      </div>

      {/* Headline */}
      <h1 className="font-display max-w-[900px] text-5xl font-bold leading-[1.05] tracking-tight md:text-[68px]">
        I turn manual busywork into{" "}
        <span className="text-violet-300">AI automations</span> that grow your
        business.
      </h1>

      <p className="max-w-[640px] text-lg leading-relaxed text-zinc-300">
        GoHighLevel systems, AI agents and workflow automation, built to
        capture leads, follow up instantly and book more calls without adding
        headcount.
      </p>

      {/* CTAs */}
      <div className="flex flex-wrap justify-center gap-3.5">
        <Link
          href="#work"
          className="inline-flex min-h-12 items-center rounded-xl bg-white px-6 text-base font-semibold text-zinc-900 transition hover:bg-zinc-200"
        >
          See my work
        </Link>
        <Link
          href="#contact"
          className="inline-flex min-h-12 items-center rounded-xl border border-white/20 bg-white/10 px-6 text-base font-medium text-white transition hover:bg-white/15"
        >
          Book a free call
        </Link>
      </div>

      {/* Workflow row */}
      <div className="mt-7 flex flex-col items-center gap-3.5">
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {flow.map((step, i) => (
            <div key={step.title} className="flex items-center gap-2.5">
              <div
                className={`flex w-[196px] items-center gap-3 rounded-[14px] border bg-[#0e0a1e]/65 px-4 py-3.5 text-left ${step.border}`}
              >
                <step.icon className={`h-[22px] w-[22px] ${step.iconColor}`} aria-hidden="true" />
                <div>
                  <div className="text-sm font-semibold">{step.title}</div>
                  <div className="text-xs text-zinc-400">{step.sub}</div>
                </div>
              </div>
              {i < flow.length - 1 && (
                <div className="hidden w-7 border-t-2 border-dashed border-violet-500 lg:block" />
              )}
            </div>
          ))}
        </div>
        <p className="text-[13px] text-zinc-400">
          A typical lead-to-booking automation, running 24/7
        </p>
      </div>
      </div>
    </section>
  );
}
