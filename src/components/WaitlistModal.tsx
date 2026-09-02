"use client";

import React, { useState, useEffect } from "react";
import { X, Check, ArrowRight } from "lucide-react";
import confetti from "canvas-confetti";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialEmail?: string;
}

export function WaitlistModal({
  isOpen,
  onClose,
  initialEmail = "",
}: WaitlistModalProps) {
  const [email, setEmail] = useState(initialEmail);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [passCode, setPassCode] = useState("POCKET-#0482");

  useEffect(() => {
    if (initialEmail) {
      setEmail(initialEmail);
      setIsSubmitted(true);
      triggerConfetti();
    }
  }, [initialEmail]);

  const triggerConfetti = () => {
    confetti({
      particleCount: 35,
      spread: 60,
      origin: { y: 0.6 },
      colors: ["#ffffff", "#e4e4e7", "#a1a1aa", "#000000"],
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    const randomNum = Math.floor(100 + Math.random() * 900);
    setPassCode(`POCKET-#${randomNum}`);
    setIsSubmitted(true);
    triggerConfetti();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 dark:bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-md rounded-2xl border border-black/10 dark:border-white/20 bg-white dark:bg-zinc-950 p-6 sm:p-8 shadow-2xl text-zinc-700 dark:text-zinc-300 transition-colors">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 rounded-full border border-black/10 dark:border-white/10 bg-zinc-100 dark:bg-zinc-900 p-2 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
        >
          <X className="h-4 w-4" />
        </button>

        {!isSubmitted ? (
          <div className="space-y-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-zinc-500 font-mono">
                PRE-ORDER WAITLIST
              </span>
              <h2 className="text-2xl font-normal tracking-tight text-zinc-950 dark:text-white font-sans mt-1">
                Join the Apoc Waitlist
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans">
                Reserve your priority spot for the physical hardware and loaded Agent OS release.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs text-zinc-600 dark:text-zinc-400 block mb-1 font-mono">
                  YOUR EMAIL
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@domain.com"
                  className="w-full rounded-xl border border-black/15 dark:border-white/15 bg-zinc-50 dark:bg-black px-4 py-2.5 text-sm text-zinc-900 dark:text-white placeholder-zinc-400 dark:placeholder-zinc-600 focus:border-black dark:focus:border-white focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-black text-white dark:bg-white dark:text-black py-2.5 text-xs font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all active:scale-95 flex items-center justify-center gap-2 font-sans"
              >
                <span>Join Pre-Order Waitlist</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </form>
          </div>
        ) : (
          <div className="space-y-6 text-center">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black mx-auto">
              <Check className="h-5 w-5" />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-medium text-zinc-950 dark:text-white font-sans">
                You are on the waitlist
              </h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans">
                We have reserved priority spot <strong className="text-zinc-950 dark:text-white font-mono">{passCode}</strong> for{" "}
                <span className="text-zinc-900 dark:text-zinc-200">{email}</span>. You will be notified when pre-orders open.
              </p>
            </div>

            <button
              onClick={onClose}
              className="w-full rounded-full bg-black text-white dark:bg-white dark:text-black py-2 text-xs font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
            >
              Back to Home
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
