"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Panel";

const CONTACT = "mailto:charan@apoc.in";

const ROADMAP = [
  {
    when: "Now",
    title: "APOC C1",
    body: "Agent computers that run AI inside a company's own walls. Three configurations, early access open.",
  },
  {
    when: "Next",
    title: "Industry pilots",
    body: "Proof-of-concept deployments with partners, then scaling the ones that work into everyday operations.",
  },
  {
    when: "Later",
    title: "Molecular chip",
    body: "Research toward a chip that runs large AI models locally using a fraction of today's energy.",
  },
];

const FOCUS = ["Mobility and fleet", "Manufacturing and robotics", "Enterprise operations"];

export function AboutContent({ standalone = false }: { standalone?: boolean }) {
  const Title = standalone ? "h1" : "h2";
  return (
    <div className="px-6 sm:px-10 lg:px-14 py-12 sm:py-16 max-w-6xl">
      <Reveal>
        <Title className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.035em] text-zinc-950 leading-[1.05]">
          {standalone && <span className="sr-only">APOC </span>}About
        </Title>
      </Reveal>

      <Reveal delay={0.1}>
        <p className="mt-10 max-w-3xl text-2xl sm:text-3xl lg:text-[34px] font-normal leading-[1.25] tracking-[-0.02em] text-zinc-950">
          APOC Labs builds the hardware and systems that let AI do real work,{" "}
          <span className="text-zinc-400">close to where the work happens.</span>
        </p>
      </Reveal>

      <section className="mt-16 grid gap-6 border-t border-black/10 pt-10 lg:grid-cols-[1fr_2fr] lg:gap-14">
        <Reveal>
          <h3 className="text-sm font-medium text-zinc-500">Why we exist</h3>
        </Reveal>
        <Reveal delay={0.05} className="space-y-4 text-sm sm:text-base leading-relaxed text-zinc-600">
          <p>
            AI is moving from answering questions to doing work. Most of it still lives in someone
            else&apos;s cloud, built for everyone and fitted to no one.
          </p>
          <p>
            Real businesses need AI that runs on their own infrastructure, fits their workflows, keeps
            their data private and stays up all day. That is the gap we are closing, from the computer
            on the desk down to the chip inside it.
          </p>
        </Reveal>
      </section>

      <section className="mt-16 border-t border-black/10 pt-10">
        <Reveal>
          <h3 className="text-sm font-medium text-zinc-500">What we are building</h3>
        </Reveal>
        <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-black/10 bg-black/10 md:grid-cols-3">
          {ROADMAP.map((r, i) => (
            <Reveal key={r.when} delay={i * 0.08} className="bg-[#fbf9f5] p-6">
              <div className="flex items-center gap-2 font-mono text-[11px] tracking-[0.15em] text-zinc-400">
                <span className={`h-1.5 w-1.5 rounded-full ${i === 0 ? "bg-emerald-500" : i === 1 ? "bg-zinc-400" : "bg-[#f5c216]"}`} />
                {r.when.toUpperCase()}
              </div>
              <div className="mt-4 text-lg font-semibold text-zinc-950">{r.title}</div>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">{r.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mt-16 grid gap-6 border-t border-black/10 pt-10 lg:grid-cols-[1fr_2fr] lg:gap-14">
        <Reveal>
          <h3 className="text-sm font-medium text-zinc-500">Where we work</h3>
        </Reveal>
        <Reveal delay={0.05}>
          <ul className="divide-y divide-black/[0.07] border-y border-black/[0.07]">
            {FOCUS.map((f) => (
              <li key={f} className="py-3 text-base text-zinc-900">
                {f}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <Reveal className="mt-20 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-black/10 pt-8 pb-4">
        <p className="text-sm text-zinc-600">Want to build with us, pilot C1 or talk research?</p>
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
