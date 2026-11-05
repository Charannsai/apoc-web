// Single source of truth for brand facts used in metadata, structured data,
// the FAQ page and llms.txt. Keep every claim here accurate and current.

export const SITE = {
  url: "https://apoc.in",
  name: "APOC Labs",
  shortName: "APOC",
  alternateNames: ["APOC", "Apoc Labs", "APOC AI", "apoc.in"],
  email: "charan@apoc.in",
  tagline: "Adaptable AI systems. Built for real-world execution.",
  description:
    "APOC Labs builds AI hardware and systems: APOC C1, an agent computer that runs AI agents on your own infrastructure, and the APOC Molecular Chip, research into compute-in-memory for energy-efficient local AI.",
  logo: "https://apoc.in/apoclogo.png",
  // Add official profiles here as they go live (LinkedIn, X, GitHub, Crunchbase).
  // These "sameAs" links are one of the strongest signals for brand searches.
  sameAs: ["https://x.com/apoc_in"] as string[],
} as const;

export const C1 = {
  name: "APOC C1",
  fullName: "APOC C1 Agent Computer",
  description:
    "APOC C1 is an agent computer from APOC Labs: a dedicated machine that combines local AI compute, an agent operating system and secure gateways so AI agents can run around the clock inside a company's own environment. It comes in three configurations: Edge, Core and Pro.",
  tiers: [
    { name: "Edge", cpu: "8-core AI processor", memory: "32GB RAM", storage: "512GB SSD", gpu: "Integrated graphics", bestFor: "edge sites, air-gapped environments and on-prem infrastructure" },
    { name: "Core", cpu: "12-core AI processor", memory: "64GB RAM", storage: "1TB SSD", gpu: "Performance graphics", bestFor: "internal automation, knowledge work and departmental deployments" },
    { name: "Pro", cpu: "16-core AI processor", memory: "128GB RAM", storage: "2TB SSD", gpu: "Workstation graphics", bestFor: "multi-agent systems, high-throughput pipelines and heavy data work" },
  ],
  status: "Early access",
} as const;

export const CHIP = {
  name: "APOC Molecular Chip",
  description:
    "The APOC Molecular Chip is a research project at APOC Labs exploring molecular compute-in-memory for AI. Model weights are stored in molecular memory cells and the calculations happen inside them, so data does not have to move between memory and processor. The goal is a plug-in accelerator that runs large language models locally at a fraction of today's energy. It is at the research stage: the design is modelled and simulated, not yet fabricated.",
  status: "In research",
} as const;

export const FAQ: { q: string; a: string }[] = [
  {
    q: "What is APOC Labs?",
    a: "APOC Labs is an AI hardware and systems company. It builds APOC C1, an agent computer for running AI agents on a company's own infrastructure, and is researching the APOC Molecular Chip, a compute-in-memory chip for energy-efficient local AI. Its website is apoc.in.",
  },
  {
    q: "What does APOC stand for and how is it written?",
    a: "Two words hide inside the name: Agent Pocket. It is less an abbreviation than a destination. The intelligence that once needed a data centre now sits in a box on your desk, and we will not stop shrinking it until an agent of your own travels with you, in your pocket. The name is always written in capitals: APOC Labs, APOC C1 and the APOC Molecular Chip. The official website is apoc.in.",
  },
  {
    q: "What is APOC C1?",
    a: C1.description,
  },
  {
    q: "What are the APOC C1 configurations?",
    a: "APOC C1 comes in three configurations. Edge uses an 8-core AI processor with 32GB of memory, for edge sites and air-gapped environments. Core uses a 12-core AI processor with 64GB, for everyday automation and knowledge work. Pro uses a 16-core AI processor with 128GB, for multi-agent systems and heavy data work.",
  },
  {
    q: "What software runs on APOC C1?",
    a: "Every APOC C1 runs the APOC agent platform: model routing that picks the right model for each task, a sandboxed agent runtime, an agent gateway that connects agents to your tools, APIs and files, and on-device governance so an agent's capability never equals unchecked authority.",
  },
  {
    q: "Is APOC C1 available to buy?",
    a: "APOC C1 is currently in early access. You can join early access on apoc.in or email charan@apoc.in to discuss a pilot or a custom configuration.",
  },
  {
    q: "What is the APOC Molecular Chip?",
    a: CHIP.description,
  },
  {
    q: "What is a molecular chip?",
    a: "A molecular chip uses molecules, rather than only conventional silicon transistors, as the active elements that store or process information. In the APOC Molecular Chip, molecular memory cells hold an AI model's weights and perform calculations where the data is stored, an approach called compute-in-memory.",
  },
  {
    q: "Why does compute-in-memory matter for AI?",
    a: "When a language model runs on a normal computer, most of the time and energy goes into moving the model's weights from memory to the processor for every word it generates, not into the arithmetic itself. Compute-in-memory does the calculation where the weights are stored, which removes most of that data movement.",
  },
  {
    q: "Can I buy the APOC Molecular Chip?",
    a: "No. The APOC Molecular Chip is a research project, not a product for sale. APOC Labs shares progress as the research develops.",
  },
  {
    q: "Which industries does APOC Labs work with?",
    a: "APOC Labs focuses on healthcare, finance, IT and robotics, working with partners on proof-of-concept deployments and scaling the ones that work.",
  },
  {
    q: "How do I contact APOC Labs?",
    a: "Email charan@apoc.in for partnerships, pilots, APOC C1 early access or research conversations.",
  },
];

export const ORG_ID = `${SITE.url}/#organization`;
export const WEBSITE_ID = `${SITE.url}/#website`;

/** Renders a JSON-LD script tag. */
export function jsonLdScript(data: unknown) {
  return { __html: JSON.stringify(data).replace(/</g, "\\u003c") };
}
