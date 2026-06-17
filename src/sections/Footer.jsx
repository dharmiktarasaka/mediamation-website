import React, { useState } from 'react';
import { FiCpu, FiMail, FiSend } from 'react-icons/fi';
import { FaInstagram, FaFacebook, FaLinkedin, FaPinterest, FaTumblr } from 'react-icons/fa';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <footer className="bg-slate-950 border-t border-white/5 pt-16 pb-12 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Top Split Area */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          
          {/* Logo & Intro Area */}
          <div className="md:col-span-4 space-y-4">
            <a href="#" className="flex items-center space-x-2 group">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-brand-indigo via-brand-purple to-brand-cyan flex items-center justify-center">
                <FiCpu className="text-white text-base animate-pulse-slow" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white">
                Mediamation
              </span>
            </a>
            <p className="text-xs text-slate-400 leading-relaxed max-w-xs">
              AI-powered social media automation. Create once, publish everywhere. Auto-generate captions, schedule queues, and monitor results.
            </p>
            <p className="text-[11px] text-slate-500 leading-relaxed max-w-xs">
              Send your recommendations & updates to <a href="https://mail.google.com/mail/?view=cm&fs=1&to=info.tarasaka@gmail.com" target="_blank" rel="noopener noreferrer" className="text-brand-cyan hover:underline transition-all">info.tarasaka@gmail.com</a>
            </p>
            {/* Social Icons */}
            <div className="flex items-center space-x-3.5 pt-2">
              <a href="https://www.instagram.com/tarasaka_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="text-slate-450 hover:text-white transition-colors" aria-label="Instagram"><FaInstagram /></a>
              <a href="https://www.linkedin.com/company/tarasaka/" className="text-slate-450 hover:text-white transition-colors" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="https://www.facebook.com/share/1Cod1i1fHE/?mibextid=wwXIfr" className="text-slate-450 hover:text-white transition-colors" aria-label="Facebook"><FaFacebook /></a>
              <a href="https://in.pinterest.com/tarasakadigital/" className="text-slate-450 hover:text-white transition-colors" aria-label="Pinterest"><FaPinterest /></a>
              <a href="https://www.tumblr.com/tarasaka" className="text-slate-450 hover:text-white transition-colors" aria-label="Tumblr"><FaTumblr /></a>
            </div>
          </div>

          {/* Navigation Links Grid */}
          <div className="md:col-span-4 grid grid-cols-2 gap-8 text-left">
            <div>
              <h4 className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-4">Platform</h4>
              <ul className="space-y-3.5 text-xs text-slate-350 text-slate-300">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#workflow" className="hover:text-white transition-colors">Workflow</a></li>
                <li><a href="#platforms" className="hover:text-white transition-colors">Supported Platforms</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-4">Resources</h4>
              <ul className="space-y-3.5 text-xs text-slate-350 text-slate-300">
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ Support</a></li>
                <li><a href="https://mail.google.com/mail/?view=cm&fs=1&to=info.tarasaka@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Contact Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter Input Area */}
          <div className="md:col-span-4 space-y-4 text-left">
            <h4 className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Subscribe to updates</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Get tips on growing organic engagement and new social API capabilities.
            </p>
            
            <form onSubmit={handleSubmit} className="flex space-x-2">
              <div className="relative flex-1">
                <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-xs" />
                <input
                  type="email"
                  placeholder="Enter email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-900 border border-white/5 rounded-xl py-2.5 pl-9 pr-3 text-xs text-slate-200 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple placeholder:text-slate-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="px-4 py-2.5 bg-brand-purple hover:bg-brand-purple/90 text-white rounded-xl text-xs font-semibold flex items-center justify-center transition-colors"
                aria-label="Submit Newsletter"
              >
                <FiSend />
              </button>
            </form>
            
            {submitted && (
              <span className="text-[10px] text-green-400 font-medium block mt-1 animate-pulse">
                ✓ Successfully subscribed! Check your inbox soon.
              </span>
            )}
          </div>

        </div>

        {/* Bottom copyright segment */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Mediamation Inc. All rights reserved. Built for professional social workflows.
          </div>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="hover:text-slate-450 hover:text-slate-350 transition-colors">Privacy</a>
            <a href="#" className="hover:text-slate-450 hover:text-slate-350 transition-colors">Terms</a>
            <a href="#" className="hover:text-slate-450 hover:text-slate-350 transition-colors">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
