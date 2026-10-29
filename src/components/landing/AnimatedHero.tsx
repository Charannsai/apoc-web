"use client";

import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion, type Variants } from "framer-motion";
import confetti from "canvas-confetti";

export interface HeroHandle {
  focusInput: () => void;
}

interface HeroProps {
  onOpenSpecModal: () => void;
  /** Start the entrance animation (after the intro reveal opens). */
  ready?: boolean;
}

const EASE = [0.22, 1, 0.36, 1] as const;
const ROTATING = ["execution.", "operations.", "deployment.", "scale."];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.25 } },
};

const word: Variants = {
  hidden: { y: "110%", rotate: 4 },
  show: { y: "0%", rotate: 0, transition: { duration: 0.9, ease: EASE } },
};

const fadeUp = (delay: number): Variants => ({
  hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, delay, ease: EASE },
  },
});

function Words({ text, className }: { text: string; className?: string }) {
  return (
    <>
      {text.split(" ").map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom pb-[0.08em] -mb-[0.08em]">
          <motion.span variants={word} className={`inline-block will-change-transform ${className ?? ""}`}>
            {w}
            {" "}
          </motion.span>
        </span>
      ))}
    </>
  );
}

export const AnimatedHero = forwardRef<HeroHandle, HeroProps>(function AnimatedHero(
  { onOpenSpecModal, ready = true },
  ref
) {
  const reduce = useReducedMotion();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    focusInput: () => {
      if (!submitted) inputRef.current?.focus();
    },
  }));

  useEffect(() => {
    if (reduce || !ready) return;
    // Hold the first word until the headline has landed.
    let id: ReturnType<typeof setInterval>;
    const start = setTimeout(() => {
      id = setInterval(() => setWordIndex((i) => (i + 1) % ROTATING.length), 2600);
    }, 1800);
    return () => {
      clearTimeout(start);
      clearInterval(id);
    };
  }, [reduce, ready]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail("");
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { x: 0.25, y: 0.62 },
      colors: ["#000000", "#71717a", "#d4d4d8", "#f5c451"],
    });
  };

  return (
    <motion.div
      initial="hidden"
      animate={ready ? "show" : "hidden"}
      className="relative flex flex-col items-start text-left max-w-2xl w-full"
    >
      {/* Headline */}
      <motion.h1
        variants={container}
        className="text-[34px] leading-[1.08] sm:text-5xl md:text-[54px] lg:text-[58px] font-semibold tracking-[-0.035em] text-zinc-950"
      >
        <span className="sr-only">APOC Labs: </span>
        <span className="block">
          <Words text="Adaptable AI systems." />
        </span>
        <span className="block font-normal text-zinc-500">
          <Words text="Built for real-world" />
        </span>
        <span className="relative block h-[1.12em] overflow-hidden font-normal" aria-live="polite">
          <motion.span variants={word} className="relative block h-full">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.span
              key={ROTATING[wordIndex]}
              initial={{ y: "100%", opacity: 0, filter: "blur(8px)" }}
              animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
              exit={{ y: "-100%", opacity: 0, filter: "blur(8px)" }}
              transition={{ duration: 0.7, ease: EASE }}
              className="absolute left-0 top-0 inline-block text-zinc-500"
            >
              {ROTATING[wordIndex]}
            </motion.span>
          </AnimatePresence>
          </motion.span>
        </span>
      </motion.h1>

      {/* Narrative */}
      <motion.p
        variants={fadeUp(0.75)}
        className="mt-4 sm:mt-5 text-sm sm:text-base text-zinc-600 leading-relaxed max-w-lg"
      >
        Bridging advanced AI research to practical reality. We combine applied intelligence,
        automated workflows, and dedicated agent compute for enterprise environments.
      </motion.p>

      {/* Early access form */}
      <motion.div variants={fadeUp(0.9)} className="mt-6 sm:mt-7 w-full max-w-md">
        <div className="relative">
          <div className={`relative h-[50px] rounded-full border bg-white overflow-hidden transition-colors duration-300 ${focused && !submitted ? "border-black/50" : "border-black/15"}`}>
            <AnimatePresence mode="wait" initial={false}>
              {!submitted ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                  className="relative flex h-full w-full items-center"
                >
                  <label htmlFor="apoc-email" className="sr-only">
                    Work email
                  </label>
                  <input
                    id="apoc-email"
                    ref={inputRef}
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    placeholder="Your work email"
                    className="h-full w-full bg-transparent pl-5 pr-[160px] text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none"
                  />
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.96 }}
                    className="group absolute right-1 top-1 bottom-1 flex items-center gap-1.5 overflow-hidden rounded-full bg-black px-4 text-xs sm:text-[13px] font-medium text-white whitespace-nowrap cursor-pointer"
                  >
                    <span className="relative">Join Early Access</span>
                    <ArrowRight className="relative h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  key="done"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className="flex h-full w-full items-center justify-center gap-2.5 px-5 text-xs sm:text-sm font-medium text-zinc-900"
                  role="status"
                >
                  <motion.span
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15, delay: 0.1 }}
                    className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-black text-white"
                  >
                    <Check className="h-3 w-3 stroke-[2.5]" />
                  </motion.span>
                  <span className="truncate">You&apos;re on the list for APOC early access.</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      {/* Learn more */}
      <motion.div variants={fadeUp(1.05)} className="mt-4">
        <button
          onClick={onOpenSpecModal}
          className="group relative flex items-center gap-1.5 text-sm font-medium text-zinc-700 hover:text-black transition-colors cursor-pointer"
        >
          <span className="relative">
            Learn more about APOC C1
            <span className="absolute -bottom-0.5 left-0 h-px w-full bg-zinc-300" />
            <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-black transition-transform duration-500 ease-out group-hover:scale-x-100" />
          </span>
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </motion.div>

    </motion.div>
  );
});
