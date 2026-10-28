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
      container.addEventListener('scroll', checkScroll);
      window.addEventListener('resize', checkScroll);
      return () => {
        container.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
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
    <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Round Ornament di sebelah KANAN dengan glow */}
      <div className="absolute -right-40 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-gradient-to-b from-purple-500/20 to-blue-500/10 blur-3xl pointer-events-none" />
      <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-purple-500/30 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <Reveal>
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-sm font-semibold text-purple-400">📦 PROJECTS</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold">
                <span className="text-slate-50">Featured </span>
                <span className="gradient-text">Projects</span>
              </h2>
            </div>
          </div>
        </Reveal>

        {/* Scroll Container */}
        <div className="relative group">
          {/* Left Scroll Button */}
          <motion.button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-purple-500/20 backdrop-blur border border-purple-500/50 hover:bg-purple-500/40 disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center text-slate-50 group-hover:opacity-100 opacity-0 sm:opacity-100"
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
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-purple-500/20 backdrop-blur border border-purple-500/50 hover:bg-purple-500/40 disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center text-slate-50 group-hover:opacity-100 opacity-0 sm:opacity-100"
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
        <p className="text-center text-sm text-slate-400 mt-6">
          Scroll to see more projects →
        </p>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
