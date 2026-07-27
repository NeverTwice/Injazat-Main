"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";
import AnimatedSection, { ScaleIn, SlideIn } from "@/components/AnimatedSection";
import { useState } from "react";
import Link from "next/link";

const partnerTypes = [
  {
    title: "Institutional Investors",
    desc: "Pension funds, sovereign wealth funds, endowments, and asset managers seeking attractive risk-adjusted returns.",
    details: [
      "Access to diversified fund strategies across venture capital, growth equity, and private equity",
      "Dedicated investor relations team with quarterly reporting and full transparency",
      "Co-investment opportunities alongside our flagship funds in high-conviction deals",
      "Shariah-compliant investment structures available across all fund vehicles",
      "Track record of 21.4% Net IRR and 2.3x Gross MOIC since inception",
    ],
    cta: "Request Investor Presentation",
  },
  {
    title: "Family Offices",
    desc: "Access high-growth opportunities and build multi-generational wealth through disciplined investing.",
    details: [
      "Tailored investment mandates aligned with family values and legacy objectives",
      "Direct deal access to pre-vetted, high-growth companies across the GCC and MENA",
      "Flexible capital deployment — from fund commitments to bespoke co-investments",
      "Dedicated advisory on portfolio construction, diversification, and succession planning",
      "Discreet, relationship-driven partnership with a long-term horizon",
    ],
    cta: "Schedule a Private Consultation",
  },
  {
    title: "Corporate Partners",
    desc: "Collaborate on strategic investments, innovation initiatives, and market expansion opportunities.",
    details: [
      "Corporate venture capital advisory and innovation scouting across emerging sectors",
      "Strategic M&A origination, structuring, and execution support",
      "Access to our portfolio of 60+ companies for commercial partnerships and synergies",
      "Joint venture structuring for market entry into the GCC and broader MENA region",
      "Board-level advisory on digital transformation, ESG integration, and growth strategy",
    ],
    cta: "Explore Corporate Partnerships",
  },
  {
    title: "Strategic Partners",
    desc: "Co-investments, deal flow, and value creation across our core sectors and geographies.",
    details: [
      "Deal-by-deal co-investment rights in select transactions across all asset classes",
      "Shared due diligence and market intelligence on regional opportunities",
      "Joint GP structures and fund formation for sector-specific or geography-focused vehicles",
      "Cross-border deal origination leveraging our network across 15+ countries",
      "Collaborative value creation through shared operational expertise and resources",
    ],
    cta: "Discuss Strategic Collaboration",
  },
];

const advantages = [
  { title: "Deep Market Access", desc: "Unrivaled access to high-growth markets across the GCC, MENA, and emerging regions." },
  { title: "Proven Track Record", desc: "Consistent performance with a history of successful investments and value creation." },
  { title: "Experienced Team", desc: "Deep sector expertise and operational experience that drives strong outcomes." },
  { title: "Active Value Creation", desc: "Beyond capital — strategy, talent, governance, and operational excellence." },
  { title: "Risk Management", desc: "Robust processes and frameworks to protect and grow capital." },
  { title: "Sustainable Impact", desc: "Committed to responsible investing and positive long-term impact." },
];

const processSteps = [
  { num: "01", title: "Initial Engagement", desc: "Understanding your objectives, priorities, and interests." },
  { num: "02", title: "Alignment & Exploration", desc: "Exploring opportunities and defining partnership structure." },
  { num: "03", title: "Due Diligence", desc: "Thorough assessment to ensure a strong foundation." },
  { num: "04", title: "Partnership Agreement", desc: "Formalizing terms with mutual objectives." },
  { num: "05", title: "Invest & Create Value", desc: "Executing together for long-term value creation." },
];

