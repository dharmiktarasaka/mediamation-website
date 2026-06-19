import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCpu, FiLayers, FiSliders, FiCalendar, FiCheckSquare, FiSettings, FiArrowRight } from 'react-icons/fi';
import { FaInstagram, FaFacebook, FaLinkedin, FaPinterest, FaTumblr } from 'react-icons/fa';
import GlassCard from '../components/GlassCard';

export default function Features() {
  const [activeTab, setActiveTab] = useState('insta');

  const featureMockups = {
    // Custom Captions feature mockup state
    insta: "✨ Brand launch complete! Check out our new workspace design. Full link in bio! #SaaS #Design #Creative",
    linkedin: "💼 We are thrilled to announce the official release of our Mediamation workspaces. Read our technical breakdown on our blog: mediamation.ai/blog #AI #ProductLaunch #Startup",
    tumblr: "🎨 A new era of publishing begins today. Aesthetic, fast, automated. Check this space. #mediamation #dashboard #vibes"
  };

  return (
    <section id="features" className="relative py-24 radial-gradient-fuchsia">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-display text-base font-semibold text-brand-purple uppercase tracking-wider mb-3">
            Core Platform Architecture
          </h2>
          <p className="font-display text-3xl md:text-5xl font-bold text-white tracking-tight leading-none mb-4">
            Packed with Pro features.
          </p>
          <p className="text-slate-400">
            Everything you need to create, schedule, and automate your social media workflow from one powerful dashboard. Generate AI-powered captions, manage multiple accounts, and publish content automatically across every platform.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Card 1: AI Caption Generator */}
          <GlassCard delay={0}>
            <div className="flex items-center space-x-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center text-brand-purple">
                <FiCpu className="text-lg" />
              </div>
              <h3 className="font-display font-semibold text-lg text-white">AI Caption Generator</h3>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Upload image. Our AI analyzes the visual elements and drafts matching captions optimized for high click-through rates.
            </p>
            {/* Visual Micro Mockup */}
            <div className="bg-slate-950/60 p-4 rounded-xl border border-white/5 space-y-3">
              <div className="flex items-center justify-between text-[9px] text-slate-400">
                <span>Vision Analysis</span>
                <span className="text-brand-cyan">Active</span>
              </div>
              <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden">
                <motion.div
                  animate={{ width: ["10%", "85%", "10%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="h-full bg-brand-cyan"
                />
              </div>
              <div className="bg-slate-900/80 p-2 rounded text-[9px] text-slate-300 italic border border-white/5">
                "AI Detected: Workspace setup, clean lines, laptop, warm lighting."
              </div>
            </div>
          </GlassCard>

          {/* Card 2: Multi-Platform Publishing */}
          <GlassCard delay={0.1}>
            <div className="flex items-center space-x-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-brand-indigo/10 border border-brand-indigo/20 flex items-center justify-center text-brand-indigo">
                <FiLayers className="text-lg" />
              </div>
              <h3 className="font-display font-semibold text-lg text-white">Multi-Platform Publishing</h3>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Create a single post and publish it across Instagram, Facebook, LinkedIn, Pinterest, and Tumblr simultaneously. No double entry.
            </p>
            {/* Visual Micro Mockup */}
            <div className="bg-slate-950/60 p-4 rounded-xl border border-white/5 flex items-center justify-around">
              <div className="p-2.5 rounded-lg bg-slate-900 text-pink-500 border border-white/5 shadow-md"><FaInstagram /></div>
              <FiArrowRight className="text-slate-650 text-slate-500 animate-pulse" />
              <div className="p-2.5 rounded-lg bg-slate-900 text-blue-500 border border-white/5 shadow-md"><FaLinkedin /></div>
              <FiArrowRight className="text-slate-650 text-slate-500 animate-pulse" />
              <div className="p-2.5 rounded-lg bg-slate-900 text-red-500 border border-white/5 shadow-md"><FaPinterest /></div>
            </div>
          </GlassCard>

          {/* Card 3: Custom Captions */}
          <GlassCard delay={0.2}>
            <div className="flex items-center space-x-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan">
                <FiSliders className="text-lg" />
              </div>
              <h3 className="font-display font-semibold text-lg text-white">Custom Captions</h3>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Fine-tune copy for each platform. Customize hashtags for Instagram and adapt formal summaries for professional networks.
            </p>
            {/* Visual Micro Mockup */}
            <div className="bg-slate-950/60 p-3.5 rounded-xl border border-white/5 space-y-3">
              <div className="flex border-b border-white/5 pb-1.5 space-x-2 text-[9px] font-semibold">
                <button
                  onClick={() => setActiveTab('insta')}
                  className={`pb-1 px-1 transition-colors ${activeTab === 'insta' ? 'text-brand-purple border-b border-brand-purple' : 'text-slate-400'}`}
                >
                  Instagram
                </button>
                <button
                  onClick={() => setActiveTab('linkedin')}
                  className={`pb-1 px-1 transition-colors ${activeTab === 'linkedin' ? 'text-brand-indigo border-b border-brand-indigo' : 'text-slate-400'}`}
                >
                  LinkedIn
                </button>
                <button
                  onClick={() => setActiveTab('tumblr')}
                  className={`pb-1 px-1 transition-colors ${activeTab === 'tumblr' ? 'text-brand-cyan border-b border-brand-cyan' : 'text-slate-400'}`}
                >
                  Tumblr
                </button>
              </div>
              <div className="text-[9px] text-slate-300 bg-slate-900 p-2 rounded min-h-[50px] font-mono leading-normal border border-white/5 select-none">
                {featureMockups[activeTab]}
              </div>
            </div>
          </GlassCard>

          {/* Card 4: Content Scheduling */}
          <GlassCard delay={0.3}>
            <div className="flex items-center space-x-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-brand-fuchsia/10 border border-brand-fuchsia/20 flex items-center justify-center text-brand-fuchsia">
                <FiCalendar className="text-lg" />
              </div>
              <h3 className="font-display font-semibold text-lg text-white">Content Scheduling</h3>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Schedule updates for weeks in advance. Organize calendars visually and queue slots at peak audience activity hours automatically.
            </p>
            {/* Visual Micro Mockup */}
            <div className="bg-slate-950/60 p-4 rounded-xl border border-white/5">
              <div className="grid grid-cols-7 gap-1.5 text-center text-[8px] font-semibold text-slate-400">
                <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
                <span className="p-1 rounded hover:bg-white/5 cursor-pointer">12</span>
                <span className="p-1 rounded hover:bg-white/5 cursor-pointer">13</span>
                <span className="p-1 rounded bg-brand-purple/20 text-brand-purple border border-brand-purple/40 font-bold cursor-pointer">14</span>
                <span className="p-1 rounded hover:bg-white/5 cursor-pointer">15</span>
                <span className="p-1 rounded hover:bg-white/5 cursor-pointer">16</span>
                <span className="p-1 rounded hover:bg-white/5 cursor-pointer">17</span>
                <span className="p-1 rounded hover:bg-white/5 cursor-pointer">18</span>
              </div>
            </div>
          </GlassCard>

          {/* Card 5: History Dashboard */}
          <GlassCard delay={0.4}>
            <div className="flex items-center space-x-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400">
                <FiCheckSquare className="text-lg" />
              </div>
              <h3 className="font-display font-semibold text-lg text-white">History Dashboard</h3>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Audit all previously published and scheduled posts. Drill down into individual statuses, channel metrics, and reach details.
            </p>
            {/* Visual Micro Mockup */}
            <div className="bg-slate-950/60 p-3.5 rounded-xl border border-white/5 space-y-2">
              <div className="flex items-center justify-between text-[9px] bg-slate-900 p-1.5 rounded border border-white/5">
                <span className="text-slate-350 text-slate-300">Campaign_Launch.mov</span>
                <span className="text-green-400 font-bold bg-green-950/40 px-1.5 py-0.5 rounded border border-green-500/20">Sent</span>
              </div>
              <div className="flex items-center justify-between text-[9px] bg-slate-900 p-1.5 rounded border border-white/5">
                <span className="text-slate-350 text-slate-300">Workspace_v3.jpg</span>
                <span className="text-green-400 font-bold bg-green-950/40 px-1.5 py-0.5 rounded border border-green-500/20">Sent</span>
              </div>
            </div>
          </GlassCard>

          {/* Card 6: Account Management */}
          <GlassCard delay={0.5}>
            <div className="flex items-center space-x-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <FiSettings className="text-lg" />
              </div>
              <h3 className="font-display font-semibold text-lg text-white">Account Management</h3>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Bind multiple profiles from a single social network. Manage client workspaces, invite team members, and assign permissions.
            </p>
            {/* Visual Micro Mockup */}
            <div className="bg-slate-950/60 p-3.5 rounded-xl border border-white/5 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded-full bg-brand-indigo/35 text-[9px] font-bold flex items-center justify-center text-white">MM</div>
                <div className="text-[9px]">
                  <div className="text-white font-medium">Agency Workspace</div>
                  <div className="text-slate-400">5 channels connected</div>
                </div>
              </div>
              <div className="w-8 h-4 rounded-full bg-brand-indigo p-0.5 cursor-pointer flex justify-end">
                <div className="w-3 h-3 bg-white rounded-full" />
              </div>
            </div>
          </GlassCard>

        </div>

      </div>
    </section>
  );
}
