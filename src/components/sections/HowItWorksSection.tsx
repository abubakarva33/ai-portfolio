'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MessageSquare, Workflow, Rocket, BarChart2, Lightbulb, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Discovery & Requirements',
    subtitle: 'Understanding Your Vision',
    description:
      'We start with a deep-dive consultation to understand your business, pain points, and goals. Whether it\'s automating workflows or building a web app, I map out exactly what\'s needed.',
    highlights: ['Free Strategy Call', 'Business Needs Analysis', 'Scope Definition'],
  },
  {
    number: '02',
    icon: Lightbulb,
    title: 'Strategy & Architecture',
    subtitle: 'Blueprint for Success',
    description:
      'I design a custom solution blueprint — choosing the right tools (n8n, Make, Zapier, GHL or React/Next.js) and mapping the architecture for maximum efficiency and scalability.',
    highlights: ['Tool Selection', 'System Architecture', 'Timeline Planning'],
  },
  {
    number: '03',
    icon: Workflow,
    title: 'Build & Automate',
    subtitle: 'Expert Execution',
    description:
      'I build your automation workflows or web application with precision. Every component is crafted for reliability, performance, and ease of use — no bloat, just results.',
    highlights: ['Automation Workflows', 'Clean Code Development', 'Integration Setup'],
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Launch & Optimize',
    subtitle: 'Go Live & Scale',
    description:
      'After rigorous testing, we launch your solution. I provide training, documentation, and ongoing support to ensure everything runs smoothly — and scales with your business.',
    highlights: ['Testing & QA', 'Deployment & Launch', 'Ongoing Support'],
  },
];

const StepCard = ({ step, index }: { step: typeof steps[0]; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start 80%", "center center"]
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  const borderColor = useTransform(scrollYProgress, [0.8, 1], ['rgba(255,255,255,0.05)', 'rgba(139, 92, 246, 0.5)']);
  const glowOpacity = useTransform(scrollYProgress, [0.8, 1], [0, 1]);

  const isEven = index % 2 === 0;

  return (
    <div ref={cardRef} className="relative w-full flex items-center justify-center py-0">
      {/* Central Timeline Node (Desktop) */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full items-center justify-center z-20">
        <motion.div
          className="absolute inset-0 rounded-full bg-violet-500 blur-md"
          style={{ opacity: glowOpacity }}
        />
        <motion.div
          className="w-4 h-4 rounded-full bg-white relative z-10 shadow-[0_0_15px_rgba(255,255,255,0.8)]"
        />
      </div>

      {/* Card Content Container */}
      <div className={`w-full max-w-2xl flex ${isEven ? 'md:mr-auto md:pr-16 lg:pr-24' : 'md:ml-auto md:pl-16 lg:pl-24'}`}>
        <motion.div
          style={{ opacity, scale, borderColor }}
          className="relative w-full glass-card rounded-[2rem] p-4 md:p-5 border border-white/5 bg-[#0a0a0f]/80 backdrop-blur-xl overflow-hidden group"
        >
          {/* Active Glow Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-indigo-500/5 pointer-events-none"
            style={{ opacity: glowOpacity }}
          />

          <div className="relative z-10">
            {/* Header */}
            <div className="flex items-center gap-4 mb-4">
              <div className="hidden md:flex w-14 h-14 rounded-2xl bg-white/5 border border-white/10 items-center justify-center shrink-0 shadow-inner group-hover:bg-violet-500/20 group-hover:border-violet-500/30 transition-all duration-500">
                <step.icon className="w-6 h-6 text-violet-400" />
              </div>
              <div>
                <span className="text-violet-400 font-mono text-sm font-bold tracking-widest">{step.number} — PHASE</span>
                <h3 className="text-2xl font-bold text-white tracking-tight">{step.title}</h3>
              </div>
            </div>

            <p className="text-sm font-semibold text-purple-300 uppercase tracking-wider mb-2">{step.subtitle}</p>
            <p className="text-gray-400 leading-relaxed text-sm mb-4">{step.description}</p>

            {/* Highlights */}
            <div className="space-y-2">
              {step.highlights.map((highlight, i) => (
                <div key={i} className="flex items-center gap-3 text-sm font-medium text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  {highlight}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export function HowItWorksSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end 80%"]
  });

  return (
    <section ref={containerRef} className="relative py-32 rounded-[3rem] overflow-hidden">
      {/* Ambient Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto pr-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-400 text-xs font-bold uppercase tracking-wider mb-6">
            <Rocket className="w-4 h-4" /> My Process
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6">
            How I Turn Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400 italic font-serif font-normal">
              Ideas Into Reality
            </span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            A proven four-phase process to deliver automation systems and web apps that actually work — on time and on budget.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Main Vertical Track */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/5 -translate-x-1/2 rounded-full overflow-hidden">
            {/* Animated Progress Line */}
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-violet-500 via-indigo-500 to-cyan-500 origin-top"
              style={{ scaleY: scrollYProgress, height: '100%' }}
            />
          </div>

          {/* Steps */}
          <div className="relative z-10 pl-12 md:pl-0 flex flex-col">
            {steps.map((step, index) => (
              <StepCard key={step.number} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
