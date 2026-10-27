"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { gallery } from "@/lib/content";
import Photo from "../Photo";
import { SplitReveal } from "../Reveal";

// Three columns drifting at different speeds, like light on water.
export default function Gallery() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const a = useTransform(scrollYProgress, [0, 1], ["4%", "-10%"]);
  const b = useTransform(scrollYProgress, [0, 1], ["10%", "-2%"]);
  const c = useTransform(scrollYProgress, [0, 1], ["14%", "-14%"]);
  const cols = [gallery.slice(0, 3), gallery.slice(3, 6), gallery.slice(6, 9)];
  const ys = [a, b, c];

  return (
    <section ref={ref} className="relative overflow-hidden pt-28 pb-40 md:pt-40 md:pb-56">
      <div className="px-gutter mb-16 grid grid-cols-12 gap-6">
        <p className="eyebrow col-span-12 text-ink/50 md:col-span-3">(06) — Seasons</p>
        <SplitReveal
          className="display col-span-12 text-[clamp(2.6rem,6.5vw,6.5rem)] md:col-span-9"
          text={"Spring light,\nsummer *crowds,*\nautumn *quiet.*"}
        />
      </div>
      <div className="px-gutter grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
        {cols.map((col, ci) => (
          <motion.div key={ci} style={{ y: ys[ci] }} className={`flex flex-col gap-3 md:gap-5 ${ci === 2 ? "hidden md:flex" : ""}`}>
            {col.map((src, i) => (
              <div key={src} className={`overflow-hidden rounded-[3px] ${(i + ci) % 2 ? "aspect-[3/4]" : "aspect-[4/5]"}`} data-cursor="Saugatuck">
                <Photo src={src} alt="Saugatuck in spring" className="h-full w-full" imgClassName="transition-transform duration-[1600ms] hover:scale-105" />
              </div>
            ))}
          </motion.div>
        ))}
      </div>
      <p className="px-gutter mt-10 eyebrow text-ink/40">Photography courtesy of the City of Saugatuck</p>
    </section>
  );
}
