"use client";

import React, { useState } from "react";
import { ArrowRight, Check, Copy, Cpu, Shield } from "lucide-react";

interface HeroProps {
  onOpenWaitlist: (email?: string) => void;
  onOpenPhilosophy: () => void;
}

export function Hero({ onOpenWaitlist, onOpenPhilosophy }: HeroProps) {
  const [emailInput, setEmailInput] = useState("");
  const [copied, setCopied] = useState(false);
  const quickCmd = "curl -fsSL https://apoc.run | sh";

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      onOpenWaitlist(emailInput.trim());
      setEmailInput("");
    } else {
      onOpenWaitlist();
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(quickCmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative flex flex-col items-center text-center pt-8 pb-4 px-4 max-w-4xl mx-auto">
      {/* Calm subtle pill */}
      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-zinc-900/80 px-4 py-1.5 mb-6 text-xs text-zinc-300 font-mono backdrop-blur-md">
        <Cpu className="h-3.5 w-3.5 text-white" />
        <span>APOC // AGENT POCKET</span>
        <span className="text-zinc-600">•</span>
        <span className="text-zinc-400">PHYSICAL HARDWARE + AGENT OS INFRASTRUCTURE</span>
      </div>

      {/* Main Headline - Bold, Calm, Authoritative */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-white leading-[1.08] font-sans">
        Physical AI hardware. <br />
        <span className="text-zinc-400 font-light italic">Loaded with Agent OS.</span>
      </h1>

      {/* Core Proposition Narrative */}
      <p className="mt-6 max-w-2xl text-base sm:text-lg text-zinc-400 font-normal leading-relaxed font-sans">
        We don&apos;t build software in isolation. APOC couples <strong className="text-white font-medium">dedicated physical hardware</strong> with a
        <strong className="text-white font-medium"> loaded Agent OS layer</strong>. This makes the hardware directly adaptable by the AI—giving
        your agent full awareness of its compute, capabilities, memory, and physical boundaries.
      </p>

      {/* Clean Waitlist & CLI box */}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-md">
        <form onSubmit={handleEmailSubmit} className="relative flex w-full">
          <input
            type="email"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
            placeholder="Enter email to reserve hardware pilot..."
            className="w-full rounded-full border border-white/15 bg-zinc-900/90 px-4 py-2.5 text-xs sm:text-sm text-white placeholder-zinc-500 transition-all focus:border-white focus:bg-black focus:outline-none"
          />
          <button
            type="submit"
            className="absolute right-1 top-1 bottom-1 rounded-full bg-white px-4 text-xs font-medium text-black transition-all hover:bg-zinc-200 active:scale-95 flex items-center gap-1 font-sans"
          >
            <span>Request Pass</span>
            <ArrowRight className="h-3 w-3" />
          </button>
        </form>
      </div>

      {/* Subtle install command */}
      <div className="mt-4 flex items-center gap-2 text-xs text-zinc-500 font-mono">
        <span>or install CLI runtime:</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 rounded-md border border-white/10 bg-zinc-950 px-2.5 py-1 text-zinc-300 hover:text-white hover:border-white/25 transition-all"
        >
          <span>{quickCmd}</span>
          {copied ? <Check className="h-3 w-3 text-white" /> : <Copy className="h-3 w-3 text-zinc-500" />}
        </button>
      </div>
    </div>
  );
}
