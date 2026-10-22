/**
 * Industries Index Page — Server Component
 *
 * Fetches all industries at build time (SSG). No client-side fetching.
 */

import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import { getAllIndustries } from '@/lib/api-functions';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { H1, H3, Paragraph } from '@/components/ui/Typography';
import {
  Building2,
  ArrowRight,
  Cpu,
  Landmark,
  Scale,
  Home as HomeIcon,
  Stethoscope,
} from 'lucide-react';
import type { IndustryItem } from '@/types';

// ── Metadata ──────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Industries We Serve | Scale ORM',
  description:
    'Customized Online Reputation Management and AI Automation solutions engineered for regulated and high-stakes sectors including SaaS, Healthcare, Fintech, Legal, and Real Estate.',
  keywords: [
    'industry reputation management',
    'ORM for SaaS',
    'ORM for healthcare',
    'ORM for fintech',
    'AI automation by industry',
    'Scale ORM industries',
  ],
  alternates: { canonical: 'https://scaleorm.com/industries' },
  openGraph: {
    title: 'Industries We Serve | Scale ORM',
    description:
      'Customized ORM and AI Automation solutions for regulated and high-stakes industry verticals.',
    url: 'https://scaleorm.com/industries',
    siteName: 'Scale ORM',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Industries We Serve | Scale ORM',
    description:
      'Customized ORM and AI Automation solutions for regulated and high-stakes industry verticals.',
  },
};

// ── Fallback Data ─────────────────────────────────────────────────────────────

const defaultIndustries: IndustryItem[] = [
  {
    _id: '1',
    name: 'SaaS & B2B Technology',
    slug: 'saas-b2b-tech',
    description:
      'Protect platform credibility on Trustpilot & G2 while deploying automated AI voice support agents.',
    keyChallenges: [],
    solutions: [],
    metaTitle: 'SaaS & B2B Technology | Scale ORM',
    metaDescription: '',
  },
  {
    _id: '2',
    name: 'Healthcare & Medical Practice',
    slug: 'healthcare-medical',
    description:
      'HIPAA-compliant physician review repair, Google Business map suppression, and patient intake AI agents.',
    keyChallenges: [],
    solutions: [],
    metaTitle: 'Healthcare & Medical | Scale ORM',
    metaDescription: '',
  },
  {
    _id: '3',
    name: 'Fintech & Banking',
    slug: 'fintech-banking',
    description:
      'Defend financial institution brand equity against fraud complaints and regulatory press releases.',
    keyChallenges: [],
    solutions: [],
    metaTitle: 'Fintech & Banking | Scale ORM',
    metaDescription: '',
  },
  {
    _id: '4',
    name: 'Legal & Law Firms',
    slug: 'legal-law-firms',
    description:
      'Executive reputation defense for managing partners, trial attorneys, and high-profile corporate litigation.',
    keyChallenges: [],
    solutions: [],
    metaTitle: 'Legal & Law Firms | Scale ORM',
    metaDescription: '',
  },
  {
    _id: '5',
    name: 'Real Estate & Hospitality',
    slug: 'real-estate-hospitality',
    description:
      'Protect luxury property developments, broker ratings, and hospitality review portals.',
    keyChallenges: [],
    solutions: [],
    metaTitle: 'Real Estate & Hospitality | Scale ORM',
    metaDescription: '',
  },
];

const industryIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'saas-b2b-tech': Cpu,
  'healthcare-medical': Stethoscope,
  'fintech-banking': Landmark,
  'legal-law-firms': Scale,
  'real-estate-hospitality': HomeIcon,
};

// ── Page Component ────────────────────────────────────────────────────────────

export default async function IndustriesIndexPage() {
  const industries = await getAllIndustries();
  const displayIndustries = industries.length > 0 ? industries : defaultIndustries;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <Badge variant="glow">Tailored Industry Verticals</Badge>
        <H1>Industries We Serve</H1>
        <Paragraph>
          Customized Online Reputation Management and AI Automation solutions engineered for
          regulated and high-stakes sectors.
        </Paragraph>
      </div>

      {/* Industry Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayIndustries.map((ind, i) => {
          const Icon = industryIconMap[ind.slug] ?? Building2;
          return (
            <Card
              key={ind._id || i}
              variant="glass"
              className="p-8 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  <Icon className="w-6 h-6" />
                </div>
                <H3 className="text-2xl">{ind.name}</H3>
                <Paragraph className="text-sm">{ind.description}</Paragraph>
              </div>

              <Link
                href={`/industries/${ind.slug}`}
                className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-1.5"
              >
                View Industry Solutions <ArrowRight className="w-4 h-4" />
              </Link>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
