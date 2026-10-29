import { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "APOC Labs",
    short_name: "APOC",
    description: SITE.description,
    start_url: "/",
    display: "standalone",
    background_color: "#fbf9f5",
    theme_color: "#1d1d1d",
    icons: [{ src: "/icon", sizes: "512x512", type: "image/png" }],
  };
}
