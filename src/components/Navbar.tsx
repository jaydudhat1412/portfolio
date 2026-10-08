import React, { useState } from 'react';
import { Menu, X, Command, FileText, Github } from 'lucide-react';
import { personalData } from '../data/personal';

interface NavbarProps {
  onOpenCommandPalette: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenCommandPalette }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Journey', href: '#journey' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="#" className="font-mono font-bold tracking-tighter text-xl text-primary hover:text-accent transition-colors drop-shadow-md">
            {personalData.name.toUpperCase().replace(' ', '.')}
          </a>
          
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                className="text-sm font-medium text-secondary hover:text-white transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <button 
            onClick={onOpenCommandPalette}
            className="flex items-center gap-2 text-xs font-mono text-secondary hover:text-white px-3 py-1.5 rounded-lg border border-white/10 hover:border-accent transition-all bg-black/40 shadow-inner"
          >
            <Command size={14} />
            <span>CMD + K</span>
          </button>
          
          <a 
            href={`https://github.com/${personalData.github}`}
            target="_blank"
            rel="noreferrer"
            className="text-secondary hover:text-white transition-all transform hover:scale-110"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          
          <a 
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm font-semibold bg-accent text-white px-5 py-2.5 rounded-lg hover:bg-indigo-500 transition-all shadow-[0_0_10px_rgba(99,102,241,0.3)] hover:shadow-[0_0_20px_rgba(99,102,241,0.6)] transform hover:-translate-y-0.5"
          >
            <FileText size={16} />
            Resume
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-secondary hover:text-white transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border p-6 flex flex-col gap-4 shadow-2xl">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                className="text-lg font-medium text-secondary hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="h-px bg-white/10 my-2" />
          <div className="flex items-center justify-between">
            <a 
              href={`https://github.com/${personalData.github}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-secondary hover:text-white transition-colors"
            >
              <Github size={20} />
              GitHub
            </a>
            <a 
              href="/resume.pdf"
              className="flex items-center gap-2 text-sm font-semibold bg-accent text-white px-5 py-2.5 rounded-lg shadow-[0_0_10px_rgba(99,102,241,0.3)]"
            >
              <FileText size={16} />
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
