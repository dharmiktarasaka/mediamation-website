import React from 'react';
import { motion } from 'framer-motion';
import { FiUploadCloud, FiCpu, FiCalendar, FiSend, FiPlus } from 'react-icons/fi';

export default function Solution() {
  const steps = [
    {
      num: "01",
      icon: <FiUploadCloud className="text-xl" />,
      title: "Upload Media",
      description: "Drop your creative assets — photos, graphics, or videos. Supported up to 4K resolution.",
      color: "from-blue-500 to-indigo-500",
      glow: "shadow-blue-500/20"
    },
    {
      num: "02",
      icon: <FiCpu className="text-xl" />,
      title: "AI Caption Synthesis",
      description: "Our vision model analyzes your asset and outputs tone-optimized copy variations instantly.",
      color: "from-brand-purple to-purple-600",
      glow: "shadow-brand-purple/20"
    },
    {
      num: "03",
      icon: <FiCalendar className="text-xl" />,
      title: "Schedule Calendars",
      description: "Queue the publishing slot or assign specific dates on the content calendar drag interface.",
      color: "from-brand-cyan to-blue-500",
      glow: "shadow-brand-cyan/20"
    },
    {
      num: "04",
      icon: <FiSend className="text-xl" />,
      title: "Auto Publish",
      description: "Mediamation publishes automatically to Instagram, LinkedIn, and more without push prompts.",
      color: "from-brand-fuchsia to-pink-500",
      glow: "shadow-brand-fuchsia/20"
    }
  ];

  return (
    <section id="workflow" className="relative py-24 overflow-hidden radial-gradient-blue">
      {/* Background blobs */}
      <div className="absolute bottom-1/4 right-10 w-[300px] h-[300px] bg-brand-cyan/5 blur-[90px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-display text-base font-semibold text-brand-cyan uppercase tracking-wider mb-3">
            The Mediamation Engine
          </h2>
          <p className="font-display text-3xl md:text-5xl font-bold text-white tracking-tight leading-none mb-4">
            Four Steps to Full Autopilot.
          </p>
          <p className="text-slate-400">
            Say goodbye to logging into multiple websites. Import your files once, and let Mediamation format, optimize, and distribute your content.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative">
          
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-brand-cyan via-brand-purple to-brand-fuchsia -translate-y-1/2 opacity-20 pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6 relative">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Step Connector Indicator (Mobile) */}
                {idx < 3 && (
                  <div className="lg:hidden absolute bottom-[-40px] left-1/2 -translate-x-1/2 z-0">
                    <FiPlus className="text-slate-700 text-xl animate-pulse" />
                  </div>
                )}

                {/* Main Glowing Circle */}
                <div className={`w-20 h-20 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center relative z-10 shadow-lg ${step.glow} group-hover:scale-105 transition-all duration-300`}>
                  {/* Outer Pulsing Glow */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-brand-indigo via-brand-purple to-brand-cyan opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-md" />
                  
                  {/* Ring Indicator */}
                  <div className="absolute inset-px rounded-full bg-[#090d16] flex items-center justify-center">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-tr ${step.color} text-white flex items-center justify-center font-bold shadow-md`}>
                      {step.icon}
                    </div>
                  </div>
                </div>

                {/* Step Index Tag */}
                <span className="text-xs font-mono font-bold text-slate-500 mt-6 mb-2">
                  STAGE {step.num}
                </span>

                {/* Step Details */}
                <h3 className="font-display font-bold text-xl text-white mb-2 group-hover:text-brand-cyan transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-400 px-4 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
