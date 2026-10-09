import React from 'react';
import { motion } from 'framer-motion';
import { personalData } from '../data/personal';
import { ArrowRight, FileText, Terminal } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="about" className="flex flex-col justify-center relative z-10 pt-6 md:pt-12 pb-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        
        {/* Text Column: order-2 on mobile (below photo), order-1 on desktop (left side) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="lg:col-span-7 order-2 lg:order-1 space-y-6 flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-inner">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-xs text-white/90 font-medium">
              Semester {personalData.semester} • Computer Engineering Student
            </span>
          </div>
          
          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.1] font-display">
            Architecting Fast.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent-light to-cyan">
              Modern Software.
            </span>
          </h1>
          
          {/* Subtitle / Bio */}
          <p className="text-sm sm:text-base md:text-lg text-secondary max-w-2xl leading-relaxed font-normal">
            Hi, I’m <strong className="text-white font-semibold">{personalData.name}</strong> — a 3rd-semester Computer Engineering student from {personalData.location}. 
            Having built a strong foundation in Core Java (OOP) and DBMS (MySQL) in Semesters 1 & 2, I am currently mastering Frontend Web Technologies (HTML, CSS, Bootstrap, JavaScript) and Python in Semester 3.
          </p>

          {/* Quick Focus Pills */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
            <span className="text-xs font-mono text-secondary/70">Semester 3 Learning:</span>
            {['HTML5 & CSS3', 'Bootstrap 5', 'JavaScript (ES6+)', 'Python', 'Tailwind CSS'].map((tag, i) => (
              <span 
                key={i} 
                className="px-2.5 py-1 rounded-md bg-accent/10 border border-accent/25 text-xs font-mono text-accent-light font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-3">
            <a 
              href="#work"
              className="flex items-center gap-2 bg-accent hover:bg-indigo-500 text-white px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl font-bold text-xs sm:text-sm shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:shadow-[0_0_30px_rgba(99,102,241,0.6)] transform hover:-translate-y-0.5 transition-all"
            >
              <span>Explore Projects</span>
              <ArrowRight size={16} />
            </a>

            <a 
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl glass-panel text-white hover:text-accent font-medium text-xs sm:text-sm transition-all"
            >
              <FileText size={16} />
              <span>Resume (PDF)</span>
            </a>

            <a 
              href="#terminal"
              className="flex items-center gap-2 px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl bg-black/40 hover:bg-black/60 text-secondary hover:text-white border border-white/10 font-mono text-xs transition-colors"
            >
              <Terminal size={14} />
              <span>Open CLI</span>
            </a>
          </div>
        </motion.div>

        {/* Profile Visual: order-1 on mobile (visible first at the top), order-2 on desktop (right side) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="lg:col-span-5 order-1 lg:order-2 flex justify-center items-center relative py-2 sm:py-4"
        >
          <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80">
            {/* Ambient Multi-color Glowing Halo */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent via-cyan/40 to-purple-500 blur-3xl opacity-50 animate-pulse pointer-events-none" />
            
            {/* Circular Border Ring with Gradient */}
            <div className="relative w-full h-full rounded-full p-2 bg-gradient-to-b from-white/25 via-accent/35 to-white/10 border border-white/20 shadow-2xl backdrop-blur-md">
              <div className="w-full h-full rounded-full overflow-hidden bg-black/60 relative">
                <img 
                  src="/profile.jpg" 
                  alt={personalData.name} 
                  className="w-full h-full object-cover object-top filter contrast-[1.03] brightness-[1.02]"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=Jay+Dudhat&background=0f131d&color=6366f1&size=512';
                  }}
                />
              </div>
            </div>

            {/* Availability Badge */}
            <div className="absolute -bottom-2 right-2 sm:right-4 glass-panel px-3.5 py-1 sm:py-1.5 rounded-full border border-white/15 shadow-xl flex items-center gap-1.5 sm:gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-[11px] sm:text-xs font-mono font-medium text-white/95">Open to Internships</span>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Quick Statistics Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 sm:p-6 rounded-2xl glass-panel border border-white/10"
      >
        {[
          { label: 'Engineering Projects', value: '05+', detail: 'Full-stack & systems' },
          { label: 'DSA & Logic Solved', value: '100+', detail: 'Java & Data Structures' },
          { label: 'Academic Standing', value: 'Sem 03', detail: 'Computer Engineering' },
          { label: 'Technical Arsenal', value: '15+', detail: 'Modern languages & tools' },
        ].map((stat, i) => (
          <div key={i} className="flex flex-col space-y-0.5 pl-2 sm:pl-4 border-l border-white/10 first:border-l-0">
            <span className="text-2xl sm:text-3xl font-black text-white font-display">
              {stat.value}
            </span>
            <span className="text-xs font-semibold text-accent-light">
              {stat.label}
            </span>
            <span className="text-[11px] text-secondary/70">
              {stat.detail}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Hero;
