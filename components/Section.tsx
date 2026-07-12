"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const variants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

export function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`relative w-full px-5 py-16 sm:py-24 ${className}`}
    >
      <div className="mx-auto w-full max-w-3xl">{children}</div>
    </section>
  );
}

export function SectionHeading({
  sub,
  title,
}: {
  sub?: string;
  title: string;
}) {
  return (
    <Reveal className="mb-10 text-center">
      {sub && <p className="section-sub">{sub}</p>}
      <h2 className="section-title mt-2">{title}</h2>
      <div className="divider" />
    </Reveal>
  );
}
