import React from 'react';
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi';

export default function FinalCta() {
  return (
    <section className="relative py-24 overflow-hidden border-t border-white/5">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-[#080d16] to-[#030712] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-purple/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Glowing Main Container Banner */}
        <div className="glass-panel rounded-3xl p-10 md:p-16 text-center glow-border relative overflow-hidden bg-slate-950/40">
          
          {/* Internal visual highlights */}
          <div className="absolute top-0 bottom-0 left-0 right-0 opacity-10 pointer-events-none grid-bg" />
          
          {/* Subheading tag */}
          <span className="px-3.5 py-1.5 rounded-full bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/20 text-[10px] uppercase font-bold tracking-wider inline-block mb-6 select-none">
            Boost Organic Output
          </span>

          {/* Headline */}
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6 max-w-2xl mx-auto">
            Start Automating Your Social Media Today.
          </h2>

          {/* Subtitle description */}
          <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto mb-10 leading-relaxed">
            Join thousands of creators, agencies, and brands scaling their cross-platform presence. Generate, customize, schedule, and auto-publish on full autopilot.
          </p>

          {/* Conversion CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
            <a
              href="https://echoreal.in/"
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-brand-indigo to-brand-purple hover:from-brand-indigo/95 hover:to-brand-purple/95 text-white font-bold text-sm rounded-xl shadow-lg shadow-brand-indigo/25 hover:shadow-brand-indigo/35 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Get Started Free</span>
              <FiArrowRight />
            </a>
          </div>

          {/* Bottom Trust/Benefits badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
            <span className="flex items-center space-x-2">
              <FiCheckCircle className="text-brand-cyan text-sm" />
              <span>100% Free Forever</span>
            </span>
            <span className="flex items-center space-x-2">
              <FiCheckCircle className="text-brand-cyan text-sm" />
              <span>Secure official social APIs</span>
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
