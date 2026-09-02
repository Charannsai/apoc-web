"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Shield, Lock, Cpu, CheckCircle } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Footer } from "@/components/Footer";

export default function SecurityPage() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white dark:bg-[#050506] text-zinc-900 dark:text-zinc-100 font-sans transition-colors">
      {/* Top Header */}
      <header className="sticky top-0 z-40 w-full bg-white/80 dark:bg-[#050506]/80 backdrop-blur-md">
        <div className="mx-auto max-w-4xl px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-xs font-mono text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to Apoc</span>
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold tracking-tight text-zinc-900 dark:text-white">
              Apoc
            </span>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-3xl mx-auto px-6 py-12 space-y-8">
        <div className="space-y-2 border-b border-black/10 dark:border-white/10 pb-6">
          <span className="text-xs uppercase tracking-widest text-zinc-500 font-mono">
            SECURITY & TRUST ARCHITECTURE
          </span>
          <h1 className="text-3xl sm:text-4xl font-normal tracking-tight text-zinc-950 dark:text-white">
            Security Overview
          </h1>
          <p className="text-xs font-mono text-zinc-500">
            Runtime Governance and Environmental Isolation
          </p>
        </div>

        <div className="space-y-6 text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed font-sans">
          <section className="space-y-2">
            <h2 className="text-base font-semibold text-zinc-950 dark:text-white flex items-center gap-2">
              <Shield className="h-4 w-4" />
              1. The Core Principle: Capability != Authority
            </h2>
            <p>
              In conventional agent frameworks, discovering a tool automatically gives the model unchecked power to invoke it.
              Apoc breaks this vulnerability by enforcing an authoritative security boundary outside the reasoning model.
              An agent may know that a deletion, deployment, or shell tool exists, but the runtime kernel prevents execution without
              explicit policy validation or interactive human authorization.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-zinc-950 dark:text-white flex items-center gap-2">
              <Cpu className="h-4 w-4" />
              2. Hardware-Enforced Sandboxing
            </h2>
            <p>
              Workflows run in segregated subprocess workers with bounded filesystem and network paths.
              High-impact commands cannot escape the designated workspace boundary, mitigating malicious prompt injection attacks
              that attempt to modify root files or leak unauthorized documents.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-zinc-950 dark:text-white flex items-center gap-2">
              <Lock className="h-4 w-4" />
              3. Cryptographic Human Sign-Off
            </h2>
            <p>
              Operations classified as high-risk (such as production deployments, irreversible file rewrites, or credential access)
              trigger a physical permission gate. The system presents the exact target, arguments, and risk classification to the user
              before any action is committed.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-zinc-950 dark:text-white flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              4. Evidence-Driven Outcome Verification
            </h2>
            <p>
              Apoc never relies on conversational claims or model confidence scores to confirm success.
              Every action must produce measurable physical evidence: verifying that sockets respond, files exist with valid checksums,
              and test suites exit with zero errors.
            </p>
          </section>
        </div>
      </main>

      {/* Clean Footer */}
      <Footer />
    </div>
  );
}
