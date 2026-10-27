"use client";

import { useState } from "react";
import { city } from "@/lib/content";

export default function ZoomCard({ dark = false }: { dark?: boolean }) {
  const [copied, setCopied] = useState(false);
  return (
    <div className={`flex h-full flex-col justify-between rounded-[3px] p-6 ${dark ? "bg-ink text-paper" : "bg-paper-2"}`}>
      <div>
        <p className={`eyebrow ${dark ? "text-paper/50" : "text-ink/50"}`}>Public meetings</p>
        <p className="mt-3 text-lg leading-snug">Hybrid — in person at City Hall and on Zoom.</p>
      </div>
      <button
        onClick={() => {
          navigator.clipboard?.writeText(city.zoomId.replace(/\s/g, "")).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 1800);
          });
        }}
        className="group mt-8 text-left"
        aria-label="Copy Zoom meeting ID"
      >
        <span className={`eyebrow ${dark ? "text-paper/50" : "text-ink/50"}`}>Zoom meeting ID</span>
        <span className="display mt-1 flex items-center gap-3 text-3xl tabular-nums md:text-4xl">
          {city.zoomId}
          <span className="eyebrow rounded-full border border-current/30 px-2 py-1 opacity-60 transition-opacity group-hover:opacity-100">
            {copied ? "Copied ✓" : "Copy"}
          </span>
        </span>
      </button>
    </div>
  );
}
