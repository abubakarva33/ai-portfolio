'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { FAQItem } from '@/types';

interface FAQAccordionProps {
  faqs: FAQItem[];
  defaultOpenIndex?: number | null;
}

export function FAQAccordion({ faqs, defaultOpenIndex = null }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  return (
    <div className="space-y-0">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={faq._id || idx}
            className="border-b border-gray-100 last:border-none"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              className="w-full py-6 text-left flex items-center justify-between gap-4 font-semibold text-base md:text-lg text-gray-900 hover:text-indigo-600 transition-colors"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${idx}`}
              id={`faq-question-${idx}`}
            >
              <span>{faq.question}</span>
              <div className="w-8 h-8 rounded-full border border-indigo-200 flex items-center justify-center shrink-0">
                <ChevronDown
                  className={`w-5 h-5 text-indigo-600 transition-transform ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </div>
            </button>
            <div
              id={`faq-answer-${idx}`}
              role="region"
              aria-labelledby={`faq-question-${idx}`}
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0 pb-0'
              }`}
            >
              <div className="text-sm md:text-base text-gray-600 leading-relaxed pr-12">
                {faq.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
