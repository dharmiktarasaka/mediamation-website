import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiUpload, FiCpu, FiCheck, FiSliders, FiClock, FiSend, FiPlus, FiLayout, FiCalendar, FiLogOut } from 'react-icons/fi';
import { FaInstagram, FaFacebook, FaLinkedin, FaPinterest, FaTumblr } from 'react-icons/fa';
import MockupWindow from '../components/MockupWindow';


export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const [showConnected, setShowConnected] = useState(false);
  const [facebookChecked, setFacebookChecked] = useState(true);
  const [instagramChecked, setInstagramChecked] = useState(false);
  const [selectedTone, setSelectedTone] = useState("Attractive ✨");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [aiGeneratedText, setAiGeneratedText] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleAiWrite = () => {
    setIsGenerating(true);
    setAiGeneratedText("");
    setTimeout(() => {
      setIsGenerating(false);
      let caption = "";
      switch(selectedTone) {
        case "Attractive ✨":
          caption = "Dive deep into the extraordinary. The beauty of automation is that it gives you back your most valuable asset: time. 🌊🤖";
          break;
        case "Professional 📈":
          caption = "Efficiency is the cornerstone of modern scaling. Automated marketing pipelines ensure consistent visibility without manual overhead. 📈📊";
          break;
        case "Funny 😂":
          caption = "Our scheduling bot is working hard underwater so you don't have to drown in tasks. 🤿🤖";
          break;
        case "Personal 💭":
          caption = "I wanted to build something that solves the real friction points of creator pipelines. Here is Mediamation. 💭✨";
          break;
        case "Joy 🌼":
          caption = "Nothing brings more joy than seeing your queue automatically publishing at the absolute perfect hours! 🌼✨";
          break;
        case "Advertisement 📢":
          caption = "Stop wasting hours on manual scheduling. Automate your posts with Mediamation today for free! 📢🚀";
          break;
        case "Marketing 🎯":
          caption = "Maximize your organic reach. Mediamation schedules your content across networks in seconds. 🎯📈";
          break;
        default:
          caption = "Work smarter, not harder. Automation lets you focus on building features while Mediamation schedules the marketing. 🤖✨";
      }
      setAiGeneratedText(caption);
    }, 1000);
  };

  const steps = [
    {
      num: "01",
      title: "Connect social accounts",
      desc: "Connect your Facebook, Instagram, Pinterest, Tumblr, or LinkedIn accounts from the Dashboard tab.",
      icon: <FiPlus />
    },
    {
      num: "02",
      title: "Select accounts & upload media",
      desc: "Go to the Schedule page, select your target accounts, and upload your images or videos.",
      icon: <FiUpload />
    },
    {
      num: "03",
      title: "Select tone & generate AI caption",
      desc: "Select a tone and click '+ AI Write' to let our vision model instantly generate a tailored caption.",
      icon: <FiCpu />
    },
    {
      num: "04",
      title: "Choose date & time",
      desc: "Click on the calendar button, select your desired date and time, and click the 'Schedule' button.",
      icon: <FiCalendar />
    },
    {
      num: "05",
      title: "Autopilot publishing",
      desc: "Relax as Mediamation automatically publishes your queued posts on schedule and logs network results.",
      icon: <FiSend />
    }
  ];


  // Shared layout wrapper to mimic the real application dashboard chrome
  const renderDashboardLayout = (activeTab, children) => {
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
                const isActive = activeTab === item.id;
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
            <FiLogOut className="w-3 h-3 text-slate-500 hover:text-slate-350 cursor-pointer flex-shrink-0 ml-1" />
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 bg-[#090d16]/30 overflow-y-auto max-h-[380px] scrollbar-none relative">
          {children}
        </div>
      </div>
    );
  };

  // Visual content corresponding to each active step
  const renderVisualMockup = () => {
    switch(activeStep) {
      case 0:
        return renderDashboardLayout('dashboard', (
          <div className="p-5 flex flex-col justify-between h-full min-h-[380px] text-left">
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs border-b border-white/5 pb-2">
                <span className="text-slate-350 font-semibold">Connected Accounts</span>
                <div className="flex bg-slate-900 border border-white/5 rounded-lg p-0.5 text-[9px] font-bold text-slate-400">
                  <button 
                    type="button"
                    onClick={(e) => { e.preventDefault(); setShowConnected(false); }}
                    className={`px-2 py-0.5 rounded transition-colors ${!showConnected ? 'bg-brand-indigo text-white font-semibold' : 'hover:text-white'}`}
                  >
                    Before
                  </button>
                  <button 
                    type="button"
                    onClick={(e) => { e.preventDefault(); setShowConnected(true); }}
                    className={`px-2 py-0.5 rounded transition-colors ${showConnected ? 'bg-brand-indigo text-white font-semibold' : 'hover:text-white'}`}
                  >
                    After
                  </button>
                </div>
              </div>

              {!showConnected ? (
                <div className="space-y-4">
                  {/* Empty state box */}
                  <div className="rounded-xl border border-white/5 bg-[#090d16]/30 p-5 text-center">
                    <span className="text-[10px] text-slate-400 font-medium">No accounts connected</span>
                  </div>
                  {/* Connection Buttons */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <button className="px-2.5 py-1.5 rounded bg-[#5850ec] text-[9px] font-semibold text-white pointer-events-none">+ Connect Facebook</button>
                    <button className="px-2.5 py-1.5 rounded bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 text-[9px] font-semibold text-white pointer-events-none">+ Connect Instagram</button>
                    <button className="px-2.5 py-1.5 rounded bg-[#cc0000] text-[9px] font-semibold text-white pointer-events-none">+ Connect Pinterest</button>
                    <button className="px-2.5 py-1.5 rounded bg-[#35465d] text-[9px] font-semibold text-white pointer-events-none">+ Connect Tumblr</button>
                    <button className="px-2.5 py-1.5 rounded bg-[#0077b5] text-[9px] font-semibold text-white pointer-events-none">+ Connect LinkedIn</button>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/60 border border-white/5">
                    <div className="flex items-center space-x-2.5 text-[11px] text-slate-200">
                      <span className="px-1.5 py-0.5 text-[8px] uppercase font-mono font-bold rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">Facebook</span>
                      <span className="font-semibold">Tarasaka</span>
                    </div>
                    <span className="text-[9px] text-red-400 font-bold border border-red-500/20 bg-red-950/20 px-2 py-0.5 rounded cursor-not-allowed">Disconnect</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/60 border border-white/5">
                    <div className="flex items-center space-x-2.5 text-[11px] text-slate-200">
                      <span className="px-1.5 py-0.5 text-[8px] uppercase font-mono font-bold rounded bg-pink-500/10 text-pink-400 border border-pink-500/20">Instagram</span>
                      <span className="font-semibold">Tarasaka (Instagram)</span>
                    </div>
                    <span className="text-[9px] text-red-400 font-bold border border-red-500/20 bg-red-950/20 px-2 py-0.5 rounded cursor-not-allowed">Disconnect</span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    <button className="px-2.5 py-1.5 rounded bg-[#5850ec] text-[9px] font-semibold text-white opacity-40 pointer-events-none">+ Connect Facebook</button>
                    <button className="px-2.5 py-1.5 rounded bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 text-[9px] font-semibold text-white opacity-40 pointer-events-none">+ Connect Instagram</button>
                    <button className="px-2.5 py-1.5 rounded bg-[#cc0000] text-[9px] font-semibold text-white pointer-events-none">+ Connect Pinterest</button>
                    <button className="px-2.5 py-1.5 rounded bg-[#35465d] text-[9px] font-semibold text-white pointer-events-none">+ Connect Tumblr</button>
                    <button className="px-2.5 py-1.5 rounded bg-[#0077b5] text-[9px] font-semibold text-white pointer-events-none">+ Connect LinkedIn</button>
                  </div>
                </div>
              )}
            </div>
            
            <a href="#" onClick={(e) => e.preventDefault()} className="inline-block text-[9px] text-slate-400 hover:text-slate-350 underline transition-colors pt-2">
              Need help connecting Instagram?
            </a>
          </div>
        ));
      case 1:
        return renderDashboardLayout('schedule', (
          <div className="grid grid-cols-12 h-full min-h-[380px] divide-x divide-white/5">
            {/* Middle Column - Composer Form */}
            <div className="col-span-8 p-4 space-y-3.5 text-left overflow-y-auto max-h-[380px] scrollbar-none">
              <div className="border-b border-white/5 pb-2">
                <span className="text-slate-350 font-bold text-xs">Schedule New Post</span>
              </div>
              
              {/* Account Selector */}
              <div className="space-y-1.5">
                <label className="text-[8px] font-bold text-slate-400 uppercase tracking-wider block">
                  Select Accounts to Post To
                </label>
                <div className="flex gap-2">
                  <button 
                    type="button"
                    onClick={() => { setFacebookChecked(true); setInstagramChecked(true); }}
                    className="text-[7px] font-bold text-slate-400 bg-slate-900 border border-white/5 hover:border-white/10 hover:text-white px-1.5 py-0.5 rounded cursor-pointer transition-colors"
                  >
                    Select All
                  </button>
                  <button 
                    type="button"
                    onClick={() => { setFacebookChecked(false); setInstagramChecked(false); }}
                    className="text-[7px] font-bold text-slate-400 bg-slate-900 border border-white/5 hover:border-white/10 hover:text-white px-1.5 py-0.5 rounded cursor-pointer transition-colors"
                  >
                    Clear All
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div 
                    className={`flex items-center space-x-2 p-1.5 rounded-lg border transition-colors select-none ${
                      facebookChecked ? 'bg-brand-indigo/10 border-brand-indigo/35 text-white' : 'bg-slate-900/60 border-white/5 text-slate-400 hover:border-white/10'
                    } cursor-pointer`}
                    onClick={() => setFacebookChecked(!facebookChecked)}
                  >
                    <input type="checkbox" checked={facebookChecked} readOnly className="rounded border-white/10 w-2.5 h-2.5 text-brand-indigo focus:ring-0 bg-transparent" />
                    <div className="flex flex-col min-w-0">
                      <span className="px-1 py-0.2 text-[6px] uppercase font-mono font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded self-start leading-none">Facebook</span>
                      <span className="text-[8px] font-semibold mt-0.5 leading-none truncate">Tarasaka</span>
                    </div>
                  </div>

                  <div 
                    className={`flex items-center space-x-2 p-1.5 rounded-lg border transition-colors select-none ${
                      instagramChecked ? 'bg-brand-indigo/10 border-brand-indigo/35 text-white' : 'bg-slate-900/60 border-white/5 text-slate-400 hover:border-white/10'
                    } cursor-pointer`}
                    onClick={() => setInstagramChecked(!instagramChecked)}
                  >
                    <input type="checkbox" checked={instagramChecked} readOnly className="rounded border-white/10 w-2.5 h-2.5 text-brand-indigo focus:ring-0 bg-transparent" />
                    <div className="flex flex-col min-w-0">
                      <span className="px-1 py-0.2 text-[6px] uppercase font-mono font-bold bg-pink-500/10 text-pink-400 border border-pink-500/20 rounded self-start leading-none">Instagram</span>
                      <span className="text-[8px] font-semibold mt-0.5 leading-none truncate">Tarasaka (Instagra...</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Media Upload and Preview */}
              <div className="space-y-1.5 border border-dashed border-white/10 bg-slate-900/30 p-2.5 rounded-xl">
                <label className="text-[8px] font-bold text-slate-400 uppercase tracking-wider block">
                  Media Upload (Carousel Support)
                </label>
                <div className="flex items-center space-x-2">
                  <button type="button" className="px-2 py-0.5 bg-slate-900 border border-white/15 text-white text-[8px] font-semibold rounded cursor-pointer hover:bg-slate-800 transition-colors">Choose Files</button>
                  <span className="text-[8px] text-slate-500">No file chosen</span>
                </div>
                
                <div className="pt-1">
                  <span className="text-[7px] text-slate-500 block mb-1">Carousel Preview (Reorder sequence using arrows):</span>
                  <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-white/10 bg-slate-900 flex items-center justify-center">
                    <span className="absolute top-1 left-1 bg-brand-indigo text-white text-[6px] font-bold w-2.5 h-2.5 rounded-full flex items-center justify-center">1</span>
                    {/* Grayscale underwater character placeholder mimicking the screenshot */}
                    <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=80&q=80')`, filter: 'grayscale(1) brightness(0.6)' }} />
                  </div>
                </div>
              </div>

              {/* Post Content */}
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <label className="text-[8px] font-bold text-slate-400 uppercase tracking-wider block">Post Content</label>
                  <div className="flex items-center space-x-1">
                    <span className="px-1 py-0.5 bg-slate-900 border border-white/5 rounded text-[7px] text-slate-400">Attractive ✨</span>
                    <span className="px-1 py-0.5 bg-brand-purple text-white rounded text-[7px] font-bold flex items-center cursor-pointer hover:bg-brand-purple/90 transition-colors">+ AI Write</span>
                  </div>
                </div>
                <textarea placeholder="Post content" className="w-full h-9 bg-slate-900/60 border border-white/5 rounded-lg p-1.5 text-[8px] text-slate-350 resize-none pointer-events-none" readOnly />
              </div>

              {/* Date time & button */}
              <div className="flex items-center space-x-2 pt-0.5">
                <div className="relative flex-1">
                  <input type="text" value="dd-mm-yyyy --:--" className="w-full bg-slate-900/60 border border-white/5 rounded-lg p-1.5 text-[8px] text-slate-500 pointer-events-none font-mono" readOnly />
                  <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-500 text-[8px]">📅</span>
                </div>
                <button type="button" className="px-3 py-1.5 bg-brand-indigo text-white text-[8px] font-bold rounded-lg cursor-pointer hover:bg-brand-indigo/90 transition-colors">Schedule</button>
              </div>
            </div>

            {/* Right Column - Scheduled Posts list */}
            <div className="col-span-4 p-4 text-left overflow-y-auto max-h-[380px] scrollbar-none">
              <span className="text-slate-350 font-bold text-xs block border-b border-white/5 pb-2">Scheduled Posts</span>
              <div className="mt-6 flex flex-col items-center justify-center p-4 border border-dashed border-white/5 bg-slate-900/10 rounded-xl">
                <span className="text-[8px] text-slate-500 font-medium">No posts yet</span>
              </div>
            </div>
          </div>
        ));
      case 2:
        return renderDashboardLayout('schedule', (
          <div className="grid grid-cols-12 h-full min-h-[380px] divide-x divide-white/5">
            {/* Middle Column - Composer Form */}
            <div className="col-span-8 p-4 space-y-3.5 text-left overflow-y-auto max-h-[380px] scrollbar-none relative">
              <div className="border-b border-white/5 pb-2">
                <span className="text-slate-350 font-bold text-xs">Schedule New Post</span>
              </div>
              
              {/* Account Selector */}
              <div className="space-y-1.5 opacity-60">
                <label className="text-[8px] font-bold text-slate-400 uppercase tracking-wider block">
                  Select Accounts to Post To
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center space-x-2 p-1.5 rounded-lg border bg-brand-indigo/10 border-brand-indigo/35 text-white">
                    <input type="checkbox" checked={true} readOnly className="rounded border-white/10 w-2.5 h-2.5 text-brand-indigo focus:ring-0 bg-transparent" />
                    <div className="flex flex-col min-w-0">
                      <span className="px-1 py-0.2 text-[6px] uppercase font-mono font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded self-start leading-none">Facebook</span>
                      <span className="text-[8px] font-semibold mt-0.5 leading-none truncate">Tarasaka</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 p-1.5 rounded-lg border bg-slate-900/60 border-white/5 text-slate-400">
                    <input type="checkbox" checked={false} readOnly className="rounded border-white/10 w-2.5 h-2.5 text-brand-indigo focus:ring-0 bg-transparent" />
                    <div className="flex flex-col min-w-0">
                      <span className="px-1 py-0.2 text-[6px] uppercase font-mono font-bold bg-pink-500/10 text-pink-400 border border-pink-500/20 rounded self-start leading-none">Instagram</span>
                      <span className="text-[8px] font-semibold mt-0.5 leading-none truncate">Tarasaka (Instagra...</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Media Upload and Preview */}
              <div className="space-y-1.5 border border-dashed border-white/10 bg-slate-900/30 p-2.5 rounded-xl opacity-60">
                <label className="text-[8px] font-bold text-slate-400 uppercase tracking-wider block">
                  Media Upload (Carousel Support)
                </label>
                <div className="flex items-center space-x-2">
                  <button type="button" className="px-2 py-0.5 bg-slate-900 border border-white/15 text-white text-[8px] font-semibold rounded pointer-events-none">Choose Files</button>
                  <span className="text-[8px] text-slate-500">No file chosen</span>
                </div>
                <div className="pt-1">
                  <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-white/10 bg-slate-900 flex items-center justify-center">
                    <span className="absolute top-1 left-1 bg-brand-indigo text-white text-[6px] font-bold w-2.5 h-2.5 rounded-full flex items-center justify-center">1</span>
                    <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=80&q=80')`, filter: 'grayscale(1) brightness(0.6)' }} />
                  </div>
                </div>
              </div>

              {/* Post Content with Dynamic Tone Selector */}
              <div className="space-y-1 relative z-20">
                <div className="flex items-center justify-between">
                  <label className="text-[8px] font-bold text-slate-400 uppercase tracking-wider block">Post Content</label>
                  <div className="flex items-center space-x-1.5 relative">
                    {/* Expanded Tone Dropdown Overlay */}
                    <div className="relative">
                      <button 
                        type="button"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="px-1.5 py-0.5 bg-slate-900 border border-white/5 rounded text-[7px] text-slate-400 flex items-center space-x-1 cursor-pointer hover:bg-slate-800"
                      >
                        <span>{selectedTone}</span>
                        <span className="text-[5px]">▼</span>
                      </button>
                      
                      {dropdownOpen && (
                        <div className="absolute right-0 top-full mt-1 w-[120px] bg-[#0f1422] border border-white/10 rounded-lg shadow-xl z-50 overflow-hidden flex flex-col py-0.5">
                          {[
                            "Attractive ✨",
                            "Professional 📈",
                            "Funny 😂",
                            "Personal 💭",
                            "Joy 🌼",
                            "Advertisement 📢",
                            "Marketing 🎯"
                          ].map((tone) => (
                            <button
                              key={tone}
                              type="button"
                              onClick={() => {
                                setSelectedTone(tone);
                                setDropdownOpen(false);
                              }}
                              className={`px-2 py-1 text-left text-[7px] leading-tight transition-colors ${
                                selectedTone === tone 
                                  ? 'bg-brand-indigo text-white font-semibold' 
                                  : 'text-slate-300 hover:bg-white/5 hover:text-white'
                              }`}
                            >
                              {tone}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                    
                    <button
                      type="button"
                      onClick={handleAiWrite}
                      disabled={isGenerating}
                      className={`px-1.5 py-0.5 rounded text-[7px] font-bold flex items-center transition-colors ${
                        isGenerating
                          ? 'bg-brand-purple/55 text-white/50 cursor-not-allowed'
                          : 'bg-brand-purple text-white cursor-pointer hover:bg-brand-purple/95'
                      }`}
                    >
                      {isGenerating ? 'Generating...' : '+ AI Write'}
                    </button>
                  </div>
                </div>
                
                <textarea 
                  value={isGenerating ? "Analyzing image keywords and generating caption..." : (aiGeneratedText || "Click '+ AI Write' to generate a caption...")}
                  placeholder="Post content" 
                  className={`w-full h-12 bg-slate-900/60 border rounded-lg p-1.5 text-[8px] resize-none pointer-events-none transition-colors ${
                    isGenerating ? 'border-brand-purple/40 text-slate-400 animate-pulse' : 'border-white/5 text-slate-350'
                  }`}
                  readOnly 
                />
              </div>

              {/* Date time & button */}
              <div className="flex items-center space-x-2 pt-0.5 opacity-60">
                <div className="relative flex-1">
                  <input type="text" value="dd-mm-yyyy --:--" className="w-full bg-slate-900/60 border border-white/5 rounded-lg p-1.5 text-[8px] text-slate-500 pointer-events-none font-mono" readOnly />
                  <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-500 text-[8px]">📅</span>
                </div>
                <button type="button" className="px-3 py-1.5 bg-brand-indigo text-white text-[8px] font-bold rounded-lg pointer-events-none">Schedule</button>
              </div>
            </div>

            {/* Right Column - Vision AI Details */}
            <div className="col-span-4 p-4 text-left overflow-y-auto max-h-[380px] scrollbar-none space-y-4">
              <span className="text-slate-350 font-bold text-xs block border-b border-white/5 pb-2">Vision Engine AI</span>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[8px] font-mono">
                  <span className="text-slate-400">STATUS:</span>
                  <span className={`font-bold ${isGenerating ? 'text-brand-purple animate-pulse' : 'text-green-400'}`}>
                    {isGenerating ? 'SYNTHESIZING' : 'READY'}
                  </span>
                </div>
                <div className="flex items-center justify-between text-[8px] font-mono">
                  <span className="text-slate-400">TONE:</span>
                  <span className="text-brand-cyan font-bold">{selectedTone.split(" ")[0]}</span>
                </div>
                <div className="space-y-1.5">
                  <span className="text-[7px] font-bold text-slate-500 uppercase tracking-wider block">Detected Keywords:</span>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-[7px] text-slate-300">#Productivity</span>
                    <span className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-[7px] text-slate-300">#Automation</span>
                    <span className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-[7px] text-slate-300">#RemoteWork</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ));
      case 3:
        return renderDashboardLayout('schedule', (
          <div className="grid grid-cols-12 h-full min-h-[380px] divide-x divide-white/5 relative">
            {/* Middle Column - Composer Form */}
            <div className="col-span-8 p-4 space-y-3.5 text-left overflow-y-auto max-h-[380px] scrollbar-none relative">
              <div className="border-b border-white/5 pb-2">
                <span className="text-slate-350 font-bold text-xs">Schedule New Post</span>
              </div>
              
              {/* Account Selector (disabled / opacity) */}
              <div className="space-y-1.5 opacity-40">
                <label className="text-[8px] font-bold text-slate-400 uppercase tracking-wider block">
                  Select Accounts to Post To
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center space-x-2 p-1.5 rounded-lg border bg-brand-indigo/10 border-brand-indigo/35 text-white">
                    <input type="checkbox" checked={true} readOnly className="rounded border-white/10 w-2.5 h-2.5 bg-transparent" />
                    <div className="flex flex-col min-w-0">
                      <span className="px-1 py-0.2 text-[6px] uppercase font-mono font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded self-start leading-none">Facebook</span>
                      <span className="text-[8px] font-semibold mt-0.5 leading-none truncate">Tarasaka</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Media Upload and Preview (disabled / opacity) */}
              <div className="space-y-1.5 border border-dashed border-white/10 bg-slate-900/30 p-2.5 rounded-xl opacity-40">
                <label className="text-[8px] font-bold text-slate-400 uppercase tracking-wider block">
                  Media Upload (Carousel Support)
                </label>
                <div className="pt-1">
                  <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-white/10 bg-slate-900 flex items-center justify-center">
                    <span className="absolute top-1 left-1 bg-brand-indigo text-white text-[6px] font-bold w-2.5 h-2.5 rounded-full flex items-center justify-center">1</span>
                    <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=80&q=80')`, filter: 'grayscale(1) brightness(0.6)' }} />
                  </div>
                </div>
              </div>

              {/* Post Content (filled but inactive) */}
              <div className="space-y-1 opacity-40">
                <div className="flex items-center justify-between">
                  <label className="text-[8px] font-bold text-slate-400 uppercase tracking-wider block">Post Content</label>
                  <span className="px-1 py-0.5 bg-slate-900 border border-white/5 rounded text-[7px] text-slate-400">{selectedTone}</span>
                </div>
                <textarea 
                  value={aiGeneratedText || "Dive deep into the extraordinary. The beauty of automation is that it gives you back your most valuable asset: time. 🌊🤖"} 
                  className="w-full h-10 bg-slate-900/60 border border-white/5 rounded-lg p-1.5 text-[8px] text-slate-350 resize-none pointer-events-none" 
                  readOnly 
                />
              </div>

              {/* Date time & button (Target of active interaction) */}
              <div className="flex items-center space-x-2 pt-0.5 relative">
                <div className="relative flex-1">
                  <input type="text" value="dd-mm-yyyy --:--" className="w-full bg-slate-900/60 border border-white/5 rounded-lg p-1.5 text-[8px] text-slate-500 font-mono" readOnly />
                  <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-500 text-[8px]">📅</span>
                </div>
                <button type="button" className="px-3 py-1.5 bg-brand-indigo text-white text-[8px] font-bold rounded-lg pointer-events-none">Schedule</button>
              </div>

              {/* Calendar Picker Popup Overlay exactly matching the user's screenshot */}
              <div className="absolute top-[28px] left-[20px] w-[250px] bg-white text-slate-800 rounded-xl shadow-2xl border border-slate-200 z-50 overflow-hidden flex font-sans animate-fade-in">
                {/* Left Side: Calendar Grid */}
                <div className="p-3 w-[175px]">
                  {/* Calendar Month Header */}
                  <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-slate-100">
                    <div className="flex items-center space-x-1">
                      <span className="text-[9px] font-bold text-slate-800">June, 2026</span>
                      <span className="text-[6px] text-slate-500">▼</span>
                    </div>
                    <div className="flex space-x-1.5">
                      <span className="text-[8px] text-slate-500 cursor-pointer font-bold">↑</span>
                      <span className="text-[8px] text-slate-500 cursor-pointer font-bold">↓</span>
                    </div>
                  </div>

                  {/* Day Names */}
                  <div className="grid grid-cols-7 gap-1 text-[8px] font-bold text-slate-450 text-slate-400 text-center mb-1">
                    <span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span>
                  </div>

                  {/* Days Grid */}
                  <div className="grid grid-cols-7 gap-1 text-[8px] text-center font-semibold">
                    <span className="text-slate-200">31</span>
                    <span className="text-slate-800 hover:bg-slate-50 rounded cursor-pointer">1</span>
                    <span className="text-slate-800 hover:bg-slate-50 rounded cursor-pointer">2</span>
                    <span className="text-slate-800 hover:bg-slate-50 rounded cursor-pointer">3</span>
                    <span className="text-slate-800 hover:bg-slate-50 rounded cursor-pointer">4</span>
                    <span className="text-slate-800 hover:bg-slate-50 rounded cursor-pointer">5</span>
                    <span className="text-slate-800 hover:bg-slate-50 rounded cursor-pointer">6</span>
                    
                    <span className="text-slate-800 hover:bg-slate-50 rounded cursor-pointer">7</span>
                    <span className="text-slate-800 hover:bg-slate-50 rounded cursor-pointer">8</span>
                    <span className="text-slate-800 hover:bg-slate-50 rounded cursor-pointer">9</span>
                    <span className="text-slate-800 hover:bg-slate-50 rounded cursor-pointer">10</span>
                    <span className="text-slate-800 hover:bg-slate-50 rounded cursor-pointer">11</span>
                    <span className="text-slate-800 hover:bg-slate-50 rounded cursor-pointer">12</span>
                    <span className="text-slate-800 hover:bg-slate-50 rounded cursor-pointer">13</span>
                    
                    <span className="text-slate-800 hover:bg-slate-50 rounded cursor-pointer">14</span>
                    <span className="text-slate-800 hover:bg-slate-50 rounded cursor-pointer">15</span>
                    <span className="text-slate-800 hover:bg-slate-50 rounded cursor-pointer">16</span>
                    
                    {/* June 17 Selected (matches your local date in local time) */}
                    <span className="bg-[#1a56db] text-white rounded font-bold border border-[#1a56db] flex items-center justify-center cursor-pointer shadow-sm">17</span>
                    
                    <span className="text-slate-800 hover:bg-slate-50 rounded cursor-pointer">18</span>
                    <span className="text-slate-800 hover:bg-slate-50 rounded cursor-pointer">19</span>
                    <span className="text-slate-800 hover:bg-slate-50 rounded cursor-pointer">20</span>
                    
                    <span className="text-slate-800 hover:bg-slate-50 rounded cursor-pointer">21</span>
                    <span className="text-slate-800 hover:bg-slate-50 rounded cursor-pointer">22</span>
                    <span className="text-slate-800 hover:bg-slate-50 rounded cursor-pointer">23</span>
                    <span className="text-slate-800 hover:bg-slate-50 rounded cursor-pointer">24</span>
                    <span className="text-slate-800 hover:bg-slate-50 rounded cursor-pointer">25</span>
                    <span className="text-slate-800 hover:bg-slate-50 rounded cursor-pointer">26</span>
                    <span className="text-slate-800 hover:bg-slate-50 rounded cursor-pointer">27</span>
                    
                    <span className="text-slate-800 hover:bg-slate-50 rounded cursor-pointer">28</span>
                    <span className="text-slate-800 hover:bg-slate-50 rounded cursor-pointer">29</span>
                    <span className="text-slate-800 hover:bg-slate-50 rounded cursor-pointer">30</span>
                    
                    <span className="text-slate-200">1</span>
                    <span className="text-slate-200">2</span>
                    <span className="text-slate-200">3</span>
                    <span className="text-slate-200">4</span>
                    <span className="text-slate-200">5</span>
                    <span className="text-slate-200">6</span>
                    <span className="text-slate-200">7</span>
                    <span className="text-slate-200">8</span>
                    <span className="text-slate-200">9</span>
                    <span className="text-slate-200">10</span>
                    <span className="text-slate-200">11</span>
                  </div>

                  {/* Calendar Footer Actions */}
                  <div className="flex items-center justify-between mt-3 pt-2 border-t border-slate-100 text-[8px] font-bold">
                    <span className="text-blue-600 hover:underline cursor-pointer">Clear</span>
                    <span className="text-blue-600 hover:underline cursor-pointer font-bold">Today</span>
                  </div>
                </div>

                {/* Right Side: Time Pickers (scrollable columns) */}
                <div className="w-[75px] border-l border-slate-100 flex divide-x divide-slate-50 text-[9px] font-bold text-slate-500 overflow-y-auto max-h-[175px] scrollbar-none">
                  {/* Hours (selected: 16) */}
                  <div className="flex-1 flex flex-col items-center py-1">
                    <span className="w-full text-center py-1 bg-blue-600 text-white font-bold leading-none flex items-center justify-center">16</span>
                    <span className="w-full text-center py-1 hover:bg-slate-50 cursor-pointer">17</span>
                    <span className="w-full text-center py-1 hover:bg-slate-50 cursor-pointer">18</span>
                    <span className="w-full text-center py-1 hover:bg-slate-50 cursor-pointer">19</span>
                    <span className="w-full text-center py-1 hover:bg-slate-50 cursor-pointer">20</span>
                    <span className="w-full text-center py-1 hover:bg-slate-50 cursor-pointer">21</span>
                    <span className="w-full text-center py-1 hover:bg-slate-50 cursor-pointer">22</span>
                  </div>
                  {/* Minutes (selected: 18) */}
                  <div className="flex-1 flex flex-col items-center py-1">
                    <span className="w-full text-center py-1 bg-blue-600 text-white font-bold leading-none flex items-center justify-center">18</span>
                    <span className="w-full text-center py-1 hover:bg-slate-50 cursor-pointer">19</span>
                    <span className="w-full text-center py-1 hover:bg-slate-50 cursor-pointer">20</span>
                    <span className="w-full text-center py-1 hover:bg-slate-50 cursor-pointer">21</span>
                    <span className="w-full text-center py-1 hover:bg-slate-50 cursor-pointer">22</span>
                    <span className="w-full text-center py-1 hover:bg-slate-50 cursor-pointer">23</span>
                    <span className="w-full text-center py-1 hover:bg-slate-50 cursor-pointer">24</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Scheduled Posts list (disabled state / empty) */}
            <div className="col-span-4 p-4 text-left overflow-y-auto max-h-[380px] scrollbar-none opacity-40">
              <span className="text-slate-350 font-bold text-xs block border-b border-white/5 pb-2">Scheduled Posts</span>
              <div className="mt-6 flex flex-col items-center justify-center p-4 border border-dashed border-white/5 bg-slate-900/10 rounded-xl">
                <span className="text-[8px] text-slate-500 font-medium">No posts yet</span>
              </div>
            </div>
          </div>
        ));
      case 4:
        return renderDashboardLayout('history', (
          <div className="p-4 space-y-3.5 text-left h-full min-h-[380px] overflow-y-auto max-h-[380px] scrollbar-none">
            <div className="border-b border-white/5 pb-2 flex items-center justify-between">
              <span className="text-slate-350 font-bold text-xs">Publishing History & Logs</span>
              <span className="px-1.5 py-0.5 rounded bg-green-500/10 text-green-400 border border-green-500/20 text-[7px] font-mono">Autopilot Connected</span>
            </div>
            
            <div className="space-y-2.5 pt-2">
              <div className="p-2.5 rounded-lg bg-[#0e1626]/80 border border-white/5 flex items-center justify-between hover:border-brand-indigo/30 transition-all">
                <div className="flex items-center space-x-2.5 min-w-0">
                  <div className="w-8 h-8 rounded-lg overflow-hidden border border-white/10 bg-slate-950 flex-shrink-0 flex items-center justify-center">
                    <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=80&q=80')`, filter: 'grayscale(1) brightness(0.6)' }} />
                  </div>
                  <div className="min-w-0 leading-tight">
                    <span className="text-[9px] font-semibold text-white block truncate">
                      {aiGeneratedText || '"Dive deep into the extraordinary. The beauty of automation..."'}
                    </span>
                    <span className="text-[7px] text-slate-500">Scheduled for June 17, 2026 • 16:18 (4:18 PM)</span>
                  </div>
                </div>
                <div className="flex items-center space-x-1.5 flex-shrink-0">
                  <span className="px-1.5 py-0.5 rounded bg-brand-indigo/20 text-brand-indigo text-[7px] font-bold border border-brand-indigo/30">Scheduled</span>
                  <span className="text-[8px] text-slate-500 bg-slate-950 px-1.5 py-0.5 rounded cursor-not-allowed">Edit</span>
                </div>
              </div>
            </div>
          </div>
        ));
      default:
        return null;
    }
  };


  return (
    <section id="how-it-works" className="relative py-24 bg-slate-950/20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-display text-base font-semibold text-brand-purple uppercase tracking-wider mb-3">
            Streamlined Execution
          </h2>
          <p className="font-display text-3xl md:text-5xl font-bold text-white tracking-tight leading-none mb-4">
            How Mediamation Works.
          </p>
          <p className="text-slate-400">
            Interactive guide to setting up your posting autopilot. Select steps below to preview what happens in the dashboard.
          </p>
        </div>

        {/* Content Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side Steps list */}
          <div className="lg:col-span-5 space-y-4">
            {steps.map((step, idx) => (
              <div
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer text-left flex items-start space-x-4 ${
                  activeStep === idx 
                    ? 'bg-slate-900 border-brand-indigo/40 shadow-md shadow-brand-indigo/5 translate-x-2' 
                    : 'bg-transparent border-transparent hover:bg-slate-900/40 hover:border-white/5'
                }`}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-semibold transition-colors duration-300 ${
                  activeStep === idx 
                    ? 'bg-brand-indigo text-white' 
                    : 'bg-slate-900 text-slate-400'
                }`}>
                  {step.icon}
                </div>
                <div>
                  <h3 className={`font-display font-semibold text-sm transition-colors ${
                    activeStep === idx ? 'text-white' : 'text-slate-350 text-slate-300'
                  }`}>
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-450 text-slate-400 mt-1 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side Visual Preview mockup */}
          <div className="lg:col-span-7">
            <div className="glow-border rounded-2xl p-0.5 bg-gradient-to-tr from-brand-indigo/10 via-brand-purple/10 to-brand-cyan/10">
              <MockupWindow title={`https://mediamation.in/${['dashboard', 'schedule', 'schedule', 'schedule', 'history'][activeStep]}`}>
                <div className="bg-slate-950/20 h-full min-h-[300px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeStep}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.2 }}
                      className="h-full"
                    >
                      {renderVisualMockup()}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </MockupWindow>
            </div>
            
            {/* Step Counter Indicator */}
            <div className="flex justify-center space-x-1.5 mt-4">
              {steps.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveStep(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeStep === i ? 'w-6 bg-brand-cyan' : 'bg-slate-700'
                  }`}
                  aria-label={`Go to step ${i + 1}`}
                />
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
