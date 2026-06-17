import React from 'react';
import { motion } from 'framer-motion';
import { FiClock, FiActivity, FiTrendingUp, FiFastForward, FiGrid, FiZap } from 'react-icons/fi';
import GlassCard from '../components/GlassCard';

export default function Benefits() {
  return (
    <section className="relative py-24 border-t border-white/5 bg-slate-950/30 overflow-hidden">
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-brand-purple/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-base font-semibold text-brand-cyan uppercase tracking-wider mb-3">
            Growth Metrics
          </h2>
          <p className="font-display text-3xl md:text-5xl font-bold text-white tracking-tight leading-none mb-4">
            Accelerate Your Organic Reach.
          </p>
          <p className="text-slate-400">
            Automating your social schedule leads to tangible business outcomes. Here is how Mediamation upgrades your workflow.
          </p>
        </div>

        {/* Asymmetric Benefits Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Large Left Focus Card */}
          <GlassCard className="lg:col-span-1 border-brand-indigo/10 flex flex-col justify-between" delay={0}>
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-xl bg-brand-indigo/10 border border-brand-indigo/20 flex items-center justify-center text-brand-indigo">
                <FiGrid className="text-2xl" />
              </div>
              <div>
                <h3 className="font-display font-bold text-2xl text-white mb-3">
                  Create, Schedule, and Publish Without the Chaos
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Forget juggling multiple apps and social media logins. Mediamation streamlines your content creation and publishing workflow with AI automation and centralized account management.
                </p>
              </div>
            </div>
            
            {/* Metric Display */}
            <div className="mt-8 pt-6 border-t border-white/5 space-y-2">
              <div className="text-[10px] text-slate-400 uppercase font-semibold">Workspace capability</div>
              <div className="text-3xl font-extrabold text-white">100% Unified</div>
              <div className="text-[11px] text-slate-400">Connect calendars, media pools & configurations together.</div>
            </div>
          </GlassCard>

          {/* Right 2x2 Grid of standard benefits */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Save Time */}
            <GlassCard delay={0.1}>
              <div className="w-10 h-10 rounded-lg bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center text-brand-purple mb-4">
                <FiClock className="text-lg" />
              </div>
              <h3 className="font-display font-semibold text-lg text-white mb-2">Save Valuable Time</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Create content once and distribute it globally. Cut manual workflow times down by up to 85% starting week one.
              </p>
              <div className="mt-4 text-xs font-mono font-bold text-brand-purple">
                ⏱️ (~15 hours saved / week)
              </div>
            </GlassCard>

            {/* Increase Consistency */}
            <GlassCard delay={0.2}>
              <div className="w-10 h-10 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan mb-4">
                <FiActivity className="text-lg" />
              </div>
              <h3 className="font-display font-semibold text-lg text-white mb-2">Increase Consistency</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Keep feeds active without manual oversight. Maintain daily posting schedules even during vacations or office downtime.
              </p>
              <div className="mt-4 text-xs font-mono font-bold text-brand-cyan">
                📈 (4x higher posting consistency)
              </div>
            </GlassCard>

            {/* Improve Engagement */}
            <GlassCard delay={0.3}>
              <div className="w-10 h-10 rounded-lg bg-brand-fuchsia/10 border border-brand-fuchsia/20 flex items-center justify-center text-brand-fuchsia mb-4">
                <FiTrendingUp className="text-lg" />
              </div>
              <h3 className="font-display font-semibold text-lg text-white mb-2">Save Hours with Automated Publishing</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Stop manually posting content every day. Schedule once, and Mediamation automatically publishes your posts across multiple social media platforms while you focus on growing your business.
              </p>
              <div className="mt-4 text-xs font-mono font-bold text-brand-fuchsia">
                🔥 Save up to 10+ hours every week
              </div>
            </GlassCard>

            {/* Scale Content Faster */}
            <GlassCard delay={0.4}>
              <div className="w-10 h-10 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 mb-4">
                <FiFastForward className="text-lg" />
              </div>
              <h3 className="font-display font-semibold text-lg text-white mb-2">Scale Content Faster</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Leverage generative models to craft dozens of visual descriptions and hashtags in seconds. Test variations quickly.
              </p>
              <div className="mt-4 text-xs font-mono font-bold text-green-400">
                🚀 (50+ content variations/click)
              </div>
            </GlassCard>

          </div>

        </div>

      </div>
    </section>
  );
}
