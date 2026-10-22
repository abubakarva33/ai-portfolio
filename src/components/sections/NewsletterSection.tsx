import React from 'react';
import { Globe, Camera, Briefcase, Users, Send, PlayCircle, Mail, ArrowRight } from 'lucide-react';

export function NewsletterSection() {
  const socialLinks = [
    { icon: <Globe className="w-5 h-5 text-gray-700" />, href: '#' },
    { icon: <span className="font-bold text-gray-700 text-lg">Bē</span>, href: '#' },
    { icon: <Camera className="w-5 h-5 text-gray-700" />, href: '#' },
    { icon: <Briefcase className="w-5 h-5 text-gray-700" />, href: '#' },
    { icon: <Users className="w-5 h-5 text-gray-700" />, href: '#' },
    { icon: <span className="font-bold text-gray-700 text-lg">X</span>, href: '#' },
    { icon: <Send className="w-5 h-5 text-gray-700 -mt-0.5 ml-0.5" />, href: '#' },
    { icon: <PlayCircle className="w-5 h-5 text-gray-700" />, href: '#' },
  ];

  return (
    <section className="bg-white py-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
      <p className="max-w-3xl text-lg md:text-xl text-gray-600 font-medium leading-relaxed mb-10">
        Say goodbye to outdated enterprise software and welcome the smoother one. We lead you from design to product innovation to shape your path from idea to success
      </p>

      <div className="hidden flex flex-wrap justify-center gap-4 mb-16">
        {socialLinks.map((link, idx) => (
          <a
            key={idx}
            href={link.href}
            className="w-12 h-12 bg-gray-200/50 hover:bg-gray-200 rounded-xl flex items-center justify-center transition-colors"
          >
            {link.icon}
          </a>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-xl mx-auto">
        <div className="relative w-full">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="email"
            placeholder="Your email here"
            className="w-full pl-12 pr-4 py-4 bg-white border border-gray-100 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all shadow-sm"
          />
        </div>
        <button
          type="button"
          className="w-full sm:w-auto px-8 py-4 bg-[#6938ef] hover:bg-indigo-700 text-white font-semibold rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg shadow-indigo-500/30 shrink-0"
        >
          Subscribe
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
