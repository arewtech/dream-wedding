"use client";

import { Section, Reveal } from "./Section";
import { wedding } from "@/config/wedding";

export function Quote() {
  return (
    <Section className="bg-ivory/40">
      <Reveal className="text-center">
        <span className="mx-auto mb-6 block font-script text-5xl text-gold">
          ﷽
        </span>
        <p className="font-serif text-lg italic leading-relaxed text-ink/80 sm:text-xl">
          &ldquo;{wedding.quote.text}&rdquo;
        </p>
        <p className="mt-4 font-sans text-sm tracking-widest text-gold-dark">
          ({wedding.quote.source})
        </p>
      </Reveal>
    </Section>
  );
}
