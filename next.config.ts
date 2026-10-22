import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // ── Image Optimization ────────────────────────────────────────────────────
  images: {
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
