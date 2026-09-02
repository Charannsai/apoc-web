"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle light/dark theme"
      title={mounted && theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
      className="flex h-8 w-8 items-center justify-center rounded-md border border-black/10 dark:border-white/15 bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 transition-all hover:border-black/30 dark:hover:border-white/40 hover:text-black dark:hover:text-white active:scale-95"
    >
      {mounted && theme === "light" ? (
        <Moon className="h-4 w-4 transition-transform hover:-rotate-12" />
      ) : (
        <Sun className="h-4 w-4 transition-transform hover:rotate-45" />
      )}
    </button>
  );
}
