"use client";

import React from "react";
import { ThemeToggle } from "./ThemeToggle";

interface NavbarProps {
  onOpenPhilosophy: () => void;
  onFocusWaitlist: () => void;
}

export function Navbar({ onOpenPhilosophy, onFocusWaitlist }: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/70 dark:bg-[#050506]/70 backdrop-blur-md transition-colors relative">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Brand Logo & Name */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="flex h-7 w-7 items-center justify-center rounded-md border border-black/20 dark:border-white/20 bg-zinc-100 dark:bg-zinc-900 transition-all duration-300 group-hover:border-black dark:group-hover:border-white">
                <div className="h-2 w-2 rounded-sm bg-black dark:bg-white" />
              </div>
              <span className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-white">
                Apoc
              </span>
            </a>
          </div>

          {/* Right Navigation & Controls */}
          <div className="flex items-center gap-4 sm:gap-6 text-xs font-sans">
            <button
              onClick={onOpenPhilosophy}
              className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
            >
              Philosophy
            </button>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Pre-order Waitlist Action */}
            <button
              onClick={onFocusWaitlist}
              className="rounded-full border border-black dark:border-white bg-black dark:bg-white px-4 py-1.5 font-medium text-white dark:text-black transition-all hover:bg-zinc-800 dark:hover:bg-zinc-200 active:scale-95 cursor-pointer"
            >
              Pre-Order Waitlist
            </button>
          </div>
        </div>
      </div>

      {/* Faded bottom edge separator without hard solid line */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-black/10 dark:via-white/10 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 -bottom-4 h-4 bg-gradient-to-b from-white/30 dark:from-[#050506]/30 to-transparent pointer-events-none" />
    </header>
  );
}
