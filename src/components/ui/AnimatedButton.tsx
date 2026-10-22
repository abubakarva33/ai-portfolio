'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  icon?: React.ReactNode;
  showStar?: boolean;
  speed?: 'slow' | 'normal' | 'fast' | number; // 'slow' = 6s, 'normal' = 3.5s, 'fast' = 1.8s, or custom seconds
  bgColor?: string; // background gradient or solid color
  beamColors?: {
    head?: string;
    mid1?: string;
    mid2?: string;
    tail?: string;
  };
  borderWidth?: number; // border thickness in px
  borderRadius?: string; // border radius string
  className?: string;
  containerClassName?: string;
  href?: string;
  children?: React.ReactNode;
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  text = 'Start a Project',
  icon,
  showStar = true,
  speed = 'normal',
  bgColor = 'linear-gradient(#592db5 25%, #7d40ff)',
  beamColors = {
    head: '#ffffff',
    mid1: '#30ff97',
    mid2: '#a855f7',
    tail: '#6366f1',
  },
  borderWidth = 1,
  borderRadius = '8px',
  className,
  containerClassName,
  href,
  children,
  onClick,
  ...props
}) => {
  // Speed calculation
  let duration = '3.5s';
  if (typeof speed === 'number') {
    duration = `${speed}s`;
  } else if (speed === 'slow') {
    duration = '6s';
  } else if (speed === 'fast') {
    duration = '1.8s';
  }

  const {
    head = '#ffffff',
    mid1 = '#30ff97',
    mid2 = '#a855f7',
    tail = '#6366f1',
  } = beamColors;

  const conicStyle = {
    backgroundImage: `conic-gradient(from 0deg at 50% 50%, ${head} 0deg, ${mid1} 45deg, ${mid2} 90deg, ${tail} 120deg, transparent 150deg, transparent 360deg)`,
    animationDuration: duration,
  };

  const defaultIcon = (
    <Image
      src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/6a33c1af2ad8ac5a41ca55f5_CTA%20Arrow.svg"
      alt=""
      width={16}
      height={16}
      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
    />
  );

  const buttonContent = (
    <div
      className={cn(
        "relative flex p-[1.5px] overflow-hidden group transition-all shadow-lg shadow-indigo-500/25",
        containerClassName
      )}
      style={{
        padding: `${borderWidth}px`,
        borderRadius,
      }}
    >
      {/* Rotating Traveling Light Beam */}
      <div
        className="absolute -inset-[100%] animate-[spin_linear_infinite] pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity"
        style={conicStyle}
      />

      {/* Inner Button Content (Masks center completely) */}
      <button
        onClick={onClick}
        className={cn(
          "relative z-10 flex items-center justify-center h-13 px-6 text-white font-semibold transition-all group-hover:brightness-110 overflow-hidden w-full",
          className
        )}
        style={{
          background: bgColor,
          borderRadius: `calc(${borderRadius} - ${borderWidth}px)`,
          boxShadow: 'inset 0 1.5px 3px rgba(255, 255, 255, 0.72)',
        }}
        {...props}
      >
        {/* Star 6 Graphic */}
        {showStar && (
          <Image
            src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/672a7a8e3a6aba070d15d4c0_Star%206.avif"
            alt=""
            width={40}
            height={40}
            className="absolute -right-1 -top-1 w-10 h-10 opacity-75 pointer-events-none group-hover:rotate-12 transition-transform z-10"
          />
        )}

        {/* Content */}
        <div className="relative z-20 flex items-center gap-2">
          {children || (
            <>
              <span className="text-base font-semibold whitespace-nowrap">{text}</span>
              {icon !== undefined ? icon : defaultIcon}
            </>
          )}
        </div>
      </button>
    </div>
  );

  if (href) {
    return (
      <Link href={href} prefetch={true} className="inline-block">
        {buttonContent}
      </Link>
    );
  }

  return buttonContent;
};
