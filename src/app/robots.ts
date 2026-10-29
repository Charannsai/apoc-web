import { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Everyone, including Googlebot and Bingbot, may crawl the whole site.
      { userAgent: "*", allow: "/" },
      {
        // AI search and answer engines (AEO / GEO): explicitly welcome so APOC
        // shows up in ChatGPT, Claude, Perplexity, Gemini, Copilot and Apple answers.
        userAgent: [
          "GPTBot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "ClaudeBot",
          "Claude-User",
          "Claude-SearchBot",
          "anthropic-ai",
          "PerplexityBot",
          "Perplexity-User",
          "Google-Extended",
          "GoogleOther",
          "Applebot",
          "Applebot-Extended",
          "Bingbot",
          "DuckAssistBot",
          "Meta-ExternalAgent",
          "MistralAI-User",
          "cohere-ai",
          "CCBot",
        ],
        allow: "/",
      },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
