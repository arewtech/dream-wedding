"use client";

import { Section, Reveal, SectionHeading } from "./Section";
import { wedding } from "@/config/wedding";

function Person({
  person,
}: {
  person: typeof wedding.groom | typeof wedding.bride;
}) {
  return (
    <Reveal className="flex flex-col items-center text-center">
      <span
        aria-hidden
        className="mb-4 font-script text-5xl text-gold/70"
      >
        &#10084;
      </span>
      <h3 className="font-script text-5xl text-sage-dark">
        {person.shortName}
      </h3>
      <p className="mt-3 font-serif text-xl font-semibold text-ink">
        {person.name}
      </p>
      <div className="divider !w-16" />
      <p className="max-w-xs font-sans text-sm leading-relaxed text-ink/60">
        {person.parents}
      </p>
    </Reveal>
  );
}

export function Couple() {
  return (
    <Section id="mempelai">
      <SectionHeading sub="Bismillah" title="Mempelai" />

      <Reveal className="mb-10 text-center">
        <p className="mx-auto max-w-md font-sans text-sm leading-relaxed text-ink/70">
          Tanpa mengurangi rasa hormat, kami mengundang Bapak/Ibu/Saudara/i
          untuk menghadiri acara pernikahan kami.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 items-center gap-10 sm:grid-cols-[1fr_auto_1fr]">
        <Person person={wedding.groom} />
        <Reveal
          delay={0.15}
          className="flex items-center justify-center"
        >
          <span className="font-script text-6xl text-gold">&amp;</span>
        </Reveal>
        <Person person={wedding.bride} />
      </div>
    </Section>
  );
}
