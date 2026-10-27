import { SplitReveal } from "./Reveal";

export default function PageHeader({ index, eyebrow, title, intro }: { index: string; eyebrow: string; title: string; intro?: string }) {
  return (
    <header className="px-gutter grid grid-cols-12 gap-6 pb-16 pt-40 md:pb-24 md:pt-48">
      <p className="eyebrow col-span-12 text-ink/50 md:col-span-3">
        ({index}) — {eyebrow}
      </p>
      <div className="col-span-12 md:col-span-9">
        <SplitReveal as="h1" text={title} delay={0.4} className="display text-[clamp(3rem,9vw,9.5rem)]" />
        {intro && <p className="mt-8 max-w-xl text-lg text-ink/70">{intro}</p>}
      </div>
    </header>
  );
}
