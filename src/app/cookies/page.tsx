'use client';

import { motion } from 'framer-motion';

export default function CookiePolicyPage() {
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
            <h1 className="text-4xl md:text-5xl font-serif text-brand-ivory mb-12">Cookie Policy</h1>
            
            <div className="prose prose-invert prose-sm max-w-none text-gray-400 space-y-8 font-light leading-relaxed">
              <section className="space-y-4">
                <h2 className="text-brand-gold uppercase tracking-[0.2em] text-xs font-bold">How We Use Cookies</h2>
                <p>
                  This website uses cookies and similar technologies to enhance your user experience, analyze site traffic, and secure our platforms. Cookies are small text files stored on your device when you visit a website.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-brand-gold uppercase tracking-[0.2em] text-xs font-bold">Types of Cookies Used</h2>
                <ul className="list-disc pl-6 space-y-4">
                  <li>
                    <strong className="text-brand-ivory">Essential Cookies:</strong> Necessary for the website to function correctly, including security and session management.
                  </li>
                  <li>
                    <strong className="text-brand-ivory">Analytical Cookies:</strong> Help us understand how visitors interact with our site by collecting and reporting information anonymously.
                  </li>
                  <li>
                    <strong className="text-brand-ivory">Functional Cookies:</strong> Allow the website to remember choices you make (such as language preferences).
                  </li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-brand-gold uppercase tracking-[0.2em] text-xs font-bold">Managing Cookies</h2>
                <p>
                  You can control and manage cookies through your browser settings. Please note that removing or blocking cookies can impact your user experience and parts of this website may no longer be fully accessible.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-brand-gold uppercase tracking-[0.2em] text-xs font-bold">Consent</h2>
                <p>
                  By continuing to use this website, you consent to our use of cookies as described in this policy.
                </p>
              </section>

              <section className="space-y-4 border-t border-brand-gold/10 pt-8 mt-12">
                <p className="text-[10px] italic">
                  Effective Date: October 2024. For more information, contact: services@injazatcapitals.com
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
