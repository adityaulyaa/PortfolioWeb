'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

interface NavigationItem {
  label: string;
  href: string;
  id: string;
}

const navigationItems: NavigationItem[] = [
  { label: 'Home', href: '/', id: 'home' },
  { label: 'About & Skills', href: '/#about', id: 'about' },
  { label: 'Projects', href: '/#projects', id: 'projects' },
  { label: 'Experience', href: '/#experience', id: 'experience' },
  { label: 'Education', href: '/#education', id: 'education' },
];

/**
 * Custom hook to detect active section based on scroll position
 * Uses Intersection Observer API for performance
 */
function useActiveSection() {
  const [activeSection, setActiveSection] = useState('home');
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Create intersection observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        // Find the section that is most visible
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        
        if (visibleEntries.length > 0) {
          // Sort by intersection ratio to get the most visible one
          const mostVisible = visibleEntries.reduce((prev, current) =>
            current.intersectionRatio > prev.intersectionRatio ? current : prev
          );
          
          const sectionId = mostVisible.target.id;
          
          // Map section IDs to navigation IDs
          if (sectionId === 'about' || sectionId === 'skills') {
            setActiveSection('about');
          } else if (sectionId) {
            setActiveSection(sectionId);
          }
        }
      },
      {
        threshold: [0, 0.25, 0.5, 0.75, 1],
        rootMargin: '-64px 0px -66% 0px', // Account for navbar height
      }
    );

    // Observe all sections
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => {
      if (observerRef.current) {
        observerRef.current.observe(section);
      }
    });

    // Cleanup
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return activeSection;
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const activeSection = useActiveSection();
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const navItemsRef = useRef<Array<HTMLAnchorElement | null>>([]);

  useEffect(() => {
    const activeIndex = navigationItems.findIndex((item) => item.id === activeSection);
    const activeElement = navItemsRef.current[activeIndex];

    if (activeElement) {
      const { offsetLeft, offsetWidth } = activeElement;
      setIndicatorStyle({
        left: offsetLeft + (offsetWidth / 2) - 22, // Center the 44px (w-11) indicator
        width: 44, // w-11 in Tailwind is 2.75rem = 44px
      });
    }
  }, [activeSection]);

  const setNavItemRef = (index: number) => (el: HTMLAnchorElement | null) => {
    navItemsRef.current[index] = el;
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-50 h-14 bg-[#04081d]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-full max-w-[1200px] items-center px-4 sm:px-5 lg:px-5">
        <Link href="/" className="flex shrink-0 items-center" aria-label="Aditya Ulya home">
          <span className="text-[16px] sm:text-[17px] lg:text-[18px] font-bold tracking-[-0.03em] text-[#f1f4ff]">Aditya Ulya</span>
        </Link>

        <div className="ml-auto hidden h-full items-center gap-8 xl:gap-9 lg:flex relative">
          {navigationItems.map((item, index) => (
            <Link
              key={item.id}
              href={item.href}
              ref={setNavItemRef(index)}
              className={`relative flex h-full items-center text-[13px] font-medium transition-colors ${
                activeSection === item.id ? 'text-[#a360ff]' : 'text-[#c5d0ec] hover:text-white'
              }`}
            >
              {item.label}
            </Link>
          ))}
          
          {/* Dynamic indicator light - desktop only */}
          <div 
            className="absolute -bottom-0.5 h-[2px] rounded-full bg-[#9e55ff] shadow-[0_0_12px_3px_rgba(140,72,255,0.6)] transition-all duration-300 ease-out"
            style={{
              left: `${indicatorStyle.left}px`,
              width: `${indicatorStyle.width}px`,
            }}
          />
        </div>

        <div className="ml-auto flex items-center gap-2 sm:gap-3 lg:ml-[auto]">
          <ThemeToggle />
          <a
            href="https://wa.me/qr/6QLMK6SY557OB1?s=r"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden min-h-9 rounded-xl bg-gradient-to-r from-[#8745ef] to-[#337cf5] px-5 sm:px-6 py-2 text-[13px] font-bold text-white shadow-[0_5px_18px_rgba(64,105,255,0.28)] transition-transform hover:-translate-y-0.5 sm:inline-flex sm:items-center"
          >
            Contact
          </a>
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="grid h-10 sm:h-11 w-10 sm:w-11 place-items-center rounded-lg text-[#c5d0ec] hover:bg-white/5 lg:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? 'M6 18 18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-b border-[#293962]/60 bg-[#060b22] px-4 sm:px-5 py-2 sm:py-3 lg:hidden">
          {navigationItems.map((item) => (
            <Link 
              key={item.id} 
              href={item.href} 
              onClick={() => setIsOpen(false)} 
              className="block rounded-lg px-3 py-2 sm:py-2.5 text-sm font-medium text-[#c5d0ec] hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
