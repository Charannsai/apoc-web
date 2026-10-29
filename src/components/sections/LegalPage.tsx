"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Reveal } from "./Panel";

export interface LegalSection {
  title: string;
  body: string;
}

interface LegalPageProps {
  title: string;
  effective: string;
  intro: string;
  sections: LegalSection[];
}

/** Shared layout for Terms and Privacy, matching the About page. */
export function LegalPage({ title, effective, intro, sections }: LegalPageProps) {
  return (
    <div className="min-h-screen flex flex-col bg-[#fbf9f5] text-zinc-900 font-sans">
      <header className="sticky top-0 z-40 border-b border-black/[0.07] bg-[#fbf9f5]/90 backdrop-blur-md">
        <div className="flex h-16 items-center justify-between px-6 sm:px-10 lg:px-14">
          <Link href="/" className="flex items-center gap-2 text-xs text-zinc-600 hover:text-black transition-colors">
            <ArrowLeft className="h-3.5 w-3.5" />
            Home
          </Link>
          <Link href="/" aria-label="APOC Labs home">
            <Image src="/apoclogo.png" alt="APOC Labs" width={80} height={26} className="h-5 w-auto" />
          </Link>
        </div>
      </header>

      <main className="flex-1 px-6 sm:px-10 lg:px-14 py-12 sm:py-16 max-w-6xl">
        <Reveal>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.035em] text-zinc-950 leading-[1.05]">
            {title}
          </h1>
          <p className="mt-4 text-sm text-zinc-500">Effective {effective}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-10 max-w-3xl text-xl sm:text-2xl leading-[1.35] tracking-[-0.015em] text-zinc-800">
            {intro}
          </p>
        </Reveal>

        <div className="mt-14">
          {sections.map((s, i) => (
            <Reveal key={s.title} delay={0.04}>
              <section className="grid gap-3 border-t border-black/10 py-8 lg:grid-cols-[1fr_2fr] lg:gap-14">
                <div className="flex gap-4">
                  <span className="font-mono text-[11px] tracking-[0.15em] text-zinc-400 pt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-base font-medium text-zinc-950">{s.title}</h2>
                </div>
                <p className="text-sm sm:text-base leading-relaxed text-zinc-600">{s.body}</p>
              </section>
            </Reveal>
          ))}
        </div>

        <div className="border-t border-black/10 pt-8 text-sm text-zinc-600">
          Questions about this policy?{" "}
          <a
            href="mailto:charan@apoc.in"
            className="text-zinc-950 underline decoration-zinc-300 underline-offset-4 hover:decoration-black"
          >
            charan@apoc.in
          </a>
        </div>
      </main>

      <Footer transparent />
    </div>
  );
}
