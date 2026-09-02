"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Footer } from "@/components/Footer";

export default function PrivacyPage() {
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
            PRIVACY CHARTER
          </span>
          <h1 className="text-3xl sm:text-4xl font-normal tracking-tight text-zinc-950 dark:text-white">
            Privacy Policy
          </h1>
          <p className="text-xs font-mono text-zinc-500">
            Effective Date: September 2026
          </p>
        </div>

        <div className="space-y-6 text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed font-sans">
          <section className="space-y-2">
            <h2 className="text-base font-semibold text-zinc-950 dark:text-white">
              1. Local-First Sovereignty
            </h2>
            <p>
              Apoc is designed from the ground up on the principle of local-first privacy. Your model inference,
              system state, episodic memory, task traces, and workspace files default entirely to your local physical hardware.
              We do not route, stream, or inspect your private interactions on central servers.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-zinc-950 dark:text-white">
              2. Zero Cloud Data Ingestion
            </h2>
            <p>
              Your source code, proprietary documents, terminal output, and conversational instructions are never collected
              or used to train public foundation models. The physical machine acts as an impenetrable sovereign perimeter for your digital work.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-zinc-950 dark:text-white">
              3. Telemetry and Analytics Policy
            </h2>
            <p>
              Apoc does not install tracking daemons, behavioral beacons, or telemetry probes by default. Any diagnostic logs generated
              during execution remain strictly within your on-device SQLite database and can be exported, inspected, or erased at any time.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-zinc-950 dark:text-white">
              4. Secrets and Scoped Credential Storage
            </h2>
            <p>
              Sensitive credentials, API keys, and environment tokens are stored in hardware-encrypted local vaults.
              The Agent OS isolates credentials so raw tokens are never leaked into model context windows, prompt transcripts, or execution logs.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-semibold text-zinc-950 dark:text-white">
              5. Waitlist Information
            </h2>
            <p>
              When you submit your email for our pre-order waitlist, we collect only your email address for the sole purpose of notifying you
              about hardware batch availability and shipping schedules. We never sell, rent, or share your contact information with third parties.
            </p>
          </section>
        </div>
      </main>

      {/* Clean Footer */}
      <Footer />
    </div>
  );
}
