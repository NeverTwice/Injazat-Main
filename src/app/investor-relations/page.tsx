"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import AnimatedSection, { ScaleIn } from "@/components/AnimatedSection";
import Link from "next/link";
import { useState, useEffect } from "react";

interface EventItem {
  date: string;
  title: string;
  location: string;
  category: string;
  url: string;
  description: string;
}

const stats = [
  { value: "$1B+", label: "Assets Under Management" },
  { value: "60+", label: "Investments Completed" },
  { value: "25+", label: "Successful Exits" },
  { value: "15+", label: "Countries Covered" },
  { value: "20+", label: "Years of Excellence" },
];

const financials = [
  { label: "Total Assets Under Management", value: "$1.02B" },
  { label: "Fee-Generating AUM", value: "$894M" },
  { label: "Realized Exits (Since Inception)", value: "$612M" },
  { label: "Net IRR (Since Inception)", value: "21.4%" },
  { label: "Gross MOIC (Since Inception)", value: "2.3x" },
];

const quickLinks = ["Investor Presentation", "Annual Reports", "Financial Statements", "Sustainability Reports", "Corporate Governance", "News & Announcements"];

const categoryColors: Record<string, string> = {
  "Investment": "text-gold-500/70",
  "Private Equity": "text-purple-400/70",
  "FinTech": "text-emerald-400/70",
  "Technology": "text-blue-400/70",
};

