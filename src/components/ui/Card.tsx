'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface CardProps extends HTMLMotionProps<'div'> {
  variant?: 'glass' | 'solid' | 'outline';
  hoverEffect?: boolean;
  children: React.ReactNode;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'glass', hoverEffect = true, children, ...props }, ref) => {
    const variantStyles = {
      glass: 'glass-card',
      solid: 'bg-card text-card-foreground border border-border shadow-xl',
      outline: 'border border-border/60 bg-transparent text-foreground',
    };

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className={cn(
          'rounded-2xl p-6 relative overflow-hidden',
          variantStyles[variant],
          !hoverEffect && 'hover:transform-none hover:border-border',
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = 'Card';
