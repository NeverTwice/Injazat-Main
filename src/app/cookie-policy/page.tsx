"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function CookiePolicyPage() {
  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="text-gold-500/70 text-[11px] tracking-[0.3em] uppercase font-medium mb-6 block">Legal</span>
              <h1 className="text-3xl md:text-4xl font-medium mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Cookie Policy</h1>
              <div className="w-12 h-px bg-gold-500/40 mb-6" />
              <p className="text-white/30 text-sm mb-12">Last updated: January 1, 2025</p>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }} className="space-y-10 text-white/40 text-sm font-light leading-relaxed">
              <section>
                <h2 className="text-white/70 text-lg font-medium mb-4" style={{ fontFamily: 'var(--font-heading)' }}>1. What Are Cookies</h2>
                <p>Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit a website. They are widely used to make websites work more efficiently, provide a better user experience, and supply information to site operators. Cookies may be set by the website you are visiting (&ldquo;first-party cookies&rdquo;) or by third parties (&ldquo;third-party cookies&rdquo;).</p>
              </section>

              <section>
                <h2 className="text-white/70 text-lg font-medium mb-4" style={{ fontFamily: 'var(--font-heading)' }}>2. How We Use Cookies</h2>
                <p>Injazat Capital uses cookies and similar tracking technologies on www.injazatcapitals.com (the &ldquo;Site&rdquo;) for the following purposes:</p>

                <h3 className="text-white/60 text-sm font-medium mt-6 mb-3">2.1 Strictly Necessary Cookies</h3>
                <p>These cookies are essential for the Site to function properly. They enable core features such as security, network management, and account access. You cannot opt out of these cookies as the Site cannot function without them.</p>
                <div className="mt-3 border border-white/5 p-4">
                  <div className="grid grid-cols-3 gap-4 text-[10px] text-white/30 uppercase tracking-wider mb-2 font-medium border-b border-white/5 pb-2">
                    <span>Cookie</span><span>Purpose</span><span>Duration</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-xs py-2 border-b border-white/5">
                    <span className="text-white/50">session_id</span><span>Session management</span><span>Session</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-xs py-2 border-b border-white/5">
                    <span className="text-white/50">csrf_token</span><span>Security / form protection</span><span>Session</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-xs py-2">
                    <span className="text-white/50">cookie_consent</span><span>Stores consent preferences</span><span>12 months</span>
                  </div>
                </div>

                <h3 className="text-white/60 text-sm font-medium mt-6 mb-3">2.2 Analytics Cookies</h3>
                <p>These cookies help us understand how visitors interact with the Site by collecting and reporting information anonymously. This helps us improve the Site&rsquo;s structure, content, and functionality.</p>
                <div className="mt-3 border border-white/5 p-4">
                  <div className="grid grid-cols-3 gap-4 text-[10px] text-white/30 uppercase tracking-wider mb-2 font-medium border-b border-white/5 pb-2">
                    <span>Cookie</span><span>Purpose</span><span>Duration</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-xs py-2 border-b border-white/5">
                    <span className="text-white/50">_ga</span><span>Google Analytics — distinguishes users</span><span>2 years</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-xs py-2 border-b border-white/5">
                    <span className="text-white/50">_ga_*</span><span>Google Analytics — session state</span><span>2 years</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-xs py-2">
                    <span className="text-white/50">_gid</span><span>Google Analytics — session identification</span><span>24 hours</span>
                  </div>
                </div>

                <h3 className="text-white/60 text-sm font-medium mt-6 mb-3">2.3 Functional Cookies</h3>
                <p>These cookies enable enhanced functionality and personalization, such as remembering your preferences, language settings, and form inputs. They may be set by us or by third-party providers whose services we have integrated into the Site.</p>

                <h3 className="text-white/60 text-sm font-medium mt-6 mb-3">2.4 Marketing Cookies</h3>
                <p>These cookies may be used to track visitors across websites to display relevant advertisements. We currently do not use marketing or advertising cookies. Should this change, we will update this policy and seek your consent where required.</p>
              </section>

              <section>
                <h2 className="text-white/70 text-lg font-medium mb-4" style={{ fontFamily: 'var(--font-heading)' }}>3. Managing Cookies</h2>
                <p className="mb-3">You can control and manage cookies in several ways:</p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2"><span className="text-gold-500/50 mt-1.5">•</span><strong className="text-white/50">Browser settings:</strong> Most web browsers allow you to manage cookies through their settings. You can typically configure your browser to block all cookies, accept all cookies, or notify you when a cookie is being set.</li>
                  <li className="flex items-start gap-2"><span className="text-gold-500/50 mt-1.5">•</span><strong className="text-white/50">Opt-out tools:</strong> For Google Analytics, you can install the Google Analytics Opt-out Browser Add-on at https://tools.google.com/dlpage/gaoptout.</li>
                  <li className="flex items-start gap-2"><span className="text-gold-500/50 mt-1.5">•</span><strong className="text-white/50">Device settings:</strong> On mobile devices, you can manage cookie preferences through your device&rsquo;s operating system settings.</li>
                </ul>
                <p className="mt-3">Please note that blocking or deleting certain cookies may impact the functionality of the Site and prevent some features from working properly.</p>
              </section>

              <section>
                <h2 className="text-white/70 text-lg font-medium mb-4" style={{ fontFamily: 'var(--font-heading)' }}>4. Similar Technologies</h2>
                <p>In addition to cookies, we may use similar technologies such as web beacons (pixel tags), local storage, and device fingerprinting for analytics and functionality purposes. These technologies are subject to the same consent and management principles as cookies.</p>
              </section>

              <section>
                <h2 className="text-white/70 text-lg font-medium mb-4" style={{ fontFamily: 'var(--font-heading)' }}>5. Updates to This Policy</h2>
                <p>We may update this Cookie Policy from time to time to reflect changes in our practices or applicable laws. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically.</p>
              </section>

              <section>
                <h2 className="text-white/70 text-lg font-medium mb-4" style={{ fontFamily: 'var(--font-heading)' }}>6. Contact</h2>
                <p>If you have questions about our use of cookies or this Cookie Policy, please contact us at services@injazatcapitals.com.</p>
              </section>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
