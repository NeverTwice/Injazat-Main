'use client';

import { motion } from 'framer-motion';
import { Target, TrendingUp, ShieldCheck, Zap, Globe } from 'lucide-react';

export default function StrategyPage() {
  return (
    <div className="bg-brand-obsidian pt-40 pb-20">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-24"
          >
            <span className="section-label">Investment Strategy</span>
            <h1 className="text-5xl md:text-7xl font-serif text-brand-ivory mb-8">
              Structural <span className="text-brand-gold italic">Precision.</span>
            </h1>
            <p className="text-xl text-gray-400 font-light max-w-2xl leading-relaxed">
              We deploy capital through a multi-modal strategy, designed to support both high-growth startups and established regional leaders.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mb-32">
            {[
              {
                title: "Venture Core",
                icon: <Zap />,
                desc: "Backing the most ambitious founders in AI, BioTech, and Clean Energy with early to growth-stage capital."
              },
              {
                title: "Strategic Growth",
                icon: <TrendingUp />,
                desc: "Equity partnerships with established firms undergoing digital transformation or regional expansion."
              },
              {
                title: "Sovereign Integration",
                icon: <ShieldCheck />,
                desc: "Aligning global technology solutions with regional infrastructure and policy mandates."
              },
              {
                title: "Direct Allocation",
                icon: <Target />,
                desc: "Flexible, long-term capital pools with no fixed exit mandates, allowing for true structural value creation."
              }
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-12 border border-brand-gold/10 bg-brand-navy/20 group hover:border-brand-gold/30 transition-all duration-500"
              >
                <div className="text-brand-gold mb-8">{card.icon}</div>
                <h3 className="text-2xl font-serif text-brand-ivory mb-6">{card.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="border-t border-brand-gold/5 pt-24 text-center">
            <h2 className="text-3xl font-serif text-brand-ivory mb-12">The Value-Add Protocol</h2>
            <div className="grid md:grid-cols-3 gap-16">
              <div>
                <span className="text-brand-gold text-2xl font-serif mb-4 block">01</span>
                <h4 className="text-[10px] uppercase tracking-[0.4em] mb-4">Market Access</h4>
                <p className="text-xs text-gray-500">Unrivaled introduction to regional sovereign wealth and ministerial networks.</p>
              </div>
              <div>
                <span className="text-brand-gold text-2xl font-serif mb-4 block">02</span>
                <h4 className="text-[10px] uppercase tracking-[0.4em] mb-4">Operational Alpha</h4>
                <p className="text-xs text-gray-500">Direct support for regional talent acquisition and regulatory compliance.</p>
              </div>
              <div>
                <span className="text-brand-gold text-2xl font-serif mb-4 block">03</span>
                <h4 className="text-[10px] uppercase tracking-[0.4em] mb-4">Capital Security</h4>
                <p className="text-xs text-gray-500">Stability and protection derived from our position within the institutional ecosystem.</p>
              </div>
            </div>
          </div>

          {/* Geographic Reach Section */}
          <div className="mt-40 border-t border-brand-gold/5 pt-24">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <span className="section-label">Geographic Reach</span>
                <h2 className="text-4xl font-serif text-brand-ivory mb-8">Global Networks. <br /><span className="text-brand-gold italic">Local Precision.</span></h2>
                <p className="text-gray-400 font-light leading-relaxed mb-12">
                  While our roots and headquarters remain firmly in the GCC, our investment mandate is global. We leverage our strategic position to bridge international breakthrough technologies with regional institutional stability.
                </p>
                
                <div className="grid grid-cols-2 gap-12">
                  <div>
                    <h4 className="text-[10px] uppercase tracking-[0.4em] text-brand-gold mb-6">Primary Markets</h4>
                    <ul className="space-y-3 text-xs text-gray-300">
                      <li>United Arab Emirates</li>
                      <li>Saudi Arabia</li>
                      <li>Qatar</li>
                      <li>Kuwait</li>
                      <li>Bahrain</li>
                      <li>Oman</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-[0.4em] text-brand-gold mb-6">Growth Markets</h4>
                    <ul className="space-y-3 text-xs text-gray-300">
                      <li>Europe</li>
                      <li>North America</li>
                      <li>Asia - Pacific</li>
                      <li>Africa</li>
                      <li>Latin America</li>
                      <li>Emerging Markets</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              <div className="relative aspect-square bg-brand-navy/30 border border-brand-gold/10 overflow-hidden flex items-center justify-center group">
                {/* Abstract Global Network Visual */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-gold via-transparent to-transparent" />
                <div className="w-64 h-64 border border-brand-gold/20 rounded-full animate-[spin_20s_linear_infinite]" />
                <div className="w-48 h-48 border border-brand-gold/10 rounded-full absolute animate-[spin_15s_linear_infinite_reverse]" />
                <div className="w-px h-full bg-brand-gold/5 absolute left-1/2" />
                <div className="w-full h-px bg-brand-gold/5 absolute top-1/2" />
                <Globe className="text-brand-gold opacity-10 scale-[3] absolute" strokeWidth={0.2} />
                <div className="relative z-10 text-center">
                  <span className="text-[8px] uppercase tracking-[1em] text-brand-gold/40">Sovereign Interconnectivity</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

