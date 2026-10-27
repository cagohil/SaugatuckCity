"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { parks } from "@/lib/content";
import Photo from "../Photo";

export default function ParksRail() {
  const section = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);
  const { scrollYProgress } = useScroll({ target: section, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);

  useEffect(() => {
    const measure = () => {
      if (!track.current) return;
      setDistance(Math.max(0, track.current.scrollWidth - window.innerWidth));
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (track.current) ro.observe(track.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  const items = parks.slice(0, 10);

  return (
    <section ref={section} className="relative bg-paper-2" style={{ height: `calc(100svh + ${distance}px)` }}>
      <div className="sticky top-0 flex h-[100svh] flex-col justify-center overflow-hidden">
        <div className="px-gutter mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow mb-4 text-ink/50">(05) — Parks & preserves</p>
            <h2 className="display text-[clamp(2.4rem,5.5vw,5.5rem)]">
              Every <span className="display-italic text-sun">corner</span>, cared for.
            </h2>
          </div>
          <Link href="/parks" className="eyebrow link-underline hidden shrink-0 md:inline">
            All 14 places →
          </Link>
        </div>
        <motion.div ref={track} style={{ x }} className="flex w-max gap-5 pl-[var(--gutter)] pr-[var(--gutter)]">
          {items.map((p, i) => (
            <Link
              key={p.slug}
              href={`/parks/${p.slug}`}
              data-cursor="Open"
              className="group relative block w-[78vw] shrink-0 sm:w-[46vw] lg:w-[30vw]"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[3px]">
                <Photo src={p.images[0]} alt={p.name} className="h-full w-full" imgClassName="transition-transform duration-[1400ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.07]" />
                <span className="absolute left-4 top-4 rounded-full bg-paper/90 px-3 py-1 eyebrow text-ink backdrop-blur">{p.tag}</span>
              </div>
              <div className="mt-4 flex items-start justify-between gap-4">
                <div>
                  <h3 className="display text-3xl">{p.name}</h3>
                  <p className="mt-1 text-sm text-ink/60">{p.kicker}</p>
                </div>
                <span className="eyebrow pt-2 text-ink/40">{String(i + 1).padStart(2, "0")}</span>
              </div>
            </Link>
          ))}
          <Link href="/parks" className="flex w-[60vw] shrink-0 items-center justify-center rounded-[3px] border border-ink/15 sm:w-[30vw] lg:w-[22vw]" data-cursor="All">
            <span className="display text-center text-4xl">
              See all<br /><span className="display-italic text-sun">fourteen</span> →
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
