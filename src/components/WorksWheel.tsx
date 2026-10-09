import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, Project } from '../data/projects';
import { 
  ExternalLink, 
  Github, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  Layers, 
  LayoutGrid, 
  Sparkles, 
  X, 
  CheckCircle2, 
  AlertCircle,
  Lightbulb,
  Cpu
} from 'lucide-react';

export const WorksWheel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'showcase' | 'grid'>('showcase');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'web' | 'backend' | 'iot'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Filter projects by category
  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'all') return projects;
    return projects.filter((p) => p.categoryKey === selectedCategory);
  }, [selectedCategory]);

  // Keep active index valid when filter changes
  useEffect(() => {
    if (activeIndex >= filteredProjects.length) {
      setActiveIndex(0);
    }
  }, [filteredProjects, activeIndex]);

  const activeProject = filteredProjects[activeIndex] || filteredProjects[0] || projects[0];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? filteredProjects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === filteredProjects.length - 1 ? 0 : prev + 1));
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedProject) return; // Modal open
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject, filteredProjects.length]);

  return (
    <section id="work" className="scroll-mt-24 py-12 relative">
      {/* Background Accent Atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header with View & Filter Controls */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
              <span className="text-xs font-mono uppercase tracking-widest text-accent font-semibold">
                ENGINEERING WORKSPACE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Featured Projects
            </h2>
            <p className="text-secondary text-sm sm:text-base mt-2 max-w-xl">
              Production builds, systems architecture, and web platforms engineered for performance, clean architecture, and intuitive user experiences.
            </p>
          </div>

          {/* View Mode Switcher */}
          <div className="flex items-center gap-3">
            <div className="flex items-center p-1 rounded-xl bg-black/40 border border-white/10 backdrop-blur-md shadow-inner">
              <button
                onClick={() => setViewMode('showcase')}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  viewMode === 'showcase'
                    ? 'bg-accent text-white shadow-[0_0_15px_rgba(99,102,241,0.5)]'
                    : 'text-secondary hover:text-white'
                }`}
              >
                <Layers size={14} />
                <span>Showcase</span>
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  viewMode === 'grid'
                    ? 'bg-accent text-white shadow-[0_0_15px_rgba(99,102,241,0.5)]'
                    : 'text-secondary hover:text-white'
                }`}
              >
                <LayoutGrid size={14} />
                <span>Grid View</span>
              </button>
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-6">
          {[
            { id: 'all', label: 'All Projects', count: projects.length },
            { id: 'web', label: 'Full Stack & Web', count: projects.filter(p => p.categoryKey === 'web').length },
            { id: 'backend', label: 'Java & Databases', count: projects.filter(p => p.categoryKey === 'backend').length },
            { id: 'iot', label: 'IoT & Systems', count: projects.filter(p => p.categoryKey === 'iot').length },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id as any);
                setActiveIndex(0);
              }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all flex items-center gap-2 border ${
                selectedCategory === cat.id
                  ? 'bg-white/10 border-accent text-white shadow-sm'
                  : 'bg-black/30 border-white/5 text-secondary hover:text-white hover:border-white/20'
              }`}
            >
              <span>{cat.label}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${selectedCategory === cat.id ? 'bg-accent text-white' : 'bg-white/5 text-secondary'}`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {viewMode === 'showcase' ? (
          /* ─── SHOWCASE MODE (Responsive 3D Deck with Gestures) ──────────────── */
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="glow-card rounded-3xl p-6 sm:p-8 md:p-10 border border-white/10 bg-[#0e121b]/80 backdrop-blur-2xl shadow-2xl overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Visual Image Preview Frame (16:9, responsive, crystal-clear) */}
                <div className="lg:col-span-7 order-1">
                  <div 
                    onClick={() => setSelectedProject(activeProject)}
                    className="relative aspect-video w-full rounded-2xl overflow-hidden border border-white/15 shadow-2xl group cursor-pointer bg-black/60"
                  >
                    {/* Project Image with Fallback */}
                    <img
                      src={activeProject.image}
                      alt={activeProject.title}
                      className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&auto=format&fit=crop&q=80';
                      }}
                    />

                    {/* Gradient Overlay for Text Clarity */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

                    {/* Number Badge & Category */}
                    <div className="absolute top-4 left-4 flex items-center gap-2 z-10">
                      <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs font-mono text-accent font-bold">
                        #{activeProject.number}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs font-mono text-white/80">
                        {activeProject.category}
                      </span>
                    </div>

                    {/* Expand Case Study Prompt on Hover */}
                    <div className="absolute bottom-4 right-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-accent/90 text-white text-xs font-medium backdrop-blur-md opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all shadow-lg">
                      <span>Inspect Details</span>
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </div>

                {/* Project Metadata & Deep Description */}
                <div className="lg:col-span-5 order-2 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2 text-xs font-mono text-accent">
                      <span>PROJECT {activeProject.number} OF {filteredProjects.length.toString().padStart(2, '0')}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-black text-white mb-3 tracking-tight">
                      {activeProject.title}
                    </h3>

                    <p className="text-secondary text-sm sm:text-base leading-relaxed mb-6">
                      {activeProject.description}
                    </p>

                    {/* Highlights / Features Pills */}
                    {activeProject.highlights && activeProject.highlights.length > 0 && (
                      <div className="mb-6 space-y-2">
                        <span className="text-xs font-mono uppercase tracking-wider text-secondary/60">Core Architecture:</span>
                        <div className="flex flex-wrap gap-2">
                          {activeProject.highlights.map((h, i) => (
                            <span 
                              key={i} 
                              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-accent/10 border border-accent/20 text-xs text-accent-light font-medium"
                            >
                              <Sparkles size={11} className="text-accent" />
                              {h}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Technologies Pills */}
                    <div className="mb-8">
                      <span className="text-xs font-mono uppercase tracking-wider text-secondary/60 block mb-2">Technologies Used:</span>
                      <div className="flex flex-wrap gap-2">
                        {activeProject.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-secondary hover:text-white transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions & Navigation Controls */}
                  <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      {activeProject.demo ? (
                        <a
                          href={activeProject.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-accent hover:bg-indigo-500 text-white text-xs font-bold transition-all shadow-[0_0_15px_rgba(99,102,241,0.4)]"
                        >
                          <ExternalLink size={14} />
                          <span>Live Demo</span>
                        </a>
                      ) : null}

                      {activeProject.github ? (
                        <a
                          href={activeProject.github}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-semibold border border-white/10 transition-colors"
                        >
                          <Github size={14} />
                          <span>Source Code</span>
                        </a>
                      ) : null}

                      <button
                        onClick={() => setSelectedProject(activeProject)}
                        className="px-3 py-2.5 text-xs text-secondary hover:text-white transition-colors font-medium"
                      >
                        Case Study →
                      </button>
                    </div>

                    {/* Prev / Next Chevrons */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={handlePrev}
                        className="p-2.5 rounded-xl bg-white/5 hover:bg-white/15 text-white border border-white/10 transition-all hover:scale-105 active:scale-95"
                        aria-label="Previous project"
                      >
                        <ChevronLeft size={18} />
                      </button>
                      <button
                        onClick={handleNext}
                        className="p-2.5 rounded-xl bg-white/5 hover:bg-white/15 text-white border border-white/10 transition-all hover:scale-105 active:scale-95"
                        aria-label="Next project"
                      >
                        <ChevronRight size={18} />
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>

            {/* Showcase Quick Selector Tabs */}
            <div className="mt-6 flex items-center justify-center gap-2 flex-wrap">
              {filteredProjects.map((p, idx) => (
                <button
                  key={p.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono transition-all flex items-center gap-2 border ${
                    activeIndex === idx
                      ? 'bg-accent/20 border-accent text-white shadow-[0_0_10px_rgba(99,102,241,0.3)]'
                      : 'bg-black/30 border-white/5 text-secondary/60 hover:text-white hover:border-white/20'
                  }`}
                >
                  <span className="font-bold">{p.number}</span>
                  <span className="hidden sm:inline truncate max-w-[140px]">{p.title}</span>
                </button>
              ))}
            </div>
          </div>
        ) : (
          /* ─── GRID VIEW (Responsive High-Density Cards) ─────────────────────── */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (idx % 3) * 0.1, ease: "easeOut" }}
                onClick={() => setSelectedProject(project)}
                className="glow-card rounded-2xl overflow-hidden border border-white/10 bg-[#0e121b]/80 hover:border-accent/40 transition-all cursor-pointer flex flex-col group"
              >
                {/* Card Thumbnail */}
                <div className="relative aspect-video w-full overflow-hidden bg-black/60">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80';
                    }}
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <span className="px-2.5 py-0.5 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-mono text-accent font-bold border border-white/10">
                      #{project.number}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-mono text-white/80 border border-white/10">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-secondary text-xs sm:text-sm line-clamp-2 mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.slice(0, 3).map((t, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-white/5 text-[11px] font-mono text-secondary border border-white/5">
                        {t}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-0.5 rounded bg-white/5 text-[11px] font-mono text-secondary/60 border border-white/5">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Card Footer */}
                  <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-secondary group-hover:text-white transition-colors">
                    <span>Inspect Case Study</span>
                    <ArrowRight size={14} className="text-accent group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* ─── FULL CASE STUDY DETAIL MODAL ─────────────────────────────────── */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Modal Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
              onClick={() => setSelectedProject(null)}
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-[#0c101a] border border-white/15 rounded-3xl shadow-2xl overflow-hidden flex flex-col z-10"
            >
              {/* Header Image */}
              <div className="relative h-56 sm:h-72 w-full overflow-hidden shrink-0">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&auto=format&fit=crop&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c101a] via-[#0c101a]/50 to-transparent" />
                
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 hover:bg-black text-white/80 hover:text-white backdrop-blur-md border border-white/10 transition-all hover:scale-110"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-accent/20 border border-accent/30 text-accent font-mono text-xs font-bold">
                      #{selectedProject.number}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-white/10 border border-white/10 text-white/80 font-mono text-xs">
                      {selectedProject.category}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto p-6 sm:p-8 md:p-10 space-y-8 no-scrollbar text-sm sm:text-base leading-relaxed text-secondary">
                
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((t, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-xs text-white">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Problem & Solution Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {selectedProject.problem && (
                    <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
                      <div className="flex items-center gap-2 text-amber-400 font-mono text-xs uppercase tracking-wider font-semibold">
                        <AlertCircle size={16} />
                        <span>The Problem</span>
                      </div>
                      <p className="text-secondary/90">{selectedProject.problem}</p>
                    </div>
                  )}

                  {selectedProject.solution && (
                    <div className="p-6 rounded-2xl bg-accent/[0.04] border border-accent/20 space-y-3">
                      <div className="flex items-center gap-2 text-accent font-mono text-xs uppercase tracking-wider font-semibold">
                        <Lightbulb size={16} />
                        <span>The Solution</span>
                      </div>
                      <p className="text-secondary/90">{selectedProject.solution}</p>
                    </div>
                  )}
                </div>

                {/* Key Features */}
                {selectedProject.features && selectedProject.features.length > 0 && (
                  <div>
                    <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-2 font-display">
                      <Cpu size={18} className="text-accent" /> Key Features & Capabilities
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selectedProject.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                          <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-secondary/90">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Challenges & Learning */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/5">
                  {selectedProject.challenges && selectedProject.challenges.length > 0 && (
                    <div>
                      <h5 className="text-xs font-mono uppercase tracking-wider text-secondary/60 mb-3">
                        Technical Challenges:
                      </h5>
                      <ul className="space-y-2 list-disc list-inside text-xs sm:text-sm text-secondary/80">
                        {selectedProject.challenges.map((c, i) => (
                          <li key={i}>{c}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {selectedProject.learning && selectedProject.learning.length > 0 && (
                    <div>
                      <h5 className="text-xs font-mono uppercase tracking-wider text-secondary/60 mb-3">
                        Key Learnings:
                      </h5>
                      <ul className="space-y-2 list-disc list-inside text-xs sm:text-sm text-secondary/80">
                        {selectedProject.learning.map((l, i) => (
                          <li key={i}>{l}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* CTAs */}
                <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    {selectedProject.demo && (
                      <a
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 px-5 py-3 rounded-xl bg-accent hover:bg-indigo-500 text-white font-bold text-xs transition-all shadow-lg"
                      >
                        <ExternalLink size={15} />
                        <span>Launch Live Website</span>
                      </a>
                    )}
                    {selectedProject.github && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-semibold text-xs transition-colors"
                      >
                        <Github size={15} />
                        <span>GitHub Repository</span>
                      </a>
                    )}
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-4 py-2.5 text-xs text-secondary hover:text-white font-mono"
                  >
                    Close [ESC]
                  </button>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default WorksWheel;
