"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Photo from "../Photo";
import { SplitReveal } from "../Reveal";
import { useIntroDone } from "../intro";
import { describe, useConditions, useSaugatuckClock } from "../useLocal";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const ready = useIntroDone();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const fade = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const { time } = useSaugatuckClock();
  const c = useConditions();

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[640px] overflow-hidden bg-ink text-paper">
      <motion.div className="absolute inset-0" style={{ y: imgY, scale: imgScale }}>
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease }}
        >
          <Photo src="dsc-3807-ovalbeach-zahnow.jpg" alt="Oval Beach at the mouth of the Kalamazoo River" className="h-full w-full" tone="dark" priority />
        </motion.div>
      </motion.div>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,32,29,0.55)_0%,rgba(18,32,29,0)_28%,rgba(18,32,29,0)_50%,rgba(18,32,29,0.85)_100%)]" />

      <motion.div style={{ y: textY, opacity: fade }} className="px-gutter relative flex h-full flex-col justify-end pb-28 md:pb-32">
        <motion.p
          className="eyebrow mb-6 flex items-center gap-3 text-paper/80"
          initial={{ opacity: 0, x: -20 }}
          animate={ready ? { opacity: 1, x: 0 } : undefined}
          transition={{ duration: 1, ease, delay: 0.5 }}
        >
          <span className="h-px w-10 bg-sun" /> Saugatuck, Michigan · Est. 1868
        </motion.p>
        <SplitReveal
          as="h1"
          play={ready}
          delay={0.35}
          text={"Where the river\nmeets *the* *lake.*"}
          className="display max-w-[14ch] text-[clamp(3.4rem,10.5vw,11.5rem)]"
        />
        <motion.p
          className="mt-8 max-w-md text-base text-paper/80 md:absolute md:right-[var(--gutter)] md:bottom-36 md:mt-0 md:max-w-sm md:text-right"
          initial={{ opacity: 0, y: 20 }}
          animate={ready ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 1, ease, delay: 1.1 }}
        >
          For more than a century, a Midwest destination for artists, beachgoers and nature lovers. The official home of the City of Saugatuck.
        </motion.p>
      </motion.div>

      <motion.div
        className="absolute inset-x-0 bottom-0 border-t border-paper/15 bg-ink/30 backdrop-blur-md"
        initial={{ y: "100%" }}
        animate={ready ? { y: "0%" } : undefined}
        transition={{ duration: 1.1, ease, delay: 1.2 }}
      >
        <div className="px-gutter flex items-center gap-6 overflow-x-auto py-4 eyebrow text-paper/80 [scrollbar-width:none]">
          <span className="flex shrink-0 items-center gap-2 text-paper">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-ember" />
            </span>
            Live from Saugatuck
          </span>
          <Item k="Local" v={time} />
          <Item k="Air" v={c ? `${c.temp}°F · ${describe(c.code)}` : "—"} />
          <Item k="Wind" v={c ? `${c.wind} mph` : "—"} />
          <Item k="Sunset" v={c ? c.sunset : "—"} />
          <Item k="Beach season" v="Memorial Day – Labor Day" />
          <span className="ml-auto hidden shrink-0 items-center gap-2 md:flex">
            Scroll
            <motion.span animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>↓</motion.span>
          </span>
        </div>
      </motion.div>
    </section>
  );
}

function Item({ k, v }: { k: string; v: string }) {
  return (
    <span className="flex shrink-0 items-center gap-2" suppressHydrationWarning>
      <span className="text-paper/45">{k}</span>
      <span className="text-paper">{v}</span>
    </span>
  );
}
