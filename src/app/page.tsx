/**
 * Homepage — Personal Portfolio of Abubakar Siddik
 * AI Automation Specialist & Full Stack Developer
 *
 * Server Component — SSG data fetching, client sections loaded dynamically.
 */

import type { Metadata } from 'next';
import { getFAQs } from '@/lib/api-functions';
import HeroCentered from '@/components/sections/HeroCentered';
import { MetricsCounterBar } from '@/components/sections/MetricsCounterBar';
import dynamic from 'next/dynamic';

const FAQAccordion = dynamic(() => import(/* webpackPrefetch: true */ '@/components/ui/FAQAccordion').then((mod) => mod.FAQAccordion));
const LeadLeaksSection = dynamic(() => import(/* webpackPrefetch: true */ '@/components/sections/LeadLeaksSection').then((mod) => mod.LeadLeaksSection));
const LeadComparisonSection = dynamic(() => import(/* webpackPrefetch: true */ '@/components/sections/LeadComparisonSection').then((mod) => mod.LeadComparisonSection));
const LeadCalculatorSection = dynamic(() => import(/* webpackPrefetch: true */ '@/components/sections/LeadCalculatorSection').then((mod) => mod.LeadCalculatorSection));
const HowItWorksSection = dynamic(() => import(/* webpackPrefetch: true */ '@/components/sections/HowItWorksSection').then((mod) => mod.HowItWorksSection));
const TeamSection = dynamic(() => import(/* webpackPrefetch: true */ '@/components/sections/TeamSection').then((mod) => mod.TeamSection));
const UpworkReviewsSection = dynamic(() => import(/* webpackPrefetch: true */ '@/components/sections/UpworkReviewsSection').then((mod) => mod.UpworkReviewsSection));
const PlatformMasterySection = dynamic(() => import(/* webpackPrefetch: true */ '@/components/sections/PlatformMasterySection').then((mod) => mod.PlatformMasterySection));
const TrustSignalsSection = dynamic(() => import(/* webpackPrefetch: true */ '@/components/sections/TrustSignalsSection').then((mod) => mod.TrustSignalsSection));
const ContactSection = dynamic(() => import(/* webpackPrefetch: true */ '@/components/sections/ContactSection').then((mod) => mod.ContactSection));
const NewsletterSection = dynamic(() => import(/* webpackPrefetch: true */ '@/components/sections/NewsletterSection').then((mod) => mod.NewsletterSection));

import { defaultFaqs } from '@/data/siteData';
import { ReputationServicesOverview } from '@/components/sections/ReputationServicesOverview';

// ── Static Metadata ──────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Abubakar Siddik | AI Automation Specialist & Full Stack Developer',
  description:
    'Abubakar Siddik — Expert AI Automation Specialist with n8n, Make.com, GoHighLevel (GHL), and Zapier. Also a Full Stack Developer specializing in React.js, Next.js, Node.js, and the MERN stack. Hire me for intelligent automation & premium web apps.',
  keywords: [
    'AI automation specialist',
    'n8n automation expert',
    'GoHighLevel specialist',
    'Make.com automation',
    'Zapier automation',
    'GHL AI chatbot',
    'full stack developer',
    'React.js developer',
    'Next.js developer',
    'MERN stack developer',
    'Node.js developer',
    'AI workflow automation',
    'Abubakar Siddik',
  ],
  alternates: {
    canonical: 'https://abubakar.dev',
  },
  openGraph: {
    title: 'Abubakar Siddik | AI Automation Specialist & Full Stack Developer',
    description:
      'Expert in n8n, Make.com, GoHighLevel (GHL), and Zapier AI automation. Full Stack Developer with React.js, Next.js & Node.js. Let\'s build something amazing together.',
    url: 'https://abubakar.dev',
    siteName: 'Abubakar Siddik Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abubakar Siddik | AI Automation Specialist & Full Stack Developer',
    description:
      'Expert in n8n, Make.com, GHL & Zapier automation. Full Stack Developer with React.js, Next.js & MERN stack.',
  },
};

// ── Page Component ────────────────────────────────────────────────────────────

export default async function HomePage() {
  const [faqs] = await Promise.all([
    getFAQs(),
  ]);

  const displayFaqs = faqs.length > 0 ? faqs : defaultFaqs;

  return (
    <div className="relative overflow-clip">
      {/* Hero Section */}
      <HeroCentered />

      {/* White card content block */}
      <section className="bg-white rounded-3xl shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1)] border border-gray-100 -mt-16 md:-mt-5 relative z-20 overflow-clip">
        <div className="relative z-10 py-14 px-4 sm:px-6 lg:px-8 max-w-[1320px] mx-auto">
          {/* Stats Counter */}
          <MetricsCounterBar />

          {/* Services Overview */}
          <ReputationServicesOverview />
        </div>
      </section>

      {/* Process / How I Work */}
      <div className="py-6 space-y-12 md:space-y-16">
        <LeadLeaksSection />
        <LeadComparisonSection />
        <LeadCalculatorSection />
      </div>

      {/* Process / How I Work */}
      <HowItWorksSection />

      {/* About Me + Skills */}
      <section className="bg-white pt-10 rounded-3xl">
        <TeamSection />

        {/* Client Reviews from Upwork */}
        <UpworkReviewsSection />
      </section>

      <div className="py-24 space-y-24">
        {/* Tech Stack Section */}
        <PlatformMasterySection />

        {/* CTA + Trust Signals */}
        <TrustSignalsSection />
      </div>

      {/* FAQ + Contact + Newsletter */}
      <section className="bg-white py-20 rounded-tr-[2.5rem] mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full border border-violet-400 text-violet-500 text-sm font-medium mb-4">
              Frequently Asked Questions
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              Your Questions <span className="font-serif italic font-normal">Answered!</span>
            </h2>
          </div>
          <FAQAccordion faqs={displayFaqs} defaultOpenIndex={null} />
        </div>
        <ContactSection />
        <NewsletterSection />
      </section>
    </div>
  );
}
