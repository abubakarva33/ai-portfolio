import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  generateEtags: false,
  // ── Disable Caching ───────────────────────────────────────────────────────
  // Prevent Next.js from serving stale pages during development
  experimental: {
    staleTimes: {
      dynamic: 0,
      static: 0,
    },
  },

  // ── Image Optimization ────────────────────────────────────────────────────
  images: {
    unoptimized: true,
    remotePatterns: [
      // Webflow CDN images
      {
        protocol: 'https',
        hostname: 'cdn.prod.website-files.com',
        pathname: '/**',
      },
      // Cloudinary
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
      // Placeholder images
      {
        protocol: 'https',
        hostname: 'placehold.co',
        pathname: '/**',
      },
      // Unsplash
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
    // Optimize modern image formats for Core Web Vitals
    formats: ['image/avif', 'image/webp'],
  },

  // ── Compiler Options ──────────────────────────────────────────────────────
  // Remove console.log in production builds
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
      ? { exclude: ['error', 'warn'] }
      : false,
  },

  // ── Headers ───────────────────────────────────────────────────────────────
  async headers() {
    return [
      {
        // Disable browser caching for all pages — ensures code changes are immediately visible
        source: '/:path*',
        headers: [
          { key: 'Cache-Control', value: 'no-store, no-cache, must-revalidate, proxy-revalidate' },
          { key: 'Pragma', value: 'no-cache' },
          { key: 'Expires', value: '0' },
        ],
      },
      {
        // Protect the revalidation endpoint — additional layer beyond secret token
        source: '/api/revalidate',
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex, nofollow' },
        ],
      },
    ];
  },
};

export default nextConfig;
