'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

const navigationItems = [
  { label: 'Home', href: '/', active: true },
  { label: 'About', href: '/#about' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Education', href: '/#education' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 h-14 bg-[#04081d]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-full max-w-[1200px] items-center px-3 sm:px-5">
        <Link href="/" className="flex shrink-0 items-center" aria-label="Aditya Ulya home">
          <span className="text-[18px] font-bold tracking-[-0.03em] text-[#f1f4ff]">Aditya Ulya</span>
        </Link>

        <div className="ml-auto hidden h-full items-center gap-9 lg:flex">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative flex h-full items-center text-[13px] font-medium transition-colors ${
                item.active ? 'text-[#a360ff]' : 'text-[#c5d0ec] hover:text-white'
              }`}
            >
              {item.label}
              {item.active && <span className="absolute bottom-0 h-[2px] w-11 rounded-full bg-[#9e55ff] shadow-[0_0_12px_3px_rgba(140,72,255,0.6)]" />}
            </Link>
          ))}
        </div>

        <div className="ml-auto flex items-center gap-3 lg:ml-[auto]">
          <ThemeToggle />
          <a
            href="https://wa.me/qr/6QLMK6SY557OB1?s=r"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden min-h-9 rounded-xl bg-gradient-to-r from-[#8745ef] to-[#337cf5] px-6 py-2 text-[13px] font-bold text-white shadow-[0_5px_18px_rgba(64,105,255,0.28)] transition-transform hover:-translate-y-0.5 sm:inline-flex sm:items-center"
          >
            Contact
          </a>
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="grid h-11 w-11 place-items-center rounded-lg text-[#c5d0ec] hover:bg-white/5 lg:hidden"
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
        <div className="border-b border-[#293962]/60 bg-[#060b22] px-5 py-3 lg:hidden">
          {navigationItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)} className="block rounded-lg px-3 py-2.5 text-sm font-medium text-[#c5d0ec] hover:bg-white/5 hover:text-white">
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
