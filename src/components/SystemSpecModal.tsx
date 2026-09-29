"use client";

import React, { useState } from "react";
import { X, Cpu, Layers, Shield, Zap, ArrowRight, CheckCircle } from "lucide-react";

interface SystemSpecModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SystemSpecModal({ isOpen, onClose }: SystemSpecModalProps) {
  const [activeTab, setActiveTab] = useState<"c1-systems" | "platform">("c1-systems");

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200 font-sans"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl rounded-2xl border border-black/10 bg-white p-6 sm:p-8 shadow-2xl text-zinc-800 max-h-[90vh] overflow-y-auto no-scrollbar"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 rounded-full border border-black/10 bg-zinc-100 p-2 text-zinc-600 hover:text-black transition-colors cursor-pointer"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Header */}
        <div className="space-y-1 mb-6">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-500 font-mono">
            <span>APOC LABS</span>
            <span>•</span>
            <span className="text-zinc-900 font-semibold">PRODUCT & PLATFORM</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-950 font-sans">
            APOC C1 Systems
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 font-sans">
            A complete computing environment purpose-built for adaptable AI and agent execution.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-zinc-100 border border-black/5 mb-6 text-xs font-mono w-fit">
          <button
            onClick={() => setActiveTab("c1-systems")}
            className={`px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
              activeTab === "c1-systems"
                ? "bg-white text-zinc-950 font-semibold shadow-xs"
                : "text-zinc-600 hover:text-black"
            }`}
          >
            Hardware Systems
          </button>
          <button
            onClick={() => setActiveTab("platform")}
            className={`px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
              activeTab === "platform"
                ? "bg-white text-zinc-950 font-semibold shadow-xs"
                : "text-zinc-600 hover:text-black"
            }`}
          >
            Platform Capabilities
          </button>
        </div>

