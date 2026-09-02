"use client";

import React from "react";
import { X, Shield, Cpu, Layers, HardDrive } from "lucide-react";

interface PhilosophyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PhilosophyModal({ isOpen, onClose }: PhilosophyModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200 font-sans">
      <div className="relative w-full max-w-2xl rounded-2xl border border-white/20 bg-zinc-950 p-6 sm:p-8 shadow-2xl text-zinc-300 max-h-[90vh] overflow-y-auto">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 rounded-full border border-white/10 bg-zinc-900 p-2 text-zinc-400 hover:text-white transition-colors"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Title */}
        <div className="space-y-1 mb-6">
          <span className="text-xs uppercase tracking-widest text-zinc-500 font-mono">
            APOC INFRASTRUCTURE THESIS
          </span>
          <h2 className="text-2xl font-normal tracking-tight text-white font-sans">
            Hardware as the Control Layer.
          </h2>
        </div>

        {/* Narrative */}
        <div className="space-y-5 text-sm text-zinc-300 leading-relaxed">
          <p className="text-base text-zinc-200">
            Most agent systems fail because they are just text prompts running against abstract cloud APIs.
            They don&apos;t know what machine they are running on, they don&apos;t know their compute budget, and they can&apos;t verify if an action actually succeeded.
          </p>

          <p>
            <strong className="text-white font-medium">APOC is an AI infrastructure product</strong>: you get the
            <strong className="text-white font-medium"> physical hardware</strong> combined with our
            <strong className="text-white font-medium"> loaded Agent OS layer</strong>.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="rounded-xl border border-white/10 bg-zinc-900/60 p-4 space-y-2">
              <div className="flex items-center gap-2 text-white font-mono text-xs uppercase font-bold">
                <Cpu className="h-4 w-4" />
                Physical Hardware Layer
              </div>
              <p className="text-xs text-zinc-400">
                Gives the agent a concrete, sovereign execution boundary with dedicated local compute, storage, and hardware-enforced sandboxes.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-zinc-900/60 p-4 space-y-2">
              <div className="flex items-center gap-2 text-white font-mono text-xs uppercase font-bold">
                <Layers className="h-4 w-4" />
                Loaded Agent OS
              </div>
              <p className="text-xs text-zinc-400">
                An OS layer that makes the hardware adaptable by the AI—exposing real capabilities, permissions, state, and evidence evaluation.
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-white/15 bg-black/60 p-4 text-xs space-y-1">
            <div className="font-mono text-white font-semibold uppercase tracking-wider">
              The Fundamental Principle: Capability ≠ Authority
            </div>
            <p className="text-zinc-400">
              The AI can discover what the hardware is capable of doing, but the host runtime decides what is permitted.
              High-impact operations require explicit human authorization.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="rounded-full bg-white px-5 py-2 text-xs font-medium text-black hover:bg-zinc-200 transition-colors font-sans"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
