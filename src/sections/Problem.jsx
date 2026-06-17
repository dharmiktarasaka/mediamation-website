import React from 'react';
import { motion } from 'framer-motion';
import { FiUsers, FiEdit3, FiCalendar, FiRefreshCw, FiAlertCircle } from 'react-icons/fi';
import GlassCard from '../components/GlassCard';

export default function Problem() {
  const painPoints = [
    {
      icon: <FiUsers className="text-red-400 text-xl" />,
      title: "Disconnected Social Accounts",
      description: "Manually logging into Facebook, Instagram, LinkedIn, Pinterest, and Tumblr. Keeping track of credentials and risking posting to the wrong feed."
    },
    {
      icon: <FiEdit3 className="text-red-400 text-xl" />,
      title: "Caption Writing Bottlenecks",
      description: "Staring at a blank screen trying to brainstorm fresh, engaging copy and customize descriptions or hashtags for different networks."
    },
    {
      icon: <FiCalendar className="text-red-400 text-xl" />,
      title: "Manual Timing & Publishing",
      description: "Having to manually publish posts right when your audience is online, leading to missed queues when you are busy, away, or asleep."
    },
    {
      icon: <FiRefreshCw className="text-red-400 text-xl" />,
      title: "Repetitive Media Workflows",
      description: "Uploading the same image or video file multiple times across different tabs, and manually arranging carousel formats."
    }
  ];

  return (
    <section className="relative py-24 bg-slate-950/40 border-y border-white/5 overflow-hidden">
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[400px] h-[400px] bg-red-950/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-base font-semibold text-red-400 uppercase tracking-wider mb-3 flex items-center justify-center space-x-2">
            <FiAlertCircle className="animate-bounce" />
            <span>The Social Media Struggle</span>
          </h2>
          <p className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
            Why managing social channels manually is costing you growth.
          </p>
          <p className="text-slate-400 mt-4">
            Creators, agencies, and brands waste up to 20 hours a week on repetitive workflow loops. Here's what you're dealing with today:
          </p>
        </div>

        {/* Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((point, index) => (
            <GlassCard 
              key={index}
              delay={index * 0.15}
              hoverGlow={true}
              className="border-red-500/10 hover:border-red-500/20"
            >
              <div className="w-12 h-12 rounded-xl bg-red-950/40 border border-red-500/20 flex items-center justify-center mb-5">
                {point.icon}
              </div>
              <h3 className="font-display font-semibold text-lg text-white mb-2">
                {point.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {point.description}
              </p>
            </GlassCard>
          ))}
        </div>

      </div>
    </section>
  );
}
