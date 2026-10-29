import React from "react";
import type { Metadata } from "next";
import { SitePage } from "@/components/sections/SitePage";
import { ProductsContent } from "@/components/sections/ProductsContent";
import { SITE, ORG_ID, C1, CHIP, jsonLdScript } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "APOC Products: C1 Agent Computer and Molecular Chip" },
  description:
    "APOC C1 is an agent computer in Edge, Core and Pro configurations for running AI agents on your own infrastructure. The APOC Molecular Chip is research into molecular compute-in-memory for local AI.",
  alternates: { canonical: "/products" },
  openGraph: { url: `${SITE.url}/products`, title: "APOC Products: C1 Agent Computer and Molecular Chip" },
};

const LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      url: `${SITE.url}/products`,
      name: "APOC Products",
      about: { "@id": ORG_ID },
      hasPart: [{ "@id": `${SITE.url}/products#apoc-c1` }, { "@id": `${SITE.url}/products#molecular-chip` }],
    },
    {
      "@type": "ProductGroup",
      "@id": `${SITE.url}/products#apoc-c1`,
      name: C1.fullName,
      alternateName: C1.name,
      description: C1.description,
      url: `${SITE.url}/products#apoc-c1`,
      image: SITE.logo,
      brand: { "@type": "Brand", name: "APOC" },
      manufacturer: { "@id": ORG_ID },
      category: "AI agent computer",
      variesBy: ["https://schema.org/model"],
      hasVariant: C1.tiers.map((t) => ({
        "@type": "Product",
        name: `${C1.name} ${t.name}`,
        model: t.name,
        description: `${C1.name} ${t.name}: ${t.cpu}, ${t.memory}, ${t.storage}, ${t.gpu} graphics. Best for ${t.bestFor}.`,
        brand: { "@type": "Brand", name: "APOC" },
        additionalProperty: [
          { "@type": "PropertyValue", name: "Processor", value: t.cpu },
          { "@type": "PropertyValue", name: "Memory", value: t.memory },
          { "@type": "PropertyValue", name: "Storage", value: t.storage },
          { "@type": "PropertyValue", name: "Graphics", value: t.gpu },
        ],
      })),
    },
    {
      "@type": "ResearchProject",
      "@id": `${SITE.url}/products#molecular-chip`,
      name: CHIP.name,
      alternateName: ["APOC molecular chip", "APOC molecular AI chip", "molecular compute-in-memory chip"],
      description: CHIP.description,
      url: `${SITE.url}/products#molecular-chip`,
      parentOrganization: { "@id": ORG_ID },
      knowsAbout: ["Compute-in-memory", "Molecular memristors", "Local LLM inference", "Energy-efficient AI hardware"],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "APOC Labs", item: SITE.url },
        { "@type": "ListItem", position: 2, name: "Products", item: `${SITE.url}/products` },
      ],
    },
  ],
};

export default function ProductsPage() {
  return (
    <SitePage>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(LD)} />
      <ProductsContent standalone />
    </SitePage>
  );
}
