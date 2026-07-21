'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Lock, Globe, Users2, Handshake, TrendingUp, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const partners = [
  {
    id: 'institutional',
    title: 'Institutional Investors',
    desc: 'Pension funds, sovereign wealth funds, and asset managers seeking risk-adjusted alpha.',
    icon: <Globe size={32} />,
    details: 'We provide institutional-grade governance and reporting, aligning with the rigorous standards of global sovereign entities. Our partners benefit from exclusive access to regional deep-tech deal flow and direct co-investment rights in cornerstone GCC infrastructure projects.'
  },
  {
    id: 'family',
    title: 'Family Offices',
    desc: 'Multi-generational wealth preservation through disciplined, future-focused technology investing.',
    icon: <Users2 size={32} />,
    details: 'Focusing on long-term capital appreciation, we help prominent regional and international families diversify into venture and private equity. We act as a strategic extension of the family office, providing expertise in emerging sectors like Longevity, Ag-Tech, and FinTech.'
  },
  {
    id: 'corporate',
    title: 'Corporate Partners',
    desc: 'Strategic collaboration on innovation, market expansion, and digital transformation.',
    icon: <Handshake size={32} />,
    details: 'We bridge the gap between established regional conglomerates and global breakthrough startups. Our corporate partners gain early insights into disruptive technologies, enabling them to future-proof their operations through strategic acquisitions or pilot integrations.'
  },
  {
    id: 'strategic',
    title: 'Strategic Partners',
    desc: 'Synergistic alignment across core sectors, geographies, and policy mandates.',
    icon: <TrendingUp size={32} />,
    details: 'Working closely with ministerial bodies and global innovation hubs, we facilitate the soft landing of international tech leaders into the GCC. We provide the structural support, regulatory navigation, and capital necessary for large-scale regional adoption.'
  },
];

export default function PartnerPage() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className="bg-brand-obsidian pt-40 pb-20">
      <div className="container-custom">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <span className="section-label">Submission Protocol</span>
            <h1 className="text-5xl font-serif text-brand-ivory mb-6">
              Partner with <span className="text-brand-gold italic">Vision.</span>
            </h1>
            <p className="text-gray-400 font-light max-w-xl mx-auto leading-relaxed">
              We seek founders building technologies with deep structural significance. Please provide a high-level overview of your vision and strategic alignment.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="bg-brand-navy/30 border border-brand-gold/10 p-12 relative"
          >
            <div className="absolute top-6 right-8 flex items-center gap-2 text-[8px] uppercase tracking-widest text-gray-600">
              <Lock size={10} /> Secure Submission Portal
            </div>

            <form className="space-y-12">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-[0.4em] text-brand-gold block">Principal Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-brand-gold/20 py-4 focus:border-brand-gold outline-none text-brand-ivory font-light transition-all" placeholder="Full Name" />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-[0.4em] text-brand-gold block">Organization</label>
                  <input type="text" className="w-full bg-transparent border-b border-brand-gold/20 py-4 focus:border-brand-gold outline-none text-brand-ivory font-light transition-all" placeholder="Legal Entity" />
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] uppercase tracking-[0.4em] text-brand-gold block">Strategic Sector</label>
                <select className="w-full bg-transparent border-b border-brand-gold/20 py-4 focus:border-brand-gold outline-none text-brand-ivory font-light transition-all appearance-none cursor-pointer">
                  <option className="bg-brand-obsidian">Select Focus Area</option>
                  <option className="bg-brand-obsidian">AI & Autonomy</option>
                  <option className="bg-brand-obsidian">Energy Transition</option>
                  <option className="bg-brand-obsidian">FinTech Infrastructure</option>
                  <option className="bg-brand-obsidian">BioTech & Health</option>
                  <option className="bg-brand-obsidian">Other DeepTech</option>
                </select>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] uppercase tracking-[0.4em] text-brand-gold block">Vision Statement</label>
                <textarea rows={4} className="w-full bg-transparent border-b border-brand-gold/20 py-4 focus:border-brand-gold outline-none text-brand-ivory font-light transition-all resize-none" placeholder="Provide a concise overview of the problem you are solving and your alignment with GCC structural shifts."></textarea>
              </div>

              <div className="flex justify-between items-center pt-8">
                 <p className="text-[9px] text-gray-600 max-w-sm">
                   By submitting, you acknowledge that all shared information will be handled with the highest degree of institutional confidentiality.
                 </p>
                 <button className="luxury-button min-w-[200px] flex items-center justify-center gap-3">
                   Submit Proposal <ArrowRight size={14} />
                 </button>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Who We Partner With */}
        <div className="mt-40 border-t border-brand-gold/5 pt-24">
          <div className="text-center mb-24">
            <span className="section-label">Partnership Ecosystem</span>
            <h2 className="text-4xl font-serif text-brand-ivory">Who We Partner With</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {partners.map((partner) => (
              <div 
                key={partner.id} 
                className="group p-10 border border-brand-gold/10 bg-brand-navy/20 hover:border-brand-gold/30 transition-all duration-500"
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="text-brand-gold">{partner.icon}</div>
                  <button 
                    onClick={() => setExpandedId(expandedId === partner.id ? null : partner.id)}
                    className="text-[8px] font-bold text-brand-gold uppercase tracking-[0.4em] flex items-center gap-2 hover:opacity-100 opacity-60 transition-opacity"
                  >
                    {expandedId === partner.id ? 'Close' : 'Learn More'}
                    <ChevronDown size={12} className={`transition-transform duration-500 ${expandedId === partner.id ? 'rotate-180' : ''}`} />
                  </button>
                </div>
                <h3 className="text-2xl font-serif text-brand-ivory mb-6">{partner.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-6">{partner.desc}</p>
                
                <motion.div
                  initial={false}
                  animate={{ 
                    height: expandedId === partner.id ? 'auto' : 0,
                    opacity: expandedId === partner.id ? 1 : 0
                  }}
                  className="overflow-hidden"
                >
                  <div className="pt-6 border-t border-brand-gold/5 text-xs text-gray-400 leading-relaxed font-light">
                    {partner.details}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
