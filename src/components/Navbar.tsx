"use client";

import React, { useState } from "react";
import { Terminal, Shield, Cpu, Layers, Command, ArrowUpRight, Sparkles } from "lucide-react";

interface NavbarProps {
  onOpenArchitecture: () => void;
  onOpenManifesto: () => void;
  onOpenWaitlist: () => void;
  onOpenCommandPalette: () => void;
}

export function Navbar({
  onOpenArchitecture,
  onOpenManifesto,
  onOpenWaitlist,
  onOpenCommandPalette,
}: NavbarProps) {
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#050506]/85 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Brand Logo & Name */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="group flex items-center gap-2.5 focus:outline-none focus-visible:ring-1 focus-visible:ring-white"
            >
              <div className="relative flex h-8 w-8 items-center justify-center rounded-lg border border-white/20 bg-zinc-900 shadow-inner transition-all duration-300 group-hover:border-white group-hover:bg-black">
                {/* Minimal geometric APOC icon */}
                <div className="h-3.5 w-3.5 rotate-45 border-2 border-white transition-transform duration-300 group-hover:rotate-90 group-hover:scale-110" />
                <div className="absolute h-1 w-1 rounded-full bg-white" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-base font-bold tracking-tight text-white">APOC</span>
                  <span className="rounded border border-white/15 bg-white/5 px-1.5 py-0.5 text-[10px] font-mono font-medium tracking-wider text-zinc-400">
                    POCKET
                  </span>
                </div>
                <span className="text-[10px] tracking-widest text-zinc-500 uppercase font-mono">
                  Agent Operating Environment
                </span>
              </div>
            </a>
          </div>

          {/* Center Status indicator */}
          <div className="hidden lg:flex items-center gap-2.5 rounded-full border border-white/10 bg-zinc-950/80 px-3.5 py-1 text-xs font-mono text-zinc-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/70 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-white"></span>
            </span>
            <span className="text-zinc-200">KERNEL v1.0-ALPHA</span>
            <span className="text-zinc-600">|</span>
            <span className="text-zinc-400">LOCAL-FIRST</span>
            <span className="text-zinc-600">|</span>
            <span className="text-zinc-500">CAPABILITY ≠ AUTHORITY</span>
          </div>

          {/* Navigation Links & Action */}
          <div className="flex items-center gap-2 sm:gap-3">
            <nav className="hidden md:flex items-center gap-1 text-xs font-mono">
              <button
                onClick={onOpenManifesto}
                onMouseEnter={() => setHoveredNav("manifesto")}
                onMouseLeave={() => setHoveredNav(null)}
                className="relative rounded-md px-3 py-1.5 text-zinc-400 transition-colors hover:text-white"
              >
                [ THESIS ]
              </button>
              <button
                onClick={onOpenArchitecture}
                onMouseEnter={() => setHoveredNav("arch")}
                onMouseLeave={() => setHoveredNav(null)}
                className="relative rounded-md px-3 py-1.5 text-zinc-400 transition-colors hover:text-white"
              >
                [ ARCHITECTURE ]
              </button>
            </nav>

            {/* Command Palette Trigger */}
            <button
              onClick={onOpenCommandPalette}
              title="Open Command Palette (⌘K)"
              className="flex items-center gap-1.5 rounded-md border border-white/15 bg-zinc-900/90 px-2.5 py-1.5 text-xs font-mono text-zinc-300 transition-all hover:border-white/40 hover:bg-zinc-800 hover:text-white"
            >
              <Command className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">CMD</span>
              <kbd className="rounded bg-black/60 px-1 py-0.2 text-[10px] text-zinc-400 border border-white/10">
                ⌘K
              </kbd>
            </button>

            {/* Waitlist / Access CTA */}
            <button
              onClick={onOpenWaitlist}
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-md border border-white bg-white px-3.5 py-1.5 text-xs font-semibold text-black transition-all duration-200 hover:bg-zinc-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] active:scale-95"
            >
              <span className="flex items-center gap-1.5 font-mono">
                GET ACCESS
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
