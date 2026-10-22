import type { Metadata } from 'next';
import React from 'react';
import { H1, H2, Paragraph } from '@/components/ui/Typography';

export const metadata: Metadata = {
  title: 'Terms of Service | Scale ORM',
  description: 'Scale ORM terms of service — governing the use of our website and reputation management services.',
  alternates: { canonical: 'https://scaleorm.com/terms' },
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 space-y-8">
      <div className="border-b border-white/10 pb-6">
        <H1 className="mb-2">Terms of Service</H1>
        <p className="text-sm text-gray-400">Last updated: August 4, 2026</p>
      </div>

      <section className="space-y-4">
        <H2 className="text-xl">1. Acceptance of Terms</H2>
        <Paragraph>
          By accessing or using scaleorm.com or engaging our services, you agree to be bound by these Terms
          of Service and our Privacy Policy. If you do not agree, please do not use our services.
        </Paragraph>
      </section>

      <section className="space-y-4">
        <H2 className="text-xl">2. Services</H2>
        <Paragraph>
          Scale ORM Agency provides online reputation management, AI automation, and digital engineering
          services as described on our website. The specific scope of services for each client is defined
          in a separate Service Agreement or Statement of Work (SOW).
        </Paragraph>
      </section>

      <section className="space-y-4">
        <H2 className="text-xl">3. Client Responsibilities</H2>
        <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm pl-4">
          <li>Provide accurate and complete information when requested</li>
          <li>Cooperate in a timely manner with our team&apos;s requests</li>
          <li>Not engage other agencies for conflicting services without disclosure</li>
          <li>Maintain payment terms as agreed in the Service Agreement</li>
          <li>Not request services that violate platform terms of service or applicable law</li>
        </ul>
      </section>

      <section className="space-y-4">
        <H2 className="text-xl">4. Results Disclaimer</H2>
        <Paragraph>
          While we offer a 45-day measurable results guarantee, specific outcomes (such as the complete
          removal of particular content) cannot always be guaranteed due to factors outside our control,
          including third-party platform policies and search engine algorithms. Our guarantee covers
          measurable SERP improvement, not absolute content removal in all cases.
        </Paragraph>
      </section>

      <section className="space-y-4">
        <H2 className="text-xl">5. Confidentiality</H2>
        <Paragraph>
          Both parties agree to maintain confidentiality regarding the other party&apos;s proprietary information.
          Our engagement will be governed by the terms of any NDA executed between the parties.
        </Paragraph>
      </section>

      <section className="space-y-4">
        <H2 className="text-xl">6. Intellectual Property</H2>
        <Paragraph>
          Content, methodologies, and tools developed by Scale ORM remain the intellectual property of
          Scale ORM unless otherwise agreed in writing. Content created specifically for a client&apos;s brand
          becomes the client&apos;s property upon full payment.
        </Paragraph>
      </section>

      <section className="space-y-4">
        <H2 className="text-xl">7. Limitation of Liability</H2>
        <Paragraph>
          Scale ORM&apos;s liability is limited to the fees paid by the client in the 3 months preceding any
          claim. We are not liable for indirect, incidental, or consequential damages. This does not limit
          liability for gross negligence or willful misconduct.
        </Paragraph>
      </section>

      <section className="space-y-4">
        <H2 className="text-xl">8. Governing Law</H2>
        <Paragraph>
          These Terms are governed by the laws of the State of New York, USA. Any disputes will be resolved
          through binding arbitration in New York, NY.
        </Paragraph>
      </section>

      <section className="space-y-4">
        <H2 className="text-xl">9. Contact</H2>
        <Paragraph>
          For questions about these Terms, contact:{' '}
          <a href="mailto:legal@scaleorm.com" className="text-indigo-400 hover:text-indigo-300">
            legal@scaleorm.com
          </a>
        </Paragraph>
      </section>
    </div>
  );
}
