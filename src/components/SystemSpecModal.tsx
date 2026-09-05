"use client";

import React, { useState } from "react";
import { X } from "lucide-react";

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
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200 font-sans"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl rounded-2xl border border-black/10 bg-white p-6 sm:p-8 shadow-2xl text-zinc-700 max-h-[90vh] overflow-y-auto no-scrollbar"
      >
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
            SYSTEM SPECIFICATION
          </span>
          <h2 className="text-2xl font-normal tracking-tight text-zinc-950 font-sans">
            Hardware + Agent OS Matrix
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 font-sans">
            How physical hardware and loaded runtime software unite into a sovereign agent environment.
          </p>
        </div>

        {/* Table */}
        <div className="rounded-xl border border-black/10 bg-zinc-50 overflow-hidden text-xs font-sans">
          <div className="overflow-x-auto no-scrollbar">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-black/10 bg-zinc-100 text-zinc-600 font-mono">
                  <th className="py-3 px-4 font-medium uppercase tracking-wider">System Layer</th>
                  <th className="py-3 px-4 font-medium uppercase tracking-wider">Physical Hardware</th>
                  <th className="py-3 px-4 font-medium uppercase tracking-wider">Loaded Agent OS</th>
                  <th className="py-3 px-4 font-medium uppercase tracking-wider hidden sm:table-cell">Outcome</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/5">
                {SYSTEM_MATRIX.map((row, idx) => (
                  <tr
                    key={idx}
                    onClick={() => setSelectedRow(idx)}
                    className={`transition-colors cursor-pointer ${
                      selectedRow === idx
                        ? "bg-black/[0.04]"
                        : "hover:bg-black/[0.02]"
                    }`}
                  >
                    <td className="py-3.5 px-4 font-mono font-medium text-zinc-900">
                      {row.aspect}
                    </td>
                    <td className="py-3.5 px-4 text-zinc-700">
                      {row.hardware}
                    </td>
                    <td className="py-3.5 px-4 text-zinc-700">
                      {row.software}
                    </td>
                    <td className="py-3.5 px-4 text-zinc-500 hidden sm:table-cell">
                      {row.outcome}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
