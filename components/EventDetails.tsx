"use client";

import { Section, Reveal, SectionHeading } from "./Section";
import { Countdown } from "./Countdown";
import { wedding } from "@/config/wedding";

export function EventDetails() {
  return (
    <Section id="acara">
      <SectionHeading sub="Save The Date" title="Detail Acara" />

      <Reveal className="mb-12">
        <Countdown />
      </Reveal>

      <div className="flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:justify-center">
        {wedding.events.map((ev, i) => (
          <Reveal
            key={ev.title}
            delay={i * 0.1}
            className="sm:w-[calc(50%-0.75rem)] lg:max-w-sm"
          >
            <div className="glass-card h-full p-6 text-center">
              <span className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-sage/15 text-2xl">
                {ev.title.toLowerCase().includes("akad") ? "💍" : "🎉"}
              </span>
              <h3 className="font-script text-3xl text-sage-dark">{ev.title}</h3>
              <div className="divider" />
              <p className="font-serif text-lg font-semibold text-ink">
                {ev.date}
              </p>
              <p className="mt-1 font-sans text-sm text-gold-dark">
                Pukul {ev.time}
              </p>
              <p className="mt-4 font-sans text-sm font-medium text-ink/80">
                {ev.place}
              </p>
              <p className="mt-1 font-sans text-xs leading-relaxed text-ink/60">
                {ev.address}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2} className="mt-8 text-center">
        <a
          href={wedding.location.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-sage px-6 py-3 font-sans text-sm font-medium text-cream shadow-lg shadow-sage/30 transition hover:bg-sage-dark"
        >
          <span aria-hidden>📍</span> Lihat Lokasi
        </a>
      </Reveal>
    </Section>
  );
}
