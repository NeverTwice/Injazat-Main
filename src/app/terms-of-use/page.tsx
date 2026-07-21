"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function TermsOfUsePage() {
  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="text-gold-500/70 text-[11px] tracking-[0.3em] uppercase font-medium mb-6 block">Legal</span>
              <h1 className="text-3xl md:text-4xl font-medium mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Terms of Use</h1>
              <div className="w-12 h-px bg-gold-500/40 mb-6" />
              <p className="text-white/30 text-sm mb-12">Last updated: January 1, 2025</p>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }} className="space-y-10 text-white/40 text-sm font-light leading-relaxed">
              <section>
                <h2 className="text-white/70 text-lg font-medium mb-4" style={{ fontFamily: 'var(--font-heading)' }}>1. Acceptance of Terms</h2>
                <p>By accessing, browsing, or using the website located at www.injazatcapitals.com (the &ldquo;Site&rdquo;), you acknowledge that you have read, understood, and agree to be bound by these Terms of Use (&ldquo;Terms&rdquo;). If you do not agree to these Terms, you must immediately discontinue use of the Site. These Terms constitute a legally binding agreement between you and Injazat Capital Limited (&ldquo;Injazat Capital,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;).</p>
              </section>

              <section>
                <h2 className="text-white/70 text-lg font-medium mb-4" style={{ fontFamily: 'var(--font-heading)' }}>2. Nature of Information</h2>
                <p>The information provided on the Site is for general informational purposes only and does not constitute an offer, solicitation, or recommendation to buy, sell, or hold any securities, financial instruments, or investment products. Nothing on the Site should be construed as investment, legal, tax, or financial advice. The content is not directed at any person in any jurisdiction where such distribution or use would be contrary to local law or regulation.</p>
                <p className="mt-3">Past performance is not indicative of future results. All investments carry risk, including the possible loss of principal. Investment returns and principal value will fluctuate, and investors may receive more or less than their original investment.</p>
              </section>

              <section>
                <h2 className="text-white/70 text-lg font-medium mb-4" style={{ fontFamily: 'var(--font-heading)' }}>3. Accredited Investors and Qualified Purchasers</h2>
                <p>Certain areas of the Site, and certain investment opportunities described herein, may be available only to &ldquo;accredited investors&rdquo; as defined by applicable securities laws, &ldquo;qualified purchasers&rdquo; as defined under applicable regulations, or &ldquo;professional investors&rdquo; as defined under the DIFC Collective Investment Law. By accessing such areas or expressing interest in such opportunities, you represent and warrant that you meet the applicable qualification requirements.</p>
              </section>

              <section>
                <h2 className="text-white/70 text-lg font-medium mb-4" style={{ fontFamily: 'var(--font-heading)' }}>4. Intellectual Property</h2>
                <p>All content on the Site — including but not limited to text, graphics, logos, trademarks, images, data compilations, software, and the overall design and layout — is the property of Injazat Capital or its licensors and is protected by applicable intellectual property laws. You may not reproduce, distribute, modify, display, create derivative works from, or otherwise exploit any content from the Site without our prior written consent.</p>
                <p className="mt-3">The Injazat Capital name, logo, and all related trademarks, service marks, and trade names are the exclusive property of Injazat Capital Limited. Unauthorized use is strictly prohibited.</p>
              </section>

              <section>
                <h2 className="text-white/70 text-lg font-medium mb-4" style={{ fontFamily: 'var(--font-heading)' }}>5. Confidentiality</h2>
                <p>Certain information accessible through the Site may be confidential and proprietary. By accessing such information, you agree to maintain its confidentiality and not to disclose, distribute, or reproduce it without our prior written consent. This obligation survives any termination of your use of the Site. Confidential information includes, but is not limited to, fund performance data, portfolio company information, investment strategies, and investor communications.</p>
              </section>

              <section>
                <h2 className="text-white/70 text-lg font-medium mb-4" style={{ fontFamily: 'var(--font-heading)' }}>6. User Conduct</h2>
                <p className="mb-3">You agree not to:</p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2"><span className="text-gold-500/50 mt-1.5">•</span>Use the Site for any unlawful purpose or in violation of any applicable laws or regulations</li>
                  <li className="flex items-start gap-2"><span className="text-gold-500/50 mt-1.5">•</span>Attempt to gain unauthorized access to any part of the Site, accounts, or systems</li>
                  <li className="flex items-start gap-2"><span className="text-gold-500/50 mt-1.5">•</span>Transmit any viruses, malware, or other harmful or disruptive code</li>
                  <li className="flex items-start gap-2"><span className="text-gold-500/50 mt-1.5">•</span>Use automated tools, bots, or scripts to access, scrape, or collect data from the Site</li>
                  <li className="flex items-start gap-2"><span className="text-gold-500/50 mt-1.5">•</span>Impersonate any person or entity, or misrepresent your affiliation with any person or entity</li>
                  <li className="flex items-start gap-2"><span className="text-gold-500/50 mt-1.5">•</span>Interfere with the proper functioning of the Site or its infrastructure</li>
                </ul>
              </section>

              <section>
                <h2 className="text-white/70 text-lg font-medium mb-4" style={{ fontFamily: 'var(--font-heading)' }}>7. Third-Party Links</h2>
                <p>The Site may contain links to third-party websites, resources, or services. These links are provided for convenience only. Injazat Capital does not endorse, control, or assume responsibility for the content, privacy practices, or availability of any third-party sites. Your use of third-party sites is at your own risk and subject to the terms and policies of those sites.</p>
              </section>

              <section>
                <h2 className="text-white/70 text-lg font-medium mb-4" style={{ fontFamily: 'var(--font-heading)' }}>8. Limitation of Liability</h2>
                <p>To the maximum extent permitted by applicable law, Injazat Capital, its directors, officers, employees, agents, and affiliates shall not be liable for any direct, indirect, incidental, consequential, special, or exemplary damages arising out of or in connection with your access to or use of the Site, including but not limited to damages for loss of profits, data, goodwill, or other intangible losses, even if we have been advised of the possibility of such damages.</p>
              </section>

              <section>
                <h2 className="text-white/70 text-lg font-medium mb-4" style={{ fontFamily: 'var(--font-heading)' }}>9. Indemnification</h2>
                <p>You agree to indemnify, defend, and hold harmless Injazat Capital and its directors, officers, employees, agents, and affiliates from and against any and all claims, liabilities, damages, losses, costs, and expenses (including reasonable attorneys&rsquo; fees) arising out of or related to your use of the Site, your violation of these Terms, or your violation of any rights of a third party.</p>
              </section>

              <section>
                <h2 className="text-white/70 text-lg font-medium mb-4" style={{ fontFamily: 'var(--font-heading)' }}>10. Governing Law and Jurisdiction</h2>
                <p>These Terms shall be governed by and construed in accordance with the laws of the Dubai International Financial Centre (DIFC), United Arab Emirates. Any dispute arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the DIFC Courts, unless otherwise agreed in writing.</p>
              </section>

              <section>
                <h2 className="text-white/70 text-lg font-medium mb-4" style={{ fontFamily: 'var(--font-heading)' }}>11. Modifications</h2>
                <p>We reserve the right to modify, update, or replace these Terms at any time at our sole discretion. Changes will be effective upon posting to the Site. Your continued use of the Site following any modifications constitutes acceptance of the revised Terms. We encourage you to review these Terms periodically.</p>
              </section>

              <section>
                <h2 className="text-white/70 text-lg font-medium mb-4" style={{ fontFamily: 'var(--font-heading)' }}>12. Contact</h2>
                <p>For questions regarding these Terms, please contact us at services@injazatcapitals.com.</p>
              </section>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
