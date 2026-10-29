"use client";

import React, { useState, useRef, useCallback } from "react";
import { motion, MotionConfig } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Panel } from "@/components/sections/Panel";
import { ProductsContent } from "@/components/sections/ProductsContent";
import { AboutContent } from "@/components/sections/AboutContent";
import { AnimatedBackground } from "@/components/landing/AnimatedBackground";
import { AnimatedHero, HeroHandle } from "@/components/landing/AnimatedHero";
import { IntroReveal } from "@/components/landing/IntroReveal";
import { ClickEffects } from "@/components/landing/ClickEffects";
import { SITE, ORG_ID, WEBSITE_ID, C1, CHIP, jsonLdScript } from "@/lib/site";

const HOME_LD = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE.url}/#webpage`,
  url: SITE.url,
  name: "APOC Labs: APOC C1 Agent Computer and Molecular AI Chip",
  description: SITE.description,
  isPartOf: { "@id": WEBSITE_ID },
  about: { "@id": ORG_ID },
  mentions: [
    { "@type": "Product", name: C1.name, url: `${SITE.url}/products#apoc-c1` },
    { "@type": "ResearchProject", name: CHIP.name, url: `${SITE.url}/products#molecular-chip` },
  ],
};

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Home() {
  const [panel, setPanel] = useState<"products" | "about" | null>(null);
  const closePanel = useCallback(() => setPanel(null), []);
  const [revealed, setRevealed] = useState(false);
  const heroRef = useRef<HeroHandle>(null);

  return (
    <MotionConfig reducedMotion="user">
      {/* Single screen: the page never scrolls */}
      <div
        suppressHydrationWarning
        className="relative h-[100svh] overflow-hidden flex flex-col text-zinc-900 selection:bg-black selection:text-white font-sans"
      >
        <IntroReveal onReveal={() => setRevealed(true)} />
        <AnimatedBackground ready={revealed} />
        <ClickEffects />
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(HOME_LD)} />

        <motion.div
          className="relative z-40"
          initial={{ opacity: 0, y: -16 }}
          animate={revealed ? { opacity: 1, y: 0 } : { opacity: 0, y: -16 }}
          transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
        >
          <Navbar
            transparent
            onOpenProducts={() => setPanel("products")}
            onOpenAbout={() => setPanel("about")}
          />
        </motion.div>

        <main className="relative z-10 flex-1 min-h-0 flex flex-col justify-center items-start w-full px-6 sm:px-12 lg:px-16 xl:px-24 py-4">
          <AnimatedHero ref={heroRef} ready={revealed} onOpenSpecModal={() => setPanel("products")} />
        </main>

        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 12 }}
          animate={revealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.8, delay: 1.2, ease: EASE }}
        >
          <Footer transparent />
        </motion.div>

        <Panel open={panel === "products"} onClose={closePanel} label="Products">
          <ProductsContent />
        </Panel>
        <Panel open={panel === "about"} onClose={closePanel} label="About">
          <AboutContent />
        </Panel>
      </div>
    </MotionConfig>
  );
}
