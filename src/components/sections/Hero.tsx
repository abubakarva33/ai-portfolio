import Image from "next/image";
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

function FloatingCard({
  icon: Icon,
  title,
  sub,
  border,
  iconColor,
  className,
}: FlowStep & { className: string }) {
  return (
    <div
      className={`absolute hidden items-center gap-3 rounded-2xl border bg-[#0e0a1e]/85 px-4 py-3 text-left shadow-[0_10px_30px_rgba(0,0,0,0.4)] md:flex ${border} ${className}`}
    >
      <Icon className={`h-[22px] w-[22px] ${iconColor}`} aria-hidden="true" />
      <div>
        <div className="text-sm font-semibold text-white">{title}</div>
        <div className="text-xs text-zinc-400">{sub}</div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative z-10 mx-auto w-full max-w-[1200px] px-6 pb-40 pt-24 text-white md:px-12"
    >
      {/* Top: text + photo */}
      <div className="flex flex-col items-center justify-center gap-16 lg:flex-row">
        {/* Left */}
        <div className="flex max-w-[640px] flex-1 flex-col items-start gap-6">
          <div className="flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2 text-sm text-zinc-200">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Hi, I&apos;m Abubakar Siddik
          </div>

          <h1 className="font-display text-5xl font-bold leading-[1.06] tracking-tight md:text-[58px]">
            AI automation &amp; GoHighLevel systems that{" "}
            <span className="text-violet-300">work while you sleep.</span>
          </h1>

          <p className="text-lg leading-relaxed text-zinc-300">
            I&apos;m an AI automation and GoHighLevel expert. I build AI agents and
            workflows that capture leads, follow up instantly and book more
            calls, without adding headcount.
          </p>

          <div className="flex flex-wrap gap-3.5">
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
        </div>

        {/* Right: photo + floating cards */}
        <div className="relative h-[500px] w-full max-w-[400px] shrink-0">
          <div className="absolute inset-0 overflow-hidden rounded-[28px] border border-white/20 bg-gradient-to-b from-violet-500/35 to-[#140e28]/95">
            <Image
              src="/abubakar.jpg"
              alt="Abubakar Siddik"
              fill
              priority
              sizes="400px"
              className="object-cover"
            />
          </div>

          <FloatingCard {...flow[0]} className="-left-12 top-9" />
          <FloatingCard
            {...flow[1]}
            title="AI agent replies"
            sub="Qualifies instantly"
            className="-right-10 top-[210px]"
          />
          <FloatingCard
            {...flow[3]}
            icon={Check}
            title="Call booked"
            sub="GHL pipeline updated"
            className="-left-8 bottom-9"
          />
        </div>
      </div>

      {/* Workflow row */}
      <div className="mt-16 flex flex-col items-center gap-3.5">
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
    </section>
  );
}

/* ------------------------------------------------------------------
   Heading font (Space Grotesk): in app/layout.tsx

   import { Space_Grotesk } from "next/font/google";
   const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });
   // <body className={`${display.variable} ...`}>

   Tailwind (globals.css) -> @theme inline:
   --font-display: var(--font-display),

   Usage: <Hero />
------------------------------------------------------------------ */
