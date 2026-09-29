"use client";

import React from "react";
import { X, Cpu, Layers, Shield, Sparkles, Factory, Network } from "lucide-react";

interface PhilosophyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PhilosophyModal({ isOpen, onClose }: PhilosophyModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200 font-sans">
      <div className="relative w-full max-w-2xl rounded-2xl border border-black/10 bg-white p-6 sm:p-8 shadow-2xl text-zinc-700 max-h-[90vh] overflow-y-auto no-scrollbar">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 rounded-full border border-black/10 bg-zinc-100 p-2 text-zinc-600 hover:text-black transition-colors cursor-pointer"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Title */}
        <div className="space-y-1 mb-6">
          <span className="text-xs uppercase tracking-widest text-zinc-500 font-mono">
            APOC LABS PHILOSOPHY
          </span>
          <h2 className="text-2xl font-normal tracking-tight text-zinc-950 font-sans">
            Bridging AI Research to Real-World Applications
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 font-sans">
            Why generic cloud AI falls short, and how adaptable systems transform industries.
          </p>
        </div>

        {/* Narrative */}
        <div className="space-y-5 text-sm leading-relaxed">
          <p className="text-base text-zinc-800">
            Industries are struggling to translate rapid AI advancements into practical, scalable solutions
            that address real-world operational challenges. Most available tools remain generic, cloud-dependent,
            and disconnected from industry-specific workflows, infrastructure, and operational requirements.
          </p>

          <p>
            <strong className="text-zinc-900 font-medium">APOC Labs</strong> develops adaptable AI systems that explore
            each industry's unique environment to deliver solutions suited to its operational reality, infrastructure,
            and data constraints across mobility, manufacturing, and enterprise operations.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="rounded-xl border border-black/10 bg-zinc-50 p-4 space-y-2">
              <div className="flex items-center gap-2 text-zinc-900 font-mono text-xs uppercase font-bold">
                <Network className="h-4 w-4" />
                Applied AI & Intelligent Automation
              </div>
              <p className="text-xs text-zinc-600">
                Integrating AI into existing workflows and systems to elevate operational efficiency and enable smarter, verifiable decision-making.
              </p>
            </div>

            <div className="rounded-xl border border-black/10 bg-zinc-50 p-4 space-y-2">
              <div className="flex items-center gap-2 text-zinc-900 font-mono text-xs uppercase font-bold">
                <Cpu className="h-4 w-4" />
                Edge Computing & APOC C1
              </div>
              <p className="text-xs text-zinc-600">
                Bringing AI computing and agent capabilities into one physical environment. APOC C1 is our first step toward making adaptable AI practical across industries.
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-black/10 bg-zinc-50 p-4 text-xs space-y-1.5">
            <div className="font-mono text-zinc-900 font-semibold uppercase tracking-wider">
              Long-Term Vision & Next-Gen Architectures
            </div>
            <p className="text-zinc-600">
              Beyond practical enterprise solutions, APOC Labs is actively exploring next-generation AI technologies
              and novel approaches to intelligent information representation and computational systems. Our vision is to make
              advanced AI more accessible, adaptable, and impactful across industries.
            </p>
          </div>

          <div className="rounded-xl border border-black/10 bg-zinc-50 p-4 text-xs space-y-1">
            <div className="font-mono text-zinc-900 font-semibold uppercase tracking-wider">
              The Fundamental Principle: Capability != Authority
            </div>
            <p className="text-zinc-600">
              In real enterprise environments, an AI may discover what systems are capable of executing, but the host runtime
              enforces strict permission boundaries. High-impact operations require verified human authorization.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-black/10 flex items-center justify-between text-xs">
          <span className="text-zinc-500 font-mono">
            Creating the apoc-era for the agentic era :)
          </span>
          <button
            onClick={onClose}
            className="rounded-full bg-black text-white px-5 py-2 text-xs font-medium hover:bg-zinc-800 transition-colors font-sans cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
