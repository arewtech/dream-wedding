"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section, Reveal, SectionHeading } from "./Section";
import { wedding } from "@/config/wedding";

function GiftCard({ gift }: { gift: (typeof wedding.gifts)[number] }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(gift.number);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <Reveal>
      <div
        className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${gift.color} p-6 text-white shadow-xl`}
      >
        <div className="flex items-center justify-between">
          <span className="font-sans text-lg font-bold tracking-wide">
            {gift.provider}
          </span>
          <span className="font-sans text-xs uppercase tracking-widest opacity-80">
            {gift.type === "bank" ? "Bank Transfer" : "E-Wallet"}
          </span>
        </div>

        <p className="mt-8 font-mono text-xl tracking-wider">{gift.number}</p>
        <p className="mt-2 font-sans text-sm opacity-90">a.n. {gift.name}</p>

        <button
          type="button"
          onClick={copy}
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 font-sans text-sm font-medium backdrop-blur transition hover:bg-white/30"
        >
          <span aria-hidden>{copied ? "✓" : "⧉"}</span>
          {copied ? "Tersalin" : "Salin Nomor"}
        </button>

        <AnimatePresence>
          {copied && (
            <motion.span
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="absolute bottom-6 right-6 rounded-full bg-white px-3 py-1 text-xs font-medium text-sage-dark shadow"
            >
              Berhasil disalin
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </Reveal>
  );
}

export function Gifts() {
  return (
    <Section id="amplop" className="bg-ivory/40">
      <SectionHeading sub="Wedding Gift" title="Amplop Digital" />

      <Reveal className="mb-8 text-center">
        <p className="mx-auto max-w-md font-sans text-sm leading-relaxed text-ink/70">
          Doa restu Anda merupakan karunia yang sangat berarti bagi kami. Namun
          jika memberi lebih, Anda dapat mengirimkan tanda kasih melalui:
        </p>
      </Reveal>

      <div className="mx-auto grid max-w-md gap-5">
        {wedding.gifts.map((gift) => (
          <GiftCard key={gift.provider + gift.number} gift={gift} />
        ))}
      </div>
    </Section>
  );
}
