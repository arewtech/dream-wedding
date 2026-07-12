"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { wedding } from "@/config/wedding";

function formatFullDate(iso: string) {
  const d = new Date(iso);
  return new Intl.DateTimeFormat("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Jakarta",
  }).format(d);
}

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden text-center">
      <Image
        src={wedding.heroPhoto}
        alt="Foto mempelai"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-cream/30 via-ink/40 to-ink/70" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="relative z-10 px-6"
      >
        <p className="section-sub text-gold-light">Kami Menikah</p>
        <h1 className="mt-3 font-serif text-3xl font-medium leading-tight text-cream drop-shadow sm:text-5xl">
          {wedding.groom.shortName}
          <span className="mx-3 font-script text-gold-light">&amp;</span>
          {wedding.bride.shortName}
        </h1>
        <div className="divider !via-gold-light" />
        <p className="mt-2 font-sans text-sm tracking-widest text-cream/90 sm:text-base">
          {formatFullDate(wedding.date)}
        </p>
      </motion.div>

      {/* indikator scroll */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex h-9 w-5 items-start justify-center rounded-full border-2 border-cream/70 p-1">
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="h-1.5 w-1.5 rounded-full bg-cream"
          />
        </div>
      </motion.div>
    </section>
  );
}
