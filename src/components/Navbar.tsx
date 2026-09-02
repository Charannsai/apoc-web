"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";

interface NavbarProps {
  onOpenPhilosophy?: () => void;
  onFocusWaitlist?: () => void;
}

export function Navbar({ onOpenPhilosophy, onFocusWaitlist }: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 dark:bg-[#050506]/80 backdrop-blur-md transition-colors">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Brand Logo replacing previous icon & text */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center group">
              <Image
                src="/apoclogo.png"
                alt="APOC"
                width={120}
                height={32}
                priority
                className="h-7 w-auto object-contain dark:invert dark:hue-rotate-180 transition-all group-hover:opacity-85"
              />
            </Link>
          </div>

          {/* Right Navigation & Controls */}
          <div className="flex items-center gap-4 sm:gap-6 text-xs font-sans">
            {onOpenPhilosophy && (
              <button
                onClick={onOpenPhilosophy}
                className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
              >
                Philosophy
              </button>
            )}

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Pre-order Waitlist Action */}
            {onFocusWaitlist && (
              <button
                onClick={onFocusWaitlist}
                className="rounded-full border border-black dark:border-white bg-black dark:bg-white px-4 py-1.5 font-medium text-white dark:text-black transition-all hover:bg-zinc-800 dark:hover:bg-zinc-200 active:scale-95 cursor-pointer"
              >
                Pre-Order Waitlist
              </button>
            )}
          </div>
        </div>
      </div>
      {/* Soft gradient fade without any 1px border or solid line */}
      <div className="h-4 w-full bg-gradient-to-b from-white/80 dark:from-[#050506]/80 to-transparent pointer-events-none -mb-4" />
    </header>
  );
}
