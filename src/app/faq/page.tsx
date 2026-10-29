import React from "react";
import type { Metadata } from "next";
import { SitePage } from "@/components/sections/SitePage";
import { SITE, FAQ, jsonLdScript } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "APOC Labs FAQ: APOC C1 and the Molecular Chip" },
  description:
    "Answers about APOC Labs, the APOC C1 agent computer and its configurations, the APOC Molecular Chip, what a molecular chip is, and how compute-in-memory makes AI more efficient.",
  alternates: { canonical: "/faq" },
  openGraph: { url: `${SITE.url}/faq`, title: "APOC Labs FAQ" },
};

const LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      url: `${SITE.url}/faq`,
      name: "APOC Labs FAQ",
      mainEntity: FAQ.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "APOC Labs", item: SITE.url },
        { "@type": "ListItem", position: 2, name: "FAQ", item: `${SITE.url}/faq` },
      ],
    },
  ],
};

export default function FaqPage() {
  return (
    <SitePage>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(LD)} />
      <div className="px-6 sm:px-10 lg:px-14 py-12 sm:py-16 max-w-6xl">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.035em] text-zinc-950 leading-[1.05]">
          <span className="sr-only">APOC Labs </span>Questions
        </h1>
        <p className="mt-4 max-w-xl text-sm sm:text-base text-zinc-600 leading-relaxed">
          About APOC Labs, APOC C1 and the APOC Molecular Chip.
        </p>

        <div className="mt-14">
          {FAQ.map((f) => (
            <details
              key={f.q}
              className="group border-t border-black/10 py-6 last:border-b"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-base sm:text-lg font-medium text-zinc-950 [&::-webkit-details-marker]:hidden">
                <h2>{f.q}</h2>
                <span className="mt-1 text-zinc-400 transition-transform duration-300 group-open:rotate-45" aria-hidden>
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-3xl text-sm sm:text-base leading-relaxed text-zinc-600">{f.a}</p>
            </details>
          ))}
        </div>

        <p className="mt-10 text-sm text-zinc-600">
          Something else?{" "}
          <a href={`mailto:${SITE.email}`} className="text-zinc-950 underline decoration-zinc-300 underline-offset-4 hover:decoration-black">
            {SITE.email}
          </a>
        </p>
      </div>
    </SitePage>
  );
}
