import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { img, parks } from "@/lib/content";
import ParkHero from "@/components/ParkHero";
import Lightbox from "@/components/Lightbox";
import Photo from "@/components/Photo";
import { FadeUp } from "@/components/Reveal";

export function generateStaticParams() {
  return parks.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = parks.find((x) => x.slug === slug);
  if (!p) return {};
  return { title: p.name, description: p.lede, openGraph: { images: [img(p.images[0])] } };
}

export default async function ParkPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const idx = parks.findIndex((p) => p.slug === slug);
  if (idx < 0) notFound();
  const park = parks[idx];
  const next = parks[(idx + 1) % parks.length];
  const map = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${park.name}, ${park.address}, Saugatuck, MI`)}`;

  return (
    <>
      <ParkHero park={park} />

      <section className="px-gutter grid grid-cols-12 gap-6 py-24 md:py-32">
        <aside className="col-span-12 md:col-span-4">
          <div className="md:sticky md:top-28">
            <p className="eyebrow text-ink/50">At a glance</p>
            <dl className="mt-5 divide-y divide-ink/12 border-y border-ink/12">
              <div className="flex justify-between gap-4 py-3">
                <dt className="text-sm text-ink/60">Where</dt>
                <dd className="text-right text-sm">{park.address}</dd>
              </div>
              {park.facts.map((f) => (
                <div key={f.k} className="flex justify-between gap-4 py-3">
                  <dt className="text-sm text-ink/60">{f.k}</dt>
                  <dd className="text-right text-sm">{f.v}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-6 flex flex-wrap gap-2">
              <a href={map} target="_blank" rel="noreferrer" className="rounded-full bg-ink px-5 py-3 text-sm text-paper transition-colors hover:bg-sun">
                Directions ↗
              </a>
              <a href={park.source} target="_blank" rel="noreferrer" className="rounded-full border border-ink/20 px-5 py-3 text-sm transition-colors hover:bg-ink hover:text-paper">
                Official page ↗
              </a>
            </div>
          </div>
        </aside>

        <article className="col-span-12 md:col-span-7 md:col-start-6">
          {park.body.map((para, i) => (
            <FadeUp key={i} delay={i * 0.05}>
              <p className={i === 0 ? "display text-[clamp(1.7rem,3vw,2.6rem)] leading-[1.12]" : "mt-6 text-lg leading-relaxed text-ink/75"}>{para}</p>
            </FadeUp>
          ))}

          {park.rules && (
            <FadeUp className="mt-14 rounded-[3px] bg-paper-2 p-6 md:p-8">
              <p className="eyebrow text-ink/50">Know before you go</p>
              <ul className="mt-5 space-y-3">
                {park.rules.map((r) => (
                  <li key={r} className="flex gap-3 text-ink/80">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sun" />
                    {r}
                  </li>
                ))}
              </ul>
            </FadeUp>
          )}
        </article>
      </section>

      {park.images.length > 1 && (
        <section className="px-gutter pb-28">
          <p className="eyebrow mb-6 text-ink/50">Photographs · {park.images.length}</p>
          <Lightbox images={park.images} name={park.name} />
        </section>
      )}

      <Link href={`/parks/${next.slug}`} className="group relative block h-[70vh] overflow-hidden bg-ink text-paper" data-cursor="Next">
        <Photo src={next.images[0]} alt={next.name} className="absolute inset-0 h-full w-full opacity-50 transition-opacity duration-700 group-hover:opacity-70" imgClassName="transition-transform duration-[1600ms] group-hover:scale-105" />
        <div className="px-gutter relative flex h-full flex-col justify-end pb-14">
          <p className="eyebrow text-paper/70">Next place</p>
          <p className="display mt-3 text-[clamp(3rem,9vw,9rem)] transition-transform duration-700 group-hover:translate-x-4">
            {next.name} <span className="display-italic text-sun">→</span>
          </p>
        </div>
      </Link>
    </>
  );
}
