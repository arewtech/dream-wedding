"use client";

import Image from "next/image";
import { Section, Reveal, SectionHeading } from "./Section";
import { wedding } from "@/config/wedding";

function Person({
  person,
  reverse = false,
}: {
  person: typeof wedding.groom | typeof wedding.bride;
  reverse?: boolean;
}) {
  return (
    <Reveal className="flex flex-col items-center text-center">
      <div className="relative h-56 w-56 overflow-hidden rounded-full border-4 border-white shadow-xl shadow-sage/20 sm:h-64 sm:w-64">
        <Image
          src={person.photo}
          alt={person.name}
          fill
          sizes="256px"
          className="object-cover"
        />
      </div>
      <h3 className="mt-6 font-script text-4xl text-sage-dark">
        {person.shortName}
      </h3>
      <p className="mt-1 font-serif text-lg font-semibold text-ink">
        {person.name}
      </p>
      <p className="mt-2 max-w-xs font-sans text-sm text-ink/60">
        {person.parents}
      </p>
      <a
        href={person.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-gold/40 px-4 py-1.5 font-sans text-xs text-gold-dark transition hover:bg-gold/10"
      >
        <span aria-hidden>◎</span> Instagram
      </a>
    </Reveal>
  );
}

export function Couple() {
  return (
    <Section id="mempelai">
      <SectionHeading sub="Bismillah" title="Mempelai" />

      <div className="grid grid-cols-1 items-start gap-12 sm:grid-cols-[1fr_auto_1fr]">
        <Person person={wedding.groom} />
        <Reveal
          delay={0.15}
          className="flex items-center justify-center self-center"
        >
          <span className="font-script text-6xl text-gold">&amp;</span>
        </Reveal>
        <Person person={wedding.bride} reverse />
      </div>
    </Section>
  );
}
