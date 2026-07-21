'use client';

import { useState } from 'react';
import { Search, Filter, ExternalLink, ArrowRight, Users2 } from 'lucide-react';

const companies = [
  { name: 'tabby', category: 'Fintech', stage: 'Growth Equity', status: 'Active', desc: 'Leading buy-now-pay-later platform in the MENA region.' },
  { name: 'Careem', category: 'Mobility', stage: 'Growth Equity', status: 'Active', desc: 'Super app offering ride-hailing, delivery and digital payments.' },
  { name: 'souqalmal.com', category: 'Fintech', stage: 'Growth Equity', status: 'Active', desc: 'Digital marketplace for insurance comparisons in MENA.' },
  { name: 'M Mamo', category: 'Fintech', stage: 'Series B', status: 'Active', desc: 'Business spend management platform for modern companies.' },
  { name: 'PURE HARVEST', category: 'AgriTech', stage: 'Growth Equity', status: 'Active', desc: 'Smart farming solutions enhancing productivity and sustainability.' },
  { name: 'tasheel', category: 'Fintech', stage: 'Series A', status: 'Active', desc: 'Embedded finance infrastructure for emerging markets.' },
  { name: 'Lean Technologies', category: 'Enterprise Software', stage: 'Growth Equity', status: 'Active', desc: 'AI-powered solutions optimizing business operations.' },
  { name: 'Healthtrip', category: 'HealthTech', stage: 'Growth Equity', status: 'Active', desc: 'Digital healthcare travel platform connecting patients globally.' },
  { name: 'iMile', category: 'Logistics', stage: 'Series B', status: 'Active', desc: 'Technology-driven logistics solutions for businesses.' },
  { name: 'BAYUT', category: 'PropTech', stage: 'Exited', status: 'Exited', desc: 'Digital real estate platform (acquired by dubizzle group).' },
];

const categories = ['ALL', 'FINTECH', 'HEALTHTECH', 'ENTERPRISE SOFTWARE', 'CONSUMER', 'EDTECH', 'LOGISTICS', 'INDUSTRIALS', 'CLIMATE TECH'];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const filteredCompanies = activeCategory === 'ALL' 
    ? companies 
    : companies.filter(c => c.category.toUpperCase() === activeCategory);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/portfolio-bg.jpg" 
            alt="Portfolio" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/20 to-brand-dark" />
        </div>
        <div className="container-custom relative z-10">
          <h4 className="text-brand-gold uppercase tracking-[0.3em] text-sm mb-4">Our Portfolio</h4>
          <h1 className="text-5xl md:text-6xl font-serif mb-6 max-w-4xl">Building Exceptional Companies. <br /><span className="text-brand-gold italic">Creating Enduring Value.</span></h1>
          <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
            We partner with visionary founders and management teams to build market-leading businesses that deliver sustainable growth and meaningful impact across the GCC, MENA and beyond.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-brand-dark border-y border-brand-border">
        <div className="container-custom flex flex-wrap justify-between gap-8">
           <div className="flex items-center gap-4">
            <span className="text-3xl font-serif text-brand-gold">60+</span>
            <span className="text-[10px] uppercase tracking-widest text-gray-400">Investments</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-3xl font-serif text-brand-gold">25+</span>
            <span className="text-[10px] uppercase tracking-widest text-gray-400">Successful Exits</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-3xl font-serif text-brand-gold">15+</span>
            <span className="text-[10px] uppercase tracking-widest text-gray-400">Countries</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-3xl font-serif text-brand-gold">20+</span>
            <span className="text-[10px] uppercase tracking-widest text-gray-400">Years of Experience</span>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-brand-dark sticky top-20 z-30 border-b border-brand-border/50 backdrop-blur-md">
        <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap gap-4 md:gap-8 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[10px] font-bold tracking-widest transition-colors ${activeCategory === cat ? 'text-brand-gold' : 'text-gray-500 hover:text-white'}`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-4 border border-brand-border px-4 py-2 text-xs uppercase tracking-widest text-gray-400">
            <span>Filter by Stage</span>
            <Filter size={14} />
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-brand-dark">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {filteredCompanies.map((company, i) => (
              <div key={i} className="bg-brand-dark-light border border-brand-border p-6 group hover:border-brand-gold transition-all duration-300 flex flex-col h-full">
                <div className="flex justify-between items-start mb-8">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${company.status === 'Active' ? 'bg-green-500' : 'bg-orange-500'}`} />
                    <span className="text-[10px] uppercase tracking-widest text-gray-500">{company.status}</span>
                  </div>
                  <ExternalLink size={14} className="text-gray-600 group-hover:text-brand-gold transition-colors" />
                </div>
                
                <h3 className="text-2xl font-bold mb-1 group-hover:text-brand-gold transition-colors">{company.name}</h3>
                <p className="text-xs text-brand-gold mb-4 uppercase tracking-wider">{company.category}</p>
                
                <div className="mt-auto">
                  <span className="inline-block px-3 py-1 border border-brand-gold/30 text-[10px] uppercase tracking-widest text-brand-gold mb-4">
                    {company.stage}
                  </span>
                  <p className="text-xs text-gray-400 leading-relaxed line-clamp-3">
                    {company.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Exits Banner */}
      <section className="py-12 bg-brand-dark-light border-y border-brand-border">
        <div className="container-custom flex items-center gap-12 overflow-hidden whitespace-nowrap opacity-50 grayscale">
          <span className="text-xs font-bold tracking-widest uppercase">Selected Successful Exits</span>
          <div className="flex gap-12 items-center">
            {['bayut', 'SARMAD', 'fetchr', 'zomato', 'SOUQ.com'].map((exit) => (
              <span key={exit} className="text-xl font-bold font-serif opacity-70">{exit}</span>
            ))}
          </div>
          <button className="ml-auto text-xs uppercase tracking-widest font-bold border border-white/20 px-6 py-2">View All</button>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-brand-dark">
        <div className="container-custom">
          <div className="p-12 border border-brand-border bg-brand-dark-light flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex gap-6 items-center">
              <div className="w-16 h-16 bg-brand-gold/10 flex items-center justify-center text-brand-gold rounded-full">
                <Users2 size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-serif mb-2">Let&apos;s Build the Future Together</h3>
                <p className="text-gray-400 text-sm">We are always looking to partner with exceptional entrepreneurs and management teams.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <button className="bg-brand-gold hover:bg-brand-gold-light text-brand-dark px-8 py-4 font-bold text-xs uppercase tracking-widest transition-all">
                SUBMIT YOUR BUSINESS PLAN
              </button>
              <button className="border border-white/30 hover:border-brand-gold hover:text-brand-gold px-8 py-4 font-bold text-xs uppercase tracking-widest transition-all">
                CONTACT OUR TEAM
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

