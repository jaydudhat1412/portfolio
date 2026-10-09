import React, { useState } from 'react';
import { personalData } from '../data/personal';
import { currentlyLearning } from '../data/skills';
import { Terminal, Copy, Check, Radio, Cpu, BookOpen, Sparkles } from 'lucide-react';

export const DeveloperStatus: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <aside className="glow-card rounded-2xl overflow-hidden border border-white/10 bg-[#0c101a]/90 backdrop-blur-xl shadow-xl transition-all">
      {/* Widget Header */}
      <div className="border-b border-white/5 bg-black/40 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Terminal size={14} className="text-accent" />
          <span className="font-mono text-xs font-semibold text-white tracking-wider">
            DEV_STATUS // LIVE
          </span>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono text-emerald-400 font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>ONLINE</span>
        </div>
      </div>
      
      {/* Widget Body */}
      <div className="p-4 sm:p-5 font-mono text-xs space-y-4">
        {/* Active Focus */}
        <div>
          <div className="text-secondary/70 mb-1.5 uppercase tracking-wider text-[10px] flex items-center gap-1.5 font-semibold">
            <Radio size={12} className="text-accent" />
            <span>Active Semester 3 Focus</span>
          </div>
          <div className="p-2.5 rounded-xl bg-accent/5 border border-accent/20 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse shrink-0" />
            <span className="text-white text-xs font-medium">
              HTML, CSS, Bootstrap, JavaScript & Python
            </span>
          </div>
        </div>

        {/* Current Learning Sprint (Clean 2-Column Grid) */}
        <div>
          <div className="text-secondary/70 mb-1.5 uppercase tracking-wider text-[10px] flex items-center gap-1.5 font-semibold">
            <BookOpen size={12} className="text-cyan" />
            <span>Learning Sprint</span>
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            {currentlyLearning.map((item, idx) => (
              <div 
                key={idx} 
                className="p-2 rounded-lg bg-black/30 border border-white/5 flex items-center justify-between gap-1 text-[11px]"
              >
                <span className="text-white/90 truncate">{item.subject}</span>
                <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-accent/15 text-accent-light shrink-0">
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Telemetry / Academic Quick Specs */}
        <div>
          <div className="text-secondary/70 mb-1.5 uppercase tracking-wider text-[10px] flex items-center gap-1.5 font-semibold">
            <Cpu size={12} className="text-amber-400" />
            <span>Academic Telemetry</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-[11px] p-2.5 rounded-xl bg-black/40 border border-white/5">
            <div>
              <span className="text-secondary/60 text-[9px] block">PROGRAM</span>
              <span className="text-white font-medium">B.E. Computer Eng.</span>
            </div>
            <div>
              <span className="text-secondary/60 text-[9px] block">SEMESTER</span>
              <span className="text-accent-light font-medium">Semester 03</span>
            </div>
            <div>
              <span className="text-secondary/60 text-[9px] block">LOCATION</span>
              <span className="text-white font-medium truncate block">Ahmedabad, Gujarat</span>
            </div>
            <div>
              <span className="text-secondary/60 text-[9px] block">COMPLETED</span>
              <span className="text-emerald-400 font-medium">Java & DBMS</span>
            </div>
          </div>
        </div>

        {/* Quick Email Copy CTA */}
        <div className="pt-1">
          <button
            onClick={handleCopyEmail}
            className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-white/5 hover:bg-accent/20 border border-white/10 hover:border-accent/40 text-white transition-all text-xs font-mono font-medium"
          >
            {copied ? (
              <>
                <Check size={13} className="text-emerald-400" />
                <span className="text-emerald-400">Email Copied!</span>
              </>
            ) : (
              <>
                <Copy size={13} className="text-secondary" />
                <span className="truncate">{personalData.email}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </aside>
  );
};

export default DeveloperStatus;
