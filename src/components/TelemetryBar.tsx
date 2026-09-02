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
    <footer className="w-full border-t border-black/[0.08] dark:border-white/[0.08] bg-white dark:bg-[#050506] py-6 px-6 sm:px-8 text-xs text-zinc-500 font-sans transition-colors">
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
