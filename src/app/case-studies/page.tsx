/**
 * Case Studies Index Page — Server Component
 *
 * Fetches all case studies at build time (SSG). No client-side fetching.
 */

import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import { getAllCaseStudies } from '@/lib/api-functions';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { H1, H3, Paragraph } from '@/components/ui/Typography';
import { Award, ArrowRight } from 'lucide-react';
import type { CaseStudyItem } from '@/types';

// ── Metadata ──────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Case Studies & Client Results | Scale ORM',
  description:
    'Documented ORM and AI automation transformations: how Scale ORM defends executive brand equity and scales AI automation for global clients.',
  keywords: [
    'ORM case studies',
    'reputation management results',
    'AI automation case studies',
    'Scale ORM proof',
    'executive ORM success',
  ],
  alternates: { canonical: 'https://scaleorm.com/case-studies' },
  openGraph: {
    title: 'Case Studies & Client Results | Scale ORM',
    description:
      'Documented transformations: see how Scale ORM defends brand equity and scales AI automation.',
    url: 'https://scaleorm.com/case-studies',
    siteName: 'Scale ORM',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case Studies & Client Results | Scale ORM',
    description:
      'Documented transformations: see how Scale ORM defends brand equity and scales AI automation.',
  },
};

// ── Fallback Data ─────────────────────────────────────────────────────────────

const defaultCaseStudies: CaseStudyItem[] = [
  {
    _id: '1',
    title: 'Global Fintech Platform: 99.8% Defamatory News Suppression',
    slug: 'global-fintech-suppression',
    clientName: 'Fintech Enterprise (London / NYC)',
    challenge:
      'Unsubstantiated court rumor article ranking #1 on Google search for corporate name.',
    solution:
      'Deployed 15 verified authority entity microsites, PR distribution, and legal removal notices.',
    results: [
      { label: 'Defamatory Result', value: 'Moved to Page 4' },
      { label: 'Positive Share of Search', value: '98.5%' },
      { label: 'Time to Completion', value: '42 Days' },
    ],
    metaTitle: '',
    metaDescription: '',
  },
  {
    _id: '2',
    title: 'Healthcare Chain: Trustpilot & Google Maps Rating Repair',
    slug: 'healthcare-chain-rating-repair',
    clientName: 'Regional Medical Group',
    challenge:
      'Rating dropped from 4.8 to 3.2 stars due to coordinated review attack on Google Maps.',
    solution:
      'Automated HIPAA-compliant patient feedback acquisition and flagged 140+ policy-violating reviews.',
    results: [
      { label: 'Google Rating Recovered', value: '4.9 Stars' },
      { label: 'Violating Reviews Removed', value: '142 Reviews' },
      { label: 'Monthly Patient Growth', value: '+35%' },
    ],
    metaTitle: '',
    metaDescription: '',
  },
];

// ── Page Component ────────────────────────────────────────────────────────────

export default async function CaseStudiesIndexPage() {
  const caseStudies = await getAllCaseStudies();
  const displayCaseStudies = caseStudies.length > 0 ? caseStudies : defaultCaseStudies;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <Badge variant="glow">Proven Track Record</Badge>
        <H1>Case Studies &amp; Client Results</H1>
        <Paragraph>
          Explore documented transformations demonstrating how Scale ORM defends executive brand
          equity and scales AI automation.
        </Paragraph>
      </div>

      {/* Case Studies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {displayCaseStudies.map((cs, i) => (
          <Card
            key={cs._id || i}
            variant="glass"
            className="p-8 space-y-6 flex flex-col justify-between border-indigo-500/20"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">
                  {cs.clientName}
                </span>
                <Award className="w-5 h-5 text-indigo-400" />
              </div>
              <H3 className="text-xl">{cs.title}</H3>
              <Paragraph className="text-xs text-gray-300">{cs.challenge}</Paragraph>

              {/* Metric Highlights */}
              <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/10 text-center">
                {cs.results?.map((res, idx) => (
                  <div key={idx} className="bg-white/5 p-2.5 rounded-xl border border-white/5">
                    <p className="text-sm font-extrabold text-gradient">{res.value}</p>
                    <p className="text-[10px] text-gray-400 mt-0.5 line-clamp-1">{res.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href={`/case-studies/${cs.slug}`}
              className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-1.5 pt-2"
            >
              Read Full Case Study <ArrowRight className="w-4 h-4" />
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}
