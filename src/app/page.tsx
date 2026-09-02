"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { PhilosophyModal } from "@/components/PhilosophyModal";
import { SystemSpecModal } from "@/components/SystemSpecModal";
import { WaitlistModal } from "@/components/WaitlistModal";
import { TelemetryBar } from "@/components/TelemetryBar";

export default function Home() {
  const [isPhilosophyOpen, setIsPhilosophyOpen] = useState(false);
  const [isSpecModalOpen, setIsSpecModalOpen] = useState(false);
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [initialEmail, setInitialEmail] = useState("");

  const handleOpenWaitlist = (email?: string) => {
    if (email) setInitialEmail(email);
    setIsWaitlistOpen(true);
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-between bg-white dark:bg-[#050506] text-zinc-900 dark:text-zinc-100 overflow-x-hidden selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black font-sans transition-colors duration-200">
      {/* Background Soft Lighting & Minimal Grid */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-grid-pattern opacity-30" />
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_800px_at_50%_-100px,rgba(0,0,0,0.03),transparent)] dark:bg-[radial-gradient(circle_800px_at_50%_-100px,rgba(255,255,255,0.06),transparent)]" />

      {/* Header Navigation */}
      <Navbar
        onOpenPhilosophy={() => setIsPhilosophyOpen(true)}
        onOpenWaitlist={() => handleOpenWaitlist()}
      />

      {/* Main Single-Section Canvas */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center max-w-5xl w-full mx-auto px-4 sm:px-6 py-2">
        <Hero
          onOpenWaitlist={handleOpenWaitlist}
          onOpenSpecModal={() => setIsSpecModalOpen(true)}
        />
      </main>

      {/* Calm Footer */}
      <div className="relative z-10">
        <TelemetryBar
          onOpenPhilosophy={() => setIsPhilosophyOpen(true)}
          onOpenWaitlist={() => handleOpenWaitlist()}
        />
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

      <WaitlistModal
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
        initialEmail={initialEmail}
      />
    </div>
  );
}
