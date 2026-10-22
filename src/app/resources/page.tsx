import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { H1, H2, Paragraph } from '@/components/ui/Typography';
import { Card } from '@/components/ui/Card';
import { ArrowRight, BookOpen, FileText, HelpCircle, Wrench } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Resources | Scale ORM — ORM Guides, Blog & Tools',
  description: 'Free ORM resources: reputation management guides, expert blog, glossary, and tools to protect your brand online.',
  alternates: { canonical: 'https://scaleorm.com/resources' },
  openGraph: {
    title: 'Resources | Scale ORM',
    description: 'Free ORM resources: reputation management guides, expert blog, glossary, and tools.',
    url: 'https://scaleorm.com/resources',
    siteName: 'Scale ORM',
    type: 'website',
  },
};

const resources = [
  {
    icon: BookOpen,
    title: 'Blog & Insights',
    href: '/blog',
    description: 'Weekly deep-dives into ORM strategy, AI search overviews, and enterprise growth tactics from our intelligence team.',
    badge: 'Updated Weekly',
    color: 'indigo',
    cta: 'Read the Blog',
  },
  {
    icon: FileText,
    title: 'Case Studies',
    href: '/case-studies',
    description: 'Documented real-world transformations showing exactly how we protect brands — with measurable before & after results.',
    badge: 'Real Results',
    color: 'purple',
    cta: 'View Case Studies',
  },
  {
    icon: HelpCircle,
    title: 'Frequently Asked Questions',
    href: '/#faq',
    description: 'Answers to the most common questions about online reputation management, AI automation, and our process.',
    badge: '50+ Questions',
    color: 'sky',
    cta: 'Read FAQ',
  },
  {
    icon: Wrench,
    title: 'ORM Glossary',
    href: '#glossary',
    description: 'The definitive glossary of 100+ online reputation management, SEO, and AI search terms — explained in plain English.',
    badge: '100+ Terms',
    color: 'emerald',
    cta: 'Browse Glossary',
  },
];

const colorMap: Record<string, { border: string; text: string; bg: string; badge: string }> = {
  indigo: { border: 'border-indigo-500/30', text: 'text-indigo-400', bg: 'bg-indigo-500/10', badge: 'bg-indigo-500/10 border-indigo-500/30 text-indigo-400' },
  purple: { border: 'border-purple-500/30', text: 'text-purple-400', bg: 'bg-purple-500/10', badge: 'bg-purple-500/10 border-purple-500/30 text-purple-400' },
  sky: { border: 'border-sky-500/30', text: 'text-sky-400', bg: 'bg-sky-500/10', badge: 'bg-sky-500/10 border-sky-500/30 text-sky-400' },
  emerald: { border: 'border-emerald-500/30', text: 'text-emerald-400', bg: 'bg-emerald-500/10', badge: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' },
};

const glossaryTerms = [
  { term: 'SERP', def: 'Search Engine Results Page — the page Google shows when you search for something.' },
  { term: 'Suppression', def: 'Pushing negative content to page 2+ of Google so it is rarely seen.' },
  { term: 'Entity Authority Stacking', def: 'Building multiple high-DA positive profiles that dominate page 1 for your name.' },
  { term: 'Review Velocity', def: 'The rate at which new reviews accumulate on a platform — used to detect fake review spikes.' },
  { term: 'Share of Search', def: 'The percentage of search results on your page 1 that are positive, neutral, or negative.' },
  { term: 'AI Overview', def: "Google's AI-generated summary shown above search results — increasingly important for brand perception." },
  { term: 'De-indexing', def: "Removing a page from Google's index so it cannot appear in search results." },
  { term: 'White-Hat ORM', def: 'Reputation management using only ethical, legal, and Google-compliant methods.' },
  { term: 'Crisis PR', def: 'Rapid response communications strategy for managing a public reputation emergency.' },
  { term: 'Online Defamation', def: 'False statements published online that damage a person or brand\'s reputation — potentially legally actionable.' },
  { term: 'Mugshot Sites', def: 'Websites that publish arrest records and booking photos, often used for extortion.' },
  { term: 'Publisher Outreach', def: 'Contacting the owner of a website to request removal of damaging content.' },
];

export default function ResourcesPage() {
  return (
    <div className="space-y-16 pb-24">
      {/* Hero */}
      <section className="pt-32 pb-12 text-center px-4">
        <Badge variant="glow" className="mb-5">Knowledge Center</Badge>
        <H1 className="mb-5">
          Free Resources to Master{' '}
          <span className="font-hero-serif font-normal italic">Your Reputation</span>
        </H1>
        <Paragraph className="max-w-2xl mx-auto">
          Everything you need to understand, protect, and improve your online reputation — guides, case studies, tools, and expert insights from our team.
        </Paragraph>
      </section>

      {/* Resource Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {resources.map((r) => {
            const Icon = r.icon;
            const colors = colorMap[r.color];
            return (
              <Link key={r.title} href={r.href} className={`block glass-card rounded-2xl p-6 border ${colors.border} hover:shadow-lg transition-all duration-300 group`}>
                <div className={`w-11 h-11 rounded-2xl ${colors.bg} border ${colors.border} flex items-center justify-center ${colors.text} mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full border text-[10px] font-bold uppercase tracking-wider mb-3 ${colors.badge}`}>
                  {r.badge}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{r.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">{r.description}</p>
                <span className={`text-sm font-semibold ${colors.text} inline-flex items-center gap-1 group-hover:gap-2 transition-all`}>
                  {r.cta} <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ORM Glossary */}
      <section id="glossary" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <Badge variant="primary" className="mb-4">ORM Glossary</Badge>
          <H2>Essential Reputation Management Terms</H2>
          <Paragraph className="mt-3">A quick-reference guide to the language of online reputation management.</Paragraph>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {glossaryTerms.map((g) => (
            <Card key={g.term} variant="glass" className="p-5 border-white/10">
              <h3 className="text-sm font-extrabold text-indigo-400 mb-1.5">{g.term}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">{g.def}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card variant="glass" className="p-10 text-center border-indigo-500/30 bg-gradient-to-r from-indigo-950/40 via-purple-950/20 to-sky-950/40">
          <H2 className="mb-4">Ready to Protect Your Brand?</H2>
          <Paragraph className="mb-8 max-w-xl mx-auto">
            Stop reading about ORM — let our team do it for you. Get a free, comprehensive reputation audit in 24 hours.
          </Paragraph>
          <Link href="/free-audit">
            <button className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-violet-600 text-white font-semibold shadow-lg shadow-indigo-500/30 hover:scale-105 transition-transform">
              Get Free Reputation Audit <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </Card>
      </section>
    </div>
  );
}
