"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Panel";

const CONTACT = "mailto:charan@apoc.in";
const ACCENT = "#f5c216";
const EASE = [0.22, 1, 0.36, 1] as const;

/** Each spec is [label, headline value, unit]. */
const TIERS = [
  {
    name: "Edge",
    tagline: "Compact. Efficient. On-prem.",
    specs: [
      ["Processor", "8-core", "AI processor"],
      ["Memory", "32GB", "RAM"],
      ["Storage", "512GB", "SSD"],
      ["Graphics", "Integrated", "graphics"],
    ],
    bestFor: "Edge sites, air-gapped environments and on-prem infrastructure.",
  },
  {
    name: "Core",
    tagline: "Balanced. Capable. Reliable.",
    specs: [
      ["Processor", "12-core", "AI processor"],
      ["Memory", "64GB", "RAM"],
      ["Storage", "1TB", "SSD"],
      ["Graphics", "Performance", "graphics"],
    ],
    bestFor: "Internal automation, knowledge work and departmental deployments.",
  },
  {
    name: "Pro",
    tagline: "Powerful. Scalable. Versatile.",
    specs: [
      ["Processor", "16-core", "AI processor"],
      ["Memory", "128GB", "RAM"],
      ["Storage", "2TB", "SSD"],
      ["Graphics", "Workstation", "graphics"],
    ],
    bestFor: "Multi-agent systems, high-throughput pipelines and heavy data work.",
  },
];

const PILLARS = [
  ["Local compute", "AI runs on the box, inside your own walls."],
  ["Agent operating system", "Built to keep agents working around the clock."],
  ["Secure gateways", "Controlled access to your tools and data."],
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
      <span className="relative flex h-1.5 w-1.5">
        {live && <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />}
        <span className={`relative h-1.5 w-1.5 rounded-full ${live ? "bg-emerald-500" : "bg-[#f5c216]"}`} />
      </span>
      {children}
    </span>
  );
}

function Eyebrow({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.18em] text-zinc-400">
      <span className="text-zinc-900">{index}</span>
      <span className="h-px w-6 bg-black/20" />
      <span>{children}</span>
    </div>
  );
}

/** Pick a configuration and read its specs in large type. */
function Configurator() {
  const [active, setActive] = useState(0);
  const tier = TIERS[active];

  return (
    <div className="overflow-hidden rounded-3xl bg-zinc-950 text-white">
      <div className="flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div>
          <div className="font-mono text-[11px] tracking-[0.18em] text-zinc-500">CONFIGURATIONS</div>
          <p className="mt-2 text-lg font-medium tracking-tight sm:text-xl">One platform, three sizes.</p>
        </div>
        <div role="tablist" aria-label="APOC C1 configurations" className="inline-flex self-start rounded-full bg-white/[0.07] p-1 sm:self-auto">
          {TIERS.map((t, i) => (
            <button
              key={t.name}
              role="tab"
              id={`c1-tab-${i}`}
              aria-selected={i === active}
              aria-controls="c1-tabpanel"
              onClick={() => setActive(i)}
              className={`relative cursor-pointer rounded-full px-5 py-2 text-sm font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 ${
                i === active ? "text-zinc-950" : "text-zinc-400 hover:text-white"
              }`}
            >
              {i === active && (
                <motion.span
                  layoutId="c1-tier-pill"
                  className="absolute inset-0 rounded-full bg-white"
                  transition={{ type: "spring", stiffness: 420, damping: 36 }}
                />
              )}
              <span className="relative">{t.name}</span>
            </button>
          ))}
        </div>
      </div>

      <div id="c1-tabpanel" role="tabpanel" aria-labelledby={`c1-tab-${active}`}>
        <dl className="grid grid-cols-2 gap-px border-y border-white/10 bg-white/10 lg:grid-cols-4">
          {tier.specs.map(([label, value, unit], i) => (
            <div key={label} className="min-w-0 bg-zinc-950 p-5 sm:p-8 lg:p-6 xl:p-8">
              <dt className="font-mono text-[10px] tracking-[0.18em] text-zinc-500">{label.toUpperCase()}</dt>
              <dd className="mt-4 sm:mt-6">
                <motion.span
                  key={`${tier.name}-${label}`}
                  className="block"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.05, ease: EASE }}
                >
                  <span className="block text-xl font-semibold leading-none tracking-[-0.03em] sm:text-3xl lg:text-[28px] xl:text-[32px]">{value}</span>
                  <span className="mt-2 block text-xs text-zinc-400">{unit}</span>
                </motion.span>
              </dd>
            </div>
          ))}
        </dl>

        <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-end sm:justify-between sm:p-8">
          <motion.div
            key={tier.name}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="max-w-md"
          >
            <div className="flex items-center gap-2 text-xs text-zinc-400">
              <span className="h-1.5 w-4 rounded-full" style={{ backgroundColor: ACCENT }} />
              C1 {tier.name} · {tier.tagline}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-zinc-200 sm:text-base">
              <span className="text-zinc-500">Best for </span>
              {tier.bestFor.charAt(0).toLowerCase() + tier.bestFor.slice(1)}
            </p>
          </motion.div>
          <a
            href={CONTACT}
            className="group inline-flex shrink-0 items-center gap-1.5 self-start text-xs text-zinc-400 transition-colors hover:text-white sm:self-auto"
          >
            Need a custom configuration?
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </div>
  );
}

