"use client";

import { Section, Reveal, SectionHeading } from "./Section";
import { wedding } from "@/config/wedding";

export function LoveStory() {
  return (
    <Section id="cerita" className="bg-ivory/40">
      <SectionHeading sub="Our Journey" title="Cerita Cinta" />

      <div className="relative mx-auto max-w-xl">
        {/* garis vertikal */}
        <span
          aria-hidden
          className="absolute left-3 top-2 h-full w-px bg-gold/40 sm:left-1/2"
        />

        <div className="space-y-10">
          {wedding.story.map((item, i) => (
            <Reveal
              key={item.date}
              delay={i * 0.05}
              className={`relative pl-10 sm:w-1/2 sm:pl-0 ${
                i % 2 === 0
                  ? "sm:ml-0 sm:pr-10 sm:text-right"
                  : "sm:ml-auto sm:pl-10 sm:text-left"
              }`}
            >
              {/* titik */}
              <span
                aria-hidden
                className={`absolute top-1.5 h-4 w-4 rounded-full border-2 border-gold bg-cream left-1.5 ${
                  i % 2 === 0
                    ? "sm:left-auto sm:-right-2"
                    : "sm:-left-2"
                }`}
              />
              <p className="font-script text-3xl text-sage-dark">{item.date}</p>
              <h3 className="mt-1 font-serif text-xl font-semibold text-ink">
                {item.title}
              </h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-ink/70">
                {item.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
