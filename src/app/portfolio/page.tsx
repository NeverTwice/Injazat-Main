"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import AnimatedSection, { ScaleIn } from "@/components/AnimatedSection";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["ALL", "FINTECH", "HEALTHTECH", "ENTERPRISE SOFTWARE", "CONSUMER", "LOGISTICS", "CLIMATE TECH"];

const portfolioCompanies = [
  { name: "tabby", sector: "Fintech", stage: "Growth Equity", status: "Active", desc: "Leading buy-now-pay-later platform in the MENA region.", category: "FINTECH" },
  { name: "Careem", sector: "Mobility", stage: "Growth Equity", status: "Active", desc: "Super app offering ride-hailing, delivery and digital payments.", category: "CONSUMER" },
  { name: "souqalmal", sector: "Fintech", stage: "Growth Equity", status: "Active", desc: "Digital marketplace for insurance comparisons in MENA.", category: "FINTECH" },
  { name: "Mamo", sector: "Fintech", stage: "Series B", status: "Active", desc: "Business spend management platform for modern companies.", category: "FINTECH" },
  { name: "Pure Harvest", sector: "AgriTech", stage: "Growth Equity", status: "Active", desc: "Smart farming solutions enhancing productivity and sustainability.", category: "CLIMATE TECH" },
  { name: "tasheel", sector: "Fintech", stage: "Series A", status: "Active", desc: "Embedded finance infrastructure for emerging markets.", category: "FINTECH" },
  { name: "Lean Technologies", sector: "Enterprise Software", stage: "Growth Equity", status: "Active", desc: "AI-powered solutions optimizing business operations.", category: "ENTERPRISE SOFTWARE" },
  { name: "Healthtrip", sector: "HealthTech", stage: "Growth Equity", status: "Active", desc: "Digital healthcare travel platform connecting patients globally.", category: "HEALTHTECH" },
  { name: "iMile", sector: "Logistics", stage: "Series B", status: "Active", desc: "Technology-driven logistics solutions for businesses.", category: "LOGISTICS" },
  { name: "BAYUT", sector: "PropTech", stage: "Exited", status: "Exited", desc: "Digital real estate platform (acquired by dubizzle group).", category: "CONSUMER" },
];

const exits = [
  { name: "Bayut", note: "Acquired by dubizzle group" },
  { name: "Sarmad", note: "Acquired by Abu Dhabi Media" },
  { name: "Fetchr", note: "Acquired by Aramex" },
  { name: "Zomato", note: "Partial Exit" },
  { name: "Souq.com", note: "Acquired by Amazon" },
];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const filteredCompanies = activeFilter === "ALL"
    ? portfolioCompanies
    : portfolioCompanies.filter((c) => c.category === activeFilter);

  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">
        <HeroSection
          badge="Our Portfolio"
          titleLine1="Building Exceptional Companies."
          titleLine2Gold="Creating Enduring Value."
          description="We partner with visionary founders and management teams to build market-leading businesses that deliver sustainable growth across the GCC, MENA and beyond."
          rightContent={
            <div className="space-y-5">
              {[
                { value: "60+", label: "Investments" },
                { value: "25+", label: "Successful Exits" },
                { value: "15+", label: "Countries" },
                { value: "20+", label: "Years" },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 border border-gold-500/20 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-gold-500/50" />
                  </div>
                  <div>
                    <div className="text-gold-500 text-2xl font-light" style={{ fontFamily: 'var(--font-heading)' }}>{stat.value}</div>
                    <div className="text-white/30 text-[10px] tracking-wider">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          }
        />

        {/* Filters */}
        <section className="py-6 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-wrap gap-6 items-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`text-[11px] tracking-[0.1em] font-medium pb-1 border-b transition-all duration-300 ${
                    activeFilter === cat
                      ? "text-gold-500 border-gold-500"
                      : "text-white/30 border-transparent hover:text-white/60"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-16 bg-navy-900/20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFilter}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-white/5"
              >
                {filteredCompanies.map((company, i) => (
                  <motion.div
                    key={company.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="bg-navy-950 p-6 group hover:bg-navy-900/50 transition-all duration-500 cursor-default"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-white/70 text-lg font-medium" style={{ fontFamily: 'var(--font-heading)' }}>{company.name}</span>
                      <span className={`flex items-center gap-1.5 text-[10px] tracking-wider ${company.status === "Active" ? "text-emerald-400/70" : "text-white/30"}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${company.status === "Active" ? "bg-emerald-400/70" : "bg-white/30"}`} />
                        {company.status}
                      </span>
                    </div>
                    <div className="text-white/25 text-xs mb-3">{company.sector}</div>
                    <span className="inline-block text-[10px] border border-gold-500/20 text-gold-500/70 px-2 py-0.5 tracking-wider mb-4 uppercase">
                      {company.stage}
                    </span>
                    <p className="text-white/30 text-xs font-light leading-relaxed">{company.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* Exits */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <AnimatedSection>
              <div className="border border-white/5 p-8 md:p-10">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                  <span className="text-[11px] tracking-[0.2em] text-gold-500/60 font-medium uppercase shrink-0">
                    Selected Exits
                  </span>
                  <div className="flex flex-wrap items-center gap-8 md:gap-12 flex-1">
                    {exits.map((exit) => (
                      <div key={exit.name} className="text-center">
                        <div className="text-white/50 font-medium text-sm mb-0.5">{exit.name}</div>
                        <div className="text-white/20 text-[10px]">{exit.note}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <AnimatedSection>
              <div className="flex flex-col md:flex-row items-center gap-8 justify-between">
                <div>
                  <h3 className="text-xl font-medium mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                    Let&apos;s Build the <span className="text-gold-500 italic">Future Together</span>
                  </h3>
                  <p className="text-white/35 text-sm font-light">We are always looking to partner with exceptional entrepreneurs.</p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="group inline-flex items-center gap-3 bg-gold-500 text-navy-950 px-7 py-3 text-[11px] tracking-[0.15em] font-semibold hover:bg-gold-400 transition-all duration-500">
                    SUBMIT YOUR BUSINESS PLAN
                    <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                  </Link>
                  <Link href="/contact" className="border border-white/15 text-white/50 px-7 py-3 text-[11px] tracking-[0.15em] font-medium hover:border-gold-500/40 hover:text-gold-500 transition-all duration-500">
                    CONTACT OUR TEAM
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
