'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Briefcase, Layers, DollarSign, Menu, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';
import { AnimatedButton } from '@/components/ui/AnimatedButton';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact', href: '/contact' },
];

export const BottomNav = () => {
  const pathname = usePathname();

  const renderNavLink = (item: typeof navItems[0]) => {
    const isActive = item.href === '/' ? pathname === '/' : (pathname?.startsWith(item.href) ?? false);

    return (
      <Link
        key={item.label}
        href={item.href}
        prefetch={true}
        className="relative z-10 flex flex-col md:flex-row items-center justify-center p-2 group w-full md:w-auto md:px-3 md:py-2 transition-colors hover:bg-white/5 md:hover:bg-transparent"
      >
        <span
          className={cn(
            "text-[11px] md:text-sm font-medium transition-colors",
            isActive ? 'text-white' : 'text-gray-400 group-hover:text-white'
          )}
        >
          {item.label}
        </span>
      </Link>
    );
  };

  return (
    <div className="fixed bottom-0 md:bottom-8 left-0 w-full md:w-auto md:left-1/2 md:-translate-x-1/2 z-50 flex justify-center">
      <nav
        className={cn(
          "relative w-full max-w-lg md:max-w-none",
          "md:flex md:items-center md:gap-6 md:px-6 md:py-3 md:rounded-[1.25rem] md:bg-[#0a0a0a]",
          "md:border-t md:border-[#30ff97]/40 md:shadow-[inset_0_2px_4px_#30ff9766]",
          "grid grid-cols-[1fr_1fr_auto_1fr_1fr] h-[80px] items-center justify-items-center px-2 rounded-t-[1rem]",
          "bg-transparent"
        )}
      >
        {/* Mobile SVG Curve (hidden on desktop) */}
        <div className="absolute inset-0 pointer-events-none md:hidden overflow-hidden rounded-t-[1rem]" style={{ zIndex: 0 }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 375 92" preserveAspectRatio="xMidYMin slice" fill="none">
            <g filter="url(#filter0_i_14_1436)">
              <path d="M150 8C150 3.58172 146.418 0 142 0H18C8.05908 0 0 8.05859 0 18V92H375V18C375 8.05859 366.941 0 357 0H232C227.582 0 224 3.58172 224 8V21C224 34.8066 218.307 46 204.5 46H170C156.193 46 150 34.8066 150 21V8Z" fill="#0A0A0A" />
            </g>
            <defs>
              <filter id="filter0_i_14_1436" x="0" y="0" width="375" height="95" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="3" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.188235 0 0 0 0 1 0 0 0 0 0.592157 0 0 0 0.4 0" />
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_14_1436" />
              </filter>
            </defs>
          </svg>
        </div>

        {/* Left Nav Items */}
        {navItems.slice(0, 2).map(renderNavLink)}

        {/* Center Action Button */}
        <div className="relative z-20 flex justify-center group md:px-2 self-start md:self-auto w-[74px] md:w-auto">
          {/* Reusable AnimatedButton for Desktop */}
          <div className="hidden md:block">
            <AnimatedButton href="/contact" text="Start a Project" speed="normal" />
          </div>

          {/* Mobile Button Content */}
          <Link
            href="/contact"
            prefetch={true}
            className="md:hidden absolute top-[-23px] left-1/2 -translate-x-1/2 w-[64px] h-[64px] rounded-[1.25rem] p-[1.5px] overflow-hidden shadow-[0_4px_20px_rgba(139,92,246,0.3)] bg-[#0a0a0a]"
          >
            {/* Rotating Glow Border */}
            <div className="absolute -inset-[100%] bg-[conic-gradient(from_0deg_at_50%_50%,#ffffff_0deg,#30ff97_45deg,#a855f7_90deg,#6366f1_120deg,transparent_150deg,transparent_360deg)] animate-[spin_2.5s_linear_infinite]" />

            {/* Inner Button Box */}
            <div className="relative w-full h-full [background-image:linear-gradient(#592db5_25%,#7d40ff)] shadow-[inset_0_1.5px_3px_rgba(255,255,255,0.72)] rounded-[1.15rem] flex items-center justify-center transform transition-transform group-hover:scale-[0.96] overflow-hidden">
              <MessageSquare className="relative z-10 w-7 h-7 text-white" />
            </div>
          </Link>
        </div>

        {/* Right Nav Items */}
        {navItems.slice(2).map(renderNavLink)}
      </nav>
    </div>
  );
};