export default function PartnerPage() {
  const [formData, setFormData] = useState({ name: "", email: "", organization: "", type: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");

    try {
      const res = await fetch("/api/partner", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", organization: "", type: "", message: "" });
      } else {
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">
        <HeroSection
          badge="Partner With Us"
          titleLine1="Stronger Partnerships."
          titleLine2Gold="Greater Impact."
          description="We believe exceptional outcomes are built on trusted relationships. We partner with institutional investors, family offices, corporations, and strategic partners to create lasting value."
        />

        {/* Who We Partner With */}
        <section className="py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <SectionTitle title="Who We Partner With" subtitle="We build lasting partnerships with institutions, families, corporates, and strategic allies." />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {partnerTypes.map((p, i) => (
                <ScaleIn key={p.title} delay={i * 0.1}>
                  <div className="border border-white/5 p-8 h-full group hover:border-gold-500/15 transition-all duration-500">
                    <div className="flex items-start gap-5 mb-6">
                      <div className="w-12 h-12 border border-gold-500/15 flex items-center justify-center shrink-0 group-hover:border-gold-500/40 transition-colors duration-500">
                        <div className="w-2 h-2 bg-gold-500/40 group-hover:bg-gold-500/70 transition-colors duration-500" />
                      </div>
                      <div>
                        <h3 className="text-white/80 text-base font-medium mb-2" style={{ fontFamily: 'var(--font-heading)' }}>{p.title}</h3>
                        <p className="text-white/35 text-sm font-light leading-relaxed">{p.desc}</p>
                      </div>
                    </div>
                    <div className="ml-17 pl-0 md:pl-17">
                      <ul className="space-y-3 mb-6">
                        {p.details.map((detail) => (
                          <li key={detail} className="flex items-start gap-3 text-white/30 text-xs font-light leading-relaxed">
                            <div className="w-1 h-1 bg-gold-500/40 rounded-full mt-1.5 shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 text-gold-500/60 text-[10px] tracking-[0.15em] font-medium hover:text-gold-500 transition-colors duration-300 group/link"
                      >
                        {p.cta.toUpperCase()}
                        <svg className="w-3 h-3 group-hover/link:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </ScaleIn>
              ))}
            </div>
          </div>
        </section>

        {/* Advantage */}
        <section className="py-24 bg-navy-900/30 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <SectionTitle title="The Injazat Capital Advantage" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
              {advantages.map((a, i) => (
                <ScaleIn key={a.title} delay={i * 0.08}>
                  <div className="text-center group cursor-default">
                    <div className="w-12 h-12 mx-auto mb-4 border border-gold-500/15 rounded-full flex items-center justify-center group-hover:border-gold-500/40 transition-colors duration-500">
                      <div className="w-2 h-2 bg-gold-500/30 rounded-full group-hover:bg-gold-500/60 transition-colors duration-500" />
                    </div>
                    <h4 className="text-gold-500/80 text-[10px] tracking-[0.15em] font-medium uppercase mb-3">{a.title}</h4>
                    <p className="text-white/30 text-xs font-light leading-relaxed">{a.desc}</p>
                  </div>
                </ScaleIn>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <SectionTitle title="Our Partnership Process" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {processSteps.map((step, i) => (
                <AnimatedSection key={step.num} delay={i * 0.1}>
                  <div className="text-center group cursor-default relative">
                    <span className="text-gold-500/30 text-[10px] font-light mb-3 block">{step.num}</span>
                    <div className="w-10 h-10 mx-auto mb-4 border border-white/10 rounded-full flex items-center justify-center group-hover:border-gold-500/30 transition-colors duration-500">
                      <div className="w-1.5 h-1.5 bg-gold-500/30 rounded-full group-hover:bg-gold-500/70 transition-colors duration-500" />
                    </div>
                    <h4 className="text-gold-500/80 text-[10px] tracking-[0.15em] font-medium uppercase mb-2">{step.title}</h4>
                    <p className="text-white/30 text-xs font-light leading-relaxed">{step.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA + Form */}
        <section className="py-24 bg-navy-900/30 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <SlideIn>
                <h2 className="text-3xl md:text-4xl font-medium leading-tight mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                  Let&apos;s Build<br />Enduring Value.<br /><span className="text-gold-500 italic">Together.</span>
                </h2>
                <p className="text-white/35 font-light leading-relaxed mb-10">
                  Whether you are an investor, a corporation, or a strategic partner, we would love to explore how we can create meaningful impact and strong returns—together.
                </p>
                <Link href="/contact" className="group inline-flex items-center gap-3 bg-gold-500 text-navy-950 px-8 py-3.5 text-[12px] tracking-[0.15em] font-semibold hover:bg-gold-400 transition-all duration-500">
                  SCHEDULE A MEETING
                  <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </Link>
              </SlideIn>

              <SlideIn direction="right" delay={0.2}>
                <div className="bg-ivory-50 text-navy-950 p-10">
                  <h3 className="text-sm font-semibold tracking-wider uppercase mb-2">Start the Conversation</h3>
                  <p className="text-navy-950/50 text-xs font-light mb-8">Fill out the form and our team will get back to you.</p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <input type="text" placeholder="Full Name" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="border border-navy-950/10 px-4 py-3 text-sm focus:border-gold-500 focus:outline-none w-full bg-white placeholder:text-navy-950/30 transition-colors duration-300" aria-label="Full Name" />
                      <input type="email" placeholder="Email Address" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="border border-navy-950/10 px-4 py-3 text-sm focus:border-gold-500 focus:outline-none w-full bg-white placeholder:text-navy-950/30 transition-colors duration-300" aria-label="Email Address" />
                    </div>
                    <input type="text" placeholder="Organization / Company" value={formData.organization} onChange={(e) => setFormData({...formData, organization: e.target.value})} className="border border-navy-950/10 px-4 py-3 text-sm focus:border-gold-500 focus:outline-none w-full bg-white placeholder:text-navy-950/30 transition-colors duration-300" aria-label="Organization" />
                    <select value={formData.type} onChange={(e) => setFormData({...formData, type: e.target.value})} className="border border-navy-950/10 text-navy-950/30 px-4 py-3 text-sm focus:border-gold-500 focus:outline-none w-full bg-white transition-colors duration-300" aria-label="Partnership Type">
                      <option value="">Partnership Type</option>
                      <option value="institutional">Institutional Investor</option>
                      <option value="family">Family Office</option>
                      <option value="corporate">Corporate</option>
                      <option value="strategic">Strategic Partner</option>
                    </select>
                    <textarea placeholder="Message" rows={3} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="border border-navy-950/10 px-4 py-3 text-sm focus:border-gold-500 focus:outline-none w-full resize-none bg-white placeholder:text-navy-950/30 transition-colors duration-300" aria-label="Message" />
                    {error && (
                      <div className="bg-red-50 border border-red-200 text-red-600 text-xs p-3 text-center">{error}</div>
                    )}
                    <button
                      type="submit"
                      disabled={sending || submitted}
                      className="w-full bg-navy-950 text-white px-6 py-3.5 text-[11px] tracking-[0.15em] font-semibold hover:bg-navy-800 transition-all duration-500 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {submitted ? "INQUIRY SUBMITTED ✓" : sending ? (
                        <><span className="w-3 h-3 border border-white/30 border-t-white rounded-full animate-spin" /> SUBMITTING...</>
                      ) : (
                        <>SUBMIT INQUIRY <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></>
                      )}
                    </button>
                    {submitted && (
                      <p className="text-emerald-700 text-xs text-center mt-2">Thank you. Our partnership team will be in touch shortly.</p>
                    )}
                  </form>
                </div>
              </SlideIn>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
