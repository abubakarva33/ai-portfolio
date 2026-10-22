'use client';

/**
 * UpworkReviewsSection — Client Component
 *
 * Displays a gallery of Upwork review screenshots in a cropped card grid.
 * Each card shows the review content only (cropped phone UI via per-image object-position + gradient overlays).
 * Clicking a card opens a lightbox showing the full raw screenshot for verification.
 *
 * Features:
 * - Per-image objectPosition control for precise cropping
 * - Full-screen lightbox with navigation (arrows + keyboard)
 * - Upwork verified badges on each card
 * - Show more/less toggle (6 initially, all 17 on expand)
 * - Designed for white background context
 */

import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Expand, ShieldCheck, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

/* ── Review data with per-image crop control ──
 *
 * `position` controls which part of the screenshot is visible in the cropped card.
 * Format: 'center <Y%>' where Y% is how far down the image to center the crop.
 *   - Lower % (e.g. 20%) → shows content nearer the top (good for short titles)
 *   - Higher % (e.g. 35%) → shows content further down (good for tall titles + Fixed price label)
 *
 * To adjust: change the position value for any individual review.
 */
const REVIEWS = [
  { src: '/reviews/review4.webp',  position: 'center 43%' },
  { src: '/reviews/review7.webp',  position: 'center 46%' },
  { src: '/reviews/review17.webp', position: 'center 50%' },
  { src: '/reviews/review14.webp', position: 'center 42.5%' },
  { src: '/reviews/review11.webp', position: 'center 39.5%' },
  { src: '/reviews/review18.webp', position: 'center 37%' },
  { src: '/reviews/review6.webp',  position: 'center 55.5%' },
  { src: '/reviews/review3.webp',  position: 'center 53%', rating: 4.0},
  { src: '/reviews/review5.webp',  position: 'center 55.5%' },
  { src: '/reviews/review8.webp',  position: 'center 42.5%' },
  { src: '/reviews/review9.webp',  position: 'center 53%' },
  { src: '/reviews/review15.webp', position: 'center 40%' },
  { src: '/reviews/review1.webp',  position: 'center 39.5%' },
  { src: '/reviews/review12.webp', position: 'center 41%' },
  { src: '/reviews/review13.webp', position: 'center 36%' },
  { src: '/reviews/review16.webp', position: 'center 53%' },
  { src: '/reviews/review2.webp',  position: 'center 41%' },
];

/* ── Upwork logo SVG path (reusable) ── */
const UpworkLogo = ({ className = 'w-3 h-3' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={`${className} fill-current`}>
    <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
  </svg>
);

/* ── Individual Review Card ── */
function ReviewCard({
  review,
  index,
  globalIndex,
  onOpen,
}: {
  review: { src: string; position: string; rating?: number };
  index: number;
  globalIndex: number;
  onOpen: (index: number) => void;
}) {
  const rating = review.rating || 5.0;
  const stars = rating === 5.0 ? '★★★★★' : rating === 4.0 ? '★★★★☆' : '★★★★★';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: 'easeOut' }}
      onClick={() => onOpen(globalIndex)}
      className="w-[280px] sm:w-[350px] flex-shrink-0 group/card relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
      style={{
        background: '#ffffff',
        border: '1px solid #e5e7eb',
      }}
    >
      {/* Cropped screenshot container */}
      <div className="relative h-[200px] overflow-hidden">
        <Image
          src={review.src}
          alt={`Verified Upwork client review ${globalIndex + 1}`}
          fill
          sizes="(max-width: 640px) 280px, 350px"
          className="object-cover"
          style={{ objectPosition: review.position }}
        />

        {/* Bottom gradient — clean fade-out edge */}
        <div
          className="absolute inset-x-0 bottom-0 h-16 pointer-events-none"
          style={{
            background: 'linear-gradient(to top, #ffffff 0%, transparent 100%)',
          }}
        />

        {/* Hover overlay with expand prompt */}
        <div className="absolute inset-0 bg-black/0 group-hover/card:bg-black/25 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover/card:opacity-100 transition-all duration-300 scale-90 group-hover/card:scale-100 flex flex-col items-center gap-2.5">
            <div className="w-14 h-14 rounded-full bg-white/80 backdrop-blur-md border border-white/60 flex items-center justify-center shadow-xl">
              <Expand className="w-6 h-6 text-gray-800" />
            </div>
            <span className="text-xs font-semibold text-white bg-black/50 px-4 py-1.5 rounded-full backdrop-blur-sm tracking-wide">
              View Full Screenshot
            </span>
          </div>
        </div>
      </div>

      {/* Footer — Upwork verified badge + stars */}
      <div className="px-4 py-3 flex items-center justify-between bg-gray-50 border-t border-gray-100">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-[#14a800] flex items-center justify-center flex-shrink-0">
            <UpworkLogo className="w-3 h-3 text-white" />
          </div>
          <span className="text-xs font-medium text-[#14a800]">Verified on Upwork</span>
        </div>
        <div className="flex items-center gap-1 text-amber-500 text-xs">
          <span>{stars}</span>
          <span className="text-gray-400 ml-0.5 font-medium">{rating.toFixed(1)}</span>
        </div>
      </div>

      {/* Hover border glow effect */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"
        style={{
          border: '1px solid rgba(20, 168, 0, 0.4)',
        }}
      />
    </motion.div>
  );
}

