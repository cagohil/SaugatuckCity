"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { useEffect, useState } from "react";
import Mark from "./Mark";
import Photo from "./Photo";
import { useSaugatuckClock } from "./useLocal";
import { useLenis } from "./SmoothScroll";

const links = [
  { href: "/", label: "Home", note: "Welcome · River meets the lake", image: "dsc-3807-ovalbeach-zahnow.jpg" },
  { href: "/parks", label: "Parks & Beaches", note: "14 places", image: "dsc-4505-saugatuck-kimzahnow.jpg" },
  { href: "/visit", label: "Plan a Visit", note: "Passes · Ferry · Getting here", image: "dsc-6333-kimzahnow-saugatuck.jpg" },
  { href: "/history", label: "History", note: "Since 1868", image: "editor/village-hall-1929.jpg?1609181634" },
  { href: "/city-hall", label: "City Hall", note: "Services · Meetings · Documents", image: "dsc-7788.jpg" },
];

const darkHeroRoutes = (p: string) => p === "/" || /^\/parks\/.+/.test(p);

export default function Nav() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(0);
  const { time } = useSaugatuckClock();
  const lenis = useLenis();

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(y > prev && y > 240 && !open);
    setSolid(y > window.innerHeight * 0.75);
  });

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (open) lenis?.stop();
    else lenis?.start();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, lenis]);

  const onDark = (darkHeroRoutes(pathname) && !solid) || open;

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-50"
        animate={{ y: hidden ? "-110%" : "0%" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div
          className={`px-gutter flex items-center justify-between py-4 transition-colors duration-500 ${
            onDark ? "text-paper" : "text-ink"
          } ${solid && !open ? "bg-paper/80 backdrop-blur-xl shadow-[0_1px_0_rgba(18,32,29,0.08)]" : ""}`}
        >
          <Link href="/" className="group flex items-center gap-3" aria-label="City of Saugatuck — home">
            <Mark className="h-9 w-9 transition-transform duration-700 group-hover:rotate-[-18deg]" />
            <span className="leading-none">
              <span className="eyebrow block opacity-70">City of</span>
              <span className="display text-[1.55rem] tracking-tight">Saugatuck</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {links.map((l) => {
              const active = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`link-underline text-sm ${active ? "text-sun font-medium" : ""}`}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-5">
            <span className="eyebrow hidden opacity-70 md:inline" suppressHydrationWarning>
              Saugatuck · {time}
            </span>
            <button
              onClick={() => setOpen((o) => !o)}
              className={`group relative flex h-11 items-center gap-3 rounded-full border px-5 text-sm transition-colors ${
                onDark ? "border-paper/30 hover:bg-paper hover:text-ink" : "border-ink/20 hover:bg-ink hover:text-paper"
              }`}
              aria-expanded={open}
              aria-controls="site-menu"
            >
              <span>{open ? "Close" : "Menu"}</span>
              <span className="relative block h-2.5 w-4">
                <span className={`absolute left-0 h-px w-full bg-current transition-all duration-500 ${open ? "top-1/2 rotate-45" : "top-0"}`} />
                <span className={`absolute left-0 h-px w-full bg-current transition-all duration-500 ${open ? "top-1/2 -rotate-45" : "top-full"}`} />
              </span>
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="site-menu"
            className="fixed inset-0 z-40 bg-ink text-paper"
            initial={{ clipPath: "circle(0% at 95% 4%)" }}
            animate={{ clipPath: "circle(150% at 95% 4%)" }}
            exit={{ clipPath: "circle(0% at 95% 4%)" }}
            transition={{ duration: 0.9, ease: [0.83, 0, 0.17, 1] }}
          >
            <div className="px-gutter grid h-full grid-cols-12 gap-6 pb-10 pt-28">
              <ul className="col-span-12 flex flex-col justify-center lg:col-span-7">
                {links.map((l, i) => (
                  <li key={l.href} className="border-b border-paper/10" onMouseEnter={() => setHover(i)}>
                    <Link href={l.href} className="group flex items-baseline gap-6 py-4 md:py-5">
                      <span className="eyebrow text-paper/40">0{i + 1}</span>
                      <span className="overflow-hidden">
                        <motion.span
                          className="display block text-[clamp(2.6rem,7vw,6.5rem)] transition-[color,transform] duration-500 group-hover:translate-x-4 group-hover:text-sun"
                          initial={{ y: "100%" }}
                          animate={{ y: "0%" }}
                          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.25 + i * 0.07 }}
                        >
                          {l.label}
                        </motion.span>
                      </span>
                      <span className="eyebrow ml-auto hidden text-paper/40 md:block">{l.note}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="relative col-span-5 hidden overflow-hidden rounded-[2px] lg:block">
                <AnimatePresence mode="popLayout">
                  <motion.div
                    key={hover}
                    className="absolute inset-0"
                    initial={{ clipPath: "inset(100% 0 0 0)", scale: 1.15 }}
                    animate={{ clipPath: "inset(0% 0 0 0)", scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Photo src={links[hover].image} alt={links[hover].label} className="h-full w-full" />
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="col-span-12 flex flex-wrap items-end justify-between gap-4 eyebrow text-paper/50">
                <span>102 Butler St · Saugatuck, MI 49453</span>
                <a href="tel:+12698572603" className="link-underline">(269) 857-2603</a>
                <span>Mon–Fri · 8:30 – 5:00</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
