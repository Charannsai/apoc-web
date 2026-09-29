"use client";

import React, { useState, forwardRef, useImperativeHandle, useRef } from "react";
import { ArrowRight, Check, ArrowUpRight } from "lucide-react";
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
      colors: ["#000000", "#71717a", "#d4d4d8", "#f4f4f5"],
    });
  };

  return (
    <div className="relative flex flex-col items-start text-left max-w-xl w-full">
      {/* Main Headline - Ultra clean, sharp high contrast */}
      <h1 className="text-3xl sm:text-4xl md:text-[46px] font-semibold tracking-[-0.03em] text-zinc-950 leading-[1.12] font-sans">
        Adaptable AI systems. <br />
        <span className="text-zinc-500 font-normal">
          Built for real-world execution.
        </span>
      </h1>

      {/* Narrative - Refined typography */}
      <p className="mt-4 text-sm sm:text-base md:text-[16px] text-zinc-600 font-normal leading-relaxed font-sans max-w-lg">
        Bridging advanced AI research to practical reality. We combine applied intelligence, automated workflows, and dedicated agent compute for enterprise environments.
      </p>

      {/* In-Place Early Access Form */}
      <div className="mt-6 flex items-center w-full max-w-md">
        <div className="relative w-full h-[48px] rounded-full border border-black/15 bg-white shadow-sm hover:border-black/30 backdrop-blur-md transition-all overflow-hidden">
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
                  placeholder="Enter your work email..."
                  className="w-full h-full bg-transparent pl-5 pr-36 sm:pr-40 text-xs sm:text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 rounded-full bg-black px-4 text-xs font-medium text-white transition-all hover:bg-zinc-800 active:scale-95 flex items-center gap-1 font-sans cursor-pointer whitespace-nowrap shadow-sm"
                >
                  <span>Join Early Access</span>
                  <ArrowRight className="h-3 w-3" />
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success-message"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="w-full h-full flex items-center justify-center gap-2.5 px-5 text-xs sm:text-sm text-zinc-900 font-medium select-none"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black text-white shrink-0">
                  <Check className="h-3 w-3 stroke-[2.5]" />
                </span>
                <span className="truncate">
                  Done. You are registered for APOC early access.
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Explore Link */}
      <div className="mt-4 flex items-center">
        <button
          onClick={onOpenSpecModal}
          className="group text-xs sm:text-sm font-sans font-medium text-zinc-700 hover:text-black transition-colors flex items-center gap-1.5 cursor-pointer underline underline-offset-4 decoration-zinc-300 hover:decoration-black"
        >
          <span>Learn more about APOC C1</span>
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </div>
  );
});
