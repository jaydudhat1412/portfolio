import React from 'react';
import { motion } from 'framer-motion';
import { personalData } from '../data/personal';
import { ArrowRight, FileText } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="about" className="flex flex-col justify-center min-h-[70vh] relative z-10 pt-20">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-3 order-2 lg:order-1"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-accent" />
            <span className="font-mono text-xs tracking-wider text-accent uppercase">
              {personalData.role}
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 text-primary leading-[1.1] font-sans drop-shadow-2xl">
            Crafting Digital.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400">Experiences.</span>
          </h1>
          
          <p className="text-xl text-secondary max-w-2xl mb-12 leading-relaxed font-light">
            I am a Semester {personalData.semester} Computer Engineering student exploring 
            Full Stack Development, Python, and Data Structures. I believe in learning by building 
            real things that look and feel premium.
          </p>
          
          <div className="flex flex-wrap items-center gap-6">
            <a 
              href="#work"
              className="flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-xl hover:bg-indigo-400 transition-all font-semibold shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:shadow-[0_0_30px_rgba(99,102,241,0.6)] transform hover:-translate-y-1"
            >
              Explore Projects
              <ArrowRight size={20} />
            </a>
            <a 
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-8 py-4 rounded-xl glass-panel text-primary font-medium"
            >
              <FileText size={20} />
              View Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-2 order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Glowing ring behind the image */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent to-purple-500 blur-2xl opacity-40 animate-pulse" />
            
            {/* The profile picture */}
            <div className="relative w-full h-full rounded-full border-4 border-white/10 overflow-hidden shadow-2xl glass-panel p-2">
              <img 
                src="/profile.jpg" 
                alt={personalData.name} 
                className="w-full h-full object-cover rounded-full bg-black/40"
                onError={(e) => {
                  // Fallback if profile.jpg is not found
                  (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=Jay+Dudhat&background=random&size=512';
                }}
              />
            </div>
            
            {/* Floating badge */}
            <div className="absolute bottom-4 right-4 glass-panel px-4 py-2 rounded-full border border-white/10 shadow-lg flex items-center gap-2 animate-bounce">
              <span className="w-2 h-2 rounded-full bg-green-400"></span>
              <span className="text-xs font-mono font-medium">Available</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
