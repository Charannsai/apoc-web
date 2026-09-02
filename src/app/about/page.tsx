"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Cpu, Layers, Shield, Sparkles } from "lucide-react";
import { Footer } from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white text-zinc-900 font-sans">
      {/* Top Header */}
      <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md">
        <div className="mx-auto max-w-4xl px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-xs font-mono text-zinc-600 hover:text-black transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to Home</span>
          </Link>
          <Link href="/" className="inline-flex items-center">
            <Image
              src="/apoclogo.png"
              alt="APOC"
              width={95}
              height={26}
              className="h-6 w-auto object-contain"
            />
          </Link>
        </div>
        <div className="h-4 w-full bg-gradient-to-b from-white/90 to-transparent pointer-events-none -mb-4" />
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-3xl mx-auto px-6 py-12 space-y-10">
        <div className="space-y-3 border-b border-black/10 pb-6">
          <span className="text-xs uppercase tracking-widest text-zinc-500 font-mono">
            ABOUT APOC SYSTEMS
          </span>
          <h1 className="text-3xl sm:text-5xl font-normal tracking-tight text-zinc-950">
            Building the Physical Control Layer for AI Agents
          </h1>
          <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed">
            We build physical hardware integrated with a dedicated Agent OS runtime,
            transforming raw intelligence into verifiable, real-world execution.
          </p>
        </div>

        <div className="space-y-8 text-sm sm:text-base text-zinc-700 leading-relaxed font-sans">
          <section className="space-y-3">
            <h2 className="text-xl font-normal text-zinc-950">
              The Computing Shift
            </h2>
            <p>
              Software computing is moving from humans operating interfaces to agents executing outcomes.
              However, contemporary AI agents are typically deployed as text prompts wrapping external cloud APIs.
              When an unexpected request occurs, when the environment changes, or when an action requires hardware verification,
              these prompt wrappers become brittle and enter loops.
            </p>
            <p>
              We founded Apoc on a core realization: <strong className="text-zinc-950 font-medium">an agent needs a real environment</strong>.
              It requires a physical compute boundary with known memory, local storage, hardware-enforced sandboxes,
              and direct observability over what actually happened.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-normal text-zinc-950">
              Hardware as the Control Layer
            </h2>
            <p>
              Apoc is not another cloud chatbot or disposable system prompt. It is a physical, local-first
              infrastructure device designed for your workspace.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="rounded-xl border border-black/10 bg-zinc-50 p-5 space-y-2">
                <div className="flex items-center gap-2 text-zinc-950 font-mono text-xs uppercase font-bold">
                  <Cpu className="h-4 w-4" />
                  Physical Sovereign Compute
                </div>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Dedicated neural acceleration allows models to run on your own desk. Your proprietary code, documents,
                  and workflows never leave the physical perimeter.
                </p>
              </div>

              <div className="rounded-xl border border-black/10 bg-zinc-50 p-5 space-y-2">
                <div className="flex items-center gap-2 text-zinc-950 font-mono text-xs uppercase font-bold">
                  <Layers className="h-4 w-4" />
                  Loaded Agent OS
                </div>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  A software runtime pre-loaded onto the hardware that makes the machine directly adaptable by AI,
                  giving the agent precise awareness of its compute ceilings, memory, and tools.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-normal text-zinc-950">
              Our Core Tenet: Capability != Authority
            </h2>
            <p>
              Real work demands rigorous boundaries. In Apoc, discovering that a tool exists does not grant
              permission to run it. Destructive actions, file rewrites, and external network calls require explicit
              human confirmation. We never trust model confidence; every outcome is verified against observable physical evidence.
            </p>
          </section>
        </div>

        {/* Pre-Order Waitlist Callout */}
        <div className="rounded-2xl border border-black/10 bg-zinc-50 p-6 sm:p-8 space-y-3 text-center">
          <h3 className="text-lg font-medium text-zinc-950">
            Join the Sovereign Computing Era
          </h3>
          <p className="text-xs sm:text-sm text-zinc-600 max-w-md mx-auto">
            Reserve your place on the pre-order waitlist to receive early hardware batch specifications and pilot access.
          </p>
          <div className="pt-2">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-black bg-black px-6 py-2 text-xs font-medium text-white hover:bg-zinc-800 transition-colors shadow-sm"
            >
              <span>Join Pre-Order Waitlist on Home</span>
            </Link>
          </div>
        </div>
      </main>

      {/* Clean Footer */}
      <Footer />
    </div>
  );
}
