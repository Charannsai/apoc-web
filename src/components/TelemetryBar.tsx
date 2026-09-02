"use client";

import React from "react";
import { ThemeToggle } from "./ThemeToggle";

interface TelemetryBarProps {
  onOpenPhilosophy: () => void;
  onFocusWaitlist: () => void;
}

export function TelemetryBar({
  onOpenPhilosophy,
  onFocusWaitlist,
}: TelemetryBarProps) {
  return (
    <footer className="w-full bg-white/70 dark:bg-[#050506]/70 backdrop-blur-md py-6 px-6 sm:px-8 text-xs text-zinc-500 font-sans transition-colors relative">
      {/* Faded top edge separator without hard solid line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/10 dark:via-white/10 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 -top-4 h-4 bg-gradient-to-t from-white/30 dark:from-[#050506]/30 to-transparent pointer-events-none" />

      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left: Status */}
        <div className="flex items-center gap-4 text-xs text-zinc-600 dark:text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-zinc-900 dark:bg-white" />
            <span>Private & Local</span>
          </div>
          <span className="text-zinc-300 dark:text-zinc-700">•</span>
          <span>Zero cloud telemetry</span>
          <span className="text-zinc-300 dark:text-zinc-700">•</span>
          <span>Human-first control</span>
        </div>

        {/* Right: Links, Theme Toggle & Copyright */}
        <div className="flex items-center gap-5 text-xs">
          <button
            onClick={onOpenPhilosophy}
            className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
          >
            Philosophy
          </button>
          <button
            onClick={onFocusWaitlist}
            className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
          >
            Pre-Order Waitlist
          </button>
          <ThemeToggle />
          <span className="text-zinc-300 dark:text-zinc-700">|</span>
          <span className="text-zinc-500">© 2026 Apoc Systems</span>
        </div>
      </div>
    </footer>
  );
}
