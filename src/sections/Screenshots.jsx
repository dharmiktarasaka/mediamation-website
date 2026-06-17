import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiLayout, FiCalendar, FiCpu, FiCheckCircle, FiSearch, FiSliders, FiClock, FiPlus, FiChevronRight } from 'react-icons/fi';
import { FaInstagram, FaFacebook, FaLinkedin, FaPinterest, FaTumblr } from 'react-icons/fa';
import MockupWindow from '../components/MockupWindow';

export default function Screenshots() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [statusFilter, setStatusFilter] = useState('all');
  const [platformFilter, setPlatformFilter] = useState('all');

  const tabs = [
    { id: 'dashboard', label: 'Main Dashboard', icon: <FiLayout /> },
    { id: 'schedule', label: 'Schedule Page', icon: <FiCalendar /> },
    { id: 'history', label: 'History Page', icon: <FiCheckCircle /> }
  ];

  // Simulated dashboard wrapper layout
  const renderDashboardLayout = (activeSubTab, children) => {
    return (
      <div className="flex h-full min-h-[380px] bg-[#0b0f19] text-left text-white font-sans">
        {/* Sidebar */}
        <div className="w-[145px] border-r border-white/5 bg-[#080b13] flex flex-col justify-between p-3 flex-shrink-0">
          <div className="space-y-6">
            {/* Logo */}
            <div className="flex items-center space-x-2 px-1">
              <div className="w-5 h-5 rounded-md bg-gradient-to-tr from-brand-indigo to-brand-purple flex items-center justify-center">
                <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <span className="text-[11px] font-bold tracking-tight">Mediamation</span>
            </div>
            
            {/* Navigation */}
            <div className="space-y-1">
              {[
                { id: 'dashboard', label: 'Dashboard', icon: <FiLayout className="w-3.5 h-3.5" /> },
                { id: 'schedule', label: 'Schedule', icon: <FiCalendar className="w-3.5 h-3.5" /> },
                { id: 'history', label: 'History', icon: <FiClock className="w-3.5 h-3.5" /> },
              ].map((item) => {
                const isActive = activeSubTab === item.id;
                return (
                  <div
                    key={item.id}
                    className={`flex items-center space-x-2 px-2.5 py-1.5 rounded-lg text-[9px] font-medium transition-colors ${
                      isActive 
                        ? 'bg-brand-indigo text-white font-semibold' 
                        : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                    }`}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* User Card */}
          <div className="border-t border-white/5 pt-3 flex items-center justify-between">
            <div className="flex items-center space-x-1.5 min-w-0">
              <div className="w-5 h-5 rounded-full bg-brand-purple/35 flex items-center justify-center text-[9px] font-bold text-white flex-shrink-0">
                D
              </div>
              <div className="min-w-0 leading-tight">
                <div className="text-[8px] font-bold truncate">Dharmik</div>
                <div className="text-[6px] text-slate-500 truncate">dharmik.tarasaka@gmail.com</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 bg-[#090d16]/30 overflow-y-auto max-h-[380px] scrollbar-none relative">
          {children}
        </div>
      </div>
    );
  };

  const renderTabMockup = () => {
    switch (activeTab) {
      case 'dashboard':
        return renderDashboardLayout('dashboard', (
          <div className="p-5 space-y-4 text-left">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <div>
                <h4 className="text-xs font-bold text-slate-300">Welcome, Dharmik</h4>
                <p className="text-[9px] text-slate-500">Connect and manage your social channels</p>
              </div>
              <span className="text-[8px] text-slate-400 bg-slate-900 border border-white/5 px-2.5 py-1 rounded">
                Active Session
              </span>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Connected Accounts Card */}
              <div className="bg-slate-950 p-4 rounded-xl border border-white/5 space-y-4">
                <h5 className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Connected Accounts</h5>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900/60 border border-white/5 text-[9px]">
                    <div className="flex items-center space-x-2 text-slate-200">
                      <span className="px-1.5 py-0.2 text-[7px] uppercase font-mono font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded">Facebook</span>
                      <span className="font-semibold">Tarasaka</span>
                    </div>
                    <span className="text-[8px] text-red-400 font-bold border border-red-500/20 bg-red-950/20 px-2 py-0.5 rounded cursor-not-allowed">Disconnect</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-slate-900/60 border border-white/5 text-[9px]">
                    <div className="flex items-center space-x-2 text-slate-200">
                      <span className="px-1.5 py-0.2 text-[7px] uppercase font-mono font-bold bg-pink-500/10 text-pink-400 border border-pink-500/20 rounded">Instagram</span>
                      <span className="font-semibold">Tarasaka (Instagram)</span>
                    </div>
                    <span className="text-[8px] text-red-400 font-bold border border-red-500/20 bg-red-950/20 px-2 py-0.5 rounded cursor-not-allowed">Disconnect</span>
                  </div>
                </div>

                {/* Connection buttons list */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  <button className="px-2 py-1 rounded bg-[#5850ec] text-[8px] font-semibold text-white opacity-40 cursor-not-allowed">+ Connect Facebook</button>
                  <button className="px-2 py-1 rounded bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 text-[8px] font-semibold text-white opacity-40 cursor-not-allowed">+ Connect Instagram</button>
                  <button className="px-2 py-1 rounded bg-[#cc0000] text-[8px] font-semibold text-white cursor-pointer">+ Connect Pinterest</button>
                  <button className="px-2 py-1 rounded bg-[#35465d] text-[8px] font-semibold text-white cursor-pointer">+ Connect Tumblr</button>
                  <button className="px-2 py-1 rounded bg-[#0077b5] text-[8px] font-semibold text-white cursor-pointer">+ Connect LinkedIn</button>
                </div>
              </div>

              {/* Upcoming Posts Queue Card */}
              <div className="bg-slate-950 p-4 rounded-xl border border-white/5 space-y-3.5">
                <h5 className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Upcoming Queue (Next 48h)</h5>
                
                <div className="space-y-2.5">
                  <div className="p-2.5 rounded-lg bg-[#0e1626]/80 border border-white/5 text-[9px]">
                    <div className="flex items-center justify-between mb-1">
                      <span className="px-1 py-0.2 text-[6px] uppercase font-mono font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded">Facebook</span>
                      <span className="text-[7.5px] text-slate-500 font-mono">Today, 4:18 PM</span>
                    </div>
                    <p className="text-slate-350 truncate font-mono">"Dive deep into the extraordinary. The beauty of automation..."</p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#0e1626]/80 border border-white/5 text-[9px]">
                    <div className="flex items-center justify-between mb-1">
                      <span className="px-1 py-0.2 text-[6px] uppercase font-mono font-bold bg-pink-500/10 text-pink-400 border border-pink-500/20 rounded">Instagram</span>
                      <span className="text-[7.5px] text-slate-500 font-mono">Tomorrow, 10:00 AM</span>
                    </div>
                    <p className="text-slate-350 truncate font-mono">"Efficiency is the cornerstone of modern scaling. Automated marketing..."</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ));

      case 'schedule':
        return renderDashboardLayout('schedule', (
          <div className="grid grid-cols-12 h-full divide-x divide-white/5 text-left">
            {/* Left/Middle Column - Scheduler Composer Form */}
            <div className="col-span-8 p-4 space-y-3.5 overflow-y-auto max-h-[380px] scrollbar-none">
              <div className="border-b border-white/5 pb-2">
                <h4 className="text-xs font-bold text-slate-300">Schedule New Post</h4>
              </div>
              
              {/* Account Checkboxes */}
              <div className="space-y-1.5">
                <label className="text-[8px] font-bold text-slate-400 uppercase tracking-wider block">Target Channels</label>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center space-x-2 p-1.5 rounded-lg border bg-brand-indigo/10 border-brand-indigo/35 text-white">
                    <input type="checkbox" checked={true} readOnly className="rounded border-white/10 w-2.5 h-2.5 bg-transparent" />
                    <div className="flex flex-col min-w-0">
                      <span className="px-1 py-0.2 text-[6px] uppercase font-mono font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded self-start leading-none">Facebook</span>
                      <span className="text-[8px] font-semibold mt-0.5 leading-none truncate">Tarasaka</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 p-1.5 rounded-lg border bg-slate-900/60 border-white/5 text-slate-400">
                    <input type="checkbox" checked={false} readOnly className="rounded border-white/10 w-2.5 h-2.5 bg-transparent" />
                    <div className="flex flex-col min-w-0">
                      <span className="px-1 py-0.2 text-[6px] uppercase font-mono font-bold bg-pink-500/10 text-pink-400 border border-pink-500/20 rounded self-start leading-none">Instagram</span>
                      <span className="text-[8px] font-semibold mt-0.5 leading-none truncate">Tarasaka (Instagram)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Upload */}
              <div className="space-y-1.5 border border-dashed border-white/10 bg-slate-900/30 p-2.5 rounded-xl">
                <label className="text-[8px] font-bold text-slate-400 uppercase tracking-wider block">Media Carousel Gallery</label>
                <div className="flex items-center space-x-2">
                  <button type="button" className="px-2 py-0.5 bg-slate-900 border border-white/15 text-white text-[8px] font-semibold rounded cursor-pointer hover:bg-slate-800 transition-colors">Choose Files</button>
                  <span className="text-[8px] text-slate-500">1 file chosen</span>
                </div>
                <div className="pt-1">
                  <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-white/10 bg-slate-900 flex items-center justify-center">
                    <span className="absolute top-1 left-1 bg-brand-indigo text-white text-[6px] font-bold w-2.5 h-2.5 rounded-full flex items-center justify-center">1</span>
                    <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=80&q=80')`, filter: 'grayscale(1) brightness(0.6)' }} />
                  </div>
                </div>
              </div>

              {/* Content and AI Write */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-[8px] font-bold text-slate-400 uppercase tracking-wider block">Post Content</label>
                  <div className="flex items-center space-x-1.5">
                    <span className="px-1.5 py-0.5 bg-slate-900 border border-white/5 rounded text-[7px] text-slate-400">Attractive ✨</span>
                    <span className="px-1.5 py-0.5 bg-brand-purple text-white rounded text-[7px] font-bold cursor-pointer hover:bg-brand-purple/90 transition-colors">+ AI Write</span>
                  </div>
                </div>
                <textarea 
                  value="Dive deep into the extraordinary. The beauty of automation is that it gives you back your most valuable asset: time. 🌊🤖" 
                  className="w-full h-11 bg-slate-900/60 border border-white/5 rounded-lg p-2 text-[8px] text-slate-350 resize-none pointer-events-none" 
                  readOnly 
                />
              </div>

              {/* Date time and Schedule Button */}
              <div className="flex items-center space-x-2 pt-0.5">
                <div className="relative flex-1">
                  <input type="text" value="17-06-2026 16:18" className="w-full bg-slate-900/60 border border-white/5 rounded-lg p-1.5 text-[8px] text-slate-300 font-mono" readOnly />
                  <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-500 text-[8px]">📅</span>
                </div>
                <button type="button" className="px-4 py-1.5 bg-brand-indigo text-white text-[8px] font-bold rounded-lg cursor-pointer hover:bg-brand-indigo/90 transition-colors">Schedule</button>
              </div>
            </div>

            {/* Right Column - Scheduled Posts list */}
            <div className="col-span-4 p-4 space-y-4 overflow-y-auto max-h-[380px] scrollbar-none">
              <span className="text-slate-350 font-bold text-xs block border-b border-white/5 pb-2">Scheduled Posts</span>
              <div className="space-y-2.5 pt-1">
                <div className="p-2.5 rounded-lg bg-slate-950 border border-white/5 text-[9px] relative flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <span className="px-1 py-0.2 text-[6px] uppercase font-mono font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded">Facebook</span>
                    <span className="px-1 py-0.2 rounded bg-brand-indigo/10 text-brand-indigo text-[6px] font-bold border border-brand-indigo/20">Scheduled</span>
                  </div>
                  <p className="text-slate-350 truncate">"Dive deep into the extraordinary..."</p>
                  <div className="flex justify-end gap-1.5 pt-1.5 border-t border-white/5">
                    <span className="text-[7px] text-slate-400 bg-slate-900 px-1 py-0.2 rounded cursor-pointer hover:text-white">Retry</span>
                    <span className="text-[7px] text-red-400 bg-slate-900 px-1 py-0.2 rounded cursor-pointer hover:bg-red-950/20">Delete</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ));

      case 'history':
        const mockPosts = [
          { _id: 1, creative: 'milestone.jpg', platform: 'linkedin', accountName: 'Tarasaka', time: 'Jun 17, 10:00 AM', status: 'published', content: 'Work smarter, not harder. Automation lets you focus on building features. 🤖✨', metrics: '1,420 impressions' },
          { _id: 2, creative: 'promo_video.mp4', platform: 'instagram', accountName: 'Tarasaka (Instagram)', time: 'Jun 17, 4:18 PM', status: 'scheduled', content: 'Dive deep into the extraordinary. The beauty of automation... 🌊🌊', metrics: '-' },
          { _id: 3, creative: 'creative_ad.jpg', platform: 'facebook', accountName: 'Tarasaka', time: 'Jun 16, 9:00 AM', status: 'failed', content: 'Automated postings scaling reach gain metrics today!', error: 'OAuth Token Expired. Please reconnect your account.' },
          { _id: 4, creative: 'design_inspiration.png', platform: 'pinterest', accountName: 'Tarasaka Creative', time: 'Jun 15, 1:00 PM', status: 'published', content: 'Visual design templates collection layout.', metrics: '240 repins' }
        ];

        const filtered = mockPosts.filter(p => {
          const matchesStatus = statusFilter === 'all' || p.status === statusFilter;
          const matchesPlatform = platformFilter === 'all' || p.platform === platformFilter;
          return matchesStatus && matchesPlatform;
        });

        return renderDashboardLayout('history', (
          <div className="p-4 space-y-4 text-left h-full min-h-[380px] overflow-y-auto max-h-[380px] scrollbar-none">
            {/* Header / Filter bar */}
            <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-white/5 pb-3 gap-2">
              <div>
                <h4 className="text-xs font-bold text-slate-300">Posting History & Queue</h4>
                <p className="text-[8px] text-slate-500">Audit trail of published, queued, and failed posts</p>
              </div>

              {/* Filter controls */}
              <div className="flex gap-2 text-[8px] font-semibold">
                <div className="flex items-center space-x-1.5">
                  <span className="text-slate-500">Status</span>
                  <select 
                    value={statusFilter} 
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="bg-[#0f1422] border border-white/5 rounded px-1.5 py-0.5 text-slate-350 focus:outline-none focus:border-brand-purple cursor-pointer"
                  >
                    <option value="all">All</option>
                    <option value="scheduled">Scheduled</option>
                    <option value="published">Published</option>
                    <option value="failed">Failed</option>
                  </select>
                </div>
                <div className="flex items-center space-x-1.5">
                  <span className="text-slate-500">Platform</span>
                  <select 
                    value={platformFilter} 
                    onChange={(e) => setPlatformFilter(e.target.value)}
                    className="bg-[#0f1422] border border-white/5 rounded px-1.5 py-0.5 text-slate-350 focus:outline-none focus:border-brand-purple cursor-pointer"
                  >
                    <option value="all">All</option>
                    <option value="facebook">Facebook</option>
                    <option value="instagram">Instagram</option>
                    <option value="pinterest">Pinterest</option>
                    <option value="linkedin">LinkedIn</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Posts Cards Grid */}
            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center p-6 border border-dashed border-white/5 bg-slate-900/10 rounded-xl">
                <span className="text-[9px] text-slate-500 font-medium">No posts match selection filters</span>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {filtered.map((post) => (
                  <div 
                    key={post._id} 
                    className={`p-3 rounded-xl border bg-[#0e1626]/40 text-[9px] flex flex-col justify-between space-y-2 relative transition-all ${
                      post.status === 'published' ? 'border-green-500/20 shadow-sm shadow-green-500/2' :
                      post.status === 'scheduled' ? 'border-brand-indigo/30 shadow-sm shadow-brand-indigo/2' :
                      'border-red-500/30'
                    }`}
                  >
                    <div>
                      {/* Meta */}
                      <div className="flex items-center justify-between mb-1.5">
                        <span className={`px-1 py-0.2 text-[6px] uppercase font-mono font-bold rounded ${
                          post.platform === 'facebook' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' :
                          post.platform === 'instagram' ? 'bg-pink-500/10 text-pink-400 border border-pink-500/20' :
                          post.platform === 'linkedin' ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20' :
                          'bg-red-500/10 text-red-400 border border-red-500/20'
                        }`}>
                          {post.platform}
                        </span>
                        <span className={`px-1.5 py-0.2 rounded text-[7px] font-bold uppercase ${
                          post.status === 'published' ? 'bg-green-500/10 text-green-400 border border-green-500/20' :
                          post.status === 'scheduled' ? 'bg-brand-indigo/10 text-brand-indigo border border-brand-indigo/20' :
                          'bg-red-500/10 text-red-400 border border-red-500/20'
                        }`}>
                          {post.status}
                        </span>
                      </div>

                      {/* Account details */}
                      <div className="flex flex-col leading-tight mb-1.5">
                        <span className="font-bold text-slate-200">{post.accountName}</span>
                        <span className="text-[7.5px] text-slate-500">{post.status === 'published' ? 'Published' : 'Scheduled'}: {post.time}</span>
                      </div>

                      {/* Body */}
                      <p className="text-slate-350 leading-relaxed font-mono">{post.content}</p>

                      {/* Error details */}
                      {post.status === 'failed' && (
                        <div className="mt-2 p-1.5 bg-red-950/20 border border-red-500/20 text-red-400 rounded text-[7.5px] font-mono leading-normal">
                          <strong>Error:</strong> {post.error}
                        </div>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex justify-between items-center pt-2 border-t border-white/5 text-[7.5px]">
                      <span className="text-slate-500 font-mono">
                        {post.status === 'published' ? `Metrics: ${post.metrics}` : 'Metrics: -'}
                      </span>
                      <div className="flex gap-1.5">
                        {post.status !== 'published' && (
                          <span className="text-slate-400 hover:text-white cursor-pointer px-1 py-0.2 rounded bg-slate-900 border border-white/5">Edit</span>
                        )}
                        <span className="text-red-400 hover:text-red-300 cursor-pointer px-1 py-0.2 rounded bg-slate-900 border border-white/5">Delete</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ));

      default:
        return null;
    }
  };

  return (
    <section className="relative py-24 border-y border-white/5 bg-slate-950/20 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-cyan/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-base font-semibold text-brand-cyan uppercase tracking-wider mb-3">
            Interface Previews
          </h2>
          <p className="font-display text-3xl md:text-5xl font-bold text-white tracking-tight leading-none mb-4">
            See Mediamation in action.
          </p>
          <p className="text-slate-400">
            Explore the responsive dashboard controls. Click the tabs below to toggle between different modules of the system interface.
          </p>
        </div>

        {/* Interactive mockup tabs controls */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl border text-xs font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-brand-indigo border-brand-indigo/30 text-white shadow-lg shadow-brand-indigo/15'
                  : 'bg-slate-950 border-white/5 text-slate-400 hover:text-white hover:border-white/10'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Mockup Window container */}
        <div className="max-w-4xl mx-auto">
          <div className="glow-border rounded-2xl p-0.5 bg-gradient-to-tr from-brand-indigo/10 via-brand-purple/10 to-brand-cyan/10">
            <MockupWindow title={`https://mediamation.in/${activeTab}`}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {renderTabMockup()}
                </motion.div>
              </AnimatePresence>
            </MockupWindow>
          </div>
        </div>

      </div>
    </section>
  );
}
