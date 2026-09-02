"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

interface NavbarProps {
  onOpenPhilosophy: () => void;
  onOpenWaitlist: () => void;
}

export function Navbar({ onOpenPhilosophy, onOpenWaitlist }: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/[0.08] bg-[#050506]/80 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Brand Logo & Name */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="flex h-7 w-7 items-center justify-center rounded-md border border-white/20 bg-zinc-900 transition-all duration-300 group-hover:border-white">
                <div className="h-2 w-2 rounded-sm bg-white" />
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-sm font-semibold tracking-tight text-white">Apoc</span>
                <span className="text-xs text-zinc-500 font-normal">/ Agent Pocket</span>
              </div>
            </a>
          </div>

          {/* Right Navigation */}
          <div className="flex items-center gap-6 text-xs">
            <button
              onClick={onOpenPhilosophy}
              className="text-zinc-400 hover:text-white transition-colors"
            >
              Philosophy
            </button>
            <button
              onClick={onOpenWaitlist}
              className="rounded-full border border-white bg-white px-4 py-1.5 font-medium text-black transition-all hover:bg-zinc-200 active:scale-95"
            >
              Get Pocket
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
