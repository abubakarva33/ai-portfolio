import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'accent' | 'outline' | 'glow';
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = 'glow',
  children,
  ...props
}) => {
  const variantStyles = {
    primary: 'bg-primary/20 text-indigo-300 border border-primary/40',
    accent: 'bg-accent/20 text-sky-300 border border-accent/40',
    outline: 'border border-border text-muted-foreground',
    glow: 'bg-indigo-500/10 text-indigo-300 border border-indigo-500/30 glow-pill',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full tracking-wide uppercase',
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
