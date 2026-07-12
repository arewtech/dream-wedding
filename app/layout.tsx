import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Jost, Great_Vibes } from "next/font/google";
import { wedding } from "@/config/wedding";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const script = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-script",
  display: "swap",
});

const title = `${wedding.groom.shortName} & ${wedding.bride.shortName} — Undangan Pernikahan`;
const description = `Dengan memohon rahmat dan ridho Allah SWT, kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri pernikahan ${wedding.groom.shortName} & ${wedding.bride.shortName}.`;

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://undangan.vercel.app"
  ),
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    locale: "id_ID",
    // og:image otomatis diambil dari app/opengraph-image.tsx
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    // twitter:image otomatis diambil dari app/opengraph-image.tsx
  },
};

export const viewport: Viewport = {
  themeColor: "#8B9A7A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${serif.variable} ${sans.variable} ${script.variable}`}>
      <body className="font-serif antialiased">{children}</body>
    </html>
  );
}
