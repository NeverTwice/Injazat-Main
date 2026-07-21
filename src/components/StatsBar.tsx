"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "20+", label: "Years of Experience" },
  { value: "$1B+", label: "Assets Under Management" },
  { value: "60+", label: "Investments Completed" },
  { value: "25+", label: "Successful Exits" },
  { value: "15+", label: "Countries Covered" },
];

export default function StatsBar() {
  return (
    <section className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-navy-800/80 via-navy-700/60 to-navy-800/80" />
      <div className="absolute inset-0 border-y border-gold-500/10" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-gold-500 text-3xl md:text-4xl font-light mb-2" style={{ fontFamily: 'var(--font-heading)' }}>{stat.value}</div>
              <div className="text-white/35 text-xs tracking-wider font-light">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
