"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { useState } from "react";
import Photo from "../Photo";
import { SplitReveal } from "../Reveal";

const shores = [
  { tag: "Lakeshore", title: "The Lake", line: "Oval Beach & the open horizon", image: "dsc-4505-saugatuck-kimzahnow.jpg", href: "/parks/oval-beach" },
  { tag: "Riverfront", title: "The River", line: "Ferry, gazebos & boardwalks", image: "dsc-6579-kimzahnow-saugatuck.jpg", href: "/parks?tag=Riverfront" },
  { tag: "Wild", title: "The Dunes", line: "Baldhead, preserves & trails", image: "dsc-2632-saugatuck-kimzahnow.jpg", href: "/parks?tag=Wild" },
  { tag: "Downtown", title: "The Village", line: "Squares, roses & galleries", image: "dsc-7188-village-square.jpg", href: "/parks?tag=Downtown" },
];

export default function Shores() {
  const [active, setActive] = useState(0);
  return (
    <section className="px-gutter pb-28 md:pb-40">
      <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="eyebrow mb-5 text-ink/50">(02) — Four ways in</p>
          <SplitReveal text={"Choose your\n*shoreline.*"} className="display text-[clamp(2.8rem,7vw,7rem)]" />
        </div>
        <p className="max-w-sm text-ink/70">
          Fourteen parks, preserves and landmarks spread between the lake, the river, the dunes and a walkable downtown. Hover to wander.
        </p>
      </div>

      <div className="flex h-[78vh] min-h-[520px] flex-col gap-2 md:flex-row">
        {shores.map((s, i) => {
          const on = active === i;
          return (
            <motion.div
              key={s.tag}
              layout
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              className="relative overflow-hidden rounded-[3px] bg-ink"
              animate={{ flexGrow: on ? 5 : 1 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              style={{ flexBasis: 0 }}
            >
              <Link href={s.href} className="absolute inset-0 block" data-cursor="Explore">
                <motion.div className="absolute inset-0" animate={{ scale: on ? 1 : 1.18 }} transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}>
                  <Photo src={s.image} alt={s.title} className="h-full w-full" tone="dark" />
                </motion.div>
                <div className={`absolute inset-0 transition-colors duration-700 ${on ? "bg-ink/25" : "bg-ink/60"}`} />
                <div className="absolute inset-0 flex flex-col justify-between p-5 text-paper md:p-7">
                  <span className="eyebrow">0{i + 1} · {s.tag}</span>
                  <div>
                    <h3 className={`display whitespace-nowrap transition-all duration-700 ${on ? "text-[clamp(2.5rem,5.5vw,5.5rem)]" : "text-3xl md:[writing-mode:vertical-rl] md:rotate-180"}`}>
                      {s.title}
                    </h3>
                    <motion.p
                      className="mt-2 text-paper/80"
                      animate={{ opacity: on ? 1 : 0, y: on ? 0 : 12 }}
                      transition={{ duration: 0.6, delay: on ? 0.25 : 0 }}
                    >
                      {s.line} →
                    </motion.p>
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
