'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, Download, Calendar, ExternalLink, Mail, Phone, MapPin, TrendingUp, TrendingDown, Clock, FileText, Globe, Shield, Newspaper } from 'lucide-react';
import { InvestmentEvent } from '@/lib/events';

const financialHighlights = [
  { label: 'Total Assets Under Management', value: '$1.02B' },
  { label: 'Fee-Generating AUM', value: '$894M' },
  { label: 'Realized Exits (Since Inception)', value: '$612M' },
  { label: 'Net IRR (Since Inception)', value: '21.4%' },
  { label: 'Gross MOIC (Since Inception)', value: '2.3x' },
];

const quickLinks = [
  { title: 'Investor Presentation', icon: <FileText size={18} /> },
  { title: 'Annual Reports', icon: <FileText size={18} /> },
  { title: 'Financial Statements', icon: <TrendingUp size={18} /> },
  { title: 'Sustainability Reports', icon: <Globe size={18} /> },
  { title: 'Corporate Governance', icon: <Shield size={18} /> },
  { title: 'News & Announcements', icon: <Newspaper size={18} /> },
];

export default function InvestorRelationsPage() {
  const [events, setEvents] = useState<InvestmentEvent[]>([]);
  const [loadingEvents, setLoadingEvents] = useState(true);

  useEffect(() => {
    async function loadEvents() {
      try {
        const res = await fetch('/api/events');
        const data = await res.json();
        if (Array.isArray(data)) setEvents(data);
      } catch (err) {
        console.error('Error loading events:', err);
      } finally {
        setLoadingEvents(false);
      }
    }
    loadEvents();
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/dubai-skyline.jpg" 
            alt="Investor Relations" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/10 to-brand-dark" />
        </div>
        <div className="container-custom relative z-10">
          <h4 className="text-brand-gold uppercase tracking-[0.3em] text-sm mb-4">Investor Relations</h4>
          <h1 className="text-5xl md:text-6xl font-serif mb-6 max-w-4xl">Building Trust. <br /><span className="text-brand-gold italic">Delivering Value.</span></h1>
          <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
            At Injazat Capital, we are committed to transparency, accountability, and delivering sustainable long-term returns for our investors and partners.
          </p>
        </div>
      </section>

      {/* Stats Summary */}
      <section className="py-12 bg-brand-dark border-y border-brand-border">
        <div className="container-custom flex flex-wrap justify-between gap-8">
           <div className="flex items-center gap-4">
             <div className="p-3 bg-brand-gold/10 text-brand-gold rounded-full"><TrendingUp size={24} /></div>
             <div>
               <div className="text-2xl font-serif text-brand-gold">$1B+</div>
               <div className="text-[10px] uppercase tracking-widest text-gray-400">AUM</div>
             </div>
          </div>
          <div className="flex items-center gap-4">
             <div className="p-3 bg-brand-gold/10 text-brand-gold rounded-full"><Globe size={24} /></div>
             <div>
               <div className="text-2xl font-serif text-brand-gold">60+</div>
               <div className="text-[10px] uppercase tracking-widest text-gray-400">Investments</div>
             </div>
          </div>
          <div className="flex items-center gap-4">
             <div className="p-3 bg-brand-gold/10 text-brand-gold rounded-full"><ArrowRight size={24} /></div>
             <div>
               <div className="text-2xl font-serif text-brand-gold">25+</div>
               <div className="text-[10px] uppercase tracking-widest text-gray-400">Exits</div>
             </div>
          </div>
          <div className="flex items-center gap-4">
             <div className="p-3 bg-brand-gold/10 text-brand-gold rounded-full"><Clock size={24} /></div>
             <div>
               <div className="text-2xl font-serif text-brand-gold">20+</div>
               <div className="text-[10px] uppercase tracking-widest text-gray-400">Years</div>
             </div>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-24 bg-brand-dark">
        <div className="container-custom grid lg:grid-cols-4 gap-12">
          {/* About Injazat */}
          <div className="space-y-8">
            <h3 className="text-[10px] font-bold tracking-widest uppercase text-gray-500">About Injazat Capital</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Injazat Capital is a leading alternative investment firm in the GCC, specializing in venture capital, private equity, and corporate finance. We partner with exceptional entrepreneurs and management teams to build market-leading companies and drive sustainable growth across the region and beyond.
            </p>
            <button className="flex items-center gap-2 text-brand-gold font-bold uppercase tracking-widest text-[10px] border border-brand-gold/30 px-6 py-3 hover:bg-brand-gold hover:text-brand-dark transition-all">
              LEARN MORE ABOUT US <ArrowRight size={14} />
            </button>
          </div>

          {/* Financial Highlights */}
          <div className="space-y-8">
            <div className="flex justify-between items-center">
              <h3 className="text-[10px] font-bold tracking-widest uppercase text-gray-500">Financial Highlights</h3>
              <div className="flex gap-4">
                <span className="text-[10px] text-brand-gold font-bold">Q3 2024</span>
                <span className="text-[10px] text-gray-600 uppercase tracking-widest underline decoration-brand-gold/30 underline-offset-4 cursor-pointer">Archive</span>
              </div>
            </div>
            <div className="space-y-6">
              {financialHighlights.map((item, i) => (
                <div key={i} className="flex justify-between items-center border-b border-brand-border pb-4 last:border-0">
                  <span className="text-xs text-gray-400">{item.label}</span>
                  <span className="text-sm font-bold text-brand-gold">{item.value}</span>
                </div>
              ))}
            </div>
            <p className="text-[10px] text-gray-600 italic">Note: Figures represent consolidated AUM and exits as of Sep 30, 2024.</p>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h3 className="text-[10px] font-bold tracking-widest uppercase text-gray-500">Quick Links</h3>
            <div className="space-y-4">
              {quickLinks.map((link, i) => (
                <button key={i} className="w-full flex justify-between items-center p-4 bg-brand-dark-light border border-brand-border hover:border-brand-gold transition-colors group">
                  <div className="flex items-center gap-3">
                    <span className="text-brand-gold">{link.icon}</span>
                    <span className="text-xs font-bold text-gray-300 group-hover:text-white transition-colors">{link.title}</span>
                  </div>
                  <ArrowRight size={14} className="text-gray-600 group-hover:text-brand-gold transition-colors" />
                </button>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-12">
            {/* Upcoming Events */}
            <div className="p-8 border border-brand-border bg-brand-dark-light">
              <h4 className="text-[10px] font-bold tracking-widest uppercase text-gray-500 mb-6">Upcoming Events</h4>
              <div className="space-y-8">
                {loadingEvents ? (
                  <div className="animate-pulse space-y-6">
                    {[1, 2, 3].map(i => <div key={i} className="h-16 bg-brand-navy border border-brand-gold/5" />)}
                  </div>
                ) : events.length > 0 ? (
                  events.map((event, i) => (
                    <div key={i} className={`border-l-2 ${i === 0 ? 'border-brand-gold' : 'border-brand-gold/30'} pl-4 space-y-2 group cursor-default`}>
                      <div className="flex items-center gap-2 text-brand-gold">
                        <Calendar size={12} />
                        <span className="text-[9px] font-bold tracking-widest">{event.date}</span>
                      </div>
                      <h5 className="text-[11px] font-bold leading-tight text-brand-ivory group-hover:text-brand-gold transition-colors">{event.title}</h5>
                      <p className="text-[8px] text-gray-500 uppercase tracking-[0.2em]">{event.location} | {event.type}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-[10px] text-gray-600 italic">No scheduled events at this time.</p>
                )}
              </div>
              <button className="w-full mt-10 py-3 text-[10px] font-bold uppercase tracking-widest border border-brand-gold/30 text-gray-400 hover:text-brand-gold hover:border-brand-gold transition-all">
                VIEW FULL CALENDAR
              </button>
            </div>

            {/* Share Information */}
            <div className="p-8 border border-brand-border bg-brand-dark-light">
              <h4 className="text-[10px] font-bold tracking-widest uppercase text-gray-500 mb-6">Share Information</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <span className="text-3xl font-serif">1.62</span>
                  <div className="flex items-center gap-1 text-green-500 text-xs font-bold mb-1">
                    <TrendingUp size={12} />
                    <span>+0.04 (2.53%)</span>
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] text-gray-500">As of May 22, 2024 04:00 PM GST</p>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Ticker: INJZ.DU (DIFX)</p>
                </div>
              </div>
              <button className="w-full mt-6 flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand-gold">
                VIEW SHARE DETAILS <ExternalLink size={12} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* IR Contact */}
      <section className="py-12 bg-brand-dark border-t border-brand-border">
        <div className="container-custom">
          <div className="p-12 border border-brand-border bg-brand-dark-light flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex gap-6 items-center">
              <div className="w-16 h-16 border border-brand-gold/30 flex items-center justify-center text-brand-gold">
                <Mail size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold uppercase tracking-widest mb-2">STAY INFORMED</h3>
                <p className="text-gray-400 text-sm">Subscribe to our IR mailing list to receive the latest news, reports, and updates.</p>
              </div>
            </div>
            <div className="flex w-full lg:w-auto gap-4">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-grow lg:w-80 bg-brand-dark border border-brand-border px-6 py-4 text-sm focus:outline-none focus:border-brand-gold"
              />
              <button className="bg-brand-gold hover:bg-brand-gold-light text-brand-dark px-10 py-4 font-bold uppercase tracking-widest text-xs transition-all">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Enquiries Footer */}
      <section className="py-20 bg-brand-dark border-t border-brand-border">
        <div className="container-custom flex flex-col md:flex-row justify-between gap-12">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-4">Investor Enquiries</h4>
            <p className="text-sm text-gray-500 max-w-sm">
              For investor-related queries, please contact our Investor Relations team.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-12">
            <div className="flex gap-4">
              <div className="p-3 bg-brand-dark-light border border-brand-border text-brand-gold"><Phone size={18} /></div>
              <div>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest">Phone</p>
                <p className="text-sm font-bold">+971 50 826 0503</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="p-3 bg-brand-dark-light border border-brand-border text-brand-gold"><Mail size={18} /></div>
              <div>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest">Email</p>
                <p className="text-sm font-bold">services@injazatcapitals.com</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="p-3 bg-brand-dark-light border border-brand-border text-brand-gold"><MapPin size={18} /></div>
              <div>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest">Address</p>
                <p className="text-sm font-bold">Building 7, Dubai Media City</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

