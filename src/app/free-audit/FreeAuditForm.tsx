'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { H2, Paragraph } from '@/components/ui/Typography';
import { CheckCircle2, ArrowRight, Send } from 'lucide-react';

export function FreeAuditForm() {
  const [formData, setFormData] = useState({ name: '', company: '', email: '', brandName: '', topConcern: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  React.useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', company: '', email: '', brandName: '', topConcern: '' });
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  if (submitted) {
    return (
      <Card variant="glass" className="p-10 text-center border-emerald-500/30">
        <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <H2 className="mb-4">Audit Request Received!</H2>
        <Paragraph className="mb-6">
          Thank you, <strong>{formData.name}</strong>. Your free reputation audit for{' '}
          <strong>{formData.brandName || formData.company}</strong> will be delivered to{' '}
          <strong>{formData.email}</strong> within 24 hours.
        </Paragraph>
        <p className="text-sm text-gray-400 mb-8">
          While you wait, book a strategy call to discuss your situation with a senior specialist.
        </p>
        <Link href="/contact">
          <Button variant="gradient" size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
            Book Strategy Call
          </Button>
        </Link>
      </Card>
    );
  }

  return (
    <Card variant="glass" className="p-8 border-indigo-500/30">
      <h2 className="text-2xl font-bold text-white mb-2">Request Your Free Audit</h2>
      <p className="text-sm text-gray-400 mb-6">Delivered by a senior ORM specialist within 24 hours.</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-semibold text-gray-400 mb-1.5">Your Name *</label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData(p => ({ ...p, name: e.target.value }))}
            placeholder="John Smith"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-400 mb-1.5">Company / Organization</label>
          <input
            type="text"
            value={formData.company}
            onChange={(e) => setFormData(p => ({ ...p, company: e.target.value }))}
            placeholder="Acme Corporation"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-400 mb-1.5">Work Email *</label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData(p => ({ ...p, email: e.target.value }))}
            placeholder="john@company.com"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-400 mb-1.5">Brand / Name to Audit *</label>
          <input
            type="text"
            required
            value={formData.brandName}
            onChange={(e) => setFormData(p => ({ ...p, brandName: e.target.value }))}
            placeholder="e.g. 'John Smith CEO' or 'Acme Corp'"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-400 mb-1.5">Biggest Concern Right Now</label>
          <textarea
            rows={3}
            value={formData.topConcern}
            onChange={(e) => setFormData(p => ({ ...p, topConcern: e.target.value }))}
            placeholder="e.g. 'A defamatory article is ranking #1 for my name on Google...'"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-violet-600 text-white font-semibold flex items-center justify-center gap-2 hover:opacity-90 hover:scale-[1.01] transition-all shadow-lg shadow-indigo-500/30"
        >
          <Send className="w-4 h-4" /> Get My Free Reputation Audit
        </button>
        <p className="text-[10px] text-gray-500 text-center">
          By submitting, you agree to receive your audit and occasional ORM insights. Unsubscribe anytime.
        </p>
      </form>
    </Card>
  );
}
