/**
 * Industry Detail Page — Server Component
 *
 * Statically generated for every industry at build time.
 * generateStaticParams() fetches all industry slugs.
 * generateMetadata() provides per-industry SEO metadata.
 */

import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import { getAllIndustrySlugs, getIndustryBySlug } from '@/lib/api-functions';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { H1, H2, H3, Paragraph, AISnippetBox } from '@/components/ui/Typography';
import { ArrowLeft, ArrowRight, CheckCircle2, ShieldAlert } from 'lucide-react';
import type { IndustryItem } from '@/types';

// ── Static Generation ─────────────────────────────────────────────────────────

export async function generateStaticParams() {
  return getAllIndustrySlugs();
}

// ── Dynamic Metadata ──────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = await getIndustryBySlug(slug);

  const title =
    industry?.metaTitle || `${industry?.name ?? slug.replace(/-/g, ' ')} | Scale ORM`;
  const description =
    industry?.metaDescription ||
    `Custom ORM and AI automation solutions for the ${industry?.name ?? slug} sector.`;
  const keywords = industry?.keywords ?? [
    industry?.name ?? slug,
    'reputation management',
    'ORM',
    'AI automation',
    'Scale ORM',
  ];

  return {
    title,
    description,
    keywords,
    alternates: { canonical: `https://scaleorm.com/industries/${slug}` },
    openGraph: {
      title,
      description,
      url: `https://scaleorm.com/industries/${slug}`,
      siteName: 'Scale ORM',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

// ── Fallback Data ─────────────────────────────────────────────────────────────

const fallbackIndustry: IndustryItem = {
  _id: 'fallback',
  name: 'SaaS & B2B Technology',
  slug: 'saas-b2b-tech',
  description:
    'Enterprise reputation defense, Trustpilot review cleanup, and automated AI lead agent deployment tailored for high-growth tech platforms.',
  keyChallenges: [
    'Unverified review bombing on Trustpilot, G2, and Capterra.',
    'Smear campaigns sponsored by aggressive competitors.',
    'High inbound lead response friction causing lost pipeline.',
  ],
  solutions: [
    'Legal & Terms compliance review removal on G2 & Trustpilot.',
    'Authority content stacking to push positive news to page 1.',
    '24/7 AI Voice callers for instant lead qualification.',
  ],
  metaTitle: 'SaaS & B2B Technology Reputation Management | Scale ORM',
  metaDescription:
    'Enterprise ORM and AI automation solutions for SaaS and B2B technology platforms.',
};

// ── Page Component ────────────────────────────────────────────────────────────

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industryData = await getIndustryBySlug(slug);
  const industry = industryData ?? fallbackIndustry;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Back Link */}
      <Link
        href="/industries"
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Industries Overview
      </Link>

      {/* Header */}
      <div className="space-y-4">
        <Badge variant="glow">Tailored Industry Solutions</Badge>
        <H1>{industry.name}</H1>
        <Paragraph className="text-lg">{industry.description}</Paragraph>
      </div>

      {/* AI Overview Box */}
      <AISnippetBox title={`Executive Overview: ${industry.name}`}>
        Scale ORM deploys customized ORM suppression and AI Voice/Chat agents specifically
        optimized for compliance, user acquisition, and executive asset protection in the{' '}
        {industry.name} sector.
      </AISnippetBox>

      {/* Challenges & Solutions Split Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Key Challenges */}
        <Card variant="glass" className="p-8 border-rose-500/20 space-y-4">
          <div className="flex items-center gap-2 text-rose-400">
            <ShieldAlert className="w-5 h-5" />
            <H3 className="text-xl font-bold text-white">Key Industry Challenges</H3>
          </div>
          <ul className="space-y-3">
            {industry.keyChallenges?.map((challenge, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-300">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-1.5 shrink-0" />
                <span>{challenge}</span>
              </li>
            ))}
          </ul>
        </Card>

        {/* Our Solutions */}
        <Card variant="glass" className="p-8 border-emerald-500/20 space-y-4">
          <div className="flex items-center gap-2 text-emerald-400">
            <CheckCircle2 className="w-5 h-5" />
            <H3 className="text-xl font-bold text-white">Our Tailored Strategy</H3>
          </div>
          <ul className="space-y-3">
            {industry.solutions?.map((solution, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{solution}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      {/* CTA Box */}
      <div className="glass-panel p-8 rounded-2xl border border-indigo-500/30 text-center space-y-4">
        <H2 className="text-2xl">Deploy {industry.name} Solutions Today</H2>
        <Paragraph className="max-w-md mx-auto text-xs">
          Schedule a tailored consultation with our vertical industry specialists.
        </Paragraph>
        <Link href="/contact">
          <Button
            variant="gradient"
            size="md"
            rightIcon={<ArrowRight className="w-4 h-4" />}
          >
            Book Confidential Audit
          </Button>
        </Link>
      </div>
    </div>
  );
}
