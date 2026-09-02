"use client";

import React, { useState } from "react";
import { Cpu, HardDrive, Shield, Layers, CheckCircle2, Zap, ArrowRight, Sparkles } from "lucide-react";

interface FeatureRow {
  aspect: string;
  hardware: string;
  software: string;
  outcome: string;
}

const SYSTEM_MATRIX: FeatureRow[] = [
  {
    aspect: "Compute & Awareness",
    hardware: "Dedicated local NPU/GPU compute with known thermal & memory limits",
    software: "Agent OS Introspection Layer that reads hardware state in real-time",
    outcome: "Agent knows its exact compute limits and memory budgets—zero crashes or blind guesses.",
  },
  {
    aspect: "Capability & Environment",
    hardware: "Physical I/O, local NVMe storage, and isolated sandbox controllers",
    software: "Dynamic Capability Registry with native MCP tools & process adapters",
    outcome: "AI discovers real machine abilities dynamically instead of relying on a fragile text prompt.",
  },
  {
    aspect: "Security & Control",
    hardware: "Physical execution boundary and encrypted local key storage",
    software: "Stateful Permission Engine enforcing 'Capability ≠ Authority'",
    outcome: "Hardware-anchored boundaries. The AI cannot escalate permissions without explicit human sign-off.",
  },
  {
    aspect: "State & Memory",
    hardware: "Persistent on-device storage vault that stays active across reboots",
    software: "Episodic memory graph & structured task checkpointing",
    outcome: "Your agent doesn't forget its environment. Persistent context that belongs solely to you.",
  },
  {
    aspect: "Outcome Verification",
    hardware: "Direct hardware socket, process lifecycle, and file telemetry",
    software: "Evidence-Driven Evaluator that tests real physical system state",
    outcome: "Never trusts hallucinated text. Verifies actual observable results before completing work.",
  },
  {
    aspect: "Adaptive Recovery",
    hardware: "Isolated subprocess workers & dedicated fallback cache mirrors",
    software: "Error classification taxonomy & automatic re-planning engine",
    outcome: "Adapts to broken tools or network changes by re-routing through alternative hardware primitives.",
  },
];

