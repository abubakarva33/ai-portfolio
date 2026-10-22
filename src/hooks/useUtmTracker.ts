"use client";

import { useEffect } from "react";

export const useUtmTracker = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const searchParams = new URLSearchParams(window.location.search);
    const utmSource = searchParams.get('utm_source');

    const trackVisit = async (source: string) => {
      try {
        const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api/v1';
        await fetch(`${API_URL}/analytics/track-visit`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ utmSource: source }),
        });
      } catch (error) {
        console.error('Error tracking visit:', error);
      }
    };

    if (utmSource) {
      // Store it for 30 days
      const expiry = new Date().getTime() + 30 * 24 * 60 * 60 * 1000;
      
      // Only track if we haven't tracked this recently to avoid spam on reload
      const lastTracked = localStorage.getItem("utm_source_tracked");
      if (lastTracked !== utmSource) {
        localStorage.setItem("utm_source_tracked", utmSource as string);
        trackVisit(utmSource);
      }

      localStorage.setItem("utm_source", utmSource);
      localStorage.setItem("utm_source_expiry", expiry.toString());
    } else {
      // Check if existing utm_source has expired
      const expiry = localStorage.getItem("utm_source_expiry");
      if (expiry && new Date().getTime() > parseInt(expiry, 10)) {
        localStorage.removeItem("utm_source");
        localStorage.removeItem("utm_source_expiry");
        localStorage.removeItem("utm_source_tracked");
      }

      // If no active utm_source exists in URL or unexpired storage, track as Direct
      const activeStoredSource = localStorage.getItem("utm_source");
      if (!activeStoredSource) {
        const lastTracked = localStorage.getItem("utm_source_tracked");
        if (lastTracked !== "Direct") {
          localStorage.setItem("utm_source_tracked", "Direct");
          trackVisit("Direct");
        }
      }
    }
  }, []);
};
