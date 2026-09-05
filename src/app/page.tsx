"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
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
    <div
      suppressHydrationWarning
      className="relative min-h-screen lg:h-screen lg:overflow-hidden flex flex-col justify-between text-zinc-900 overflow-x-hidden selection:bg-black selection:text-white font-sans"
    >
      {/* Scenic Background Image (Full Viewport) */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/bg.png"
          alt="APOC Landscape Background"
          fill
          priority
          quality={100}
          className="object-cover object-center pointer-events-none select-none"
        />
      </div>

      {/* Header Navigation (Translucent Glassy) */}
      <Navbar
        transparent
        onOpenPhilosophy={() => setIsPhilosophyOpen(true)}
        onFocusWaitlist={handleFocusWaitlist}
      />

      {/* Main Canvas Docked to Left Corner / Side with Balanced Breathing Room */}
      <main className="relative z-10 flex-1 flex flex-col justify-center items-start w-full px-6 sm:px-12 lg:px-16 xl:px-24 py-8">
        <Hero
          ref={heroRef}
          onOpenSpecModal={() => setIsSpecModalOpen(true)}
        />
      </main>

      {/* Translucent Bottom Footer */}
      <div className="relative z-10">
        <Footer transparent />
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
