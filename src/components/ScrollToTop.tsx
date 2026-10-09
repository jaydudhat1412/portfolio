import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      
      // Calculate percentage scrolled
      if (totalScroll > 0) {
        setScrollProgress((currentScroll / totalScroll) * 100);
      }

      // Show button after scrolling past 300px
      if (currentScroll > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-6 right-6 z-50 group"
        >
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top of page"
            className="relative flex items-center justify-center w-12 h-12 rounded-full bg-[#0e121b]/90 hover:bg-[#151b28] text-white border border-white/15 backdrop-blur-xl shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group-hover:border-accent"
          >
            {/* Circular SVG Scroll Progress Ring */}
            <svg 
              className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-0.5" 
              viewBox="0 0 48 48"
            >
              <circle
                cx="24"
                cy="24"
                r="21"
                fill="none"
                stroke="rgba(255, 255, 255, 0.08)"
                strokeWidth="2.5"
              />
              <circle
                cx="24"
                cy="24"
                r="21"
                fill="none"
                stroke="url(#accent-gradient)"
                strokeWidth="2.5"
                strokeDasharray={132}
                strokeDashoffset={132 - (132 * scrollProgress) / 100}
                strokeLinecap="round"
                className="transition-all duration-150"
              />
              <defs>
                <linearGradient id="accent-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6366f1" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
            </svg>

            {/* Glowing Accent Aura */}
            <div className="absolute inset-0 rounded-full bg-accent/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

            {/* Up Arrow Icon */}
            <ArrowUp 
              size={18} 
              className="text-white group-hover:text-accent-light group-hover:-translate-y-0.5 transition-all duration-300" 
            />
          </button>

          {/* Floating Tooltip */}
          <span className="absolute bottom-full right-1/2 translate-x-1/2 mb-2 px-2.5 py-1 rounded-md bg-black/80 border border-white/10 text-[10px] font-mono text-white/90 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
            Back to Top
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
