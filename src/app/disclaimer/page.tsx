'use client';

import { motion } from 'framer-motion';

export default function DisclaimerPage() {
  return (
    <div className="bg-brand-obsidian pt-40 pb-20 min-h-screen">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="section-label">Institutional Governance</span>
            <h1 className="text-4xl md:text-5xl font-serif text-brand-ivory mb-12">Regulatory Disclaimer</h1>
            
            <div className="prose prose-invert prose-sm max-w-none text-gray-400 space-y-8 font-light leading-relaxed">
              <section className="space-y-4">
                <h2 className="text-brand-gold uppercase tracking-[0.2em] text-xs font-bold">Regulatory Status</h2>
                <p>
                  Injazat Capital is a private investment office and is regulated by the relevant authorities in the jurisdictions in which it operates, including the Dubai Financial Services Authority (DFSA) where applicable.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-brand-gold uppercase tracking-[0.2em] text-xs font-bold">Investment Risk</h2>
                <p>
                  Investing in venture capital and private equity involves a high degree of risk. Past performance is not indicative of future results. The value of investments can go down as well as up, and investors may not get back the full amount invested.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-brand-gold uppercase tracking-[0.2em] text-xs font-bold">No Reliance</h2>
                <p>
                  While we endeavor to ensure the information on this website is accurate, Injazat Capital makes no representations or warranties of any kind regarding the completeness, accuracy, or reliability of the information provided.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-brand-gold uppercase tracking-[0.2em] text-xs font-bold">External Links</h2>
                <p>
                  This website may contain links to third-party websites. These links are provided for convenience only and do not imply endorsement. We are not responsible for the content or privacy practices of external sites.
                </p>
              </section>

              <section className="space-y-4 border-t border-brand-gold/10 pt-8 mt-12">
                <p className="text-[10px] italic uppercase tracking-widest leading-relaxed">
                  This communication is intended for professional clients and institutional investors only. It is not intended for distribution to retail clients.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
