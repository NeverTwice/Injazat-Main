"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function DisclaimerPage() {
  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="text-gold-500/70 text-[11px] tracking-[0.3em] uppercase font-medium mb-6 block">Legal</span>
              <h1 className="text-3xl md:text-4xl font-medium mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Disclaimer</h1>
              <div className="w-12 h-px bg-gold-500/40 mb-6" />
              <p className="text-white/30 text-sm mb-12">Last updated: January 1, 2025</p>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }} className="space-y-10 text-white/40 text-sm font-light leading-relaxed">
              <section>
                <h2 className="text-white/70 text-lg font-medium mb-4" style={{ fontFamily: 'var(--font-heading)' }}>General Disclaimer</h2>
                <p>The information contained on this website (www.injazatcapitals.com) is published by Injazat Capital Limited for informational purposes only. It does not constitute an offer to sell or a solicitation of an offer to buy any security, financial instrument, or investment product in any jurisdiction. The material herein is not intended to provide, and should not be relied upon for, investment advice, legal counsel, tax guidance, or any form of professional consultation.</p>
              </section>

              <section>
                <h2 className="text-white/70 text-lg font-medium mb-4" style={{ fontFamily: 'var(--font-heading)' }}>No Investment Advice</h2>
                <p>Nothing on this website constitutes a recommendation to buy, sell, or hold any investment, or a personal recommendation to any user. Injazat Capital does not render personalized investment advice through this website. Any investment decisions should be made only after consulting with qualified financial, legal, and tax advisors, taking into account your individual financial circumstances, investment objectives, and risk tolerance.</p>
              </section>

              <section>
                <h2 className="text-white/70 text-lg font-medium mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Risk Factors</h2>
                <p className="mb-3">Investments in venture capital, growth equity, private equity, and related alternative investment strategies involve significant risks, including but not limited to:</p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2"><span className="text-gold-500/50 mt-1.5">•</span>Loss of entire invested capital</li>
                  <li className="flex items-start gap-2"><span className="text-gold-500/50 mt-1.5">•</span>Illiquidity — investments may not be readily convertible to cash</li>
                  <li className="flex items-start gap-2"><span className="text-gold-500/50 mt-1.5">•</span>Long holding periods with no guaranteed return timeline</li>
                  <li className="flex items-start gap-2"><span className="text-gold-500/50 mt-1.5">•</span>Concentration risk in specific sectors, geographies, or companies</li>
                  <li className="flex items-start gap-2"><span className="text-gold-500/50 mt-1.5">•</span>Valuation uncertainty, particularly for early-stage and privately held companies</li>
                  <li className="flex items-start gap-2"><span className="text-gold-500/50 mt-1.5">•</span>Currency and exchange rate fluctuations</li>
                  <li className="flex items-start gap-2"><span className="text-gold-500/50 mt-1.5">•</span>Regulatory, political, and economic risks in operating jurisdictions</li>
                  <li className="flex items-start gap-2"><span className="text-gold-500/50 mt-1.5">•</span>Limited transparency and information availability for private investments</li>
                </ul>
                <p className="mt-3">These investments are suitable only for sophisticated investors who can bear the risk of loss and who have no need for immediate liquidity.</p>
              </section>

              <section>
                <h2 className="text-white/70 text-lg font-medium mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Past Performance</h2>
                <p>Past performance is not indicative of, and does not guarantee, future results. Any performance data, returns, or track record information presented on this website is provided for illustrative purposes only. Actual results may differ materially from any projections, forecasts, or historical performance data presented. There can be no assurance that any fund, portfolio, or investment managed by Injazat Capital will achieve its investment objectives or produce returns comparable to any historical data shown.</p>
              </section>

              <section>
                <h2 className="text-white/70 text-lg font-medium mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Forward-Looking Statements</h2>
                <p>This website may contain forward-looking statements, including statements regarding expected investments, market trends, pipeline opportunities, and anticipated performance. These statements are based on current expectations and assumptions and are subject to significant uncertainties and risks. Actual results may differ materially from those expressed or implied. Injazat Capital undertakes no obligation to update or revise any forward-looking statements.</p>
              </section>

              <section>
                <h2 className="text-white/70 text-lg font-medium mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Regulatory Notice</h2>
                <p>Injazat Capital Limited is not registered as a broker-dealer, investment adviser, or in any equivalent capacity in any jurisdiction outside of its operating jurisdictions. The content on this website is not intended for distribution to, or use by, any person or entity in any jurisdiction where such distribution or use would be contrary to applicable law or regulation, or which would subject Injazat Capital to any registration or licensing requirement within such jurisdiction.</p>
              </section>

              <section>
                <h2 className="text-white/70 text-lg font-medium mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Accuracy of Information</h2>
                <p>While we endeavor to ensure the information on this website is accurate and current, Injazat Capital makes no representations or warranties, express or implied, regarding the accuracy, completeness, reliability, or suitability of any information, data, or materials contained herein. All information is provided &ldquo;as is&rdquo; without warranty of any kind. Injazat Capital reserves the right to modify, update, or remove content at any time without prior notice.</p>
              </section>

              <section>
                <h2 className="text-white/70 text-lg font-medium mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Shariah Compliance</h2>
                <p>Where Injazat Capital indicates that certain investment products or strategies are Shariah-compliant, such compliance is based on the guidance and certification of a qualified Shariah advisory board. Shariah compliance determinations may vary among scholars and advisory bodies. Investors with specific Shariah compliance requirements should conduct their own independent assessment.</p>
              </section>

              <section>
                <h2 className="text-white/70 text-lg font-medium mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Portfolio Companies</h2>
                <p>References to specific portfolio companies, investments, or transactions are included for informational and illustrative purposes only. Such references do not constitute an endorsement, recommendation, or guarantee of any kind. The inclusion of any portfolio company does not imply that the investment has been or will be profitable.</p>
              </section>

              <section>
                <h2 className="text-white/70 text-lg font-medium mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Contact</h2>
                <p>For any questions regarding this Disclaimer, please contact services@injazatcapitals.com.</p>
              </section>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
