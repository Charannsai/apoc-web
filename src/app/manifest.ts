import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "APOC - Physical AI Hardware & Agent OS",
    short_name: "APOC",
    description:
      "APOC C1 is an AI-native development environment designed for the agentic era. Dedicated physical compute coupled with loaded Agent OS runtime.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/apoclogo.png",
        sizes: "192x192 512x512",
        type: "image/png",
      },
    ],
  };
}
