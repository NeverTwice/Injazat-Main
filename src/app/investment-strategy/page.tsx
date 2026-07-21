"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import SectionTitle from "@/components/SectionTitle";
import AnimatedSection, { ScaleIn, SlideIn } from "@/components/AnimatedSection";
import Link from "next/link";

const philosophy = [
  { title: "Founder First", desc: "We invest in visionary entrepreneurs solving meaningful problems with scalable business models." },
  { title: "Long-Term Partnership", desc: "We provide more than capital by supporting strategic planning, talent acquisition, and expansion." },
  { title: "Disciplined Investing", desc: "Every investment undergoes extensive commercial, financial, legal, and operational due diligence." },
  { title: "Responsible Capital", desc: "We seek sustainable returns while maintaining ethical and Shariah-compliant investment principles." },
];

const focusAreas = [
  { title: "Venture Capital", details: "Seed · Series A · Series B", sectors: "AI, FinTech, HealthTech, Climate Tech, Enterprise Software", size: "US$250K – US$5M" },
  { title: "Growth Equity", details: "Supporting companies with proven models entering regional and international expansion.", sectors: null, size: "US$5M – US$25M" },
  { title: "Private Equity", details: "Partnering with established businesses to accelerate transformation and operational excellence.", sectors: null, size: "US$20M – US$100M+" },
  { title: "Corporate Finance Advisory", details: "Capital Raising · M&A Advisory · Financial Restructuring · IPO Preparation · Strategic Advisory", sectors: null, size: null },
];

const processSteps = [
  { num: "01", title: "Opportunity Sourcing" },
  { num: "02", title: "Initial Screening" },
  { num: "03", title: "Management Meetings" },
  { num: "04", title: "Commercial Due Diligence" },
  { num: "05", title: "Financial Analysis" },
  { num: "06", title: "Investment Committee" },
  { num: "07", title: "Transaction Execution" },
  { num: "08", title: "Value Creation" },
  { num: "09", title: "Exit" },
];

const support = [
  "Board representation", "Capital markets expertise", "Strategic planning", "M&A support",
  "International expansion", "Operational excellence", "Executive recruitment", "Exit preparation",
];

