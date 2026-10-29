import { SITE, C1, CHIP, FAQ } from "@/lib/site";

// Full plain-text reference for AI answer engines (GEO). Generated from
// src/lib/site.ts so it always matches what the website says.
export const dynamic = "force-static";

export function GET() {
  const tiers = C1.tiers
    .map(
      (t) =>
        `- ${C1.name} ${t.name}: ${t.cpu} processor, ${t.memory} memory, ${t.storage} storage, ${t.gpu} graphics. Best for ${t.bestFor}.`
    )
    .join("\n");

  const faq = FAQ.map((f) => `### ${f.q}\n${f.a}`).join("\n\n");

  const body = `# APOC Labs: full reference

> ${SITE.description}

Official website: ${SITE.url}
Contact: ${SITE.email}
Also known as: ${SITE.alternateNames.join(", ")}
Tagline: ${SITE.tagline}

## Company

APOC Labs builds the hardware and systems that let AI do real work, close to where the work happens. AI is moving from answering questions to doing work, and businesses need AI that runs on their own infrastructure, fits their workflows, keeps their data private and stays up all day. APOC Labs works from the computer on the desk down to the chip inside it.

Focus industries: mobility and fleet, manufacturing and robotics, enterprise operations.

Roadmap:
- Now: APOC C1 agent computers, early access open.
- Next: industry pilots, proof-of-concept deployments with partners.
- Later: the APOC Molecular Chip, research toward a chip that runs large AI models locally using a fraction of today's energy.

## ${C1.fullName} (${C1.status})

${C1.description}

Configurations:
${tiers}

Every APOC C1 runs:
- Model routing: picks the right model for each task, budget and context.
- Agent runtime: sandboxed execution so workflows stay stable and verifiable.
- Agent gateway: one interface to your tools, APIs, files and services.
- Governance: policy enforced on the device; an agent's capability is not the same as authority.

Custom configurations are available on request.

## ${CHIP.name} (${CHIP.status})

${CHIP.description}

Key points:
- Weights stay put: instead of moving a model's weights out of memory for every generated word, the chip computes where the weights are stored.
- Built for local AI: the goal is a plug-in accelerator that runs large language models on your own machine at low power, with the tools people already use.
- Status: research. Not a product for sale, and not yet fabricated.

## Frequently asked questions

${faq}

## Pages

- ${SITE.url}: home and early access
- ${SITE.url}/products: APOC C1 and the APOC Molecular Chip
- ${SITE.url}/about: about APOC Labs
- ${SITE.url}/faq: frequently asked questions
- ${SITE.url}/privacy: privacy policy
- ${SITE.url}/terms: terms of service
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
