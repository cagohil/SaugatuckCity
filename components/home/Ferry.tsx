"use client";

import Link from "next/link";
import { motion, useMotionValueEvent, useScroll, useSpring, useTransform, type MotionValue } from "motion/react";
import { useRef, useState } from "react";
import { FadeUp } from "../Reveal";

const fares = [
  { who: "Ages 11+", price: "$3" },
  { who: "Ages 10 & under", price: "$1" },
  { who: "Ages 2 & under", price: "Free" },
  { who: "Dogs · bikes · strollers", price: "Free" },
];

export default function Ferry() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const p = useSpring(scrollYProgress, { stiffness: 90, damping: 26 });
  const x = useTransform(p, [0.05, 0.85], ["0%", "100%"]);
  const bob = useTransform(p, (v) => Math.sin(v * 40) * 2);
  const crank = useTransform(p, [0, 1], [0, 1440]);
  const waveX = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
  const [cranks, setCranks] = useState(0);
  useMotionValueEvent(p, "change", (v) => setCranks(Math.max(0, Math.round(v * 60))));

  return (
    <section ref={ref} className="relative h-[260vh] bg-paper">
      <div className="sticky top-0 flex h-[100svh] flex-col justify-center overflow-hidden">
        <div className="px-gutter mb-10 grid grid-cols-12 items-end gap-6">
          <div className="col-span-12 md:col-span-7">
            <p className="eyebrow mb-5 text-ink/50">(04) — The Chain Ferry</p>
            <h2 className="display text-[clamp(2.6rem,6vw,6rem)]">
              Cross by <span className="display-italic text-sun">hand.</span>
            </h2>
          </div>
          <p className="col-span-12 max-w-md text-ink/70 md:col-span-5">
            The ferry <em>Diane</em> is the only hand-cranked chain ferry of its kind left in the United States. A crossing has run here since 1857; departures leave each dock every 10–15 minutes.
          </p>
        </div>

        <div className="relative">
          <div className="px-gutter flex justify-between eyebrow text-ink/60">
            <span>East bank · Water St.</span>
            <span>West bank · Park St.</span>
          </div>
          <div className="relative mt-3 h-44 overflow-hidden bg-lake md:h-56">
            <motion.svg style={{ x: waveX }} className="absolute inset-y-0 left-0 h-full w-[200%]" preserveAspectRatio="none" viewBox="0 0 1200 100" aria-hidden>
              {[18, 38, 58, 78].map((y, i) => (
                <path
                  key={y}
                  d={`M0 ${y} ${Array.from({ length: 24 }, (_, k) => `Q ${k * 50 + 25} ${y + (k % 2 ? 4 : -4)} ${k * 50 + 50} ${y}`).join(" ")}`}
                  stroke="rgba(243,236,224,0.16)"
                  strokeWidth={i % 2 ? 0.6 : 1}
                  fill="none"
                />
              ))}
            </motion.svg>
            <div className="absolute inset-x-0 top-1/2 h-px border-t border-dashed border-paper/50" />
            <div className="absolute inset-y-0 left-0 w-[var(--gutter)] bg-dune" />
            <div className="absolute inset-y-0 right-0 w-[var(--gutter)] bg-grass" />
            <div className="absolute inset-y-0 left-[var(--gutter)] right-[calc(var(--gutter)+min(34vw,240px))]">
              <motion.div className="absolute top-1/2" style={{ left: x, y: bob }}>
                <div className="-translate-y-1/2">
                  <Boat crank={crank} />
                </div>
              </motion.div>
            </div>
          </div>
          <div className="px-gutter mt-3 flex justify-between eyebrow text-ink/50">
            <span>Kalamazoo River</span>
            <span className="tabular-nums">Cranks · {String(cranks).padStart(2, "0")}</span>
          </div>
        </div>

        <div className="px-gutter mt-10 grid grid-cols-2 gap-3 md:grid-cols-5">
          {fares.map((f, i) => (
            <FadeUp key={f.who} delay={i * 0.06}>
              <div className="relative rounded-[3px] border border-ink/12 bg-paper-2/60 p-4 [mask:radial-gradient(circle_at_0_50%,transparent_8px,#000_8.5px)_left/51%_100%_no-repeat,radial-gradient(circle_at_100%_50%,transparent_8px,#000_8.5px)_right/51%_100%_no-repeat]">
                <p className="eyebrow text-ink/50">{f.who}</p>
                <p className="display mt-2 text-4xl">{f.price}</p>
              </div>
            </FadeUp>
          ))}
          <FadeUp delay={0.3} className="col-span-2 md:col-span-1">
            <Link href="/parks/chain-ferry" className="group flex h-full flex-col justify-between rounded-[3px] bg-ink p-4 text-paper transition-colors hover:bg-sun">
              <span className="eyebrow text-paper/60">528 Water St.</span>
              <span className="mt-4 flex items-center justify-between">
                Ferry details <span className="transition-transform group-hover:translate-x-1">→</span>
              </span>
            </Link>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

function Boat({ crank }: { crank: MotionValue<number> }) {
  return (
    <svg viewBox="0 0 240 110" className="w-[min(34vw,240px)]" aria-label="The chain ferry Diane">
      <rect x="10" y="58" width="220" height="26" rx="3" fill="#f3ece0" />
      <rect x="10" y="80" width="220" height="6" fill="#df5f36" />
      <rect x="30" y="22" width="180" height="36" fill="none" stroke="#f3ece0" strokeWidth="3" />
      <path d="M22 22 h196" stroke="#f3ece0" strokeWidth="5" strokeLinecap="round" />
      <text x="120" y="76" textAnchor="middle" fill="#12201d" style={{ font: "600 12px var(--font-mono)", letterSpacing: 4 }}>
        DIANE
      </text>
      <motion.g style={{ rotate: crank, transformBox: "fill-box", transformOrigin: "center" }}>
        <circle cx="120" cy="42" r="11" fill="none" stroke="#df5f36" strokeWidth="3" />
        <path d="M120 31 v22 M109 42 h22" stroke="#df5f36" strokeWidth="3" />
      </motion.g>
    </svg>
  );
}
