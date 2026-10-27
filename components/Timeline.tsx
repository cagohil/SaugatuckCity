"use client";

import { motion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";
import { history } from "@/lib/content";

export default function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.6", "end 0.6"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <div ref={ref} className="relative">
      <div className="absolute left-[calc(var(--gutter)+0.35rem)] top-0 h-full w-px bg-ink/12 md:left-1/2" />
      <motion.div style={{ scaleY }} className="absolute left-[calc(var(--gutter)+0.35rem)] top-0 h-full w-px origin-top bg-sun md:left-1/2" />
      <ol>
        {history.map((h, i) => (
          <li key={h.year} className="px-gutter relative grid grid-cols-12 gap-6 py-14 md:py-20">
            <motion.span
              className="absolute left-[var(--gutter)] top-[4.4rem] h-3 w-3 rounded-full border-2 border-sun bg-paper md:left-[calc(50%-0.35rem)] md:top-[6.2rem]"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ margin: "0px 0px -40% 0px", once: true }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
            />
            <motion.div
              className={`col-span-12 pl-8 md:col-span-5 md:pl-0 ${i % 2 ? "md:col-start-8" : "md:col-start-1 md:text-right"}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -20% 0px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="display text-[clamp(4rem,10vw,9rem)] leading-none text-ink/90">{h.year}</p>
              <h3 className="display-italic mt-2 text-3xl text-sun">{h.title}</h3>
              <p className={`mt-4 max-w-md text-lg text-ink/70 ${i % 2 ? "" : "md:ml-auto"}`}>{h.text}</p>
            </motion.div>
          </li>
        ))}
      </ol>
    </div>
  );
}
