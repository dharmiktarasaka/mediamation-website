import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import logoImg from '../assets/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScrollListener = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScrollListener);
    return () => window.removeEventListener('scroll', handleScrollListener);
  }, []);

  const handleScrollToSection = (e) => {
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const links = [
    { name: 'home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'Workflow', href: '#workflow' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Platforms', href: '#platforms' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
      ? 'py-4 bg-[#030712]/85 border-b border-white/5 backdrop-blur-md shadow-lg shadow-black/20'
      : 'py-6 bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2 group">
            <img
              src={logoImg}
              alt="Mediamation logo"
              className="h-10 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleScrollToSection}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200 capitalize"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://mediamation.tarasaka.com/"
              className="relative group inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xs font-semibold text-white rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-800"
            >
              <span className="relative px-4 py-2 transition-all ease-in duration-75 bg-[#030712] rounded-md group-hover:bg-opacity-0">
                Get Started Free
              </span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-400 hover:text-white p-2"
              aria-label="Toggle Menu"
            >
              {isOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/5 bg-[#030712] overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4 flex flex-col">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    setIsOpen(false);
                    handleScrollToSection(e);
                  }}
                  className="text-base font-medium text-slate-300 hover:text-white capitalize"
                >
                  {link.name}
                </a>
              ))}
              <div className="h-px bg-white/5 my-4" />
              <div className="flex flex-col space-y-3 pt-2">
                <a
                  href="https://echoreal.in/login"
                  onClick={() => setIsOpen(false)}
                  className="text-center text-sm font-medium text-slate-300 hover:text-white py-2"
                >
                  Sign In
                </a>
                <a
                  href="https://echoreal.in/"
                  onClick={() => setIsOpen(false)}
                  className="text-center px-4 py-2.5 rounded-lg bg-gradient-to-r from-brand-indigo to-brand-purple text-white font-medium text-sm shadow-lg shadow-brand-indigo/25 hover:shadow-brand-indigo/35 transition-all duration-300"
                >
                  Get Started Free
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
