'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Clock, Mail, Users } from 'lucide-react';
import Link from 'next/link';

interface LeakCard {
  icon: React.ElementType;
  title: string;
  description: string;
  cost: string;
}

const leakCards: LeakCard[] = [
  {
    icon: Clock,
    title: 'Slow response times',
    description:
      'A lead submits a form while you’re on a job. By the time you reply, they’ve already booked a competitor.',
    cost: 'The ad spend you used to win that lead.',
  },
  {
    icon: Mail,
    title: 'Your messages never arrive',
    description:
      'Unregistered SMS numbers get blocked and emails land in spam, so the follow-up you think is running reaches no one.',
    cost: 'Every quote, reminder, and offer you send',
  },
  {
    icon: Users,
    title: 'Manual follow-up',
    description:
      'Your leads, calendar, and reminders live in separate tools, so nothing happens unless you do it yourself.',
    cost: 'Your evenings and every lead you forget',
  },
];

export function LeadLeaksSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      aria-labelledby="lead-leaks-heading"
      className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24"
    >
      {/* Subtle ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-amber-500/[0.04] blur-[140px] rounded-full pointer-events-none -z-10" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="text-center max-w-3xl mx-auto"
      >
        <div className="inline-flex items-center justify-center gap-2 text-xs md:text-sm font-semibold tracking-widest uppercase text-amber-500 mb-4 font-mono">
          <span className="w-5 h-[2px] bg-amber-500/80 inline-block" />
          <span>SOUND FAMILIAR?</span>
        </div>

        <h2
          id="lead-leaks-heading"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-white tracking-tight leading-[1.12] font-display"
        >
          Three places your leads quietly disappear.
        </h2>

        <p className="mt-4 text-zinc-400 text-base md:text-lg leading-relaxed">
          Most service businesses don’t have a lead problem. They have a follow-up problem. These losses never appear in a report. They just feel like a slow month.        </p>
      </motion.div>

      {/* 3 Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 md:mt-16">
        {leakCards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + idx * 0.1, ease: 'easeOut' }}
              className="relative rounded-2xl md:rounded-3xl border border-white/[0.08] bg-[#12151e]/80 backdrop-blur-xl p-7 md:p-8 flex flex-col justify-between hover:border-amber-500/30 transition-all duration-300 group shadow-lg shadow-black/20"
            >
              <div>
                {/* Icon Badge */}
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-6 group-hover:scale-105 group-hover:border-amber-500/40 transition-all">
                  <Icon className="w-5 h-5 text-amber-400" />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 tracking-tight font-display">
                  {card.title}
                </h3>

                <p className="text-zinc-400 text-sm md:text-[15px] leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Bottom Cost section */}
              <div className="mt-8 pt-5 border-t border-white/[0.08]">
                <div className="text-[11px] font-bold tracking-wider text-zinc-500 uppercase font-mono">
                  WHAT IT COSTS YOU
                </div>
                <div className="text-sm font-semibold text-zinc-200 mt-1">
                  {card.cost}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Stat Callout Banner */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.65, delay: 0.35, ease: 'easeOut' }}
        className="relative mt-6 md:mt-7 rounded-2xl md:rounded-3xl border border-amber-500/25 bg-gradient-to-r from-amber-500/[0.08] via-[#12151e]/85 to-[#12151e]/85 backdrop-blur-xl px-6 sm:px-8 md:px-10 py-4 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-7 md:gap-9 overflow-hidden shadow-xl"
      >
        <div className="absolute -left-10 -top-10 w-36 h-36 bg-amber-500/15 rounded-full blur-2xl pointer-events-none" />

        <div className="text-4xl sm:text-5xl font-black text-amber-400 font-display tracking-tight shrink-0">
          7x
        </div>

        <div className="space-y-1.5 relative z-10">
          <p className="text-zinc-200 text-base sm:text-[17px] font-medium leading-relaxed">
            Companies that responded within an hour were nearly seven times more likely to qualify a lead than those that waited even one hour longer
          </p>
          <Link
            href="https://hbr.org/2011/03/the-short-life-of-online-sales-leads"
            target="_blank"
            className="text-xs sm:text-[13px] text-zinc-400 underline underline-offset-4 decoration-zinc-600 hover:decoration-amber-400 transition-colors inline-block"
          >
            Harvard Business Review, The Short Life of Online Sales Leads (2011)
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

