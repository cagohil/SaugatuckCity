"use client";

import Link from "next/link";
import { motion, useMotionValueEvent, useScroll, useSpring, useTransform } from "motion/react";
import { useRef, useState } from "react";
import Photo from "../Photo";

// A zig-zag staircase drawn up the dune; scroll is the climb.
const flights = 9;
const stair = (() => {
  let d = "M 20 380";
  let x = 20;
  let y = 380;
  for (let f = 0; f < flights; f++) {
    const dir = f % 2 === 0 ? 1 : -1;
    for (let s = 0; s < 6; s++) {
      x += dir * 9;
      d += ` L ${x} ${y}`;
      y -= 6.4;
      d += ` L ${x} ${y}`;
    }
    x += dir * 6;
    d += ` L ${x} ${y}`;
  }
  return d;
})();

export default function Baldhead() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const p = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });
  const [steps, setSteps] = useState(0);
  useMotionValueEvent(p, "change", (v) => setSteps(Math.round(Math.min(1, Math.max(0, v)) * 303)));
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const sky = useTransform(scrollYProgress, [0, 1], ["#1d4a55", "#df5f36"]);

  const feet = Math.round((steps / 303) * 250);

  return (
    <section ref={ref} className="relative h-[320vh] bg-ink text-paper">
      <div className="sticky top-0 grid h-[100svh] grid-cols-12 overflow-hidden">
        <div className="px-gutter relative z-10 col-span-12 flex flex-col justify-between py-24 md:col-span-6 md:py-28">
          <div>
            <p className="eyebrow text-paper/50">(03) — Mt. Baldhead Park</p>
            <h2 className="display mt-6 text-[clamp(2.6rem,5.5vw,5.6rem)]">
              Earn the <span className="display-italic text-sun">view.</span>
            </h2>
            <p className="mt-6 max-w-md text-paper/70">
              303 wooden steps, rebuilt in 2010, climb roughly 250 feet up a protected 100-acre dune to an observation deck over the river valley and Lake Michigan.
            </p>
          </div>

          <div className="flex items-end gap-10">
            <div>
              <p className="eyebrow text-paper/50">Steps climbed</p>
              <p className="display tabular-nums text-[clamp(5rem,13vw,13rem)] leading-none">
                {String(steps).padStart(3, "0")}
              </p>
            </div>
            <div className="pb-4">
              <p className="eyebrow text-paper/50">Elevation</p>
              <p className="display text-4xl tabular-nums md:text-5xl">+{feet} ft</p>
              <div className="mt-3 h-1 w-40 overflow-hidden rounded bg-paper/15">
                <motion.div className="h-full origin-left bg-sun" style={{ scaleX: p }} />
              </div>
            </div>
          </div>
          <Link href="/parks/mt-baldhead-park" className="eyebrow link-underline self-start text-paper/80">
            Park details, hours & rules →
          </Link>
        </div>

        <motion.div className="absolute inset-0 opacity-30 md:relative md:col-span-6 md:opacity-100" style={{ backgroundColor: sky }}>
          <motion.div className="absolute inset-[-10%]" style={{ y: imgY }}>
            <Photo src="dsc-2911-saugatuck-kimzahnow.jpg" alt="Dunes near Mt. Baldhead" className="h-full w-full mix-blend-luminosity opacity-60" />
          </motion.div>
          <svg viewBox="0 0 160 400" className="absolute inset-y-[8%] right-[12%] h-[84%] w-auto" aria-hidden>
            <path d={stair} fill="none" stroke="rgba(243,236,224,0.18)" strokeWidth="2" />
            <motion.path d={stair} fill="none" stroke="#f3ece0" strokeWidth="2.4" style={{ pathLength: p }} />
            <rect x="0" y="0" width="160" height="18" fill="none" />
          </svg>
          <div className="absolute right-[6%] top-[7%] eyebrow text-paper/80">Observation deck ↑</div>
        </motion.div>
      </div>
    </section>
  );
}
