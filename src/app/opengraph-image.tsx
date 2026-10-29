import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Share image used by every page (link previews on X, LinkedIn, WhatsApp, Slack...).
export const alt = "APOC Labs: APOC C1 Agent Computer and Molecular AI Chip";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logo = await readFile(join(process.cwd(), "public", "apoclogo.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#fbf9f5",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={240} height={80} alt="" />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 68, fontWeight: 700, color: "#09090b", letterSpacing: -2, lineHeight: 1.05 }}>
            Adaptable AI systems.
          </div>
          <div style={{ fontSize: 68, color: "#71717a", letterSpacing: -2, lineHeight: 1.05 }}>
            Built for real-world execution.
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, color: "#52525b" }}>
          <div style={{ display: "flex" }}>APOC C1 Agent Computer · APOC Molecular Chip</div>
          <div style={{ display: "flex", color: "#09090b" }}>apoc.in</div>
        </div>
      </div>
    ),
    size
  );
}
