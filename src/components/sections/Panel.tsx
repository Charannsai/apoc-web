"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

const EASE = [0.76, 0, 0.24, 1] as const;

interface PanelProps {
  open: boolean;
  onClose: () => void;
  /** Short label shown next to the logo in the panel header. */
  label: string;
  children: React.ReactNode;
}

/**
 * Full-screen sheet that slides up over the landing page. Closes on Escape,
 * the close button, or a click on the backdrop edge.
 */
export function Panel({ open, onClose, label, children }: PanelProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 1 }}
        >
          <motion.div
            className="absolute inset-0 bg-zinc-950/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={onClose}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={label}
            className="absolute inset-x-0 bottom-0 top-3 sm:top-4 sm:inset-x-4 rounded-t-2xl bg-[#fbf9f5] shadow-[0_-20px_60px_-20px_rgba(0,0,0,0.35)] flex flex-col overflow-hidden"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <header className="shrink-0 flex items-center justify-between px-6 sm:px-10 lg:px-14 h-16 border-b border-black/[0.07]">
              <div className="flex items-center gap-3 text-xs text-zinc-500">
                <Image src="/apoclogo.png" alt="APOC" width={72} height={24} className="h-4 w-auto" />
                <span className="h-3 w-px bg-black/15" />
                <span className="font-medium text-zinc-700">{label}</span>
              </div>
              <button
                ref={closeRef}
                onClick={onClose}
                aria-label={`Close ${label}`}
                className="group flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-zinc-600 transition-colors hover:border-black/30 hover:text-black cursor-pointer"
              >
                <X className="h-4 w-4 transition-transform duration-300 group-hover:rotate-90" />
              </button>
            </header>
            <div className="flex-1 overflow-y-auto no-scrollbar">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/** Fades a block up into view once it scrolls into the panel. */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
