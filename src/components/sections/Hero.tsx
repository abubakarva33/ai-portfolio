'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Code2, Bot, Zap } from 'lucide-react';

const techBadges = [
  { label: 'n8n', color: 'from-orange-500 to-red-500' },
  { label: 'Make.com', color: 'from-purple-500 to-indigo-500' },
  { label: 'GoHighLevel', color: 'from-cyan-500 to-blue-500' },
  { label: 'Zapier', color: 'from-orange-400 to-yellow-500' },
  { label: 'React.js', color: 'from-cyan-400 to-sky-500' },
  { label: 'Next.js', color: 'from-gray-500 to-gray-700' },
  { label: 'Node.js', color: 'from-green-500 to-emerald-600' },
  { label: 'AI Agents', color: 'from-violet-500 to-purple-600' },
];

const floatingStats = [
  { icon: Bot, label: 'AI Automations Built', value: '100+', color: 'text-violet-400' },
  { icon: Code2, label: 'Web Apps Delivered', value: '80+', color: 'text-cyan-400' },
  { icon: Zap, label: 'Workflows Automated', value: '200+', color: 'text-orange-400' },
];

export const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden hero-purple-bg pt-28 pb-0 sm:pt-32 min-h-screen flex flex-col">
      {/* Ambient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-violet-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-600/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-6xl mx-auto w-full flex-1">

        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-semibold mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Available for new projects
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-6"
        >
          <p className="text-sm md:text-base font-bold text-violet-300 uppercase tracking-[0.25em] mb-5">
            Hi, I&apos;m
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black text-white tracking-tight leading-[1.05] mb-4">
            Abubakar{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-400 to-cyan-400">
              Siddik
            </span>
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-5">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-violet-500/30 text-violet-300 font-semibold text-sm md:text-base backdrop-blur-sm">
              <Bot className="w-4 h-4" />
              AI Automation Specialist
            </span>
            <span className="text-gray-500 font-light text-xl hidden sm:block">×</span>
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-cyan-500/30 text-cyan-300 font-semibold text-sm md:text-base backdrop-blur-sm">
              <Code2 className="w-4 h-4" />
              Full Stack Developer
            </span>
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-gray-300 text-base md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
        >
          I build intelligent AI automations with{' '}
          <span className="text-orange-400 font-semibold">n8n</span>,{' '}
          <span className="text-purple-400 font-semibold">Make.com</span>,{' '}
          <span className="text-cyan-400 font-semibold">GoHighLevel</span> &{' '}
          <span className="text-yellow-400 font-semibold">Zapier</span> — plus premium web apps
          with <span className="text-sky-400 font-semibold">React</span>,{' '}
          <span className="text-white font-semibold">Next.js</span> &{' '}
          <span className="text-green-400 font-semibold">Node.js</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 mb-14 w-full sm:w-auto"
        >
          <Link
            href="/contact"
            id="hero-hire-cta"
            className="flex sm:inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 text-white font-bold text-base shadow-lg shadow-violet-600/40 hover:shadow-violet-600/60 hover:scale-105 transition-all duration-300 border border-violet-400/30 group"
          >
            <Sparkles className="w-4 h-4" />
            <span>Hire Me</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="#services"
            id="hero-services-cta"
            className="flex sm:inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-transparent text-white font-semibold text-base hover:bg-white/5 hover:scale-105 transition-all duration-300 border border-white/20 group"
          >
            <span>View My Services</span>
          </Link>
        </motion.div>

        {/* Floating Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-14"
        >
          {floatingStats.map((stat, i) => (
            <div key={i} className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <stat.icon className={`w-5 h-5 ${stat.color}`} />
              <div className="text-left">
                <p className={`text-xl font-black ${stat.color}`}>{stat.value}</p>
                <p className="text-xs text-gray-400 font-medium">{stat.label}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Tech Badges Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-full overflow-hidden mb-0"
        >
          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-5">Tools & Technologies I Master</p>
          <div className="relative w-full overflow-hidden flex">
            <div className="animate-marquee-left flex gap-3">
              {[...techBadges, ...techBadges].map((badge, i) => (
                <span
                  key={i}
                  className={`inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-to-r ${badge.color} text-white text-sm font-bold whitespace-nowrap shadow-lg flex-shrink-0`}
                >
                  {badge.label}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#090a0f] to-transparent pointer-events-none" />
    </section>
  );
};
