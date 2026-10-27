"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { LOGO, city, partners } from "@/lib/content";
import { useSaugatuckClock } from "./useLocal";
import Magnetic from "./Magnetic";

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const y = useTransform(scrollYProgress, [0, 1], ["35%", "0%"]);
  const { time, open } = useSaugatuckClock();

  return (
    <footer ref={ref} className="relative overflow-hidden bg-ink text-paper">
      <div className="px-gutter grid grid-cols-12 gap-y-12 gap-x-6 pt-24 pb-10">
        <div className="col-span-12 md:col-span-5">
          <p className="eyebrow text-paper/50">City Hall</p>
          <address className="mt-5 not-italic display text-3xl leading-tight md:text-4xl">
            {city.address}
            <br />
            {city.po}
            <br />
            {city.locality}
          </address>
          <p className="mt-4 text-sm text-paper/50">Please include the PO Box on all mail.</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span
              className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 eyebrow ${
                open ? "border-grass/60 text-[#c9d19a]" : "border-paper/20 text-paper/60"
              }`}
              suppressHydrationWarning
            >
              <span className={`h-1.5 w-1.5 rounded-full ${open ? "bg-[#c9d19a] animate-pulse" : "bg-paper/40"}`} />
              {open === null ? "Checking hours" : open ? "Open now" : "Closed now"} · {time}
            </span>
            <span className="eyebrow text-paper/50">{city.hours}</span>
          </div>
        </div>

        <div className="col-span-6 md:col-span-2">
          <p className="eyebrow text-paper/50">Call</p>
          <ul className="mt-5 space-y-3 text-sm">
            <li><a className="link-underline" href={city.phoneHref}>City Hall<br /><span className="text-paper/60">{city.phone}</span></a></li>
            <li><a className="link-underline" href={city.dpwPhoneHref}>Public Works<br /><span className="text-paper/60">{city.dpwPhone}</span></a></li>
          </ul>
        </div>

        <div className="col-span-6 md:col-span-2">
          <p className="eyebrow text-paper/50">Explore</p>
          <ul className="mt-5 space-y-2 text-sm">
            <li><Link className="link-underline" href="/">Home</Link></li>
            <li><Link className="link-underline" href="/parks">Parks & Beaches</Link></li>
            <li><Link className="link-underline" href="/visit">Plan a Visit</Link></li>
            <li><Link className="link-underline" href="/history">History</Link></li>
            <li><Link className="link-underline" href="/city-hall">City Hall</Link></li>
            <li><a className="link-underline" href={city.facebook} target="_blank" rel="noreferrer">Facebook ↗</a></li>
          </ul>
        </div>

        <div className="col-span-12 md:col-span-3">
          <p className="eyebrow text-paper/50">Neighbors</p>
          <ul className="mt-5 space-y-2 text-sm">
            {partners.map((p) => (
              <li key={p.name}>
                <a className="link-underline" href={p.href} target="_blank" rel="noreferrer">{p.name} ↗</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="px-gutter relative pb-[4vw]">
        <motion.div style={{ y }} className="select-none">
          <p className="display whitespace-nowrap text-center text-[21.5vw] leading-[0.78] text-paper">
            Saugat<span className="display-italic text-sun">u</span>ck
          </p>
        </motion.div>
      </div>

      <div className="px-gutter flex flex-col items-start justify-between gap-6 border-t border-paper/10 py-6 md:flex-row md:items-center">
        <div className="flex items-center gap-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={LOGO} alt="City of Saugatuck seal" className="h-12 w-auto rounded-sm bg-paper p-1" loading="lazy" onError={(e) => (e.currentTarget.style.display = "none")} />
          <p className="max-w-md text-xs text-paper/50">
            © {new Date().getFullYear()} City of Saugatuck. All images are used with explicit permission. Content from saugatuckcity.com.
          </p>
        </div>
        <Magnetic>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="eyebrow rounded-full border border-paper/20 px-5 py-3 hover:bg-paper hover:text-ink transition-colors"
          >
            Back to top ↑
          </button>
        </Magnetic>
      </div>
    </footer>
  );
}
