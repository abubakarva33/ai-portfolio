'use client';

/**
 * NavbarClient — Personal Portfolio Navbar
 * Abubakar Siddik | AI Automation Specialist + Full Stack Developer
 */

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, ArrowRight, Bot, Code2, Zap, BookOpen, FileText, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import type { SiteSettings, CategoryItem } from '@/types';

interface NavbarClientProps {
  settings: SiteSettings | null;
  categories: CategoryItem[];
}

const aiServices = [
  { name: 'n8n Automation', href: '#services', desc: 'Custom n8n workflows & AI agent pipelines' },
  { name: 'Make.com Automation', href: '#services', desc: 'Visual automation scenarios with Make' },
  { name: 'GoHighLevel (GHL)', href: '#services', desc: 'GHL CRM automation, funnels & AI chatbots' },
  { name: 'Zapier Workflows', href: '#services', desc: 'Multi-step Zapier automations & integrations' },
  { name: 'AI Chatbot Development', href: '#services', desc: 'Custom AI chatbots with LLM integrations' },
];

const webServices = [
  { name: 'React.js / Next.js Apps', href: '#services', desc: 'Modern, high-performance web applications' },
  { name: 'Node.js / Express APIs', href: '#services', desc: 'Scalable REST APIs & backend services' },
  { name: 'MERN Stack Development', href: '#services', desc: 'Full-stack MongoDB, Express, React, Node' },
  { name: 'GHL Website + Forms', href: '#services', desc: 'GHL landing pages, forms & CRM integration' },
];

const resourceLinks = [
  { name: 'Blog & Insights', href: '/blog', icon: BookOpen, desc: 'AI automation tips & web dev guides' },
  { name: 'Case Studies', href: '/case-studies', icon: FileText, desc: 'Real client project results' },
  { name: 'FAQ', href: '#faq', icon: HelpCircle, desc: 'Common questions answered' },
];

const announcementText = '🤖 Open for AI Automation & Web Dev projects — Let\'s build something amazing!';

