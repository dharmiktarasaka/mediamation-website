import React from 'react';
import { motion } from 'framer-motion';

export default function GlassCard({ children, className = '', hoverGlow = true, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className={`glass-panel glass-panel-hover rounded-2xl p-6 relative overflow-hidden group ${className}`}
    >
      {/* Decorative Glow Orb */}
      {hoverGlow && (
        <div className="absolute -inset-px bg-gradient-to-r from-brand-indigo via-brand-cyan to-brand-fuchsia opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl pointer-events-none blur-xl" />
      )}
      
      {/* Reusable Inner Wrapper */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}
