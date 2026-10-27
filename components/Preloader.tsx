"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { markIntroDone } from "./intro";

const ease = [0.83, 0, 0.17, 1] as const;

// First-visit intro: coordinates count in, then the curtain lifts on the river.
export default function Preloader() {
  const [show, setShow] = useState(true);
  const [n, setN] = useState(0);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem("sgk-intro") === "1";
      sessionStorage.setItem("sgk-intro", "1");
    } catch {}
    if (seen || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShow(false);
      markIntroDone();
      return;
    }
    document.documentElement.style.overflow = "hidden";
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / 1500);
      setN(Math.round((1 - Math.pow(1 - p, 3)) * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setTimeout(() => setShow(false), 250);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (!show) {
      document.documentElement.style.overflow = "";
      setTimeout(markIntroDone, 350);
    }
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[80] flex flex-col justify-between bg-ink px-gutter py-6 text-paper"
          exit={{ clipPath: "inset(0% 0% 100% 0%)" }}
          initial={{ clipPath: "inset(0% 0% 0% 0%)" }}
          transition={{ duration: 1.1, ease }}
        >
          <div className="flex justify-between eyebrow text-paper/60">
            <span>42.6556° N</span>
            <span>Est. 1868</span>
            <span>86.2034° W</span>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              className="display text-[clamp(3.5rem,15vw,15rem)] text-center"
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              Saugatuck
            </motion.h1>
          </div>
          <div className="flex items-end justify-between">
            <span className="eyebrow text-paper/60">The Art Coast of Michigan</span>
            <span className="display text-6xl tabular-nums md:text-8xl">
              {n}
              <span className="text-sun">%</span>
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
