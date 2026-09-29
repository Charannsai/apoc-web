"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface NavbarProps {
  onOpenPhilosophy?: () => void;
  onOpenSpecModal?: () => void;
  onFocusWaitlist?: () => void;
  transparent?: boolean;
}

export function Navbar({
  onOpenPhilosophy,
  onOpenSpecModal,
  transparent = false,
}: NavbarProps) {
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
          <div className="flex items-center">
            <Link
              href="/"
              className="inline-flex items-center py-1 group"
              aria-label="APOC Labs Home"
            >
              <Image
                src="/apoclogo.png"
                alt="APOC Labs"
                width={100}
                height={26}
                priority
                className="h-6 w-auto object-contain transition-opacity group-hover:opacity-80"
              />
            </Link>
          </div>

          {/* Unified Floating Navigation Capsule (No Early Access button) */}
          <div className="flex items-center gap-1 sm:gap-1.5 p-1 rounded-full bg-white/75 backdrop-blur-md border border-black/10 shadow-xs text-xs font-sans">
            {onOpenSpecModal && (
              <button
                onClick={onOpenSpecModal}
                className="inline-flex items-center px-3.5 py-1.5 text-zinc-600 hover:text-black font-medium transition-colors cursor-pointer rounded-full hover:bg-black/5"
              >
                Platform
              </button>
            )}

            <Link
              href="/about"
              className="inline-flex items-center px-3.5 py-1.5 text-zinc-600 hover:text-black font-medium transition-colors rounded-full hover:bg-black/5"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center px-3.5 py-1.5 text-zinc-600 hover:text-black font-medium transition-colors rounded-full hover:bg-black/5"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
      {!transparent && (
        <div className="h-4 w-full bg-gradient-to-b from-white/90 to-transparent pointer-events-none -mb-4" />
      )}
    </header>
  );
}
