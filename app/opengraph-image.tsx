import { ImageResponse } from "next/og";
import { wedding } from "@/config/wedding";

// Ukuran standar Open Graph (WhatsApp, Facebook, Twitter, dll)
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `Undangan Pernikahan ${wedding.groom.shortName} & ${wedding.bride.shortName}`;

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Jakarta",
  }).format(new Date(iso));
}

export default function OpengraphImage() {
  const gold = "#C4A468";
  const goldLight = "#DCC79B";
  const sage = "#5F6E4E";
  const cream = "#FAF6EE";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: `linear-gradient(135deg, ${cream} 0%, #F3EBDD 100%)`,
          fontFamily: "serif",
          position: "relative",
        }}
      >
        {/* Bingkai emas */}
        <div
          style={{
            position: "absolute",
            top: 28,
            left: 28,
            right: 28,
            bottom: 28,
            border: `2px solid ${gold}`,
            borderRadius: 24,
          }}
        />

        {/* Monogram badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 150,
            height: 150,
            borderRadius: 100,
            background: sage,
            border: `4px solid ${goldLight}`,
            color: cream,
            fontSize: 68,
            fontWeight: 700,
            marginBottom: 34,
          }}
        >
          N
          <span style={{ color: goldLight, fontSize: 44, margin: "0 4px" }}>
            &
          </span>
          A
        </div>

        <div
          style={{
            fontSize: 26,
            letterSpacing: 10,
            textTransform: "uppercase",
            color: gold,
          }}
        >
          The Wedding Of
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 82,
            fontWeight: 700,
            color: sage,
            marginTop: 14,
          }}
        >
          {`${wedding.groom.shortName} & ${wedding.bride.shortName}`}
        </div>

        {/* Divider */}
        <div
          style={{
            display: "flex",
            width: 240,
            height: 2,
            background: gold,
            margin: "26px 0",
          }}
        />

        <div style={{ fontSize: 34, color: "#3B3A32" }}>
          {formatDate(wedding.date)}
        </div>
      </div>
    ),
    { ...size }
  );
}
