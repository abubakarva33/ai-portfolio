'use client';

import { useEffect, useRef } from 'react';
import Script from 'next/script';

declare global {
  interface Window {
    leadConnector?: {
      chatWidget?: {
        openWidget: () => void;
        closeWidget: () => void;
        isActive: () => boolean;
      };
    };
  }
}

const WIDGET_ID = '6af0b8eb5c2083470f69150b';
const AUTO_OPEN_DELAY_MS = 30000; // 30 seconds

export const GhlChatWidget = () => {
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Function to safely trigger the GHL chat widget
    const triggerOpen = () => {
      if (typeof window === 'undefined') return;

      const widget = window.leadConnector?.chatWidget;
      if (widget) {
        try {
          if (typeof widget.isActive === 'function') {
            if (!widget.isActive()) {
              widget.openWidget();
            }
          } else {
            widget.openWidget();
          }
        } catch (e) {
          console.warn('[GHL Chat] Failed to open widget:', e);
        }
      }
    };

    // Set the 30-second auto-open timer
    timerRef.current = setTimeout(() => {
      if (window.leadConnector?.chatWidget) {
        triggerOpen();
      } else {
        // Retry polling briefly until leadConnector script completes initialization
        const pollInterval = setInterval(() => {
          if (window.leadConnector?.chatWidget) {
            clearInterval(pollInterval);
            triggerOpen();
          }
        }, 500);

        // Stop polling after 15 seconds if script failed to load
        setTimeout(() => clearInterval(pollInterval), 15000);
      }
    }, AUTO_OPEN_DELAY_MS);

    // Also support custom trigger buttons on the page with data-open-chat="true"
    const handleGlobalClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (target?.closest('[data-open-chat="true"]')) {
        event.preventDefault();
        triggerOpen();
      }
    };

    document.addEventListener('click', handleGlobalClick);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      document.removeEventListener('click', handleGlobalClick);
    };
  }, []);

  return (
    <Script
      src="https://widgets.leadconnectorhq.com/loader.js"
      data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
      data-widget-id={WIDGET_ID}
      strategy="afterInteractive"
    />
  );
};

