"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection, { SlideIn } from "@/components/AnimatedSection";
import { useState } from "react";
import { motion } from "framer-motion";

const offices = [
  {
    city: "Dubai",
    sub: "Headquarters",
    lines: ["Level 2, Building 7", "Dubai Media City", "Dubai", "United Arab Emirates"],
    image: "https://images.pexels.com/photos/2312105/pexels-photo-2312105.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600",
    mapUrl: "https://www.google.com/maps/place/Building+7+-+Dubai+Media+City/@25.0958,55.1537,17z",
  },
  {
    city: "Riyadh",
    sub: null,
    lines: ["Kingdom Centre, Level 46", "P.O. Box 9323, Riyadh 11413", "Kingdom of Saudi Arabia"],
    image: "https://images.pexels.com/photos/38096888/pexels-photo-38096888.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600",
    mapUrl: "https://www.google.com/maps/place/Kingdom+Centre/@24.7113,46.6744,17z",
  },
  {
    city: "Abu Dhabi",
    sub: null,
    lines: ["Al Maryah Tower, Level 11", "P.O. Box 127788, Abu Dhabi", "United Arab Emirates"],
    image: "https://images.pexels.com/photos/5045850/pexels-photo-5045850.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600",
    mapUrl: "https://www.google.com/maps/place/Al+Maryah+Island/@24.5028,54.3942,16z",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", company: "", inquiryType: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "",
          subject: `Contact Inquiry — ${formData.inquiryType || "General"} — ${formData.firstName} ${formData.lastName}`,
          from_name: "Injazat Capital Website",
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          company: formData.company || "Not provided",
          inquiry_type: formData.inquiryType || "General",
          message: formData.message,
        }),
      });
      const data = await res.json();

      if (data.success) {
        setSubmitted(true);
        setFormData({ firstName: "", lastName: "", email: "", company: "", inquiryType: "", message: "" });
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">
        {/* Hero */}
        <section className="relative min-h-[65vh] flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <img src="/images/hero-dubai.jpg" alt="" className="w-full h-full object-cover" role="presentation" />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-950/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-transparent" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-20 pt-40 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <SlideIn>
                <div className="flex items-center gap-2 text-[11px] text-white/30 mb-6 tracking-wider">
                  <span className="text-gold-500/70">HOME</span>
                  <span className="text-white/15">/</span>
                  <span>CONTACT US</span>
                </div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] mb-8"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Let&apos;s Build<br />
                  <span className="text-gold-500 italic">What&apos;s Next. Together.</span>
                </motion.h1>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: 60 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="h-px bg-gradient-to-r from-gold-500 to-transparent mb-8"
                />
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="text-white/40 text-base font-light leading-relaxed max-w-md"
                >
                  We are always open to new opportunities, partnerships, and conversations. Reach out to our team.
                </motion.p>
              </SlideIn>

              {/* Form */}
              <SlideIn direction="right" delay={0.3}>
                <div className="glass p-8 border border-white/5">
                  <h3 className="text-white/70 text-xs font-medium tracking-[0.2em] mb-8 uppercase text-center">Send Us a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <input type="text" placeholder="First Name" required value={formData.firstName} onChange={(e) => setFormData({...formData, firstName: e.target.value})} className="bg-navy-900/60 border border-white/8 text-white/70 px-4 py-3 text-sm focus:border-gold-500/30 focus:outline-none placeholder:text-white/20 w-full transition-colors duration-300" aria-label="First Name" />
                      <input type="text" placeholder="Last Name" required value={formData.lastName} onChange={(e) => setFormData({...formData, lastName: e.target.value})} className="bg-navy-900/60 border border-white/8 text-white/70 px-4 py-3 text-sm focus:border-gold-500/30 focus:outline-none placeholder:text-white/20 w-full transition-colors duration-300" aria-label="Last Name" />
                    </div>
                    <input type="email" placeholder="Email Address" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="bg-navy-900/60 border border-white/8 text-white/70 px-4 py-3 text-sm focus:border-gold-500/30 focus:outline-none placeholder:text-white/20 w-full transition-colors duration-300" aria-label="Email Address" />
                    <input type="text" placeholder="Company / Organization" value={formData.company} onChange={(e) => setFormData({...formData, company: e.target.value})} className="bg-navy-900/60 border border-white/8 text-white/70 px-4 py-3 text-sm focus:border-gold-500/30 focus:outline-none placeholder:text-white/20 w-full transition-colors duration-300" aria-label="Company" />
                    <select value={formData.inquiryType} onChange={(e) => setFormData({...formData, inquiryType: e.target.value})} className="bg-navy-900/60 border border-white/8 text-white/30 px-4 py-3 text-sm focus:border-gold-500/30 focus:outline-none w-full transition-colors duration-300" aria-label="Inquiry Type">
                      <option value="">Inquiry Type</option>
                      <option value="investment">Investment Opportunity</option>
                      <option value="partnership">Partnership</option>
                      <option value="media">Media Inquiry</option>
                      <option value="careers">Careers</option>
                      <option value="other">Other</option>
                    </select>
                    <textarea placeholder="Your Message" rows={4} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="bg-navy-900/60 border border-white/8 text-white/70 px-4 py-3 text-sm focus:border-gold-500/30 focus:outline-none placeholder:text-white/20 w-full resize-none transition-colors duration-300" aria-label="Message" />
                    {error && (
                      <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-xs p-3 text-center">{error}</div>
                    )}
                    <button
                      type="submit"
                      disabled={sending || submitted}
                      className="w-full bg-gold-500 text-navy-950 px-6 py-3.5 text-[11px] tracking-[0.15em] font-semibold hover:bg-gold-400 transition-all duration-500 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {submitted ? "MESSAGE SENT ✓" : sending ? (
                        <><span className="w-3 h-3 border border-navy-950/30 border-t-navy-950 rounded-full animate-spin" /> SENDING...</>
                      ) : (
                        <>SEND MESSAGE <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg></>
                      )}
                    </button>
                    <p className="text-white/15 text-[10px] text-center tracking-wide">
                      {submitted ? "Thank you. We will respond within 1 business day." : "We typically respond within 1 business day."}
                    </p>
                  </form>
                </div>
              </SlideIn>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-14 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                { label: "Phone", value: "+971 50 826 0503" },
                { label: "Email", value: "services@injazatcapitals.com" },
                { label: "Hours", value: "Sun – Thu: 9:00 AM – 6:00 PM GST", sub: "Fri – Sat: Closed" },
              ].map((item, i) => (
                <AnimatedSection key={item.label} delay={i * 0.1}>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 border border-gold-500/15 flex items-center justify-center shrink-0">
                      <div className="w-1.5 h-1.5 bg-gold-500/40" />
                    </div>
                    <div>
                      <h4 className="text-white/50 text-[10px] tracking-[0.2em] font-medium uppercase mb-1">{item.label}</h4>
                      <p className="text-white/60 text-sm font-light">{item.value}</p>
                      {item.sub && <p className="text-white/25 text-xs font-light">{item.sub}</p>}
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Offices */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <AnimatedSection>
              <span className="text-gold-500/70 text-[11px] tracking-[0.3em] uppercase font-medium mb-10 block">Our Offices</span>
            </AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/5">
              {offices.map((office, i) => (
                <AnimatedSection key={office.city} delay={i * 0.1}>
                  <div className="bg-navy-950 h-full group hover:bg-navy-900/30 transition-all duration-500">
                    {/* Property Image */}
                    <div className="relative w-full h-48 overflow-hidden">
                      <img
                        src={office.image}
                        alt={`${office.city} office — ${office.lines[0]}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-transparent" />
                      {office.sub && (
                        <span className="absolute top-3 left-3 bg-gold-500/90 text-navy-950 text-[8px] px-2 py-0.5 font-semibold tracking-[0.15em] uppercase">
                          {office.sub}
                        </span>
                      )}
                    </div>

                    {/* Office Details */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <svg className="w-3.5 h-3.5 text-gold-500/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5" />
                        </svg>
                        <h4 className="text-gold-500/80 text-[11px] tracking-[0.2em] font-medium uppercase">{office.city}</h4>
                      </div>
                      <div className="space-y-0.5 mb-5">
                        {office.lines.map((line, j) => (
                          <p key={j} className="text-white/30 text-xs font-light">{line}</p>
                        ))}
                      </div>
                      <a
                        href={office.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-gold-500/50 text-[10px] tracking-[0.15em] font-medium group-hover:text-gold-500/90 transition-colors duration-300"
                        aria-label={`View ${office.city} office on Google Maps`}
                      >
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        VIEW ON MAP →
                      </a>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
