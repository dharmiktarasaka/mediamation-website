import React from 'react';

export default function MockupWindow({ children, className = '', title = 'https://mediamation.in/dashboard' }) {
  return (
    <div className={`glass-panel rounded-2xl overflow-hidden shadow-2xl relative border border-white/5 ${className}`}>
      {/* Top Header Bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-slate-900/60 backdrop-blur-md">
        {/* Browser Window Controls */}
        <div className="flex items-center space-x-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        
        {/* Address Bar */}
        <div className="flex-1 max-w-md mx-4">
          <div className="bg-slate-950/80 border border-white/5 text-[11px] text-slate-400 font-mono py-1 px-4 rounded-lg text-center select-none truncate">
            {title}
          </div>
        </div>

        {/* Action Icon spacer */}
        <div className="flex items-center space-x-1.5 opacity-30">
          <div className="w-3.5 h-1.5 bg-slate-400 rounded-sm" />
          <div className="w-3.5 h-3.5 border-2 border-slate-400 rounded-md" />
        </div>
      </div>
      
      {/* Body Content */}
      <div className="bg-[#090d16]/90 relative overflow-hidden min-h-[300px]">
        {children}
      </div>
    </div>
  );
}
