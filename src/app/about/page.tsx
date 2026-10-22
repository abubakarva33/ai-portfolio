import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { H1, H2, H3, Paragraph } from '@/components/ui/Typography';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import {
  Shield, Globe, Users, Award, Target, Clock, ArrowRight,
  CheckCircle2, MapPin, TrendingUp, Zap, ExternalLink
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Scale ORM | Global Reputation Management Agency',
  description:
    'Scale ORM is a premium global reputation management agency founded by senior ORM and AI specialists. Learn our mission, team, values and global office presence.',
  keywords: ['about Scale ORM', 'ORM agency team', 'reputation management company', 'who is Scale ORM'],
  alternates: { canonical: 'https://scaleorm.com/about' },
  openGraph: {
    title: 'About Scale ORM | Global Reputation Management Agency',
    description: "Premium global ORM agency. Learn our mission, team, and approach to protecting the world's most valuable brands.",
    url: 'https://scaleorm.com/about',
    siteName: 'Scale ORM',
    type: 'website',
  },
};

const timeline = [
  { year: '2018', event: 'Founded in New York by former Big 4 PR and digital intelligence professionals.' },
  { year: '2019', event: 'Expanded to London. First 100 enterprise clients protected. Launched AI monitoring division.' },
  { year: '2020', event: 'Pioneered AI-driven SERP suppression at scale. 99.4% success rate established.' },
  { year: '2021', event: 'Opened Dubai & Singapore offices. Reached $500M+ in brand value protected.' },
  { year: '2022', event: 'Launched AI Voice Agent suite. 240%+ lead conversion improvement for enterprise clients.' },
  { year: '2023', event: 'Became the first ORM agency to deploy LLM-powered reputation monitoring across 50+ platforms.' },
  { year: '2024', event: 'Serving 500+ global brands. Expanded to 45 countries. Launched Website Engineering division.' },
  { year: '2026', event: 'Launch of next-generation AI Reputation Autopilot — autonomous brand protection, 24/7.' },
];

const values = [
  { icon: Shield, title: 'Absolute Confidentiality', desc: 'Every engagement is protected under an NDA. Your crisis stays private — always.', color: 'indigo' },
  { icon: Target, title: 'Results Guaranteed', desc: 'We put our money where our mouth is. Measurable SERP results in 45 days or we work for free.', color: 'purple' },
  { icon: CheckCircle2, title: 'White-Hat Only', desc: 'Zero black-hat tactics, ever. Full compliance with US, UK, EU & UAE law.', color: 'emerald' },
  { icon: Globe, title: 'Global Perspective', desc: 'Deep expertise across 45+ countries, languages, and regulatory environments.', color: 'sky' },
  { icon: Zap, title: 'AI-First Approach', desc: 'Every strategy is augmented by proprietary AI — faster, smarter, more precise.', color: 'amber' },
  { icon: Users, title: 'Human Expertise', desc: 'AI-powered but human-led. Senior strategists on every account.', color: 'rose' },
];

const colorMap: Record<string, string> = {
  indigo: 'bg-indigo-500/10 border-indigo-500/30 text-indigo-400',
  purple: 'bg-purple-500/10 border-purple-500/30 text-purple-400',
  emerald: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400',
  sky: 'bg-sky-500/10 border-sky-500/30 text-sky-400',
  amber: 'bg-amber-500/10 border-amber-500/30 text-amber-400',
  rose: 'bg-rose-500/10 border-rose-500/30 text-rose-400',
};

const offices = [
  { city: 'New York', country: 'USA', specialty: 'HQ · Executive ORM · Finance & Legal' },
  { city: 'London', country: 'UK', specialty: 'EMEA Hub · Corporate PR · Media Law' },
  { city: 'Dubai', country: 'UAE', specialty: 'MENA Region · Sovereign Fund Defense' },
  { city: 'Singapore', country: 'APAC', specialty: 'Asia Pacific · Tech & SaaS' },
];

