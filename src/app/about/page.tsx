'use client';

import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="bg-brand-obsidian pt-40 pb-20">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="section-label">The Office</span>
            <h1 className="text-5xl md:text-7xl font-serif text-brand-ivory mb-12">
              Heritage in Stability. <br />
              <span className="text-brand-gold italic">Focus on the Future.</span>
            </h1>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-20 items-start">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="space-y-8 text-gray-400 font-light leading-relaxed"
            >
              <p>
                Injazat Capital operates as a bespoke investment office, rooted in the structural stability of the GCC region. Our mandate is to preserve and grow capital through strategic alignment with the world&apos;s most promising technology founders.
              </p>
              <p>
                We serve as a bridge—integrating deep regional sovereign networks with the high-risk, high-reward frontier of breakthrough innovation. This dual nature allows us to offer more than just liquidity; we provide a platform for global expansion and regional integration.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 1 }}
              className="p-10 border border-brand-gold/10 bg-brand-navy/30"
            >
              <h3 className="text-xs font-bold uppercase tracking-[0.4em] text-brand-gold mb-6">Our Philosophy</h3>
              <ul className="space-y-6">
                <li className="space-y-2">
                  <span className="text-brand-ivory text-sm block">Discreet Partnership</span>
                  <p className="text-[11px] text-gray-500">We prioritize privacy and strategic alignment over public visibility.</p>
                </li>
                <li className="space-y-2">
                  <span className="text-brand-ivory text-sm block">Patient Horizons</span>
                  <p className="text-[11px] text-gray-500">Capital deployment focused on generational shifts, not quarterly cycles.</p>
                </li>
                <li className="space-y-2">
                  <span className="text-brand-ivory text-sm block">Active Stewardship</span>
                  <p className="text-[11px] text-gray-500">Providing the structural support necessary for breakthrough scaling.</p>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
        
        {/* Abstract Visual Detail */}
        <div className="mt-32 border-t border-brand-gold/5 pt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: "Founded", value: "2004" },
              { label: "Management", value: "Sovereign-Linked" },
              { label: "Global Offices", value: "4" },
              { label: "Sector Target", value: "Breakthrough Tech" }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-[10px] uppercase tracking-[0.5em] text-gray-600 mb-4">{stat.label}</div>
                <div className="text-xl font-serif text-brand-gold">{stat.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}