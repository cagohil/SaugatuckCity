"use client";

import { useSaugatuckClock } from "./useLocal";

export default function OpenStatus() {
  const { time, open } = useSaugatuckClock();
  return (
    <span className="inline-flex items-center gap-2 eyebrow" suppressHydrationWarning>
      <span className={`h-2 w-2 rounded-full ${open ? "animate-pulse bg-[#c9d19a]" : "bg-paper/40"}`} />
      {open === null ? "Checking…" : open ? "Open now" : "Closed now"} · {time} local
    </span>
  );
}
