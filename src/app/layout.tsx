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
    default: "APOC Labs - Adaptable AI Systems & APOC C1 Agent Computing",
    template: "%s | APOC Labs",
  },
  description:
    "APOC Labs is an AI-driven technology company building intelligent solutions tailored to the evolving needs of businesses and industries across mobility, manufacturing, and enterprise operations.",
  applicationName: "APOC Labs",
  keywords: [
    "APOC Labs",
    "APOC C1",
    "apoc.in",
    "Adaptable AI Systems",
    "Applied AI",
    "Intelligent Automation",
    "Edge Computing",
    "Agent Computer",
    "Agent OS",
    "Physical AI Hardware",
    "Mobility AI",
    "Manufacturing AI",
    "Enterprise AI",
    "Emerging AI Architectures",
  ],
  authors: [{ name: "APOC Labs", url: "https://apoc.in" }],
  creator: "APOC Labs",
  publisher: "APOC Labs",
  alternates: {
    canonical: "https://apoc.in",
  },
  openGraph: {
    title: "APOC Labs - Adaptable AI Systems & APOC C1 Agent Computing",
    description:
      "Bridging the gap between advanced AI research and real-world applications across mobility, manufacturing, and enterprise operations.",
    url: "https://apoc.in",
    siteName: "APOC Labs",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://apoc.in/apoclogo.png",
        width: 1200,
        height: 630,
        alt: "APOC Labs - Adaptable AI Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "APOC Labs - Adaptable AI Systems & APOC C1 Agent Computing",
    description:
      "Bridging the gap between advanced AI research and real-world applications across mobility, manufacturing, and enterprise operations.",
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
  // Comprehensive Schema.org Graph for SEO, AEO & GEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://apoc.in/#organization",
        "name": "APOC Labs",
        "url": "https://apoc.in",
        "logo": {
          "@type": "ImageObject",
          "url": "https://apoc.in/apoclogo.png",
        },
        "description":
          "AI-driven technology company building intelligent solutions tailored to the evolving needs of businesses and industries across mobility, manufacturing, and enterprise operations.",
        "email": "team@apoc.in",
        "sameAs": ["https://x.com/apoc_in"],
      },
      {
        "@type": "WebSite",
        "@id": "https://apoc.in/#website",
        "url": "https://apoc.in",
        "name": "APOC Labs",
        "description":
          "Adaptable AI systems and purpose-built agent computing for real-world industries.",
        "publisher": {
          "@id": "https://apoc.in/#organization",
        },
        "inLanguage": "en-US",
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://apoc.in/#software",
        "name": "APOC C1",
        "applicationCategory": "DeveloperApplication, ArtificialIntelligence, BusinessApplication",
        "operatingSystem": "Agent OS",
        "url": "https://apoc.in",
        "description":
          "APOC C1 is an agent computer designed to bring AI computing and agent capabilities into one environment. Purpose-built for adaptable AI across industries.",
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/PreOrder",
          "price": "0",
          "priceCurrency": "USD",
          "url": "https://apoc.in",
        },
        "featureList": [
          "Applied AI and intelligent automation",
          "Industry-specific operational adaptation",
          "Dedicated neural compute and Agent OS",
          "Dynamic model routing",
          "Capability != Authority governance",
          "Edge and air-gapped deployment",
        ],
      },
      {
        "@type": "Product",
        "@id": "https://apoc.in/#product",
        "name": "APOC C1 Agent Computer",
        "image": "https://apoc.in/apoclogo.png",
        "description":
          "Purpose-built agent computer bringing AI compute and agent capabilities into one unified environment across Core, Edge, and Pro tiers.",
        "brand": {
          "@type": "Brand",
          "name": "APOC Labs",
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
            "name": "What is APOC Labs?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "APOC Labs is an AI-driven technology company building intelligent solutions tailored to the evolving needs of businesses and industries. We aim to bridge the gap between advanced AI research and real-world applications by developing adaptable AI systems that address industry-specific challenges across mobility, manufacturing, enterprise operations, and other technology-driven sectors.",
            },
          },
          {
            "@type": "Question",
            "name": "What is APOC C1?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "APOC C1 is our first product—an agent computer designed to bring AI computing and agent capabilities into one environment. APOC Labs builds the solutions, and APOC C1 is the first step toward making adaptable AI practical across industries.",
            },
          },
          {
            "@type": "Question",
            "name": "What industries does APOC Labs serve?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "APOC Labs focuses on mobility, manufacturing, enterprise operations, healthcare, and finance, delivering adaptable AI solutions suited to each industry's operational environment, infrastructure, and data requirements.",
            },
          },
          {
            "@type": "Question",
            "name": "How does APOC Labs approach enterprise collaboration?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We collaborate with industry partners to identify high-value use cases, develop proof-of-concept solutions, and scale successful innovations into practical deployments.",
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
            "name": "About APOC Labs",
            "description": "The mission, approach, and leadership behind APOC Labs.",
            "url": "https://apoc.in/about",
          },
          {
            "@type": "SiteNavigationElement",
            "position": 2,
            "name": "Contact",
            "description": "Collaborate on proof-of-concept solutions and enterprise pilots.",
            "url": "https://apoc.in/contact",
          },
          {
            "@type": "SiteNavigationElement",
            "position": 3,
            "name": "Security",
            "description": "Capability != Authority model and runtime governance.",
            "url": "https://apoc.in/security",
          },
          {
            "@type": "SiteNavigationElement",
            "position": 4,
            "name": "Privacy Policy",
            "description": "Local-first sovereignty and zero cloud data ingestion.",
            "url": "https://apoc.in/privacy",
          },
          {
            "@type": "SiteNavigationElement",
            "position": 5,
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
