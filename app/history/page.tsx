import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Photo from "@/components/Photo";
import Timeline from "@/components/Timeline";
import { ClipReveal } from "@/components/Reveal";
import { parks } from "@/lib/content";

export const metadata: Metadata = { title: "History" };

export default function HistoryPage() {
  const oval = parks.find((p) => p.slug === "oval-beach")!;
  return (
    <>
      <PageHeader
        index="03"
        eyebrow="History"
        title={"Spared by fire,\nshaped by *water.*"}
        intro="From a river crossing in 1857 to a protected dune coast today: the milestones of the village that became the City of Saugatuck, and of the hall on Butler Street that has watched it all."
      />
      <section className="px-gutter grid grid-cols-12 gap-6 pb-10">
        <ClipReveal className="col-span-12 md:col-span-8">
          <Photo src="editor/village-hall-1929.jpg?1609181634" alt="Saugatuck Village Hall in 1929" className="aspect-[16/10] w-full rounded-[3px]" imgClassName="sepia-[.3]" />
        </ClipReveal>
        <div className="col-span-12 flex flex-col justify-end md:col-span-4">
          <p className="eyebrow text-ink/50">Village Hall, 1929</p>
          <p className="mt-3 text-ink/70">
            Built around 1880 as fire house, council chamber, hall and jail, the building at 102 Butler Street is still City Hall. It joined the Michigan State Register of Historic Sites in 1990.
          </p>
          <p className="mt-3 eyebrow text-ink/40">Photo courtesy Saugatuck Douglas History Center</p>
        </div>
      </section>
      <Timeline />
      <section className="px-gutter grid grid-cols-12 gap-6 py-28">
        <p className="eyebrow col-span-12 text-ink/50 md:col-span-3">Oval Beach, then</p>
        <div className="col-span-12 grid grid-cols-2 gap-3 md:col-span-9">
          {["oval-beach-parking-ca-1939.jpg", "oval-beach-retro-pic.jpg", "89-1-167-oval-beach.jpg", "oval-beach-russ-wilkinson.jpg"].map((src, i) => (
            <ClipReveal key={src} delay={i * 0.08}>
              <Photo src={src} alt={`${oval.name}, historic photograph`} className="aspect-[4/3] rounded-[3px]" imgClassName="grayscale-[.2]" />
            </ClipReveal>
          ))}
        </div>
      </section>
    </>
  );
}
