"use client";

import { useState } from "react";
import { Section, Reveal } from "./Section";
import { wedding } from "@/config/wedding";

export function Footer() {
  const [copied, setCopied] = useState(false);

  const shareWhatsApp = () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    const text = `Assalamu'alaikum, turut mengundang Anda ke pernikahan ${wedding.groom.shortName} & ${wedding.bride.shortName}. Info & konfirmasi: ${url}`;
    window.open(
      `https://wa.me/?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  };

  return (
    <footer className="relative overflow-hidden bg-sage-dark text-cream">
      <Section className="!py-20 text-center">
        <Reveal>
          <p className="font-sans text-sm leading-relaxed text-cream/80">
            Merupakan suatu kebahagiaan dan kehormatan bagi kami apabila
            Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.
          </p>
          <p className="mt-6 font-sans text-xs uppercase tracking-widest text-gold-light">
            Wassalamu&apos;alaikum Wr. Wb.
          </p>

          <h2 className="mt-6 font-script text-5xl">
            {wedding.groom.shortName} &amp; {wedding.bride.shortName}
          </h2>
          <p className="mt-2 font-sans text-sm tracking-widest text-cream/70">
            {wedding.hashtag}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={shareWhatsApp}
              className="inline-flex items-center gap-2 rounded-full bg-cream px-5 py-2.5 font-sans text-sm font-medium text-sage-dark transition hover:bg-white"
            >
              <span aria-hidden>↗</span> Bagikan ke WhatsApp
            </button>
            <button
              type="button"
              onClick={copyLink}
              className="inline-flex items-center gap-2 rounded-full border border-cream/40 px-5 py-2.5 font-sans text-sm font-medium text-cream transition hover:bg-cream/10"
            >
              <span aria-hidden>{copied ? "✓" : "🔗"}</span>
              {copied ? "Link tersalin" : "Salin Link"}
            </button>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-12 font-sans text-xs text-cream/50">
            Dibuat dengan ♥ untuk hari bahagia — {new Date().getFullYear()}
          </p>
        </Reveal>
      </Section>
    </footer>
  );
}
