"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  onOpenWaitlist: (email?: string) => void;
  onOpenPhilosophy: () => void;
}

export function Hero({ onOpenWaitlist, onOpenPhilosophy }: HeroProps) {
  const [emailInput, setEmailInput] = useState("");

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      onOpenWaitlist(emailInput.trim());
      setEmailInput("");
    } else {
      onOpenWaitlist();
    }
  };

  return (
    <div className="relative flex flex-col items-center text-center pt-16 pb-12 px-4 max-w-3xl mx-auto">
      {/* Main Headline */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-zinc-950 dark:text-white leading-[1.08] font-sans">
        Physical AI hardware. <br />
        <span className="text-zinc-500 dark:text-zinc-400 font-light italic">
          Loaded with Agent OS.
        </span>
      </h1>

      {/* Short & Brief Narrative */}
      <p className="mt-6 max-w-lg text-base sm:text-lg text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed font-sans">
        Dedicated local compute coupled with an autonomous agent runtime. Private, sovereign, and built for real execution.
      </p>

      {/* Clean Pre-Order Waitlist Form */}
      <div className="mt-10 flex items-center justify-center w-full max-w-md">
        <form onSubmit={handleEmailSubmit} className="relative flex w-full">
          <input
            type="email"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
            placeholder="Enter your email..."
            className="w-full rounded-full border border-black/15 dark:border-white/15 bg-zinc-50 dark:bg-zinc-900/90 px-5 py-3 text-xs sm:text-sm text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 transition-all focus:border-black dark:focus:border-white focus:bg-white dark:focus:bg-black focus:outline-none"
          />
          <button
            type="submit"
            className="absolute right-1.5 top-1.5 bottom-1.5 rounded-full bg-black dark:bg-white px-5 text-xs font-medium text-white dark:text-black transition-all hover:bg-zinc-800 dark:hover:bg-zinc-200 active:scale-95 flex items-center gap-1.5 font-sans"
          >
            <span>Join Pre-Order Waitlist</span>
            <ArrowRight className="h-3 w-3" />
          </button>
        </form>
      </div>
    </div>
  );
}
