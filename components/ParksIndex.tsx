"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { parks, type Park } from "@/lib/content";
import Photo from "./Photo";

const tags = ["All", "Lakeshore", "Riverfront", "Wild", "Downtown"] as const;
type Tag = (typeof tags)[number];

export default function ParksIndex() {
  const [tag, setTag] = useState<Tag>("All");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [hover, setHover] = useState<Park | null>(null);

  useEffect(() => {
    const t = new URLSearchParams(window.location.search).get("tag");
    if (t && (tags as readonly string[]).includes(t)) setTag(t as Tag);
  }, []);

  const list = parks.filter((p) => tag === "All" || p.tag === tag);

  return (
    <section className="px-gutter pb-32">
      <div className="sticky top-20 z-20 -mx-[var(--gutter)] mb-10 flex flex-wrap items-center justify-between gap-4 bg-paper/85 px-[var(--gutter)] py-4 backdrop-blur-lg">
        <div className="flex flex-wrap gap-1">
          {tags.map((t) => (
            <button key={t} onClick={() => setTag(t)} className={`relative rounded-full px-4 py-2 text-sm ${tag === t ? "text-paper" : "text-ink/70 hover:text-ink"}`}>
              {tag === t && <motion.span layoutId="tag-pill" className="absolute inset-0 rounded-full bg-ink" transition={{ type: "spring", stiffness: 400, damping: 34 }} />}
              <span className="relative">
                {t} <span className="opacity-50">{t === "All" ? parks.length : parks.filter((p) => p.tag === t).length}</span>
              </span>
            </button>
          ))}
        </div>
        <div className="flex gap-1 eyebrow">
          {(["grid", "list"] as const).map((v) => (
            <button key={v} onClick={() => setView(v)} className={`rounded-full border px-3 py-1.5 ${view === v ? "border-ink bg-ink text-paper" : "border-ink/20"}`}>
              {v}
            </button>
          ))}
        </div>
      </div>

      {view === "grid" ? (
        <motion.div layout className="grid grid-cols-1 gap-x-5 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {list.map((p, i) => (
              <motion.div
                layout
                key={p.slug}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: (i % 3) * 0.06 }}
                className={i % 3 === 1 ? "lg:mt-16" : ""}
              >
                <Link href={`/parks/${p.slug}`} className="group block" data-cursor="Open">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[3px]">
                    <Photo src={p.images[0]} alt={p.name} className="h-full w-full" imgClassName="transition-transform duration-[1400ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.06]" />
                    <div className="absolute inset-x-0 bottom-0 translate-y-full bg-ink/80 p-4 text-sm text-paper backdrop-blur transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-y-0">
                      {p.lede}
                    </div>
                  </div>
                  <div className="mt-4 flex items-baseline justify-between gap-3">
                    <h2 className="display text-3xl transition-colors group-hover:text-sun">{p.name}</h2>
                    <span className="eyebrow shrink-0 text-ink/50">{p.tag}</span>
                  </div>
                  <p className="mt-1 text-sm text-ink/60">{p.address}</p>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        <div className="relative" onMouseLeave={() => setHover(null)}>
          <ul className="border-t border-ink/12">
            {list.map((p) => (
              <li key={p.slug} onMouseEnter={() => setHover(p)} className="border-b border-ink/12">
                <Link href={`/parks/${p.slug}`} className="group grid grid-cols-12 items-baseline gap-4 py-6">
                  <span className="display col-span-12 text-[clamp(2rem,4.5vw,4rem)] transition-[transform,color] duration-500 group-hover:translate-x-3 group-hover:text-sun md:col-span-6">{p.name}</span>
                  <span className="col-span-6 text-sm text-ink/60 md:col-span-3">{p.kicker}</span>
                  <span className="eyebrow col-span-6 text-right text-ink/50 md:col-span-3">{p.address}</span>
                </Link>
              </li>
            ))}
          </ul>
          <AnimatePresence>
            {hover && (
              <motion.div
                key={hover.slug}
                className="pointer-events-none fixed right-[8vw] top-1/2 z-30 hidden aspect-[4/5] w-[22vw] -translate-y-1/2 overflow-hidden rounded-[3px] shadow-2xl lg:block"
                initial={{ opacity: 0, scale: 0.85, rotate: -4 }}
                animate={{ opacity: 1, scale: 1, rotate: 2 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <Photo src={hover.images[0]} alt={hover.name} className="h-full w-full" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </section>
  );
}
