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
    <div className="relative flex flex-col items-center justify-center text-center max-w-3xl mx-auto w-full px-4 py-8 sm:py-12">
      {/* Main Headline */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-zinc-950 leading-[1.1] font-sans">
        Physical AI hardware. <br />
        <span className="text-zinc-500 font-light italic">
          Loaded with Agent OS.
        </span>
      </h1>

      {/* Short & Concise Narrative */}
      <p className="mt-5 max-w-xl text-base sm:text-lg text-zinc-600 font-normal leading-relaxed font-sans">
        Dedicated local compute coupled with an autonomous agent runtime. Private, sovereign, and built for real execution.
      </p>

      {/* In-Place Pre-Order Waitlist Form (Fixed Dimensions) */}
      <div className="mt-8 sm:mt-10 flex items-center justify-center w-full">
        <div className="relative w-full max-w-md h-[48px] rounded-full border border-black/15 bg-zinc-50/90 shadow-sm overflow-hidden transition-colors">
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
                  className="w-full h-full bg-transparent pl-5 pr-44 text-xs sm:text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 rounded-full bg-black px-4 text-xs font-medium text-white transition-all hover:bg-zinc-800 active:scale-95 flex items-center gap-1 font-sans cursor-pointer whitespace-nowrap shadow-sm"
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
                className="w-full h-full flex items-center justify-center gap-2.5 px-5 text-xs sm:text-sm text-zinc-900 font-medium select-none"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black text-white shrink-0">
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

      {/* Know More about APOC in Detail (Directly below the waitlist input) */}
      <div className="mt-6 flex items-center justify-center">
        <button
          onClick={onOpenSpecModal}
          className="group text-xs sm:text-sm font-sans font-medium text-zinc-600 hover:text-black transition-colors flex items-center gap-1.5 cursor-pointer underline underline-offset-4 decoration-zinc-300 hover:decoration-black"
        >
          <span>Know More about APOC in Detail</span>
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </div>
  );
});
