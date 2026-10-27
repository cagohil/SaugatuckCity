"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import Photo from "./Photo";
import { FadeUp } from "./Reveal";

export default function Lightbox({ images, name }: { images: string[]; name: string }) {
  const [i, setI] = useState<number | null>(null);

  useEffect(() => {
    if (i === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setI(null);
      if (e.key === "ArrowRight") setI((v) => (v === null ? v : (v + 1) % images.length));
      if (e.key === "ArrowLeft") setI((v) => (v === null ? v : (v - 1 + images.length) % images.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [i, images.length]);

  if (images.length < 2) return null;

  return (
    <>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-6 md:gap-4">
        {images.slice(1).map((src, k) => (
          <FadeUp
            key={src}
            delay={(k % 3) * 0.06}
            className={[
              "md:col-span-4 md:row-span-2",
              "md:col-span-2",
              "md:col-span-2",
              "md:col-span-3",
              "md:col-span-3",
              "md:col-span-2",
              "md:col-span-4",
            ][k % 7]}
          >
            <button onClick={() => setI(k + 1)} className="group block h-full w-full overflow-hidden rounded-[3px]" data-cursor="View" aria-label={`Open photo ${k + 2} of ${name}`}>
              <Photo src={src} alt={`${name}, photo ${k + 2}`} className="aspect-[4/3] h-full w-full" imgClassName="transition-transform duration-[1200ms] group-hover:scale-105" />
            </button>
          </FadeUp>
        ))}
      </div>
      <AnimatePresence>
        {i !== null && (
          <motion.div
            className="fixed inset-0 z-[65] flex items-center justify-center bg-ink/95 p-4 backdrop-blur md:p-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setI(null)}
            role="dialog"
            aria-modal
            aria-label={`${name} gallery`}
          >
            <motion.div key={i} initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }} className="relative h-full max-h-[85vh] w-full max-w-6xl">
              <Photo src={images[i]} alt={`${name}, photo ${i + 1}`} className="h-full w-full" imgClassName="!object-contain" />
            </motion.div>
            <div className="absolute inset-x-0 bottom-6 flex items-center justify-center gap-6 eyebrow text-paper">
              <button onClick={(e) => { e.stopPropagation(); setI((i - 1 + images.length) % images.length); }} className="rounded-full border border-paper/30 px-4 py-2 hover:bg-paper hover:text-ink">← Prev</button>
              <span className="tabular-nums">{i + 1} / {images.length}</span>
              <button onClick={(e) => { e.stopPropagation(); setI((i + 1) % images.length); }} className="rounded-full border border-paper/30 px-4 py-2 hover:bg-paper hover:text-ink">Next →</button>
            </div>
            <button onClick={() => setI(null)} className="absolute right-6 top-6 eyebrow text-paper">Close ✕</button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