        {/* TAB 1: C1 Hardware Systems */}
        {activeTab === "c1-systems" && (
          <div className="space-y-6">
            <div className="text-xs text-zinc-600 font-sans">
              Three performance tiers designed for different workloads and environments. Built on the same agentic OS to scale with enterprise requirements.
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* CORE */}
              <div className="rounded-2xl border border-black/10 bg-zinc-50/70 p-5 space-y-4 hover:border-black/30 transition-colors">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 font-bold">
                    TIER 01
                  </span>
                  <h3 className="text-lg font-semibold text-zinc-950">CORE</h3>
                  <p className="text-xs text-zinc-500 font-sans">
                    Balanced. Capable. Reliable.
                  </p>
                </div>
                <div className="space-y-2 text-xs font-mono text-zinc-700 border-t border-black/10 pt-3">
                  <div><strong className="text-zinc-900">CPU:</strong> AMD Ryzen™ AI 9 HX 370</div>
                  <div><strong className="text-zinc-900">Memory:</strong> 64GB LPDDR5X</div>
                  <div><strong className="text-zinc-900">Storage:</strong> 1TB NVMe SSD</div>
                  <div><strong className="text-zinc-900">GPU:</strong> Radeon™ 890M Integrated</div>
                </div>
                <div className="rounded-lg bg-white border border-black/5 p-3 text-[11px] text-zinc-600">
                  <span className="font-mono uppercase font-semibold text-zinc-900 block mb-0.5">Best For:</span>
                  Internal automation, knowledge work, and departmental deployments.
                </div>
              </div>

              {/* EDGE */}
              <div className="rounded-2xl border border-black/10 bg-zinc-50/70 p-5 space-y-4 hover:border-black/30 transition-colors">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 font-bold">
                    TIER 02
                  </span>
                  <h3 className="text-lg font-semibold text-zinc-950">EDGE</h3>
                  <p className="text-xs text-zinc-500 font-sans">
                    Compact. Efficient. On-Prem.
                  </p>
                </div>
                <div className="space-y-2 text-xs font-mono text-zinc-700 border-t border-black/10 pt-3">
                  <div><strong className="text-zinc-900">CPU:</strong> AMD Ryzen™ AI 7 350</div>
                  <div><strong className="text-zinc-900">Memory:</strong> 32GB LPDDR5X</div>
                  <div><strong className="text-zinc-900">Storage:</strong> 512GB NVMe SSD</div>
                  <div><strong className="text-zinc-900">GPU:</strong> Radeon™ 860M Integrated</div>
                </div>
                <div className="rounded-lg bg-white border border-black/5 p-3 text-[11px] text-zinc-600">
                  <span className="font-mono uppercase font-semibold text-zinc-900 block mb-0.5">Best For:</span>
                  Edge locations, air-gapped environments, and on-premises infrastructure.
                </div>
              </div>

              {/* PRO */}
              <div className="rounded-2xl border border-black/10 bg-zinc-50/70 p-5 space-y-4 hover:border-black/30 transition-colors">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 font-bold">
                    TIER 03
                  </span>
                  <h3 className="text-lg font-semibold text-zinc-950">PRO</h3>
                  <p className="text-xs text-zinc-500 font-sans">
                    Powerful. Scalable. Versatile.
                  </p>
                </div>
                <div className="space-y-2 text-xs font-mono text-zinc-700 border-t border-black/10 pt-3">
                  <div><strong className="text-zinc-900">CPU:</strong> AMD Ryzen™ AI Max+ 395</div>
                  <div><strong className="text-zinc-900">Memory:</strong> 128GB LPDDR5X</div>
                  <div><strong className="text-zinc-900">Storage:</strong> 2TB NVMe SSD</div>
                  <div><strong className="text-zinc-900">GPU:</strong> Radeon™ 8060S Integrated</div>
                </div>
                <div className="rounded-lg bg-white border border-black/5 p-3 text-[11px] text-zinc-600">
                  <span className="font-mono uppercase font-semibold text-zinc-900 block mb-0.5">Best For:</span>
                  Complex multi-agent systems, high-throughput pipelines, and intensive data processing.
                </div>
              </div>
            </div>

            {/* Custom Specs */}
            <div className="rounded-xl border border-dashed border-black/20 bg-zinc-50 p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
              <div>
                <span className="font-mono uppercase font-bold text-zinc-900">CUSTOM ENTERPRISE SPECIFICATIONS</span>
                <p className="text-zinc-600 mt-0.5">
                  Need a specific setup? We build custom hardware configurations matched to your workload, scale, and environment.
                </p>
              </div>
              <span className="shrink-0 px-3 py-1 rounded-full bg-black text-white font-mono text-[11px]">
                Built Around You
              </span>
            </div>
          </div>
        )}

        {/* TAB 2: Platform Capabilities */}
        {activeTab === "platform" && (
          <div className="space-y-4 text-xs">
            <p className="text-xs sm:text-sm text-zinc-600 font-sans">
              Every APOC system runs our dedicated software layer and runtime environment:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="rounded-xl border border-black/10 bg-zinc-50/70 p-4 space-y-1.5">
                <div className="font-semibold text-zinc-950 font-sans text-sm">Dynamic Model Routing</div>
                <p className="text-zinc-600">
                  Intelligently selects and dispatches the optimal model for each task, budget, and context window.
                </p>
              </div>

              <div className="rounded-xl border border-black/10 bg-zinc-50/70 p-4 space-y-1.5">
                <div className="font-semibold text-zinc-950 font-sans text-sm">Secure Agent Runtime</div>
                <p className="text-zinc-600">
                  Isolated execution boundaries ensuring workflows remain stable, verifiable, and strictly sandboxed.
                </p>
              </div>

              <div className="rounded-xl border border-black/10 bg-zinc-50/70 p-4 space-y-1.5">
                <div className="font-semibold text-zinc-950 font-sans text-sm">Agent Gateway</div>
                <p className="text-zinc-600">
                  Unified interface connecting agents with enterprise tools, APIs, filesystems, and external services.
                </p>
              </div>

              <div className="rounded-xl border border-black/10 bg-zinc-50/70 p-4 space-y-1.5">
                <div className="font-semibold text-zinc-950 font-sans text-sm">Security & Governance</div>
                <p className="text-zinc-600">
                  Hardware-anchored policy enforcement where capability does not equal unchecked authority.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-8 pt-4 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <span className="text-zinc-500 font-mono">
            APOC C1 Systems
          </span>
          <button
            onClick={onClose}
            className="rounded-full bg-black text-white px-5 py-2 text-xs font-medium hover:bg-zinc-800 transition-colors font-sans cursor-pointer"
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
}
