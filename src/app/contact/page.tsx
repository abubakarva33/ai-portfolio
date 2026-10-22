import Link from 'next/link';
import Image from 'next/image';
import { LightContactSection } from '@/components/sections/LightContactSection';
import { getFAQs } from '@/lib/api-functions';
import { defaultFaqs } from '@/data/siteData';
import { FAQAccordion } from '@/components/ui/FAQAccordion';

export default async function ContactPage() {
  const faqs = await getFAQs();
  const displayFaqs = faqs.length > 0 ? faqs : defaultFaqs;

  return (
    <div className="w-full mx-auto bg-white font-sans overflow-hidden">
      <div className="">
        {/* Dark Hero Section directly from Pricing */}
        <section
          className="relative w-full flex flex-col items-center justify-center rounded-bl-3xl rounded-br-3xl overflow-hidden px-6 pt-4 pb-72 text-center"
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
          <div className="relative z-20 max-w-4xl mx-auto flex flex-col items-center mt-6 mb-6">
            {/* Site Logo */}
            <div className="mb-2">
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
              <span className="text-white font-semibold">Contact us</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
              Have A Question Or <br />
              <span className="font-hero-serif font-normal italic">Just Want To Chat?</span>
            </h1>
          </div>
        </section>
      </div>

      {/* Contact Form Container overlapping the hero section */}
      <section className="relative z-30 w-full max-w-7xl mx-auto px-4 -mt-[250px]">
        <LightContactSection />
      </section>

      {/* FAQ and Newsletter Section */}
      <section className="bg-white py-20 rounded-t-[2.5rem] mt-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full border border-emerald-400 text-emerald-500 text-sm font-medium mb-4">
              Frequently Asked Questions
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              Your Questions <span className="font-serif italic font-normal">Answered!</span>
            </h2>
          </div>
          <FAQAccordion faqs={displayFaqs} defaultOpenIndex={null} />
        </div>
      </section>
    </div>
  );
}
