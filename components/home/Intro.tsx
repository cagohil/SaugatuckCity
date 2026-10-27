"use client";

import Link from "next/link";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { useRef } from "react";
import Magnetic from "../Magnetic";

const copy =
  "Saugatuck has drawn painters, sailors and sun-seekers to this bend of the Kalamazoo River for over a century. Climb the dune, ride the last hand-cranked chain ferry in America, and stay for a sunset over one of the world's great beaches.";

export default function Intro() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.45"] });
  const words = copy.split(" ");

  return (
    <section className="px-gutter relative grid grid-cols-12 gap-6 py-28 md:py-40">
      <div className="col-span-12 md:col-span-3">
        <p className="eyebrow text-ink/50">(01) — Welcome</p>
      </div>
      <div ref={ref} className="col-span-12 md:col-span-9">
        <p className="display text-[clamp(1.9rem,4.2vw,4.1rem)] leading-[1.04]">
          {words.map((w, i) => (
            <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>
              {w}
            </Word>
          ))}
        </p>
        <div className="mt-14 flex flex-wrap items-center gap-10">
          <Badge />
          <div className="max-w-xs text-sm text-ink/70">
            Oval Beach was named one of the <strong className="font-medium text-ink">Top 25 Beaches in the World</strong> by Condé Nast Traveler.
            <div className="mt-4">
              <Magnetic>
                <Link href="/parks/oval-beach" className="inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3 text-paper transition-colors hover:bg-sun">
                  Visit Oval Beach <span aria-hidden>→</span>
                </Link>
              </Magnetic>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Word({ children, progress, range }: { children: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  return (
    <motion.span style={{ opacity }} className="inline">
      {children}{" "}
    </motion.span>
  );
}

function Badge() {
  const text = "TOP 25 BEACHES IN THE WORLD · CONDÉ NAST TRAVELER · ";
  return (
    <div className="relative h-36 w-36 shrink-0">
      <motion.svg
        viewBox="0 0 200 200"
        className="absolute inset-0 h-full w-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
        aria-label="Top 25 Beaches in the World — Condé Nast Traveler"
      >
        <defs>
          <path id="circ" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
        </defs>
        <text className="fill-ink" style={{ fontFamily: "var(--font-mono)", fontSize: 12.6, letterSpacing: 2.2 }}>
          <textPath href="#circ">{text}</textPath>
        </text>
      </motion.svg>
      <div className="absolute inset-0 m-auto flex h-20 w-20 items-center justify-center rounded-full bg-sun text-paper">
        <span className="display text-4xl">25</span>
      </div>
    </div>
  );
}
