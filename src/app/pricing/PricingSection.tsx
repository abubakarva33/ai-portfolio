import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { AnimatedBonusCard } from '@/components/ui/AnimatedBonusCard';
import {
  customPricingFactors,
  platformPricing,
  includedFeatures,
  howPricingWorksSteps,
} from './data';
import { PricingFAQ } from './PricingFAQ';

export default function PricingSection() {

  const sectionClasses = "py-20 relative max-w-7xl mx-auto before:absolute before:-top-[10%] before:left-[10%] before:w-[40%] before:h-[60%] before:pointer-events-none before:z-0 after:absolute after:-bottom-[10%] after:right-[10%] after:w-[40%] after:h-[60%] after:pointer-events-none after:z-0";

  return (
    <div className="w-full mx-auto bg-white text-gray-900 font-sans overflow-hidden">
      <div>
        {/* 1. Hero */}
        <section
          className="relative w-full flex flex-col items-center justify-center rounded-br-3xl rounded-bl-3xl overflow-hidden px-6 py-12 text-center mb-16"
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
          <div className="relative z-20 max-w-4xl mx-auto flex flex-col items-center mt-12 mb-12">
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
              <span className="text-white font-semibold">Pricing</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
              Pricing That Fits Your Campaign
            </h1>

            <p className="text-gray-300 text-base mt-6 max-w-3xl leading-relaxed text-center">
              Every reputation management campaign is different. We build custom pricing around your platform, campaign volume, and monitoring requirements — so you only pay for what your business actually needs.
            </p>
          </div>
        </section>


        {/* 3. Custom Pricing factors grid */}
        <section className={`${sectionClasses} px-4 md:px-8`}>
          <h2 className="text-4xl text-center mb-4 text-gray-900 font-bold relative z-10">Custom Pricing: Your Platform. Your Campaign. Your Price.</h2>
          <p className="text-center mb-16 text-slate-600 max-w-[800px] mx-auto text-lg relative z-10">
            The prices above are starting points only. Because each platform has different requirements and each business has a different customer base, we calculate your final price after reviewing your campaign.
            <br /><br />
            <strong className="text-gray-900">Your custom quote may depend on:</strong>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {customPricingFactors.map((factor, i) => (
              <div key={i} className="bg-white border border-gray-200 shadow-sm rounded-2xl p-8 transition-all duration-300 hover:border-emerald-300 hover:-translate-y-0.5">
                <h3 className="text-xl mb-3 text-gray-900 font-semibold">{factor.title}</h3>
                <p className="text-slate-600 text-[0.9375rem] leading-relaxed">{factor.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 2. Starting From $99 */}
        <section className="relative px-4 md:px-8 max-w-7xl mx-auto">
          {/* <AnimatedBonusCard>
            
          </AnimatedBonusCard> */}
          <div className="py-12 md:py-16 px-4 md:px-8 mx-auto flex flex-col items-center bg-emerald-50/50 border border-emerald-100 rounded-2xl relative z-10 shadow-sm">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-5">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Transparent Starting Pricing
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Starting From{' '}
              <span className="font-hero-serif font-normal italic">$99</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg text-center">
              Every reputation campaign is different. Our pricing starts from $99, with the final cost determined through a custom quote based on your selected platform, campaign volume, profile requirements, business type, and monitoring needs.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 text-white font-semibold shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-105 transition-all duration-300 group"
              >
                Get Custom Pricing <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact?mode=strategy"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-emerald-200 text-emerald-700 font-semibold text-lg hover:bg-emerald-50 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto bg-white"
              >
                Book a Strategy Call
              </Link>
            </div>
          </div>
        </section>


        {/* 4. Platform-Specific Pricing */}
        <section className={`${sectionClasses} px-4 md:px-8`}>
          <h2 className="text-4xl text-center mb-4 text-gray-900 font-bold relative z-10">Platform-Specific Pricing</h2>
          <p className="text-center mb-16 text-slate-600 max-w-[800px] mx-auto text-lg relative z-10">
            We don&apos;t use the same rate for every platform. Our starting price gives you a general reference point, while the final rate is determined according to the platform and campaign requirements.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {platformPricing.map((platform, i) => (
              <div key={i} className="bg-white border border-gray-200 shadow-sm rounded-2xl p-8 transition-all duration-300 hover:border-emerald-300 hover:-translate-y-0.5">
                <h3 className="text-xl mb-3 text-gray-900 font-semibold">{platform.name}</h3>
                <p className="text-slate-600 text-[0.9375rem] leading-relaxed">{platform.description}</p>
                <Link href={`/contact?service=${encodeURIComponent(platform.name)}`} className="block w-full text-center bg-transparent text-emerald-700 border border-emerald-200 py-3 rounded-lg text-sm font-medium transition-all duration-300 mt-4 hover:bg-emerald-50 hover:border-emerald-300">{platform.cta}</Link>
              </div>
            ))}
          </div>
        </section>

        {/* 5. What's Included */}
        <section className={`${sectionClasses} px-4 md:px-8`}>
          <h2 className="text-4xl text-center mb-4 text-gray-900 font-bold relative z-10">What&apos;s Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {includedFeatures.map((feature, i) => (
              <div key={i} className="bg-white border border-gray-200 shadow-sm rounded-2xl p-8 transition-all duration-300 hover:border-emerald-300 hover:-translate-y-0.5">
                <h3 className="text-xl mb-3 text-gray-900 font-semibold">{feature.title}</h3>
                <p className="text-slate-600 text-[0.9375rem] leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 6. How Pricing Works */}
        <section className={`${sectionClasses} px-4 md:px-8`}>
          <h2 className="text-4xl text-center mb-4 text-gray-900 font-bold relative z-10">How Pricing Works</h2>
          <div className="flex flex-col md:flex-row justify-between relative mt-16 z-10 gap-12 md:gap-0 before:hidden md:before:block before:absolute before:top-6 before:left-0 before:right-0 before:h-0.5 before:bg-gradient-to-r before:from-emerald-200 before:to-teal-200 before:z-0">
            {howPricingWorksSteps.map((step, i) => (
              <div key={i} className="flex-1 text-left md:text-center flex md:block items-start md:items-center relative z-10 px-0 md:px-4">
                <div className="w-12 h-12 shrink-0 bg-white text-emerald-600 rounded-full flex items-center justify-center font-bold text-xl mx-0 md:mx-auto mb-0 md:mb-6 mr-6 md:mr-auto border-2 border-emerald-500 shadow-sm">{i + 1}</div>
                <div>
                  <h3 className="text-xl mb-3 text-gray-900 font-semibold">{step.title}</h3>
                  <p className="text-slate-600 text-[0.9375rem] leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 7. Why We Don't Publish Fixed Platform Rates & No Hidden Pricing */}
        <section className={`${sectionClasses} px-4 md:px-8`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10 bg-gray-50 border border-gray-100 p-8 rounded-3xl">
            <div>
              <h2 className="text-2xl mb-6 text-gray-900 font-semibold">Why We Don&apos;t Publish Fixed Platform Rates</h2>
              <p className="text-slate-600 text-[0.9375rem] leading-relaxed mb-4">
                A Google Business Profile campaign is different from a G2 campaign. A SaaS company may require a different feedback workflow from a local service business. A law firm&apos;s reputation requirements may also differ significantly from those of an e-commerce brand.
              </p>
              <p className="text-slate-600 text-[0.9375rem] leading-relaxed">
                Instead of forcing every client into the same price, we review your requirements first and provide a campaign-specific quote — for a better fit, clearer scope, and more transparent pricing.
              </p>
            </div>
            <div>
              <h2 className="text-2xl mb-6 text-gray-900 font-semibold">No Hidden Pricing</h2>
              <p className="text-slate-600 text-[0.9375rem] leading-relaxed mb-6">
                Before starting your campaign, you&apos;ll know:
              </p>
              <ul className="list-none p-0 mb-8 space-y-4 columns-1 sm:columns-2">
                <li className="relative pl-8 text-slate-700 text-[0.9375rem] before:content-['✓'] before:absolute before:left-0 before:top-0.5 before:text-emerald-600 before:font-bold before:bg-emerald-100 before:w-5 before:h-5 before:flex before:items-center before:justify-center before:rounded-full before:text-xs">Which platform is covered</li>
                <li className="relative pl-8 text-slate-700 text-[0.9375rem] before:content-['✓'] before:absolute before:left-0 before:top-0.5 before:text-emerald-600 before:font-bold before:bg-emerald-100 before:w-5 before:h-5 before:flex before:items-center before:justify-center before:rounded-full before:text-xs">What services are included</li>
                <li className="relative pl-8 text-slate-700 text-[0.9375rem] before:content-['✓'] before:absolute before:left-0 before:top-0.5 before:text-emerald-600 before:font-bold before:bg-emerald-100 before:w-5 before:h-5 before:flex before:items-center before:justify-center before:rounded-full before:text-xs">Expected campaign scope</li>
                <li className="relative pl-8 text-slate-700 text-[0.9375rem] before:content-['✓'] before:absolute before:left-0 before:top-0.5 before:text-emerald-600 before:font-bold before:bg-emerald-100 before:w-5 before:h-5 before:flex before:items-center before:justify-center before:rounded-full before:text-xs">Monitoring requirements</li>
                <li className="relative pl-8 text-slate-700 text-[0.9375rem] before:content-['✓'] before:absolute before:left-0 before:top-0.5 before:text-emerald-600 before:font-bold before:bg-emerald-100 before:w-5 before:h-5 before:flex before:items-center before:justify-center before:rounded-full before:text-xs">Pricing structure</li>
                <li className="relative pl-8 text-slate-700 text-[0.9375rem] before:content-['✓'] before:absolute before:left-0 before:top-0.5 before:text-emerald-600 before:font-bold before:bg-emerald-100 before:w-5 before:h-5 before:flex before:items-center before:justify-center before:rounded-full before:text-xs">Payment terms</li>
                <li className="relative pl-8 text-slate-700 text-[0.9375rem] before:content-['✓'] before:absolute before:left-0 before:top-0.5 before:text-emerald-600 before:font-bold before:bg-emerald-100 before:w-5 before:h-5 before:flex before:items-center before:justify-center before:rounded-full before:text-xs">Campaign limitations</li>
                <li className="relative pl-8 text-slate-700 text-[0.9375rem] before:content-['✓'] before:absolute before:left-0 before:top-0.5 before:text-emerald-600 before:font-bold before:bg-emerald-100 before:w-5 before:h-5 before:flex before:items-center before:justify-center before:rounded-full before:text-xs">What is and isn&apos;t guaranteed</li>
              </ul>
              <p className="text-gray-900 font-semibold mt-6 text-[0.9375rem]">There are no surprise charges added after the campaign begins.</p>
            </div>
          </div>
        </section>

        {/* 8. FAQ */}
        <section className={`${sectionClasses} px-4 md:px-8`}>
          <h2 className="text-4xl text-center mb-4 text-gray-900 font-bold relative z-10">Frequently Asked Questions</h2>
          <PricingFAQ />
        </section>

        {/* 9. Final CTA block */}
        <section className="px-4 pb-20 max-w-7xl mx-auto md:px-8">
          <div className="text-gray-900 py-16 px-4 md:px-8 rounded-[2rem] text-center relative z-10 overflow-hidden bg-emerald-50/50 border border-emerald-100 shadow-sm">
            <h2 className="text-gray-900 mb-6 text-4xl md:text-5xl font-bold relative z-20 tracking-tight">Ready to Build Your Reputation?</h2>
            <p className="text-slate-600 mb-12 max-w-[600px] mx-auto text-lg md:text-xl leading-relaxed relative z-20 font-light">
              Tell us your platform and requirements. We&apos;ll review your campaign and provide a custom quote tailored to your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center relative z-20">
              <Link href="/contact" className="relative overflow-hidden group/btn bg-gradient-to-br from-emerald-500 to-teal-600 text-white py-4 px-10 rounded-xl font-semibold text-lg transition-all duration-300 shadow-sm hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:-translate-y-1 w-full sm:w-auto text-center">
                <span className="relative z-10">Get Custom Pricing</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] skew-x-12 group-hover/btn:translate-x-[150%] transition-transform duration-700 ease-in-out"></div>
              </Link>
              <Link href="/contact?mode=strategy" className="bg-white text-emerald-700 border border-emerald-200 hover:bg-emerald-50 py-4 px-10 rounded-xl font-semibold text-lg transition-all duration-300 hover:border-emerald-300 hover:-translate-y-1 w-full sm:w-auto text-center shadow-sm">
                Book a Strategy Call
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
