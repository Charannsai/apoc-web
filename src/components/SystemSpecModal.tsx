"use client";

import React, { useState } from "react";
import { X, Cpu, HardDrive, Shield, Layers, Zap } from "lucide-react";

interface SystemSpecModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SYSTEM_MATRIX = [
  {
    aspect: "Compute & Awareness",
    hardware: "Dedicated local NPU/GPU compute with known thermal and memory limits",
    software: "Agent OS Introspection Layer that reads hardware state in real time",
    outcome: "Agent knows its exact compute limits and memory budgets with zero crashes or blind guesses.",
  },
  {
    aspect: "Capability & Environment",
    hardware: "Physical I/O, local NVMe storage, and isolated sandbox controllers",
    software: "Dynamic Capability Registry with native MCP tools and process adapters",
    outcome: "AI discovers real machine abilities dynamically instead of relying on a fragile text prompt.",
  },
  {
    aspect: "Security & Control",
    hardware: "Physical execution boundary and encrypted local key storage",
    software: "Stateful Permission Engine enforcing Capability != Authority",
    outcome: "Hardware-anchored boundaries. The AI cannot escalate permissions without explicit human sign-off.",
  },
  {
    aspect: "State & Memory",
    hardware: "Persistent on-device storage vault that stays active across reboots",
    software: "Episodic memory graph and structured task checkpointing",
    outcome: "Your agent does not forget its environment. Persistent context that belongs solely to you.",
  },
  {
    aspect: "Outcome Verification",
    hardware: "Direct hardware socket, process lifecycle, and file telemetry",
    software: "Evidence-Driven Evaluator that tests real physical system state",
    outcome: "Never trusts hallucinated text. Verifies actual observable results before completing work.",
  },
  {
    aspect: "Adaptive Recovery",
    hardware: "Isolated subprocess workers and dedicated fallback cache mirrors",
    software: "Error classification taxonomy and automatic re-planning engine",
    outcome: "Adapts to broken tools or network changes by re-routing through alternative hardware primitives.",
  },
];

export function SystemSpecModal({ isOpen, onClose }: SystemSpecModalProps) {
  const [selectedRow, setSelectedRow] = useState<number>(0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 dark:bg-black/85 backdrop-blur-md animate-in fade-in duration-200 font-sans">
      <div className="relative w-full max-w-4xl rounded-2xl border border-black/10 dark:border-white/20 bg-white dark:bg-zinc-950 p-6 sm:p-8 shadow-2xl text-zinc-700 dark:text-zinc-300 max-h-[90vh] overflow-y-auto transition-colors">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 rounded-full border border-black/10 dark:border-white/10 bg-zinc-100 dark:bg-zinc-900 p-2 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Title */}
        <div className="space-y-1 mb-6">
          <span className="text-xs uppercase tracking-widest text-zinc-500 font-mono">
            SYSTEM SPECIFICATION
          </span>
          <h2 className="text-2xl font-normal tracking-tight text-zinc-950 dark:text-white font-sans">
            Hardware + Agent OS Matrix
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-sans">
            How physical hardware and loaded runtime software unite into a sovereign agent environment.
          </p>
        </div>

        {/* Table */}
        <div className="rounded-xl border border-black/10 dark:border-white/15 bg-zinc-50 dark:bg-black/60 overflow-hidden text-xs font-sans">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-black/10 dark:border-white/10 bg-zinc-100 dark:bg-zinc-900/80 text-zinc-600 dark:text-zinc-400 font-mono">
                  <th className="py-3 px-4 font-medium uppercase tracking-wider">System Layer</th>
                  <th className="py-3 px-4 font-medium uppercase tracking-wider">Physical Hardware</th>
                  <th className="py-3 px-4 font-medium uppercase tracking-wider">Loaded Agent OS</th>
                  <th className="py-3 px-4 font-medium uppercase tracking-wider hidden sm:table-cell">Outcome</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/5 dark:divide-white/5">
                {SYSTEM_MATRIX.map((row, idx) => (
                  <tr
                    key={idx}
                    onClick={() => setSelectedRow(idx)}
                    className={`transition-colors cursor-pointer ${
                      selectedRow === idx
                        ? "bg-black/[0.04] dark:bg-white/[0.05]"
                        : "hover:bg-black/[0.02] dark:hover:bg-white/[0.02]"
                    }`}
                  >
                    <td className="py-3.5 px-4 font-mono font-medium text-zinc-900 dark:text-white">
                      {row.aspect}
                    </td>
                    <td className="py-3.5 px-4 text-zinc-700 dark:text-zinc-300">
                      {row.hardware}
                    </td>
                    <td className="py-3.5 px-4 text-zinc-700 dark:text-zinc-300">
                      {row.software}
                    </td>
                    <td className="py-3.5 px-4 text-zinc-500 dark:text-zinc-400 hidden sm:table-cell">
                      {row.outcome}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-black/10 dark:border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="rounded-full bg-black text-white dark:bg-white dark:text-black px-5 py-2 text-xs font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors font-sans"
          >
            Close Specification
          </button>
        </div>
      </div>
    </div>
  );
}
