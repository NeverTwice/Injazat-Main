import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

/**
 * Injazat Capital - Core Brand Identity
 * 
 * DESIGN RATIONALE:
 * 1. The Monolith: A vertical "I" intersecting with a horizontal "C" bar.
 * 2. The Golden Ratio: Proportionally balanced for timeless architectural feel.
 * 3. The Horizon: The horizontal bar represents the GCC regional stability.
 * 4. The Ascent: The vertical element represents breakthrough tech growth.
 * 5. Minimalist Luxury: Reduced to essential geometric forms for high memorability.
 */
export function Logo({ className = "", showText = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-5 group cursor-pointer ${className}`}>
      <div className="relative w-16 h-16 flex items-center justify-center">
        {/* Architectural Framework - Outer boundary */}
        <div className="absolute inset-0 border border-brand-gold/10 group-hover:border-brand-gold/30 transition-colors duration-700" />
        
        {/* The "I" - Sovereign Pillar */}
        <div className="absolute w-[2px] h-10 bg-brand-gold/40 group-hover:bg-brand-gold transition-all duration-700 group-hover:h-12" />
        
        {/* The "C" - Capital Horizon */}
        <div className="absolute w-10 h-[2px] bg-brand-gold/40 group-hover:bg-brand-gold transition-all duration-700 group-hover:w-12" 
             style={{ transform: 'translateY(-20px)' }} />
             
        {/* Subtle Middle Eastern Geometric Underlay (Ghosted) */}
        <svg viewBox="0 0 100 100" className="absolute w-14 h-14 text-brand-gold/5 fill-current rotate-45 group-hover:rotate-0 transition-transform duration-[3s]">
          <rect x="25" y="25" width="50" height="50" stroke="currentColor" strokeWidth="0.5" fill="none" />
          <rect x="30" y="30" width="40" height="40" stroke="currentColor" strokeWidth="0.5" fill="none" />
        </svg>

        {/* Floating Accent - The North Star of Investment */}
        <div className="absolute top-2 right-2 w-1 h-1 bg-brand-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
      </div>

      {showText && (
        <div className="flex flex-col">
          <div className="overflow-hidden">
            <span className="text-2xl font-serif text-brand-ivory tracking-[0.3em] uppercase block transform translate-y-0 group-hover:-translate-y-1 transition-transform duration-700 font-light">
              Injazat
            </span>
          </div>
          <div className="flex items-center gap-4 -mt-1">
            <div className="h-[1px] w-0 group-hover:w-8 bg-brand-gold transition-all duration-1000" />
            <span className="text-[9px] tracking-[0.7em] text-brand-gold uppercase font-medium">
              Capital
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
