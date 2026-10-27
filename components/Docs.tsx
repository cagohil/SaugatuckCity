"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { documents } from "@/lib/content";

const groups = ["All", "Services", "Finance", "Planning"] as const;

export default function Docs({ limit }: { limit?: number }) {
  const [g, setG] = useState<(typeof groups)[number]>("All");
  const list = documents.filter((d) => g === "All" || d.group === g).slice(0, limit);
  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-2" role="tablist" aria-label="Filter documents">
        {groups.map((x) => (
          <button
            key={x}
            role="tab"
            aria-selected={g === x}
            onClick={() => setG(x)}
            className={`relative rounded-full px-4 py-2 text-sm transition-colors ${g === x ? "text-paper" : "text-ink/70 hover:text-ink"}`}
          >
            {g === x && <motion.span layoutId="doc-pill" className="absolute inset-0 rounded-full bg-ink" transition={{ type: "spring", stiffness: 400, damping: 34 }} />}
            <span className="relative">{x}</span>
          </button>
        ))}
      </div>
      <ul className="border-t border-ink/12">
        {list.map((d) => (
          <motion.li layout key={d.title} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="border-b border-ink/12">
            <a
              href={d.href}
              target="_blank"
              rel="noreferrer"
              className="group relative flex items-center gap-4 overflow-hidden py-4 pr-2"
            >
              <span className="absolute inset-0 origin-bottom scale-y-0 bg-sun transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-y-100" />
              <span className="eyebrow relative w-16 shrink-0 text-ink/40 transition-colors group-hover:text-paper/70">{d.type}</span>
              <span className="relative flex-1 text-lg transition-[color,transform] duration-500 group-hover:translate-x-2 group-hover:text-paper">{d.title}</span>
              <span className="eyebrow relative hidden text-ink/40 transition-colors group-hover:text-paper/70 sm:inline">{d.group}</span>
              <span className="relative -translate-x-2 text-xl opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:text-paper group-hover:opacity-100">↗</span>
            </a>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
