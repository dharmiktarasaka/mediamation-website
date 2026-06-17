import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaFacebook, FaLinkedin, FaPinterest, FaTumblr } from 'react-icons/fa';
import GlassCard from '../components/GlassCard';

export default function PlatformSupport() {
  const platforms = [
    {
      name: "Instagram",
      icon: <FaInstagram className="text-3xl" />,
      tagline: "Direct Publishing & Stories",
      bestPractice: "Best for high-quality images, product reveals, and lifestyle video hooks.",
      hoverColor: "group-hover:text-pink-500",
      hoverBg: "group-hover:bg-pink-500/10 group-hover:border-pink-500/30",
      accentGlow: "shadow-pink-500/10",
      delay: 0
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="text-3xl" />,
      tagline: "Professional Autopilot",
      bestPractice: "Ideal for B2B tech thoughts, company updates, and agency case studies.",
      hoverColor: "group-hover:text-blue-500",
      hoverBg: "group-hover:bg-blue-500/10 group-hover:border-blue-500/30",
      accentGlow: "shadow-blue-500/10",
      delay: 0.1
    },
    {
      name: "Facebook",
      icon: <FaFacebook className="text-3xl" />,
      tagline: "Community Outreach",
      bestPractice: "Perfect for localized community groups, business listings, and event posts.",
      hoverColor: "group-hover:text-blue-600",
      hoverBg: "group-hover:bg-blue-600/10 group-hover:border-blue-600/30",
      accentGlow: "shadow-blue-600/10",
      delay: 0.2
    },
    {
      name: "Pinterest",
      icon: <FaPinterest className="text-3xl" />,
      tagline: "Visual Discovery Pins",
      bestPractice: "Perfect for infographic designs, recipe links, ecommerce, and design grids.",
      hoverColor: "group-hover:text-red-500",
      hoverBg: "group-hover:bg-red-500/10 group-hover:border-red-500/30",
      accentGlow: "shadow-red-500/10",
      delay: 0.3
    },
    {
      name: "Tumblr",
      icon: <FaTumblr className="text-3xl" />,
      tagline: "Microblog Auto-queue",
      bestPractice: "Great for visual moodboards, text blogs, and long-tail tag communities.",
      hoverColor: "group-hover:text-indigo-400",
      hoverBg: "group-hover:bg-indigo-400/10 group-hover:border-indigo-400/30",
      accentGlow: "shadow-indigo-400/10",
      delay: 0.4
    }
  ];

  return (
    <section id="platforms" className="relative py-24 border-t border-white/5 radial-gradient-purple">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-base font-semibold text-brand-purple uppercase tracking-wider mb-3">
            Seamless API Integrations
          </h2>
          <p className="font-display text-3xl md:text-5xl font-bold text-white tracking-tight leading-none mb-4">
            Supported Channels.
          </p>
          <p className="text-slate-400">
            Publish directly via official platform integrations. No third-party hacks, no delayed push warnings, just reliable automation.
          </p>
        </div>

        {/* Platforms Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {platforms.map((plat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: plat.delay }}
              className="group cursor-pointer"
            >
              <div className={`glass-panel rounded-2xl p-6 h-full flex flex-col items-center text-center transition-all duration-300 ${plat.hoverBg} ${plat.accentGlow} hover:-translate-y-1.5`}>
                
                {/* Channel Icon */}
                <div className={`w-16 h-16 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-center text-slate-400 transition-colors duration-300 ${plat.hoverColor} mb-5`}>
                  {plat.icon}
                </div>

                {/* Channel Name */}
                <h3 className="font-display font-bold text-lg text-white mb-1 group-hover:text-white transition-colors">
                  {plat.name}
                </h3>
                
                {/* Tagline */}
                <span className="text-[10px] text-brand-cyan font-mono uppercase font-semibold mb-3">
                  {plat.tagline}
                </span>

                {/* Recommendation detail */}
                <p className="text-xs text-slate-405 text-slate-400 leading-relaxed mt-auto">
                  {plat.bestPractice}
                </p>
                
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
