"use client";

import React, { useState, useEffect } from "react";
import {
  Play,
  RotateCcw,
  Check,
  Shield,
  ArrowRight,
  Sparkles,
  ChevronRight,
  Cpu,
  HardDrive,
  Layers,
} from "lucide-react";

interface FlowStep {
  stage: "Hardware Introspection" | "Plan & Budget" | "Permission Gate" | "Execute on Hardware" | "Verify State";
  title: string;
  description: string;
  hardwareTelemetry?: string;
  requiresPermission?: boolean;
  permissionText?: string;
  result?: string;
}

interface ExampleWork {
  id: string;
  label: string;
  prompt: string;
  steps: FlowStep[];
}

const EXAMPLES: ExampleWork[] = [
  {
    id: "hardware-audit",
    label: "01 // Hardware-Aware Audit",
    prompt: "Inspect project repository, evaluate local NPU compute budget, patch dependencies, and verify integrity.",
    steps: [
      {
        stage: "Hardware Introspection",
        title: "Querying physical machine capabilities",
        description: "Agent OS reads local device hardware: 16GB unified memory, 8-core neural engine, NVMe storage.",
        hardwareTelemetry: "HW STATUS: NPU Active (Temp: 41°C) • Memory Budget: 2.1GB / 16GB allocated.",
      },
      {
        stage: "Plan & Budget",
        title: "Constructing bounded execution path",
        description: "Agent structures a 3-step action plan within the local compute boundary without making cloud API calls.",
      },
      {
        stage: "Permission Gate",
        title: "Physical security check (Capability ≠ Authority)",
        description: "The Agent OS detects a write operation to project root and pauses for human confirmation.",
        requiresPermission: true,
        permissionText: "APOC requests authorization to apply 2 security updates to ./package-lock.json on local storage.",
      },
      {
        stage: "Execute on Hardware",
        title: "Executing in hardware-isolated sandbox",
        description: "Sandboxed worker process executes package updates locally on device storage.",
        hardwareTelemetry: "PROCESS: PID #8910 spawned in hardware sandbox • Execution Time: 210ms.",
      },
      {
        stage: "Verify State",
        title: "Independent hardware state verification",
        description: "Direct file inspection and test suite execution confirms all 42 tests pass with zero regressions.",
        result: "Repository patched and verified. State persisted in encrypted hardware memory vault.",
      },
    ],
  },
  {
    id: "microservice",
    label: "02 // Local Daemon & Socket Probe",
    prompt: "Launch a private local model daemon on hardware port 9040, bind network socket, and test health heartbeat.",
    steps: [
      {
        stage: "Hardware Introspection",
        title: "Checking hardware network & port availability",
        description: "Agent OS probes local hardware interface: Port 9040 is unassigned and hardware accelerator is ready.",
        hardwareTelemetry: "SOCKET: 127.0.0.1:9040 AVAILABLE • ACCELERATOR: Neural Core Ready.",
      },
      {
        stage: "Plan & Budget",
        title: "Configuring daemon lifecycle contract",
        description: "Setting up background worker process with dedicated 4GB hardware memory limit.",
      },
      {
        stage: "Execute on Hardware",
        title: "Spawning local service daemon",
        description: "Daemon initialized on physical compute layer; model loaded into local high-speed memory.",
        hardwareTelemetry: "PID #4920 detached • Memory: 3.4GB pinned in high-speed hardware cache.",
      },
      {
        stage: "Verify State",
        title: "Direct physical socket verification",
        description: "Agent queries physical localhost socket: HTTP 200 OK received with 11ms latency.",
        result: "Local service is live, healthy, and registered in the on-device capability directory.",
      },
    ],
  },
  {
    id: "offline-failover",
    label: "03 // Offline Failover & Self-Healing",
    prompt: "Sync workspace schema. When external connection drops, adaptively switch to local hardware cache mirror.",
    steps: [
      {
        stage: "Hardware Introspection",
        title: "Detecting network interface state",
        description: "External network request returned 503 outage. Agent OS detects boundary condition.",
      },
      {
        stage: "Plan & Budget",
        title: "Adaptive re-planning via hardware fallback",
        description: "Instead of getting trapped in a prompt retry loop, Agent OS re-routes to on-device NVMe cache mirror.",
      },
      {
        stage: "Execute on Hardware",
        title: "Restoring schema from local hardware storage",
        description: "Extracted verified schema snapshot directly from local flash storage in 12ms.",
        hardwareTelemetry: "STORAGE I/O: 14 schema files restored from /vault/snapshots.",
      },
      {
        stage: "Verify State",
        title: "Validating schema integrity",
        description: "Validated 100% schema match against local runtime contract. Zero downtime.",
        result: "Workflow completed offline via local hardware adaptability without human intervention.",
      },
    ],
  },
];

