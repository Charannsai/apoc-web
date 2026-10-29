"use client";

import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface Pixel {
  dx: number; // horizontal travel
  up: number; // peak height of the arc
  fall: number; // where it lands below the click
  size: number;
  rot: number;
  shade: string;
  dur: number;
}

interface Burst {
  id: number;
  x: number;
  y: number;
  pixels: Pixel[];
}

const SHADES = ["#09090b", "#27272a", "#3f3f46", "#71717a", "#a1a1aa"];

function makePixels(): Pixel[] {
  const count = 12;
  return Array.from({ length: count }, (_, i) => {
    // Spread across an upward fan, with a little randomness.
    const angle = (-160 + (140 / (count - 1)) * i + (Math.random() * 16 - 8)) * (Math.PI / 180);
    const speed = 26 + Math.random() * 34;
    return {
      dx: Math.cos(angle) * speed * 1.3,
      up: Math.sin(angle) * speed, // negative = upward
      fall: 40 + Math.random() * 50,
      size: [3, 4, 4, 5, 6][Math.floor(Math.random() * 5)],
      rot: (Math.random() * 2 - 1) * 180,
      // One in twelve picks up the brand yellow.
      shade: i === 5 ? "#f5c216" : SHADES[Math.floor(Math.random() * SHADES.length)],
      dur: 0.75 + Math.random() * 0.35,
    };
  });
}

/**
 * Click feedback: a handful of square pixels (echoing the pixel hand in the
 * artwork) burst up from the click point, arc over, and fall away under gravity.
 */
export function ClickEffects() {
  const reduce = useReducedMotion();
  const [bursts, setBursts] = useState<Burst[]>([]);

  useEffect(() => {
    if (reduce) return;
    let id = 0;
    const onDown = (e: PointerEvent) => {
      if (e.button !== 0) return;
      const burst = { id: ++id, x: e.clientX, y: e.clientY, pixels: makePixels() };
      setBursts((b) => [...b.slice(-6), burst]);
      setTimeout(() => setBursts((b) => b.filter((x) => x.id !== burst.id)), 1200);
    };
    window.addEventListener("pointerdown", onDown);
    return () => window.removeEventListener("pointerdown", onDown);
  }, [reduce]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[90]" aria-hidden>
      {bursts.map((b) => (
        <div key={b.id} className="absolute" style={{ left: b.x, top: b.y }}>
          {b.pixels.map((p, i) => (
            <motion.span
              key={i}
              className="absolute block"
              style={{
                width: p.size,
                height: p.size,
                marginLeft: -p.size / 2,
                marginTop: -p.size / 2,
                backgroundColor: p.shade,
              }}
              initial={{ x: 0, y: 0, rotate: 0, opacity: 1, scale: 1 }}
              animate={{
                x: [0, p.dx * 0.6, p.dx],
                y: [0, p.up, p.fall],
                rotate: p.rot,
                opacity: [1, 1, 0],
                scale: [1, 1, 0.6],
              }}
              transition={{
                duration: p.dur,
                times: [0, 0.35, 1],
                ease: ["easeOut", "easeIn"],
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
