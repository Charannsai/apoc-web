"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface NavbarProps {
  onOpenPhilosophy?: () => void;
  onFocusWaitlist?: () => void;
  transparent?: boolean;
}

export function Navbar({ onOpenPhilosophy, onFocusWaitlist, transparent = false }: NavbarProps) {
  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all ${
        transparent
          ? "bg-transparent"
          : "bg-white/90 backdrop-blur-md"
      }`}
    >
      <div className={`w-full ${transparent ? "px-6 sm:px-12 lg:px-16 xl:px-24" : "mx-auto max-w-7xl px-6 sm:px-8"}`}>
        <div className="flex h-16 sm:h-20 items-center justify-between">
          {/* Brand Logo */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center group">
              <Image
                src="/apoclogo.png"
                alt="APOC"
                width={120}
                height={32}
                priority
                className="h-7 w-auto object-contain transition-opacity group-hover:opacity-85"
              />
            </Link>
          </div>

          {/* Right Navigation & Controls (No Theme Toggle) */}
          <div className="flex items-center gap-5 text-xs font-sans">
            {onOpenPhilosophy && (
              <button
                onClick={onOpenPhilosophy}
                className="text-zinc-700 hover:text-black font-medium transition-colors cursor-pointer"
              >
                Philosophy
              </button>
            )}

            {/* Pre-order Waitlist Action */}
            {onFocusWaitlist && (
              <button
                onClick={onFocusWaitlist}
                className="rounded-full border border-black bg-black px-4 py-1.5 font-medium text-white transition-all hover:bg-zinc-800 active:scale-95 cursor-pointer shadow-sm"
              >
                Pre-Order Waitlist
              </button>
            )}
          </div>
        </div>
      </div>
      {!transparent && (
        <div className="h-4 w-full bg-gradient-to-b from-white/90 to-transparent pointer-events-none -mb-4" />
      )}
    </header>
  );
}
