import React from 'react';
import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';
import GlassCard from '../components/GlassCard';

export default function Testimonials() {
  const reviews = [
    {
      name: "Sarah Jenkins",
      role: "Social Media Manager",
      company: "Aura Creative Agency",
      initials: "SJ",
      avatarBg: "bg-gradient-to-tr from-pink-500 to-rose-500",
      content: "Mediamation cut our client onboarding and publishing times by 70%. Being able to generate platform-specific AI captions and schedule them in one calendar is a massive productivity booster.",
      rating: 5,
      delay: 0
    },
    {
      name: "David Chen",
      role: "Ecommerce Director",
      company: "Velo Apparel",
      initials: "DC",
      avatarBg: "bg-gradient-to-tr from-blue-500 to-indigo-500",
      content: "The custom caption feature is a game-changer. We can write a casual, short visual post for Instagram, and a highly professional campaign summary for LinkedIn in a single composer click.",
      rating: 5,
      delay: 0.15
    },
    {
      name: "Eléna Rostova",
      role: "Content Creator",
      company: "Self-Employed",
      initials: "ER",
      avatarBg: "bg-gradient-to-tr from-brand-purple to-purple-600",
      content: "As a solo influencer, keeping up with daily posts was exhausting. Mediamation lets me plan and schedule my entire month of posts on a single Sunday afternoon. Highly recommended!",
      rating: 5,
      delay: 0.3
    }
  ];

  return (
    <section className="relative py-24 bg-slate-950/40 border-t border-white/5 overflow-hidden">
      <div className="absolute top-1/2 left-10 w-[300px] h-[300px] bg-brand-indigo/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-base font-semibold text-brand-cyan uppercase tracking-wider mb-3">
            Social Proof
          </h2>
          <p className="font-display text-3xl md:text-5xl font-bold text-white tracking-tight leading-none mb-4">
            Loved by builders and creators.
          </p>
          <p className="text-slate-400">
            Hear from social media managers, ecommerce brands, and content creators who scaled their organic reach using Mediamation.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <GlassCard key={idx} delay={rev.delay} hoverGlow={true} className="border-white/5 flex flex-col justify-between">
              
              {/* Rating stars */}
              <div className="flex items-center space-x-1 text-yellow-500 mb-6">
                {Array.from({ length: rev.rating }).map((_, i) => (
                  <FiStar key={i} className="fill-yellow-500 text-sm" />
                ))}
              </div>

              {/* Review Text */}
              <blockquote className="text-slate-300 text-sm leading-relaxed mb-6 italic">
                "{rev.content}"
              </blockquote>

              {/* User details footer */}
              <div className="flex items-center space-x-3.5 border-t border-white/5 pt-5 mt-auto">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm text-white ${rev.avatarBg}`}>
                  {rev.initials}
                </div>
                <div>
                  <div className="text-sm font-bold text-white leading-none">{rev.name}</div>
                  <div className="text-[11px] text-slate-450 text-slate-400 mt-1">{rev.role} • <span className="text-brand-cyan">{rev.company}</span></div>
                </div>
              </div>

            </GlassCard>
          ))}
        </div>

      </div>
    </section>
  );
}
