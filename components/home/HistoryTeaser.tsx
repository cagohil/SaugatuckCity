"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { history } from "@/lib/content";
import Photo from "../Photo";

export default function HistoryTeaser() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-55%"]);
  const imgScale = useTransform(scrollYProgress, [0, 0.5], [1.25, 1]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-lake py-28 text-paper md:py-40">
      <motion.p style={{ x }} className="display pointer-events-none whitespace-nowrap text-[22vw] leading-none text-paper/[0.06]" aria-hidden>
        1868 · 1871 · 1880 · 1929 · 1984 · 1990
      </motion.p>
      <div className="px-gutter -mt-[10vw] grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[3px]">
            <motion.div style={{ scale: imgScale }} className="absolute inset-0">
              <Photo src="editor/village-hall-1929.jpg?1609181634" alt="Saugatuck Village Hall, 1929" className="h-full w-full" tone="dark" imgClassName="sepia-[.35]" />
            </motion.div>
          </div>
          <p className="mt-3 eyebrow text-paper/50">Village Hall, 1929 · Courtesy Saugatuck Douglas History Center</p>
        </div>
        <div className="col-span-12 flex flex-col justify-end md:col-span-6 md:col-start-7">
          <p className="eyebrow text-paper/50">(07) — 102 Butler Street</p>
          <h2 className="display mt-5 text-[clamp(2.4rem,5vw,5rem)]">
            A hall that has watched the town <span className="display-italic text-sun-2">grow up.</span>
          </h2>
          <ul className="mt-10 divide-y divide-paper/15 border-y border-paper/15">
            {history.filter((h) => ["1868", "1880", "1931", "1984", "1990"].includes(h.year) || h.year === "1929").map((h) => (
              <li key={h.year} className="group grid grid-cols-[5rem_1fr] gap-4 py-4">
                <span className="display text-2xl text-sun-2 transition-transform duration-500 group-hover:translate-x-1">{h.year}</span>
                <span className="text-paper/75">{h.text}</span>
              </li>
            ))}
          </ul>
          <Link href="/history" className="mt-8 eyebrow link-underline self-start">The full timeline →</Link>
        </div>
      </div>
    </section>
  );
}
