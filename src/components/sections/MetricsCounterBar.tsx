'use client';

import React, { useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { useEffect } from 'react';

interface Stat {
  value: number;
  suffix: string;
  label: string;
  prefix?: string;
  gradient: string;
}

const stats: Stat[] = [
  { value: 3, suffix: '+', label: 'Years Experience', gradient: 'bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-indigo-500' },
  { value: 100, suffix: '+', label: 'AI Automations Built', gradient: 'bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-500' },
  { value: 80, suffix: '+', label: 'Web Apps Delivered', gradient: 'bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-sky-500' },
  { value: 50, suffix: '+', label: 'Happy Clients', gradient: 'bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-green-500' },
];

function CountUpNumber({ value, suffix, prefix = '', gradient, duration = 2 }: Stat & { duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const controls = animate(0, value, {
      duration,
      delay: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
      onUpdate(v) {
        if (!el) return;
        const formatted =
          value >= 1000000
            ? (v / 1000000).toFixed(1) + 'M'
            : value >= 1000
            ? Math.round(v).toLocaleString()
            : value % 1 === 0
            ? Math.round(v).toString()
            : v.toFixed(1);
        el.textContent = prefix + formatted + suffix;
      },
    });

    return () => controls.stop();
  }, [value, suffix, prefix, duration]);

  return (
    <span ref={ref} className={`text-2xl sm:text-3xl md:text-4xl font-extrabold ${gradient} inline-block min-w-[2ch]`}>
      {prefix}0{suffix}
    </span>
  );
}

export function MetricsCounterBar() {
  return (
    <section className="hidden md:block max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 mb-8 sm:mb-12">
      <div className="p-4 sm:p-8 md:p-10 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center">
        {stats.map((stat, i) => (
          <div key={stat.label}>
            <CountUpNumber {...stat} />
            <p className="text-[11px] font-bold text-gray-500 mt-2 uppercase tracking-wider relative z-10">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
