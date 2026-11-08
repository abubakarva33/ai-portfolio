'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface TimelineStep {
  time: string;
  text: string;
}

const withoutSteps: TimelineStep[] = [
  { time: '7:42 PM', text: 'Quote request comes in' },
  { time: '7:43 PM', text: 'Nobody sees it. You have finished for the day' },
  { time: '9:15 AM', text: 'You call back and reach voicemail' },
  { time: '9:40 AM', text: 'They have already booked someone else' },
];

const withSteps: TimelineStep[] = [
  { time: '7:42 PM', text: 'Quote request comes in' },
  { time: '7:43 PM', text: 'They get a text and a call straight away' },
  { time: '7:46 PM', text: 'Questions answered, slot chosen' },
  { time: '7:47 PM', text: 'Appointment booked and reminder set' },
];

export function LeadComparisonSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      aria-labelledby="lead-comparison-heading"
      className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-amber-500/[0.03] blur-[150px] rounded-full pointer-events-none -z-10" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="text-center max-w-3xl mx-auto"
      >
        <div className="inline-flex items-center justify-center gap-2 text-xs md:text-sm font-semibold tracking-widest uppercase text-amber-500 mb-4 font-mono">
          <span className="w-5 h-[2px] bg-amber-500/80 inline-block" />
          <span>AN EXAMPLE</span>
        </div>

        <h2
          id="lead-comparison-heading"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-white tracking-tight leading-[1.12] font-display"
        >
          Same lead.<br />
          Two very different endings.
        </h2>

        <p className="mt-4 text-zinc-400 text-base md:text-lg leading-relaxed">
          A customer asks for a quote at 7:42 pm, after you have finished for the day.
        </p>
      </motion.div>

      {/* Two Comparison Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-7xl mx-auto mt-12 md:mt-16 items-stretch">
        {/* Card 1: Without a system */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="relative rounded-3xl border border-white/[0.08] bg-[#12151e]/80 backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between shadow-lg"
        >
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-zinc-200 mb-8 font-display">
              Without a system
            </h3>

            {/* Timeline */}
            <div className="space-y-6">
              {withoutSteps.map((step, idx) => {
                const isLast = idx === withoutSteps.length - 1;
                return (
                  <div key={idx} className="flex items-start gap-4 text-sm relative">
                    <span className="text-xs font-mono text-zinc-500 w-16 text-right shrink-0 pt-0.5">
                      {step.time}
                    </span>

                    <div className="relative flex flex-col items-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-zinc-600 ring-4 ring-zinc-800/80 shrink-0 mt-1" />
                      {!isLast && (
                        <div className="w-[1.5px] bg-zinc-800/80 h-10 -mb-2 mt-1" />
                      )}
                    </div>

                    <span className="text-zinc-400 text-sm leading-snug pt-0.5">
                      {step.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Lost pill */}
          <div className="mt-10 py-3.5 px-6 rounded-2xl bg-[#221316] border border-red-500/20 text-red-300 text-center font-semibold text-sm">
            Lead lost
          </div>
        </motion.div>

        {/* Card 2: With your new system */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          className="relative rounded-3xl border border-amber-500/35 bg-gradient-to-b from-[#1b1419]/90 via-[#12151e]/90 to-[#12151e]/90 backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between shadow-[0_0_50px_-15px_rgba(249,115,22,0.18)] overflow-hidden"
        >
          {/* Top-right corner ambient glow */}
          <div className="absolute -top-12 -right-12 w-44 h-44 bg-gradient-to-br from-amber-500/20 to-orange-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <h3 className="text-xl sm:text-2xl font-bold text-amber-400 mb-8 font-display">
              With your new system
            </h3>

            {/* Timeline */}
            <div className="space-y-6">
              {withSteps.map((step, idx) => {
                const isLast = idx === withSteps.length - 1;
                return (
                  <div key={idx} className="flex items-start gap-4 text-sm relative">
                    <span className="text-xs font-mono text-amber-400/90 w-16 text-right shrink-0 pt-0.5">
                      {step.time}
                    </span>

                    <div className="relative flex flex-col items-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-400 ring-4 ring-amber-400/25 shrink-0 mt-1 shadow-[0_0_8px_rgba(251,146,60,0.6)]" />
                      {!isLast && (
                        <div className="w-[1.5px] bg-amber-500/50 h-10 -mb-2 mt-1" />
                      )}
                    </div>

                    <span className="text-white font-medium text-sm leading-snug pt-0.5">
                      {step.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Booked button */}
          <div className="relative z-10 mt-10 py-3.5 px-6 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 text-zinc-950 text-center font-bold text-sm sm:text-base shadow-lg shadow-orange-500/25">
            Job booked before you saw it
          </div>
        </motion.div>
      </div>
    </section>
  );
}

