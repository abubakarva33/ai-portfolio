'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Zap, Clock, Award } from 'lucide-react';
import Link from 'next/link';
import { AnimatedBonusCard } from '@/components/ui/AnimatedBonusCard';

export function TrustSignalsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12" ref={ref}>

      {/* CTA Banner */}
      <AnimatedBonusCard>
        <div className="relative z-10 p-4 md:p-8 text-center mt-[-40px]">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-5">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Open for New Projects
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Automate Your Business or{' '}
            <span className="font-hero-serif font-normal italic">Build Something Amazing?</span>
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto mb-8">
            Whether you need an AI automation system with n8n / GHL, or a full-stack web application — 
            let&apos;s jump on a free consultation call and turn your vision into reality.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 text-white font-semibold shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 hover:scale-105 transition-all duration-300 group"
            >
              Book a Free Call <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/5 transition-all duration-300"
            >
              View My Work
            </Link>
          </div>
        </div>
      </AnimatedBonusCard>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="glass-card rounded-2xl border border-violet-500/20 p-8 md:p-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-violet-500/10 border border-violet-500/30 flex items-center justify-center text-violet-400 mx-auto">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Fast Delivery</h3>
            <p className="text-sm text-gray-400">
              I work efficiently to deliver automation systems and web apps within agreed timelines — no delays, no excuses.
            </p>
          </div>
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mx-auto">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">24/7 Support</h3>
            <p className="text-sm text-gray-400">
              Post-delivery support included. I ensure your automation systems and apps run smoothly long after launch.
            </p>
          </div>
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Quality Guaranteed</h3>
            <p className="text-sm text-gray-400">
              Every project comes with clean documentation, thorough testing, and revision rounds until you&apos;re 100% satisfied.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
