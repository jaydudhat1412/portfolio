import React from 'react';
import { personalData } from '../data/personal';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border mt-20 bg-black/40">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col gap-1">
          <span className="font-mono font-bold tracking-tight text-primary">
            {personalData.name.toUpperCase().replace(' ', '.')}
          </span>
          <span className="text-sm text-secondary">
            Semester {personalData.semester} • Computer Engineering
          </span>
        </div>
        
        <div className="flex gap-6 text-sm text-secondary">
          <a href={`https://github.com/${personalData.github}`} className="hover:text-primary transition-colors">GitHub</a>
          <a href={`https://linkedin.com/in/${personalData.linkedin}`} className="hover:text-primary transition-colors">LinkedIn</a>
          <a href={`mailto:${personalData.email}`} className="hover:text-primary transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
