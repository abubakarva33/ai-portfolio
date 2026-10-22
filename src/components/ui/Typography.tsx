import React from 'react';
import { cn } from '@/lib/utils';

export const H1: React.FC<React.HTMLAttributes<HTMLHeadingElement> & { gradient?: boolean }> = ({
  className,
  gradient = true,
  children,
  ...props
}) => (
  <h1
    className={cn(
      'text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.15]',
      gradient ? 'text-gradient' : 'text-foreground',
      className
    )}
    {...props}
  >
    {children}
  </h1>
);

export const H2: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  className,
  children,
  ...props
}) => (
  <h2
    className={cn('text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground', className)}
    {...props}
  >
    {children}
  </h2>
);

export const H3: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  className,
  children,
  ...props
}) => (
  <h3 className={cn('text-xl md:text-2xl font-semibold text-foreground', className)} {...props}>
    {children}
  </h3>
);

export const Paragraph: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({
  className,
  children,
  ...props
}) => (
  <p className={cn('text-base md:text-lg text-muted-foreground leading-relaxed', className)} {...props}>
    {children}
  </p>
);

export const AISnippetBox: React.FC<{ title?: string; children: React.ReactNode; className?: string }> = ({
  title = 'AI & Executive Overview',
  children,
  className,
}) => (
  <div
    className={cn(
      'glass-card rounded-2xl p-6 border-l-4 border-l-indigo-500 bg-indigo-950/20 my-6 shadow-xl',
      className
    )}
  >
    <div className="flex items-center gap-2 mb-2">
      <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
      <h4 className="text-xs font-bold uppercase tracking-widest text-indigo-300">{title}</h4>
    </div>
    <div className="text-sm md:text-base text-gray-200 leading-relaxed font-normal">{children}</div>
  </div>
);
