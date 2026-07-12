"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section, Reveal, SectionHeading } from "./Section";
import { wedding } from "@/config/wedding";

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const photos = wedding.gallery;

  const close = () => setActive(null);
  const prev = () =>
    setActive((i) => (i === null ? i : (i - 1 + photos.length) % photos.length));
  const next = () =>
    setActive((i) => (i === null ? i : (i + 1) % photos.length));

  return (
    <Section id="galeri">
      <SectionHeading sub="Gallery" title="Momen Kami" />

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {photos.map((src, i) => (
          <Reveal
            key={src}
            delay={(i % 3) * 0.05}
            className={i === 0 ? "col-span-2 row-span-2 sm:col-span-2" : ""}
          >
            <button
              type="button"
              onClick={() => setActive(i)}
              className="group relative block aspect-square w-full overflow-hidden rounded-xl"
            >
              <Image
                src={src}
                alt={`Galeri ${i + 1}`}
                fill
                sizes="(max-width: 640px) 50vw, 33vw"
                className="object-cover transition duration-500 group-hover:scale-110"
              />
              <span className="absolute inset-0 bg-ink/0 transition group-hover:bg-ink/20" />
            </button>
          </Reveal>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/90 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <button
              type="button"
              aria-label="Tutup"
              onClick={close}
              className="absolute right-5 top-5 z-10 text-3xl text-cream/80 hover:text-cream"
            >
              ×
            </button>
            <button
              type="button"
              aria-label="Sebelumnya"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-3 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-cream/10 text-2xl text-cream hover:bg-cream/20"
            >
              ‹
            </button>
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative h-[75vh] w-full max-w-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={photos[active]}
                alt={`Galeri ${active + 1}`}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </motion.div>
            <button
              type="button"
              aria-label="Berikutnya"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-3 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-cream/10 text-2xl text-cream hover:bg-cream/20"
            >
              ›
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
