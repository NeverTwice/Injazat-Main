"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="text-gold-500/70 text-[11px] tracking-[0.3em] uppercase font-medium mb-6 block">Legal</span>
              <h1 className="text-3xl md:text-4xl font-medium mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                Privacy Policy
              </h1>
              <div className="w-12 h-px bg-gold-500/40 mb-6" />
              <p className="text-white/30 text-sm mb-12">Last updated: January 1, 2025</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-10 text-white/40 text-sm font-light leading-relaxed"
            >
              <section>
                <h2 className="text-white/70 text-lg font-medium mb-4" style={{ fontFamily: 'var(--font-heading)' }}>1. Introduction</h2>
                <p>Injazat Capital Limited and its affiliates (&ldquo;Injazat Capital,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) are committed to protecting the privacy of individuals who visit our website at www.injazatcapitals.com (the &ldquo;Site&rdquo;), individuals who register to use our services, and individuals who interact with us in connection with our investment activities. This Privacy Policy describes our practices regarding the collection, use, disclosure, and protection of personal information.</p>
                <p className="mt-3">This policy applies to all personal data processed by Injazat Capital, whether collected online through the Site, via email, or through other interactions. We are committed to compliance with applicable data protection laws, including the UAE Federal Decree-Law No. 45 of 2021 on the Protection of Personal Data and the Dubai International Financial Centre (DIFC) Data Protection Law.</p>
              </section>

              <section>
                <h2 className="text-white/70 text-lg font-medium mb-4" style={{ fontFamily: 'var(--font-heading)' }}>2. Information We Collect</h2>
                <p className="mb-3">We may collect and process the following categories of personal information:</p>
                <h3 className="text-white/60 text-sm font-medium mt-4 mb-2">2.1 Information You Provide</h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2"><span className="text-gold-500/50 mt-1.5">•</span>Contact information (name, email address, phone number, mailing address)</li>
                  <li className="flex items-start gap-2"><span className="text-gold-500/50 mt-1.5">•</span>Professional information (company name, job title, industry sector)</li>
                  <li className="flex items-start gap-2"><span className="text-gold-500/50 mt-1.5">•</span>Investment-related information (investment preferences, accreditation status, business plans)</li>
                  <li className="flex items-start gap-2"><span className="text-gold-500/50 mt-1.5">•</span>Communications and correspondence sent to us via forms, email, or other channels</li>
                  <li className="flex items-start gap-2"><span className="text-gold-500/50 mt-1.5">•</span>Event registration details and preferences</li>
                  <li className="flex items-start gap-2"><span className="text-gold-500/50 mt-1.5">•</span>Know Your Customer (KYC) and Anti-Money Laundering (AML) documentation as required by applicable law</li>
                </ul>
                <h3 className="text-white/60 text-sm font-medium mt-4 mb-2">2.2 Information Collected Automatically</h3>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2"><span className="text-gold-500/50 mt-1.5">•</span>Device and browser information (IP address, browser type, operating system)</li>
                  <li className="flex items-start gap-2"><span className="text-gold-500/50 mt-1.5">•</span>Usage data (pages visited, time spent, referral sources, click patterns)</li>
                  <li className="flex items-start gap-2"><span className="text-gold-500/50 mt-1.5">•</span>Cookies and similar tracking technologies (see our Cookie Policy for details)</li>
                  <li className="flex items-start gap-2"><span className="text-gold-500/50 mt-1.5">•</span>Log files and analytics data</li>
                </ul>
              </section>

              <section>
                <h2 className="text-white/70 text-lg font-medium mb-4" style={{ fontFamily: 'var(--font-heading)' }}>3. How We Use Your Information</h2>
                <p className="mb-3">We use personal information for the following purposes:</p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2"><span className="text-gold-500/50 mt-1.5">•</span>To respond to inquiries, business plan submissions, and partnership requests</li>
                  <li className="flex items-start gap-2"><span className="text-gold-500/50 mt-1.5">•</span>To evaluate potential investments, co-investments, and business relationships</li>
                  <li className="flex items-start gap-2"><span className="text-gold-500/50 mt-1.5">•</span>To manage investor relations, including reporting, communications, and capital calls</li>
                  <li className="flex items-start gap-2"><span className="text-gold-500/50 mt-1.5">•</span>To comply with legal and regulatory obligations, including KYC/AML requirements</li>
                  <li className="flex items-start gap-2"><span className="text-gold-500/50 mt-1.5">•</span>To send newsletters, market insights, event invitations, and updates (with consent)</li>
                  <li className="flex items-start gap-2"><span className="text-gold-500/50 mt-1.5">•</span>To improve our Site, services, and user experience through analytics</li>
                  <li className="flex items-start gap-2"><span className="text-gold-500/50 mt-1.5">•</span>To protect against fraud, unauthorized access, and other security threats</li>
                </ul>
              </section>

              <section>
                <h2 className="text-white/70 text-lg font-medium mb-4" style={{ fontFamily: 'var(--font-heading)' }}>4. Legal Basis for Processing</h2>
                <p>We process personal data on the following legal bases: (a) your consent; (b) the performance of a contract or to take steps at your request prior to entering into a contract; (c) compliance with legal obligations to which we are subject; and (d) our legitimate interests, provided these are not overridden by your rights and interests.</p>
              </section>

              <section>
                <h2 className="text-white/70 text-lg font-medium mb-4" style={{ fontFamily: 'var(--font-heading)' }}>5. Data Sharing and Disclosure</h2>
                <p className="mb-3">We do not sell, rent, or trade personal information. We may share personal data with:</p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2"><span className="text-gold-500/50 mt-1.5">•</span><strong className="text-white/50">Affiliated entities:</strong> Injazat Capital fund vehicles, general partners, and management companies</li>
                  <li className="flex items-start gap-2"><span className="text-gold-500/50 mt-1.5">•</span><strong className="text-white/50">Service providers:</strong> Trusted third parties who assist with IT, analytics, legal, audit, and compliance services, bound by confidentiality obligations</li>
                  <li className="flex items-start gap-2"><span className="text-gold-500/50 mt-1.5">•</span><strong className="text-white/50">Regulatory authorities:</strong> As required by applicable laws, regulations, court orders, or governmental requests</li>
                  <li className="flex items-start gap-2"><span className="text-gold-500/50 mt-1.5">•</span><strong className="text-white/50">Co-investors and partners:</strong> In connection with specific investment transactions, subject to appropriate confidentiality arrangements</li>
                </ul>
              </section>

              <section>
                <h2 className="text-white/70 text-lg font-medium mb-4" style={{ fontFamily: 'var(--font-heading)' }}>6. International Data Transfers</h2>
                <p>Your personal data may be transferred to and processed in countries outside of the UAE, including jurisdictions where our affiliates, partners, or service providers operate. In such cases, we implement appropriate safeguards, including standard contractual clauses and data processing agreements, to ensure your data receives an adequate level of protection.</p>
              </section>

              <section>
                <h2 className="text-white/70 text-lg font-medium mb-4" style={{ fontFamily: 'var(--font-heading)' }}>7. Data Retention</h2>
                <p>We retain personal information only for as long as necessary to fulfill the purposes for which it was collected, comply with legal and regulatory obligations, resolve disputes, and enforce our agreements. Investor-related data may be retained for the duration of the fund lifecycle and applicable statutory retention periods. When personal data is no longer required, it is securely deleted or anonymized.</p>
              </section>

              <section>
                <h2 className="text-white/70 text-lg font-medium mb-4" style={{ fontFamily: 'var(--font-heading)' }}>8. Data Security</h2>
                <p>We implement appropriate technical and organizational measures to protect personal information against unauthorized access, alteration, disclosure, or destruction. These measures include encryption, access controls, secure data storage, regular security assessments, and staff training. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
              </section>

              <section>
                <h2 className="text-white/70 text-lg font-medium mb-4" style={{ fontFamily: 'var(--font-heading)' }}>9. Your Rights</h2>
                <p className="mb-3">Subject to applicable law, you may have the following rights regarding your personal data:</p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2"><span className="text-gold-500/50 mt-1.5">•</span><strong className="text-white/50">Access:</strong> Request a copy of the personal data we hold about you</li>
                  <li className="flex items-start gap-2"><span className="text-gold-500/50 mt-1.5">•</span><strong className="text-white/50">Rectification:</strong> Request correction of inaccurate or incomplete data</li>
                  <li className="flex items-start gap-2"><span className="text-gold-500/50 mt-1.5">•</span><strong className="text-white/50">Erasure:</strong> Request deletion of your personal data, subject to legal obligations</li>
                  <li className="flex items-start gap-2"><span className="text-gold-500/50 mt-1.5">•</span><strong className="text-white/50">Restriction:</strong> Request restriction of processing in certain circumstances</li>
                  <li className="flex items-start gap-2"><span className="text-gold-500/50 mt-1.5">•</span><strong className="text-white/50">Portability:</strong> Request transfer of your data in a structured, machine-readable format</li>
                  <li className="flex items-start gap-2"><span className="text-gold-500/50 mt-1.5">•</span><strong className="text-white/50">Withdrawal of consent:</strong> Where processing is based on consent, you may withdraw it at any time</li>
                </ul>
                <p className="mt-3">To exercise any of these rights, please contact us at services@injazatcapitals.com.</p>
              </section>

              <section>
                <h2 className="text-white/70 text-lg font-medium mb-4" style={{ fontFamily: 'var(--font-heading)' }}>10. Changes to This Policy</h2>
                <p>We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by posting the updated policy on the Site with the revised effective date. We encourage you to review this policy periodically.</p>
              </section>

              <section>
                <h2 className="text-white/70 text-lg font-medium mb-4" style={{ fontFamily: 'var(--font-heading)' }}>11. Contact Us</h2>
                <p>If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:</p>
                <div className="mt-4 border border-white/5 p-6">
                  <p className="text-white/50 font-medium mb-2">Injazat Capital Limited</p>
                  <p>Level 2, Building 7, Dubai Media City</p>
                  <p>Dubai, United Arab Emirates</p>
                  <p className="mt-2">Email: services@injazatcapitals.com</p>
                  <p>Phone: +971 50 826 0503</p>
                </div>
              </section>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
