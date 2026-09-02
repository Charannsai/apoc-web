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
  metadataBase: new URL("https://apoc.run"),
  title: {
    default: "APOC - Physical AI Hardware & Agent OS",
    template: "%s | APOC",
  },
  description:
    "APOC (Agent Pocket) is a physical, local-first AI platform combining dedicated on-device compute with a loaded Agent OS runtime. Sovereign, private, and built for real execution.",
  keywords: [
    "APOC",
    "Agent Pocket",
    "APOC AI",
    "Physical AI Hardware",
    "Agent OS",
    "Local AI Platform",
    "Autonomous Agents",
    "MCP Runtime",
    "Model Context Protocol",
    "Sovereign AI Device",
  ],
  authors: [{ name: "APOC Systems", url: "https://apoc.run" }],
  creator: "APOC Systems",
  publisher: "APOC Systems",
  alternates: {
    canonical: "https://apoc.run",
  },
  openGraph: {
    title: "APOC - Physical AI Hardware & Agent OS",
    description:
      "Dedicated local compute coupled with an autonomous agent runtime. Private, sovereign, and built for real execution.",
    url: "https://apoc.run",
    siteName: "APOC - Agent Pocket",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/apoclogo.png",
        width: 1200,
        height: 630,
        alt: "APOC - Physical AI Hardware & Agent OS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "APOC - Physical AI Hardware & Agent OS",
    description:
      "Dedicated local compute coupled with an autonomous agent runtime. Private, sovereign, and built for real execution.",
    images: ["/apoclogo.png"],
    creator: "@apoc_run",
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
    icon: "/favicon.ico",
    apple: "/apoclogo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Google Sitelinks & Rich Snippets Structured Data (Schema.org)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://apoc.run/#organization",
        "name": "APOC Systems",
        "url": "https://apoc.run",
        "logo": {
          "@type": "ImageObject",
          "url": "https://apoc.run/apoclogo.png",
        },
        "sameAs": ["https://x.com/apoc_run"],
      },
      {
        "@type": "WebSite",
        "@id": "https://apoc.run/#website",
        "url": "https://apoc.run",
        "name": "APOC - Agent Pocket",
        "publisher": {
          "@id": "https://apoc.run/#organization",
        },
      },
      {
        "@type": "Product",
        "@id": "https://apoc.run/#product",
        "name": "APOC - Agent Pocket",
        "image": "https://apoc.run/apoclogo.png",
        "description":
          "A physical local-first AI platform and agentic workflow environment combining hardware control with loaded Agent OS.",
        "brand": {
          "@type": "Brand",
          "name": "APOC",
        },
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/PreOrder",
          "price": "0",
          "priceCurrency": "USD",
          "url": "https://apoc.run",
        },
      },
      {
        "@type": "ItemList",
        "itemListElement": [
          {
            "@type": "SiteNavigationElement",
            "position": 1,
            "name": "About APOC",
            "description": "The mission and physical hardware architecture behind Apoc.",
            "url": "https://apoc.run/about",
          },
          {
            "@type": "SiteNavigationElement",
            "position": 2,
            "name": "Contact",
            "description": "Pre-order inquiries, developer pilots, and enterprise partnerships.",
            "url": "https://apoc.run/contact",
          },
          {
            "@type": "SiteNavigationElement",
            "position": 3,
            "name": "Security",
            "description": "Capability != Authority model and hardware sandboxing.",
            "url": "https://apoc.run/security",
          },
          {
            "@type": "SiteNavigationElement",
            "position": 4,
            "name": "Privacy Policy",
            "description": "Local-first sovereignty and zero cloud data ingestion.",
            "url": "https://apoc.run/privacy",
          },
          {
            "@type": "SiteNavigationElement",
            "position": 5,
            "name": "Terms of Service",
            "description": "Hardware ownership and Agent OS licensing terms.",
            "url": "https://apoc.run/terms",
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
