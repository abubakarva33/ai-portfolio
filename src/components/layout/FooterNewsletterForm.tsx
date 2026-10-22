'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export function FooterNewsletterForm() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <form onSubmit={handleNewsletterSubmit} className="space-y-2">
      <div className="relative">
        <input
          type="email"
          value={newsletterEmail}
          onChange={(e) => setNewsletterEmail(e.target.value)}
          placeholder="enter executive email..."
          required
          className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors pr-10"
        />
        <button
          type="submit"
          className="absolute right-1.5 top-1/2 -translate-y-1/2 p-1.5 rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 transition-colors"
        >
          <Send className="w-3.5 h-3.5" />
        </button>
      </div>

      {subscribed && (
        <div className="flex items-center gap-1.5 text-xs text-emerald-400 pt-1">
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>Successfully subscribed to executive briefings!</span>
        </div>
      )}
    </form>
  );
}
