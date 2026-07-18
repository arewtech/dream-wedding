"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { wedding } from "@/config/wedding";

export function Cover({ onOpen }: { onOpen: () => void }) {
  const params = useSearchParams();
  const raw = params.get("to") ?? params.get("kepada");
  const guest = raw && raw.trim().length > 0 ? raw.trim() : wedding.defaultGuest;

  return (
    <motion.div
      className="fixed inset-0 z-[60] flex flex-col items-center justify-center overflow-hidden text-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -60 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Background foto + overlay */}
      <Image
        src={wedding.heroPhoto}
        alt="Mempelai"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center md:object-[50%_25%]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/50 to-sage-dark/70" />

      {/* Konten */}
      <div className="relative z-10 flex flex-col items-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="section-sub text-gold-light"
        >
          The Wedding Of
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-4 font-script text-6xl text-cream drop-shadow sm:text-7xl"
        >
          {wedding.groom.shortName} &amp; {wedding.bride.shortName}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="divider !via-gold-light"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-6"
        >
          <p className="font-sans text-xs uppercase tracking-[0.25em] text-cream/70">
            Kepada Yth.
          </p>
          <p className="mt-2 font-serif text-2xl font-medium text-cream">
            {guest}
          </p>
        </motion.div>

        <motion.button
          type="button"
          onClick={onOpen}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 flex items-center gap-2 rounded-full bg-cream/95 px-8 py-3 font-sans text-sm font-medium tracking-wide text-sage-dark shadow-xl shadow-black/20 transition hover:bg-white"
        >
          <span aria-hidden>✉</span> Buka Undangan
        </motion.button>
      </div>
    </motion.div>
  );
}
