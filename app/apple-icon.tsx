import { ImageResponse } from "next/og";

// Apple touch icon — dipakai saat "Add to Home Screen" di iOS
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  const cream = "#FAF6EE";
  const goldLight = "#DCC79B";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(160deg, #6E7D5B 0%, #5F6E4E 100%)",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 140,
            height: 140,
            borderRadius: 100,
            border: `3px solid ${goldLight}`,
            color: cream,
            fontSize: 66,
            fontWeight: 700,
          }}
        >
          N
          <span style={{ color: goldLight, fontSize: 42, margin: "0 3px" }}>
            &
          </span>
          A
        </div>
      </div>
    ),
    { ...size }
  );
}
