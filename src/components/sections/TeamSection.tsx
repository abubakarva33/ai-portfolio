'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { Bot, Code2, Zap, ExternalLink, Star, MapPin } from 'lucide-react';

/* Brand icons removed from lucide-react v1.0 — inline SVGs */
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
import Link from 'next/link';

const skills = [
  { label: 'n8n Automation', level: 95, color: 'bg-orange-500' },
  { label: 'GoHighLevel (GHL)', level: 92, color: 'bg-cyan-500' },
  { label: 'Make.com', level: 90, color: 'bg-purple-500' },
  { label: 'Zapier', level: 88, color: 'bg-yellow-500' },
  { label: 'React.js / Next.js', level: 93, color: 'bg-sky-500' },
  { label: 'Node.js / Express', level: 90, color: 'bg-green-500' },
  { label: 'AI / LLM Integration', level: 85, color: 'bg-violet-500' },
  { label: 'MongoDB / MySQL', level: 85, color: 'bg-emerald-500' },
];

const highlights = [
  { icon: Bot, label: 'AI Automation Expert', desc: 'n8n, Make, Zapier, GHL', color: 'text-violet-400', bg: 'bg-violet-500/10', border: 'border-violet-500/20' },
  { icon: Code2, label: 'Full Stack Developer', desc: 'React, Next.js, Node.js, MERN', color: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/20' },
  { icon: Zap, label: 'GHL Specialist', desc: 'AI Chatbots, Funnels, CRM', color: 'text-orange-400', bg: 'bg-orange-500/10', border: 'border-orange-500/20' },
];

export function TeamSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400 text-xs font-bold uppercase tracking-wider mb-4">
          About Me
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Passionate About{' '}
          <span className="font-hero-serif font-normal italic text-violet-600">AI & Automation</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          I&apos;m a dedicated AI Automation Specialist and Full Stack Developer helping businesses save time, 
          reduce costs, and scale with intelligent automation and premium web applications.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left — Profile Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-3xl border border-violet-200 p-8 shadow-xl"
        >
          <div className="flex flex-col sm:flex-row gap-8 items-start">
            {/* Avatar */}
            <div className="relative shrink-0 mx-auto sm:mx-0">
              <div className="w-36 h-36 rounded-2xl overflow-hidden border-4 border-violet-200 shadow-lg bg-gradient-to-br from-violet-100 to-indigo-100 flex items-center justify-center">
                <span className="text-5xl font-black text-violet-600">AS</span>
              </div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-xs font-bold text-violet-600 uppercase tracking-wider whitespace-nowrap bg-white shadow-sm">
                Available Now
              </div>
            </div>

            {/* Info */}
            <div className="flex flex-col justify-start text-center sm:text-left pt-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-1">Abubakar Siddik</h3>
              <p className="text-sm font-bold text-violet-600 mb-1 uppercase tracking-wide">AI Automation Specialist</p>
              <p className="text-sm text-gray-500 mb-3">Full Stack Web Developer</p>
              <div className="flex items-center gap-1.5 text-sm text-gray-500 justify-center sm:justify-start mb-4">
                <MapPin className="w-4 h-4 text-violet-400" />
                <span>Available Globally (Remote)</span>
              </div>

              {/* Star rating */}
              <div className="flex items-center gap-1 justify-center sm:justify-start mb-4">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-sm text-gray-600 ml-1 font-medium">5.0 on Upwork</span>
              </div>

              {/* Social links */}
              <div className="flex gap-3 justify-center sm:justify-start">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-500 hover:bg-sky-500/20 transition-colors">
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-gray-500/10 border border-gray-500/20 flex items-center justify-center text-gray-600 hover:bg-gray-500/20 transition-colors">
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a href="https://www.upwork.com" target="_blank" rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-600 hover:bg-green-500/20 transition-colors">
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Bio */}
          <p className="text-gray-600 leading-relaxed mt-6 text-sm border-t border-gray-100 pt-5">
            I&apos;m Abubakar Siddik, an AI Automation Specialist and Full Stack Developer with 3+ years of hands-on experience 
            building intelligent automation systems and modern web applications. I specialize in <strong>n8n, Make.com, GoHighLevel (GHL), 
            and Zapier</strong> for AI automation, and <strong>React.js, Next.js, Node.js</strong> for full-stack web development.
            I help businesses streamline operations, build AI chatbots, and create high-converting web experiences.
          </p>

          {/* Highlight chips */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6">
            {highlights.map((item, i) => (
              <div key={i} className={`flex flex-col items-center gap-2 p-3 rounded-xl ${item.bg} border ${item.border} text-center`}>
                <item.icon className={`w-5 h-5 ${item.color}`} />
                <p className="text-xs font-bold text-gray-900">{item.label}</p>
                <p className="text-[10px] text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right — Skills */}
        <motion.div
          id="skills"
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="space-y-5"
        >
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-3">
              Technical Skills
            </div>
            <h3 className="text-2xl font-bold text-white">My Expertise Level</h3>
            <p className="text-gray-400 text-sm mt-2">Years of hands-on experience across AI tools and web technologies</p>
          </div>

          {skills.map((skill, i) => (
            <motion.div
              key={skill.label}
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-sm font-semibold text-gray-200">{skill.label}</span>
                <span className="text-xs font-bold text-gray-400">{skill.level}%</span>
              </div>
              <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  className={`h-full ${skill.color} rounded-full`}
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: 0.3 + i * 0.08, ease: 'easeOut' }}
                />
              </div>
            </motion.div>
          ))}

          {/* CTA */}
          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold text-sm hover:scale-105 transition-transform shadow-lg shadow-violet-500/30"
            >
              <Zap className="w-4 h-4" />
              Let&apos;s Work Together
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
