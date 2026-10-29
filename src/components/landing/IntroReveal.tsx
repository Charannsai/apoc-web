"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.76, 0, 0.24, 1] as const;

// Timeline (seconds)
const T = {
  logo: 0.15, // logo fades in
  line: 1.0, // hairline draws through the middle
  split: 1.65, // the two halves part
  done: 2.75,
};

interface IntroRevealProps {
  /** Fired as the halves start to part, so the page can animate in underneath. */
  onReveal: () => void;
}

/**
 * Opening: the APOC logo sits in the centre, a hairline cuts straight through it,
 * and the screen splits into two halves that slide apart to reveal the page.
 */
export function IntroReveal({ onReveal }: IntroRevealProps) {
  const reduce = useReducedMotion();
  const [phase, setPhase] = useState<"intro" | "split" | "done">("intro");
  const onRevealRef = useRef(onReveal);
  useEffect(() => {
    onRevealRef.current = onReveal;
  }, [onReveal]);

  useEffect(() => {
    if (reduce) {
      const t = setTimeout(() => {
        onRevealRef.current();
        setPhase("done");
      }, 0);
      return () => clearTimeout(t);
    }
    const splitTimer = setTimeout(() => {
      setPhase("split");
      onRevealRef.current();
    }, T.split * 1000);
    const doneTimer = setTimeout(() => setPhase("done"), T.done * 1000);
    return () => {
      clearTimeout(splitTimer);
      clearTimeout(doneTimer);
    };
  }, [reduce]);

  if (phase === "done") return null;
  const split = phase === "split";

  // Each half draws the same centred logo and clips to its own side,
  // so they read as one screen until they part.
  const half = (side: "top" | "bottom") => (
    <motion.div
      className="absolute inset-0 bg-[#1d1d1d] will-change-transform"
      style={{ clipPath: side === "top" ? "inset(0 0 50% 0)" : "inset(50% 0 0 0)" }}
      initial={{ y: "0%" }}
      animate={{ y: split ? (side === "top" ? "-50%" : "50%") : "0%" }}
      transition={{ duration: 1.1, ease: EASE }}
    >
      <motion.div
        className="absolute left-1/2 top-1/2 w-[min(56vw,300px)] aspect-[2172/724] -translate-x-1/2 -translate-y-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: T.logo, ease: "easeOut" }}
      >
        {/* White wordmark; the brand's yellow dot is kept on top */}
        <Image src="/apoclogo.png" alt="" fill priority className="object-contain brightness-0 invert" />
        <span
          className="absolute rounded-full bg-[#f5c216]"
          style={{ left: "15.8%", top: "65.5%", width: "5.5%", aspectRatio: "1", transform: "translate(-50%, -50%)" }}
        />
      </motion.div>
    </motion.div>
  );

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none" aria-hidden>
      {half("top")}
      {half("bottom")}

      {/* The cut */}
      <motion.div
        className="absolute inset-x-0 top-1/2 h-px origin-left bg-white/80"
        initial={{ scaleX: 0 }}
        animate={split ? { scaleX: 1, opacity: 0 } : { scaleX: 1 }}
        transition={
          split ? { opacity: { duration: 0.3 } } : { duration: 0.6, delay: T.line, ease: EASE }
        }
      />
    </div>
  );
}
