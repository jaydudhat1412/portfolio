import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillsData, currentlyLearning, SkillItem } from '../data/skills';
import { 
  Code2, 
  Palette, 
  Boxes, 
  Braces, 
  Wind, 
  Terminal, 
  Cpu, 
  Workflow, 
  Database, 
  Layers, 
  Zap, 
  GitBranch, 
  Laptop, 
  Flame,
  Sparkles,
  CheckCircle2,
  BookOpen
} from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'frontend' | 'backend' | 'database' | 'tools'>('all');

  const filteredCategories = activeTab === 'all'
    ? skillsData
    : skillsData.filter((cat) => cat.categoryKey === activeTab);

  // Map each technology to tailored icon, glow, and status visual styling
  const getSkillVisuals = (name: string, level: string) => {
    switch (name) {
      case 'HTML5':
        return {
          icon: <Code2 size={20} />,
          iconBg: 'bg-orange-500/10 border-orange-500/25 text-orange-400',
          glow: 'hover:border-orange-500/40 hover:shadow-[0_0_25px_-5px_rgba(249,115,22,0.18)]',
          dot: 'bg-cyan animate-pulse',
          badgeText: 'Current Focus',
          badgeColor: 'text-cyan bg-cyan/10 border-cyan/20'
        };
      case 'CSS3':
        return {
          icon: <Palette size={20} />,
          iconBg: 'bg-sky-500/10 border-sky-500/25 text-sky-400',
          glow: 'hover:border-sky-500/40 hover:shadow-[0_0_25px_-5px_rgba(56,189,248,0.18)]',
          dot: 'bg-cyan animate-pulse',
          badgeText: 'Current Focus',
          badgeColor: 'text-cyan bg-cyan/10 border-cyan/20'
        };
      case 'Bootstrap 5':
        return {
          icon: <Boxes size={20} />,
          iconBg: 'bg-purple-500/10 border-purple-500/25 text-purple-400',
          glow: 'hover:border-purple-500/40 hover:shadow-[0_0_25px_-5px_rgba(168,85,247,0.18)]',
          dot: 'bg-cyan animate-pulse',
          badgeText: 'Current Focus',
          badgeColor: 'text-cyan bg-cyan/10 border-cyan/20'
        };
      case 'JavaScript (ES6+)':
        return {
          icon: <Braces size={20} />,
          iconBg: 'bg-amber-500/10 border-amber-500/25 text-amber-400',
          glow: 'hover:border-amber-500/40 hover:shadow-[0_0_25px_-5px_rgba(245,158,11,0.18)]',
          dot: 'bg-cyan animate-pulse',
          badgeText: 'Current Focus',
          badgeColor: 'text-cyan bg-cyan/10 border-cyan/20'
        };
      case 'Tailwind CSS':
        return {
          icon: <Wind size={20} />,
          iconBg: 'bg-cyan-500/10 border-cyan-500/25 text-cyan-400',
          glow: 'hover:border-cyan-500/40 hover:shadow-[0_0_25px_-5px_rgba(6,182,212,0.18)]',
          dot: 'bg-cyan animate-pulse',
          badgeText: 'Current Focus',
          badgeColor: 'text-cyan bg-cyan/10 border-cyan/20'
        };
      case 'Python':
        return {
          icon: <Terminal size={20} />,
          iconBg: 'bg-emerald-500/10 border-emerald-500/25 text-emerald-400',
          glow: 'hover:border-emerald-500/40 hover:shadow-[0_0_25px_-5px_rgba(16,185,129,0.18)]',
          dot: 'bg-cyan animate-pulse',
          badgeText: 'Current Focus',
          badgeColor: 'text-cyan bg-cyan/10 border-cyan/20'
        };
      case 'Java (Core & OOP)':
        return {
          icon: <Cpu size={20} />,
          iconBg: 'bg-indigo-500/10 border-indigo-500/25 text-indigo-400',
          glow: 'hover:border-indigo-500/40 hover:shadow-[0_0_25px_-5px_rgba(99,102,241,0.18)]',
          dot: 'bg-emerald-400',
          badgeText: 'Mastered (Sem 1 & 2)',
          badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20'
        };
      case 'Data Structures & Algorithms':
        return {
          icon: <Workflow size={20} />,
          iconBg: 'bg-violet-500/10 border-violet-500/25 text-violet-400',
          glow: 'hover:border-violet-500/40 hover:shadow-[0_0_25px_-5px_rgba(139,92,246,0.18)]',
          dot: 'bg-amber-400',
          badgeText: 'Practicing Weekly',
          badgeColor: 'text-amber-400 bg-amber-500/10 border-amber-500/20'
        };
      case 'DBMS Concepts':
        return {
          icon: <Layers size={20} />,
          iconBg: 'bg-emerald-500/10 border-emerald-500/25 text-emerald-400',
          glow: 'hover:border-emerald-500/40 hover:shadow-[0_0_25px_-5px_rgba(16,185,129,0.18)]',
          dot: 'bg-emerald-400',
          badgeText: 'Mastered (Sem 1 & 2)',
          badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20'
        };
      case 'MySQL & SQL Queries':
        return {
          icon: <Database size={20} />,
          iconBg: 'bg-blue-500/10 border-blue-500/25 text-blue-400',
          glow: 'hover:border-blue-500/40 hover:shadow-[0_0_25px_-5px_rgba(59,130,246,0.18)]',
          dot: 'bg-emerald-400',
          badgeText: 'Mastered (Sem 1 & 2)',
          badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20'
        };
      case 'JDBC Connectivity':
        return {
          icon: <Zap size={20} />,
          iconBg: 'bg-amber-500/10 border-amber-500/25 text-amber-400',
          glow: 'hover:border-amber-500/40 hover:shadow-[0_0_25px_-5px_rgba(245,158,11,0.18)]',
          dot: 'bg-emerald-400',
          badgeText: 'Mastered (Sem 1 & 2)',
          badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20'
        };
      case 'Git & GitHub':
        return {
          icon: <GitBranch size={20} />,
          iconBg: 'bg-rose-500/10 border-rose-500/25 text-rose-400',
          glow: 'hover:border-rose-500/40 hover:shadow-[0_0_25px_-5px_rgba(244,63,94,0.18)]',
          dot: 'bg-indigo-400',
          badgeText: 'Proficient',
          badgeColor: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20'
        };
      case 'VS Code':
        return {
          icon: <Laptop size={20} />,
          iconBg: 'bg-sky-500/10 border-sky-500/25 text-sky-400',
          glow: 'hover:border-sky-500/40 hover:shadow-[0_0_25px_-5px_rgba(14,165,233,0.18)]',
          dot: 'bg-sky-400',
          badgeText: 'Primary IDE',
          badgeColor: 'text-sky-400 bg-sky-500/10 border-sky-500/20'
        };
      default:
        return {
          icon: <Code2 size={20} />,
          iconBg: 'bg-accent/10 border-accent/25 text-accent-light',
          glow: 'hover:border-accent/40',
          dot: 'bg-accent',
          badgeText: level,
          badgeColor: 'text-secondary bg-white/5 border-white/10'
        };
    }
  };

  const getCategoryHeaderIcon = (key: string) => {
    switch (key) {
      case 'frontend':
        return <Palette className="text-cyan" size={20} />;
      case 'backend':
        return <Cpu className="text-accent" size={20} />;
      case 'database':
        return <Database className="text-amber-400" size={20} />;
      case 'tools':
      default:
        return <Terminal className="text-emerald-400" size={20} />;
    }
  };

  const getCategoryDescription = (key: string) => {
    switch (key) {
      case 'frontend':
        return 'Semantic HTML5, modern CSS styling systems, mobile-first responsive architecture, and dynamic JavaScript interactivity.';
      case 'backend':
        return 'Algorithmic problem-solving in Python, core Java OOP paradigms, exception handling, and data structure mechanics.';
      case 'database':
        return 'Relational schema design, normalization principles, complex SQL queries, and Java Database Connectivity (JDBC).';
      case 'tools':
      default:
        return 'Professional version control workflows, repository hosting on GitHub, and tailored modern developer environments.';
    }
  };

  return (
    <section id="skills" className="scroll-mt-24 py-12 relative z-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-white/10">
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
          <p className="text-secondary text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
            Modular breakdown of engineering languages, libraries, databases, and architectural concepts mastered and actively deployed.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center gap-2">
          {[
            { id: 'all', label: 'All Domains' },
            { id: 'frontend', label: 'Frontend' },
            { id: 'backend', label: 'Core CS & Python' },
            { id: 'database', label: 'Databases' },
            { id: 'tools', label: 'Dev Tools' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all border ${
                activeTab === tab.id
                  ? 'bg-accent/20 border-accent text-white shadow-[0_0_15px_rgba(99,102,241,0.35)]'
                  : 'bg-black/40 border-white/5 text-secondary hover:text-white hover:border-white/20'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Domain Groups Container */}
      <div className="space-y-12 mb-14">
        <AnimatePresence mode="popLayout">
          {filteredCategories.map((category, catIdx) => (
            <motion.div
              key={category.categoryKey}
              layout
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.45, delay: catIdx * 0.08, ease: "easeOut" }}
              className="space-y-5"
            >
              {/* Category Sub-header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-1">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    {getCategoryHeaderIcon(category.categoryKey)}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white font-display">
                      {category.title}
                    </h3>
                    <p className="text-xs text-secondary/70 hidden sm:block">
                      {getCategoryDescription(category.categoryKey)}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-start sm:self-auto pl-12 sm:pl-0">
                  <span className="text-xs font-mono text-secondary/60">
                    {category.skills.length} competencies
                  </span>
                </div>
              </div>

              {/* Responsive Cards Grid for Skills */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.skills.map((skill: SkillItem, sIdx: number) => {
                  const visuals = getSkillVisuals(skill.name, skill.level);

                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: sIdx * 0.04 }}
                      className={`relative rounded-2xl p-5 border border-white/10 bg-[#0c101a]/90 backdrop-blur-xl transition-all duration-300 group flex flex-col justify-between ${visuals.glow} hover:-translate-y-1 hover:bg-[#101524]`}
                    >
                      {/* Top ambient highlight gradient on hover */}
                      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-accent/50 transition-all rounded-t-2xl pointer-events-none" />

                      <div>
                        {/* Card Top: Icon + Title + Status Badge */}
                        <div className="flex items-start justify-between gap-3 mb-3">
                          <div className="flex items-center gap-3 min-w-0">
                            <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 ${visuals.iconBg}`}>
                              {visuals.icon}
                            </div>
                            <div className="min-w-0">
                              <h4 className="text-base font-bold text-white tracking-tight group-hover:text-accent-light transition-colors truncate">
                                {skill.name}
                              </h4>
                              <div className="flex items-center gap-1.5 pt-0.5">
                                <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${visuals.dot}`} />
                                <span className="text-[11px] font-mono text-secondary/80 truncate">
                                  {visuals.badgeText}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-xs text-secondary/85 leading-relaxed mb-4">
                          {skill.description}
                        </p>
                      </div>

                      {/* Tag Pills */}
                      <div className="pt-3 border-t border-white/5 flex flex-wrap gap-1.5">
                        {skill.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 rounded-md text-[10px] font-mono text-secondary/80 bg-white/5 border border-white/5 group-hover:border-white/15 group-hover:text-white transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* "Active Engineering Focus" Live Banner */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="glow-card rounded-2xl p-6 sm:p-7 border border-white/10 bg-gradient-to-r from-[#0c101a] via-[#101424] to-[#0c101a]"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-accent/10 border border-accent/20 text-accent">
              <Flame size={20} />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white font-display">
                Current Semester 3 Sprint & Focus Areas
              </h4>
              <p className="text-xs text-secondary">
                Actively learning, practicing algorithms, and shipping real projects weekly.
              </p>
            </div>
          </div>
          <span className="text-xs font-mono text-emerald-400 font-semibold px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 w-fit flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Active Daily Coding</span>
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {currentlyLearning.map((item, idx) => (
            <div key={idx} className="p-3.5 rounded-xl bg-black/40 border border-white/5 hover:border-accent/30 transition-all space-y-1 group">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-bold text-white group-hover:text-accent-light transition-colors truncate">
                  {item.subject}
                </span>
                <span className="text-[10px] font-mono text-accent font-semibold px-1.5 py-0.5 rounded bg-accent/10 shrink-0">
                  {item.status}
                </span>
              </div>
              <p className="text-[11px] text-secondary/70 leading-snug">{item.focus}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
