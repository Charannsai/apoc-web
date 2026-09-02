"use client";

import React from "react";
import { Shield, Sparkles } from "lucide-react";

interface TelemetryBarProps {
  onOpenPhilosophy: () => void;
  onOpenWaitlist: () => void;
}

export function TelemetryBar({
  onOpenPhilosophy,
  onOpenWaitlist,
}: TelemetryBarProps) {
  return (
    <footer className="w-full border-t border-white/[0.08] bg-[#050506] py-6 px-6 sm:px-8 text-xs text-zinc-500 font-sans">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left: Calm Status */}
        <div className="flex items-center gap-4 text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            <span>Private & Local</span>
          </div>
          <span className="text-zinc-700">•</span>
          <span>Zero cloud telemetry</span>
          <span className="text-zinc-700">•</span>
          <span>Human-first control</span>
        </div>

        {/* Right: Links & Copyright */}
        <div className="flex items-center gap-5 text-xs">
          <button
            onClick={onOpenPhilosophy}
            className="text-zinc-400 hover:text-white transition-colors"
          >
            Philosophy
          </button>
          <button
            onClick={onOpenWaitlist}
            className="text-zinc-400 hover:text-white transition-colors"
          >
            Request Access
          </button>
          <span className="text-zinc-600">|</span>
          <span className="text-zinc-500">© 2026 Apoc</span>
        </div>
      </div>
    </footer>
  );
}
