"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

// Line-masked word reveal for display headings.
export function SplitReveal({
  text,
  className = "",
  delay = 0,
  as: Tag = "h2",
  stagger = 0.06,
  play = true,
}: {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  stagger?: number;
  play?: boolean;
}) {
  const ref = useRef<HTMLElement>(null);
  const seen = useInView(ref, { once: true, margin: "0px 0px -12% 0px" });
  const inView = seen && play;
  const lines = text.split("\n");
  let i = 0;
  return (
    <Tag ref={ref as never} className={className} aria-label={text.replace(/\n/g, " ").replace(/[*]/g, "")}>
      {lines.map((line, li) => (
        <span key={li} className="block" aria-hidden>
          {line.split(" ").map((word, wi) => {
            const italic = word.startsWith("*");
            const w = word.replace(/\*/g, "");
            const idx = i++;
            return (
              <span key={wi} className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-bottom">
                <motion.span
                  className={`inline-block ${italic ? "display-italic text-sun" : ""}`}
                  initial={{ y: "110%", rotate: 4 }}
                  animate={inView ? { y: "0%", rotate: 0 } : undefined}
                  transition={{ duration: 1.1, ease, delay: delay + idx * stagger }}
                >
                  {w}
                  {wi < line.split(" ").length - 1 ? " " : ""}
                </motion.span>
              </span>
            );
          })}
        </span>
      ))}
    </Tag>
  );
}

export function FadeUp({
  children,
  className = "",
  delay = 0,
  y = 28,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 1, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

// Image that unveils with a clip-path wipe as it enters.
export function ClipReveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      className={className}
      initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 1.4, ease, delay }}
    >
      {children}
    </motion.div>
  );
}
