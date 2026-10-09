import React from 'react';
import { journeyData } from '../data/journey';
import { GraduationCap, BookOpen, Sparkles } from 'lucide-react';

export const Journey: React.FC = () => {
  return (
    <section id="journey" className="scroll-mt-24 py-8">
      <div className="flex items-center gap-3 mb-8">
        <GraduationCap className="text-accent" size={24} />
        <h2 className="text-2xl sm:text-3xl font-black text-white font-display">
          Academic Journey & Milestones
        </h2>
      </div>
      
      <div className="space-y-6 relative before:absolute before:inset-0 before:left-3 md:before:left-4 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-accent before:via-white/10 before:to-transparent">
        {journeyData.map((step, idx) => (
          <div key={idx} className="relative flex items-start gap-4 md:gap-6 group">
            {/* Timeline Node Dot */}
            <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center shrink-0 z-10 transition-all ${
              step.current 
                ? 'bg-accent border-white shadow-[0_0_12px_rgba(99,102,241,0.6)] scale-110' 
                : 'bg-[#0e121b] border-white/20 group-hover:border-accent group-hover:scale-105'
            }`}>
              {step.current ? (
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              ) : (
                <span className="w-1.5 h-1.5 rounded-full bg-secondary/60" />
              )}
            </div>
            
            {/* Timeline Card Content */}
            <div className="flex-1 glow-card p-5 sm:p-6 rounded-2xl border border-white/10 bg-[#0e121b]/80 backdrop-blur-md">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <span className={`font-mono text-xs font-bold px-2.5 py-0.5 rounded-md ${
                    step.current 
                      ? 'bg-accent/20 border border-accent/40 text-accent-light' 
                      : 'bg-white/5 border border-white/10 text-secondary'
                  }`}>
                    {step.semester}
                  </span>
                  <span className="font-mono text-xs text-secondary/60">
                    {step.year}
                  </span>
                </div>
                <span className="text-xs text-secondary/70 italic">
                  {step.institution}
                </span>
              </div>

              <h3 className="font-bold text-white text-base sm:text-lg mb-2 group-hover:text-accent transition-colors font-display">
                {step.title}
              </h3>

              <p className="text-xs sm:text-sm text-secondary leading-relaxed mb-4">
                {step.description}
              </p>

              {/* Course Chips */}
              {step.courses && step.courses.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                  {step.courses.map((course, cIdx) => (
                    <span 
                      key={cIdx} 
                      className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-white/5 text-secondary border border-white/5 hover:text-white transition-colors"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Journey;
