import Link from "next/link";
import { city, img } from "@/lib/content";
import Docs from "../Docs";
import ZoomCard from "../ZoomCard";
import { FadeUp, SplitReveal } from "../Reveal";

const tiles = [
  { k: "Trash & Recycling", v: "2026 pickup calendar", href: img("saugatuck_trash___recycling_calendar_2026.pdf") },
  { k: "Brush & Leaf", v: "2026 pickup schedule", href: img("2026_brush_and_leaf_schedule.pdf") },
  { k: "Public Works", v: city.dpwPhone, href: city.dpwPhoneHref },
];

export default function ResidentHub() {
  return (
    <section className="px-gutter py-28 md:py-40">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-5">
          <p className="eyebrow mb-5 text-ink/50">(08) — For residents</p>
          <SplitReveal text={"City Hall,\n*without* the line."} className="display text-[clamp(2.6rem,5.5vw,5.6rem)]" />
          <p className="mt-6 max-w-sm text-ink/70">
            Schedules, budgets, plans and meeting access — the things you came for, one tap away.
          </p>
          <Link href="/city-hall" className="mt-8 inline-flex items-center gap-3 rounded-full border border-ink/20 px-6 py-3 text-sm transition-colors hover:bg-ink hover:text-paper">
            Departments & boards →
          </Link>
        </div>
        <div className="col-span-12 grid grid-cols-1 gap-3 sm:grid-cols-2 md:col-span-7">
          {tiles.map((t, i) => (
            <FadeUp key={t.k} delay={i * 0.06}>
              <a href={t.href} target={t.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="group flex h-full min-h-40 flex-col justify-between rounded-[3px] bg-paper-2 p-6 transition-colors duration-500 hover:bg-lake hover:text-paper">
                <span className="eyebrow opacity-60">{t.k}</span>
                <span className="mt-8 flex items-end justify-between text-xl">
                  {t.v}
                  <span className="transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1">↗</span>
                </span>
              </a>
            </FadeUp>
          ))}
          <FadeUp delay={0.18}>
            <ZoomCard dark />
          </FadeUp>
        </div>
      </div>
      <div className="mt-20 grid grid-cols-12 gap-6">
        <p className="eyebrow col-span-12 text-ink/50 md:col-span-3">Documents & notices</p>
        <div className="col-span-12 md:col-span-9">
          <Docs limit={7} />
        </div>
      </div>
    </section>
  );
}
