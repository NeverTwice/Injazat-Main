"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/investment-strategy", label: "Investment Approach" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/team", label: "Team" },
  { href: "/insights", label: "Insights" },
  { href: "/investor-relations", label: "Investor Relations" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy-950/95 backdrop-blur-xl border-b border-gold-500/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4 group shrink-0" aria-label="Injazat Capital Home">
            {/* Crisp SVG Logo Mark */}
            <div className="flex items-center gap-3.5">
              <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 group-hover:opacity-80 transition-opacity duration-500">
                {/* Outer octagonal frame */}
                <path d="M50 2 L79 11 L93 38 L93 62 L79 89 L50 98 L21 89 L7 62 L7 38 L21 11 Z" stroke="#b8943f" strokeWidth="1.5" fill="none" opacity="0.6" />
                {/* Inner geometric frame */}
                <path d="M50 12 L72 18 L84 40 L84 60 L72 82 L50 88 L28 82 L16 60 L16 40 L28 18 Z" stroke="#b8943f" strokeWidth="0.8" fill="none" opacity="0.25" />
                {/* I - left vertical */}
                <line x1="38" y1="30" x2="38" y2="70" stroke="#b8943f" strokeWidth="2.5" strokeLinecap="round" />
                {/* I - top serif */}
                <line x1="32" y1="30" x2="44" y2="30" stroke="#b8943f" strokeWidth="1.8" strokeLinecap="round" />
                {/* I - bottom serif */}
                <line x1="32" y1="70" x2="44" y2="70" stroke="#b8943f" strokeWidth="1.8" strokeLinecap="round" />
                {/* C - arc */}
                <path d="M68 34 C58 28, 50 30, 48 38 L48 62 C50 70, 58 72, 68 66" stroke="#b8943f" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                {/* Subtle diamond accent */}
                <path d="M50 22 L53 25 L50 28 L47 25 Z" fill="#b8943f" opacity="0.4" />
              </svg>
              <div className="hidden sm:block">
                <div className="text-white/80 text-[10px] font-medium tracking-[0.35em] leading-tight">INJAZAT</div>
                <div className="text-white/80 text-[10px] font-medium tracking-[0.35em] leading-tight">CAPITAL</div>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-8" role="navigation" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-[13px] tracking-wide font-light transition-all duration-300 ${
                  pathname === link.href
                    ? "text-gold-500"
                    : "text-white/60 hover:text-white/90"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-gold-500"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile */}
          <div className="flex items-center gap-4">
            <Link
              href="/partner"
              className="hidden lg:inline-flex items-center gap-2 border border-gold-500/50 text-gold-500 px-5 py-2 text-[11px] tracking-[0.15em] font-medium hover:bg-gold-500/10 transition-all duration-500"
            >
              PARTNER WITH US
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </Link>

            <button
              className="xl:hidden text-white/70 hover:text-white transition-colors p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8h16M4 16h12" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="xl:hidden bg-navy-950/98 backdrop-blur-xl border-t border-gold-500/10 overflow-hidden"
          >
            <div className="px-6 py-8 space-y-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block text-sm tracking-wider py-3 border-b border-white/5 ${
                      pathname === link.href ? "text-gold-500" : "text-white/60"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="pt-6"
              >
                <Link
                  href="/partner"
                  onClick={() => setMobileOpen(false)}
                  className="block border border-gold-500/50 text-gold-500 px-5 py-3 text-sm tracking-wider font-medium text-center"
                >
                  PARTNER WITH US →
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
