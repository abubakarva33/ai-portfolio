/**
 * Blog Detail Page — Server Component
 *
 * Statically generated for every blog article at build time.
 * generateStaticParams() fetches all blog slugs.
 * generateMetadata() provides per-article SEO metadata.
 */

import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import { getAllBlogSlugs, getBlogBySlug } from '@/lib/api-functions';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { H1, H2, Paragraph, AISnippetBox } from '@/components/ui/Typography';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import type { BlogItem } from '@/types';

// ── Static Generation ─────────────────────────────────────────────────────────

export async function generateStaticParams() {
  return getAllBlogSlugs();
}

// ── Dynamic Metadata ──────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  const title = blog?.metaTitle || blog?.title || 'Blog Article | Scale ORM';
  const description =
    blog?.metaDescription || blog?.excerpt || 'Executive insights from Scale ORM intelligence team.';
  const keywords = blog?.keywords ?? blog?.tags ?? ['ORM', 'AI', 'Scale ORM'];

  return {
    title: `${title} | Scale ORM`,
    description,
    keywords,
    alternates: { canonical: `https://scaleorm.com/blog/${slug}` },
    openGraph: {
      title: `${title} | Scale ORM`,
      description,
      url: `https://scaleorm.com/blog/${slug}`,
      siteName: 'Scale ORM',
      type: 'article',
      publishedTime: blog?.publishedAt,
      authors: blog?.author ? [blog.author] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | Scale ORM`,
      description,
    },
  };
}

// ── Fallback Data ─────────────────────────────────────────────────────────────

const fallbackArticle: BlogItem = {
  _id: 'fallback',
  slug: 'executive-orm-suppression-2026',
  title: 'How Executive ORM Suppresses Negative Search Snippets in 2026',
  author: 'Scale ORM Intelligence Team',
  publishedAt: '2026-07-20',
  readTimeMinutes: 6,
  excerpt:
    'Discover advanced entity authority stacking and content suppression strategies designed for Fortune 500 leadership.',
  content: `## Executive Summary
Online Reputation Management (ORM) in 2026 requires more than basic SEO link building. With Search Engines integrating generative AI overviews and instant answer cards, defending executive digital footprints mandates active Entity Authority Stacking.

### 1. Entity Authority Stacking
By registering structured JSON-LD schemas across verified social properties, legal entity databases, and industry media hubs, search algorithms prioritize authoritative verified assets over unverified forum posts or news blogs.

### 2. Legal Suppression & Platform Escalation
When false or defamatory content violates publisher terms or local defamation standards, formal legal notices combined with DMCA and privacy right-to-be-forgotten requests yield direct removal or de-indexing.

### 3. Continuous Monitoring & AI Alerting
Proactive AI sentiment tracking monitors brand mentions 24/7 across search engines, review platforms (Trustpilot, G2, Google Business), and social networks, preventing negative sentiment spikes before they reach page 1.`,
  tags: ['ORM', 'SEO', 'Executive Protection', 'AI Search'],
  metaTitle: 'How Executive ORM Suppresses Negative Search Snippets in 2026 | Scale ORM',
  metaDescription:
    'Advanced entity authority stacking and content suppression strategies for Fortune 500 executives.',
  isPublished: true,
};

// ── Page Component ────────────────────────────────────────────────────────────

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);
  const article = blog ?? fallbackArticle;

  const renderContent = (content: string) =>
    content.split('\n\n').map((paragraph, idx) => {
      if (paragraph.trim().startsWith('## ')) {
        return (
          <H2 key={idx} className="text-2xl pt-4">
            {paragraph.replace('## ', '')}
          </H2>
        );
      }
      if (paragraph.trim().startsWith('### ')) {
        return (
          <h3 key={idx} className="text-xl font-bold text-indigo-300 pt-2">
            {paragraph.replace('### ', '')}
          </h3>
        );
      }
      return <Paragraph key={idx}>{paragraph}</Paragraph>;
    });

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      {/* Back Link */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Blog &amp; Insights
      </Link>

      {/* Article Header */}
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {article.tags?.map((t) => (
            <Badge key={t} variant="glow">
              {t}
            </Badge>
          ))}
        </div>

        <H1>{article.title}</H1>

        <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 pt-2 border-b border-white/10 pb-6">
          <span className="flex items-center gap-1 font-semibold text-white">
            <User className="w-4 h-4 text-indigo-400" />
            {article.author}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4 text-sky-400" />
            {article.publishedAt ? new Date(article.publishedAt).toLocaleDateString() : 'Recent'}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4 text-purple-400" />
            {article.readTimeMinutes || 5} min read
          </span>
        </div>
      </div>

      {/* AI Overview Callout */}
      <AISnippetBox title="Executive AI Summary">{article.excerpt}</AISnippetBox>

      {/* Article Body */}
      <div className="prose prose-invert max-w-none text-gray-200 leading-relaxed space-y-6 text-base font-normal">
        {renderContent(article.content)}
      </div>

      {/* Article Footer CTA */}
      <div className="glass-panel p-8 rounded-2xl border border-indigo-500/30 text-center space-y-4 mt-12">
        <H2 className="text-2xl">Need Executive Reputation Management?</H2>
        <Paragraph className="max-w-md mx-auto text-xs">
          Schedule a private 1-on-1 reputation audit with our principal security analysts.
        </Paragraph>
        <Link href="/contact">
          <Button variant="gradient" size="md">
            Request Confidential Audit
          </Button>
        </Link>
      </div>
    </article>
  );
}