/* ── Lightbox Component ── */
function ReviewLightbox({
  index,
  onClose,
  onNext,
  onPrev,
}: {
  index: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(8px)' }}
      onClick={onClose}
    >
      {/* ── Top Bar ── */}
      <div className="absolute top-0 inset-x-0 flex items-center justify-between p-4 sm:p-5 z-10">
        {/* Left — Authenticity label */}
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded-full bg-[#14a800] flex items-center justify-center">
            <UpworkLogo className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="text-white/50 text-xs sm:text-sm font-medium hidden sm:inline">
            Raw Upwork Screenshot — Unedited
          </span>
          <span className="text-white/50 text-xs font-medium sm:hidden">
            Raw Screenshot
          </span>
        </div>

        {/* Right — Counter + Close */}
        <div className="flex items-center gap-3 sm:gap-4">
          <span className="text-white/30 text-xs sm:text-sm font-mono tabular-nums">
            {index + 1} / {REVIEWS.length}
          </span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-200"
            aria-label="Close lightbox"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* ── Navigation Arrows ── */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-200 z-10"
        aria-label="Previous review"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-200 z-10"
        aria-label="Next review"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* ── Full Screenshot ── */}
      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[82vh] max-w-[420px] sm:max-w-[460px] w-full mx-14 sm:mx-6 overflow-y-auto rounded-2xl scrollbar-thin"
        style={{
          scrollbarWidth: 'thin',
          scrollbarColor: 'rgba(255,255,255,0.15) transparent',
        }}
      >
        <Image
          src={REVIEWS[index].src}
          alt={`Full Upwork review screenshot ${index + 1} — includes phone UI for authenticity verification`}
          width={460}
          height={920}
          className="w-full h-auto rounded-2xl shadow-2xl"
          draggable={false}
        />
      </motion.div>

      {/* ── Bottom Authenticity Note ── */}
      <div className="absolute bottom-3 sm:bottom-5 inset-x-0 text-center px-4">
        <p className="text-white/30 text-[11px] sm:text-xs leading-relaxed">
          Raw, unedited screenshot from Upwork mobile app — verify on our team&apos;s Upwork profiles
        </p>
      </div>
    </motion.div>
  );
}

/* ── Main Section ── */
export function UpworkReviewsSection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [visibleRows, setVisibleRows] = useState(2);

  const openLightbox = (globalIndex: number) => setLightboxIndex(globalIndex);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev + 1) % REVIEWS.length
    );
  }, []);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev - 1 + REVIEWS.length) % REVIEWS.length
    );
  }, []);

  /* Keyboard navigation + body scroll lock */
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [lightboxIndex, goNext, goPrev]);

  // Split reviews into chunks of 7 for the marquee rows
  const chunkSize = 7;
  const chunkedReviews = [];
  for (let i = 0; i < REVIEWS.length; i += chunkSize) {
    chunkedReviews.push(REVIEWS.slice(i, i + chunkSize));
  }

  // Helper to ensure enough items in a row for seamless looping
  const getMarqueeItems = (chunk: typeof REVIEWS) => {
    if (chunk.length >= 7) return [...chunk, ...chunk];
    return [...chunk, ...chunk, ...chunk, ...chunk]; // Repeat more times for shorter chunks
  };

  return (
    <section className="w-full mx-auto py-20 overflow-hidden">
      {/* ── Section Header ── */}
      <div className="text-center mb-14 px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#14a800]/30 bg-[#14a800]/10 text-[#14a800] text-xs font-semibold uppercase tracking-wider mb-5">
          <ShieldCheck className="w-3.5 h-3.5" />
          Verified Upwork Reviews
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-5">
          What Our{' '}
          <span className="bg-gradient-to-r from-[#14a800] via-emerald-500 to-teal-500 bg-clip-text text-transparent">
            Clients
          </span>{' '}
          Say
        </h2>
      </div>

      {/* ── Marquee Visual Sliders Container ── */}
      <div className="mt-8 w-full">
        {chunkedReviews.slice(0, visibleRows).map((chunk, rowIndex) => {
          const isLeft = rowIndex % 2 === 0;
          const animationClass = isLeft ? 'animate-marquee-left' : 'animate-marquee-right';
          const items = getMarqueeItems(chunk);
          
          return (
            <div key={`row-${rowIndex}`} className="relative w-full flex overflow-hidden group">
              <div 
                className={`${animationClass} flex gap-2 md:gap-6 py-1 md:py-4 px-3 group-hover:[animation-play-state:paused]`}
                style={{ animationDuration: '100s' }}
              >
                {items.map((review, i) => {
                  const globalIndex = REVIEWS.indexOf(review);
                  return (
                    <ReviewCard
                      key={`row${rowIndex}-${globalIndex}-${i}`}
                      review={review}
                      index={i}
                      globalIndex={globalIndex}
                      onOpen={openLightbox}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Pagination Buttons ── */}
      <div className="flex items-center justify-center gap-4 mt-10">
        {visibleRows > 2 && (
          <button
            onClick={() => setVisibleRows(2)}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-gray-200 bg-white text-gray-700 text-sm font-semibold hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 cursor-pointer"
          >
            Show Less
          </button>
        )}

        {visibleRows < chunkedReviews.length && (
          <button
            onClick={() => setVisibleRows((prev) => prev + 2)}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-[#14a800]/30 bg-[#14a800]/10 text-[#14a800] text-sm font-semibold hover:bg-[#14a800]/20 hover:border-[#14a800]/50 transition-all duration-300 cursor-pointer"
          >
            Show More Reviews
            <ExternalLink className="w-3.5 h-3.5 ml-1" />
          </button>
        )}
      </div>

      {/* ── Lightbox Portal ── */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <ReviewLightbox
            index={lightboxIndex}
            onClose={closeLightbox}
            onNext={goNext}
            onPrev={goPrev}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
