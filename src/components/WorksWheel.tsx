import React, { useState, useRef, useCallback, useMemo } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { projects, Project } from '../data/projects';
import { X, ExternalLink, Github, ArrowRight } from 'lucide-react';

// ─── Types ──────────────────────────────────────────────────────────────────
interface WheelItem {
  project: Project;
  image: string;
}

// ─── Constants ──────────────────────────────────────────────────────────────
const CARD_SIZE = 140;
const RADIUS = 280;
const DRAG_SENSITIVITY = 0.5;

// ─── WorksWheel Component ──────────────────────────────────────────────────
const WorksWheel: React.FC = () => {
  const items: WheelItem[] = useMemo(
    () => projects.map((p) => ({ project: p, image: p.image })),
    []
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isCarouselMode, setIsCarouselMode] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const dragStartX = useRef(0);
  const accumulatedDrag = useRef(0);

  const rotationMV = useMotionValue(0);
  const rotationSpring = useSpring(rotationMV, { stiffness: 120, damping: 30, mass: 0.8 });

  const angleStep = 360 / items.length;

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      setIsDragging(true);
      dragStartX.current = e.clientX;
      accumulatedDrag.current = rotationMV.get();
      (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    },
    [rotationMV]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging) return;
      const delta = (e.clientX - dragStartX.current) * DRAG_SENSITIVITY;
      const newRotation = accumulatedDrag.current + delta;
      rotationMV.set(newRotation);

      const normalizedAngle = ((newRotation % 360) + 360) % 360;
      const idx = Math.round(normalizedAngle / angleStep) % items.length;
      setActiveIndex(idx);

      if (!isCarouselMode) setIsCarouselMode(true);
    },
    [isDragging, rotationMV, angleStep, items.length, isCarouselMode]
  );

  const handlePointerUp = useCallback(() => {
    setIsDragging(false);
    // Snap to nearest item
    const current = rotationMV.get();
    const snappedRotation = Math.round(current / angleStep) * angleStep;
    rotationMV.set(snappedRotation);
  }, [rotationMV, angleStep]);

  // ─── Navigate to index from sidebar ─────────────────────────────────────
  const goToIndex = useCallback(
    (idx: number) => {
      const targetRotation = idx * angleStep;
      rotationMV.set(targetRotation);
      setActiveIndex(idx);
      if (!isCarouselMode) setIsCarouselMode(true);
    },
    [rotationMV, angleStep, isCarouselMode]
  );

  // ─── Toggle back to ring view ───────────────────────────────────────────
  const resetToRing = useCallback(() => {
    setIsCarouselMode(false);
    rotationMV.set(0);
    setActiveIndex(0);
  }, [rotationMV]);

  return (
    <section id="work" className="scroll-mt-24 pt-10 relative">
      <div className="absolute inset-0 bg-accent/5 pointer-events-none rounded-[3rem] -z-10" />

      <div className="flex items-center gap-4 mb-8 max-w-7xl mx-auto px-6">
        <h2 className="text-xl font-bold tracking-tight text-white">WORKSPACE</h2>
        <div className="h-px flex-1 bg-white/10" />
        {isCarouselMode && (
          <motion.button
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={resetToRing}
            className="text-xs font-mono text-secondary hover:text-accent transition-colors flex items-center gap-1"
          >
            ← Ring View
          </motion.button>
        )}
      </div>

      <div
        ref={containerRef}
        className="relative w-full max-w-7xl mx-auto overflow-hidden rounded-3xl border border-white/10 bg-black/40 backdrop-blur-md shadow-2xl hidden md:block"
        style={{
          height: isCarouselMode ? '520px' : '620px',
          transition: 'height 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
      >
        {/* ─── Background glow ─────────────────────────────────────────── */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-20"
            style={{
              background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
            }}
          />
        </div>

        <AnimatePresence mode="wait">
          {!isCarouselMode ? (
            /* ─── RING VIEW ──────────────────────────────────────────── */
            <motion.div
              key="ring"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="relative w-full h-full flex items-center"
            >
              {/* Center title */}
              <div className="absolute top-1/2 left-[calc(50%-60px)] -translate-y-1/2 -translate-x-1/2 z-10 text-center pointer-events-none select-none">
                <motion.h3
                  className="text-4xl md:text-5xl font-black tracking-tighter text-white"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Works
                </motion.h3>
                <motion.span
                  className="text-2xl md:text-3xl font-light text-accent/80 font-mono"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  '26
                </motion.span>
              </div>

              {/* Ring of cards */}
              <div
                className="absolute top-1/2 left-[calc(50%-60px)] -translate-x-1/2 -translate-y-1/2"
                style={{
                  width: RADIUS * 2,
                  height: RADIUS * 2,
                }}
              >
                {items.map((item, index) => {
                  const angle = (index / items.length) * 360 - 90;
                  const rad = (angle * Math.PI) / 180;
                  const x = RADIUS + Math.cos(rad) * RADIUS - CARD_SIZE / 2;
                  const y = RADIUS + Math.sin(rad) * RADIUS - CARD_SIZE / 2;

                  return (
                    <RingCard
                      key={item.project.id}
                      item={item}
                      index={index}
                      x={x}
                      y={y}
                      angle={angle + 90}
                      onHover={() => setActiveIndex(index)}
                      onClick={() => {
                        setIsCarouselMode(true);
                        goToIndex(index);
                      }}
                      isActive={activeIndex === index}
                    />
                  );
                })}
              </div>

              {/* Right-side index */}
              <ProjectIndex
                items={items}
                activeIndex={activeIndex}
                onSelect={(idx) => {
                  setActiveIndex(idx);
                }}
              />

              {/* Scroll hint */}
              <motion.div
                className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <span className="text-xs font-mono text-secondary/50 text-white">Drag left/right to explore</span>
                <motion.div
                  className="w-8 h-5 border border-white/10 rounded-full flex items-center justify-center p-1"
                  animate={{ opacity: [0.3, 0.7, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <motion.div
                    className="w-2 h-1 bg-accent rounded-full"
                    animate={{ x: [-8, 8, -8] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          ) : (
            /* ─── 3D CAROUSEL VIEW ───────────────────────────────────── */
            <motion.div
              key="carousel"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative w-full h-full flex items-center"
              style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
            >
              <CarouselView
                items={items}
                rotation={rotationSpring}
                angleStep={angleStep}
                activeIndex={activeIndex}
                onCardClick={(project) => setSelectedProject(project)}
              />

              {/* Right-side index */}
              <ProjectIndex
                items={items}
                activeIndex={activeIndex}
                onSelect={goToIndex}
              />

              {/* Active project info strip */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-[#0c0c0e] via-[#0c0c0e]/80 to-transparent pointer-events-none"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="max-w-lg pointer-events-auto pl-6">
                  <motion.p
                    key={activeIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="font-mono text-sm text-accent mb-2"
                  >
                    {items[activeIndex].project.number} — {items[activeIndex].project.category}
                  </motion.p>
                  <motion.h4
                    key={`title-${activeIndex}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 }}
                    className="text-3xl font-bold mb-3 text-white"
                  >
                    {items[activeIndex].project.title}
                  </motion.h4>
                  <motion.p
                    key={`desc-${activeIndex}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="text-base text-secondary line-clamp-2 mb-6"
                  >
                    {items[activeIndex].project.description}
                  </motion.p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedProject(items[activeIndex].project)}
                    className="text-sm font-bold px-6 py-3 bg-accent text-white rounded-xl hover:bg-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.5)] transition-all flex items-center gap-2"
                  >
                    View Details <ArrowRight size={18} />
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ─── MOBILE GRID FALLBACK (Hidden on Desktop) ──────────────────────── */}
      <div className="md:hidden grid grid-cols-1 gap-8 mt-8">
        {items.map((item, idx) => (
          <motion.div
            key={item.project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group glass-panel rounded-3xl overflow-hidden cursor-pointer flex flex-col h-full bg-white/[0.02] border border-white/10"
            onClick={() => setSelectedProject(item.project)}
          >
            <div className="relative h-56 overflow-hidden">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
              <img 
                src={item.image} 
                alt={item.project.title} 
                className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 z-20">
                <span className="px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-xs font-mono text-white border border-white/10">
                  {item.project.number}
                </span>
              </div>
            </div>
            
            <div className="p-6 flex flex-col flex-1 bg-gradient-to-b from-transparent to-black/40">
              <span className="text-accent text-xs font-mono mb-2">{item.project.category}</span>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                {item.project.title}
              </h3>
              <p className="text-secondary text-sm line-clamp-2 mb-4 flex-1">
                {item.project.description}
              </p>
              
              <div className="flex items-center gap-2 text-white text-sm font-medium group-hover:gap-4 transition-all mt-auto">
                View Project <ArrowRight size={16} className="text-accent" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ─── Project Details Modal ──────────────────────────────────────── */}
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

// ─── Ring Card ──────────────────────────────────────────────────────────────
const RingCard: React.FC<{
  item: WheelItem;
  index: number;
  x: number;
  y: number;
  angle: number;
  onHover: () => void;
  onClick: () => void;
  isActive: boolean;
}> = ({ item, index, x, y, angle, onHover, onClick, isActive }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="absolute"
      style={{
        left: x,
        top: y,
        width: CARD_SIZE,
        height: CARD_SIZE,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: 1,
        scale: isActive ? 1.1 : 1,
        rotate: angle,
      }}
      transition={{
        delay: index * 0.08,
        type: 'spring',
        stiffness: 200,
        damping: 20,
      }}
      onMouseEnter={() => {
        setIsHovered(true);
        onHover();
      }}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div
        className="w-full h-full rounded-2xl overflow-hidden border border-white/10 transition-all duration-300 cursor-pointer shadow-2xl relative"
        style={{
          borderColor: isActive ? 'var(--accent)' : 'rgba(255,255,255,0.1)',
          boxShadow: isActive
            ? '0 0 30px rgba(99, 102, 241, 0.4)'
            : '0 10px 30px rgba(0,0,0,0.5)',
        }}
      >
        <img
          src={item.image}
          alt={item.project.title}
          className="w-full h-full object-cover object-top"
          style={{
            transform: `rotate(${-angle}deg) scale(1.15)`,
            transition: 'transform 0.5s ease',
          }}
          draggable={false}
        />

        {/* Hover overlay */}
        <AnimatePresence>
          {(isHovered || isActive) && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-2xl"
              style={{ transform: `rotate(${-angle}deg)` }}
            >
              <span className="text-xs font-mono font-medium px-4 py-2 bg-accent/90 rounded-full text-white backdrop-blur-md shadow-lg">
                View
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

// ─── 3D Carousel View ──────────────────────────────────────────────────────
const CarouselView: React.FC<{
  items: WheelItem[];
  rotation: any;
  angleStep: number;
  activeIndex: number;
  onCardClick: (project: Project) => void;
}> = ({ items, rotation, angleStep, activeIndex, onCardClick }) => {
  const carouselRadius = 320;

  return (
    <div
      className="absolute left-1/2 top-1/2"
      style={{
        perspective: '1200px',
        transform: 'translate(-60%, -50%)',
      }}
    >
      <motion.div
        className="relative"
        style={{
          width: 220,
          height: 160,
          transformStyle: 'preserve-3d',
          rotateY: useTransform(rotation, (r: number) => -r),
        }}
      >
        {items.map((item, index) => {
          const itemAngle = index * angleStep;

          return (
            <CarouselCard
              key={item.project.id}
              item={item}
              itemAngle={itemAngle}
              radius={carouselRadius}
              isActive={activeIndex === index}
              onClick={() => onCardClick(item.project)}
            />
          );
        })}
      </motion.div>
    </div>
  );
};

// ─── Carousel Card ──────────────────────────────────────────────────────────
const CarouselCard: React.FC<{
  item: WheelItem;
  itemAngle: number;
  radius: number;
  isActive: boolean;
  onClick: () => void;
}> = ({ item, itemAngle, radius, isActive, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="absolute left-1/2 top-1/2 cursor-pointer"
      style={{
        width: 300,
        height: 200,
        marginLeft: -150,
        marginTop: -100,
        transformStyle: 'preserve-3d',
        transform: `rotateY(${itemAngle}deg) translateZ(${radius}px)`,
        backfaceVisibility: 'hidden',
      }}
      whileHover={{ scale: 1.05 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div
        className="w-full h-full rounded-2xl overflow-hidden border border-white/10 transition-all duration-300 shadow-2xl relative"
        style={{
          borderColor: isActive ? 'var(--accent)' : 'rgba(255,255,255,0.1)',
          boxShadow: isActive
            ? '0 0 50px rgba(99, 102, 241, 0.4), 0 20px 40px rgba(0,0,0,0.6)'
            : '0 20px 40px rgba(0,0,0,0.5)',
        }}
      >
        <img
          src={item.image}
          alt={item.project.title}
          className="w-full h-full object-cover object-top"
          draggable={false}
        />

        {/* Active/Hover overlay */}
        <div
          className="absolute inset-0 transition-all duration-300 rounded-2xl"
          style={{
            background: isActive
              ? 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 60%)'
              : isHovered
              ? 'rgba(0,0,0,0.4)'
              : 'rgba(0,0,0,0.2)',
          }}
        >
          {isActive && (
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-xs font-mono text-accent">{item.project.number}</p>
              <p className="text-base font-bold text-white truncate">{item.project.title}</p>
            </div>
          )}
          {isHovered && !isActive && (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-sm font-mono font-bold px-4 py-2 bg-accent/90 rounded-full text-white backdrop-blur-md">
                View
              </span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// ─── Project Index (Right Sidebar) ──────────────────────────────────────────
const ProjectIndex: React.FC<{
  items: WheelItem[];
  activeIndex: number;
  onSelect: (idx: number) => void;
}> = ({ items, activeIndex, onSelect }) => {
  return (
    <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-3 items-end">
      {items.map((item, idx) => (
        <motion.button
          key={item.project.id}
          onClick={() => onSelect(idx)}
          className="text-right transition-all duration-300 group flex items-center gap-3"
          whileHover={{ x: -4 }}
        >
          <motion.div
            className="h-px bg-accent transition-all duration-300"
            animate={{
              width: activeIndex === idx ? 24 : 0,
              opacity: activeIndex === idx ? 1 : 0,
            }}
          />
          <span
            className="text-sm font-mono transition-all duration-300 leading-tight"
            style={{
              color: activeIndex === idx ? 'white' : 'rgba(255,255,255,0.4)',
              fontWeight: activeIndex === idx ? 700 : 400,
            }}
          >
            {item.project.title.length > 18
              ? item.project.title.slice(0, 18) + '…'
              : item.project.title}
          </span>
        </motion.button>
      ))}
    </div>
  );
};

// ─── Project Details Modal ──────────────────────────────────────────────────
const ProjectDetails: React.FC<{ project: Project; onClose: () => void }> = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        onClick={onClose}
      />
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        className="relative w-full max-w-5xl max-h-[90vh] bg-[#0c0c0e] border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col"
      >
        {/* Header with project image */}
        <div className="relative h-64 md:h-80 overflow-hidden shrink-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-[#0c0c0e]/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 px-8 py-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-sm px-3 py-1 bg-accent/20 text-accent rounded-full border border-accent/20">{project.number}</span>
              <span className="font-mono text-sm text-secondary">{project.category}</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-black text-white">{project.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-3 text-white/70 hover:text-white bg-black/40 hover:bg-black/80 backdrop-blur-md rounded-full transition-all hover:scale-110"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8 md:p-12 space-y-12 no-scrollbar">
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech, idx) => (
              <span key={idx} className="text-sm font-medium text-primary bg-white/5 border border-white/10 px-4 py-2 rounded-full shadow-inner">
                {tech}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-12">
              <section>
                <h4 className="font-mono text-sm text-accent tracking-widest mb-4 flex items-center gap-4">
                  <span className="w-8 h-px bg-accent"></span> 01 — OVERVIEW
                </h4>
                <p className="text-secondary leading-relaxed text-lg">{project.description}</p>
              </section>

              {project.problem && (
                <section>
                  <h4 className="font-mono text-sm text-accent tracking-widest mb-4 flex items-center gap-4">
                    <span className="w-8 h-px bg-accent"></span> 02 — PROBLEM
                  </h4>
                  <p className="text-secondary leading-relaxed text-lg">{project.problem}</p>
                </section>
              )}

              {project.solution && (
                <section>
                  <h4 className="font-mono text-sm text-accent tracking-widest mb-4 flex items-center gap-4">
                    <span className="w-8 h-px bg-accent"></span> 03 — SOLUTION
                  </h4>
                  <p className="text-secondary leading-relaxed text-lg">{project.solution}</p>
                </section>
              )}

              {project.features.length > 0 && (
                <section>
                  <h4 className="font-mono text-sm text-accent tracking-widest mb-4 flex items-center gap-4">
                    <span className="w-8 h-px bg-accent"></span> 04 — FEATURES
                  </h4>
                  <ul className="list-disc list-inside text-secondary space-y-3 text-lg">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="leading-relaxed">{feature}</li>
                    ))}
                  </ul>
                </section>
              )}

              {project.challenges.length > 0 && (
                <section>
                  <h4 className="font-mono text-sm text-accent tracking-widest mb-4 flex items-center gap-4">
                    <span className="w-8 h-px bg-accent"></span> 05 — CHALLENGES
                  </h4>
                  <ul className="list-disc list-inside text-secondary space-y-3 text-lg">
                    {project.challenges.map((challenge, idx) => (
                      <li key={idx} className="leading-relaxed">{challenge}</li>
                    ))}
                  </ul>
                </section>
              )}

              {project.learning.length > 0 && (
                <section>
                  <h4 className="font-mono text-sm text-accent tracking-widest mb-4 flex items-center gap-4">
                    <span className="w-8 h-px bg-accent"></span> 06 — WHAT I LEARNED
                  </h4>
                  <ul className="list-disc list-inside text-secondary space-y-3 text-lg">
                    {project.learning.map((learn, idx) => (
                      <li key={idx} className="leading-relaxed">{learn}</li>
                    ))}
                  </ul>
                </section>
              )}
            </div>

            <div className="space-y-8">
              <section className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] shadow-inner">
                <h4 className="font-mono text-sm text-secondary tracking-widest mb-6">LINKS</h4>
                <div className="flex flex-col gap-5">
                  {project.github ? (
                    <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-base text-primary hover:text-accent transition-colors group">
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all">
                        <Github size={20} />
                      </div>
                      View Source Repository
                    </a>
                  ) : (
                    <span className="flex items-center gap-3 text-base text-secondary/50">
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                        <Github size={20} />
                      </div>
                      Source Not Available
                    </span>
                  )}
                  {project.demo ? (
                    <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-base text-primary hover:text-accent transition-colors group">
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all">
                        <ExternalLink size={20} />
                      </div>
                      Live Website Demo
                    </a>
                  ) : (
                    <span className="flex items-center gap-3 text-base text-secondary/50">
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                        <ExternalLink size={20} />
                      </div>
                      Demo Not Available
                    </span>
                  )}
                </div>
              </section>

              <section className="p-8 rounded-3xl border border-white/5 bg-white/[0.02]">
                <h4 className="font-mono text-sm text-secondary tracking-widest mb-6">METADATA</h4>
                <div className="space-y-5 text-base">
                  <div>
                    <div className="text-secondary/70 text-sm mb-1">Project Domain</div>
                    <div className="text-primary font-medium">{project.category}</div>
                  </div>
                  <div>
                    <div className="text-secondary/70 text-sm mb-1">Current Status</div>
                    <div className="text-accent font-medium flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                      Completed
                    </div>
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

export default WorksWheel;
