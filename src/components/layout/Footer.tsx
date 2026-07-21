import Link from 'next/link';
import { Logo } from '@/components/ui/Logo';

export function Footer() {
  return (
    <footer className="bg-brand-obsidian border-t border-brand-gold/10 py-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="md:col-span-2 space-y-8">
            <Link href="/">
              <Logo />
            </Link>
            <p className="text-xs text-gray-500 max-w-sm leading-relaxed uppercase tracking-wider">
              Positioned at the intersection of traditional stability and high-growth innovation. A strategic gateway for regional and global expansion.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-brand-gold mb-8">Navigation</h4>
            <ul className="space-y-4 text-[10px] uppercase tracking-[0.2em] text-gray-400">
              <li><Link href="/about" className="hover:text-brand-gold transition-colors">The Office</Link></li>
              <li><Link href="/strategy" className="hover:text-brand-gold transition-colors">Strategy</Link></li>
              <li><Link href="/portfolio" className="hover:text-brand-gold transition-colors">Focus</Link></li>
              <li><Link href="/partner" className="hover:text-brand-gold transition-colors">Submissions</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-brand-gold mb-8">Contact</h4>
            <ul className="space-y-4 text-[10px] uppercase tracking-[0.2em] text-gray-400">
              <li>Building 7, Media City, Dubai</li>
              <li>Kingdom Centre, Riyadh</li>
              <li>Al Maryah Island, Abu Dhabi</li>
              <li className="pt-4 text-brand-gold">services@injazatcapitals.com</li>
              <li className="text-[9px] text-gray-500 tracking-[0.1em]">+971 50 826 0503</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-gold/5 pt-8 flex flex-col md:row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-[8px] uppercase tracking-[0.4em] text-gray-600">
              © 2025 Injazat Capital Limited. Registered in DIFC. All rights reserved.
            </p>
            <p className="text-[7px] uppercase tracking-[0.5em] text-brand-gold/40 mt-1">
              www.injazatcapitals.com
            </p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end gap-x-10 gap-y-4 text-[8px] uppercase tracking-[0.4em] text-gray-600">
            <Link href="/privacy" className="hover:text-brand-gold transition-colors">Privacy Protocol</Link>
            <Link href="/terms" className="hover:text-brand-gold transition-colors">Terms of Use</Link>
            <Link href="/disclaimer" className="hover:text-brand-gold transition-colors">Regulatory Disclaimer</Link>
            <Link href="/cookies" className="hover:text-brand-gold transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}