export function NavbarClient({ settings, categories }: NavbarClientProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [announcementVisible, setAnnouncementVisible] = useState(true);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* ── Announcement Bar ── */}
      <AnimatePresence>
        {announcementVisible && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 text-white text-xs font-semibold py-2 px-4 text-center flex items-center justify-center gap-3 relative z-50"
          >
            <span>{announcementText}</span>
            <Link prefetch={false}
              href="/contact"
              className="underline underline-offset-2 hover:no-underline transition-all"
            >
              Get In Touch →
            </Link>
            <button
              onClick={() => setAnnouncementVisible(false)}
              className="absolute right-3 top-1/2 -translate-y-1/2 opacity-70 hover:opacity-100"
              aria-label="Dismiss"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Main Header ── */}
      <header
        className={cn(
          'fixed left-0 right-0 z-40 transition-all duration-300',
          announcementVisible ? 'top-8' : 'top-0',
          isScrolled
            ? 'glass-panel py-3 shadow-2xl border-b border-white/10'
            : 'bg-transparent py-5 border-b border-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link prefetch={false} href="/" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-600 to-cyan-400 flex items-center justify-center shadow-lg shadow-violet-500/30 group-hover:scale-105 transition-transform">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-extrabold tracking-tight text-white group-hover:text-violet-300 transition-colors leading-none">
                  Abubakar <span className="text-gradient">Siddik</span>
                </span>
                <span className="text-[9px] uppercase font-bold tracking-widest text-violet-400/80 mt-0.5">
                  AI Automation · Full Stack Dev
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2">
              <Link prefetch={false}
                href="/"
                className={cn(
                  'px-3.5 py-2 text-sm font-medium rounded-lg transition-colors',
                  pathname === '/' ? 'text-violet-400 bg-white/5' : 'text-gray-300 hover:text-white hover:bg-white/5'
                )}
              >
                Home
              </Link>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <button
                  className={cn(
                    'flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer',
                    pathname.startsWith('/services') ? 'text-violet-400 bg-white/5' : 'text-gray-300 hover:text-white hover:bg-white/5'
                  )}
                >
                  <span>Services</span>
                  <ChevronDown className={cn('w-4 h-4 transition-transform', servicesDropdownOpen && 'rotate-180')} />
                </button>

                <AnimatePresence>
                  {servicesDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 top-full pt-2 w-[520px] z-50"
                    >
                      <div className="glass-panel rounded-2xl p-4 shadow-2xl border border-white/15">
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-violet-400 mb-2 flex items-center gap-1.5">
                              <Bot className="w-3 h-3" /> AI Automation
                            </p>
                            {aiServices.map((svc, i) => (
                              <Link prefetch={false}
                                key={i}
                                href={svc.href}
                                className="block p-2.5 rounded-xl hover:bg-white/10 transition-colors group"
                              >
                                <div className="text-sm font-semibold text-white group-hover:text-violet-300 flex items-center justify-between">
                                  <span>{svc.name}</span>
                                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-violet-400" />
                                </div>
                                <p className="text-xs text-gray-400 mt-0.5 line-clamp-1">{svc.desc}</p>
                              </Link>
                            ))}
                          </div>
                          <div>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-cyan-400 mb-2 flex items-center gap-1.5">
                              <Code2 className="w-3 h-3" /> Web Development
                            </p>
                            {webServices.map((svc, i) => (
                              <Link prefetch={false}
                                key={i}
                                href={svc.href}
                                className="block p-2.5 rounded-xl hover:bg-white/10 transition-colors group"
                              >
                                <div className="text-sm font-semibold text-white group-hover:text-cyan-300 flex items-center justify-between">
                                  <span>{svc.name}</span>
                                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-cyan-400" />
                                </div>
                                <p className="text-xs text-gray-400 mt-0.5 line-clamp-1">{svc.desc}</p>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link prefetch={false}
                href="#projects"
                className={cn(
                  'px-3.5 py-2 text-sm font-medium rounded-lg transition-colors',
                  'text-gray-300 hover:text-white hover:bg-white/5'
                )}
              >
                Projects
              </Link>

              <Link prefetch={false}
                href="#skills"
                className={cn(
                  'px-3.5 py-2 text-sm font-medium rounded-lg transition-colors',
                  'text-gray-300 hover:text-white hover:bg-white/5'
                )}
              >
                Skills
              </Link>

              <Link prefetch={false}
                href="#about"
                className={cn(
                  'px-3.5 py-2 text-sm font-medium rounded-lg transition-colors',
                  pathname === '/about' ? 'text-violet-400 bg-white/5' : 'text-gray-300 hover:text-white hover:bg-white/5'
                )}
              >
                About
              </Link>

              <Link prefetch={false}
                href="/blog"
                className={cn(
                  'px-3.5 py-2 text-sm font-medium rounded-lg transition-colors',
                  pathname.startsWith('/blog') ? 'text-violet-400 bg-white/5' : 'text-gray-300 hover:text-white hover:bg-white/5'
                )}
              >
                Blog
              </Link>
            </nav>

            {/* CTA & Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Link prefetch={true} href="/contact" className="hidden sm:inline-flex">
                <Button variant="gradient" size="sm" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Hire Me
                </Button>
              </Link>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden glass-panel border-t border-white/10 overflow-hidden"
            >
              <div className="px-4 pt-3 pb-6 space-y-1">
                <Link prefetch={false} href="/" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2.5 text-base font-medium text-gray-200 hover:text-violet-400 rounded-lg hover:bg-white/5">Home</Link>
                <Link prefetch={false} href="#services" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2.5 text-base font-medium text-gray-200 hover:text-violet-400 rounded-lg hover:bg-white/5">Services</Link>
                <Link prefetch={false} href="#projects" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2.5 text-base font-medium text-gray-200 hover:text-violet-400 rounded-lg hover:bg-white/5">Projects</Link>
                <Link prefetch={false} href="#skills" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2.5 text-base font-medium text-gray-200 hover:text-violet-400 rounded-lg hover:bg-white/5">Skills</Link>
                <Link prefetch={false} href="#about" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2.5 text-base font-medium text-gray-200 hover:text-violet-400 rounded-lg hover:bg-white/5">About</Link>
                <Link prefetch={false} href="/blog" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2.5 text-base font-medium text-gray-200 hover:text-violet-400 rounded-lg hover:bg-white/5">Blog</Link>
                <Link prefetch={false} href="/contact" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2.5 text-base font-medium text-gray-200 hover:text-violet-400 rounded-lg hover:bg-white/5">Contact</Link>
                <div className="pt-3 space-y-2">
                  <Link prefetch={false} href="/contact" onClick={() => setMobileMenuOpen(false)}>
                    <Button variant="gradient" size="md" className="w-full">Hire Me</Button>
                  </Link>
                  <Link prefetch={true} href="#services" onClick={() => setMobileMenuOpen(false)}>
                    <Button variant="outline" size="md" className="w-full">View Services</Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
