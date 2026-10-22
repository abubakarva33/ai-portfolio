'use client';

import React from 'react';
import { ArrowUp } from 'lucide-react';

export function ScrollToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white text-xs font-medium transition-all group"
    >
      <span className="w-5 h-5 rounded-full bg-white text-black flex items-center justify-center transition-transform group-hover:-translate-y-0.5">
        <ArrowUp className="w-3 h-3 stroke-[2.5]" />
      </span>
      <span>Back to Top</span>
    </button>
  );
}
