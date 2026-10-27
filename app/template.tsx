"use client";

import { motion } from "motion/react";

const ease = [0.83, 0, 0.17, 1] as const;

// Each navigation sweeps a sand-coloured panel up and off the new page.
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[55] origin-top bg-lake"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 0.9, ease, delay: 0.05 }}
      />
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}>
        {children}
      </motion.div>
    </>
  );
}