export default function InvestmentStrategyPage() {
  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">
        <HeroSection
          badge="Investment Approach"
          titleLine1="Investing in Businesses That"
          titleLine2Gold="Shape the Future."
          description="We partner with exceptional founders, visionary management teams, and high-growth businesses across the GCC, MENA, and selected global markets."
        />

        {/* Philosophy */}
        <section className="py-28 bg-navy-900/30 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <SectionTitle title="Investment Philosophy" subtitle="Our approach is built on conviction, discipline, and partnership." />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
              {philosophy.map((p, i) => (
                <ScaleIn key={p.title} delay={i * 0.1}>
                  <div className="bg-navy-950 p-8 h-full text-center group hover:bg-navy-900/50 transition-all duration-500">
                    <div className="w-12 h-12 mx-auto mb-5 border border-gold-500/15 rounded-full flex items-center justify-center group-hover:border-gold-500/40 transition-colors duration-500">
                      <div className="w-2 h-2 bg-gold-500/40 rounded-full group-hover:bg-gold-500/70 transition-colors duration-500" />
                    </div>
                    <h3 className="text-white/80 text-sm font-medium mb-3">{p.title}</h3>
                    <p className="text-white/35 text-sm font-light leading-relaxed">{p.desc}</p>
                  </div>
                </ScaleIn>
              ))}
            </div>
          </div>
        </section>

        {/* Focus Areas */}
        <section className="py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              <div>
                <SectionTitle title="Investment Focus" align="left" />
                <div className="space-y-4">
                  {focusAreas.map((area, i) => (
                    <AnimatedSection key={area.title} delay={i * 0.1}>
                      <div className="border border-white/5 p-7 hover:border-gold-500/15 transition-all duration-500 group">
                        <h3 className="text-gold-500/90 text-[11px] tracking-[0.2em] font-medium uppercase mb-3">{area.title}</h3>
                        <p className="text-white/35 text-sm font-light leading-relaxed mb-3">{area.details}</p>
                        {area.sectors && <p className="text-white/25 text-xs font-light">{area.sectors}</p>}
                        {area.size && (
                          <div className="mt-4 pt-4 border-t border-white/5">
                            <span className="text-white/25 text-[10px] tracking-wider uppercase">Investment Size</span>
                            <div className="text-gold-500/80 text-sm font-medium mt-1">{area.size}</div>
                          </div>
                        )}
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>

              <div>
                <SectionTitle title="Geographic Focus" align="left" />
                <AnimatedSection>
                  <div className="border border-white/5 p-8">
                    <div className="grid grid-cols-2 gap-10">
                      <div>
                        <h4 className="text-white/60 text-xs font-medium tracking-wider mb-5">PRIMARY MARKETS</h4>
                        <ul className="space-y-3">
                          {["United Arab Emirates", "Saudi Arabia", "Qatar", "Kuwait", "Bahrain", "Oman"].map((m) => (
                            <li key={m} className="flex items-center gap-3 text-white/40 text-sm font-light">
                              <div className="w-1.5 h-1.5 bg-gold-500/50" /> {m}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-white/60 text-xs font-medium tracking-wider mb-5">GROWTH MARKETS</h4>
                        <ul className="space-y-3">
                          {["Europe", "North America", "Asia - Pacific", "Africa", "Latin America", "Emerging Markets"].map((m) => (
                            <li key={m} className="flex items-center gap-3 text-white/40 text-sm font-light">
                              <div className="w-1.5 h-1.5 bg-gold-500/30" /> {m}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-24 bg-navy-900/30 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <SectionTitle title="Investment Process" subtitle="A disciplined, nine-stage approach from sourcing to exit." />
            <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-4">
              {processSteps.map((step, i) => (
                <ScaleIn key={step.num} delay={i * 0.06}>
                  <div className="text-center group cursor-default">
                    <div className="text-gold-500/50 text-xs font-light mb-2">{step.num}</div>
                    <div className="w-8 h-8 mx-auto mb-3 border border-white/10 rounded-full flex items-center justify-center group-hover:border-gold-500/30 transition-colors duration-500">
                      <div className="w-1 h-1 bg-gold-500/30 rounded-full group-hover:bg-gold-500/70 transition-colors duration-500" />
                    </div>
                    <h4 className="text-white/50 text-[10px] font-medium leading-tight">{step.title}</h4>
                  </div>
                </ScaleIn>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Support */}
        <section className="py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <SectionTitle title="Portfolio Support" subtitle="How we help our portfolio companies grow and succeed." />
            <AnimatedSection>
              <div className="border border-white/5 p-10 max-w-3xl mx-auto">
                <div className="grid grid-cols-2 gap-5">
                  {support.map((s) => (
                    <div key={s} className="flex items-center gap-3 text-sm text-white/40 font-light">
                      <div className="w-1 h-1 bg-gold-500/50 shrink-0" />
                      {s}
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <StatsBar />

        {/* CTA */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-medium mb-6 max-w-2xl mx-auto leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                Building the Next Generation of <span className="text-gold-500 italic">Market Leaders.</span>
              </h2>
              <p className="text-white/35 max-w-xl mx-auto mb-10 font-light">
                Whether you are a founder seeking growth capital or an institution looking for a trusted investment partner.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="group inline-flex items-center gap-3 bg-gold-500 text-navy-950 px-8 py-3.5 text-[12px] tracking-[0.15em] font-semibold hover:bg-gold-400 transition-all duration-500">
                  SUBMIT YOUR BUSINESS PLAN
                  <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </Link>
                <Link href="/contact" className="border border-white/20 text-white/60 px-8 py-3.5 text-[12px] tracking-[0.15em] font-medium hover:border-gold-500/50 hover:text-gold-500 transition-all duration-500">
                  CONTACT OUR TEAM
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
