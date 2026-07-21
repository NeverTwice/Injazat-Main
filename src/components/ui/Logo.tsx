import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export function Logo({ className = "", showText = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-6 group cursor-pointer ${className}`}>
      <div className="relative w-16 h-16 flex items-center justify-center">
        {/* Islamic Geometry Backdrop */}
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-brand-gold fill-current opacity-15 group-hover:opacity-30 transition-opacity duration-700 group-hover:rotate-90 transition-transform duration-[2s]">
          <path d="M50 0 L61 39 L100 50 L61 61 L50 100 L39 61 L0 50 L39 39 Z" />
          <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.3" />
        </svg>
        
        {/* Diamond Inner Frame */}
        <div className="absolute w-10 h-10 border border-brand-gold/50 rotate-45 group-hover:scale-110 transition-transform duration-700" />
        
        {/* Central Monogram */}
        <span className="relative z-10 text-xl font-serif text-brand-gold font-medium tracking-widest group-hover:tracking-[0.1em] transition-all duration-700">IC</span>
        
        {/* Luxury Accents */}
        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-brand-gold rounded-full opacity-50 blur-[0.5px]" />
        <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-brand-gold rounded-full opacity-50 blur-[0.5px]" />
      </div>

      {showText && (
        <div className="flex flex-col leading-none pt-1">
          <span className="text-xl font-light tracking-[0.4em] text-brand-ivory uppercase group-hover:text-brand-gold transition-colors duration-500">Injazat</span>
          <div className="flex items-center gap-3 mt-1">
            <div className="h-px w-8 bg-brand-gold/40" />
            <span className="text-[10px] tracking-[0.6em] text-brand-gold uppercase">Capital</span>
          </div>
        </div>
      )}
    </div>
  );
}
