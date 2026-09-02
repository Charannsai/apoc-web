"use client";

import React, { useState } from "react";
import { X, Layers, Cpu, Shield, Database, Terminal, ArrowRight } from "lucide-react";

interface ArchitectureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ArchitectureModal({ isOpen, onClose }: ArchitectureModalProps) {
  const [selectedLayer, setSelectedLayer] = useState<number>(2);

  if (!isOpen) return null;

  const layers = [
    {
      id: "agentic-apps",
      title: "6. Agentic Applications & Workflows",
      subtitle: "Outcome-oriented delegation for software engineering, operations & research",
      icon: Terminal,
      details:
        "Users specify high-level intent rather than manually orchestrating SaaS workflows. Agents operate across tools with persistent task state.",
      responsibilities: [
        "Outcome-driven goal synthesis",
        "Multi-step asynchronous workflows",
        "Autonomous initiative within bounds",
      ],
    },
    {
      id: "agent-layer",
      title: "5. Persistent Agent Ecosystem",
      subtitle: "Reusable cognitive specialists with shared memory graphs",
      icon: Layers,
      details:
        "Agents are persistent entities with identities, boundaries, memory, and relationships—not disposable prompt blobs.",
      responsibilities: [
        "Agent-to-agent collaboration",
        "Specialist discovery & delegation",
        "Cognitive state graph mapping",
      ],
    },
    {
      id: "runtime-kernel",
      title: "4. APOC Runtime Kernel (Heart of APOC)",
      subtitle: "11-state deterministic state machine, planning loop & evidence evaluator",
      icon: Cpu,
      details:
        "Owns the control loop that decides what happens next, when an approach fails, what alternative should be attempted, and when there is verified proof to stop.",
      responsibilities: [
        "11-State lifecycle engine (CREATED → COMPLETED)",
        "Failure taxonomy & bounded recovery engine",
        "Evidence-driven evaluation (no hallucinated success)",
      ],
    },
    {
      id: "capability-registry",
      title: "3. Capability Registry & MCP Gateway",
      subtitle: "Dynamic tool discovery with strict Capability ≠ Authority enforcement",
      icon: Shield,
      details:
        "Dynamic registry describing every supported operation, schemas, risk levels, and permission gates. Supports native tools, MCP servers, and external workers.",
      responsibilities: [
        "Progressive capability disclosure",
        "Permission state machine & user approval gates",
        "Normalized Action / Observation contracts",
      ],
    },
    {
      id: "os-layer",
      title: "2. OS-Layered Control Environment",
      subtitle: "Processes, filesystem sandboxes, network policies & secret isolation",
      icon: Database,
      details:
        "Standardizes what the agent sees without requiring raw shell guessing. Enforces sandboxing, credential masking, and resource limits.",
      responsibilities: [
        "Filesystem & workspace isolation",
        "Subprocess execution & lifecycle limits",
        "Secret store & credential shielding",
      ],
    },
    {
      id: "hardware-layer",
      title: "1. Hardware Control Layer (Agent Pocket)",
      subtitle: "Physical local-first compute boundary with dedicated accelerators",
      icon: Cpu,
      details:
        "The physical machine is the control layer: it gives agents a defined environment, real compute, persistent memory, and an un-hackable sovereign boundary.",
      responsibilities: [
        "Local NPU/GPU model execution",
        "Zero data leakage / air-gap capability",
        "Hardware-anchored identity & persistence",
      ],
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl rounded-xl border border-white/20 bg-zinc-950 p-6 sm:p-8 shadow-[0_0_50px_rgba(255,255,255,0.08)] max-h-[90vh] overflow-y-auto font-mono text-zinc-300">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 rounded-md border border-white/10 bg-zinc-900 p-1.5 text-zinc-400 hover:border-white/30 hover:text-white transition-colors"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Modal Header */}
        <div className="space-y-1 mb-6">
          <div className="flex items-center gap-2 text-xs text-zinc-500 uppercase tracking-widest">
            <span>[ SYSTEM SPECIFICATION ]</span>
            <span>•</span>
            <span className="text-white">APOC 6-LAYER ARCHITECTURE</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white font-sans">
            The APOC Control & Runtime Stack
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed">
            The fundamental thesis: <span className="text-white">The model is the reasoning engine. APOC is the operating system around that reasoning.</span>
          </p>
        </div>

        {/* Architecture Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Left Column: Stack Layers */}
          <div className="md:col-span-6 space-y-2">
            {layers.map((layer, idx) => {
              const isSelected = selectedLayer === idx;
              const Icon = layer.icon;
              return (
                <button
                  key={layer.id}
                  onClick={() => setSelectedLayer(idx)}
                  className={`w-full text-left rounded-lg border p-3 transition-all flex items-center justify-between ${
                    isSelected
                      ? "border-white bg-zinc-900 shadow-md text-white"
                      : "border-white/10 bg-black/40 text-zinc-400 hover:border-white/20 hover:text-zinc-200"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`h-4 w-4 shrink-0 ${isSelected ? "text-white" : "text-zinc-500"}`} />
                    <div>
                      <div className="text-xs font-bold font-sans">{layer.title}</div>
                      <div className="text-[10px] text-zinc-500 truncate max-w-[220px]">
                        {layer.subtitle}
                      </div>
                    </div>
                  </div>
                  <ArrowRight className={`h-3.5 w-3.5 shrink-0 transition-transform ${isSelected ? "translate-x-0.5 text-white" : "text-zinc-600"}`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Deep Layer Inspection */}
          <div className="md:col-span-6 rounded-lg border border-white/15 bg-black/80 p-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  LAYER INSPECTOR
                </span>
                <span className="rounded bg-white/10 px-2 py-0.5 text-[10px] text-zinc-300">
                  LAYER {6 - selectedLayer}/6
                </span>
              </div>

              <div>
                <h3 className="text-sm font-bold text-white font-sans">
                  {layers[selectedLayer].title}
                </h3>
                <p className="mt-2 text-xs text-zinc-300 font-sans leading-relaxed">
                  {layers[selectedLayer].details}
                </p>
              </div>

              <div className="space-y-2 pt-2">
                <span className="text-[11px] text-zinc-400 uppercase tracking-widest block">
                  CORE RESPONSIBILITIES
                </span>
                <ul className="space-y-1.5 text-xs text-zinc-300">
                  {layers[selectedLayer].responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2">
                      <span className="text-zinc-500 font-mono mt-0.5">&gt;</span>
                      <span className="font-sans">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-zinc-500">
              <span>Local-First Sovereign Runtime</span>
              <span className="text-white font-medium">Deterministic & Verifiable</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-end">
          <button
            onClick={onClose}
            className="rounded bg-white px-4 py-2 text-xs font-bold text-black hover:bg-zinc-200 transition-colors"
          >
            CLOSE INSPECTOR
          </button>
        </div>
      </div>
    </div>
  );
}
