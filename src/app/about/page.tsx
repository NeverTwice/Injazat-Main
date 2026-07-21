"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import SectionTitle from "@/components/SectionTitle";
import AnimatedSection, { SlideIn, ScaleIn } from "@/components/AnimatedSection";
import Link from "next/link";

const values = [
  { title: "Integrity", desc: "We uphold the highest standards of ethical conduct, transparency, and accountability." },
  { title: "Excellence", desc: "We are committed to excellence in everything we do and in the value we create." },
  { title: "Partnership", desc: "We build lasting relationships based on trust and mutual success." },
  { title: "Innovation", desc: "We back visionary ideas and innovative solutions that shape the future." },
  { title: "Impact", desc: "We invest responsibly to create positive, sustainable impact in our communities." },
];

const storyStats = [
  { value: "20+", label: "Years of Experience", sub: "Deep regional expertise and global perspective." },
  { value: "$1B+", label: "Assets Under Management", sub: "Across multiple funds and investment strategies." },
  { value: "60+", label: "Investments Completed", sub: "In high-growth companies across diverse sectors." },
  { value: "25+", label: "Successful Exits", sub: "Delivering strong returns for our partners." },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">
        <HeroSection
          badge="About Injazat Capital"
          titleLine1="Building Value."
          titleLine2Gold="Creating Impact."
          description="Injazat Capital is a leading alternative investment firm in the GCC, specializing in venture capital, growth equity, private equity, and corporate finance advisory."
        />

        {/* Our Story */}
        <section className="py-28 relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <SlideIn>
                <span className="text-gold-500/70 text-[11px] tracking-[0.3em] uppercase font-medium mb-6 block">Our Story</span>
                <h2 className="text-3xl md:text-4xl font-medium leading-tight mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
                  A Vision Rooted in the Region.<br />
                  <span className="text-gold-500 italic">A Focus on the Future.</span>
                </h2>
                <div className="space-y-5 text-white/40 leading-relaxed font-light">
                  <p>Injazat Capital was founded with a clear mission: to unlock the potential of the region by investing in innovation, empowering entrepreneurs, and driving long-term value creation.</p>
                  <p>Our team brings together deep investment expertise, operational experience, and a global perspective to support businesses through every stage of growth.</p>
                  <p>Today, we are proud to be a trusted partner to founders, institutions, and families across the GCC, MENA, and select global markets.</p>
                </div>
                <Link href="/investment-strategy" className="group inline-flex items-center gap-3 border border-gold-500/30 text-white/60 px-6 py-3 text-[11px] tracking-[0.15em] font-medium hover:bg-gold-500/10 hover:text-gold-500 hover:border-gold-500/50 transition-all duration-500 mt-10">
                  LEARN MORE ABOUT OUR APPROACH
                  <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </Link>
              </SlideIn>
              <SlideIn direction="right">
                <div className="grid grid-cols-2 gap-4">
                  {storyStats.map((stat, i) => (
                    <ScaleIn key={stat.label} delay={i * 0.1}>
                      <div className="border border-white/5 p-7 hover:border-gold-500/15 transition-all duration-500 bg-navy-900/30">
                        <div className="text-gold-500 text-3xl font-light mb-3" style={{ fontFamily: 'var(--font-heading)' }}>{stat.value}</div>
                        <div className="text-white/70 text-xs font-medium tracking-wider mb-2 uppercase">{stat.label}</div>
                        <div className="text-white/30 text-xs font-light">{stat.sub}</div>
                      </div>
                    </ScaleIn>
                  ))}
                </div>
              </SlideIn>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-navy-900/30 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <SectionTitle title="Our Values" subtitle="The principles that guide every investment decision we make." />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-white/5">
              {values.map((v, i) => (
                <ScaleIn key={v.title} delay={i * 0.08}>
                  <div className="bg-navy-950 p-8 h-full text-center group hover:bg-navy-900/50 transition-all duration-500">
                    <div className="w-12 h-12 mx-auto mb-5 border border-gold-500/15 rounded-full flex items-center justify-center group-hover:border-gold-500/40 transition-colors duration-500">
                      <div className="w-2 h-2 bg-gold-500/40 rounded-full group-hover:bg-gold-500/80 transition-colors duration-500" />
                    </div>
                    <h3 className="text-gold-500/90 text-[11px] tracking-[0.2em] font-medium uppercase mb-4">{v.title}</h3>
                    <p className="text-white/35 text-sm font-light leading-relaxed">{v.desc}</p>
                  </div>
                </ScaleIn>
              ))}
            </div>
          </div>
        </section>

        {/* Funds */}
        <section className="py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <SectionTitle title="Our Funds" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { name: "Injazat Technology Fund", desc: "Investing in innovative technology companies driving digital transformation across the region and globally.", items: ["Venture Capital", "Early to Growth Stage", "Technology-driven businesses", "Scalable and disruptive models"] },
                { name: "Injazat Shefa Healthcare Fund", desc: "Supporting healthcare innovation and companies improving quality of life across the MENA region.", items: ["Growth Equity", "Healthcare & Life Sciences", "Innovative therapies & technologies", "Building a healthier future"] },
              ].map((fund, i) => (
                <AnimatedSection key={fund.name} delay={i * 0.15}>
                  <div className="border border-white/5 p-10 hover:border-gold-500/15 transition-all duration-500 h-full group">
                    <h3 className="text-lg font-medium mb-3" style={{ fontFamily: 'var(--font-heading)' }}>{fund.name}</h3>
                    <p className="text-white/35 text-sm font-light mb-8">{fund.desc}</p>
                    <ul className="space-y-3 mb-8">
                      {fund.items.map((item) => (
                        <li key={item} className="flex items-center gap-3 text-sm text-white/45 font-light">
                          <div className="w-1 h-1 bg-gold-500/50 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <span className="text-gold-500/70 text-[11px] tracking-[0.15em] font-medium group-hover:text-gold-500 transition-colors duration-300">LEARN MORE →</span>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Geographic Focus */}
        <section className="py-24 bg-navy-900/30 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <SectionTitle title="Geographic Focus" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-3xl mx-auto">
              <AnimatedSection>
                <h3 className="text-white/70 text-sm font-medium mb-6 tracking-wider">PRIMARY MARKETS</h3>
                <ul className="space-y-3">
                  {["United Arab Emirates", "Saudi Arabia", "Qatar", "Kuwait", "Bahrain", "Oman"].map((m) => (
                    <li key={m} className="flex items-center gap-3 text-white/40 text-sm font-light">
                      <div className="w-1.5 h-1.5 bg-gold-500/50" /> {m}
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
              <AnimatedSection delay={0.15}>
                <h3 className="text-white/70 text-sm font-medium mb-6 tracking-wider">GROWTH MARKETS</h3>
                <ul className="space-y-3">
                  {["Egypt", "Jordan", "Morocco", "Nigeria", "Kenya", "South Africa", "Turkey"].map((m) => (
                    <li key={m} className="flex items-center gap-3 text-white/40 text-sm font-light">
                      <div className="w-1.5 h-1.5 bg-gold-500/30" /> {m}
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ESG */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <AnimatedSection>
              <div className="border border-white/5 p-10 md:p-14 flex flex-col md:flex-row items-center gap-10 hover:border-gold-500/10 transition-colors duration-500">
                <div className="w-16 h-16 border border-gold-500/20 rounded-full flex items-center justify-center shrink-0">
                  <div className="w-3 h-3 bg-gold-500/40 rounded-full" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-medium mb-2" style={{ fontFamily: 'var(--font-heading)' }}>Committed to Responsible Investing</h3>
                  <p className="text-white/35 font-light">We integrate environmental, social, and governance (ESG) considerations into our investment process to deliver sustainable, long-term value.</p>
                </div>
                <Link href="/investment-strategy" className="shrink-0 border border-gold-500/30 text-gold-500/80 px-6 py-3 text-[11px] tracking-[0.15em] font-medium hover:bg-gold-500/10 transition-all duration-500 whitespace-nowrap">
                  OUR ESG APPROACH →
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <StatsBar />
      </main>
      <Footer />
    </>
  );
}
