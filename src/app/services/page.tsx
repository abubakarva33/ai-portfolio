/**
 * Services Index Page — Server Component
 *
 * Designed with premium minimal aesthetics for a global ORM agency.
 */

import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getAllCategories, getAllServices } from '@/lib/api-functions';
import { Card } from '@/components/ui/Card';
import { H2, H3, Paragraph } from '@/components/ui/Typography';
import { FAQAccordion } from '@/components/ui/FAQAccordion';
import {
  Star,
  Briefcase,
  Share2,
  ArrowRight,
  Shield,
  Activity,
  CheckCircle,
  Globe,
  Search,
  Building,
  LineChart,
  UserCheck
} from 'lucide-react';
import type { CategoryItem, ServiceItem } from '@/types';

// ── Metadata ──────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'All Reputation Management Services | Scale ORM',
  description:
    'Explore our comprehensive reputation management services including Review Platforms, Employer Branding, and Social Presence optimization for global brands.',
  keywords: [
    'reputation management services',
    'review platform management',
    'employer branding',
    'social presence',
    'Scale ORM services',
  ],
  alternates: { canonical: 'https://scaleorm.com/services' },
};

// ── Fallback Data ─────────────────────────────────────────────────────────────

const defaultServices: ServiceItem[] = [
  {
    _id: '1',
    title: 'Google Business Profile Repair',
    slug: 'google-business-repair',
    category: 'reputation-management',
    summary: 'Clean up negative reviews and restore 5-star map pack ratings.',
    heroTitle: '',
    heroSubtitle: '',
  },
  {
    _id: '2',
    title: 'Trustpilot & G2 Rating Control',
    slug: 'trustpilot-rating-control',
    category: 'reputation-management',
    summary: 'Remove policy-violating complaints and boost review scores.',
    heroTitle: '',
    heroSubtitle: '',
  },
  {
    _id: '3',
    title: 'Executive Search News Suppression',
    slug: 'executive-search-suppression',
    category: 'reputation-management',
    summary: 'Suppress defamatory news articles to page 2+ on Google.',
    heroTitle: '',
    heroSubtitle: '',
  },
];

// ── Page Component ────────────────────────────────────────────────────────────

