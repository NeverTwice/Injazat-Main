'use client';

import { motion } from 'framer-motion';

export default function PrivacyPage() {
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
            <h1 className="text-4xl md:text-5xl font-serif text-brand-ivory mb-12">Privacy Policy</h1>
            
            <div className="prose prose-invert prose-sm max-w-none text-gray-400 space-y-8 font-light leading-relaxed">
              <section className="space-y-4">
                <h2 className="text-brand-gold uppercase tracking-[0.2em] text-xs font-bold">1. Introduction</h2>
                <p>
                  Injazat Capital ("we", "us", or "our") is committed to protecting the privacy and confidentiality of the personal information of our clients, investors, and partners. This Privacy Policy outlines our practices regarding the collection, use, and disclosure of information through our digital platforms and institutional operations.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-brand-gold uppercase tracking-[0.2em] text-xs font-bold">2. Information Collection</h2>
                <p>
                  We collect information necessary to provide our investment services and fulfill regulatory requirements. This includes, but is not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Identity and contact data provided through our Submission Portal.</li>
                  <li>Professional and institutional background information.</li>
                  <li>Technical data including IP addresses and browsing behavior for security and optimization purposes.</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-brand-gold uppercase tracking-[0.2em] text-xs font-bold">3. Use of Information</h2>
                <p>
                  Personal data is processed strictly for:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Evaluating investment opportunities and strategic partnerships.</li>
                  <li>Compliance with Anti-Money Laundering (AML) and Know Your Customer (KYC) regulations.</li>
                  <li>Communication regarding institutional updates and reporting.</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-brand-gold uppercase tracking-[0.2em] text-xs font-bold">4. Data Security</h2>
                <p>
                  We implement industry-leading technical and organizational security measures to protect your data. Access to sensitive information is restricted to authorized personnel who are bound by strict confidentiality mandates.
                </p>
              </section>

              <section className="space-y-4 border-t border-brand-gold/10 pt-8 mt-12">
                <p className="text-[10px] italic">
                  Last Updated: October 2024. For inquiries regarding our data protection protocols, please contact: services@injazatcapitals.com
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
