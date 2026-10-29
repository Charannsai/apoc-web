"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Panel";

const CONTACT = "mailto:charan@apoc.in";

const TIERS = [
  {
    name: "Edge",
    tagline: "Compact. Efficient. On-prem.",
    specs: [
      ["CPU", "AMD Ryzen AI 7 350"],
      ["Memory", "32GB LPDDR5X"],
      ["Storage", "512GB NVMe SSD"],
      ["GPU", "Radeon 860M"],
    ],
    bestFor: "Edge sites, air-gapped environments and on-prem infrastructure.",
  },
  {
    name: "Core",
    tagline: "Balanced. Capable. Reliable.",
    specs: [
      ["CPU", "AMD Ryzen AI 9 HX 370"],
      ["Memory", "64GB LPDDR5X"],
      ["Storage", "1TB NVMe SSD"],
      ["GPU", "Radeon 890M"],
    ],
    bestFor: "Internal automation, knowledge work and departmental deployments.",
  },
  {
    name: "Pro",
    tagline: "Powerful. Scalable. Versatile.",
    specs: [
      ["CPU", "AMD Ryzen AI Max+ 395"],
      ["Memory", "128GB LPDDR5X"],
      ["Storage", "2TB NVMe SSD"],
      ["GPU", "Radeon 8060S"],
    ],
    bestFor: "Multi-agent systems, high-throughput pipelines and heavy data work.",
  },
];

const RUNTIME = [
  ["Model routing", "Picks the right model for each task, budget and context."],
  ["Agent runtime", "Sandboxed execution so workflows stay stable and verifiable."],
  ["Agent gateway", "One interface to your tools, APIs, files and services."],
  ["Governance", "Policy enforced on the device. Capability is not authority."],
];

const CHIP_POINTS = [
  [
    "Weights stay put",
    "Today, running an AI model locally is slowed by moving its weights out of memory for every word it writes. Our chip stores them in molecular memory cells and computes right where they live.",
  ],
  [
    "Built for local AI",
    "The goal is a plug-in accelerator that runs large language models on your own machine at a fraction of the power, with the tools you already use.",
  ],
  [
    "Honest about where it is",
    "This is research. The design is modelled and simulated against published chips. It is not a fabricated part yet.",
  ],
];

function Status({ children, live }: { children: React.ReactNode; live?: boolean }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white px-2.5 py-1 text-[11px] font-medium text-zinc-700">
      <span className={`h-1.5 w-1.5 rounded-full ${live ? "bg-emerald-500" : "bg-[#f5c216]"}`} />
      {children}
    </span>
  );
}

/** A small crossbar: a column of cells lights up in turn, like a read happening in place. */
function Crossbar() {
  const n = 8;
  return (
    <div className="grid grid-cols-8 gap-1.5 w-full max-w-[220px] aspect-square" aria-hidden>
      {Array.from({ length: n * n }, (_, i) => {
        const col = i % n;
        const row = Math.floor(i / n);
        return (
          <motion.span
            key={i}
            className="rounded-[2px] bg-zinc-900"
            initial={{ opacity: 0.12 }}
            animate={{ opacity: [0.12, 0.12, 0.9, 0.12] }}
            transition={{
              duration: 3.2,
              times: [0, col / n, col / n + 0.06, Math.min(col / n + 0.22, 1)],
              repeat: Infinity,
              delay: row * 0.03,
              ease: "easeOut",
            }}
            style={col === 3 && row === 5 ? { backgroundColor: "#f5c216" } : undefined}
          />
        );
      })}
    </div>
  );
}

