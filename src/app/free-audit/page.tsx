import React from 'react';
import { Badge } from '@/components/ui/Badge';
import { H1, H2, Paragraph } from '@/components/ui/Typography';
import { CheckCircle2, Search, Shield, Clock, Zap, AlertTriangle } from 'lucide-react';
import { FreeAuditForm } from './FreeAuditForm';

const auditCovers = [
  { icon: Search, title: 'Google SERP Analysis', desc: 'Full Page 1-3 threat mapping for your brand name, executive name, and key phrases.' },
  { icon: Shield, title: 'Review Platform Audit', desc: 'Google, Trustpilot, G2, Clutch, Glassdoor, Yelp — rating threats and fake review detection.' },
  { icon: AlertTriangle, title: 'Social Media Scan', desc: 'Negative mentions, viral threads, and competitor smear content across all major platforms.' },
  { icon: Zap, title: 'News & Media Check', desc: 'Defamatory articles, outdated press, and news that is actively damaging your brand.' },
  { icon: Clock, title: 'Reputation Score', desc: 'A proprietary 0-100 brand health score benchmarked against your industry average.' },
  { icon: CheckCircle2, title: 'Action Plan', desc: 'A custom 30-60-90 day ORM roadmap — no fluff, just specific steps to fix what we find.' },
];

export default function FreeAuditPage() {

  return (
    <div className="space-y-16 pb-24">
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/10 via-transparent to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider mb-5">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                Your Reputation Is Being Indexed Right Now
              </div>
              <H1 className="mb-6">
                Get Your Free{' '}
                <span className="font-hero-serif font-normal italic">Reputation Audit</span>
                {' '}— In 24 Hours
              </H1>
              <Paragraph className="text-lg mb-6">
                In 24 hours, our senior ORM specialists will deliver a comprehensive threat analysis of
                every attack on your brand across Google, review platforms, social media, and news
                outlets — completely free and 100% confidential.
              </Paragraph>
              <div className="flex flex-wrap gap-3 mb-8">
                {['No credit card required', '100% confidential NDA', 'Delivered within 24hrs', 'Senior specialist review'].map(item => (
                  <span key={item} className="inline-flex items-center gap-1.5 text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" /> {item}
                  </span>
                ))}
              </div>
              {/* What the audit covers */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {auditCovers.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex items-start gap-3 p-3 rounded-xl bg-white/3 border border-white/8">
                      <Icon className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-white">{item.title}</p>
                        <p className="text-xs text-gray-400 mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right form */}
            <div>
              <FreeAuditForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
