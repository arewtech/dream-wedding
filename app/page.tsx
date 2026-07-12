"use client";

import { Suspense, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Cover } from "@/components/Cover";
import { MusicPlayer } from "@/components/MusicPlayer";
import { Hero } from "@/components/Hero";
import { Quote } from "@/components/Quote";
import { Couple } from "@/components/Couple";
import { LoveStory } from "@/components/LoveStory";
import { EventDetails } from "@/components/EventDetails";
import { Location } from "@/components/Location";
import { Gallery } from "@/components/Gallery";
import { Gifts } from "@/components/Gifts";
import { Guestbook } from "@/components/Guestbook";
import { Footer } from "@/components/Footer";

function Invitation() {
  const [opened, setOpened] = useState(false);

  // Kunci scroll selama cover masih terbuka
  useEffect(() => {
    document.body.classList.toggle("locked", !opened);
    return () => document.body.classList.remove("locked");
  }, [opened]);

  return (
    <main className="relative overflow-x-hidden">
      <AnimatePresence>
        {!opened && <Cover key="cover" onOpen={() => setOpened(true)} />}
      </AnimatePresence>

      <MusicPlayer started={opened} />

      <Hero />
      <Quote />
      <Couple />
      <LoveStory />
      <EventDetails />
      <Location />
      <Gallery />
      <Gifts />
      <Guestbook />
      <Footer />
    </main>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-cream" />}>
      <Invitation />
    </Suspense>
  );
}