export function ProductsContent({ standalone = false }: { standalone?: boolean }) {
  const Title = standalone ? "h1" : "h2";
  return (
    <div className="px-6 sm:px-10 lg:px-14 py-12 sm:py-16 max-w-6xl">
      <Reveal>
        <Title className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.035em] text-zinc-950 leading-[1.05]">
          {standalone && <span className="sr-only">APOC </span>}Products
        </Title>
        <p className="mt-4 max-w-xl text-sm sm:text-base text-zinc-600 leading-relaxed">
          Hardware for running AI where the work happens. One system shipping now, one chip in research.
        </p>
      </Reveal>

      {/* 01 · APOC C1 */}
      <section id="apoc-c1" className="scroll-mt-20 mt-16 sm:mt-20 border-t border-black/10 pt-10">
        <Reveal className="grid gap-6 lg:grid-cols-[1fr_2fr] lg:gap-14">
          <div>
            <div className="font-mono text-[11px] tracking-[0.18em] text-zinc-400">01</div>
            <h3 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-950">APOC C1</h3>
            <p className="mt-1 text-sm text-zinc-500">Agent computer</p>
            <div className="mt-4">
              <Status live>Early access</Status>
            </div>
          </div>
          <p className="text-sm sm:text-base text-zinc-600 leading-relaxed lg:pt-8">
            A dedicated computer for AI agents. Local compute, an agent operating system and secure
            gateways in one box, so agents can run around the clock inside your own environment.
            Three configurations, one platform.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-3 md:grid-cols-3">
          {TIERS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <div className="group h-full rounded-xl border border-black/10 bg-white/60 p-5 transition-colors duration-300 hover:border-black/30 hover:bg-white">
                <div className="flex items-baseline justify-between">
                  <h4 className="text-lg font-semibold text-zinc-950">{t.name}</h4>
                  <span className="font-mono text-[10px] tracking-[0.15em] text-zinc-400">C1 / {String(i + 1).padStart(2, "0")}</span>
                </div>
                <p className="mt-1 text-xs text-zinc-500">{t.tagline}</p>
                <dl className="mt-5 space-y-2 border-t border-black/[0.07] pt-4 text-xs">
                  {t.specs.map(([k, v]) => (
                    <div key={k} className="flex justify-between gap-4">
                      <dt className="text-zinc-400">{k}</dt>
                      <dd className="text-right text-zinc-800">{v}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-5 text-xs leading-relaxed text-zinc-600">{t.bestFor}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <div className="text-xs font-medium text-zinc-500">Every C1 runs</div>
          <div className="mt-4 grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-4">
            {RUNTIME.map(([title, body]) => (
              <div key={title}>
                <div className="text-sm font-medium text-zinc-950">{title}</div>
                <p className="mt-1 text-xs leading-relaxed text-zinc-500">{body}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-xs text-zinc-500">
            Need a different setup?{" "}
            <a href={CONTACT} className="text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-black">
              We build custom configurations
            </a>
            .
          </p>
        </Reveal>
      </section>

      {/* 02 · Molecular chip */}
      <section id="molecular-chip" className="scroll-mt-20 mt-20 border-t border-black/10 pt-10">
        <Reveal className="grid gap-6 lg:grid-cols-[1fr_2fr] lg:gap-14">
          <div>
            <div className="font-mono text-[11px] tracking-[0.18em] text-zinc-400">02</div>
            <h3 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-950">APOC Molecular Chip</h3>
            <p className="mt-1 text-sm text-zinc-500">Compute in memory for local AI</p>
            <div className="mt-4">
              <Status>In research</Status>
            </div>
          </div>
          <p className="text-sm sm:text-base text-zinc-600 leading-relaxed lg:pt-8">
            A new kind of AI chip where memory and compute are the same thing. Model weights are held
            in molecular memory cells, and the math happens inside them, so the most expensive part of
            running AI, moving data, mostly goes away.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-14">
          <Reveal className="flex items-center justify-center rounded-xl border border-black/10 bg-white/60 p-8">
            <Crossbar />
          </Reveal>
          <div className="grid gap-6">
            {CHIP_POINTS.map(([title, body], i) => (
              <Reveal key={title} delay={i * 0.08}>
                <div className="text-sm font-medium text-zinc-950">{title}</div>
                <p className="mt-1 text-sm leading-relaxed text-zinc-600">{body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Reveal className="mt-20 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-black/10 pt-8 pb-4">
        <p className="text-sm text-zinc-600">Interested in C1 or the chip research?</p>
        <a
          href={CONTACT}
          className="group inline-flex items-center gap-1.5 self-start rounded-full bg-zinc-950 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
        >
          charan@apoc.in
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </Reveal>
    </div>
  );
}