export default async function ServicesIndexPage() {
  const [allCategories, allServices] = await Promise.all([
    getAllCategories(),
    getAllServices(),
  ]);

  const displayServices = allServices.length > 0 ? allServices : defaultServices;

  // 1. Core Service Pillars
  const corePillars = [
    {
      id: 1,
      title: 'Review Platforms',
      subtitle: 'Business & Review Platform Reputation Management',
      description: 'Take absolute control of your brand narrative on Google, Trustpilot, Glassdoor, and specialized industry platforms to drive consumer trust and revenue.',
      icon: Star,
    },
    {
      id: 2,
      title: 'Employer Branding',
      subtitle: 'Employer & Professional Reputation Management',
      description: 'Cultivate a magnetic workplace presence across professional networks to attract top-tier talent and protect your executive leadership perception.',
      icon: Briefcase,
    },
    {
      id: 3,
      title: 'Social Presence',
      subtitle: 'Social Media Reputation Management',
      description: 'Proactively monitor and optimize your brand footprint across LinkedIn, X (Twitter), and Instagram to maintain robust digital authority.',
      icon: Share2,
    }
  ];

  // Process Steps
  const processSteps = [
    { step: '01', title: 'Diagnostic Audit & Threat Analysis', desc: 'Comprehensive scanning of search engines, social media, and deep web for vulnerabilities.' },
    { step: '02', title: 'Strategic Suppression & De-indexing', desc: 'Legal and technical removal of defamatory content, fake reviews, and unauthorized data.' },
    { step: '03', title: 'Asset Creation & Promotion', desc: 'Engineering high-authority positive assets that rank on page one to build a firewall.' },
    { step: '04', title: 'Continuous Global Monitoring', desc: '24/7 AI-driven sentiment tracking and instant alerts for emerging reputation threats.' }
  ];

  // Industries
  const industries = [
    { title: 'Corporate Executives & Founders', icon: UserCheck },
    { title: 'Financial & Legal Services', icon: LineChart },
    { title: 'Healthcare Providers', icon: Activity },
    { title: 'Global Tech & Enterprise', icon: Building },
  ];

  // FAQs
  const faqs = [
    {
      _id: 'faq1',
      question: 'How long does reputation management take?',
      answer: 'Initial suppression and review remediation often show results within 30-90 days. However, building an impenetrable digital fortress is an ongoing process that typically takes 6-12 months of sustained engineering.'
    },
    {
      _id: 'faq2',
      question: 'Can you guarantee the removal of negative articles?',
      answer: 'While we cannot guarantee the complete removal of all content from the internet (as third-party platforms have their own policies), our success rate for de-indexing, suppressing, and legally challenging defamatory content is industry-leading.'
    },
    {
      _id: 'faq3',
      question: 'Do you offer white-label services for agencies?',
      answer: 'Yes, we partner with PR firms, law practices, and marketing agencies to provide discreet, white-labeled reputation engineering for their high-net-worth and enterprise clients.'
    }
  ];

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* 1. HERO SECTION */}
      <section
        className="relative w-full flex flex-col items-center justify-center rounded-br-3xl rounded-bl-3xl overflow-hidden px-6 text-center mx-auto"
        style={{
          backgroundColor: '#0a0a0ae6',
          backgroundImage: 'linear-gradient(#30ff9700 30%, #30ff9754)',
        }}
      >
        {/* Background Video */}
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

        {/* Top-Right Star Decorative Element */}
        <Image
          src="/star-bg.webp"
          alt=""
          width={384}
          height={384}
          className="absolute -top-3 -right-3 w-56 sm:w-72 md:w-80 lg:w-96 pointer-events-none z-10 opacity-100 object-contain"
        />

        {/* Bottom-Left Box Decorative Element */}
        <Image
          src="/box-bg.webp"
          alt=""
          width={384}
          height={384}
          className="absolute -bottom-6 -left-6 w-48 sm:w-64 md:w-72 lg:w-80 pointer-events-none z-10 opacity-100 object-contain"
        />

        {/* Hero Content */}
        <div className="relative z-20 max-w-4xl mx-auto flex flex-col items-center mt-12 mb-20">
          {/* Site Logo */}
          <div className="mb-5">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo.webp"
                alt="Logo"
                width={200}
                height={56}
                className="h-10 md:h-14 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Breadcrumb Page Tracker */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-xs font-medium text-gray-300 mb-8">
            <Link href="/" className="hover:text-white transition-colors text-gray-300">
              Home
            </Link>
            <Image
              src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/67423a8542288605dea89299_CaretRight.webp"
              alt=">"
              width={12}
              height={12}
              className="w-3 h-3 opacity-60"
            />
            <span className="text-white font-semibold">Services</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            Protect & Dominate Your <br className="hidden sm:block" />
            <span className="font-serif italic font-normal text-4xl sm:text-6xl md:text-7xl text-white block mt-2">
              Digital Narrative
            </span>
          </h1>

          <p className="text-gray-300 text-base mt-6 max-w-3xl leading-relaxed text-center">
            Enterprise-grade reputation management, strategic suppression, and digital authority engineering for global brands and visionary leaders.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 relative z-20">
            <Link href="#pillars" className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-all">
              Explore Our Pillars
            </Link>
            <Link href="/contact" className="px-8 py-4 rounded-full bg-white/10 text-white font-semibold border border-white/20 hover:bg-white/20 transition-all">
              Request Confidential Audit
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content Wrapper */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32 py-24">

        {/* 2. CORE SERVICE PILLARS */}
        <section id="pillars" className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-sm uppercase tracking-[0.2em] text-indigo-600 font-semibold">Our Foundation</h2>
            <H2 className="text-3xl md:text-5xl font-bold text-gray-900">Core Reputation Management Pillars</H2>
            <p className="text-gray-600 text-lg">Comprehensive defense and proactive dominance across every dimension of your digital footprint.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {corePillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <Card key={pillar.id} variant="outline" className="p-8 flex flex-col justify-between space-y-8 bg-white border border-gray-200 hover:border-indigo-300 shadow-sm transition-all duration-500 group">
                  <div className="space-y-6">
                    <div className="w-14 h-14 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 group-hover:scale-110 group-hover:bg-indigo-100 transition-all duration-500">
                      <Icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-widest text-indigo-600 mb-2 font-medium">{pillar.subtitle}</h4>
                      <H3 className="text-2xl font-bold text-gray-900 group-hover:text-indigo-700 transition-colors">{pillar.title}</H3>
                    </div>
                    <Paragraph className="text-gray-600 leading-relaxed text-sm">
                      {pillar.description}
                    </Paragraph>
                  </div>
                </Card>
              );
            })}
          </div>
        </section>

        {/* 3. FEATURED SOLUTIONS & 4. ALL REPUTATION MANAGEMENT SERVICES */}
        <section className="space-y-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-gray-200 pb-8">
            <div className="max-w-2xl space-y-4">
              <h2 className="text-sm uppercase tracking-[0.2em] text-indigo-600 font-semibold">Comprehensive Solutions</h2>
              <H2 className="text-3xl md:text-5xl font-bold text-gray-900">All Reputation Services</H2>
            </div>
            <Link href="/contact" className="text-sm font-semibold text-gray-900 hover:text-indigo-600 transition-colors flex items-center gap-2 group">
              Need a custom solution? <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayServices.map((srv, idx) => (
              <Card key={srv._id || idx} variant="outline" className="p-6 bg-white border border-gray-200 hover:border-gray-300 shadow-sm  transition-all duration-300">
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <H3 className="text-xl font-semibold mb-2 text-gray-900">{srv.title}</H3>
                    <Paragraph className="text-sm text-gray-600 line-clamp-3">{srv.summary}</Paragraph>
                  </div>
                  <div className="pt-4 border-t border-gray-100">
                    <Link
                      href={`/services/${srv.slug}`}
                      className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 inline-flex items-center gap-1.5 uppercase tracking-wider"
                    >
                      View Details <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* 5. OUR REPUTATION MANAGEMENT PROCESS */}
        <section className="space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-sm uppercase tracking-[0.2em] text-indigo-600 font-semibold">Methodology</h2>
            <H2 className="text-3xl md:text-5xl font-bold text-gray-900">Our Engineering Process</H2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-12 left-10 right-10 h-0.5 bg-gradient-to-r from-indigo-200/0 via-indigo-200 to-indigo-200/0 z-0"></div>

            {processSteps.map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
                <div className="w-24 h-24 rounded-full bg-white border border-indigo-200 flex items-center justify-center text-3xl font-serif italic text-indigo-600 shadow-sm mx-auto md:mx-0">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. WHY REPUTATION MANAGEMENT MATTERS */}
        <section className="bg-gradient-to-br from-indigo-50 to-white border border-indigo-100 rounded-3xl p-8 md:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-sm uppercase tracking-[0.2em] text-indigo-600 font-semibold">The Stakes</h2>
              <H2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Reputation Matters</H2>
              <Paragraph className="text-gray-600">
                In the digital era, your search results are your resume, your storefront, and your legacy. A single negative article or orchestrated smear campaign can vaporize millions in market cap and permanently damage brand equity.
              </Paragraph>
              <ul className="space-y-4 mt-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                  <span className="text-gray-700"><strong className="text-gray-900">94%</strong> of consumers avoid a business with negative reviews.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                  <span className="text-gray-700"><strong className="text-gray-900">70%</strong> of executives report lost opportunities due to digital footprint issues.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                  <span className="text-gray-900 font-medium">Protect your most valuable asset: Trust.</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-indigo-200/50 blur-[100px] rounded-full"></div>
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                alt="Reputation Analytics"
                width={1035}
                height={690}
                className="relative rounded-2xl border border-gray-200 shadow-xl grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </section>

        {/* 7. INDUSTRIES WE SERVE & 8. GLOBAL REPUTATION COVERAGE */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <section className="space-y-8 p-8 md:p-12 rounded-3xl bg-gray-50 border border-gray-100">
            <div className="space-y-2">
              <H2 className="text-2xl md:text-3xl font-bold text-gray-900">Industries We Serve</H2>
              <p className="text-gray-600 text-sm">Discreet, specialized solutions for high-stakes sectors.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {industries.map((ind, i) => {
                const Icon = ind.icon;
                return (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-200 hover:bg-gray-50 transition-colors">
                    <Icon className="w-5 h-5 text-indigo-600" />
                    <span className="text-sm font-medium text-gray-800">{ind.title}</span>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="space-y-8 p-8 md:p-12 rounded-3xl bg-gray-50 border border-gray-100 relative overflow-hidden">
            <Globe className="absolute -bottom-10 -right-10 w-64 h-64 text-gray-200 pointer-events-none" />
            <div className="relative z-10 space-y-6">
              <div className="space-y-2">
                <H2 className="text-2xl md:text-3xl font-bold text-gray-900">Global Coverage</H2>
                <p className="text-gray-600 text-sm">Worldwide intelligence and enforcement.</p>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our infrastructure continuously monitors the open web, social media platforms, and deep web across North America, EMEA, and APAC. We provide localized suppression strategies complying with global digital laws including GDPR and CCPA.
              </p>
              <div className="flex gap-4 pt-4">
                <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold border border-indigo-200">Americas</span>
                <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold border border-indigo-200">EMEA</span>
                <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold border border-indigo-200">APAC</span>
              </div>
            </div>
          </section>
        </div>

        {/* 9. FAQ */}
        <section className="space-y-12 mx-auto">
          <div className="text-center space-y-4">
            <h2 className="text-sm uppercase tracking-[0.2em] text-indigo-600 font-semibold">Clarity</h2>
            <H2 className="text-3xl md:text-4xl font-bold text-gray-900">Frequently Asked Questions</H2>
          </div>
          <div className="bg-white rounded-3xl p-8 border border-gray-100">
            <FAQAccordion faqs={faqs} defaultOpenIndex={0} />
          </div>
        </section>

        <section className="relative w-full py-24 px-6 overflow-hidden mt-16 border-t border-gray-200 bg-indigo-50/50 rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-t from-indigo-100/50 to-transparent z-0" />
          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
            <Shield className="w-16 h-16 text-indigo-600 mx-auto opacity-80" />
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
              Ready to secure your legacy?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
              Schedule a confidential consultation with our reputation architects. We&apos;ll perform a complimentary diagnostic audit of your digital footprint.
            </p>
            <div className="pt-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-all hover:scale-105 shadow-[0_0_40px_rgba(79,70,229,0.2)]"
              >
                Request Confidential Audit <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
