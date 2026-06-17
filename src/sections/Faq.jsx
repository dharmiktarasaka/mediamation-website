import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiHelpCircle } from 'react-icons/fi';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "What platforms are supported?",
      a: "Mediamation officially integrates with Instagram, Facebook, LinkedIn, Pinterest, and Tumblr. All connections are built on official API frameworks, ensuring direct, secure publishing without needing third-party hacks or prompt warnings."
    },
    {
      q: "How does AI caption generation work?",
      a: "When you upload an image or short clip, our vision AI analyzes the graphical elements (objects, text, colors, and branding style). The synthesis model then converts these details into engaging, platform-specific copy tailored to your desired tone (witty, formal, or casual)."
    },
    {
      q: "Can I schedule multiple posts?",
      a: "Absolutely! You can schedule unlimited posts. The visual Content Calendar allows you to map out your updates weeks in advance, queue recurring schedules, and schedule for peak engagement hours, completely free."
    },
    {
      q: "Can I customize captions?",
      a: "Yes. Write a base concept once, then fine-tune copy separately for each social channel. You can trim copy lengths, customize mentions, select specific hashtags, and add distinct landing page URLs for LinkedIn, Instagram, or Pinterest separately."
    },
    {
      q: "Is Mediamation suitable for agencies?",
      a: "Yes, the platform was built to support teams, agencies, and creators alike. It supports multiple social channels, connected workspaces, CSV history log filtering, custom AI tone prompts, and scheduled post logs, with no artificial limits or premium paywalls."
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 bg-slate-950/20 border-t border-white/5">
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[350px] h-[350px] bg-brand-cyan/5 blur-[90px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-base font-semibold text-brand-purple uppercase tracking-wider mb-3">
            Got Questions?
          </h2>
          <p className="font-display text-3xl md:text-5xl font-bold text-white tracking-tight leading-none mb-4">
            Frequently Asked Questions.
          </p>
          <p className="text-slate-400">
            Everything you need to know about setting up social automation accounts.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="glass-panel rounded-xl overflow-hidden transition-all duration-300 border-white/5 hover:border-brand-purple/20"
              >
                {/* Accordion Trigger Button */}
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 text-left flex items-center justify-between font-display font-semibold text-sm md:text-base text-slate-100 hover:text-white transition-colors"
                >
                  <div className="flex items-center space-x-3.5 pr-4">
                    <FiHelpCircle className="text-brand-purple text-lg shrink-0" />
                    <span>{faq.q}</span>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-slate-400 shrink-0"
                  >
                    <FiChevronDown />
                  </motion.div>
                </button>

                {/* Collapsible Answer Pane */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-5 text-xs md:text-sm text-slate-400 leading-relaxed border-t border-white/5 pt-4 bg-slate-950/20">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
