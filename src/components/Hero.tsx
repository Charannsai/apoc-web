"use client";

import React, { useState, forwardRef, useImperativeHandle, useRef } from "react";
import { ArrowRight, Check, Cpu, Layers, Shield, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

export interface HeroHandle {
  focusInput: () => void;
}

interface HeroProps {
  onOpenSpecModal: () => void;
}

export const Hero = forwardRef<HeroHandle, HeroProps>(function Hero(
  { onOpenSpecModal },
  ref
) {
  const [emailInput, setEmailInput] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    focusInput: () => {
      if (!isSubmitted && inputRef.current) {
        inputRef.current.focus();
      }
    },
  }));

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput.trim()) return;

    setIsSubmitted(true);
    setEmailInput("");

    confetti({
      particleCount: 25,
      spread: 45,
      origin: { y: 0.55 },
      colors: ["#ffffff", "#e4e4e7", "#a1a1aa", "#000000"],
    });
  };

  return (
    <div className="relative flex flex-col items-center text-center max-w-4xl mx-auto w-full px-4 py-4 sm:py-6">
      {/* Main Headline */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-zinc-950 dark:text-white leading-[1.1] font-sans">
        Physical AI hardware. <br />
        <span className="text-zinc-500 dark:text-zinc-400 font-light italic">
          Loaded with Agent OS.
        </span>
      </h1>

      {/* Short & Concise Narrative */}
      <p className="mt-4 max-w-xl text-sm sm:text-base text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed font-sans">
        Dedicated local compute coupled with an autonomous agent runtime. Private, sovereign, and built for real execution.
      </p>

      {/* In-Place Pre-Order Waitlist Form / Constant Fixed Dimension Container */}
      <div className="mt-6 sm:mt-8 flex items-center justify-center w-full">
        <div className="relative w-full max-w-md h-[48px] rounded-full border border-black/15 dark:border-white/15 bg-zinc-50 dark:bg-zinc-900/90 shadow-sm overflow-hidden transition-colors">
          <AnimatePresence mode="wait" initial={false}>
            {!isSubmitted ? (
              <motion.form
                key="input-form"
                onSubmit={handleEmailSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="w-full h-full flex items-center relative"
              >
                <input
                  ref={inputRef}
                  type="email"
                  required
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Enter your email..."
                  className="w-full h-full bg-transparent pl-5 pr-44 text-xs sm:text-sm text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 rounded-full bg-black dark:bg-white px-4 text-xs font-medium text-white dark:text-black transition-all hover:bg-zinc-800 dark:hover:bg-zinc-200 active:scale-95 flex items-center gap-1 font-sans cursor-pointer whitespace-nowrap"
                >
                  <span>Join Pre-Order Waitlist</span>
                  <ArrowRight className="h-3 w-3" />
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success-message"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="w-full h-full flex items-center justify-center gap-2.5 px-5 text-xs sm:text-sm text-zinc-900 dark:text-white font-medium select-none"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black dark:bg-white text-white dark:text-black shrink-0">
                  <Check className="h-3 w-3 stroke-[2.5]" />
                </span>
                <span className="truncate">
                  Done. You are now on the pre-order waitlist.
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Structured 3-Pillar Deck */}
      <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 w-full text-left">
        {/* Card 1 */}
        <div className="rounded-xl border border-black/10 dark:border-white/10 bg-zinc-50/70 dark:bg-zinc-900/40 p-4 sm:p-5 backdrop-blur-sm transition-all hover:border-black/20 dark:hover:border-white/20">
          <div className="flex items-center justify-between mb-2">
            <Cpu className="h-4 w-4 text-zinc-900 dark:text-white" />
            <span className="text-[10px] font-mono text-zinc-500 uppercase">HARDWARE LAYER</span>
          </div>
          <h3 className="text-sm font-medium text-zinc-900 dark:text-white font-sans">
            Dedicated Local Compute
          </h3>
          <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans">
            Physical execution boundary on your desk with dedicated neural compute and complete air-gapped data privacy.
          </p>
        </div>

        {/* Card 2 */}
        <div className="rounded-xl border border-black/10 dark:border-white/10 bg-zinc-50/70 dark:bg-zinc-900/40 p-4 sm:p-5 backdrop-blur-sm transition-all hover:border-black/20 dark:hover:border-white/20">
          <div className="flex items-center justify-between mb-2">
            <Layers className="h-4 w-4 text-zinc-900 dark:text-white" />
            <span className="text-[10px] font-mono text-zinc-500 uppercase">AGENT OS</span>
          </div>
          <h3 className="text-sm font-medium text-zinc-900 dark:text-white font-sans">
            Hardware Adaptability
          </h3>
          <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans">
            Real-time machine introspection and dynamic capability discovery across your files, tools, and local memory.
          </p>
        </div>

        {/* Card 3 */}
        <div className="rounded-xl border border-black/10 dark:border-white/10 bg-zinc-50/70 dark:bg-zinc-900/40 p-4 sm:p-5 backdrop-blur-sm transition-all hover:border-black/20 dark:hover:border-white/20">
          <div className="flex items-center justify-between mb-2">
            <Shield className="h-4 w-4 text-zinc-900 dark:text-white" />
            <span className="text-[10px] font-mono text-zinc-500 uppercase">CONTROL & TRUST</span>
          </div>
          <h3 className="text-sm font-medium text-zinc-900 dark:text-white font-sans">
            Capability != Authority
          </h3>
          <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans">
            Physical permission gates require human sign-off on sensitive operations, paired with observable evidence verification.
          </p>
        </div>
      </div>

      {/* Subtle Spec Trigger */}
      <div className="mt-4 flex items-center justify-center">
        <button
          onClick={onOpenSpecModal}
          className="text-[11px] font-mono text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300 transition-colors flex items-center gap-1 underline underline-offset-4 decoration-zinc-300 dark:decoration-zinc-700 cursor-pointer"
        >
          <span>View Hardware + Agent OS Specification Matrix</span>
          <ArrowUpRight className="h-3 w-3" />
        </button>
      </div>
    </div>
  );
});
