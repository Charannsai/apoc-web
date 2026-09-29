"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Cpu,
  Layers,
  Shield,
  Sparkles,
  Factory,
  Car,
  Building2,
  Stethoscope,
  Coins,
  CheckCircle,
  Network,
  Users,
} from "lucide-react";
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
              alt="APOC Labs"
              width={95}
              height={26}
              className="h-6 w-auto object-contain"
            />
          </Link>
        </div>
        <div className="h-4 w-full bg-gradient-to-b from-white/90 to-transparent pointer-events-none -mb-4" />
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-3xl mx-auto px-6 py-12 space-y-12">
        {/* Hero Title Section */}
        <div className="space-y-3 border-b border-black/10 pb-6">
          <span className="text-xs uppercase tracking-widest text-zinc-500 font-mono">
            ABOUT APOC LABS
          </span>
          <h1 className="text-3xl sm:text-5xl font-normal tracking-tight text-zinc-950">
            Intelligent Solutions for Real-World Industries
          </h1>
          <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed">
            APOC Labs is an AI-driven technology company building intelligent solutions tailored to the evolving
            needs of businesses and industries.
          </p>
        </div>

        {/* Narrative Sections */}
        <div className="space-y-10 text-sm sm:text-base text-zinc-700 leading-relaxed font-sans">
          {/* Mission */}
          <section className="space-y-3">
            <h2 className="text-xl font-normal text-zinc-950">
              Bridging Research to Practical Reality
            </h2>
            <p>
              We aim to bridge the gap between advanced AI research and real-world applications by developing
              adaptable AI systems that address industry-specific challenges across mobility, manufacturing,
              enterprise operations, and other technology-driven sectors.
            </p>
            <p>
              While artificial intelligence is evolving rapidly, most available solutions remain generic,
              cloud-dependent, and disconnected from industry-specific workflows, infrastructure, and operational
              requirements. The challenge is not simply accessing powerful models—it is transforming AI advancements
              into adaptable, reliable, and industry-specific solutions that create verifiable real-world value.
            </p>
          </section>

          {/* Our Approach */}
          <section className="space-y-4">
            <h2 className="text-xl font-normal text-zinc-950">
              Our Technical Approach
            </h2>
            <p>
              Our approach combines applied AI, intelligent automation, edge computing, and emerging AI architectures
              to develop solutions that improve operational efficiency, enable smarter decision-making, and transform
              existing workflows. We explore each industry's requirements to develop solutions suited to its operational
              environment, infrastructure, and data requirements.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="rounded-xl border border-black/10 bg-zinc-50 p-5 space-y-2">
                <div className="flex items-center gap-2 text-zinc-950 font-mono text-xs uppercase font-bold">
                  <Factory className="h-4 w-4" />
                  Industry-Specific AI
                </div>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Solutions designed from first principles around unique industry needs, proprietary equipment, and edge constraints.
                </p>
              </div>

              <div className="rounded-xl border border-black/10 bg-zinc-50 p-5 space-y-2">
                <div className="flex items-center gap-2 text-zinc-950 font-mono text-xs uppercase font-bold">
                  <Network className="h-4 w-4" />
                  Intelligent Automation
                </div>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Integrating agent systems into existing workflows and enterprise systems to elevate operational throughput.
                </p>
              </div>

              <div className="rounded-xl border border-black/10 bg-zinc-50 p-5 space-y-2">
                <div className="flex items-center gap-2 text-zinc-950 font-mono text-xs uppercase font-bold">
                  <Cpu className="h-4 w-4" />
                  Practical Deployment
                </div>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Bringing advanced AI out of theoretical research into physical compute environments that run reliably 24x7.
                </p>
              </div>
            </div>
          </section>

          {/* First Product: APOC C1 */}
          <section className="space-y-3">
            <h2 className="text-xl font-normal text-zinc-950">
              First Product: APOC C1 Agent Computer
            </h2>
            <p>
              Our first product, <strong className="text-zinc-950 font-medium">APOC C1</strong>, is an agent computer
              designed to bring AI computing and agent capabilities into one environment.
            </p>
            <p className="italic text-zinc-800">
              &ldquo;APOC Labs builds the solutions. APOC C1 is the first step toward making adaptable AI practical across industries.&rdquo;
            </p>
            <p>
              Built across three specialized tiers—<strong className="text-zinc-950">Core</strong> (AMD Ryzen™ AI 9 HX 370),
              <strong className="text-zinc-950"> Edge</strong> (AMD Ryzen™ AI 7 350), and <strong className="text-zinc-950">Pro</strong> (AMD Ryzen™ AI Max+ 395)—APOC
              C1 provides dedicated local neural compute, loaded Agent OS, dynamic model routing, and unified gateways for sustained workloads.
            </p>
          </section>

          {/* Next-Gen Exploration & Long-Term Vision */}
          <section className="space-y-3">
            <h2 className="text-xl font-normal text-zinc-950">
              Next-Generation AI Exploration
            </h2>
            <p>
              In addition to building practical AI solutions for enterprises, APOC Labs is exploring next-generation AI
              technologies and novel approaches to intelligent information representation and computational systems.
              Our long-term vision is to make advanced AI more accessible, adaptable, and impactful across industries.
            </p>
            <div className="rounded-xl border border-black/10 bg-zinc-900 text-white p-5 space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-400">
                THE APOC VISION
              </span>
              <p className="text-sm font-normal text-zinc-200">
                &ldquo;As AI evolves from answering questions to transforming industries, it will need more than powerful models.
                It will need adaptable systems that can think, act, collaborate, and evolve within real-world environments.&rdquo;
              </p>
              <div className="text-[11px] font-mono text-zinc-400 pt-1">
                Creating the apoc-era for the agentic era :)
              </div>
            </div>
          </section>

          {/* Industry Collaboration Model */}
          <section className="space-y-3">
            <h2 className="text-xl font-normal text-zinc-950">
              Industry Collaboration & Proof-of-Concept
            </h2>
            <p>
              Through this approach, we collaborate with enterprise and industrial partners to identify high-value use cases,
              develop proof-of-concept (POC) solutions, and scale successful innovations into practical deployments.
            </p>
            <div className="flex items-center gap-3 text-xs font-mono text-zinc-600 pt-1">
              <span className="flex items-center gap-1.5"><CheckCircle className="h-3.5 w-3.5 text-zinc-900" /> Mobility & Fleet</span>
              <span className="flex items-center gap-1.5"><CheckCircle className="h-3.5 w-3.5 text-zinc-900" /> Industrial Robotics</span>
              <span className="flex items-center gap-1.5"><CheckCircle className="h-3.5 w-3.5 text-zinc-900" /> Enterprise Ops</span>
            </div>
          </section>

          {/* Leadership */}
          <section className="space-y-3 pt-2">
            <h2 className="text-xl font-normal text-zinc-950">
              Leadership & Foundations
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600">
              APOC Labs is founded by Charan Sai and Divya Teja (CTO & Co-Founder), engineers dedicated to creating sovereign,
              verifiable, and industry-grade AI infrastructure.
            </p>
          </section>
        </div>

        {/* CTA Callout */}
        <div className="rounded-2xl border border-black/10 bg-zinc-50 p-6 sm:p-8 space-y-3 text-center">
          <h3 className="text-lg font-medium text-zinc-950">
            Partner with APOC Labs
          </h3>
          <p className="text-xs sm:text-sm text-zinc-600 max-w-md mx-auto">
            Discuss proof-of-concept pilots, explore tailored enterprise solutions, or join early access for APOC C1 hardware.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-black bg-black px-6 py-2 text-xs font-medium text-white hover:bg-zinc-800 transition-colors shadow-sm"
            >
              <span>Contact Our Team</span>
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white px-5 py-2 text-xs font-medium text-zinc-800 hover:text-black transition-colors"
            >
              <span>Explore C1 on Home</span>
            </Link>
          </div>
        </div>
      </main>

      {/* Clean Footer */}
      <Footer />
    </div>
  );
}
