"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import type { Park } from "@/lib/content";
import Photo from "./Photo";
import { SplitReveal } from "./Reveal";

export default function ParkHero({ park }: { park: Park }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const s = useTransform(scrollYProgress, [0, 1], [1.05, 1.2]);
  return (
    <section ref={ref} className="relative h-[92svh] min-h-[560px] overflow-hidden bg-ink text-paper">
      <motion.div style={{ y, scale: s }} className="absolute inset-0">
        <Photo src={park.images[0]} alt={park.name} className="h-full w-full" tone="dark" priority />
      </motion.div>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,32,29,.5),rgba(18,32,29,0)_30%,rgba(18,32,29,.15)_55%,rgba(18,32,29,.9))]" />
      <div className="px-gutter relative flex h-full flex-col justify-end pb-14">
        <p className="eyebrow mb-5 flex items-center gap-3 text-paper/80">
          <span className="h-px w-10 bg-sun" /> {park.tag} · {park.kicker}
        </p>
        <SplitReveal as="h1" text={park.name} delay={0.45} className="display text-[clamp(3.2rem,10vw,10rem)]" />
        <p className="mt-6 max-w-xl text-lg text-paper/80">{park.lede}</p>
      </div>
    </section>
  );
}
