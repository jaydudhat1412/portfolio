import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillsData, currentlyLearning } from '../data/skills';
import { 
  Code2, 
  Database, 
  Terminal, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  TrendingUp, 
  Flame
} from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'frontend' | 'backend' | 'database' | 'tools'>('all');

  const filteredCategories = activeTab === 'all'
    ? skillsData
    : skillsData.filter((cat) => cat.categoryKey === activeTab);

  const getCategoryIcon = (key: string) => {
    switch (key) {
      case 'frontend':
        return <Layers className="text-cyan" size={20} />;
      case 'backend':
        return <Code2 className="text-accent" size={20} />;
      case 'database':
        return <Database className="text-amber-400" size={20} />;
      case 'tools':
      default:
        return <Terminal className="text-emerald-400" size={20} />;
    }
  };

  return (
    <section id="skills" className="scroll-mt-24 py-12 relative z-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-white/10">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-widest text-cyan font-semibold">
              TECHNICAL COMPETENCIES
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-display">
            Technical Arsenal
          </h2>
          <p className="text-secondary text-sm sm:text-base mt-2 max-w-xl">
            A comprehensive breakdown of engineering languages, libraries, databases, and architectural concepts mastered and actively deployed.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center gap-2">
          {[
            { id: 'all', label: 'All Domains' },
            { id: 'frontend', label: 'Frontend' },
            { id: 'backend', label: 'Backend & Java' },
            { id: 'database', label: 'Databases' },
            { id: 'tools', label: 'Dev Tools' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all border ${
                activeTab === tab.id
                  ? 'bg-accent/20 border-accent text-white shadow-[0_0_12px_rgba(99,102,241,0.3)]'
                  : 'bg-black/30 border-white/5 text-secondary hover:text-white hover:border-white/20'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <AnimatePresence mode="popLayout">
          {filteredCategories.map((category) => (
            <motion.div
              key={category.categoryKey}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="glow-card rounded-3xl p-6 sm:p-8 border border-white/10 bg-[#0e121b]/80 backdrop-blur-xl relative overflow-hidden flex flex-col justify-start h-full"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-white/5 shrink-0">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  {getCategoryIcon(category.categoryKey)}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-display">
                    {category.title}
                  </h3>
                  <span className="text-xs text-secondary/70 font-mono">
                    {category.skills.length} core proficiencies
                  </span>
                </div>
              </div>

              {/* Skill Items List */}
              <div className="space-y-5">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="group">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm font-semibold text-white group-hover:text-accent transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-xs font-mono text-secondary/70 px-2 py-0.5 rounded bg-white/5 border border-white/5">
                        {skill.level}
                      </span>
                    </div>

                    <p className="text-xs text-secondary/80 leading-relaxed mb-2">
                      {skill.description}
                    </p>

                    {/* Progress Bar Indicator */}
                    <div className="w-full h-1.5 rounded-full bg-white/5 overflow-hidden mb-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: sIdx * 0.05 }}
                        className="h-full rounded-full bg-gradient-to-r from-accent to-cyan"
                      />
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {skill.tags.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded text-[10px] font-mono text-secondary/70 bg-black/40 border border-white/5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* "Active Engineering Focus" Live Banner */}
      <div className="glow-card rounded-2xl p-6 sm:p-7 border border-white/10 bg-gradient-to-r from-[#0c101a] via-[#101424] to-[#0c101a]">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-accent/10 border border-accent/20 text-accent">
              <Flame size={20} />
            </div>
            <div>
              <h4 className="text-base font-bold text-white font-display">
                Current Semester 3 Sprint & Focus Areas
              </h4>
              <p className="text-xs text-secondary">
                Actively learning, practicing algorithms, and shipping real projects weekly.
              </p>
            </div>
          </div>
          <span className="text-xs font-mono text-emerald-400 font-semibold px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 w-fit">
            ● Active Daily Coding
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {currentlyLearning.map((item, idx) => (
            <div key={idx} className="p-3.5 rounded-xl bg-black/30 border border-white/5 space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white truncate">{item.subject}</span>
                <span className="text-[10px] font-mono text-accent font-semibold px-1.5 py-0.2 rounded bg-accent/10">
                  {item.status}
                </span>
              </div>
              <p className="text-[11px] text-secondary/70">{item.focus}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
