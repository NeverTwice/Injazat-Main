import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-navy-950 border-t border-white/5">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3.5 mb-6">
              <svg width="44" height="44" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                <path d="M50 2 L79 11 L93 38 L93 62 L79 89 L50 98 L21 89 L7 62 L7 38 L21 11 Z" stroke="#b8943f" strokeWidth="1.5" fill="none" opacity="0.6" />
                <path d="M50 12 L72 18 L84 40 L84 60 L72 82 L50 88 L28 82 L16 60 L16 40 L28 18 Z" stroke="#b8943f" strokeWidth="0.8" fill="none" opacity="0.25" />
                <line x1="38" y1="30" x2="38" y2="70" stroke="#b8943f" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="32" y1="30" x2="44" y2="30" stroke="#b8943f" strokeWidth="1.8" strokeLinecap="round" />
                <line x1="32" y1="70" x2="44" y2="70" stroke="#b8943f" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M68 34 C58 28, 50 30, 48 38 L48 62 C50 70, 58 72, 68 66" stroke="#b8943f" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                <path d="M50 22 L53 25 L50 28 L47 25 Z" fill="#b8943f" opacity="0.4" />
              </svg>
              <div>
                <div className="text-white/70 text-[10px] font-medium tracking-[0.35em]">INJAZAT</div>
                <div className="text-white/70 text-[10px] font-medium tracking-[0.35em]">CAPITAL</div>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              A leading alternative investment firm in the GCC, partnering with exceptional entrepreneurs to build enduring companies.
            </p>
            <div className="flex gap-4 mt-8">
              {[
                { label: "LinkedIn", path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
                { label: "X", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
              ].map((social) => (
                <a key={social.label} href="#" className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/30 hover:text-gold-500 hover:border-gold-500/30 transition-all duration-300" aria-label={social.label}>
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d={social.path}/></svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[11px] font-medium tracking-[0.2em] text-gold-500/80 mb-6">QUICK LINKS</h3>
            <div className="space-y-3">
              {[
                { href: "/about", label: "About Us" },
                { href: "/investment-strategy", label: "Investment Approach" },
                { href: "/portfolio", label: "Portfolio" },
                { href: "/team", label: "Team" },
                { href: "/insights", label: "Insights" },
                { href: "/investor-relations", label: "Investor Relations" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="block text-white/40 text-sm hover:text-white/70 transition-colors duration-300">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-[11px] font-medium tracking-[0.2em] text-gold-500/80 mb-6">LEGAL</h3>
            <div className="space-y-3">
              {[
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Terms of Use", href: "/terms-of-use" },
                { label: "Disclaimer", href: "/disclaimer" },
                { label: "Cookie Policy", href: "/cookie-policy" },
              ].map((item) => (
                <Link key={item.href} href={item.href} className="block text-white/40 text-sm hover:text-white/70 transition-colors duration-300">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[11px] font-medium tracking-[0.2em] text-gold-500/80 mb-6">CONTACT</h3>
            <div className="space-y-4 text-sm text-white/40">
              <p>+971 50 826 0503</p>
              <p>services@injazatcapitals.com</p>
              <p className="leading-relaxed">Level 2, Building 7<br/>Dubai Media City<br/>Dubai, UAE</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs tracking-wide">© 2025 Injazat Capital Limited. All rights reserved.</p>
          <div className="flex gap-8">
            {[
              { label: "Privacy", href: "/privacy-policy" },
              { label: "Terms", href: "/terms-of-use" },
              { label: "Disclaimer", href: "/disclaimer" },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="text-white/25 text-xs tracking-wide hover:text-white/50 transition-colors duration-300">{item.label}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
