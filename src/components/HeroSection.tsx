"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface HeroSectionProps {
  badge?: string;
  titleLine1: string;
  titleLine2Gold: string;
  description: string;
  children?: ReactNode;
  rightContent?: ReactNode;
  compact?: boolean;
}

export default function HeroSection({ badge, titleLine1, titleLine2Gold, description, children, rightContent, compact }: HeroSectionProps) {
  return (
    <section className={`relative ${compact ? 'min-h-[60vh]' : 'min-h-[75vh]'} flex items-end overflow-hidden`}>
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-dubai.jpg"
          alt=""
          className="w-full h-full object-cover"
          role="presentation"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-950/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-transparent" />
        {/* Subtle noise */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-20 pt-40 w-full">
        <div className="flex flex-col lg:flex-row items-end justify-between gap-12">
          <div className="max-w-2xl">
            {badge && (
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-gold-500/80 text-[11px] font-medium tracking-[0.3em] uppercase mb-6 block"
              >
                {badge}
              </motion.span>
            )}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] mb-8"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {titleLine1}
              <br />
              <span className="text-gold-500 italic">{titleLine2Gold}</span>
            </motion.h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 60 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="h-px bg-gradient-to-r from-gold-500 to-transparent mb-8"
            />
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-white/50 text-base md:text-lg leading-relaxed max-w-xl font-light"
            >
              {description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              {children}
            </motion.div>
          </div>
          {rightContent && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="w-full lg:w-auto"
            >
              {rightContent}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