export default function InvestorRelationsPage() {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [eventsLoading, setEventsLoading] = useState(true);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const res = await fetch("/api/events");
        const data = await res.json();
        if (data.success && data.events) {
          setEvents(data.events);
        }
      } catch (err) {
        console.error("Failed to fetch events:", err);
      } finally {
        setEventsLoading(false);
      }
    }
    fetchEvents();
  }, []);

  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">
        <HeroSection
          badge="Investor Relations"
          titleLine1="Building Trust."
          titleLine2Gold="Delivering Value."
          description="At Injazat Capital, we are committed to transparency, accountability, and delivering sustainable long-term returns for our investors and partners."
          compact
        />

        {/* Stats */}
        <section className="py-14 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              {stats.map((stat, i) => (
                <ScaleIn key={stat.label} delay={i * 0.08}>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 border border-gold-500/15 flex items-center justify-center shrink-0">
                      <div className="w-1.5 h-1.5 bg-gold-500/40" />
                    </div>
                    <div>
                      <div className="text-gold-500 text-xl font-light" style={{ fontFamily: 'var(--font-heading)' }}>{stat.value}</div>
                      <div className="text-white/25 text-[10px] tracking-wider">{stat.label}</div>
                    </div>
                  </div>
                </ScaleIn>
              ))}
            </div>
          </div>
        </section>

        {/* Main Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
              {/* About */}
              <AnimatedSection>
                <div className="bg-navy-950 p-8 h-full">
                  <h3 className="text-white/60 text-xs font-medium tracking-wider mb-5 uppercase">About</h3>
                  <p className="text-white/30 text-sm font-light leading-relaxed mb-8">
                    Injazat Capital is a leading alternative investment firm in the GCC, specializing in venture capital, private equity, and corporate finance.
                  </p>
                  <Link href="/about" className="text-gold-500/60 text-[10px] tracking-[0.15em] font-medium hover:text-gold-500 transition-colors duration-300">
                    LEARN MORE →
                  </Link>
                </div>
              </AnimatedSection>

              {/* Financial Highlights */}
              <AnimatedSection delay={0.1}>
                <div className="bg-navy-950 p-8 h-full">
                  <div className="flex items-center justify-between mb-5">
                    <h3 className="text-white/60 text-xs font-medium tracking-wider uppercase">Financial Highlights</h3>
                    <span className="text-white/20 text-[10px]">FY 2023</span>
                  </div>
                  <div className="space-y-3">
                    {financials.map((f) => (
                      <div key={f.label} className="flex items-center justify-between border-b border-white/5 pb-2">
                        <span className="text-white/30 text-[11px] font-light">{f.label}</span>
                        <span className="text-gold-500/80 text-sm font-medium">{f.value}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-white/15 text-[10px] mt-5">As of December 31, 2023</p>
                </div>
              </AnimatedSection>

              {/* Quick Links */}
              <AnimatedSection delay={0.2}>
                <div className="bg-navy-950 p-8 h-full">
                  <h3 className="text-white/60 text-xs font-medium tracking-wider mb-5 uppercase">Quick Links</h3>
                  <div className="space-y-3">
                    {quickLinks.map((link) => (
                      <a key={link} href="#" className="flex items-center justify-between text-white/35 text-sm font-light hover:text-gold-500/70 transition-colors duration-300 group">
                        {link}
                        <span className="text-white/10 group-hover:text-gold-500/40 transition-colors">→</span>
                      </a>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Events & Share — Dynamic */}
              <AnimatedSection delay={0.3}>
                <div className="bg-navy-950 p-8 h-full space-y-8">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-white/60 text-xs font-medium tracking-wider uppercase">Upcoming Events</h3>
                      <div className="flex items-center gap-1.5">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                        </span>
                        <span className="text-emerald-400/50 text-[8px] tracking-wider">LIVE</span>
                      </div>
                    </div>

                    {eventsLoading ? (
                      <div className="flex items-center justify-center py-6">
                        <div className="w-5 h-5 border border-gold-500/20 border-t-gold-500/60 rounded-full animate-spin" />
                      </div>
                    ) : (
                      <div className="space-y-3">
                        {events.slice(0, 4).map((evt) => (
                          <a
                            key={evt.title}
                            href={evt.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block border-b border-white/5 pb-3 last:border-0 last:pb-0 group cursor-pointer"
                          >
                            <div className="flex items-center gap-2 mb-0.5">
                              <span className="text-gold-500/80 text-[10px] font-medium">{evt.date}</span>
                              <span className={`text-[8px] tracking-wider font-medium ${categoryColors[evt.category] || "text-white/30"}`}>
                                {evt.category.toUpperCase()}
                              </span>
                            </div>
                            <h4 className="text-white/55 text-xs font-medium group-hover:text-white/80 transition-colors duration-300">{evt.title}</h4>
                            <p className="text-white/20 text-[10px]">{evt.location}</p>
                          </a>
                        ))}
                        {events.length > 4 && (
                          <button className="w-full text-gold-500/40 text-[10px] tracking-[0.15em] font-medium hover:text-gold-500/70 transition-colors duration-300 pt-2">
                            VIEW ALL {events.length} EVENTS →
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                  <div className="border-t border-white/5 pt-6">
                    <h3 className="text-white/60 text-xs font-medium tracking-wider mb-3 uppercase">Share Info</h3>
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-white/70 text-xl font-light" style={{ fontFamily: 'var(--font-heading)' }}>1.62</span>
                      <span className="text-white/25 text-xs">USD</span>
                      <span className="text-emerald-400/70 text-xs font-medium ml-2">+2.53%</span>
                    </div>
                    <p className="text-white/15 text-[10px]">Ticker: INJZ.DU (DIFX)</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Subscribe + Contact */}
        <section className="py-16 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AnimatedSection>
                <div className="border border-white/5 p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6 h-full">
                  <div className="flex-1">
                    <h3 className="text-white/60 text-xs font-medium tracking-wider mb-1 uppercase">Stay Informed</h3>
                    <p className="text-white/25 text-xs font-light">Subscribe to our IR mailing list.</p>
                  </div>
                  <div className="flex gap-2 w-full sm:w-auto">
                    <input type="email" placeholder="Your email" className="bg-navy-900/50 border border-white/10 text-white/70 px-4 py-2 text-sm focus:border-gold-500/40 focus:outline-none placeholder:text-white/20 flex-1 sm:w-48" aria-label="Email for IR updates" />
                    <button className="bg-gold-500 text-navy-950 px-5 py-2 text-[10px] tracking-[0.15em] font-semibold hover:bg-gold-400 transition-all duration-500">SUBSCRIBE</button>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <div className="border border-white/5 p-8 h-full">
                  <h3 className="text-white/60 text-xs font-medium tracking-wider mb-4 uppercase">Investor Enquiries</h3>
                  <div className="space-y-2 text-white/35 text-sm font-light">
                    <p>+971 50 826 0503</p>
                    <p>services@injazatcapitals.com</p>
                    <p>Dubai Media City, Dubai, UAE</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Footer bar */}
        <div className="border-t border-white/5 py-6">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <svg width="36" height="36" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 2 L79 11 L93 38 L93 62 L79 89 L50 98 L21 89 L7 62 L7 38 L21 11 Z" stroke="#b8943f" strokeWidth="1.5" fill="none" opacity="0.5" />
                <line x1="38" y1="30" x2="38" y2="70" stroke="#b8943f" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="32" y1="30" x2="44" y2="30" stroke="#b8943f" strokeWidth="1.8" strokeLinecap="round" />
                <line x1="32" y1="70" x2="44" y2="70" stroke="#b8943f" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M68 34 C58 28, 50 30, 48 38 L48 62 C50 70, 58 72, 68 66" stroke="#b8943f" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              </svg>
              <div>
                <div className="text-white/40 text-[9px] tracking-[0.3em]">INJAZAT</div>
                <div className="text-white/40 text-[9px] tracking-[0.3em]">CAPITAL</div>
              </div>
            </div>
            <p className="text-white/15 text-xs">© 2025 Injazat Capital Limited. All rights reserved.</p>
          </div>
        </div>
      </main>
    </>
  );
}
