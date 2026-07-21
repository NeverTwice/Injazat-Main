'use client';

import { motion } from 'framer-motion';

export default function TermsPage() {
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
            <h1 className="text-4xl md:text-5xl font-serif text-brand-ivory mb-12">Terms of Use</h1>
            
            <div className="prose prose-invert prose-sm max-w-none text-gray-400 space-y-8 font-light leading-relaxed">
              <p>
                By accessing this website, you agree to be bound by these Terms of Use and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
              </p>

              <section className="space-y-4">
                <h2 className="text-brand-gold uppercase tracking-[0.2em] text-xs font-bold">1. Intellectual Property</h2>
                <p>
                  The content, layout, design, data, databases and graphics on this website are protected by intellectual property laws and are owned by Injazat Capital or its licensors. No part of the website may be reproduced, stored or transmitted in any form without our prior written consent.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-brand-gold uppercase tracking-[0.2em] text-xs font-bold">2. No Offer or Advice</h2>
                <p>
                  The information provided on this website is for general informational purposes only and does not constitute an offer to sell or a solicitation of an offer to buy any security or investment product. Nothing on this site shall be construed as financial, legal, or tax advice.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-brand-gold uppercase tracking-[0.2em] text-xs font-bold">3. Access and Security</h2>
                <p>
                  We reserve the right to restrict access to certain parts of this website or the entire platform at our discretion. You are responsible for maintaining the confidentiality of any credentials used to access our Submission Portal.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-brand-gold uppercase tracking-[0.2em] text-xs font-bold">4. Limitation of Liability</h2>
                <p>
                  Injazat Capital shall not be liable for any direct, indirect, incidental, or consequential damages arising out of the use or inability to use this website or the information contained herein.
                </p>
              </section>

              <section className="space-y-4 border-t border-brand-gold/10 pt-8 mt-12">
                <p className="text-[10px] italic">
                  Governing Law: These terms are governed by the laws of the Dubai International Financial Centre (DIFC).
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
