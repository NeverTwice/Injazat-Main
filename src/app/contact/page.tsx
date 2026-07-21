'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Globe, ArrowRight } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-brand-obsidian pt-40 pb-20 min-h-screen">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-32"
          >
            <span className="section-label">Contact Protocol</span>
            <h1 className="text-5xl font-serif text-brand-ivory mb-6">
              Establish <span className="text-brand-gold italic">Presence.</span>
            </h1>
            <p className="text-gray-400 font-light max-w-xl leading-relaxed">
              We maintain a discreet presence across key global financial centers. Please use the appropriate channel for institutional or strategic inquiries.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-20">
             <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.5 }}
               className="space-y-16"
             >
               <div className="space-y-6">
                 <h4 className="text-[10px] uppercase tracking-[0.4em] text-brand-gold">Global Headquarters</h4>
                 <div className="flex gap-6 items-start">
                   <MapPin size={18} className="text-brand-gold/40 flex-shrink-0" />
                   <div>
                     <p className="text-brand-ivory font-serif text-lg mb-2">Dubai Media City</p>
                     <p className="text-xs text-gray-500 leading-relaxed uppercase tracking-wider">
                       Level 2, Building 7<br />
                       Dubai Media City<br />
                       Dubai, UAE
                     </p>
                   </div>
                 </div>
               </div>

               <div className="space-y-6">
                 <h4 className="text-[10px] uppercase tracking-[0.4em] text-brand-gold">Institutional Registry</h4>
                 <div className="flex gap-6 items-start">
                   <Mail size={18} className="text-brand-gold/40 flex-shrink-0" />
                   <div>
                     <p className="text-brand-ivory font-serif text-lg mb-2">Inquiry Channel</p>
                     <p className="text-sm text-brand-gold font-light">services@injazatcapitals.com</p>
                     <p className="text-[10px] text-gray-600 mt-2 uppercase tracking-widest">+971 50 826 0503</p>
                   </div>
                 </div>
               </div>
             </motion.div>

             <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.7 }}
               className="p-12 border border-brand-gold/10 bg-brand-navy/10 flex flex-col justify-center text-center space-y-8"
             >
               <div className="flex justify-center text-brand-gold/20">
                 <Globe size={80} strokeWidth={0.5} />
               </div>
               <h3 className="text-xl font-serif text-brand-ivory">Global Presence</h3>
                <div className="flex justify-center gap-8">
                 <span className="text-[10px] uppercase tracking-[0.4em] text-gray-500">Riyadh</span>
                 <span className="text-[10px] uppercase tracking-[0.4em] text-gray-500">Abu Dhabi</span>
               </div>
               <p className="text-[10px] text-gray-600 italic">Office visits are strictly by appointment only.</p>
             </motion.div>
          </div>

          {/* Office Gallery */}
          <div className="mt-40">
            <h2 className="text-[10px] font-bold tracking-widest uppercase text-brand-gold mb-12">Institutional Locations</h2>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  city: "Dubai (Headquarters)",
                  address: "Level 2, Building 7, Dubai Media City",
                  image: "/images/actual-mediacity-b7.jpg",
                  mapLink: "https://www.google.com/maps/search/?api=1&query=Building+7+Dubai+Media+City"
                },
                {
                  city: "Riyadh",
                  address: "Kingdom Centre, Level 46",
                  image: "/images/office-riyadh.jpg",
                  mapLink: "https://www.google.com/maps/search/?api=1&query=Kingdom+Centre+Riyadh"
                },
                {
                  city: "Abu Dhabi",
                  address: "Al Maryah Island, Global Market Square",
                  image: "/images/office-abudhabi.jpg",
                  mapLink: "https://www.google.com/maps/search/?api=1&query=Al+Maryah+Island+Abu+Dhabi"
                }
              ].map((office, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group"
                >
                  <div className="aspect-[16/10] bg-brand-navy border border-brand-gold/10 mb-6 overflow-hidden relative">
                    <img 
                      src={office.image} 
                      alt={office.city} 
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-obsidian to-transparent opacity-60" />
                  </div>
                  <h4 className="text-brand-ivory font-serif text-lg mb-2">{office.city}</h4>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-6 leading-relaxed">
                    {office.address}
                  </p>
                  <a 
                    href={office.mapLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[8px] font-bold text-brand-gold uppercase tracking-[0.4em] flex items-center gap-2 hover:gap-4 transition-all"
                  >
                    View on Map <ArrowRight size={10} />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

