'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Logo } from '@/components/ui/Logo';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-brand-obsidian/95 border-b border-brand-gold/10 py-4' : 'bg-transparent py-8'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link href="/" className="group">
          <Logo />
        </Link>
        
        <div className="hidden lg:flex items-center gap-10">
          <Link href="/about" className="nav-link">The Office</Link>
          <Link href="/strategy" className="nav-link">Capital Strategy</Link>
          <Link href="/portfolio" className="nav-link">Focus Areas</Link>
          <Link href="/team" className="nav-link">Partners</Link>
          <Link href="/insights" className="nav-link">Insights</Link>
          <Link href="/contact" className="nav-link">Protocol</Link>
        </div>

        <Link href="/partner" className="hidden lg:block">
          <button className="luxury-button">
            Submit Proposal
          </button>
        </Link>
      </div>
    </motion.nav>
  );
}