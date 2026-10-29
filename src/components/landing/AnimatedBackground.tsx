"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";

export function AnimatedBackground({ ready = true }: { ready?: boolean }) {
  const reduce = useReducedMotion();
  const [finePointer, setFinePointer] = useState(false);

  // Cursor position in px (for spotlight) and normalised -1..1 (for parallax).
  const mx = useMotionValue(-1000);
  const my = useMotionValue(-1000);
  const nx = useMotionValue(0);
  const ny = useMotionValue(0);
  const sx = useSpring(nx, { stiffness: 40, damping: 20 });
  const sy = useSpring(ny, { stiffness: 40, damping: 20 });
  const px = useTransform(sx, (v) => v * -14);
  const py = useTransform(sy, (v) => v * -10);
  const spotX = useSpring(mx, { stiffness: 120, damping: 25 });
  const spotY = useSpring(my, { stiffness: 120, damping: 25 });
  const mask = useMotionTemplate`radial-gradient(circle 220px at ${spotX}px ${spotY}px, black 0%, rgba(0,0,0,0.5) 45%, transparent 100%)`;

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      // Spotlight only for real mouse users; touch taps shouldn't paint it.
      if (e.pointerType !== "mouse") return;
      setFinePointer(true);
      mx.set(e.clientX);
      my.set(e.clientY);
      nx.set((e.clientX / window.innerWidth) * 2 - 1);
      ny.set((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [mx, my, nx, ny]);

  const artClass =
    "object-cover object-[65%_50%] lg:object-center pointer-events-none select-none";

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-[#fbf9f5]" aria-hidden>
      {/* Parallax wrapper */}
      <motion.div className="absolute -inset-8" style={reduce ? undefined : { x: px, y: py }}>
        {/* Slow Ken Burns drift, fading in on load */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.25 }}
          animate={
            reduce
              ? { opacity: 1, scale: 1 }
              : ready
                ? { opacity: 1, scale: [1.25, 1.04, 1.09, 1.04] }
                : { opacity: 0, scale: 1.25 }
          }
          transition={{
            opacity: { duration: 1.2, ease: "easeOut" },
            scale: ready
              ? { duration: 30, times: [0, 0.07, 0.55, 1], repeat: Infinity, ease: "easeInOut" }
              : { duration: 0 },
          }}
        >
          <Image
            src="/bg.webp"
            alt=""
            fill
            priority
            unoptimized
            className={`${artClass} opacity-[0.18] sm:opacity-25`}
          />
          {/* Cursor spotlight: a stronger copy of the art revealed around the pointer */}
          {finePointer && !reduce && (
            <motion.div
              className="absolute inset-0"
              style={{ maskImage: mask, WebkitMaskImage: mask }}
            >
              <Image
                src="/bg.webp"
                alt=""
                fill
                unoptimized
                className={`${artClass} opacity-45`}
              />
            </motion.div>
          )}
        </motion.div>
      </motion.div>

      {/* Readability fade behind the copy (left on desktop, bottom-up on mobile) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#fbf9f5] via-[#fbf9f5]/85 to-transparent lg:via-[#fbf9f5]/60 lg:to-55%" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#fbf9f5] to-transparent" />
    </div>
  );
}
