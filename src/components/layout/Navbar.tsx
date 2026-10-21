"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  ["About", "/#about"],
  ["Skills", "/#skills"],
  ["Projects", "/#projects"],
  ["Experience", "/#experience"],
  ["Education", "/#education"],
];

export function Navbar({ ownerName }: { ownerName: string }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-10 border-b border-slate-200/80 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4" aria-label="Main navigation">
        <Link href="/" className="font-bold text-slate-950 dark:text-white">{ownerName}</Link>
        <button className="rounded-lg px-3 py-2 md:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">Menu</button>
        <div className={`${open ? "flex" : "hidden"} absolute left-0 top-full w-full flex-col gap-4 border-b border-slate-200 bg-white p-6 md:static md:flex md:w-auto md:flex-row md:border-0 md:bg-transparent md:p-0 dark:border-slate-800 dark:bg-slate-950 md:dark:bg-transparent`}>
          {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)} className="text-sm hover:text-blue-600">{label}</a>)}
        </div>
      </nav>
    </header>
  );
}