export function HardwareSystemSection() {
  const [activeTab, setActiveTab] = useState<"matrix" | "hardware" | "software">("matrix");
  const [selectedRow, setSelectedRow] = useState<number>(0);

  return (
    <div className="w-full max-w-5xl mx-auto my-8 space-y-6">
      {/* Section Header */}
      <div className="text-center space-y-2 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-zinc-900/60 px-3 py-1 text-xs text-zinc-400 font-mono">
          <Cpu className="h-3.5 w-3.5 text-white" />
          <span>AI INFRASTRUCTURE: HARDWARE + AGENT OS</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-white font-sans">
          Hardware as the Control Layer. <br />
          <span className="text-zinc-400 font-normal">Agent OS as the Intelligence.</span>
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed">
          We don&apos;t just deliver software. APOC couples physical, sovereign hardware with loaded agent runtime
          capabilities—creating an environment where AI knows its exact compute, capabilities, and boundaries.
        </p>
      </div>

      {/* Navigation Tabs */}
      <div className="flex items-center justify-center gap-2">
        <div className="inline-flex rounded-full border border-white/10 bg-black/60 p-1 text-xs font-mono">
          <button
            onClick={() => setActiveTab("matrix")}
            className={`rounded-full px-4 py-1.5 transition-all ${
              activeTab === "matrix"
                ? "bg-white text-black font-semibold"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            System Matrix
          </button>
          <button
            onClick={() => setActiveTab("hardware")}
            className={`rounded-full px-4 py-1.5 transition-all ${
              activeTab === "hardware"
                ? "bg-white text-black font-semibold"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Physical Hardware
          </button>
          <button
            onClick={() => setActiveTab("software")}
            className={`rounded-full px-4 py-1.5 transition-all ${
              activeTab === "software"
                ? "bg-white text-black font-semibold"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Agent OS Layer
          </button>
        </div>
      </div>

      {/* View 1: System Matrix Table */}
      {activeTab === "matrix" && (
        <div className="rounded-2xl border border-white/15 bg-zinc-950/90 overflow-hidden shadow-2xl backdrop-blur-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-white/10 bg-black/70 text-zinc-400 font-mono">
                  <th className="py-3.5 px-4 sm:px-6 font-medium uppercase tracking-wider">System Layer</th>
                  <th className="py-3.5 px-4 sm:px-6 font-medium uppercase tracking-wider">Physical Hardware (Control Boundary)</th>
                  <th className="py-3.5 px-4 sm:px-6 font-medium uppercase tracking-wider">Loaded Agent OS (Intelligence)</th>
                  <th className="py-3.5 px-4 sm:px-6 font-medium uppercase tracking-wider hidden md:table-cell">Why It Matters</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 font-sans">
                {SYSTEM_MATRIX.map((row, idx) => (
                  <tr
                    key={idx}
                    onClick={() => setSelectedRow(idx)}
                    className={`transition-colors cursor-pointer ${
                      selectedRow === idx ? "bg-white/[0.04]" : "hover:bg-white/[0.02]"
                    }`}
                  >
                    <td className="py-4 px-4 sm:px-6 font-mono font-medium text-white flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
                      {row.aspect}
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-zinc-300">
                      {row.hardware}
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-zinc-300">
                      {row.software}
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-zinc-400 hidden md:table-cell">
                      {row.outcome}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="border-t border-white/10 bg-black/60 px-6 py-3 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 font-mono gap-2">
            <span>The Integration Equation: Physical Control Layer + Loaded Agentic OS</span>
            <span className="text-zinc-300">Local-First Sovereign AI</span>
          </div>
        </div>
      )}

      {/* View 2: Physical Hardware Focus */}
      {activeTab === "hardware" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-white/15 bg-zinc-950/80 p-6 space-y-3">
            <div className="flex items-center justify-between">
              <Cpu className="h-5 w-5 text-white" />
              <span className="text-[10px] font-mono text-zinc-500 uppercase">HARDWARE LAYER</span>
            </div>
            <h3 className="text-base font-medium text-white font-sans">Dedicated Local Compute</h3>
            <p className="text-xs text-zinc-400 leading-relaxed font-sans">
              High-efficiency neural acceleration module designed to run local models privately without recurring cloud fees or latency bottlenecks.
            </p>
          </div>

          <div className="rounded-2xl border border-white/15 bg-zinc-950/80 p-6 space-y-3">
            <div className="flex items-center justify-between">
              <Shield className="h-5 w-5 text-white" />
              <span className="text-[10px] font-mono text-zinc-500 uppercase">SOVEREIGN BOUNDARY</span>
            </div>
            <h3 className="text-base font-medium text-white font-sans">Physical Isolation</h3>
            <p className="text-xs text-zinc-400 leading-relaxed font-sans">
              The device establishes a tangible boundary. Data, task traces, and workspace memory never leave your physical desk unless explicitly routed.
            </p>
          </div>

          <div className="rounded-2xl border border-white/15 bg-zinc-950/80 p-6 space-y-3">
            <div className="flex items-center justify-between">
              <HardDrive className="h-5 w-5 text-white" />
              <span className="text-[10px] font-mono text-zinc-500 uppercase">PERSISTENCE</span>
            </div>
            <h3 className="text-base font-medium text-white font-sans">Persistent Environment Identity</h3>
            <p className="text-xs text-zinc-400 leading-relaxed font-sans">
              Unlike ephemeral cloud sessions, the hardware remembers installed tools, repositories, and lessons across every restart.
            </p>
          </div>
        </div>
      )}

      {/* View 3: Agent OS Focus */}
      {activeTab === "software" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-white/15 bg-zinc-950/80 p-6 space-y-3">
            <div className="flex items-center justify-between">
              <Layers className="h-5 w-5 text-white" />
              <span className="text-[10px] font-mono text-zinc-500 uppercase">AGENT OS</span>
            </div>
            <h3 className="text-base font-medium text-white font-sans">Hardware Adaptability</h3>
            <p className="text-xs text-zinc-400 leading-relaxed font-sans">
              The agent inspects physical sensors, compute loads, and available peripherals—adapting its reasoning directly to what the machine can safely execute.
            </p>
          </div>

          <div className="rounded-2xl border border-white/15 bg-zinc-950/80 p-6 space-y-3">
            <div className="flex items-center justify-between">
              <Shield className="h-5 w-5 text-white" />
              <span className="text-[10px] font-mono text-zinc-500 uppercase">SECURITY GATE</span>
            </div>
            <h3 className="text-base font-medium text-white font-sans">Capability ≠ Authority</h3>
            <p className="text-xs text-zinc-400 leading-relaxed font-sans">
              Knowing that a tool exists does not grant permission to run it. High-impact operations automatically pause for your cryptographic authorization.
            </p>
          </div>

          <div className="rounded-2xl border border-white/15 bg-zinc-950/80 p-6 space-y-3">
            <div className="flex items-center justify-between">
              <Zap className="h-5 w-5 text-white" />
              <span className="text-[10px] font-mono text-zinc-500 uppercase">RE-PLANNING</span>
            </div>
            <h3 className="text-base font-medium text-white font-sans">Self-Healing Execution</h3>
            <p className="text-xs text-zinc-400 leading-relaxed font-sans">
              When an external tool or network endpoint fails, the Agent OS classifies the error and dynamically switches to local alternatives without looping.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
