/**
 * Service Detail Page — Server Component
 *
 * Flattened routing structure: /services/[slug]
 * Statically generated at build time for every service.
 */

import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  getAllServiceStaticParams,
  getServiceBySlug,
  getFAQsByService,
  getTestimonials,
  getAllIndustries,
} from '@/lib/api-functions';
import { Card } from '@/components/ui/Card';
import { H2, H3, Paragraph } from '@/components/ui/Typography';
import { FAQAccordion } from '@/components/ui/FAQAccordion';
import {
  Shield,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Star,
  Building2,
} from 'lucide-react';
import type { FullServiceDetail, TestimonialItem, FAQItem } from '@/types';

// ── Static Generation ─────────────────────────────────────────────────────────

export async function generateStaticParams() {
  return getAllServiceStaticParams();
}

// ── Dynamic Metadata ──────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  const title = service?.metaTitle || service?.title || 'Service Detail | Scale ORM';
  const description =
    service?.metaDescription ||
    service?.summary ||
    'Enterprise reputation management and AI automation service by Scale ORM.';
  const keywords = service?.keywords ?? [
    service?.title ?? 'reputation management',
    'Scale ORM',
    'ORM service',
  ];
  const canonical = `https://scaleorm.com/services/${slug}`;

  return {
    title: `${title} | Scale ORM`,
    description,
    keywords,
    alternates: { canonical },
    openGraph: {
      title: `${title} | Scale ORM`,
      description,
      url: canonical,
      siteName: 'Scale ORM',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | Scale ORM`,
      description,
    },
  };
}

// ── Fallback Data ─────────────────────────────────────────────────────────────

const fallbackService: FullServiceDetail = {
  _id: 'fallback',
  title: 'Google Business Profile Repair & Suppression',
  slug: 'google-business-repair',
  category: 'reputation-management',
  summary: 'Neutralize policy-violating negative reviews, boost local pack map ratings, and protect brand equity.',
  heroTitle: 'Enterprise Google Business Profile Repair & Suppression',
  heroSubtitle: 'Neutralize policy-violating negative reviews, boost local pack map ratings, and protect brand equity.',
  contentIntro:
    'Scale ORM provides turnkey Google Business Profile repair and negative review suppression for enterprise brands and high-net-worth executives across the USA, UK, Europe, and UAE. Our legal compliance specialists and entity authority engineers flag invalid reviews, deploy positive review velocity strategies, and optimize your local search pack footprint.',
  whatsIncluded: [
    'Comprehensive 360° Google Business Profile audit.',
    'Terms of Service (ToS) policy violation review flagging.',
    'Legal cease-and-desist escalations for defamatory complaints.',
    'Entity authority stacking to elevate positive brand assets.',
    'Automated customer acquisition review invite workflows.',
    '24/7 AI sentiment monitoring and instant crisis alerts.',
  ],
  howItWorks: [
    { stepNumber: 1, title: 'Confidential Audit', description: 'We map every negative review, competitor smear attempt, and policy violation.' },
    { stepNumber: 2, title: 'Strategic Setup', description: 'Configure JSON-LD schemas and legal escalation dossiers for Google support.' },
    { stepNumber: 3, title: 'Review Collection', description: 'Deploy automated post-service review invites to genuine satisfied clients.' },
    { stepNumber: 4, title: 'Policy Response', description: 'Submit formal removal requests for policy-violating negative feedback.' },
    { stepNumber: 5, title: 'Executive Reporting', description: 'Weekly dashboard updates showing star rating growth and suppression metrics.' },
  ],
  whyItMatters:
    'Over 87% of high-net-worth consumers research Google Business and local reviews before engaging a professional service or enterprise platform. A drop of just 0.5 stars can result in a 30% reduction in inbound organic pipeline.',
  ourApproach:
    'We operate with 100% white-hat compliance, utilizing official platform guidelines, legal privacy protections, and natural entity authority stacking. No black-hat spam or temporary fixes.',
  metaTitle: 'Google Business Profile Repair & Suppression | Scale ORM',
  metaDescription: 'Neutralize policy-violating negative reviews, boost local pack map ratings, and protect brand equity with Scale ORM.',
};

const fallbackFaqs: FAQItem[] = [
  {
    _id: '1',
    question: 'Is Google Business review removal guaranteed?',
    answer:
      'Google removes reviews that violate their Terms of Service (defamation, fake accounts, hate speech, off-topic). For non-violating negative reviews, we implement strategic review suppression and positive volume acquisition to dilute their impact.',
  },
  {
    _id: '2',
    question: 'How long does the repair process take?',
    answer:
      'Policy violation reviews are often removed within 7 to 21 business days. Complete rating recovery to 4.8+ stars typically occurs within 45 to 90 days.',
  },
  {
    _id: '3',
    question: 'Is our engagement kept strictly confidential?',
    answer:
      'Yes. All engagements are protected under non-disclosure agreements (NDAs) signed prior to auditing.',
  },
];

const fallbackTestimonials: TestimonialItem[] = [
  {
    _id: '1',
    clientName: 'Marcus Sterling',
    clientRole: 'Chief Executive Officer',
    clientCompany: 'Sterling Financial Group',
    rating: 5,
    quote:
      'Scale ORM removed 18 fake negative reviews off our Google Business Profile in 3 weeks. Our local map leads immediately jumped 45%.',
  },
];

const defaultIndustryBadges = [
  'SaaS & Tech',
  'Healthcare & Clinics',
  'Fintech & Banking',
  'Legal & Law Firms',
  'Real Estate & Luxury',
];

// ── Page Component ────────────────────────────────────────────────────────────

export default async function ServiceDetailTemplatePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const [serviceDetail, faqs, testimonials, industries] = await Promise.all([
    getServiceBySlug(slug),
    getFAQsByService(slug),
    getTestimonials(),
    getAllIndustries(),
  ]);

  const service = serviceDetail ?? fallbackService;
  const displayFaqs = faqs.length > 0 ? faqs : fallbackFaqs;
  const displayTestimonials = testimonials.length > 0 ? testimonials : fallbackTestimonials;
  const displayIndustries =
    industries.length > 0
      ? industries.slice(0, 5).map((i) => i.name)
      : defaultIndustryBadges;
  const relatedServices = service.relatedServices || [];

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* 1. HERO SECTION (Dark theme to match Services/Pricing) */}
      <section
        className="relative w-full flex flex-col items-center justify-center rounded-br-3xl rounded-bl-3xl overflow-hidden px-6 py-24 text-center mx-auto"
        style={{
          backgroundColor: '#0a0a0ae6',
          backgroundImage: 'linear-gradient(#30ff9700 30%, #30ff9754)',
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          className="absolute inset-0 w-full h-full object-cover opacity-60 z-0 pointer-events-none mix-blend-screen"
        >
          <source src="/videos/Abstract_objects.mp4" type="video/mp4" />
        </video>

        <Image
          src="/star-bg.webp"
          alt=""
          width={384}
          height={384}
          className="absolute -top-3 -right-3 w-56 sm:w-72 md:w-80 lg:w-96 pointer-events-none z-10 opacity-100 object-contain"
        />
        <Image
          src="/box-bg.webp"
          alt=""
          width={384}
          height={384}
          className="absolute -bottom-6 -left-6 w-48 sm:w-64 md:w-72 lg:w-80 pointer-events-none z-10 opacity-100 object-contain"
        />

        <div className="relative z-20 max-w-4xl mx-auto flex flex-col items-center">
          <div className="mb-5">
            <Link href="/" className="inline-block">
              <Image src="/images/logo.webp" alt="Logo" width={200} height={56} className="h-10 md:h-14 w-auto object-contain" />
            </Link>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-xs font-medium text-gray-300 mb-8 flex-wrap justify-center">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            <span className="text-white font-semibold truncate max-w-[200px]">{service.title}</span>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-6">
            <Shield className="w-4 h-4" />
            Enterprise Solution
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            {service.heroTitle || service.title}
          </h1>

          <p className="text-gray-300 text-base md:text-lg mt-6 max-w-3xl leading-relaxed text-center">
            {service.heroSubtitle || service.summary}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 relative z-20 w-full sm:w-auto">
            <Link href="/contact" className="px-8 py-4 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition-all shadow-lg hover:-translate-y-1 w-full sm:w-auto">
              Get Custom Pricing
            </Link>
            <Link href="/contact?mode=strategy" className="px-8 py-4 rounded-xl bg-white/10 text-white font-semibold border border-white/20 hover:bg-white/20 transition-all hover:-translate-y-1 w-full sm:w-auto">
              Talk to Specialist
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content Wrapper */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32 py-24">
        {/* 3. WHAT WE DO (Why it matters & Our Approach) */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card variant="outline" className="p-10 space-y-6 bg-white border border-gray-200 shadow-sm hover:border-indigo-300 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600">
              <Star className="w-6 h-6" />
            </div>
            <H2 className="text-2xl font-bold text-gray-900">Why It Matters</H2>
            <Paragraph className="text-gray-600 leading-relaxed">
              {service.whyItMatters}
            </Paragraph>
          </Card>

          <Card variant="outline" className="p-10 space-y-6 bg-white border border-gray-200 shadow-sm hover:border-sky-300 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-sky-50 flex items-center justify-center text-sky-600">
              <Shield className="w-6 h-6" />
            </div>
            <H2 className="text-2xl font-bold text-gray-900">Our Compliant Approach</H2>
            <Paragraph className="text-gray-600 leading-relaxed">
              {service.ourApproach}
            </Paragraph>
          </Card>
        </section>

        {/* 4. HOW IT WORKS */}
        <section className="space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-sm uppercase tracking-[0.2em] text-emerald-600 font-semibold">Execution Roadmap</h2>
            <H2 className="text-3xl md:text-4xl font-bold text-gray-900">How It Works</H2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            <div className="hidden md:block absolute top-8 left-10 right-10 h-0.5 bg-gradient-to-r from-gray-200/0 via-gray-200 to-gray-200/0 z-0"></div>

            {service.howItWorks?.map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left space-y-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-xl font-bold text-emerald-600 mx-auto md:mx-0 shrink-0">
                  0{step.stepNumber || idx + 1}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. WHAT'S INCLUDED */}
        <section className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-sm uppercase tracking-[0.2em] text-indigo-600 font-semibold">Full Scope</h2>
            <H2 className="text-3xl md:text-4xl font-bold text-gray-900">What&apos;s Included</H2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.whatsIncluded?.map((item, idx) => (
              <Card key={idx} variant="outline" className="p-6 bg-white border border-gray-200 hover:border-gray-300 shadow-sm flex items-start gap-4 transition-all duration-300">
                <CheckCircle2 className="w-6 h-6 text-indigo-600 shrink-0" />
                <p className="text-gray-700 leading-relaxed font-medium">{item}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* 6. WHO IT'S FOR & 7. WHY SCALE ORM */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <section className="space-y-8 p-8 md:p-12 rounded-3xl bg-gray-50 border border-gray-100">
            <div className="space-y-2">
              <H2 className="text-2xl md:text-3xl font-bold text-gray-900">Industries Benefiting</H2>
              <p className="text-gray-600 text-sm">Discreet, specialized solutions for high-stakes sectors.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {displayIndustries.map((ind, i) => (
                <div key={i} className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-gray-200 shadow-sm text-sm font-medium text-gray-800">
                  <Building2 className="w-4 h-4 text-indigo-600" />
                  {ind}
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-8 p-8 md:p-12 rounded-3xl bg-indigo-50/50 border border-indigo-100">
            <div className="space-y-2">
              <h2 className="text-sm uppercase tracking-[0.2em] text-indigo-600 font-semibold">Proven Impact</h2>
              <H2 className="text-2xl md:text-3xl font-bold text-gray-900">Client Success</H2>
            </div>

            {displayTestimonials.slice(0, 1).map((t, i) => (
              <div key={i} className="space-y-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-lg text-gray-800 italic leading-relaxed font-medium">
                  &quot;{t.quote}&quot;
                </p>
                <div className="flex items-center gap-4 pt-4 border-t border-indigo-200/50">
                  <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center font-bold text-white text-lg">
                    {t.clientName?.charAt(0) || 'C'}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{t.clientName}</p>
                    <p className="text-sm text-gray-600">
                      {t.clientRole} — {t.clientCompany}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>

        {/* 8. FAQ */}
        <section className="space-y-12 mx-auto">
          <div className="text-center space-y-4">
            <h2 className="text-sm uppercase tracking-[0.2em] text-indigo-600 font-semibold">Clarity</h2>
            <H2 className="text-3xl md:text-4xl font-bold text-gray-900">Frequently Asked Questions</H2>
          </div>
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
            <FAQAccordion faqs={displayFaqs} defaultOpenIndex={0} />
          </div>
        </section>

        {/* 9. CUSTOM PRICING CTA */}
        <section className="relative w-full py-20 px-6 overflow-hidden mt-16 border-t border-gray-200 bg-gray-900 rounded-3xl">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/40 via-gray-900 to-gray-900 z-0" />
          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
              Ready to secure your legacy?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto font-light">
              Schedule a confidential consultation with our reputation architects. We&apos;ll perform a complimentary diagnostic audit of your digital footprint.
            </p>
            <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-gray-900 font-semibold hover:bg-gray-100 transition-all hover:-translate-y-1"
              >
                Request Confidential Audit <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/10 transition-all hover:-translate-y-1"
              >
                View Pricing Logic
              </Link>
            </div>
          </div>
        </section>

        {/* 10. RELATED SERVICES */}
        {relatedServices.length > 0 && (
          <section className="space-y-10 pt-10 border-t border-gray-100">
            <div className="flex items-center justify-between">
              <H2 className="text-2xl font-bold text-gray-900">Related Services</H2>
              <Link href="/services" className="text-indigo-600 font-semibold hover:text-indigo-700 text-sm flex items-center gap-1 group">
                View All Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServices.map((srv, idx) => (
                <Link key={idx} href={`/services/${srv.slug}`} className="block group">
                  <Card variant="outline" className="h-full p-6 bg-white border border-gray-200 group-hover:border-indigo-300 group-hover:shadow-md transition-all duration-300 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2 group-hover:text-indigo-700 transition-colors">{srv.title}</h3>
                      <p className="text-sm text-gray-600 line-clamp-2">{srv.summary}</p>
                    </div>
                    <div className="mt-4 text-xs font-semibold text-indigo-600 flex items-center gap-1 uppercase tracking-wider">
                      Explore Solution <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        )}

      </div>
    </div>
  );
}
