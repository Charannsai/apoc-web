"use client";

import React from "react";
import { X, BookOpen, Shield, Cpu, Sparkles, CheckCircle } from "lucide-react";

interface ManifestoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ManifestoModal({ isOpen, onClose }: ManifestoModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl rounded-xl border border-white/20 bg-zinc-950 p-6 sm:p-8 shadow-[0_0_50px_rgba(255,255,255,0.08)] max-h-[90vh] overflow-y-auto font-mono text-zinc-300">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 rounded-md border border-white/10 bg-zinc-900 p-1.5 text-zinc-400 hover:border-white/30 hover:text-white transition-colors"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Header */}
        <div className="space-y-1 mb-6">
          <div className="flex items-center gap-2 text-xs text-zinc-500 uppercase tracking-widest">
            <BookOpen className="h-3.5 w-3.5 text-white" />
            <span>[ FOUNDER HANDBOOK & THESIS ]</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white font-sans">
            The APOC Engineering Manifesto
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 font-sans">
            Why raw prompt wrappers fail, and how APOC creates dependable delegation.
          </p>
        </div>

        {/* Content Body */}
        <div className="space-y-6 text-xs sm:text-sm font-sans leading-relaxed text-zinc-300">
          {/* Section 1 */}
          <div className="rounded-lg border border-white/15 bg-black/60 p-4 space-y-2">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-white" />
              1. The Core Framing
            </h3>
            <p className="text-zinc-300">
              APOC is not valuable because it can &ldquo;chat with an LLM.&rdquo; Its value is the
              <strong className="text-white"> execution system around intelligence</strong>: understanding intent,
              maintaining context, discovering capabilities, operating tools, adapting to reality, recovering from failure,
              and giving humans a trustworthy way to delegate work.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              2. Why System Prompts Are Insufficient
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm">
              A system prompt is useful for identity and broad policy. It is a terrible database, a terrible permission system,
              a terrible state machine, and a terrible API specification. When too much product logic is crammed into prompt text,
              behavior becomes fragile and loops occur. APOC moves deterministic responsibilities into the runtime kernel.
            </p>
          </div>

          {/* Section 3 */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              3. The Three Coherent Pillars
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="rounded border border-white/10 bg-zinc-900/60 p-3 space-y-1">
                <div className="font-mono font-bold text-white uppercase">[ NATURAL INTERACTION ]</div>
                <p className="text-zinc-400">
                  Distinguishes talking from acting. A question produces conversation; a goal enters execution.
                </p>
              </div>
              <div className="rounded border border-white/10 bg-zinc-900/60 p-3 space-y-1">
                <div className="font-mono font-bold text-white uppercase">[ ADAPTIVE EXECUTION ]</div>
                <p className="text-zinc-400">
                  Composes safe primitives dynamically. When a tool fails, it classifies the error and re-plans.
                </p>
              </div>
              <div className="rounded border border-white/10 bg-zinc-900/60 p-3 space-y-1">
                <div className="font-mono font-bold text-white uppercase">[ TRUSTWORTHY CONTROL ]</div>
                <p className="text-zinc-400">
                  Capability ≠ Authority. Sensitive actions require explicit human sign-off; outcomes are verified.
                </p>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div className="rounded-lg border border-white/10 bg-zinc-900/40 p-4 space-y-2">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              4. Evidence-Driven Outcome Verification
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm">
              Never declare success solely because an LLM claims success. APOC verifies external state changes—confirming
              files exist, ports respond, processes stay healthy, and test suites pass—before marking a task completed.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
          <span className="text-[11px] text-zinc-500 font-mono">
            Founder Working Notes • Version 1.0
          </span>
          <button
            onClick={onClose}
            className="rounded bg-white px-4 py-2 text-xs font-bold text-black hover:bg-zinc-200 transition-colors font-mono"
          >
            DISMISS
          </button>
        </div>
      </div>
    </div>
  );
}
