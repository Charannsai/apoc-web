"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface FooterProps {
  transparent?: boolean;
}

export function Footer({ transparent = false }: FooterProps) {
  if (transparent) {
    return (
      <footer className="w-full py-5 px-6 sm:px-10 text-xs font-sans relative z-20">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-3 text-zinc-800">
          {/* Left: Brand Logo & Copyright */}
          <div className="flex items-center gap-3">
            <Link href="/" className="inline-flex items-center" aria-label="Apoc Home">
              <Image
                src="/apoclogo.png"
                alt="APOC"
                width={85}
                height={22}
                className="h-4 w-auto object-contain opacity-85 hover:opacity-100 transition-opacity"
              />
            </Link>
            <span className="text-zinc-800 text-xs font-medium">
              © 2026 Apoc Systems. All rights reserved.
            </span>
          </div>

          {/* Right: Comprehensive Sitelinks Navigation */}
          <nav aria-label="Footer Navigation" className="flex flex-wrap items-center gap-5 sm:gap-6 text-xs font-sans">
            <Link
              href="/about"
              className="text-zinc-700 hover:text-black font-medium transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-zinc-700 hover:text-black font-medium transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/security"
              className="text-zinc-700 hover:text-black font-medium transition-colors"
            >
              Security
            </Link>
            <Link
              href="/privacy"
              className="text-zinc-700 hover:text-black font-medium transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-zinc-700 hover:text-black font-medium transition-colors"
            >
              Terms
            </Link>
          </nav>
        </div>
      </footer>
    );
  }

  return (
    <footer className="w-full bg-white py-8 px-6 sm:px-8 text-xs text-zinc-500 font-sans relative">
      {/* Soft upward gradient fade without any lines or borders */}
      <div className="absolute inset-x-0 -top-8 h-8 bg-gradient-to-t from-white to-transparent pointer-events-none" />

      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left: Brand Logo & Copyright */}
        <div className="flex items-center gap-3">
          <Link href="/" className="inline-flex items-center" aria-label="Apoc Home">
            <Image
              src="/apoclogo.png"
              alt="APOC"
              width={85}
              height={22}
              className="h-5 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
            />
          </Link>
          <span className="text-zinc-500 text-xs">
            © 2026 Apoc Systems. All rights reserved.
          </span>
        </div>

        {/* Right: Comprehensive Sitelinks Navigation */}
        <nav aria-label="Footer Navigation" className="flex flex-wrap items-center gap-5 sm:gap-6 text-xs font-sans">
          <Link
            href="/about"
            className="text-zinc-600 hover:text-black transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-zinc-600 hover:text-black transition-colors"
          >
            Contact
          </Link>
          <Link
            href="/security"
            className="text-zinc-600 hover:text-black transition-colors"
          >
            Security
          </Link>
          <Link
            href="/privacy"
            className="text-zinc-600 hover:text-black transition-colors"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="text-zinc-600 hover:text-black transition-colors"
          >
            Terms
          </Link>
        </nav>
      </div>
    </footer>
  );
}
