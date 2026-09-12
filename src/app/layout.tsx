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
  metadataBase: new URL("https://apoc.in"),
  title: {
    default: "APOC C1 - AI-Native Development Environment & Physical Agent OS",
    template: "%s | APOC",
  },
  description:
    "Apoc C1 is an AI-native development environment designed for the agentic era. Bringing developers, AI agents, development tools, and sovereign physical compute into a unified workspace.",
  applicationName: "APOC",
  keywords: [
    "APOC",
    "APOC C1",
    "apoc.in",
    "AI-native development environment",
    "Agent OS",
    "Physical AI Hardware",
    "Local AI Platform",
    "Autonomous Agents",
    "Human-Agent Collaboration",
    "Model Context Protocol",
    "MCP Runtime",
    "Sovereign AI Device",
    "Local Compute for Agents",
    "Developer Environment",
  ],
  authors: [{ name: "APOC Systems", url: "https://apoc.in" }],
  creator: "APOC Systems",
  publisher: "APOC Systems",
  alternates: {
    canonical: "https://apoc.in",
  },
  openGraph: {
    title: "APOC C1 - AI-Native Development Environment & Physical Agent OS",
    description:
      "Apoc C1 brings developers, AI agents, development tools, and project environments into a unified workspace. Dedicated local compute with autonomous Agent OS.",
    url: "https://apoc.in",
    siteName: "APOC - Agent Pocket",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://apoc.in/apoclogo.png",
        width: 1200,
        height: 630,
        alt: "APOC C1 - Physical AI Hardware & Agent OS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "APOC C1 - AI-Native Development Environment & Physical Agent OS",
    description:
      "Apoc C1 brings developers, AI agents, development tools, and project environments into a unified workspace.",
    images: ["https://apoc.in/apoclogo.png"],
    creator: "@apoc_in",
    site: "@apoc_in",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/apoclogo.png",
    shortcut: "/apoclogo.png",
    apple: "/apoclogo.png",
  },
  category: "technology",
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Comprehensive Schema.org Graph for SEO, AEO (Answer Engine Optimization) & GEO (Generative Engine Optimization)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://apoc.in/#organization",
        "name": "APOC Systems",
        "url": "https://apoc.in",
        "logo": {
          "@type": "ImageObject",
          "url": "https://apoc.in/apoclogo.png",
        },
        "description":
          "Creator of APOC C1, an AI-native development environment and physical compute platform for autonomous agent execution.",
        "email": "team@apoc.in",
        "sameAs": ["https://x.com/apoc_in"],
      },
      {
        "@type": "WebSite",
        "@id": "https://apoc.in/#website",
        "url": "https://apoc.in",
        "name": "APOC - Agent Pocket",
        "description":
          "Apoc C1 is an AI-native development environment designed for the agentic era.",
        "publisher": {
          "@id": "https://apoc.in/#organization",
        },
        "inLanguage": "en-US",
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://apoc.in/#software",
        "name": "APOC C1",
        "applicationCategory": "DeveloperApplication, ArtificialIntelligence",
        "operatingSystem": "Agent OS",
        "url": "https://apoc.in",
        "description":
          "Apoc C1 is an AI-native development environment designed for the agentic era. It brings developers, AI agents, development tools, and project environments into a unified workspace. Developers can use C1 to work with AI agents that understand their project, access relevant tools, execute development tasks, and collaborate throughout the software development process.",
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/PreOrder",
          "price": "0",
          "priceCurrency": "USD",
          "url": "https://apoc.in",
        },
        "featureList": [
          "Human and agent collaboration workspace",
          "Unified environment eliminating tool switching",
          "Loaded Agent OS runtime",
          "Model Context Protocol (MCP) tool integration",
          "Hardware-enforced sandboxing and isolation",
          "Capability != Authority permission architecture",
          "Evidence-driven outcome verification",
        ],
      },
      {
        "@type": "Product",
        "@id": "https://apoc.in/#product",
        "name": "APOC C1",
        "image": "https://apoc.in/apoclogo.png",
        "description":
          "A physical local-first AI platform and agentic workflow environment combining dedicated neural compute with loaded Agent OS.",
        "brand": {
          "@type": "Brand",
          "name": "APOC",
        },
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/PreOrder",
          "price": "0",
          "priceCurrency": "USD",
          "url": "https://apoc.in",
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://apoc.in/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is APOC C1?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Apoc C1 is an AI-native development environment designed for the agentic era. It brings developers, AI agents, development tools, and project environments into a unified workspace. Instead of switching between an IDE, AI assistants, terminals, and documentation, C1 integrates these interactions into one environment centered on a human and agent collaboration model.",
            },
          },
          {
            "@type": "Question",
            "name": "What is the official domain for APOC?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The official website and pre-order waitlist for APOC is https://apoc.in.",
            },
          },
          {
            "@type": "Question",
            "name": "What is Agent OS?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Agent OS is a dedicated software runtime pre-loaded onto APOC hardware that bridges model reasoning with physical environment control, sandboxed filesystem execution, tool schema invocation, and real-time observability.",
            },
          },
          {
            "@type": "Question",
            "name": "How does APOC ensure security and privacy?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "APOC operates on a local-first computing model where your source code, environment credentials, and agent interactions remain within your physical workspace perimeter. It enforces the 'Capability != Authority' principle: discovering a tool does not grant permission to run it, and destructive operations require human cryptographic sign-off.",
            },
          },
          {
            "@type": "Question",
            "name": "How do I join the pre-order waitlist for APOC C1?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can sign up directly on https://apoc.in by entering your email in the pre-order waitlist input to receive priority access and hardware batch updates.",
            },
          },
        ],
      },
      {
        "@type": "ItemList",
        "itemListElement": [
          {
            "@type": "SiteNavigationElement",
            "position": 1,
            "name": "About APOC",
            "description": "The mission and physical hardware architecture behind Apoc.",
            "url": "https://apoc.in/about",
          },
          {
            "@type": "SiteNavigationElement",
            "position": 2,
            "name": "Security",
            "description": "Capability != Authority model and hardware sandboxing.",
            "url": "https://apoc.in/security",
          },
          {
            "@type": "SiteNavigationElement",
            "position": 3,
            "name": "Privacy Policy",
            "description": "Local-first sovereignty and zero cloud data ingestion.",
            "url": "https://apoc.in/privacy",
          },
          {
            "@type": "SiteNavigationElement",
            "position": 4,
            "name": "Terms of Service",
            "description": "Hardware ownership and Agent OS licensing terms.",
            "url": "https://apoc.in/terms",
          },
        ],
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased light`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var clean = function(node) {
                    if (node && node.removeAttribute) {
                      if (node.hasAttribute('bis_skin_checked')) node.removeAttribute('bis_skin_checked');
                      if (node.hasAttribute('bis_register')) node.removeAttribute('bis_register');
                    }
                  };
                  if (typeof MutationObserver !== 'undefined') {
                    var observer = new MutationObserver(function(mutations) {
                      for (var i = 0; i < mutations.length; i++) {
                        var m = mutations[i];
                        if (m.type === 'attributes') {
                          if (m.attributeName === 'bis_skin_checked' || m.attributeName === 'bis_register') {
                            clean(m.target);
                          }
                        } else if (m.addedNodes) {
                          for (var j = 0; j < m.addedNodes.length; j++) {
                            var n = m.addedNodes[j];
                            clean(n);
                            if (n.querySelectorAll) {
                              var els = n.querySelectorAll('[bis_skin_checked], [bis_register]');
                              for (var k = 0; k < els.length; k++) clean(els[k]);
                            }
                          }
                        }
                      }
                    });
                    observer.observe(document.documentElement, {
                      subtree: true,
                      attributes: true,
                      attributeFilter: ['bis_skin_checked', 'bis_register'],
                      childList: true
                    });
                  }
                  if (typeof Element !== 'undefined') {
                    var origSet = Element.prototype.setAttribute;
                    Element.prototype.setAttribute = function(name, val) {
                      if (name === 'bis_skin_checked' || name === 'bis_register') return;
                      return origSet.apply(this, arguments);
                    };
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-screen bg-white text-zinc-900 flex flex-col font-sans selection:bg-black selection:text-white"
      >
        {children}
      </body>
    </html>
  );
}
