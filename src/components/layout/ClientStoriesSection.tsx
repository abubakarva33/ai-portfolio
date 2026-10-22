'use client';

/**
 * ClientStoriesSection — Client Component
 *
 * Handles the interactive video slider: play/pause on hover/click,
 * auto-advance carousel, responsive card sizing.
 *
 * Video testimonial data is fetched on the server (in the page that renders
 * this component) and passed via `initialTestimonials` props.
 * No data fetching happens here.
 */

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { Play } from 'lucide-react';

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  logoUrl?: string;
  clientAvatar?: string;
  videoUrl?: string;
  quote: string;
}

function CardItem({
  item,
  activePlayingId,
  setActivePlayingId,
}: {
  item: TestimonialItem;
  activePlayingId: string | null;
  setActivePlayingId: (id: string | null) => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isPlaying = activePlayingId === item.id;

  // Handle effect when active playing state changes externally or internally
  React.useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.currentTime = 0;
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            if (videoRef.current) {
              videoRef.current.muted = true;
              videoRef.current.play().catch(() => { });
            }
          });
        }
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [isPlaying]);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
    }
    setActivePlayingId(item.id);
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    if (activePlayingId === item.id) {
      setActivePlayingId(null);
    }
  };

  const handleClick = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
    }
    if (activePlayingId === item.id) {
      setActivePlayingId(null);
    } else {
      setActivePlayingId(item.id);
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className="relative flex-shrink-0 w-[78vw] sm:w-[320px] md:w-[340px] h-[540px] sm:h-[620px] rounded-3xl overflow-hidden shadow-2xl cursor-pointer group transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 select-none"
    >
      {/* Background Poster Image */}
      <Image
        src={item?.clientAvatar || ''}
        alt={item.name}
        fill
        sizes="(max-width: 640px) 78vw, 340px"
        className={`object-cover transition-opacity duration-300 ${isPlaying ? 'opacity-0' : 'opacity-100'
          }`}
      />

      {/* Video element */}
      {item.videoUrl && (
        <video
          ref={videoRef}
          src={item.videoUrl}
          loop
          playsInline
          preload="auto"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isPlaying ? 'opacity-100' : 'opacity-0'
            }`}
        />
      )}

      {/* Overlay Play Button Icon (Center) when paused */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
            <Play className="w-7 h-7 fill-white translate-x-0.5" />
          </div>
        </div>
      )}

      {/* Subtle Gradient Overlay for text contrast */}
      <div
        className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none z-10 transition-opacity duration-300 ${isPlaying ? 'opacity-0' : 'opacity-100'
          }`}
      />

      {/* Content overlay at bottom */}
      <div
        className={`absolute bottom-0 left-0 right-0 p-6 z-20 flex flex-col justify-end text-white space-y-4 transition-opacity duration-300 ${isPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
      >
        {item.logoUrl && (
          <div className="h-10 flex items-center">
            <Image
              src={item.logoUrl}
              alt={item.company}
              width={140}
              height={32}
              className="h-8 w-auto object-contain filter brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
            />
          </div>
        )}

        <p className="text-sm font-medium text-gray-200 line-clamp-3 leading-relaxed drop-shadow-sm">
          &quot;{item.quote}&quot;
        </p>

        <div className="pt-2 border-t border-white/15">
          <h4 className="text-base font-semibold text-white tracking-tight">{item.name}</h4>
          <p className="text-xs text-gray-400 font-normal">
            {item.role} <span className="text-indigo-400 font-medium">@ {item.company}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export function ClientStoriesSection({ initialTestimonials = [] }: { initialTestimonials?: TestimonialItem[] }) {
  const [activePlayingId, setActivePlayingId] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Use server-fetched data passed as props — no client-side fetching
  const mappedTestimonials: TestimonialItem[] = initialTestimonials;

  // Triple items array for infinite forward looping
  const carouselItems = React.useMemo(() => {
    return [...mappedTestimonials, ...mappedTestimonials, ...mappedTestimonials];
  }, [mappedTestimonials]);

  // Auto-advance step forward every 2.5 seconds (2s pause + 0.5s movement)
  React.useEffect(() => {
    if (isHovered || activePlayingId) return;

    const timer = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }, 2500);

    return () => clearInterval(timer);
  }, [isHovered, activePlayingId]);

  // Handle seamless reset when reaching end of duplicated set
  const handleTransitionEnd = () => {
    if (currentIndex >= mappedTestimonials.length) {
      setIsTransitioning(false);
      setCurrentIndex((prev) => prev % mappedTestimonials.length);
    }
  };

  const [cardWidth, setCardWidth] = useState(340);

  // Measure card width dynamically on mount and resize
  React.useEffect(() => {
    const updateWidth = () => {
      if (window.innerWidth < 640) {
        setCardWidth(window.innerWidth * 0.78 + 24);
      } else if (window.innerWidth < 768) {
        setCardWidth(320 + 24);
      } else {
        setCardWidth(340 + 24);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  // Card width + gap translation
  const translateX = -(currentIndex * cardWidth);

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-indigo-600/10 via-purple-600/10 to-sky-500/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            {/* Tag Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Client Stories
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black tracking-tight leading-[1.15]">
              Success <span className="italic font-serif text-indigo-300 font-normal">Stories</span> <br className="hidden sm:block" />
              That <span className="italic font-serif text-sky-300 font-normal">Inspire Us</span>
            </h2>
          </div>
        </div>
      </div>

      {/* Step-by-Step Infinite Cards Track */}
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="overflow-hidden w-full py-4 select-none px-4 sm:px-6 lg:px-8"
      >
        <div
          onTransitionEnd={handleTransitionEnd}
          className={`flex gap-6 ${isTransitioning ? 'transition-transform duration-700 ease-in-out' : 'transition-none'
            }`}
          style={{
            transform: `translateX(${translateX}px)`,
          }}
        >
          {carouselItems.map((item, index) => (
            <CardItem
              key={`${item.id}-${index}`}
              item={item}
              activePlayingId={activePlayingId}
              setActivePlayingId={setActivePlayingId}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
