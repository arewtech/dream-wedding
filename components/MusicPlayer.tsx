"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wedding } from "@/config/wedding";

export function MusicPlayer({ started }: { started: boolean }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [available, setAvailable] = useState(true);

  // Mulai memutar saat undangan dibuka (dipicu gesture "Buka Undangan")
  useEffect(() => {
    if (!started || !audioRef.current) return;
    audioRef.current
      .play()
      .then(() => setPlaying(true))
      .catch(() => setPlaying(false));
  }, [started]);

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    if (a.paused) {
      a.play()
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false));
    } else {
      a.pause();
      setPlaying(false);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={wedding.music.src}
        loop
        preload="auto"
        onError={() => setAvailable(false)}
      />

      <AnimatePresence>
        {started && available && (
          <motion.button
            type="button"
            aria-label={playing ? "Jeda musik" : "Putar musik"}
            onClick={toggle}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            className="fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-sage text-cream shadow-lg shadow-sage-dark/30 ring-1 ring-white/40"
          >
            <span
              className={`text-lg ${playing ? "animate-spin-slow" : ""}`}
              aria-hidden
            >
              {playing ? "♫" : "♪"}
            </span>
            {playing && (
              <span className="absolute inset-0 rounded-full ring-2 ring-sage-light/60 animate-ping" />
            )}
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
