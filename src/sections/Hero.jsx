import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlay, FiX, FiCalendar, FiClock, FiCheck, FiSend, FiZap, FiGrid, FiLogOut } from 'react-icons/fi';
import { FaInstagram, FaFacebook, FaLinkedin, FaPinterest, FaTumblr } from 'react-icons/fa';
import MockupWindow from '../components/MockupWindow';
import logo from '../assets/logo.png';
import demoVideo from '../assets/how_it_works_demo.webp';

// Floating Icon Component with drop & return hover animation
function FloatingIcon({ plat }) {
  const [isDropped, setIsDropped] = useState(false);
  const timeoutRef = useRef(null);

  const particles = [
    { dx: -24, dy: -24, scale: 0.6 },
    { dx: 0, dy: -32, scale: 0.8 },
    { dx: 24, dy: -24, scale: 0.6 },
    { dx: -32, dy: 0, scale: 0.8 },
    { dx: 0, dy: 0, scale: 1.0 },
    { dx: 32, dy: 0, scale: 0.8 },
    { dx: -24, dy: 24, scale: 0.6 },
    { dx: 0, dy: 32, scale: 0.8 },
    { dx: 24, dy: 24, scale: 0.6 },
  ];

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsDropped(true);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setIsDropped(false);
    }, 1000); // 1 sec gap before returning and repairing
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      style={plat.style}
      animate={isDropped ? {
        y: 120,
      } : {
        y: [0, -12, 0],
      }}
      transition={isDropped ? {
        type: 'spring',
        stiffness: 120,
        damping: 12
      } : {
        y: {
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: plat.delay + 0.4
        }
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="absolute z-20 cursor-pointer"
    >
      {/* Main Repaired Icon */}
      <motion.div
        animate={{
          opacity: isDropped ? 0 : 1,
          scale: isDropped ? 0.8 : 1,
        }}
        transition={{
          duration: 0.25,
          delay: isDropped ? 0.25 : 0.15
        }}
        className={`p-2.5 xl:p-4 rounded-xl xl:rounded-2xl bg-gradient-to-tr ${plat.color} text-white text-lg xl:text-2xl shadow-xl shadow-black/30 border border-white/10 flex items-center justify-center transition-transform duration-250 hover:scale-110 active:scale-95`}
      >
        {plat.icon}
      </motion.div>

      {/* Disintegrated Particles (converging / exploding) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            animate={isDropped ? {
              x: p.dx,
              y: p.dy,
              opacity: 1,
              scale: p.scale,
              rotate: p.dx * 6,
            } : {
              x: 0,
              y: 0,
              opacity: 0,
              scale: 0,
              rotate: 0,
            }}
            transition={isDropped ? {
              type: 'spring',
              stiffness: 90,
              damping: 8,
              delay: 0.25
            } : {
              type: 'spring',
              stiffness: 140,
              damping: 14,
              delay: 0
            }}
            className={`absolute w-2.5 h-2.5 xl:w-3.5 xl:h-3.5 rounded-sm bg-gradient-to-tr ${plat.color} shadow-lg border border-white/5`}
          />
        ))}
      </div>

      {/* Label Text below */}
      <motion.div
        animate={{
          opacity: isDropped ? 0 : 1,
        }}
        transition={{
          duration: 0.2,
          delay: isDropped ? 0 : 0.4
        }}
        className="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-1.5 py-0.5 rounded bg-slate-950 text-[8px] xl:text-[10px] text-slate-400 font-medium tracking-wide shadow-md border border-white/5 whitespace-nowrap"
      >
        {plat.label}
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  const [showDemo, setShowDemo] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [activeMockTab, setActiveMockTab] = useState('dashboard');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Floating platforms configuration
  const floatingPlatforms = [
    { icon: <FaInstagram />, color: 'from-pink-500 to-rose-500', label: 'Instagram', style: { left: '1%', top: '20px' }, delay: 0 },
    { icon: <FaLinkedin />, color: 'from-blue-600 to-indigo-600', label: 'LinkedIn', style: { right: '1%', top: '40px' }, delay: 1.5 },
    { icon: <FaFacebook />, color: 'from-blue-500 to-blue-700', label: 'Facebook', style: { left: '8%', top: '150px' }, delay: 0.8 },
    { icon: <FaPinterest />, color: 'from-red-500 to-rose-600', label: 'Pinterest', style: { right: '8%', top: '190px' }, delay: 2.2 },
    { icon: <FaTumblr />, color: 'from-slate-700 to-indigo-950', label: 'Tumblr', style: { left: '1.5%', top: '270px' }, delay: 1.1 }
  ];

  return (
    <section id="home" className="relative pt-32 pb-24 overflow-hidden grid-bg radial-gradient-purple">
      {/* Absolute Radial Glow Layers */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-indigo/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-[300px] h-[300px] bg-brand-cyan/5 blur-[80px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
        {/* Floating Platform Icons around Headline */}
        <div className="hidden lg:block text-left">
          {floatingPlatforms.map((plat, idx) => (
            <FloatingIcon key={idx} plat={plat} />
          ))}
        </div>

        {/* Top Feature Tag */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-slate-900 border border-brand-indigo/30 text-brand-purple text-xs font-semibold tracking-wide uppercase mb-6"
        >
          <FiZap className="animate-pulse" />
          <span>Meet the Future of Social Media</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]"
        >
          Create Once. <br />
          <span className="bg-gradient-to-r from-brand-indigo via-brand-purple to-brand-cyan bg-clip-text text-transparent">
            Publish Everywhere.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-slate-350 text-slate-400 leading-relaxed mb-10"
        >
          AI-powered social media automation that analyzes your content, generates platform-ready captions, schedules posts, and publishes them automatically across all your social channels
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16"
        >
          <a
            href="https://echoreal.in/"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-brand-indigo to-brand-purple hover:from-brand-indigo/90 hover:to-brand-purple/90 text-white font-semibold shadow-lg shadow-brand-indigo/25 hover:shadow-brand-indigo/35 transition-all duration-300 transform hover:-translate-y-0.5 text-center"
          >
            Get Started Free
          </a>
          <button
            onClick={() => setShowDemo(true)}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900 border border-white/10 hover:border-white/20 text-slate-200 hover:text-white font-semibold transition-all duration-200 flex items-center justify-center space-x-2.5 backdrop-blur-md cursor-pointer"
          >
            <FiPlay className="text-brand-cyan fill-brand-cyan/20" />
            <span>Watch Demo</span>
          </button>
        </motion.div>

        {/* Dashboard Showcase & Floating Platform Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Interactive Mockup Container */}
          <div className="glow-border rounded-2xl p-0.5 bg-gradient-to-tr from-brand-indigo/20 via-brand-purple/20 to-brand-cyan/20">
            <MockupWindow>
              <div className="grid grid-cols-1 lg:grid-cols-12 text-left min-h-[450px]">

                {/* Left Sidebar Mockup */}
                <div className="lg:col-span-3 border-r border-white/5 bg-[#090d16]/95 p-4 flex flex-col justify-between min-h-[450px]">
                  <div className="space-y-6">
                    {/* Sidebar Logo */}
                    <div className="flex items-center space-x-3 pb-4 border-b border-white/5">
                      <img src={logo} alt="Logo" className="w-5 h-5 object-contain" />
                      <span className="font-display font-bold text-sm text-white tracking-tight">Mediamation</span>
                    </div>

                    {/* Mock Sidebar Menu */}
                    <div className="space-y-1">
                      <div
                        onClick={() => setActiveMockTab('dashboard')}
                        className={`px-3 py-2 rounded-lg text-[11px] flex items-center space-x-2.5 transition-all cursor-pointer ${activeMockTab === 'dashboard'
                            ? 'bg-[#5850ec] text-white font-semibold shadow-md shadow-[#5850ec]/20'
                            : 'text-slate-400 hover:bg-white/5 hover:text-slate-200 font-medium'
                          }`}
                      >
                        <FiGrid className="text-xs" />
                        <span>Dashboard</span>
                      </div>
                      <div
                        onClick={() => setActiveMockTab('schedule')}
                        className={`px-3 py-2 rounded-lg text-[11px] flex items-center space-x-2.5 transition-all cursor-pointer ${activeMockTab === 'schedule'
                            ? 'bg-[#5850ec] text-white font-semibold shadow-md shadow-[#5850ec]/20'
                            : 'text-slate-400 hover:bg-white/5 hover:text-slate-200 font-medium'
                          }`}
                      >
                        <FiCalendar className="text-xs" />
                        <span>Schedule</span>
                      </div>
                      <div
                        onClick={() => setActiveMockTab('history')}
                        className={`px-3 py-2 rounded-lg text-[11px] flex items-center space-x-2.5 transition-all cursor-pointer ${activeMockTab === 'history'
                            ? 'bg-[#5850ec] text-white font-semibold shadow-md shadow-[#5850ec]/20'
                            : 'text-slate-400 hover:bg-white/5 hover:text-slate-200 font-medium'
                          }`}
                      >
                        <FiClock className="text-xs" />
                        <span>History</span>
                      </div>
                    </div>
                  </div>

                  {/* Profile info bottom block */}
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-7 h-7 rounded-full bg-indigo-900/60 border border-indigo-700/30 flex items-center justify-center font-bold text-[10px] text-indigo-200">
                        D
                      </div>
                      <div className="min-w-0">
                        <div className="text-[10px] font-semibold text-white truncate leading-tight">Dharmik</div>
                        <div className="text-[8px] text-slate-550 text-slate-500 truncate leading-tight">dharmik.tarasaka@gm...</div>
                      </div>
                    </div>
                    <button className="text-slate-400 hover:text-white p-1 hover:bg-white/5 rounded transition-colors" aria-label="Logout">
                      <FiLogOut className="text-xs" />
                    </button>
                  </div>
                </div>

                {/* Right Dashboard Area Mockup */}
                <div className="lg:col-span-9 p-6 bg-[#030712]/50 flex flex-col justify-between min-h-[450px]">

                  {activeMockTab === 'dashboard' && (
                    <div className="flex flex-col justify-between flex-1 space-y-4">
                      {/* Top Welcome bar */}
                      <div className="flex items-center justify-between pb-4 border-b border-white/5">
                        <h3 className="text-lg font-bold font-display text-white">
                          Welcome, <span className="bg-gradient-to-r from-brand-indigo via-brand-purple to-brand-cyan bg-clip-text text-transparent">Dharmik</span>
                        </h3>
                        <button className="px-3 py-1 rounded-lg border border-white/5 text-[10px] font-medium text-slate-350 bg-slate-900/55 hover:bg-slate-800 transition-colors">
                          Logout
                        </button>
                      </div>

                      {/* Main content grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch flex-1 mt-2">
                        {/* Connected Accounts Card */}
                        <div className="bg-slate-950/60 border border-white/5 rounded-xl p-4 flex flex-col justify-between space-y-4">
                          <div className="space-y-4">
                            <span className="text-xs font-semibold text-white block">Connected Accounts</span>

                            {/* Empty state box */}
                            <div className="rounded-lg border border-white/5 bg-[#090d16]/30 p-5 text-center">
                              <span className="text-[10px] text-slate-450 text-slate-400 font-medium">No accounts connected</span>
                            </div>
                          </div>

                          {/* Connection Buttons */}
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            <button className="px-2.5 py-1.5 rounded bg-[#5850ec] hover:bg-[#4f46e5] text-[9px] font-semibold text-white transition-all">
                              + Connect Facebook
                            </button>
                            <button className="px-2.5 py-1.5 rounded bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 hover:opacity-90 text-[9px] font-semibold text-white transition-all">
                              + Connect Instagram
                            </button>
                            <button className="px-2.5 py-1.5 rounded bg-[#cc0000] hover:bg-[#b30000] text-[9px] font-semibold text-white transition-all">
                              + Connect Pinterest
                            </button>
                            <button className="px-2.5 py-1.5 rounded bg-[#35465d] hover:bg-[#2c3a4e] text-[9px] font-semibold text-white transition-all">
                              + Connect Tumblr
                            </button>
                            <button className="px-2.5 py-1.5 rounded bg-[#0077b5] hover:bg-[#00669c] text-[9px] font-semibold text-white transition-all">
                              + Connect LinkedIn
                            </button>
                          </div>

                          {/* Help Link */}
                          <a href="#" className="inline-block text-[9px] text-slate-450 text-slate-400 hover:text-slate-350 underline transition-colors">
                            Need help connecting Instagram?
                          </a>
                        </div>

                        {/* Upcoming Posts Card */}
                        <div className="bg-slate-950/60 border border-white/5 rounded-xl p-4 flex flex-col justify-start space-y-4">
                          <span className="text-xs font-semibold text-white block">Upcoming Posts</span>

                          {/* Empty state box */}
                          <div className="rounded-lg border border-white/5 bg-[#090d16]/30 p-7 text-center flex-1 flex items-center justify-center">
                            <span className="text-[10px] text-slate-450 text-slate-400 font-medium">No scheduled posts</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeMockTab === 'schedule' && (
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start flex-1">
                      {/* Left Column - Schedule New Post */}
                      <div className="md:col-span-7 bg-slate-950/60 border border-white/5 rounded-xl p-5 space-y-4 text-left">
                        <span className="text-sm font-bold text-white block">Schedule New Post</span>

                        {/* Select Accounts */}
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-bold text-slate-300 uppercase tracking-wider">Select Accounts to Post To</label>
                          <div className="rounded-lg border border-dashed border-white/5 bg-[#090d16]/30 p-4 text-center">
                            <span className="text-[9px] text-slate-455 text-slate-400 font-medium">
                              No accounts connected yet. Connect accounts in the Dashboard.
                            </span>
                          </div>
                        </div>

                        {/* Media Upload */}
                        <div className="rounded-lg border border-dashed border-white/10 bg-[#090d16]/20 p-5 text-center space-y-2">
                          <div className="text-[10px] font-bold text-slate-300">Media Upload (Carousel Support)</div>
                          <div className="flex items-center justify-center space-x-2.5">
                            <button className="px-3 py-1.5 rounded bg-slate-900 border border-white/10 text-white text-[9px] font-semibold hover:bg-slate-800 transition-colors">
                              Choose Files
                            </button>
                            <span className="text-[9px] text-slate-400">No file chosen</span>
                          </div>
                        </div>

                        {/* Post Content */}
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-bold text-slate-300 uppercase tracking-wider">Post Content</label>
                          <textarea
                            placeholder="Post content"
                            className="w-full h-20 bg-[#090d16]/40 border border-white/5 rounded-lg p-2.5 text-[10px] text-slate-200 placeholder-slate-500 focus:outline-none focus:border-brand-purple resize-none"
                            readOnly
                          />
                        </div>

                        {/* Date Time Picker & Button */}
                        <div className="space-y-3">
                          <div className="relative">
                            <input
                              type="text"
                              value="dd-mm-yyyy --:--"
                              className="w-full bg-[#090d16]/40 border border-white/5 rounded-lg p-2.5 text-[10px] text-slate-400 focus:outline-none"
                              readOnly
                            />
                            <FiCalendar className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs" />
                          </div>

                          <button className="w-full py-2 bg-[#5850ec] hover:bg-[#4f46e5] text-white text-[10px] font-semibold rounded-lg shadow-md shadow-[#5850ec]/15 transition-all">
                            Schedule
                          </button>
                        </div>
                      </div>

                      {/* Right Column - Scheduled Posts */}
                      <div className="md:col-span-5 bg-slate-950/60 border border-white/5 rounded-xl p-5 space-y-4 text-left">
                        <span className="text-sm font-bold text-white block">Scheduled Posts</span>

                        <div className="rounded-lg border border-white/5 bg-[#090d16]/30 p-6 text-center flex items-center justify-center min-h-[120px]">
                          <span className="text-[10px] text-slate-455 text-slate-400 font-medium">No posts yet</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeMockTab === 'history' && (
                    <div className="flex flex-col justify-between flex-1 space-y-6">
                      {/* Top Header bar */}
                      <div className="flex items-center justify-between pb-4 border-b border-white/5">
                        <h3 className="text-lg font-bold font-display text-white">
                          Posting History & Queue
                        </h3>
                        <div className="flex items-center space-x-3">
                          {/* Status Filter */}
                          <div className="flex flex-col items-start space-y-1">
                            <span className="text-[8px] font-bold text-slate-500 uppercase tracking-wider">Status</span>
                            <div className="flex items-center justify-between px-2.5 py-1.5 rounded-lg border border-white/5 bg-slate-900/55 text-[9px] text-slate-300 font-medium cursor-pointer min-w-[95px]">
                              <span>All Statuses</span>
                              <svg className="w-2 h-2 ml-1 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                            </div>
                          </div>

                          {/* Platform Filter */}
                          <div className="flex flex-col items-start space-y-1">
                            <span className="text-[8px] font-bold text-slate-500 uppercase tracking-wider">Platform</span>
                            <div className="flex items-center justify-between px-2.5 py-1.5 rounded-lg border border-white/5 bg-slate-900/55 text-[9px] text-slate-300 font-medium cursor-pointer min-w-[95px]">
                              <span>All Platforms</span>
                              <svg className="w-2.5 h-2.5 ml-1 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Main card */}
                      <div className="flex-1 bg-slate-950/60 border border-white/5 rounded-xl p-6 flex items-center justify-center min-h-[200px]">
                        {/* Empty state box */}
                        <div className="w-full rounded-lg border border-white/5 bg-[#090d16]/30 py-8 px-4 text-center">
                          <span className="text-[10px] text-slate-450 text-slate-400 font-medium">
                            No posts match the selected filters.
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                </div>
              </div>
            </MockupWindow>
          </div>
        </motion.div>
      </div>

      {/* Watch Demo Modal */}
      {mounted && createPortal(
        <AnimatePresence>
          {showDemo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            >
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                className="bg-slate-950 border border-white/10 rounded-2xl w-full max-w-4xl overflow-hidden shadow-2xl relative"
              >
                {/* Modal Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-slate-950">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-brand-cyan animate-pulse" />
                    <span className="text-sm font-semibold text-white tracking-wide font-display">Mediamation Platform Tour</span>
                  </div>
                  <button
                    onClick={() => setShowDemo(false)}
                    className="text-slate-400 hover:text-white p-1.5 hover:bg-white/5 rounded-lg transition-all"
                    aria-label="Close modal"
                  >
                    <FiX className="text-lg" />
                  </button>
                </div>

                {/* Responsive Video Container */}
                <div className="relative aspect-video bg-black flex items-center justify-center">
                  <img
                    src={demoVideo}
                    alt="Mediamation Platform Tour"
                    className="w-full h-full object-contain"
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}
