'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Globe, Zap, Cpu } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col bg-brand-obsidian min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Subtle slow-moving gradient/video background would go here */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-navy via-brand-obsidian to-brand-obsidian" />
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        </div>

        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <span className="section-label">A Sovereign Strategic Partner</span>
            <h1 className="text-6xl md:text-8xl font-serif text-brand-ivory mb-8 leading-[1.1]">
              Architecting <span className="text-brand-gold italic">Enduring</span> Value.
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed font-light mb-12">
              A discreet investment office dedicated to bridging GCC regional stability with the high-growth frontiers of global breakthrough technology.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <Link href="/strategy">
                <button className="luxury-button min-w-[240px]">
                  Explore Strategy
                </button>
              </Link>
              <Link href="/partner" className="text-[10px] uppercase tracking-[0.3em] text-gray-500 hover:text-brand-gold transition-colors flex items-center gap-3">
                Submit Proposal <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-brand-gold/20 flex flex-col items-center gap-4"
        >
          <span className="text-[8px] uppercase tracking-[0.8em]">Scroll to Discover</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-brand-gold/40 to-transparent" />
        </motion.div>
      </section>

      {/* Philosophy Brief */}
      <section className="py-32 relative">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <span className="section-label">Our Philosophy</span>
              <h2 className="text-4xl md:text-5xl font-serif mb-8 text-brand-ivory leading-tight">
                Patience Meets <br />
                <span className="text-brand-gold italic">Precision.</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Injazat Capital is built on the principle of *Patient Capital*. Unlike traditional funds bound by short-term cycles, we provide the stability and deep regional integration necessary to scale truly transformative technologies.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 border border-brand-gold/20 flex items-center justify-center group-hover:border-brand-gold transition-colors">
                    <ShieldCheck size={18} className="text-brand-gold" />
                  </div>
                  <span className="text-xs uppercase tracking-widest text-gray-300">Institutional Security</span>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 border border-brand-gold/20 flex items-center justify-center group-hover:border-brand-gold transition-colors">
                    <Globe size={18} className="text-brand-gold" />
                  </div>
                  <span className="text-xs uppercase tracking-widest text-gray-300">Strategic Sovereign Network</span>
                </div>
              </div>
            </motion.div>

            <div className="relative">
              <div className="aspect-[4/5] bg-brand-navy border border-brand-gold/10 relative overflow-hidden group">
                 <div className="absolute inset-0 bg-brand-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                 {/* Visual of abstract architecture or network */}
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-px h-full bg-brand-gold/10 absolute left-1/2" />
                    <div className="w-full h-px bg-brand-gold/10 absolute top-1/2" />
                    <div className="w-32 h-32 border border-brand-gold/20 rotate-45 group-hover:scale-150 transition-transform duration-[2s]" />
                 </div>
              </div>
              <div className="absolute -bottom-8 -left-8 p-10 bg-brand-obsidian border border-brand-gold/10 shadow-2xl">
                <div className="text-4xl font-serif text-brand-gold mb-2">$1B+</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-500">Assets Managed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Breakthrough Focus Areas */}
      <section className="py-32 bg-brand-obsidian border-y border-brand-gold/5">
        <div className="container-custom">
          <div className="text-center mb-24">
            <span className="section-label">Focus Areas</span>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-ivory">Breakthrough Sectors</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Cpu />, title: "AI & Autonomy", desc: "Foundational models and robotics reshaping regional logistics and industry." },
              { icon: <Zap />, title: "Energy Transition", desc: "Next-generation solar, fusion, and hydrogen storage solutions." },
              { icon: <Globe />, title: "FinTech Infrastructure", desc: "Blockchain-based institutional systems and sovereign payment rails." },
              { icon: <ShieldCheck />, title: "BioTech & Health", desc: "Precision medicine and longevity research tailored for regional demographics." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 border border-brand-gold/10 hover:border-brand-gold/40 transition-all duration-500 group"
              >
                <div className="text-brand-gold mb-8 group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                <h3 className="text-lg font-serif mb-4 text-brand-ivory">{item.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Discreet CTA */}
      <section className="py-40 text-center">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto border-t border-brand-gold/20 pt-20">
            <h2 className="text-4xl font-serif mb-8 text-brand-ivory">For the Founders of What&apos;s Next.</h2>
            <p className="text-gray-400 mb-12 font-light">
              We seek visionary entrepreneurs building technologies with structural significance. Our selection process is rigorous, and our support is absolute.
            </p>
            <Link href="/partner">
              <button className="luxury-button px-16">
                Begin Proposal
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}