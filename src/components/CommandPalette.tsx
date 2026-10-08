import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Code, User, Compass, Briefcase, Github, Mail } from 'lucide-react';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

const commands = [
  { id: 'home', title: 'Home', icon: <Compass size={18} />, action: () => window.scrollTo(0, 0) },
  { id: 'projects', title: 'Projects', icon: <Code size={18} />, action: () => document.getElementById('work')?.scrollIntoView() },
  { id: 'about', title: 'About', icon: <User size={18} />, action: () => document.getElementById('about')?.scrollIntoView() },
  { id: 'skills', title: 'Skills', icon: <Briefcase size={18} />, action: () => document.getElementById('skills')?.scrollIntoView() },
  { id: 'journey', title: 'Journey', icon: <Compass size={18} />, action: () => document.getElementById('journey')?.scrollIntoView() },
  { id: 'github', title: 'GitHub', icon: <Github size={18} />, action: () => document.getElementById('github')?.scrollIntoView() },
  { id: 'contact', title: 'Contact', icon: <Mail size={18} />, action: () => document.getElementById('contact')?.scrollIntoView() },
];

const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredCommands = commands.filter((cmd) =>
    cmd.title.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % filteredCommands.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % filteredCommands.length);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        const selectedCmd = filteredCommands[selectedIndex];
        if (selectedCmd) {
          selectedCmd.action();
          onClose();
        }
      } else if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredCommands, selectedIndex, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.15 }}
            className="fixed z-[101] top-[20%] left-1/2 -translate-x-1/2 w-[90%] max-w-lg bg-background border border-border rounded-xl shadow-2xl overflow-hidden"
          >
            <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
              <Search size={18} className="text-secondary" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                placeholder="Type a command or search..."
                className="flex-1 bg-transparent border-none outline-none text-primary placeholder:text-secondary/50 font-mono text-sm"
              />
              <div className="text-xs font-mono text-secondary/50 px-1.5 py-0.5 rounded border border-border">
                ESC
              </div>
            </div>
            
            <div className="max-h-72 overflow-y-auto py-2 px-2 no-scrollbar">
              {filteredCommands.length === 0 ? (
                <div className="px-4 py-8 text-center text-secondary text-sm font-mono">
                  No results found for "{query}"
                </div>
              ) : (
                filteredCommands.map((cmd, index) => (
                  <button
                    key={cmd.id}
                    onClick={() => {
                      cmd.action();
                      onClose();
                    }}
                    onMouseEnter={() => setSelectedIndex(index)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-colors ${
                      index === selectedIndex 
                        ? 'bg-accent/10 text-accent' 
                        : 'text-secondary hover:bg-white/5 hover:text-primary'
                    }`}
                  >
                    {cmd.icon}
                    <span className="font-medium text-sm">{cmd.title}</span>
                  </button>
                ))
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;
