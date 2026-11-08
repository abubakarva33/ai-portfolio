'use client';

import React, { useState, useId, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export function LeadCalculatorSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  // Slider state with exact initial values from the reference design
  const [leadsPerMonth, setLeadsPerMonth] = useState<number>(60);
  const [avgJobValue, setAvgJobValue] = useState<number>(800);
  const [leadsLostRate, setLeadsLostRate] = useState<number>(20);
  const [winRate, setWinRate] = useState<number>(25);

  const leadsId = useId();
  const valueId = useId();
  const lostId = useId();
  const winId = useId();

  // Calculation formula:
  // 1. Leads lost to slow replies = (leadsPerMonth * leadsLostRate) / 100
  // 2. Jobs that would have been won = lostLeads * (winRate / 100)
  // 3. Monthly estimated loss = jobsWon * avgJobValue
  // 4. Annual estimated loss = monthlyLoss * 12
  const lostLeads = (leadsPerMonth * leadsLostRate) / 100;
  const jobsWonLost = (lostLeads * winRate) / 100;
  const monthlyLoss = Math.round(jobsWonLost * avgJobValue);
  const annualLoss = monthlyLoss * 12;

  // Helper to compute progress percentage for CSS linear-gradient track
  const getPercentage = (value: number, min: number, max: number) => {
    return Math.min(100, Math.max(0, ((value - min) / (max - min)) * 100));
  };

  return (
    <section
      ref={ref}
      aria-labelledby="lead-calculator-heading"
      className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24"
    >
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-amber-500/[0.03] blur-[160px] rounded-full pointer-events-none -z-10" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="text-center max-w-2xl mx-auto"
      >
        <div className="inline-flex items-center justify-center gap-2 text-xs md:text-sm font-semibold tracking-widest uppercase text-amber-500 mb-4 font-mono">
          <span className="w-5 h-[2px] bg-amber-500/80 inline-block" />
          <span>RUN YOUR OWN NUMBERS</span>
        </div>

        <h2
          id="lead-calculator-heading"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-white tracking-tight leading-[1.12] font-display"
        >
          What are slow replies costing you?
        </h2>

        <p className="mt-4 text-zinc-400 text-base md:text-lg leading-relaxed">
          Move the sliders to match your business. It takes about ten seconds.
        </p>
      </motion.div>

      {/* Calculator Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        className="relative rounded-3xl border border-white/[0.08] bg-[#12151e]/85 backdrop-blur-xl p-6 sm:p-10 lg:p-12 max-w-7xl mx-auto mt-12 md:mt-16 overflow-hidden shadow-2xl shadow-black/40"
      >
        {/* Subtle ambient gradient inside card corner */}
        <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-gradient-to-tl from-amber-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
          {/* Left Column: Sliders */}
          <div className="lg:col-span-7 space-y-7">
            {/* Slider 1: Leads per month */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label htmlFor={leadsId} className="text-sm font-medium text-zinc-300">
                  Leads per month
                </label>
                <span className="text-lg font-bold text-white font-mono">
                  {leadsPerMonth}
                </span>
              </div>
              <input
                id={leadsId}
                type="range"
                min={5}
                max={300}
                step={5}
                value={leadsPerMonth}
                aria-valuetext={`${leadsPerMonth} leads per month`}
                onChange={(e) => setLeadsPerMonth(Number(e.target.value))}
                className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-zinc-800 lead-range-slider"
                style={{
                  background: `linear-gradient(to right, #f97316 0%, #f97316 ${getPercentage(
                    leadsPerMonth,
                    5,
                    300
                  )}%, #27272a ${getPercentage(leadsPerMonth, 5, 300)}%, #27272a 100%)`,
                }}
              />
            </div>

            {/* Slider 2: Average job value */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label htmlFor={valueId} className="text-sm font-medium text-zinc-300">
                  Average job value
                </label>
                <span className="text-lg font-bold text-white font-mono">
                  ${avgJobValue.toLocaleString()}
                </span>
              </div>
              <input
                id={valueId}
                type="range"
                min={100}
                max={5000}
                step={50}
                value={avgJobValue}
                aria-valuetext={`$${avgJobValue} average job value`}
                onChange={(e) => setAvgJobValue(Number(e.target.value))}
                className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-zinc-800 lead-range-slider"
                style={{
                  background: `linear-gradient(to right, #f97316 0%, #f97316 ${getPercentage(
                    avgJobValue,
                    100,
                    5000
                  )}%, #27272a ${getPercentage(avgJobValue, 100, 5000)}%, #27272a 100%)`,
                }}
              />
            </div>

            {/* Slider 3: Leads lost to slow replies */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label htmlFor={lostId} className="text-sm font-medium text-zinc-300">
                  Leads lost to slow replies
                </label>
                <span className="text-lg font-bold text-white font-mono">
                  {leadsLostRate}%
                </span>
              </div>
              <input
                id={lostId}
                type="range"
                min={5}
                max={60}
                step={1}
                value={leadsLostRate}
                aria-valuetext={`${leadsLostRate} percent`}
                onChange={(e) => setLeadsLostRate(Number(e.target.value))}
                className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-zinc-800 lead-range-slider"
                style={{
                  background: `linear-gradient(to right, #f97316 0%, #f97316 ${getPercentage(
                    leadsLostRate,
                    5,
                    60
                  )}%, #27272a ${getPercentage(leadsLostRate, 5, 60)}%, #27272a 100%)`,
                }}
              />
            </div>

            {/* Slider 4: Leads you normally win */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label htmlFor={winId} className="text-sm font-medium text-zinc-300">
                  Your normal close rate
                </label>
                <span className="text-lg font-bold text-white font-mono">
                  {winRate}%
                </span>
              </div>
              <input
                id={winId}
                type="range"
                min={5}
                max={60}
                step={1}
                value={winRate}
                aria-valuetext={`${winRate} percent`}
                onChange={(e) => setWinRate(Number(e.target.value))}
                className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-zinc-800 lead-range-slider"
                style={{
                  background: `linear-gradient(to right, #f97316 0%, #f97316 ${getPercentage(
                    winRate,
                    5,
                    60
                  )}%, #27272a ${getPercentage(winRate, 5, 60)}%, #27272a 100%)`,
                }}
              />
            </div>
          </div>

          {/* Right Column: Estimated Loss & CTA */}
          <div className="lg:col-span-5 space-y-6 lg:pl-6 lg:border-l lg:border-white/[0.08]">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-500 block mb-2 font-mono">
                YOUR ESTIMATED LOSS
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl sm:text-6xl font-black font-display text-white tracking-tight">
                  ${monthlyLoss.toLocaleString()}
                </span>
                <span className="text-zinc-400 text-lg sm:text-xl font-normal">
                  /month
                </span>
              </div>
            </div>

            <p className="text-zinc-300 text-base leading-relaxed">
              That is{' '}
              <span className="text-amber-400 font-bold">
                ${annualLoss.toLocaleString()}
              </span>{' '}
              a year in work you already paid to attract.
            </p>

            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 text-zinc-950 font-bold text-base shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all group"
            >
              <span>Show Me How to Recover It</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>

            <p className="text-xs text-zinc-500 italic">
              An estimate from the numbers you entered, not a guarantee.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

