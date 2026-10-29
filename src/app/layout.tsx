import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SITE, ORG_ID, WEBSITE_ID, jsonLdScript } from "@/lib/site";

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
  metadataBase: new URL(SITE.url),
  title: {
    default: "APOC Labs: APOC C1 Agent Computer and Molecular AI Chip",
    template: "%s | APOC Labs",
  },
  description:
    "APOC Labs (apoc.in) builds AI hardware: APOC C1, an agent computer that runs AI agents on your own infrastructure, and the APOC Molecular Chip for energy-efficient local AI.",
  applicationName: "APOC Labs",
  keywords: [
    "APOC",
    "APOC Labs",
    "apoc.in",
    "APOC C1",
    "APOC agent computer",
    "APOC molecular chip",
    "molecular chip",
    "molecular AI chip",
    "molecular compute-in-memory",
    "compute-in-memory AI chip",
    "agent computer",
    "AI agent hardware",
    "on-prem AI agents",
    "local LLM accelerator",
    "energy-efficient AI inference",
  ],
  authors: [{ name: "APOC Labs", url: SITE.url }],
  creator: "APOC Labs",
  publisher: "APOC Labs",
  alternates: { canonical: "/" },
  openGraph: {
    title: "APOC Labs: APOC C1 Agent Computer and Molecular AI Chip",
    description:
      "AI hardware built for real-world execution. APOC C1 runs AI agents on your own infrastructure; the APOC Molecular Chip researches energy-efficient local AI.",
    url: SITE.url,
    siteName: "APOC Labs",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "APOC Labs: APOC C1 Agent Computer and Molecular AI Chip",
    description:
      "AI hardware built for real-world execution. APOC C1 runs AI agents on your own infrastructure; the APOC Molecular Chip researches energy-efficient local AI.",
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
  category: "technology",
  manifest: "/manifest.webmanifest",
  // Paste the verification codes from Google Search Console / Bing Webmaster Tools here.
  // verification: { google: "", other: { "msvalidate.01": "" } },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Site-wide entity graph: who APOC Labs is, its website, and its two products.
  // Page-specific data (home page, FAQ, products, breadcrumbs) lives on each page.
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": ORG_ID,
        name: SITE.name,
        alternateName: SITE.alternateNames,
        url: SITE.url,
        logo: { "@type": "ImageObject", url: SITE.logo, width: 2172, height: 724 },
        description: SITE.description,
        email: SITE.email,
        slogan: SITE.tagline,
        knowsAbout: [
          "AI agents",
          "Agent computers",
          "Edge AI hardware",
          "On-premises AI",
          "Compute-in-memory",
          "Molecular electronics",
          "Molecular memristors",
          "Energy-efficient AI inference",
          "Large language model inference",
        ],
        brand: [
          { "@type": "Brand", name: "APOC" },
          { "@type": "Brand", name: "APOC C1" },
        ],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "sales and partnerships",
          email: SITE.email,
          availableLanguage: ["English"],
        },
        sameAs: SITE.sameAs,
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: SITE.url,
        name: SITE.name,
        alternateName: SITE.alternateNames,
        description: SITE.description,
        publisher: { "@id": ORG_ID },
        inLanguage: "en",
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
          dangerouslySetInnerHTML={jsonLdScript(jsonLd)}
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
        className="min-h-screen bg-[#fbf9f5] text-zinc-900 flex flex-col font-sans selection:bg-black selection:text-white"
      >
        {children}
      </body>
    </html>
  );
}
