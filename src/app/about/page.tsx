import React from "react";
import type { Metadata } from "next";
import { SitePage } from "@/components/sections/SitePage";
import { AboutContent } from "@/components/sections/AboutContent";
import { SITE, ORG_ID, jsonLdScript } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "About APOC Labs: AI Hardware Built for Real Work" },
  description:
    "APOC Labs builds the hardware and systems that let AI do real work: APOC C1 agent computers today, industry pilots next, and research into the APOC Molecular Chip.",
  alternates: { canonical: "/about" },
  openGraph: { url: `${SITE.url}/about`, title: "About APOC Labs" },
};

const LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      url: `${SITE.url}/about`,
      name: "About APOC Labs",
      about: { "@id": ORG_ID },
      mainEntity: { "@id": ORG_ID },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "APOC Labs", item: SITE.url },
        { "@type": "ListItem", position: 2, name: "About", item: `${SITE.url}/about` },
      ],
    },
  ],
};

export default function AboutPage() {
  return (
    <SitePage>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(LD)} />
      <AboutContent standalone />
    </SitePage>
  );
}
