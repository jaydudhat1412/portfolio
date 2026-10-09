import React, { useState } from 'react';
import { personalData } from '../data/personal';
import { currentlyLearning } from '../data/skills';
import { Terminal, Copy, Check, Radio, Cpu, BookOpen, MapPin } from 'lucide-react';

export const DeveloperStatus: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <aside className="glow-card rounded-3xl overflow-hidden border border-white/10 bg-[#0e121b]/80 backdrop-blur-xl shadow-2xl">
      {/* Widget Header */}
      <div className="border-b border-white/5 bg-black/40 px-5 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <Terminal size={15} className="text-accent" />
          <span className="font-mono text-xs font-semibold text-white tracking-widest uppercase">
            DEV_STATUS // LIVE
          </span>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono text-emerald-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span>ONLINE</span>
        </div>
      </div>
      
      {/* Widget Body */}
      <div className="p-6 font-mono text-xs space-y-6">
        {/* Current Focus */}
        <div>
          <div className="text-secondary/70 mb-2 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
            <Radio size={13} className="text-accent" />
            <span>ACTIVE FOCUS</span>
          </div>
          <div className="p-3 rounded-xl bg-black/40 border border-white/5 flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse shrink-0" />
            <span className="text-white font-medium text-xs truncate">{personalData.currentFocus}</span>
          </div>
        </div>

        {/* Learning Queue */}
        <div>
          <div className="text-secondary/70 mb-2.5 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
            <BookOpen size={13} className="text-cyan" />
            <span>LEARNING SPRINT</span>
          </div>
          <div className="space-y-2">
            {currentlyLearning.map((item, idx) => (
              <div key={idx} className="p-2.5 rounded-xl bg-black/30 border border-white/5 flex items-center justify-between">
                <span className="text-white/90 truncate mr-2">{item.subject}</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-accent/15 text-accent-light font-semibold shrink-0">
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        {/* System & Academic Info */}
        <div>
          <div className="text-secondary/70 mb-2.5 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
            <Cpu size={13} className="text-amber-400" />
            <span>SYSTEM TELEMETRY</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs p-3 rounded-xl bg-black/40 border border-white/5">
            <div>
              <div className="text-secondary/60 text-[10px]">PROGRAM:</div>
              <div className="text-white font-medium">CE (Honors)</div>
            </div>
            <div>
              <div className="text-secondary/60 text-[10px]">SEMESTER:</div>
              <div className="text-white font-medium">03</div>
            </div>
            <div>
              <div className="text-secondary/60 text-[10px]">LOCATION:</div>
              <div className="text-white font-medium truncate" title={personalData.location}>Ahmedabad</div>
            </div>
            <div>
              <div className="text-secondary/60 text-[10px]">STUDENT ID:</div>
              <div className="text-accent font-medium">VERIFIED</div>
            </div>
          </div>
        </div>

        {/* Quick Email Copy CTA */}
        <div className="pt-2">
          <button
            onClick={handleCopyEmail}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all text-xs font-semibold hover:border-accent/40"
          >
            {copied ? (
              <>
                <Check size={14} className="text-emerald-400" />
                <span className="text-emerald-400">Email Copied to Clipboard</span>
              </>
            ) : (
              <>
                <Copy size={14} className="text-secondary" />
                <span>{personalData.email}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </aside>
  );
};

export default DeveloperStatus;
