"use client";

import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full bg-white dark:bg-[#050506] py-8 px-6 sm:px-8 text-xs text-zinc-500 font-sans transition-colors relative">
      {/* Soft upward gradient fade without any lines or borders */}
      <div className="absolute inset-x-0 -top-8 h-8 bg-gradient-to-t from-white dark:from-[#050506] to-transparent pointer-events-none" />

      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left: Copyright */}
        <div className="text-zinc-500 text-xs">
          © 2026 Apoc Systems. All rights reserved.
        </div>

        {/* Right: Real Legal Pages Links */}
        <div className="flex items-center gap-6 text-xs">
          <Link
            href="/terms"
            className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
          >
            Terms
          </Link>
          <Link
            href="/privacy"
            className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
          >
            Privacy
          </Link>
          <Link
            href="/security"
            className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
          >
            Security
          </Link>
        </div>
      </div>
    </footer>
  );
}
