import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, Project } from '../data/projects';
import { Folder, ArrowRight, X, ExternalLink, Github } from 'lucide-react';

const ProjectExplorer: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="work" className="scroll-mt-24">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-xl font-bold tracking-tight">WORKSPACE</h2>
        <div className="h-px flex-1 bg-border" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <div 
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="group cursor-pointer border border-border bg-black/20 hover:bg-black/40 rounded-lg p-5 transition-all hover:border-secondary flex flex-col"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <Folder size={20} className="text-secondary group-hover:text-accent transition-colors" />
                <span className="font-mono text-sm text-secondary">{project.id}/</span>
              </div>
              <span className="font-mono text-xs text-secondary/50 group-hover:text-secondary transition-colors">
                {project.number}
              </span>
            </div>
            
            <h3 className="text-lg font-medium text-primary mb-2 group-hover:text-accent transition-colors">
              {project.title}
            </h3>
            
            <p className="text-sm text-secondary line-clamp-2 mb-6 flex-1">
              {project.description || 'Description pending...'}
            </p>
            
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 3).map((tech, idx) => (
                  <span key={idx} className="text-xs font-mono text-secondary bg-background px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="text-xs font-mono text-secondary bg-background px-2 py-1 rounded">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>
              <ArrowRight size={16} className="text-secondary group-hover:text-primary transition-colors group-hover:translate-x-1" />
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectDetails 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

const ProjectDetails: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-12">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.div 
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        className="relative w-full max-w-4xl max-h-[90vh] bg-background border border-border rounded-xl shadow-2xl overflow-hidden flex flex-col"
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-black/40">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-accent">{project.number}</span>
            <h3 className="font-medium font-mono text-sm">{project.id}/</h3>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-secondary hover:text-primary hover:bg-white/5 rounded-md transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-6 md:p-10 space-y-12 no-scrollbar">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{project.title}</h2>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="text-xs font-mono text-primary bg-white/5 border border-border px-3 py-1.5 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-12">
              <section>
                <h4 className="font-mono text-xs text-secondary tracking-widest mb-4">01 — OVERVIEW</h4>
                <p className="text-secondary leading-relaxed">{project.description}</p>
              </section>

              {project.problem && (
                <section>
                  <h4 className="font-mono text-xs text-secondary tracking-widest mb-4">02 — PROBLEM</h4>
                  <p className="text-secondary leading-relaxed">{project.problem}</p>
                </section>
              )}

              {project.solution && (
                <section>
                  <h4 className="font-mono text-xs text-secondary tracking-widest mb-4">03 — SOLUTION</h4>
                  <p className="text-secondary leading-relaxed">{project.solution}</p>
                </section>
              )}

              {project.features.length > 0 && (
                <section>
                  <h4 className="font-mono text-xs text-secondary tracking-widest mb-4">04 — FEATURES</h4>
                  <ul className="list-disc list-inside text-secondary space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="leading-relaxed">{feature}</li>
                    ))}
                  </ul>
                </section>
              )}
              
              {project.challenges.length > 0 && (
                <section>
                  <h4 className="font-mono text-xs text-secondary tracking-widest mb-4">05 — CHALLENGES</h4>
                  <ul className="list-disc list-inside text-secondary space-y-2">
                    {project.challenges.map((challenge, idx) => (
                      <li key={idx} className="leading-relaxed">{challenge}</li>
                    ))}
                  </ul>
                </section>
              )}

              {project.learning.length > 0 && (
                <section>
                  <h4 className="font-mono text-xs text-secondary tracking-widest mb-4">06 — WHAT I LEARNED</h4>
                  <ul className="list-disc list-inside text-secondary space-y-2">
                    {project.learning.map((learn, idx) => (
                      <li key={idx} className="leading-relaxed">{learn}</li>
                    ))}
                  </ul>
                </section>
              )}
            </div>

            <div className="space-y-8">
              <section className="p-6 rounded-lg border border-border bg-black/20">
                <h4 className="font-mono text-xs text-secondary tracking-widest mb-4">10 — LINKS</h4>
                <div className="flex flex-col gap-4">
                  {project.github ? (
                    <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-primary hover:text-accent transition-colors">
                      <Github size={18} />
                      View Source
                    </a>
                  ) : (
                    <span className="flex items-center gap-3 text-sm text-secondary/50">
                      <Github size={18} />
                      Source Not Available
                    </span>
                  )}
                  {project.demo ? (
                    <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-primary hover:text-accent transition-colors">
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  ) : (
                    <span className="flex items-center gap-3 text-sm text-secondary/50">
                      <ExternalLink size={18} />
                      Demo Not Available
                    </span>
                  )}
                </div>
              </section>

              <section>
                <h4 className="font-mono text-xs text-secondary tracking-widest mb-4">METADATA</h4>
                <div className="space-y-4 text-sm">
                  <div>
                    <div className="text-secondary/70 text-xs mb-1">Category</div>
                    <div className="text-primary">{project.category}</div>
                  </div>
                  <div>
                    <div className="text-secondary/70 text-xs mb-1">Status</div>
                    <div className="text-primary">Completed</div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectExplorer;
