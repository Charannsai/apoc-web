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
  title: "Apoc — Agent Pocket | The Hardware & OS Control Layer for AI",
  description:
    "An intelligent local-first runtime for autonomous, tool-using software agents. Moving computing from pre-scripted automation to adaptive delegation.",
  keywords: [
    "APOC",
    "Agent Pocket",
    "AI Agent Runtime",
    "Local AI Platform",
    "Agent Operating System",
    "Monochrome UI",
    "Autonomous Execution",
    "MCP Runtime",
  ],
  authors: [{ name: "APOC Systems" }],
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
      className={`${inter.variable} ${jetbrainsMono.variable} dark h-full bg-[#050506] text-zinc-100 antialiased selection:bg-white selection:text-black`}
    >
      <body className="min-h-screen bg-[#050506] text-zinc-100 flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
