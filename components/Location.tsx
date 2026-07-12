"use client";

import { Section, Reveal, SectionHeading } from "./Section";
import { wedding } from "@/config/wedding";

export function Location() {
  return (
    <Section id="lokasi" className="bg-ivory/40">
      <SectionHeading sub="Location" title="Lokasi Acara" />

      <Reveal className="overflow-hidden rounded-2xl border border-gold/20 shadow-lg shadow-sage/10">
        <iframe
          title="Peta Lokasi Acara"
          src={wedding.location.mapEmbed}
          className="h-72 w-full sm:h-96"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </Reveal>

      <Reveal delay={0.1} className="mt-6 text-center">
        <p className="mx-auto max-w-md font-sans text-sm leading-relaxed text-ink/70">
          {wedding.location.address}
        </p>
        <a
          href={wedding.location.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-sage px-6 py-3 font-sans text-sm font-medium text-cream shadow-lg shadow-sage/30 transition hover:bg-sage-dark"
        >
          <span aria-hidden>🗺️</span> Buka di Google Maps
        </a>
      </Reveal>
    </Section>
  );
}
