"use client";

import { useEffect, useState } from "react";
import { wedding } from "@/config/wedding";

function diff(target: number) {
  const now = Date.now();
  const d = Math.max(0, target - now);
  return {
    days: Math.floor(d / 86400000),
    hours: Math.floor((d / 3600000) % 24),
    minutes: Math.floor((d / 60000) % 60),
    seconds: Math.floor((d / 1000) % 60),
    done: d === 0,
  };
}

export function Countdown() {
  const target = new Date(wedding.date).getTime();
  const [t, setT] = useState(() => diff(target));

  useEffect(() => {
    const id = setInterval(() => setT(diff(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const items = [
    { label: "Hari", value: t.days },
    { label: "Jam", value: t.hours },
    { label: "Menit", value: t.minutes },
    { label: "Detik", value: t.seconds },
  ];

  return (
    <div className="mx-auto flex max-w-md justify-center gap-3 sm:gap-4">
      {items.map((it) => (
        <div
          key={it.label}
          className="glass-card flex w-16 flex-col items-center py-3 sm:w-20 sm:py-4"
        >
          <span className="font-serif text-2xl font-bold text-sage-dark sm:text-3xl tabular-nums">
            {String(it.value).padStart(2, "0")}
          </span>
          <span className="mt-1 font-sans text-[10px] uppercase tracking-widest text-gold-dark">
            {it.label}
          </span>
        </div>
      ))}
    </div>
  );
}
