import Link from "next/link";
import Photo from "../Photo";

export default function Outro() {
  const words = ["Oval Beach", "Chain Ferry", "Mt. Baldhead", "Wicks Park", "Harbor Natural Area", "Village Square", "Saugatuck Wilds"];
  return (
    <section className="relative overflow-hidden bg-sun text-paper">
      <Link href="/visit" className="group block py-16 md:py-24" data-cursor="Plan">
        <div className="flex w-max marquee-track [--marquee-speed:55s] group-hover:[animation-play-state:paused]">
          {[0, 1].map((k) => (
            <div key={k} className="flex shrink-0 items-center" aria-hidden={k === 1}>
              {words.map((w, i) => (
                <span key={w} className="flex items-center">
                  <span className="display px-8 text-[clamp(3rem,9vw,9rem)] whitespace-nowrap">{i % 2 ? <em className="display-italic">{w}</em> : w}</span>
                  <span className="h-[clamp(3rem,7vw,7rem)] w-[clamp(3rem,7vw,7rem)] shrink-0 overflow-hidden rounded-full">
                    <Photo src={["dsc-7701.jpg", "dsc-8977a.jpg", "dsc-3391.jpg", "dsc-4722a.jpg"][i % 4]} alt="" className="h-full w-full" />
                  </span>
                </span>
              ))}
            </div>
          ))}
        </div>
        <p className="px-gutter mt-10 flex items-center justify-between eyebrow">
          <span>Plan your visit — passes, ferry fares & getting here</span>
          <span className="transition-transform duration-500 group-hover:translate-x-2">→</span>
        </p>
      </Link>
    </section>
  );
}
