'use client';

import React, { useState } from 'react';
import { faqItems } from './data';

export function PricingFAQ() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="mx-auto bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
      {faqItems.map((faq, i) => (
        <div key={i} className="border-b border-gray-100 last:border-none relative z-10">
          <button
            className="w-full text-left bg-transparent border-none py-6 text-lg font-medium text-gray-900 cursor-pointer flex justify-between items-center transition-colors duration-200 hover:text-emerald-600"
            onClick={() => toggleFaq(i)}
            aria-expanded={openFaqIndex === i}
          >
            <span>{faq.q}</span>
            <span className={`text-emerald-600 transition-transform duration-200 ${openFaqIndex === i ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>
          {openFaqIndex === i && (
            <div className="pb-6 text-slate-600 leading-relaxed text-[0.9375rem]">
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
