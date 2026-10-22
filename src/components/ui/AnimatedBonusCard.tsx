import React from 'react';
import Image from 'next/image';

export interface BonusFeature {
  iconUrl: string;
  title: string;
  description: string;
}

export interface AnimatedBonusCardProps {
  headlineBase?: string;
  headlineHighlight?: string;
  features?: BonusFeature[];
  children?: React.ReactNode;
}

export const AnimatedBonusCard: React.FC<AnimatedBonusCardProps> = ({
  headlineBase,
  headlineHighlight,
  features,
  children,
}) => {
  return (
    <div className="relative w-full rounded-2xl md:rounded-[2rem] p-[2.5px] overflow-hidden my-16 bg-[#0a0a0a]">
      {/* 
        The spinning background (stroke-wrap).
        Made extremely large and square to ensure it covers the entire wide card even when rotated 90 degrees.
      */}
      <div className="absolute top-1/2 left-1/2 w-[3000px] h-[3000px] -translate-x-1/2 -translate-y-1/2 animate-spin-slow pointer-events-none z-0">
        <div
          className="w-full h-full"
          style={{
            background: 'conic-gradient(from 0deg, transparent 0%, transparent 10%, rgba(52,109,255,1) 20%, rgba(191,199,101,1) 25%, rgba(80,65,255,1) 30%, transparent 40%, transparent 60%, rgba(52,109,255,1) 70%, rgba(191,199,101,1) 75%, rgba(80,65,255,1) 80%, transparent 90%, transparent 100%)'
          }}
        />
      </div>

      {/* Main Inner Card */}
      <div className="relative z-10 w-full h-full bg-[#0a0a0a] rounded-[calc(2rem-2.5px)] overflow-hidden flex flex-col items-center pt-16 pb-12 px-6 md:px-10">

        {/* Background Shade Image */}
        <div className="absolute inset-0 z-0 pointer-events-none mix-blend-screen opacity-90">
          <Image
            src="https://cdn.prod.website-files.com/672a72b52eb5f37692d645a9/673a372ca8de37d4fb0e5816_Group%201000004381.avif"
            alt="glow shade"
            fill
            className="object-cover"
          />
        </div>

        {/* Content Wrapper */}
        <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center">

          {/* Title */}
          {(headlineBase || headlineHighlight) && (
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-2 leading-tight">
                {headlineBase && <span className="text-[#d4d4d4] font-medium">{headlineBase}</span>}{' '}
                <br className="md:hidden" />
                {headlineHighlight && (
                  <span className="text-[#a4d562] font-semibold drop-shadow-[0_0_15px_rgba(164,213,98,0.2)]">
                    {headlineHighlight}
                  </span>
                )}
              </h2>
            </div>
          )}

          {/* Features Grid */}
          {features && features.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="relative rounded-2xl p-[1px] bg-gradient-to-b from-[#9766ff] via-[#592db5]/30 to-transparent flex flex-col h-full"
                >
                  <div className="w-full h-full bg-[#0a0a0a]/90 backdrop-blur-md p-7 rounded-[calc(1rem-1px)] flex flex-col">
                    <div className="mb-6 h-[40px] flex items-center">
                      <Image src={feature.iconUrl} alt={feature.title} width={40} height={40} className="max-h-full object-contain" />
                    </div>
                    <h3 className="text-[18px] font-semibold text-white mb-3 tracking-wide">
                      {feature.title}
                    </h3>
                    <p className="text-[15px] text-[#d4d4d4] leading-relaxed font-normal">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Optional Children */}
          {children}

        </div>
      </div>
    </div>
  );
};
