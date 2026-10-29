"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export const CONTACT_EMAIL = "charan@apoc.in";

interface NavbarProps {
  onOpenProducts?: () => void;
  onOpenAbout?: () => void;
  transparent?: boolean;
}

const itemClass =
  "inline-flex items-center px-3.5 py-1.5 text-zinc-600 hover:text-black font-medium transition-colors cursor-pointer rounded-full hover:bg-black/5";

export function Navbar({ onOpenProducts, onOpenAbout, transparent = false }: NavbarProps) {
  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all ${
        transparent ? "bg-transparent" : "bg-white/90 backdrop-blur-md"
      }`}
    >
      <div className={`w-full ${transparent ? "px-6 sm:px-12 lg:px-16 xl:px-24" : "mx-auto max-w-7xl px-6 sm:px-8"}`}>
        <div className="flex h-16 sm:h-20 items-center justify-between">
          <Link href="/" className="inline-flex items-center py-1 group" aria-label="APOC Labs Home">
            <Image
              src="/apoclogo.png"
              alt="APOC Labs"
              width={100}
              height={26}
              priority
              className="h-6 w-auto object-contain transition-opacity group-hover:opacity-80"
            />
          </Link>

          <nav className="flex items-center gap-1 sm:gap-1.5 p-1 rounded-full bg-white/75 backdrop-blur-md border border-black/10 shadow-xs text-xs font-sans">
            {/* Real links so crawlers can follow them; on the landing page they open the panels instead. */}
            <Link
              href="/products"
              onClick={onOpenProducts ? (e) => { e.preventDefault(); onOpenProducts(); } : undefined}
              className={itemClass}
            >
              Products
            </Link>
            <Link
              href="/about"
              onClick={onOpenAbout ? (e) => { e.preventDefault(); onOpenAbout(); } : undefined}
              className={itemClass}
            >
              About
            </Link>
            <a href={`mailto:${CONTACT_EMAIL}`} className={itemClass}>
              Contact
            </a>
          </nav>
        </div>
      </div>
      {!transparent && (
        <div className="h-4 w-full bg-gradient-to-b from-white/90 to-transparent pointer-events-none -mb-4" />
      )}
    </header>
  );
}
