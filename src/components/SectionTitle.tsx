"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}

export default function SectionTitle({ title, subtitle, align = "center" }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-16 ${align === "center" ? "text-center" : ""}`}
    >
      <h2 className="text-[11px] font-medium tracking-[0.3em] text-gold-500/80 uppercase mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-white/40 text-sm font-light max-w-lg mx-auto">{subtitle}</p>
      )}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 40 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className={`h-px bg-gold-500/40 mt-4 ${align === "center" ? "mx-auto" : ""}`}
      />
    </motion.div>
  );
}
