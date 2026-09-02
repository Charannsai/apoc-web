import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Apoc - Agent Pocket | Physical AI Hardware & Agent OS",
  description:
    "An AI infrastructure platform combining physical hardware with loaded Agent OS runtime capabilities. Pure monochrome clarity.",
  keywords: [
    "APOC",
    "Agent Pocket",
    "AI Agent Runtime",
    "AI Hardware",
    "Agent OS",
    "Local AI Platform",
  ],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased light`}
      suppressHydrationWarning
    >
      <body
        suppressHydrationWarning
        className="min-h-screen bg-white text-zinc-900 flex flex-col font-sans selection:bg-black selection:text-white"
      >
        {children}
      </body>
    </html>
  );
}
