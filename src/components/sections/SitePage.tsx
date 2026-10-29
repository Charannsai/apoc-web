"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/Footer";

/** Frame for standalone pages (/about, /products, /faq): slim header, content, footer. */
export function SitePage({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#fbf9f5] text-zinc-900 font-sans">
      <header className="sticky top-0 z-40 border-b border-black/[0.07] bg-[#fbf9f5]/90 backdrop-blur-md">
        <div className="flex h-16 items-center justify-between px-6 sm:px-10 lg:px-14">
          <Link href="/" className="flex items-center gap-2 text-xs text-zinc-600 hover:text-black transition-colors">
            <ArrowLeft className="h-3.5 w-3.5" />
            Home
          </Link>
          <nav className="flex items-center gap-5 text-xs text-zinc-600">
            <Link href="/products" className="hover:text-black transition-colors">Products</Link>
            <Link href="/about" className="hover:text-black transition-colors">About</Link>
            <Link href="/faq" className="hover:text-black transition-colors">FAQ</Link>
            <Link href="/" aria-label="APOC Labs home" className="ml-1">
              <Image src="/apoclogo.png" alt="APOC Labs" width={80} height={26} className="h-5 w-auto" />
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <Footer transparent />
    </div>
  );
}
