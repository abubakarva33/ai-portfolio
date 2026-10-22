import type { Metadata } from 'next';
import PricingSection from './PricingSection';
import { faqItems } from './data';

export const metadata: Metadata = {
  title: 'ORM Pricing | Custom Reputation Management Quotes',
  description: 'See how our reputation management pricing works — platform-specific quotes for Google, Trustpilot, G2, and more. No fixed rates, no hidden fees.',
};

export default function PricingPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Online Reputation Management',
    provider: {
      '@type': 'Organization',
      name: 'Scale ORM', // Adjust to match exact agency name if needed
    },
    areaServed: 'Worldwide',
    description:
      'Custom online reputation management campaigns across Google Business Profile, Trustpilot, G2, Glassdoor, and other major review and social platforms.',
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '10',
      priceCurrency: 'USD',
      offerCount: '3',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <PricingSection />
    </>
  );
}
