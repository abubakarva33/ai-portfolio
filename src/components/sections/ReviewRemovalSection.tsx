'use client';

import { motion } from 'framer-motion';
import { Bot, CheckCircle, Zap, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const automationSteps = [
  { label: 'New lead captured via GHL form', done: true },
  { label: 'AI qualifies lead automatically', done: true },
  { label: 'Personalized email sent via n8n', done: true },
  { label: 'Follow-up SMS triggered via Zapier', done: false },
];

export function ReviewRemovalSection() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % automationSteps.length);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-10 md:mt-12 py-10 md:py-12 px-6 sm:px-10 lg:px-16 bg-gradient-to-br from-violet-50 via-slate-50 to-cyan-50 rounded-[2rem] relative overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 mb-8">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[30rem] h-[30rem] bg-violet-200/40 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-32 -left-32 w-[30rem] h-[30rem] bg-cyan-200/40 rounded-full blur-[100px]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGRlZnM+PHBhdHRlcm4gaWQ9ImEiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgNDBoNDBWMEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDQwaDQwVjBIMHoiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNMCAuNWg0MG0tNDAgMzlINDBNMzkuNSAwdjQwbS0zOS00MHY0MCIgc3Ryb2tlPSJyZ2JhKDAsMCwwLDAuMDUpIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+')] opacity-[0.15]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
        
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-400/30 text-violet-600 text-xs font-bold uppercase tracking-wider mb-4">
            <Zap className="w-3.5 h-3.5" /> Live Automation Demo
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight leading-tight">
            Automate Your Business{' '}
            <span className="font-hero-serif font-normal italic text-violet-600">
              on Autopilot
            </span>
          </h2>
          
          <p className="text-gray-600 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
            I build intelligent automation workflows that handle lead capture, AI qualification, email follow-ups, 
            CRM updates, and more — all while you sleep. Using n8n, GHL, Make, and Zapier.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 items-center lg:items-start justify-center lg:justify-start">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold text-sm shadow-lg shadow-violet-500/30 hover:scale-105 transition-transform group"
            >
              <Bot className="w-4 h-4" />
              Get Your Automation Built
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl border border-gray-200 text-gray-700 font-semibold text-sm hover:border-violet-300 hover:text-violet-600 transition-all"
            >
              View Services
            </Link>
          </div>
        </div>

        {/* Animated Workflow Mockup */}
        <div className="flex-shrink-0 w-full max-w-sm">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-5 space-y-3">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-violet-100 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-violet-600" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900">AI Lead Automation</p>
                  <p className="text-[10px] text-gray-500">n8n + GHL + Zapier</p>
                </div>
              </div>
              <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full border border-emerald-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Running
              </span>
            </div>

            <div className="space-y-2">
              {automationSteps.map((step, i) => (
                <motion.div
                  key={i}
                  className={`flex items-center gap-3 p-3 rounded-xl border transition-all duration-500 ${
                    i === activeStep
                      ? 'bg-violet-50 border-violet-200'
                      : i < activeStep
                      ? 'bg-gray-50 border-gray-100'
                      : 'bg-white border-gray-100'
                  }`}
                  animate={{ scale: i === activeStep ? 1.02 : 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                    i < activeStep ? 'bg-emerald-100' : i === activeStep ? 'bg-violet-100' : 'bg-gray-100'
                  }`}>
                    {i < activeStep ? (
                      <CheckCircle className="w-3 h-3 text-emerald-600" />
                    ) : i === activeStep ? (
                      <motion.div
                        className="w-2 h-2 rounded-full bg-violet-600"
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ repeat: Infinity, duration: 0.8 }}
                      />
                    ) : (
                      <div className="w-2 h-2 rounded-full bg-gray-300" />
                    )}
                  </div>
                  <p className={`text-xs font-medium ${
                    i < activeStep ? 'text-gray-500 line-through' : i === activeStep ? 'text-violet-700' : 'text-gray-400'
                  }`}>
                    {step.label}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
              <p className="text-[10px] text-gray-400">Automated by Abubakar Siddik</p>
              <span className="text-[10px] font-bold text-violet-600">Saving 20+ hrs/week</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
