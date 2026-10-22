'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface CaseStudySpotlight {
  clientName: string;
  industry: string;
  challenge: string;
  slug: string;
  results: { label: string; value: string }[];
  colorClass: string;
}

const spotlightStudies: CaseStudySpotlight[] = [
  {
    clientName: 'Global Fintech Platform',
    industry: 'Fintech / NYC & London',
    challenge: 'Unsubstantiated court rumour article ranking #1 on Google for their corporate name — threatening $800M investment round.',
    slug: 'global-fintech-suppression',
    results: [
      { label: 'Days to Suppress', value: '42' },
      { label: 'Positive Search Share', value: '98.5%' },
      { label: 'Investment Round Saved', value: '$800M' },
    ],
    colorClass: 'border-indigo-500/30 hover:border-indigo-500/60',
  },
  {
    clientName: 'Regional Healthcare Group',
    industry: 'Healthcare / USA',
    challenge: 'Rating dropped from 4.8★ to 3.2★ on Google Maps due to a coordinated fake review attack, causing 40% drop in new patients.',
    slug: 'healthcare-chain-rating-repair',
    results: [
      { label: 'Google Rating Restored', value: '4.9★' },
      { label: 'Fake Reviews Removed', value: '142' },
      { label: 'Patient Growth', value: '+35%' },
    ],
    colorClass: 'border-purple-500/30 hover:border-purple-500/60',
  },
];

export function CaseStudySpotlightSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12"
      >
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5" />
            Proven Results
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Real Clients.{' '}
            <span className="font-hero-serif font-normal italic">Real Results.</span>
          </h2>
        </div>
        <Link
          href="/case-studies"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors group shrink-0"
        >
          View All Case Studies <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {spotlightStudies.map((cs, i) => (
          <motion.div
            key={cs.slug}
            initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: i * 0.15 }}
          >
            <Link
              href={`/case-studies/${cs.slug}`}
              className={`block glass-card rounded-2xl p-8 border ${cs.colorClass} transition-all duration-300 group h-full`}
            >
              <div className="flex items-start justify-between mb-5">
                <div>
                  <p className="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-1">
                    {cs.industry}
                  </p>
                  <h3 className="text-xl font-bold text-white">{cs.clientName}</h3>
                </div>
                <Award className="w-6 h-6 text-amber-400 shrink-0" />
              </div>

              <p className="text-sm text-gray-400 leading-relaxed mb-6">{cs.challenge}</p>

              {/* Results row */}
              <div className="grid grid-cols-3 gap-3">
                {cs.results.map((r) => (
                  <div key={r.label} className="bg-white/5 rounded-xl p-3 border border-white/5 text-center">
                    <p className="text-lg font-extrabold text-gradient">{r.value}</p>
                    <p className="text-[10px] text-gray-400 mt-0.5 leading-tight">{r.label}</p>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-1.5 mt-5 text-xs font-semibold text-indigo-400 group-hover:text-indigo-300 transition-colors">
                Read Full Case Study <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
