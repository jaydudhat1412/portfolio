import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CommandPalette from './components/CommandPalette';
import ScrollToTop from './components/ScrollToTop';
import CustomCursor from './components/CustomCursor';
import ParticleDrift from '@/components/ui/particle-drift';

function App() {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  useEffect(() => {
    // Ensure the website always opens at the top
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden">
      {/* Background Live Particle Drift Canvas */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden" 
        aria-hidden="true"
      >
        <ParticleDrift 
          mode="dark" 
          speed={0.75} 
          density={0.85} 
          opacity={0.65}
          className="w-full h-full"
        />
        {/* Soft radial overlay to smoothly blend with background gradient */}
        <div className="absolute inset-0 bg-radial from-transparent via-[#0a0a0c]/30 to-[#0a0a0c]/80 pointer-events-none" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar onOpenCommandPalette={() => setIsCommandPaletteOpen(true)} />
        <main className="flex-1">
          <Home />
        </main>
        <CommandPalette 
          isOpen={isCommandPaletteOpen} 
          onClose={() => setIsCommandPaletteOpen(false)} 
        />
        <ScrollToTop />
        <CustomCursor />
      </div>
    </div>
  );
}

export default App;
