"use client";

import React, { useState, useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero, HeroHandle } from "@/components/Hero";
import { PhilosophyModal } from "@/components/PhilosophyModal";
import { SystemSpecModal } from "@/components/SystemSpecModal";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [isPhilosophyOpen, setIsPhilosophyOpen] = useState(false);
  const [isSpecModalOpen, setIsSpecModalOpen] = useState(false);
  const heroRef = useRef<HeroHandle>(null);

  const handleFocusWaitlist = () => {
    heroRef.current?.focusInput();
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-between bg-white text-zinc-900 overflow-x-hidden selection:bg-black selection:text-white font-sans">
      {/* Background Soft Lighting & Minimal Grid */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-grid-pattern opacity-40" />

      {/* Header Navigation with soft bottom fade and zero lines */}
      <Navbar
        onOpenPhilosophy={() => setIsPhilosophyOpen(true)}
        onFocusWaitlist={handleFocusWaitlist}
      />

      {/* Main Single-Section Canvas (Centered in Middle) */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center max-w-4xl w-full mx-auto px-4 sm:px-6 my-auto">
        <Hero
          ref={heroRef}
          onOpenSpecModal={() => setIsSpecModalOpen(true)}
        />
      </main>

      {/* Clean Legal Footer with soft top fade and zero lines */}
      <div className="relative z-10">
        <Footer />
      </div>

      {/* Modals */}
      <PhilosophyModal
        isOpen={isPhilosophyOpen}
        onClose={() => setIsPhilosophyOpen(false)}
      />

      <SystemSpecModal
        isOpen={isSpecModalOpen}
        onClose={() => setIsSpecModalOpen(false)}
      />
    </div>
  );
}
