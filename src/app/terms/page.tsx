import React from "react";
import type { Metadata } from "next";
import { LegalPage } from "@/components/sections/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms for using apoc.in and joining APOC C1 early access, in plain language.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      effective="November 2026"
      intro="These terms apply when you use apoc.in or join APOC early access. Plain language, no surprises."
      sections={[
        {
          title: "Who we are",
          body: "APOC Labs builds AI hardware and systems, including the APOC C1 agent computer and research into a molecular AI chip. In these terms, \"APOC\", \"we\" and \"us\" mean APOC Labs, and \"you\" means anyone using this website.",
        },
        {
          title: "Using this website",
          body: "You can browse this site, read about our products and contact us freely. Please do not misuse it: no attempts to break, overload or gain unauthorised access to the site, and no automated scraping that disrupts it.",
        },
        {
          title: "Early access",
          body: "Joining early access only means you would like to hear from us about APOC C1. It is not an order, a reservation or a payment, and it does not commit either of us to anything. You can ask to be removed at any time.",
        },
        {
          title: "Products and research",
          body: "APOC C1 is offered through early access, and specifications, configurations and availability may change before release. The molecular chip is a research project. Anything we describe about it reflects ongoing work, not a product you can buy. Any future purchase will come with its own written terms.",
        },
        {
          title: "Our content",
          body: "The text, design, logos and images on this site belong to APOC Labs. You are welcome to link to us and share our pages, but please do not copy or reuse our branding or content as your own without permission.",
        },
        {
          title: "No guarantees",
          body: "We work to keep the information here accurate and the site available, but it is provided as is. To the extent the law allows, APOC Labs is not liable for losses arising from your use of this website or from relying on information that later changes.",
        },
        {
          title: "Changes to these terms",
          body: "We may update these terms as APOC grows. When we do, we will change the effective date at the top of this page. Continuing to use the site after an update means you accept the new version.",
        },
      ]}
    />
  );
}
