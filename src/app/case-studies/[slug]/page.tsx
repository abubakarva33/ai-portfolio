import React, { use } from 'react';
import Link from 'next/link';
import { getCaseStudyBySlug, getAllCaseStudies } from '@/lib/api-functions';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { H1, H2, Paragraph, AISnippetBox } from '@/components/ui/Typography';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const studies = await getAllCaseStudies();
  return studies.map((cs) => ({
    slug: cs.slug,
  }));
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const cs = await getCaseStudyBySlug(slug);

  if (!cs) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Back Link */}
      <Link href="/case-studies" className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors">
        <ArrowLeft className="w-4 h-4" /> Back to Case Studies
      </Link>

      {/* Header */}
      <div className="space-y-4">
        <Badge variant="glow">{cs.clientName}</Badge>
        <H1>{cs.title}</H1>
      </div>

      {/* AI Summary */}
      <AISnippetBox title="Executive Case Overview">
        {cs.challenge}
      </AISnippetBox>

      {/* Results Highlight Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {cs.results?.map((res: { value: string | number; label: string }, idx: number) => (
          <Card key={idx} variant="glass" className="p-6 text-center border-indigo-500/30">
            <p className="text-2xl md:text-3xl font-extrabold text-gradient">{res.value}</p>
            <p className="text-xs font-semibold text-gray-400 mt-1 uppercase tracking-wider">{res.label}</p>
          </Card>
        ))}
      </div>

      {/* Challenge & Solution Content */}
      <div className="space-y-8 glass-panel p-8 rounded-2xl border border-white/10">
        <div className="space-y-3">
          <H2 className="text-2xl text-rose-400">The Challenge</H2>
          <Paragraph className="text-gray-200">{cs.challenge}</Paragraph>
        </div>

        <div className="pt-6 border-t border-white/10 space-y-3">
          <H2 className="text-2xl text-emerald-400">The Strategy & Execution</H2>
          <Paragraph className="text-gray-200">{cs.solution}</Paragraph>
        </div>
      </div>

      {/* CTA Box */}
      <div className="glass-panel p-8 rounded-2xl border border-indigo-500/30 text-center space-y-4">
        <H2 className="text-2xl">Achieve Similar Brand Transformation</H2>
        <Paragraph className="max-w-md mx-auto text-xs">
          Schedule a private strategy briefing with our lead reputation team.
        </Paragraph>
        <Link href="/contact">
          <Button variant="gradient" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
            Request Confidential Audit
          </Button>
        </Link>
      </div>
    </div>
  );
}
