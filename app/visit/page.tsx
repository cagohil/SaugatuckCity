import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Photo from "@/components/Photo";
import { ClipReveal, FadeUp } from "@/components/Reveal";
import { img } from "@/lib/content";

export const metadata: Metadata = { title: "Plan a Visit" };

const passes = [
  { name: "Day pass", price: "$15", note: "Sold at the beach", feature: false },
  { name: "Season pass", price: "$75", note: "At City Hall or the beach", feature: true },
  { name: "City taxpayer", price: "$20", note: "Season · City Hall only", feature: false },
];

const bus = [
  { who: "Adults & ages 12+", fare: "$1.00" },
  { who: "Seniors 62+", fare: "$0.50" },
  { who: "Children under 12", fare: "$0.50" },
  { who: "Persons with disabilities", fare: "$0.50" },
];

const district = [
  "Buy from a participating bar or restaurant — no outside alcohol",
  "Drinks come in marked, non-glass cups of 16 oz or less",
  "Stay inside the commons area; don't carry drinks into another business",
  "Look for the Social District decal before stepping into a shop",
];

export default function VisitPage() {
  return (
    <>
      <PageHeader
        index="02"
        eyebrow="Plan a visit"
        title={"Sand in your shoes,\n*sorted.*"}
        intro="Beach passes, ferry fares, the Interurban and the house rules that keep Saugatuck lovely. Everything you need before you go."
      />

      <section className="px-gutter grid grid-cols-12 gap-6 pb-28">
        <ClipReveal className="col-span-12 md:col-span-7">
          <Photo src="dsc-1760saugatuck-zahnow.jpg" alt="Oval Beach on Lake Michigan" className="aspect-[16/11] w-full rounded-[3px]" />
        </ClipReveal>
        <div className="col-span-12 flex flex-col justify-end md:col-span-5">
          <p className="eyebrow text-ink/50">Oval Beach passes</p>
          <h2 className="display mt-4 text-5xl md:text-6xl">Memorial Day to Labor Day.</h2>
          <p className="mt-4 text-ink/70">The park is open 8 am – 10 pm year-round. Passes are needed during beach season. There are no lifeguards, so swim at your own risk.</p>
        </div>
        <div className="col-span-12 mt-6 grid grid-cols-1 gap-3 md:grid-cols-3">
          {passes.map((p, i) => (
            <FadeUp key={p.name} delay={i * 0.08}>
              <div className={`group relative overflow-hidden rounded-[3px] p-8 transition-transform duration-700 hover:-translate-y-1 ${p.feature ? "bg-sun text-paper" : "bg-paper-2"}`}>
                <p className="eyebrow opacity-70">{p.name}</p>
                <p className="display mt-6 text-7xl">{p.price}</p>
                <p className="mt-4 text-sm opacity-80">{p.note}</p>
                <svg viewBox="0 0 100 20" className="absolute -bottom-1 left-0 w-full opacity-20 transition-transform duration-[1200ms] group-hover:-translate-x-6" aria-hidden preserveAspectRatio="none">
                  <path d="M0 10 Q 12.5 0 25 10 T 50 10 T 75 10 T 100 10 T 125 10 V20 H0Z" fill="currentColor" />
                </svg>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      <section className="bg-ink py-28 text-paper">
        <div className="px-gutter grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-5">
            <p className="eyebrow text-paper/50">Getting to the beach</p>
            <h2 className="display mt-4 text-5xl md:text-6xl">
              Leave the car. <span className="display-italic text-sun">Take the long way.</span>
            </h2>
            <p className="mt-6 max-w-md text-paper/70">
              Beach lots fill up at peak summer hours. Walk or bike, ride the Interurban, or cross the river on the Chain Ferry and climb Mt. Baldhead&apos;s 303 steps — or follow the John Woollam Trail through the woods.
            </p>
          </div>
          <div className="col-span-12 grid gap-3 md:col-span-6 md:col-start-7">
            {[
              { n: "01", t: "Chain Ferry", d: "528 Water St. · $3 adults, $1 kids 10 & under · every 10–15 min", href: "/parks/chain-ferry" },
              { n: "02", t: "Mt. Baldhead", d: "303 steps over the dune and down to the lake", href: "/parks/mt-baldhead-park" },
              { n: "03", t: "John Woollam Trail", d: "Wooded path from the ferry landing to Oval Beach", href: "/parks/john-woollam-trail" },
            ].map((r) => (
              <Link key={r.n} href={r.href} className="group flex items-center gap-6 border-b border-paper/15 py-5">
                <span className="eyebrow text-sun">{r.n}</span>
                <span className="flex-1">
                  <span className="display block text-3xl transition-transform duration-500 group-hover:translate-x-2">{r.t}</span>
                  <span className="text-sm text-paper/60">{r.d}</span>
                </span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            ))}
            <div className="mt-6 rounded-[3px] border border-paper/15 p-6">
              <p className="eyebrow text-paper/50">Interurban bus fares</p>
              <ul className="mt-4 grid grid-cols-2 gap-4">
                {bus.map((b) => (
                  <li key={b.who}>
                    <p className="display text-3xl">{b.fare}</p>
                    <p className="text-sm text-paper/60">{b.who}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="px-gutter grid grid-cols-12 gap-6 py-28">
        <div className="col-span-12 md:col-span-5">
          <p className="eyebrow text-ink/50">Social District · since April 2022</p>
          <h2 className="display mt-4 text-5xl md:text-6xl">
            Drink in hand, <span className="display-italic text-sun">downtown.</span>
          </h2>
          <p className="mt-6 max-w-md text-ink/70">Saugatuck&apos;s Social District lets you stroll the commons area year-round with a drink from a participating business.</p>
          <a href="https://www.saugatuckcity.com/social-district.html" target="_blank" rel="noreferrer" className="mt-6 inline-block eyebrow link-underline">Map of participants ↗</a>
        </div>
        <ol className="col-span-12 md:col-span-6 md:col-start-7">
          {district.map((d, i) => (
            <FadeUp key={d} delay={i * 0.06}>
              <li className="flex gap-6 border-b border-ink/12 py-5">
                <span className="display text-3xl text-sun">{i + 1}</span>
                <span className="text-lg">{d}</span>
              </li>
            </FadeUp>
          ))}
        </ol>
        <div className="col-span-12 mt-10 grid grid-cols-2 gap-3 md:col-span-6 md:col-start-7">
          <Photo src={img("sd-socialdistrict-windowclings-5in-orig_orig.jpg")} alt="Social District window decal" className="aspect-square rounded-[3px]" imgClassName="!object-contain bg-paper-2 p-6" />
          <Photo src={img("new-cvb-updated-signage-18x24-for-labor-day-signage10241024-1_orig.jpg")} alt="Social District map signage" className="aspect-square rounded-[3px]" imgClassName="!object-contain bg-paper-2 p-2" />
        </div>
      </section>

      <section className="px-gutter pb-28">
        <div className="rounded-[3px] bg-lake p-8 text-paper md:p-14">
          <p className="eyebrow text-paper/60">Seasonal reminders · Memorial Day – Sept 30</p>
          <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4">
            {["No dogs at Oval Beach or the Harbor Natural Area", "No fires, grilling or smoking on the beach", "Stay on trails — off the dune grass", "No overnight sleeping or camping in any park"].map((t) => (
              <p key={t} className="display text-2xl leading-tight md:text-3xl">{t}</p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