export function RuntimeSimulator() {
  const [selectedExampleIndex, setSelectedExampleIndex] = useState(0);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasApproved, setHasApproved] = useState(false);

  const activeExample = EXAMPLES[selectedExampleIndex];
  const currentStep = activeExample.steps[currentStepIndex];
  const isFinished = currentStepIndex >= activeExample.steps.length - 1;

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      if (currentStep?.requiresPermission && !hasApproved) {
        setIsPlaying(false);
      } else if (currentStepIndex < activeExample.steps.length - 1) {
        timer = setTimeout(() => {
          setCurrentStepIndex((prev) => prev + 1);
        }, 1800);
      } else {
        setIsPlaying(false);
      }
    }
    return () => clearTimeout(timer);
  }, [isPlaying, currentStepIndex, currentStep, hasApproved, activeExample.steps.length]);

  const handleSelectExample = (idx: number) => {
    setSelectedExampleIndex(idx);
    setCurrentStepIndex(0);
    setIsPlaying(false);
    setHasApproved(false);
  };

  const handleNextStep = () => {
    if (currentStep?.requiresPermission && !hasApproved) return;
    if (currentStepIndex < activeExample.steps.length - 1) {
      setCurrentStepIndex((prev) => prev + 1);
    }
  };

  const handleApprove = () => {
    setHasApproved(true);
    if (currentStepIndex < activeExample.steps.length - 1) {
      setCurrentStepIndex((prev) => prev + 1);
      setIsPlaying(true);
    }
  };

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentStepIndex(0);
    setHasApproved(false);
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto rounded-2xl border border-white/15 bg-zinc-950/85 p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl">
      {/* Top Header & Tabs */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-widest text-zinc-500 font-mono">
              INTERACTIVE DEMONSTRATION
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-xs font-mono text-zinc-300">HARDWARE-AWARE EXECUTION</span>
          </div>
          <h3 className="text-lg font-medium text-white font-sans mt-0.5">
            How the Agent OS interacts with the Physical Hardware Layer
          </h3>
        </div>

        {/* Task Choice Tabs */}
        <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-black/60 p-1 text-xs font-mono">
          {EXAMPLES.map((ex, idx) => (
            <button
              key={ex.id}
              onClick={() => handleSelectExample(idx)}
              className={`rounded-full px-3 py-1.5 transition-all ${
                selectedExampleIndex === idx
                  ? "bg-white text-black font-semibold shadow-sm"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {ex.label}
            </button>
          ))}
        </div>
      </div>

      {/* The Request / Goal Display */}
      <div className="my-6 rounded-xl border border-white/10 bg-black/70 p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <div className="text-xs text-zinc-500 mb-1 font-mono uppercase tracking-wider">
            DELEGATED OUTCOME:
          </div>
          <div className="text-sm sm:text-base text-zinc-100 font-sans">
            &ldquo;{activeExample.prompt}&rdquo;
          </div>
        </div>
        <div className="rounded border border-white/15 bg-zinc-900 px-2.5 py-1 text-[11px] font-mono text-zinc-300 shrink-0">
          STEP {currentStepIndex + 1} OF {activeExample.steps.length}
        </div>
      </div>

      {/* Progress Flow Steps */}
      <div className="space-y-3 my-6">
        {activeExample.steps.slice(0, currentStepIndex + 1).map((step, idx) => {
          const isCurrent = idx === currentStepIndex;
          return (
            <div
              key={idx}
              className={`rounded-xl border p-4 sm:p-5 transition-all duration-300 ${
                isCurrent
                  ? "border-white/40 bg-zinc-900/90 shadow-lg"
                  : "border-white/5 bg-zinc-950/40 text-zinc-400"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3 w-full">
                  <div
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-mono transition-colors ${
                      idx < currentStepIndex
                        ? "bg-white text-black font-bold"
                        : isCurrent
                        ? "border border-white bg-black text-white"
                        : "border border-zinc-800 text-zinc-600"
                    }`}
                  >
                    {idx < currentStepIndex ? <Check className="h-3.5 w-3.5" /> : idx + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                        {step.stage}
                      </span>
                      <span className="text-zinc-600">•</span>
                      <h4 className="text-sm font-medium text-white font-sans">
                        {step.title}
                      </h4>
                    </div>
                    <p className="mt-1 text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed">
                      {step.description}
                    </p>

                    {/* Hardware Telemetry Note */}
                    {step.hardwareTelemetry && (
                      <div className="mt-2.5 rounded bg-black/80 border border-white/10 px-3 py-1.5 text-[11px] font-mono text-zinc-400">
                        {step.hardwareTelemetry}
                      </div>
                    )}

                    {/* Result notification */}
                    {step.result && (
                      <div className="mt-3 rounded-lg border border-white/20 bg-zinc-950 p-3 text-xs sm:text-sm text-white flex items-center gap-2">
                        <Check className="h-4 w-4 text-white shrink-0" />
                        <span className="font-sans">{step.result}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Permission Check prompt if active */}
              {step.requiresPermission && isCurrent && !hasApproved && (
                <div className="mt-4 rounded-lg border border-white/40 bg-black/90 p-4 animate-in fade-in duration-200">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div className="space-y-1">
                      <div className="text-xs font-medium text-white flex items-center gap-1.5 font-mono">
                        <Shield className="h-3.5 w-3.5 text-white" />
                        <span>HARDWARE PERMISSION GATE</span>
                      </div>
                      <p className="text-xs text-zinc-300 font-sans">
                        {step.permissionText}
                      </p>
                    </div>
                    <button
                      onClick={handleApprove}
                      className="rounded-full bg-white px-4 py-1.5 text-xs font-medium text-black hover:bg-zinc-200 transition-all active:scale-95 flex items-center gap-1.5 shrink-0 font-sans"
                    >
                      <Check className="h-3.5 w-3.5" />
                      <span>Authorize on Hardware</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Simulator Bottom Controls */}
      <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs font-mono">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            disabled={currentStep?.requiresPermission && !hasApproved}
            className="flex items-center gap-1.5 rounded-full border border-white bg-white px-4 py-1.5 font-medium text-black hover:bg-zinc-200 transition-all disabled:opacity-40"
          >
            <Play className="h-3 w-3 fill-black" />
            <span>{isPlaying ? "Pause" : isFinished ? "Replay" : "Run Execution"}</span>
          </button>

          <button
            onClick={handleNextStep}
            disabled={isFinished || (currentStep?.requiresPermission && !hasApproved)}
            className="flex items-center gap-1 rounded-full border border-white/15 bg-zinc-900 px-3 py-1.5 text-zinc-300 hover:text-white hover:border-white/30 transition-all disabled:opacity-30"
          >
            <span>Step</span>
            <ChevronRight className="h-3 w-3" />
          </button>
        </div>

        <button
          onClick={handleReset}
          className="flex items-center gap-1 text-zinc-400 hover:text-white transition-colors"
        >
          <RotateCcw className="h-3 w-3" />
          <span>Reset</span>
        </button>
      </div>
    </div>
  );
}
