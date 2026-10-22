import type { Metadata } from 'next';
import React from 'react';
import { H1, H2, Paragraph } from '@/components/ui/Typography';

export const metadata: Metadata = {
  title: 'Privacy Policy | Scale ORM',
  description: 'Scale ORM privacy policy — how we collect, use, and protect your personal information.',
  alternates: { canonical: 'https://scaleorm.com/privacy' },
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 space-y-8">
      <div className="border-b border-white/10 pb-6">
        <H1 className="mb-2">Privacy Policy</H1>
        <p className="text-sm text-gray-400">Last updated: August 4, 2026</p>
      </div>

      <section className="space-y-4">
        <H2 className="text-xl">1. Introduction</H2>
        <Paragraph>
          Scale ORM Agency (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy
          explains how we collect, use, disclose, and safeguard your information when you visit our website
          scaleorm.com or engage our services.
        </Paragraph>
      </section>

      <section className="space-y-4">
        <H2 className="text-xl">2. Information We Collect</H2>
        <Paragraph>We may collect the following types of information:</Paragraph>
        <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm pl-4">
          <li>Personal identification information (name, email address, phone number)</li>
          <li>Company and professional information</li>
          <li>Information you provide in contact forms or audit requests</li>
          <li>Usage data (pages visited, time spent, IP address, browser type)</li>
          <li>Communications you send to us</li>
        </ul>
      </section>

      <section className="space-y-4">
        <H2 className="text-xl">3. How We Use Your Information</H2>
        <Paragraph>We use the information we collect to:</Paragraph>
        <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm pl-4">
          <li>Provide, operate, and improve our services</li>
          <li>Respond to your inquiries and deliver reputation audits</li>
          <li>Send periodic emails with industry insights (only if you subscribe)</li>
          <li>Comply with legal obligations</li>
          <li>Analyze website usage to improve user experience</li>
        </ul>
      </section>

      <section className="space-y-4">
        <H2 className="text-xl">4. Confidentiality</H2>
        <Paragraph>
          All client information shared with Scale ORM is treated with absolute confidentiality. We execute
          Non-Disclosure Agreements (NDAs) with all clients and do not share client information with third parties
          except as required to deliver our services (e.g., legal counsel, platform partners) or by law.
        </Paragraph>
      </section>

      <section className="space-y-4">
        <H2 className="text-xl">5. Data Security</H2>
        <Paragraph>
          We implement industry-standard security measures including SSL encryption, access controls, and
          regular security audits to protect your data. However, no transmission over the internet is 100%
          secure, and we cannot guarantee absolute security.
        </Paragraph>
      </section>

      <section className="space-y-4">
        <H2 className="text-xl">6. Third-Party Services</H2>
        <Paragraph>
          We may use third-party services including Google Analytics, Microsoft Clarity, and Brevo for
          email delivery. These services have their own privacy policies governing how they handle data.
        </Paragraph>
      </section>

      <section className="space-y-4">
        <H2 className="text-xl">7. Your Rights</H2>
        <Paragraph>
          Depending on your jurisdiction, you may have rights including: access to your data, correction of
          inaccurate data, deletion of your data, opt-out of marketing communications, and data portability.
          To exercise these rights, contact us at privacy@scaleorm.com.
        </Paragraph>
      </section>

      <section className="space-y-4">
        <H2 className="text-xl">8. Contact Us</H2>
        <Paragraph>
          If you have questions about this Privacy Policy, please contact us at:{' '}
          <a href="mailto:privacy@scaleorm.com" className="text-indigo-400 hover:text-indigo-300">
            privacy@scaleorm.com
          </a>
        </Paragraph>
      </section>
    </div>
  );
}