/** A small crossbar: a column of cells lights up in turn, like a read happening in place. */
function Crossbar() {
  const n = 8;
  return (
    <div className="grid aspect-square w-full max-w-[240px] grid-cols-8 gap-1.5" aria-hidden>
      {Array.from({ length: n * n }, (_, i) => {
        const col = i % n;
        const row = Math.floor(i / n);
        return (
          <motion.span
            key={i}
            className="rounded-[2px] bg-white"
            initial={{ opacity: 0.1 }}
            animate={{ opacity: [0.1, 0.1, 0.9, 0.1] }}
            transition={{
              duration: 3.2,
              times: [0, col / n, col / n + 0.06, Math.min(col / n + 0.22, 1)],
              repeat: Infinity,
              delay: row * 0.03,
              ease: "easeOut",
            }}
            style={col === 3 && row === 5 ? { backgroundColor: ACCENT } : undefined}
          />
        );
      })}
    </div>
  );
}

export function ProductsContent({ standalone = false }: { standalone?: boolean }) {
  const Title = standalone ? "h1" : "h2";
  return (
    <div className="mx-auto max-w-6xl px-6 py-12 sm:px-10 sm:py-16 lg:px-14">
      <Reveal className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-14">
        <Title className="text-4xl font-semibold leading-[1.05] tracking-[-0.035em] text-zinc-950 sm:text-5xl lg:text-6xl">
          {standalone && <span className="sr-only">APOC </span>}Products
        </Title>
        <p className="max-w-md text-sm leading-relaxed text-zinc-600 sm:text-base lg:justify-self-end">
          Hardware for running AI where the work happens. One system shipping now, one chip in research.
        </p>
      </Reveal>

      {/* 01 · APOC C1 */}
      <section id="apoc-c1" className="mt-12 scroll-mt-20 sm:mt-16">
        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-black/10 bg-[radial-gradient(ellipse_at_72%_38%,#ffffff_0%,#fbf9f5_45%,#f1ede4_100%)]">
            <div className="grid lg:grid-cols-[5fr_7fr] lg:items-center">
              <div className="p-6 sm:p-10 lg:py-14 lg:pr-0">
                <Eyebrow index="01">AGENT COMPUTER</Eyebrow>
                <h3 className="mt-6 text-5xl font-semibold leading-none tracking-[-0.045em] text-zinc-950 sm:text-6xl lg:text-7xl">
                  APOC C1
                </h3>
                <div className="mt-5">
                  <Status live>Early access</Status>
                </div>
                <p className="mt-6 max-w-sm text-sm leading-relaxed text-zinc-600 sm:text-base">
                  A dedicated computer for AI agents. Local compute, an agent operating system and
                  secure gateways in one box, so agents can run around the clock inside your own
                  environment.
                </p>
                <a
                  href={CONTACT}
                  className="group mt-8 inline-flex items-center gap-1.5 rounded-full bg-zinc-950 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
                >
                  Request early access
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>

              <motion.div
                className="relative aspect-[2/1] w-full lg:scale-110"
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, delay: 0.15, ease: EASE }}
              >
                <Image
                  src="/apoc-c1.webp"
                  alt="APOC C1 agent computer: a compact black desktop unit with the APOC logo on top, a yellow status light and USB, display and network ports"
                  fill
                  sizes="(min-width: 1024px) 680px, 100vw"
                  className="object-contain mix-blend-multiply"
                  priority={standalone}
                />
              </motion.div>
            </div>

            <div className="grid gap-px border-t border-black/[0.07] bg-black/[0.07] sm:grid-cols-3">
              {PILLARS.map(([title, body]) => (
                <div key={title} className="bg-[#fbf9f5] px-6 py-5 sm:px-8">
                  <div className="text-sm font-medium text-zinc-950">{title}</div>
                  <p className="mt-1 text-xs leading-relaxed text-zinc-500">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-4">
          <Configurator />
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_3fr] lg:gap-14">
          <Reveal>
            <h4 className="text-sm font-medium text-zinc-950">Every C1 runs</h4>
            <p className="mt-2 text-xs leading-relaxed text-zinc-500">
              The same agent platform ships on all three configurations.
            </p>
          </Reveal>
          <div className="grid gap-x-10 sm:grid-cols-2">
            {RUNTIME.map(([title, body], i) => (
              <Reveal key={title} delay={i * 0.06} className="flex gap-5 border-t border-black/10 py-5">
                <span className="font-mono text-[11px] tracking-[0.15em] text-zinc-400">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <div className="text-sm font-medium text-zinc-950">{title}</div>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-600">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 02 · Molecular chip */}
      <section id="molecular-chip" className="mt-20 scroll-mt-20 border-t border-black/10 pt-12 sm:mt-24">
        <Reveal className="grid gap-6 lg:grid-cols-[5fr_7fr] lg:items-end lg:gap-14">
          <div>
            <Eyebrow index="02">RESEARCH</Eyebrow>
            <h3 className="mt-6 text-3xl font-semibold leading-[1.05] tracking-[-0.035em] text-zinc-950 sm:text-4xl lg:text-5xl">
              APOC Molecular Chip
            </h3>
            <div className="mt-5">
              <Status>In research</Status>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-zinc-600 sm:text-base">
            A new kind of AI chip where memory and compute are the same thing. Model weights are held
            in molecular memory cells, and the math happens inside them, so the most expensive part of
            running AI, moving data, mostly goes away.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 lg:grid-cols-[5fr_7fr]">
          <Reveal className="flex min-h-[280px] flex-col justify-between rounded-3xl bg-zinc-950 p-6 sm:p-8">
            <div className="font-mono text-[10px] tracking-[0.18em] text-zinc-500">COMPUTE IN MEMORY</div>
            <div className="flex justify-center py-8">
              <Crossbar />
            </div>
            <p className="text-xs leading-relaxed text-zinc-400">Each cell stores a weight and does the math in place.</p>
          </Reveal>
          <div className="rounded-3xl border border-black/10 bg-white/60 px-6 sm:px-8">
            {CHIP_POINTS.map(([title, body], i) => (
              <Reveal key={title} delay={i * 0.08} className={`py-6 sm:py-7 ${i > 0 ? "border-t border-black/[0.07]" : ""}`}>
                <div className="text-base font-medium text-zinc-950">{title}</div>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">{body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Reveal className="mt-20 flex flex-col justify-between gap-4 border-t border-black/10 pb-4 pt-8 sm:flex-row sm:items-center">
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
