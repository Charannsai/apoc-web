"use client";

import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
      className="flex h-8 w-8 items-center justify-center rounded-md border border-black/10 dark:border-white/15 bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 transition-all hover:border-black/30 dark:hover:border-white/40 hover:text-black dark:hover:text-white"
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4 transition-transform hover:rotate-45" />
      ) : (
        <Moon className="h-4 w-4 transition-transform hover:-rotate-12" />
      )}
    </button>
  );
}