export default function AboutPage() {
  return (
    <div className="space-y-20 pb-24">
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 text-center px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/30 via-transparent to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <Badge variant="glow" className="mb-5">Our Story</Badge>
          <H1 className="mb-6">The Agency Built to Protect the World&apos;s Most Valuable Brands</H1>
          <Paragraph className="text-lg max-w-2xl mx-auto mb-8">
            Founded by former Big 4 PR executives and AI engineers, Scale ORM was built with one mission:
            give enterprise brands and executives the same reputation firepower that only heads of state
            and Fortune 10 companies used to have access to.
          </Paragraph>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/free-audit">
              <Button variant="gradient" size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                Get Free Audit
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg">Contact Our Team</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '500+', label: 'Enterprise Clients Protected' },
            { value: '99.4%', label: 'Suppression Success Rate' },
            { value: '45', label: 'Countries Worldwide' },
            { value: '$500M+', label: 'Brand Value Defended' },
          ].map((s) => (
            <Card key={s.label} variant="glass" className="p-6 text-center border-indigo-500/20">
              <p className="text-3xl font-extrabold text-gradient mb-1">{s.value}</p>
              <p className="text-xs text-gray-400 uppercase tracking-wider">{s.label}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="primary" className="mb-4">Our Mission</Badge>
            <H2 className="mb-6">We Believe Every Brand Deserves a Fair Hearing</H2>
            <Paragraph className="mb-4">
              The internet has a memory problem — it remembers the bad things far longer than the good.
              A single defamatory article, a coordinated fake review campaign, or a competitor&apos;s smear
              can erase years of hard-won reputation in days.
            </Paragraph>
            <Paragraph className="mb-4">
              Scale ORM exists to rebalance that equation. We combine the precision of AI with the
              judgment of senior human strategists to deliver sustainable, ethical, and legally
              compliant reputation solutions.
            </Paragraph>
            <Paragraph>
              From Fortune 500 CEOs to emerging market disruptors, we protect the people and brands
              who are building the world&apos;s future — and we take that responsibility seriously.
            </Paragraph>
          </div>
          <div className="space-y-4">
            <div className="glass-card rounded-2xl p-6 border border-indigo-500/20">
              <div className="flex items-center gap-3 mb-3">
                <TrendingUp className="w-5 h-5 text-indigo-400" />
                <h3 className="font-bold text-white">What We Fight Against</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-400">
                {['Defamatory news articles ranking on Page 1', 'Coordinated fake review attacks', 'Competitor smear campaigns on social media', 'Wikipedia vandalism and misinformation', 'Mugshot & arrest record sites', 'Legacy forum posts and outdated content'].map(item => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5">✕</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-card rounded-2xl p-6 border border-emerald-500/20">
              <div className="flex items-center gap-3 mb-3">
                <Shield className="w-5 h-5 text-emerald-400" />
                <h3 className="font-bold text-white">What We Build Instead</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-400">
                {['High-authority positive content on Page 1', '4.9★+ review profiles across all platforms', 'Executive thought leadership & PR coverage', 'Clean, credible Wikipedia presence', 'Legal removal of outdated/false content', 'AI-monitored ongoing brand protection'].map(item => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="glow" className="mb-4">Our Values</Badge>
          <H2>Principles We Never Compromise</H2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {values.map((v) => {
            const Icon = v.icon;
            const colors = colorMap[v.color];
            return (
              <Card key={v.title} variant="glass" className="p-6 border-white/10">
                <div className={`w-11 h-11 rounded-2xl border flex items-center justify-center mb-4 ${colors}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <H3 className="text-lg mb-2">{v.title}</H3>
                <Paragraph className="text-sm">{v.desc}</Paragraph>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="primary" className="mb-4">Company Timeline</Badge>
          <H2>Built Over Years. Trusted by Hundreds.</H2>
        </div>
        <div className="relative">
          <div className="absolute left-16 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/0 via-indigo-500/40 to-indigo-500/0" />
          <div className="space-y-6">
            {timeline.map((item) => (
              <div key={item.year} className="flex items-start gap-6 relative">
                <div className="w-16 shrink-0 text-right">
                  <span className="text-sm font-extrabold text-indigo-400">{item.year}</span>
                </div>
                <div className="w-3 h-3 rounded-full bg-indigo-500 border-2 border-indigo-900 shrink-0 mt-1 relative z-10" />
                <p className="text-sm text-gray-300 leading-relaxed flex-1 pt-0.5">{item.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="glow" className="mb-4">Global Presence</Badge>
          <H2>Our Offices Worldwide</H2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {offices.map((o) => (
            <Card key={o.city} variant="glass" className="p-6 border-indigo-500/20">
              <MapPin className="w-5 h-5 text-indigo-400 mb-3" />
              <h3 className="text-xl font-bold text-white">{o.city}</h3>
              <p className="text-xs font-semibold text-indigo-400 mb-2">{o.country}</p>
              <p className="text-xs text-gray-400">{o.specialty}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card variant="glass" className="p-10 text-center border-indigo-500/30 bg-gradient-to-r from-indigo-950/40 via-purple-950/20 to-sky-950/40">
          <H2 className="mb-4">Ready to Work with the Best?</H2>
          <Paragraph className="mb-8 max-w-xl mx-auto">
            Get a free, confidential reputation audit and speak directly with a senior strategist who has protected brands like yours.
          </Paragraph>
          <Link href="/free-audit">
            <Button variant="gradient" size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
              Get Your Free Reputation Audit
            </Button>
          </Link>
        </Card>
      </section>
    </div>
  );
}
