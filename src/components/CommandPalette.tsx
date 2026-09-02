"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Search,
  Terminal,
  Cpu,
  Layers,
  Shield,
  BookOpen,
  Copy,
  ArrowRight,
  Sparkles,
  Zap,
} from "lucide-react";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectScenario: (index: number) => void;
  onOpenArchitecture: () => void;
  onOpenManifesto: () => void;
  onOpenWaitlist: () => void;
}

export function CommandPalette({
  isOpen,
  onClose,
  onSelectScenario,
  onOpenArchitecture,
  onOpenManifesto,
  onOpenWaitlist,
}: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
    }
  }, [isOpen]);

  const items = [
    {
      id: "run-sc-1",
      category: "EXECUTION SIMULATOR",
      title: "Simulate: Repo Security & Lockfile Audit",
      desc: "Step-by-step 11-state audit execution",
      icon: Terminal,
      action: () => {
        onSelectScenario(0);
        onClose();
      },
    },
    {
      id: "run-sc-2",
      category: "EXECUTION SIMULATOR",
      title: "Simulate: Local Microservice & Health Probe",
      desc: "Local port binding & socket verification",
      icon: Cpu,
      action: () => {
        onSelectScenario(1);
        onClose();
      },
    },
    {
      id: "run-sc-3",
      category: "EXECUTION SIMULATOR",
      title: "Simulate: Adaptive Failover & Re-planning",
      desc: "Error taxonomy & cache mirror recovery",
      icon: Zap,
      action: () => {
        onSelectScenario(2);
        onClose();
      },
    },
    {
      id: "arch",
      category: "SPECIFICATION",
      title: "Open 6-Layer Architecture Stack",
      desc: "Inspect Hardware, OS layer, Runtime kernel, MCP",
      icon: Layers,
      action: () => {
        onOpenArchitecture();
        onClose();
      },
    },
    {
      id: "manifesto",
      category: "SPECIFICATION",
      title: "Read APOC Founder Thesis & Handbook",
      desc: "Why system prompts fail and how APOC fixes it",
      icon: BookOpen,
      action: () => {
        onOpenManifesto();
        onClose();
      },
    },
    {
      id: "waitlist",
      category: "ACCESS",
      title: "Request Agent Pocket Hardware Alpha",
      desc: "Reserve custom hardware pass & CLI token",
      icon: Shield,
      action: () => {
        onOpenWaitlist();
        onClose();
      },
    },
    {
      id: "copy-cli",
      category: "UTILITY",
      title: "Copy Quickstart CLI Command",
      desc: "curl -fsSL https://apoc.run/install | sh",
      icon: Copy,
      action: () => {
        navigator.clipboard.writeText("curl -fsSL https://apoc.run/install | sh");
        onClose();
      },
    },
  ];

  const filteredItems = items.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.desc.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filteredItems.length || 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % (filteredItems.length || 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        filteredItems[selectedIndex].action();
      }
    } else if (e.key === "Escape") {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-2xl rounded-xl border border-white/20 bg-zinc-950 p-3 shadow-[0_0_60px_rgba(255,255,255,0.1)] font-mono text-zinc-200"
      >
        {/* Search Input Box */}
        <div className="relative flex items-center border-b border-white/10 pb-2 px-2">
          <Search className="h-4 w-4 text-zinc-400 mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDown}
            placeholder="Type a command, scenario, or document..."
            className="w-full bg-transparent text-sm text-white placeholder-zinc-500 focus:outline-none"
          />
          <kbd className="rounded bg-black/60 px-1.5 py-0.5 text-[10px] text-zinc-400 border border-white/10">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto pt-2 space-y-1">
          {filteredItems.length === 0 ? (
            <div className="py-8 text-center text-xs text-zinc-500">
              No matching commands found.
            </div>
          ) : (
            filteredItems.map((item, idx) => {
              const isSelected = idx === selectedIndex;
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={item.action}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full flex items-center justify-between rounded-lg px-3 py-2.5 text-left transition-all ${
                    isSelected
                      ? "bg-white text-black font-semibold"
                      : "text-zinc-300 hover:bg-zinc-900"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`h-4 w-4 shrink-0 ${isSelected ? "text-black" : "text-zinc-400"}`} />
                    <div>
                      <div className="text-xs font-sans font-medium">{item.title}</div>
                      <div className={`text-[10px] ${isSelected ? "text-zinc-800" : "text-zinc-500"}`}>
                        {item.desc}
                      </div>
                    </div>
                  </div>
                  <span className={`text-[9px] uppercase tracking-wider ${isSelected ? "text-zinc-900" : "text-zinc-500"}`}>
                    {item.category}
                  </span>
                </button>
              );
            })
          )}
        </div>

        {/* Footer info */}
        <div className="mt-2 border-t border-white/10 pt-2 px-2 flex items-center justify-between text-[10px] text-zinc-500">
          <div className="flex items-center gap-2">
            <span>Navigate: ↑↓</span>
            <span>•</span>
            <span>Select: ↵</span>
          </div>
          <span>APOC Command Router v1.0</span>
        </div>
      </div>
    </div>
  );
}
