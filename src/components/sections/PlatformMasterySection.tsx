/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Globe, Code2, Bot, Database, Server, Layers, GitBranch, Cpu } from 'lucide-react';
import Image from 'next/image';

type PlatformItem = 
  | { name: string; capability: string; type: 'image'; src: string; category: string }
  | { name: string; capability: string; type: 'icon'; icon: React.ElementType; category: string };

const platforms: PlatformItem[] = [
  // AI Automation Tools
  { name: 'n8n', capability: 'Workflow automation & AI agents', type: 'icon', icon: Bot, category: 'automation' },
  { name: 'Make.com', capability: 'Visual scenario automation', type: 'icon', icon: Layers, category: 'automation' },
  { name: 'GoHighLevel', capability: 'CRM, funnels & AI chatbots', type: 'icon', icon: Cpu, category: 'automation' },
  { name: 'Zapier', capability: 'App integrations & triggers', type: 'icon', icon: Globe, category: 'automation' },
  { name: 'OpenAI / GPT', capability: 'LLM & AI integration', type: 'icon', icon: Bot, category: 'automation' },
  { name: 'Airtable', capability: 'Database & automation base', type: 'icon', icon: Database, category: 'automation' },
  
  // Frontend
  { name: 'React.js', capability: 'UI component library', type: 'image', src: '/images/react.svg', category: 'frontend' },
  { name: 'Next.js', capability: 'Full-stack React framework', type: 'image', src: '/images/nextjs.svg', category: 'frontend' },
  { name: 'TypeScript', capability: 'Type-safe JavaScript', type: 'icon', icon: Code2, category: 'frontend' },
  { name: 'Tailwind CSS', capability: 'Utility-first CSS framework', type: 'icon', icon: Layers, category: 'frontend' },
  
  // Backend
  { name: 'Node.js', capability: 'Server-side JavaScript', type: 'image', src: '/images/nodejs.svg', category: 'backend' },
  { name: 'Express.js', capability: 'REST API framework', type: 'icon', icon: Server, category: 'backend' },
  { name: 'MongoDB', capability: 'NoSQL database', type: 'icon', icon: Database, category: 'backend' },
  { name: 'MySQL', capability: 'Relational database', type: 'icon', icon: Database, category: 'backend' },
  { name: 'REST APIs', capability: 'API design & integration', type: 'icon', icon: GitBranch, category: 'backend' },
  { name: 'Webhooks', capability: 'Real-time event handling', type: 'icon', icon: Globe, category: 'backend' },
];

const categoryColors: Record<string, string> = {
  automation: 'from-violet-500 to-indigo-500',
  frontend: 'from-cyan-500 to-sky-500',
  backend: 'from-emerald-500 to-green-500',
};

const categoryLabels: Record<string, string> = {
  automation: 'AI & Automation',
  frontend: 'Frontend',
  backend: 'Backend',
};

export function PlatformMasterySection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="skills" className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
      
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-violet-900/20 blur-[120px] rounded-[100%] pointer-events-none -z-10" />

      {/* Header Area */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-12 md:mb-16 relative z-10"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-400 text-xs font-bold uppercase tracking-wider mb-6">
          <Code2 className="w-4 h-4" /> Tech Stack & Tools
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6">
          Tools I <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400 italic font-serif font-normal">Master</span>
        </h2>
        <p className="text-gray-400 md:text-xl max-w-2xl mx-auto">
          From AI automation platforms to modern web frameworks — I work with the best tools to build 
          powerful, scalable solutions for your business.
        </p>

        {/* Category legend */}
        <div className="flex items-center justify-center gap-4 mt-8 flex-wrap">
          {Object.entries(categoryLabels).map(([key, label]) => (
            <span key={key} className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r ${categoryColors[key]} text-white text-xs font-bold`}>
              {label}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-2 relative z-10"
      >
        {platforms.map((platform) => (
          <motion.div
            key={platform.name}
            variants={itemVariants as any}
            className="group relative"
          >
            {/* Animated Hover Gradient Backdrop */}
            <div className={`absolute -inset-0.5 bg-gradient-to-r ${categoryColors[platform.category]} rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur-sm will-change-[opacity]`} />
            
            {/* Main Card Content */}
            <div className="relative flex items-center gap-1 md:gap-3 p-1 md:p-3 rounded-xl bg-[#0a0a0f] border border-white/10 group-hover:border-transparent transition-colors duration-300 overflow-hidden h-full">
              
              {/* Internal subtle glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-violet-500/10 transition-colors duration-500" />

              {/* Icon Container */}
              <div className="relative w-9 h-9 rounded-lg md:bg-white/5 md:border md:border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 z-10">
                {platform.type === 'image' ? (
                  <div className="w-6 h-6 rounded-md overflow-hidden bg-white/90 flex items-center justify-center p-1">
                    <Image
                      src={platform.src}
                      alt={platform.name}
                      width={24}
                      height={24}
                      className="w-full h-full object-contain"
                      onError={() => {}}
                    />
                  </div>
                ) : (
                  <platform.icon className="w-4 h-4 text-violet-400 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                )}
              </div>
              
              {/* Text Content */}
              <div className="min-w-0 relative z-10 flex-1">
                <p className="text-[13px] font-bold text-gray-200 group-hover:text-white truncate transition-colors duration-300">
                  {platform.name}
                </p>
                <p className="text-[10px] font-medium text-gray-500 group-hover:text-violet-200 truncate -mt-0.5 md:mt-0.5 transition-colors duration-300">
                  {platform.capability}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
