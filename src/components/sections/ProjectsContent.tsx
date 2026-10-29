'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { Reveal } from '@/components/ui/Reveal';
import { ProjectListItemDto } from '@/types';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface ProjectsContentProps {
  projects: ProjectListItemDto[];
}

export function ProjectsContent({ projects }: ProjectsContentProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const prefersReducedMotion = useReducedMotion();

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const container = scrollContainerRef.current;
    if (container) {
      // Use passive: true for scroll performance
      const throttledScroll = () => {
        if (!rafRef.current) {
          rafRef.current = requestAnimationFrame(() => {
            checkScroll();
            rafRef.current = null;
          });
        }
      };
      
      const rafRef = { current: null as number | null };

      container.addEventListener('scroll', throttledScroll, { passive: true });
      window.addEventListener('resize', checkScroll);
      return () => {
        container.removeEventListener('scroll', throttledScroll);
        window.removeEventListener('resize', checkScroll);
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
      };
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
<section id="projects" data-nav-section="projects" className="relative -mt-20 sm:-mt-24 lg:-mt-1 overflow-visible">
      {/* Background Decorative Shapes - Hidden on mobile, visible on desktop */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        {/* Skewed gradient shape - right top (mirrors About & Skills) */}
        <div className="absolute -right-[15%] top-[5%] h-[70%] w-[50%] skew-x-[-18deg] bg-gradient-to-br from-[#152b9c]/40 via-[#102b88]/15 to-transparent opacity-60" />
        
        {/* Rotated rectangle with border glow - left bottom (mirrors About & Skills) */}
        <div className="absolute left-[5%] bottom-[15%] h-[40%] w-[30%] rotate-[15deg] rounded-[2.5rem] border border-[#2f72ff]/40 bg-gradient-to-br from-[#154fe9]/50 to-[#4120b8]/15 shadow-[0_0_40px_rgba(43,86,255,0.4)]" />
        
        {/* Soft glow circle - right bottom (mirrors About & Skills) */}
        <div className="absolute right-[8%] bottom-[5%] h-[50%] w-[35%] rounded-full bg-gradient-to-t from-[#2f72ff]/30 to-transparent blur-3xl" />
      </div>

            {/* Wave Pattern - Outside the card and extending beyond the rounded corner (top-right, z-15) */}
      <div className="pointer-events-none absolute right-[-150px] top-[-715px] z-15 hidden h-[400px] w-[440px] -translate-x-px -translate-y-px lg:block">
        <svg viewBox="0 0 440 210" className="h-full w-full overflow-visible" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <linearGradient id="projectsWaveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#154fe9" stopOpacity="0.82" />
              <stop offset="55%" stopColor="#2f72ff" stopOpacity="0.48" />
              <stop offset="100%" stopColor="#2f72ff" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M440 400H0C90 392 140 372 198 354C270 328 346 348 440 400Z" fill="url(#projectsWaveGradient)" />
          <path d="M440 400C352 336 280 319 196 342C116 363 62 393 0 400" fill="none" stroke="#2f72ff" strokeOpacity="0.72" strokeWidth="2" />
          <path d="M440 390C356 319 285 297 194 322C118 343 62 375 0 398" fill="none" stroke="#154fe9" strokeOpacity="0.38" strokeWidth="1" />
        </svg>
      </div>

      <Reveal delay={0.1}>
        <div className="relative z-20 rounded-tr-[6rem] border border-[#2e58b8] bg-[#04081d] shadow-[0_-8px_32px_rgba(10,15,42,0.5),0_0_40px_rgba(47,114,255,0.15)] overflow-hidden w-full">
          {/* Top Accent Bar - Gradient line at top */}
          <div className="h-1 bg-gradient-to-r from-transparent via-[#2f72ff] to-transparent" />
          
          {/* Alignment wrapper - matches Hero section padding */}
          <div className="mx-auto max-w-[1200px] px-5 sm:px-6 lg:px-5 py-8 sm:py-10 lg:py-12">
            {/* Floating Gradient Overlay - Inside Card, very subtle */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#2f72ff]/5 via-transparent to-[#154fe9]/5 opacity-40" />
            
            {/* Background Decorations - Original subtle glow (mirrored to right) */}
            <div className="pointer-events-none absolute right-[10%] top-[20%] h-24 w-32 rotate-[-15deg] rounded-full bg-gradient-to-r from-[#2f72ff]/10 via-[#154fe9]/5 to-transparent blur-2xl" />
            
            {/* Additional accent glow - left side (mirrored) */}
            <div className="pointer-events-none absolute left-[5%] bottom-[30%] h-28 w-40 rounded-full bg-gradient-to-l from-[#154fe9]/10 via-[#2f72ff]/5 to-transparent blur-2xl" />
            
            {/* Vertical Divider Line - Desktop only */}
            <div className="pointer-events-none absolute left-1/2 top-[60px] bottom-[40px] hidden lg:block w-px bg-gradient-to-b from-transparent via-[#2f72ff]/20 to-transparent" />

            {/* ========== MIRRORED FLOATING HEXAGON NETWORK ========== */}
            {!prefersReducedMotion && (
              <>
            
            {/* Hexagon Cluster - Top Right (Mirrored) */}
            <div className="pointer-events-none absolute top-8 right-12 hidden lg:block">
              <div className="relative w-32 h-32">
                {/* Main Hexagon - Largest with floating animation */}
                <svg className="absolute top-0 right-0 w-12 h-12 animate-[float_6s_ease-in-out_infinite]" viewBox="0 0 100 100">
                  <polygon 
                    points="50 1 95 25 95 75 50 99 5 75 5 25" 
                    fill="none" 
                    stroke="url(#hexGradient1)" 
                    strokeWidth="2"
                    className="animate-[spin_20s_linear_infinite]"
                  />
                  <defs>
                    <linearGradient id="hexGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#2f72ff" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#8a43ed" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>
                </svg>
                
                {/* Second Hexagon - Medium with delayed float */}
                <svg className="absolute top-6 right-10 w-10 h-10 animate-[float_5s_ease-in-out_infinite_0.5s]" viewBox="0 0 100 100">
                  <polygon 
                    points="50 1 95 25 95 75 50 99 5 75 5 25" 
                    fill="none" 
                    stroke="url(#hexGradient2)" 
                    strokeWidth="2"
                    className="animate-[spin_15s_linear_infinite_reverse]"
                  />
                  <defs>
                    <linearGradient id="hexGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#154fe9" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#2f72ff" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>
                </svg>
                
                {/* Third Hexagon - Small with fastest float */}
                <svg className="absolute top-12 right-4 w-8 h-8 animate-[float_4s_ease-in-out_infinite_1s]" viewBox="0 0 100 100">
                  <polygon 
                    points="50 1 95 25 95 75 50 99 5 75 5 25" 
                    fill="none" 
                    stroke="url(#hexGradient3)" 
                    strokeWidth="2"
                    className="animate-[spin_18s_linear_infinite]"
                  />
                  <defs>
                    <linearGradient id="hexGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#53b9ff" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#2f72ff" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>
                </svg>
                
                {/* Connecting Dots with pulse */}
                <div className="absolute top-3 right-3 h-1.5 w-1.5 rounded-full bg-gradient-to-br from-[#2f72ff] to-[#8a43ed] shadow-[0_0_10px_rgba(47,114,255,0.7)] animate-[pulse_2s_ease-in-out_infinite]" />
                <div className="absolute top-10 right-12 h-1 w-1 rounded-full bg-gradient-to-br from-[#154fe9] to-[#2f72ff] shadow-[0_0_8px_rgba(21,79,233,0.6)] animate-[pulse_2.5s_ease-in-out_infinite_0.3s]" />
                <div className="absolute top-14 right-6 h-1 w-1 rounded-full bg-gradient-to-br from-[#53b9ff] to-[#2f72ff] shadow-[0_0_6px_rgba(83,185,255,0.5)] animate-[pulse_3s_ease-in-out_infinite_0.6s]" />
              </div>
            </div>

            {/* Single Hexagon with Nodes - Bottom Left (Mirrored) */}
            <div className="pointer-events-none absolute bottom-12 left-16 hidden lg:block">
              <div className="relative w-24 h-24 animate-[float_7s_ease-in-out_infinite_1.5s]">
                {/* Main Hexagon with rotation */}
                <svg className="absolute top-0 left-0 w-14 h-14 animate-[spin_25s_linear_infinite_reverse]" viewBox="0 0 100 100">
                  <polygon 
                    points="50 1 95 25 95 75 50 99 5 75 5 25" 
                    fill="url(#hexFill)" 
                    stroke="url(#hexGradient4)" 
                    strokeWidth="2"
                  />
                  <defs>
                    <linearGradient id="hexGradient4" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#154fe9" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#4120b8" stopOpacity="0.4" />
                    </linearGradient>
                    <radialGradient id="hexFill">
                      <stop offset="0%" stopColor="#2f72ff" stopOpacity="0.1" />
                      <stop offset="100%" stopColor="#154fe9" stopOpacity="0.05" />
                    </radialGradient>
                  </defs>
                </svg>
                
                {/* Connecting Lines with opacity animation */}
                <svg className="absolute -top-2 -left-2 w-28 h-28 opacity-30 animate-[pulse_4s_ease-in-out_infinite]">
                  <line x1="56" y1="28" x2="20" y2="10" stroke="#2f72ff" strokeWidth="1" strokeDasharray="2,3" />
                  <line x1="56" y1="28" x2="80" y2="80" stroke="#154fe9" strokeWidth="1" strokeDasharray="2,3" />
                </svg>
                
                {/* Outer Nodes with bounce */}
                <div className="absolute -top-1 -left-1 h-1.5 w-1.5 rounded-full bg-gradient-to-br from-[#2f72ff] to-[#154fe9] shadow-[0_0_10px_rgba(47,114,255,0.7)] animate-[bounce_2s_ease-in-out_infinite]" />
                <div className="absolute bottom-2 left-0 h-1.5 w-1.5 rounded-full bg-gradient-to-br from-[#154fe9] to-[#4120b8] shadow-[0_0_10px_rgba(21,79,233,0.7)] animate-[bounce_2.5s_ease-in-out_infinite_0.5s]" />
              </div>
            </div>

            {/* Small Hexagon Accent - Center Top with gentle pulse */}
            <div className="pointer-events-none absolute top-4 left-1/2 -translate-x-1/2 hidden lg:block">
              <svg className="w-6 h-6 opacity-40 animate-[pulse_3s_ease-in-out_infinite]" viewBox="0 0 100 100">
                <polygon 
                  points="50 1 95 25 95 75 50 99 5 75 5 25" 
                  fill="none" 
                  stroke="#53b9ff" 
                  strokeWidth="2"
                  className="animate-[spin_12s_linear_infinite]"
                />
              </svg>
            </div>

            {/* Hexagon Accent - Top Left (Mirrored from Top Right) */}
            <div className="pointer-events-none absolute top-16 left-20 hidden lg:block">
              <div className="relative w-20 h-20 animate-[float_5.5s_ease-in-out_infinite_0.7s]">
                <svg className="absolute top-0 left-0 w-10 h-10 animate-[spin_16s_linear_infinite_reverse]" viewBox="0 0 100 100">
                  <polygon 
                    points="50 1 95 25 95 75 50 99 5 75 5 25" 
                    fill="none" 
                    stroke="url(#hexGradient5)" 
                    strokeWidth="2"
                  />
                  <defs>
                    <linearGradient id="hexGradient5" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#53b9ff" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#2f72ff" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute top-2 left-1 h-1.5 w-1.5 rounded-full bg-gradient-to-br from-[#53b9ff] to-[#2f72ff] shadow-[0_0_10px_rgba(83,185,255,0.6)] animate-[bounce_2.2s_ease-in-out_infinite]" />
              </div>
            </div>

            {/* Hexagon Accent - Bottom Right (Mirrored from Bottom Left) */}
            <div className="pointer-events-none absolute bottom-20 right-6 hidden lg:block">
              <div className="relative w-16 h-16 animate-[float_4.8s_ease-in-out_infinite_0.3s]">
                <svg className="absolute top-0 right-0 w-8 h-8 animate-[spin_17s_linear_infinite]" viewBox="0 0 100 100">
                  <polygon 
                    points="50 1 95 25 95 75 50 99 5 75 5 25" 
                    fill="url(#hexFill2)" 
                    stroke="url(#hexGradient6)" 
                    strokeWidth="2"
                  />
                  <defs>
                    <linearGradient id="hexGradient6" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#2f72ff" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#154fe9" stopOpacity="0.3" />
                    </linearGradient>
                    <radialGradient id="hexFill2">
                      <stop offset="0%" stopColor="#8a43ed" stopOpacity="0.08" />
                      <stop offset="100%" stopColor="#2f72ff" stopOpacity="0.04" />
                    </radialGradient>
                  </defs>
                </svg>
                <div className="absolute -bottom-1 right-1 h-1 w-1 rounded-full bg-gradient-to-br from-[#2f72ff] to-[#8a43ed] shadow-[0_0_8px_rgba(47,114,255,0.5)] animate-[pulse_2.8s_ease-in-out_infinite_0.4s]" />
              </div>
            </div>

            {/* Hexagon Cluster - Bottom Left Corner (Mirrored from Bottom Right) */}
            <div className="pointer-events-none absolute bottom-8 left-8 hidden lg:block">
              <div className="relative w-28 h-28">
                {/* Larger Hexagon */}
                <svg className="absolute bottom-0 left-0 w-12 h-12 animate-[float_6.2s_ease-in-out_infinite_1.2s]" viewBox="0 0 100 100">
                  <polygon 
                    points="50 1 95 25 95 75 50 99 5 75 5 25" 
                    fill="none" 
                    stroke="url(#hexGradient7)" 
                    strokeWidth="2"
                    className="animate-[spin_19s_linear_infinite_reverse]"
                  />
                  <defs>
                    <linearGradient id="hexGradient7" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#154fe9" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#8a43ed" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>
                </svg>
                
                {/* Smaller Hexagon offset */}
                <svg className="absolute top-2 left-6 w-7 h-7 animate-[float_5.3s_ease-in-out_infinite_0.9s]" viewBox="0 0 100 100">
                  <polygon 
                    points="50 1 95 25 95 75 50 99 5 75 5 25" 
                    fill="none" 
                    stroke="url(#hexGradient8)" 
                    strokeWidth="2"
                    className="animate-[spin_14s_linear_infinite]"
                  />
                  <defs>
                    <linearGradient id="hexGradient8" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#53b9ff" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#2f72ff" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>
                </svg>
                
                {/* Connecting dots */}
                <div className="absolute bottom-4 left-8 h-1.5 w-1.5 rounded-full bg-gradient-to-br from-[#154fe9] to-[#8a43ed] shadow-[0_0_10px_rgba(21,79,233,0.6)] animate-[pulse_2.2s_ease-in-out_infinite_0.2s]" />
                <div className="absolute top-6 left-2 h-1 w-1 rounded-full bg-gradient-to-br from-[#53b9ff] to-[#2f72ff] shadow-[0_0_8px_rgba(83,185,255,0.5)] animate-[pulse_2.7s_ease-in-out_infinite_0.5s]" />
              </div>
            </div>
              </>
            )}
            
            {/* Main content */}
            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[11px] sm:text-[12px] font-bold tracking-widest text-[#2f72ff] uppercase">📦 PROJECTS</span>
                  </div>
                  <h2 className="text-[28px] sm:text-[36px] font-bold leading-tight">
                    <span className="text-[#f4f6ff]">Featured </span>
                    <span className="gradient-text">Projects</span>
                  </h2>
                </div>
              </div>

              {/* Scroll Container */}
              <div className="relative group">
                {/* Left Scroll Button */}
                <motion.button
                  onClick={() => scroll('left')}
                  disabled={!canScrollLeft}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-[#2f72ff]/20 backdrop-blur border border-[#2f72ff]/50 hover:bg-[#2f72ff]/40 disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center text-slate-50 group-hover:opacity-100 opacity-0 sm:opacity-100"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </motion.button>

                {/* Right Scroll Button */}
                <motion.button
                  onClick={() => scroll('right')}
                  disabled={!canScrollRight}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-[#2f72ff]/20 backdrop-blur border border-[#2f72ff]/50 hover:bg-[#2f72ff]/40 disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center text-slate-50 group-hover:opacity-100 opacity-0 sm:opacity-100"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </motion.button>

                {/* Scrollable Projects Container */}
                <div
                  ref={scrollContainerRef}
                  className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide py-8 px-2"
                  style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                  }}
                >
                  {projects.map((project, index) => (
                    <motion.div
                      key={project.slug}
                      initial={!prefersReducedMotion ? { opacity: 0, x: 20 } : {}}
                      animate={!prefersReducedMotion ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <ProjectCard project={project} />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Scroll Indicator Text */}
              <p className="text-center text-sm text-[#a0afc8] mt-6">
                Scroll to see more projects →
              </p>
            </div>
            </div>
          </div>
        </Reveal>

        <style>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </section>
  );
}
