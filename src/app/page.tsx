"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StatsBar from "@/components/StatsBar";
import AnimatedSection, { ScaleIn } from "@/components/AnimatedSection";
import Link from "next/link";
import { motion } from "framer-motion";

const pillars = [
  { title: "Disciplined Investing", desc: "Rigorous due diligence and value-driven approach." },
  { title: "Strategic Partnership", desc: "We work closely with founders to scale and succeed." },
  { title: "Regional Focus", desc: "Deep understanding of GCC, MENA & global markets." },
  { title: "Shariah-Compliant", desc: "Ethical investing aligned with our values and principles." },
];

const focusAreas = [
  { title: "Venture Capital", desc: "Backing high-growth startups with disruptive ideas and strong founding teams." },
  { title: "Growth Equity", desc: "Providing capital and expertise to accelerate growth and unlock long-term value." },
  { title: "Private Equity", desc: "Investing in established businesses to drive transformation and operational excellence." },
  { title: "Healthcare", desc: "Building and supporting companies that improve healthcare access and outcomes." },
  { title: "Financial Services", desc: "Partnering with innovative companies reshaping the future of finance." },
];

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-screen flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <img src="/images/hero-dubai.jpg" alt="" className="w-full h-full object-cover" role="presentation" />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-24 pt-40 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-end">
              <div className="lg:col-span-7">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="text-gold-500/60 text-[11px] tracking-[0.4em] uppercase mb-8 block font-medium"
                >
                  Strategic Investment Office · Est. 2004
                </motion.span>
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                  className="text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.05] mb-10"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Investing in<br />
                  Vision. <span className="text-gold-500 italic">Building<br />Value.</span>
                </motion.h1>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: 60 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="h-px bg-gradient-to-r from-gold-500 to-transparent mb-8"
                />
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                  className="text-white/45 text-lg leading-relaxed max-w-lg font-light"
                >
                  We are a GCC-based investment firm partnering with ambitious founders and exceptional businesses to build enduring companies.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                  className="flex flex-wrap gap-4 mt-10"
                >
                  <Link
                    href="/investment-strategy"
                    className="group inline-flex items-center gap-3 bg-gold-500 text-navy-950 px-8 py-3.5 text-[12px] tracking-[0.15em] font-semibold hover:bg-gold-400 transition-all duration-500"
                  >
                    OUR INVESTMENT STRATEGY
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                  </Link>
                  <Link
                    href="/portfolio"
                    className="inline-flex items-center gap-2 border border-white/20 text-white/70 px-8 py-3.5 text-[12px] tracking-[0.15em] font-medium hover:border-gold-500/50 hover:text-gold-500 transition-all duration-500"
                  >
                    VIEW PORTFOLIO
                  </Link>
                </motion.div>
              </div>

              {/* Right side - subtle pillars */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="lg:col-span-5 space-y-8 hidden lg:block"
              >
                {pillars.map((p, i) => (
                  <motion.div
                    key={p.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1 + i * 0.15 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 border border-gold-500/30 flex items-center justify-center shrink-0 group-hover:border-gold-500/60 transition-colors duration-500">
                      <div className="w-1.5 h-1.5 bg-gold-500/60 group-hover:bg-gold-500 transition-colors duration-500" />
                    </div>
                    <div>
                      <h3 className="text-white/80 text-sm font-medium mb-1">{p.title}</h3>
                      <p className="text-white/35 text-xs font-light leading-relaxed">{p.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Investment Focus */}
        <section className="relative py-24 bg-navy-900/50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <AnimatedSection className="text-center mb-16">
              <span className="text-gold-500/70 text-[11px] tracking-[0.3em] uppercase font-medium">What We Do</span>
              <div className="w-8 h-px bg-gold-500/30 mx-auto mt-4" />
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-white/5">
              {focusAreas.map((area, i) => (
                <ScaleIn key={area.title} delay={i * 0.1}>
                  <div className="bg-navy-900 p-8 h-full group hover:bg-navy-800/80 transition-all duration-500 cursor-default">
                    <div className="w-8 h-8 border border-gold-500/20 flex items-center justify-center mb-6 group-hover:border-gold-500/50 transition-colors duration-500">
                      <div className="w-1 h-1 bg-gold-500/50 group-hover:bg-gold-500 transition-colors duration-500" />
                    </div>
                    <h3 className="text-gold-500/90 text-[11px] tracking-[0.2em] font-medium uppercase mb-4">{area.title}</h3>
                    <p className="text-white/35 text-sm font-light leading-relaxed">{area.desc}</p>
                  </div>
                </ScaleIn>
              ))}
            </div>
          </div>
        </section>

        <StatsBar />
      </main>
      <Footer />
    </>
  );
}
