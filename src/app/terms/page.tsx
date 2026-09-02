"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Footer } from "@/components/Footer";

export default function TermsPage() {
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
            LEGAL DOCUMENTATION
          </span>
          <h1 className="text-3xl sm:text-4xl font-normal tracking-tight text-zinc-950 dark:text-white">
            Terms of Service
          </h1>
          <p className="text-xs font-mono text-zinc-500">
            Effective Date: September 2026
          </p>
        </div>

        <div className="space-y-6 text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed font-sans">
          <section className="space-y-2">
            <h2 className="text-base font-semibold text-zinc-950 dark:text-white">
              1. Scope and Physical Hardware Ownership
            </h2>
            <p>
              When purchasing an Apoc physical device, you acquire full ownership of the tangible hardware unit.
              The device operates as a self-contained, local-first control layer for autonomous agent workloads.
              You retain sovereign authority over the physical machine, its network interfaces, local storage, and connected peripherals.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-zinc-950 dark:text-white">
              2. Agent OS License and Software Rights
            </h2>
            <p>
              Apoc Agent OS is provided as pre-loaded runtime software. We grant you a perpetual, non-exclusive license to operate
              the Agent OS on your authorized Apoc hardware. You may configure capabilities, connect native tools, install Model Context
              Protocol (MCP) adapters, and execute custom workflows without external licensing constraints.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-zinc-950 dark:text-white">
              3. The Capability != Authority Security Principle
            </h2>
            <p>
              Apoc is architected around the explicit separation of capability and authority. While the system may inspect and discover
              available tools in your environment, execution authority remains strictly under user control. By using Apoc, you acknowledge
              that granting authorization to privileged actions (such as filesystem modifications, shell execution, or network calls) is
              at your sole discretion and responsibility.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-zinc-950 dark:text-white">
              4. Limitation of Liability for Autonomous Workflows
            </h2>
            <p>
              Apoc incorporates deterministic recovery engines, loop prevention, and evidence-based verification. However, autonomous agents
              interact with external software, third-party repositories, and live environments. Apoc Systems is not liable for data loss,
              system downtime, or unexpected software changes resulting from user-authorized operations or external API drift.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-zinc-950 dark:text-white">
              5. Local Storage and Pre-Order Policies
            </h2>
            <p>
              Pre-order waitlist reservations secure priority production allocation for upcoming physical hardware batches. Reservations
              can be cancelled or refunded prior to final manufacturing dispatch according to our standard hardware fulfillment terms.
            </p>
          </section>
        </div>
      </main>

      {/* Clean Footer */}
      <Footer />
    </div>
  );
}
