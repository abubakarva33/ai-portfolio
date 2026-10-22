/**
 * Blog Index Page — Server Component
 *
 * Fetches all blogs and categories server-side at build time.
 * Interactive search/filter is handled by BlogClientFilters (Client Component)
 * which receives all data as props — no client-side data fetching.
 */

import type { Metadata } from 'next';
import React from 'react';
import { getAllBlogs, getAllCategories } from '@/lib/api-functions';
import { Badge } from '@/components/ui/Badge';
import { H1, AISnippetBox } from '@/components/ui/Typography';
import { BlogClientFilters } from '@/components/ui/BlogClientFilters';
import type { BlogItem, CategoryItem } from '@/types';

// ── Metadata ──────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Executive Insights & Blog | Scale ORM',
  description:
    'Deep dive into online reputation management tactics, AI search engine overviews, and enterprise growth strategies from Scale ORM intelligence team.',
  keywords: [
    'ORM blog',
    'reputation management insights',
    'AI automation blog',
    'executive ORM strategy',
    'Google AI overviews',
    'Scale ORM blog',
  ],
  alternates: { canonical: 'https://scaleorm.com/blog' },
  openGraph: {
    title: 'Executive Insights & Blog | Scale ORM',
    description:
      'ORM tactics, AI search intelligence, and enterprise growth strategies from Scale ORM.',
    url: 'https://scaleorm.com/blog',
    siteName: 'Scale ORM',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Executive Insights & Blog | Scale ORM',
    description:
      'ORM tactics, AI search intelligence, and enterprise growth strategies from Scale ORM.',
  },
};

// ── Fallback Data ─────────────────────────────────────────────────────────────

const defaultBlogs: BlogItem[] = [
  {
    _id: '1',
    title: 'How Executive ORM Suppresses Negative Search Snippets in 2026',
    slug: 'executive-orm-suppression-2026',
    author: 'Scale ORM Intelligence Team',
    excerpt:
      'Discover advanced entity authority stacking and content suppression strategies designed for Fortune 500 leadership.',
    content: '',
    publishedAt: '2026-07-20',
    readTimeMinutes: 6,
    tags: ['ORM', 'SEO', 'Executive Protection'],
    metaTitle: '',
    metaDescription: '',
    isPublished: true,
  },
  {
    _id: '2',
    title: 'Deploying Autonomous AI Voice Agents for B2B Lead Conversion',
    slug: 'deploying-autonomous-ai-voice-agents',
    author: 'AI Automation Lab',
    excerpt:
      'Learn how modern AI voice callers achieve 98% human equivalence while scaling inbound qualification across time zones.',
    content: '',
    publishedAt: '2026-07-15',
    readTimeMinutes: 8,
    tags: ['AI Agents', 'Automation', 'B2B Tech'],
    metaTitle: '',
    metaDescription: '',
    isPublished: true,
  },
  {
    _id: '3',
    title: 'Fixing Trustpilot & G2 Reviews: A Compliant Guide for Regulated Brands',
    slug: 'fixing-trustpilot-g2-reviews-guide',
    author: 'Compliance & Legal Unit',
    excerpt:
      'Step-by-step audit framework for identifying fake review spikes and enforcing platform guidelines.',
    content: '',
    publishedAt: '2026-07-10',
    readTimeMinutes: 5,
    tags: ['Trustpilot', 'Reviews', 'Compliance'],
    metaTitle: '',
    metaDescription: '',
    isPublished: true,
  },
];

// ── Page Component ────────────────────────────────────────────────────────────

export default async function BlogIndexPage() {
  const [blogs, categories] = await Promise.all([getAllBlogs(), getAllCategories()]);

  const displayBlogs = blogs.length > 0 ? blogs : defaultBlogs;
  const displayCategories: CategoryItem[] = categories.length > 0 ? categories : [];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <Badge variant="glow">Reputation &amp; AI Intelligence</Badge>
        <H1>Executive Insights &amp; Blog</H1>
        <p className="text-gray-400 text-base">
          Deep dive into online reputation management tactics, AI search engine overviews, and
          enterprise growth strategies.
        </p>
      </div>

      {/* AI Overview Callout */}
      <AISnippetBox title="Executive Search Intelligence">
        Our research lab publishes weekly briefings covering Google AI Overviews indexing, legal
        review suppression, and automated AI lead agent architecture.
      </AISnippetBox>

      {/* Interactive Search + Filter + Grid (Client Component) */}
      <BlogClientFilters blogs={displayBlogs} categories={displayCategories} />
    </div>
  );
}
