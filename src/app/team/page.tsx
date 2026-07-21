"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import SectionTitle from "@/components/SectionTitle";
import AnimatedSection, { ScaleIn } from "@/components/AnimatedSection";
import { motion } from "framer-motion";

const leaders = [
  { name: "Mohammed Al Suwaidi", title: "Founder & Chairman", bio: "Over 25 years of experience in investment banking, private equity and asset management across the GCC.", initials: "MA" },
  { name: "Khaled El Khatib", title: "Chief Executive Officer", bio: "Investment professional with 20+ years in private equity and corporate finance. Previously with Mubadala Capital.", initials: "KK" },
  { name: "Dania Rizk", title: "Chief Investment Officer", bio: "15+ years in venture capital and growth equity across MENA and global markets. Former Partner at Global Ventures.", initials: "DR" },
  { name: "Omar Al Ansari", title: "Head of Private Equity", bio: "Specializes in buyouts and growth investments. Previously with EQT and Investcorp.", initials: "OA" },
  { name: "Aisha Al Marzooqi", title: "Head of Venture Capital", bio: "Tech investor with a passion for backing innovative founders. Formerly with 500 Global.", initials: "AM" },
  { name: "Youssef Ben Hassan", title: "Chief Financial Officer", bio: "Finance executive with 18+ years in capital markets and corporate finance. Formerly with Natixis.", initials: "YB" },
];

const committee = ["Mohammed Al Suwaidi", "Khaled El Khatib", "Dania Rizk", "Omar Al Ansari", "Hussain Al Mahmoud"];
const advisory = ["H.E. Dr. Ahmad Mohamed Ali", "Nabil Sultan", "Ramy Abdelkader", "Dr. Raja Al Gurg"];
const culture = ["Entrepreneurial mindset", "Integrity and transparency", "Collaboration and respect", "Commitment to excellence", "Long-term value creation"];

export default function TeamPage() {
  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">
        <HeroSection
          badge="Our Team"
          titleLine1="Experience. Integrity."
          titleLine2Gold="Aligned Interests."
          description="Our team combines deep investment expertise, operational experience, and regional insight to identify opportunities, build exceptional companies, and deliver long-term value."
        />

        {/* Leadership */}
        <section className="py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
              {leaders.map((leader, i) => (
                <ScaleIn key={leader.name} delay={i * 0.08}>
                  <div className="bg-navy-950 p-8 group hover:bg-navy-900/40 transition-all duration-500 cursor-default">
                    {/* Avatar */}
                    <div className="w-20 h-20 mb-6 bg-gradient-to-br from-navy-700/50 to-navy-800/50 border border-white/5 flex items-center justify-center group-hover:border-gold-500/20 transition-colors duration-500">
                      <span className="text-gold-500/50 text-lg font-medium group-hover:text-gold-500/80 transition-colors duration-500" style={{ fontFamily: 'var(--font-heading)' }}>{leader.initials}</span>
                    </div>
                    <h3 className="text-white/80 font-medium text-sm mb-1">{leader.name}</h3>
                    <p className="text-gold-500/70 text-[10px] tracking-[0.2em] font-medium uppercase mb-4">{leader.title}</p>
                    <p className="text-white/30 text-xs font-light leading-relaxed mb-5">{leader.bio}</p>
                    <a href="#" className="text-white/20 hover:text-gold-500/70 transition-colors duration-300" aria-label={`${leader.name} LinkedIn`}>
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    </a>
                  </div>
                </ScaleIn>
              ))}
            </div>
          </div>
        </section>

        {/* Committee, Advisory, Culture */}
        <section className="py-20 bg-navy-900/30 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* 30+ Professionals */}
              <AnimatedSection>
                <div className="border border-white/5 p-8 h-full">
                  <div className="text-gold-500 text-3xl font-light mb-1" style={{ fontFamily: 'var(--font-heading)' }}>30+</div>
                  <div className="text-white/60 text-xs font-medium tracking-wider uppercase mb-4">Professionals</div>
                  <p className="text-white/30 text-xs font-light leading-relaxed">A diverse team of investment professionals, analysts and operators across our offices in Dubai and the region.</p>
                </div>
              </AnimatedSection>

              {/* Investment Committee */}
              <AnimatedSection delay={0.1}>
                <div className="border border-white/5 p-8 h-full">
                  <h3 className="text-gold-500/80 text-[11px] tracking-[0.2em] font-medium uppercase mb-5">Investment Committee</h3>
                  <div className="space-y-2">
                    {committee.map((name) => (
                      <p key={name} className="text-white/35 text-xs font-light">{name}</p>
                    ))}
                  </div>
                  <p className="text-white/20 text-xs font-light mt-5">100+ years collective experience.</p>
                </div>
              </AnimatedSection>

              {/* Advisory Board */}
              <AnimatedSection delay={0.2}>
                <div className="border border-white/5 p-8 h-full">
                  <h3 className="text-gold-500/80 text-[11px] tracking-[0.2em] font-medium uppercase mb-5">Advisory Board</h3>
                  <div className="space-y-2">
                    {advisory.map((name) => (
                      <p key={name} className="text-white/35 text-xs font-light">{name}</p>
                    ))}
                  </div>
                  <p className="text-white/20 text-xs font-light mt-5">Strategic guidance and market insight.</p>
                </div>
              </AnimatedSection>

              {/* Culture */}
              <AnimatedSection delay={0.3}>
                <div className="border border-white/5 p-8 h-full">
                  <h3 className="text-gold-500/80 text-[11px] tracking-[0.2em] font-medium uppercase mb-5">Our Culture</h3>
                  <ul className="space-y-3">
                    {culture.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-white/35 text-xs font-light">
                        <div className="w-1 h-1 bg-gold-500/40 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <StatsBar />
      </main>
      <Footer />
    </>
  );
}
