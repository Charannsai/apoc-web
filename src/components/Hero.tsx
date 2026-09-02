"use client";

import React, { useState } from "react";
import { Check, Copy, ArrowRight, Terminal, Shield, Cpu, Sparkles, Sliders } from "lucide-react";

interface HeroProps {
  onOpenWaitlist: (email?: string) => void;
  onOpenArchitecture: () => void;
  onOpenManifesto: () => void;
  onSelectScenario: (scenarioIndex: number) => void;
}

export function Hero({
  onOpenWaitlist,
  onOpenArchitecture,
  onOpenManifesto,
  onSelectScenario,
}: HeroProps) {
  const [copied, setCopied] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const installCmd = "curl -fsSL https://apoc.run/install | sh";

  const handleCopy = () => {
    navigator.clipboard.writeText(installCmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      onOpenWaitlist(emailInput.trim());
      setEmailInput("");
    } else {
      onOpenWaitlist();
    }
  };

  return (
    <div className="relative flex flex-col items-center text-center pt-8 pb-6 px-4">
      {/* Background radial glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[350px] w-[600px] max-w-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.07)_0%,transparent_70%)] blur-2xl" />

      {/* Top Engineering Badge */}
      <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-zinc-950/80 px-3 py-1 mb-6 text-xs font-mono text-zinc-300 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:border-white/40 transition-colors">
        <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
        <span className="text-zinc-400">FOUNDER HANDBOOK v1.0</span>
        <span className="text-zinc-600">•</span>
        <span className="text-white font-medium">AGENT POCKET RUNTIME</span>
      </div>

      {/* Main Headline */}
      <h1 className="max-w-4xl text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
        Don&apos;t prompt AI.
        <br />
        <span className="bg-gradient-to-b from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
          Delegate reality.
        </span>
      </h1>

      {/* Subtitle / Core Thesis */}
      <p className="mt-5 max-w-2xl text-sm sm:text-base md:text-lg text-zinc-400 leading-relaxed font-normal">
        <strong className="text-zinc-200 font-medium">APOC (Agent Pocket)</strong> is the physical, local-first
        operating environment that turns raw intelligence into dependable execution. It owns state, capability discovery,
        permissions, and outcome verification—so you can delegate real work without brittle prompt loops.
      </p>

      {/* Interactive Quick Action Bar */}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-xl">
        {/* Email / Early Access Input */}
        <form onSubmit={handleEmailSubmit} className="relative flex w-full sm:flex-1">
          <input
            type="email"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
            placeholder="Enter email for hardware & CLI alpha..."
            className="w-full rounded-md border border-white/20 bg-zinc-900/90 px-3.5 py-2.5 text-xs sm:text-sm font-mono text-white placeholder-zinc-500 transition-all focus:border-white focus:bg-black focus:outline-none focus:ring-1 focus:ring-white"
          />
          <button
            type="submit"
            className="absolute right-1 top-1 bottom-1 rounded bg-white px-3 text-xs font-semibold font-mono text-black transition-all hover:bg-zinc-200 active:scale-95 flex items-center gap-1"
          >
            <span>JOIN</span>
            <ArrowRight className="h-3 w-3" />
          </button>
        </form>

        {/* CLI Quick Copy */}
        <div className="flex items-center gap-2 w-full sm:w-auto rounded-md border border-white/15 bg-black/80 px-3 py-2 text-xs font-mono text-zinc-300">
          <Terminal className="h-3.5 w-3.5 text-zinc-400 shrink-0" />
          <span className="text-zinc-300 truncate max-w-[210px] sm:max-w-none select-all font-mono">
            {installCmd}
          </span>
          <button
            onClick={handleCopy}
            className="ml-auto flex h-6 w-6 items-center justify-center rounded border border-white/10 bg-zinc-900 text-zinc-400 transition-colors hover:border-white/30 hover:text-white"
            title="Copy install command"
          >
            {copied ? <Check className="h-3 w-3 text-white" /> : <Copy className="h-3 w-3" />}
          </button>
        </div>
      </div>

      {/* Quick Core Principles Bar */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-xs font-mono text-zinc-400">
        <button
          onClick={() => onSelectScenario(0)}
          className="rounded border border-white/10 bg-zinc-950/60 px-2.5 py-1 transition-all hover:border-white/30 hover:text-white"
        >
          ● 11-State Kernel
        </button>
        <button
          onClick={() => onSelectScenario(1)}
          className="rounded border border-white/10 bg-zinc-950/60 px-2.5 py-1 transition-all hover:border-white/30 hover:text-white"
        >
          ● Capability ≠ Authority
        </button>
        <button
          onClick={() => onSelectScenario(2)}
          className="rounded border border-white/10 bg-zinc-950/60 px-2.5 py-1 transition-all hover:border-white/30 hover:text-white"
        >
          ● Adaptive Re-planning
        </button>
        <button
          onClick={onOpenArchitecture}
          className="rounded border border-white/10 bg-zinc-950/60 px-2.5 py-1 transition-all hover:border-white/30 hover:text-white underline underline-offset-4 decoration-zinc-700 hover:decoration-white"
        >
          ● Physical Control Layer
        </button>
      </div>
    </div>
  );
}
