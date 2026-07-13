"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { Section, Reveal, SectionHeading } from "./Section";
import { wedding } from "@/config/wedding";

type Wish = {
  id: string;
  name: string;
  attend: "Hadir" | "Tidak Hadir" | "Ragu";
  message: string;
  at: number;
};

const STORAGE_KEY = "wedding_wishes_v1";

const SEED_WISHES: Wish[] = [
  {
    id: "seed-risky",
    name: "Risky",
    attend: "Hadir",
    message: "Selamat menempuh hidup baru! Semoga menjadi keluarga yang sakinah, mawaddah, warahmah. 🤍",
    at: Date.now() - 1000 * 60 * 60 * 5,
  },
  {
    id: "seed-andi-bayu",
    name: "Andi Bayu",
    attend: "Hadir",
    message: "Barakallahu lakuma wa baraka alaikuma. Semoga langgeng sampai kakek nenek ya!",
    at: Date.now() - 1000 * 60 * 60 * 3,
  },
  {
    id: "seed-maman",
    name: "Maman",
    attend: "Ragu",
    message: "Selamat ya! Semoga bisa hadir, doakan tidak ada halangan. Bahagia selalu untuk kalian berdua.",
    at: Date.now() - 1000 * 60 * 45,
  },
];

function relativeTime(ts: number) {
  const diff = Date.now() - ts;
  const m = Math.floor(diff / 60000);
  if (m < 1) return "baru saja";
  if (m < 60) return `${m} menit lalu`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h} jam lalu`;
  return new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "short",
  }).format(ts);
}

export function Guestbook() {
  const params = useSearchParams();
  const guestParam = params.get("to") ?? params.get("kepada") ?? "";

  const [wishes, setWishes] = useState<Wish[]>(SEED_WISHES);
  const [name, setName] = useState("");
  const [attend, setAttend] = useState<Wish["attend"]>("Hadir");
  const [message, setMessage] = useState("");
  const [loaded, setLoaded] = useState(false);

  // Load dari localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const saved: Wish[] = raw ? JSON.parse(raw) : [];
      // Seed statis selalu tampil, lalu lanjutkan dengan data dari localStorage
      setWishes([...saved, ...SEED_WISHES]);
    } catch {
      /* ignore */
    }
    setName(guestParam.trim());
    setLoaded(true);
  }, [guestParam]);

  // Simpan setiap perubahan
  useEffect(() => {
    if (!loaded) return;
    try {
      // Jangan simpan seed statis, hanya ucapan dari pengguna
      const userWishes = wishes.filter(
        (w) => !SEED_WISHES.some((s) => s.id === w.id),
      );
      localStorage.setItem(STORAGE_KEY, JSON.stringify(userWishes));
    } catch {
      /* ignore */
    }
  }, [wishes, loaded]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    const wish: Wish = {
      id: crypto.randomUUID(),
      name: name.trim(),
      attend,
      message: message.trim(),
      at: Date.now(),
    };
    setWishes((w) => [wish, ...w]);
    setMessage("");
  };

  const badgeColor: Record<Wish["attend"], string> = {
    Hadir: "bg-sage/20 text-sage-dark",
    "Tidak Hadir": "bg-gold/20 text-gold-dark",
    Ragu: "bg-ink/10 text-ink/70",
  };

  return (
    <Section id="ucapan">
      <SectionHeading sub="Wishes" title="Ucapan & Doa" />

      <Reveal>
        <form
          onSubmit={submit}
          className="glass-card space-y-4 p-6"
        >
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nama Anda"
            required
            className="w-full rounded-lg border border-gold/30 bg-white/70 px-4 py-2.5 font-sans text-sm text-ink outline-none transition focus:border-sage focus:ring-1 focus:ring-sage"
          />

          <div className="flex flex-wrap gap-2">
            {(["Hadir", "Tidak Hadir", "Ragu"] as const).map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => setAttend(opt)}
                className={`rounded-full px-4 py-1.5 font-sans text-sm transition ${
                  attend === opt
                    ? "bg-sage text-cream"
                    : "bg-white/60 text-ink/70 hover:bg-white"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tulis ucapan & doa untuk kedua mempelai…"
            required
            rows={3}
            className="w-full resize-none rounded-lg border border-gold/30 bg-white/70 px-4 py-2.5 font-sans text-sm text-ink outline-none transition focus:border-sage focus:ring-1 focus:ring-sage"
          />

          <button
            type="submit"
            className="w-full rounded-lg bg-sage py-2.5 font-sans text-sm font-medium text-cream transition hover:bg-sage-dark"
          >
            Kirim Ucapan
          </button>
        </form>
      </Reveal>

      {/* Daftar ucapan */}
      <Reveal delay={0.1} className="mt-8">
        <p className="mb-4 text-center font-sans text-xs uppercase tracking-widest text-gold-dark">
          {wishes.length} Ucapan
        </p>
        <div className="max-h-96 space-y-3 overflow-y-auto pr-1">
          <AnimatePresence initial={false}>
            {wishes.length === 0 && (
              <p className="py-6 text-center font-sans text-sm text-ink/50">
                Jadilah yang pertama memberi ucapan 💌
              </p>
            )}
            {wishes.map((w) => (
              <motion.div
                key={w.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="rounded-xl border border-gold/15 bg-white/60 p-4"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-serif font-semibold text-ink">
                    {w.name}
                  </span>
                  <span
                    className={`rounded-full px-2.5 py-0.5 font-sans text-[10px] font-medium ${badgeColor[w.attend]}`}
                  >
                    {w.attend}
                  </span>
                </div>
                <p className="mt-1.5 font-sans text-sm leading-relaxed text-ink/75">
                  {w.message}
                </p>
                <p className="mt-2 font-sans text-[10px] text-ink/40">
                  {relativeTime(w.at)}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </Reveal>
    </Section>
  );
}
