/**
 * FooterClient — Personal Portfolio Footer
 * Abubakar Siddik | AI Automation Specialist & Full Stack Developer
 */

import React from 'react';
import Link from 'next/link';
import { Bot, Mail, MapPin, ArrowUpRight, Code2, Zap } from 'lucide-react';

/* Brand icons removed from lucide-react v1.0 — using inline SVGs instead */
const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
import type { SiteSettings } from '@/types';
import { FooterNewsletterForm } from './FooterNewsletterForm';
import { ScrollToTopButton } from './ScrollToTopButton';

const EXPERTISE_AREAS = [
  { name: 'Bangladesh', info: 'Based Here,\nWorking Globally' },
  { name: 'United States', info: 'US Clients\nServed Remotely' },
  { name: 'United Kingdom', info: 'UK Projects\nDelivered Online' },
  { name: 'Canada', info: 'Canadian Clients\nAutomation & Web' },
  { name: 'Australia', info: 'APAC Projects\nAI & Full Stack' },
  { name: 'UAE', info: 'Middle East\nGHL & Automation' },
  { name: 'Europe', info: 'EU Region\nMake.com & n8n' },
  { name: 'India', info: 'South Asia\nWeb Dev & APIs' },
  { name: 'Germany', info: 'DACH Region\nAutomation Expert' },
  { name: 'Singapore', info: 'Asia Pacific\nAI Workflows' },
];

interface FooterClientProps {
  settings: SiteSettings | null;
}

export function FooterClient({ settings }: FooterClientProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#06070a] text-gray-300 border-t border-white/10 relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-96 bg-violet-600/5 blur-[120px] pointer-events-none" />

      {/* Global Reach Section with Video Background */}
      <div className="theme-dark w-full pt-10 relative">
        <div className="footer-location-wapper">
          <div className="location-container">
            {EXPERTISE_AREAS.map((c) => (
              <div key={c.name} className="location-wapper">
                <div className="location-gap">
                  <p className="heading-h6">{c.name}</p>
                  <div className="text-color-tertiary">
                    <p className="body-s whitespace-pre-line">{c.info}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="footer-bg-video">
            <video loop autoPlay muted playsInline className="hero-bg-video">
              <source src="/videos/footer_globe.mp4" type="video/mp4" className="video-source" />
            </video>
            <div className="footer-bg-shadoe"></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-5">
            <Link prefetch={false} href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-violet-600 to-cyan-400 flex items-center justify-center shadow-lg shadow-violet-500/30">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-extrabold tracking-tight text-white leading-none">
                  Abubakar <span className="text-gradient">Siddik</span>
                </span>
                <span className="text-[9px] uppercase font-bold tracking-widest text-violet-400/80 mt-0.5">
                  AI Automation · Full Stack Dev
                </span>
              </div>
            </Link>

            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              AI Automation Specialist & Full Stack Developer helping businesses worldwide automate workflows, 
              build AI chatbots with GHL, and create premium web applications with React & Next.js.
            </p>

            <div className="space-y-2 text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-violet-400 shrink-0" />
                <span>Bangladesh (Available Globally · Remote)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-violet-400 shrink-0" />
                <span>{settings?.contactEmail || 'abubakar@example.com'}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 hover:bg-sky-500/20 transition-colors">
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-gray-500/10 border border-gray-500/20 flex items-center justify-center text-gray-400 hover:bg-gray-500/20 transition-colors">
                <GithubIcon className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 hover:bg-blue-500/20 transition-colors">
                <TwitterIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-4 flex items-center gap-2">
              <Bot className="w-4 h-4 text-violet-400" /> My Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#services" className="hover:text-violet-400 transition-colors">n8n Automation</a></li>
              <li><a href="#services" className="hover:text-violet-400 transition-colors">Make.com Workflows</a></li>
              <li><a href="#services" className="hover:text-violet-400 transition-colors">GoHighLevel (GHL) Setup</a></li>
              <li><a href="#services" className="hover:text-violet-400 transition-colors">Zapier Automations</a></li>
              <li><a href="#services" className="hover:text-violet-400 transition-colors flex items-center gap-1">
                <Code2 className="w-3 h-3 text-cyan-400" /> React / Next.js Apps
              </a></li>
              <li><a href="#services" className="hover:text-violet-400 transition-colors">Node.js / MERN Stack</a></li>
              <li>
                <Link prefetch={true} href="/contact" className="text-violet-400 hover:text-violet-300 font-semibold inline-flex items-center gap-1">
                  Hire Me <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase flex items-center gap-2">
              <Zap className="w-4 h-4 text-orange-400" /> Stay Updated
            </h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Subscribe to get weekly tips on AI automation, n8n workflows, GHL setup tutorials, 
              and web development best practices.
            </p>

            <FooterNewsletterForm />
          </div>
        </div>

        {/* Bottom copyright & legal */}
        <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500 relative">
          <ScrollToTopButton />

          <p>© {currentYear} Abubakar Siddik. All rights reserved. AI Automation Specialist & Full Stack Developer.</p>
          
          <div className="flex items-center gap-6">
            <Link prefetch={false} href="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link prefetch={false} href="/terms" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
            <Link prefetch={false} href="/sitemap.xml" className="hover:text-gray-300 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
