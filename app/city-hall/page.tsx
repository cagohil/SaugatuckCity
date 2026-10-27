import type { Metadata } from "next";
import Docs from "@/components/Docs";
import PageHeader from "@/components/PageHeader";
import ZoomCard from "@/components/ZoomCard";
import { FadeUp } from "@/components/Reveal";
import { boards, city, departments } from "@/lib/content";
import OpenStatus from "@/components/OpenStatus";

export const metadata: Metadata = { title: "City Hall" };

export default function CityHallPage() {
  return (
    <>
      <PageHeader
        index="04"
        eyebrow="City Hall"
        title={"Your city,\n*at your service.*"}
        intro="Departments, boards, public meetings and the documents behind them. City Hall is at 102 Butler Street, open weekdays."
      />

      <section className="px-gutter grid grid-cols-1 gap-3 pb-24 md:grid-cols-3">
        <FadeUp>
          <div className="flex h-full flex-col justify-between rounded-[3px] bg-ink p-6 text-paper">
            <div>
              <p className="eyebrow text-paper/50">Visit</p>
              <p className="display mt-3 text-3xl leading-tight">{city.address}<br />{city.locality}</p>
            </div>
            <div className="mt-8">
              <OpenStatus />
              <p className="mt-2 text-sm text-paper/60">{city.hours}</p>
            </div>
          </div>
        </FadeUp>
        <FadeUp delay={0.06}>
          <div className="flex h-full flex-col justify-between rounded-[3px] bg-paper-2 p-6">
            <p className="eyebrow text-ink/50">Call</p>
            <div className="mt-8 space-y-4">
              <a href={city.phoneHref} className="block">
                <span className="text-sm text-ink/60">City Hall</span>
                <span className="display block text-4xl transition-colors hover:text-sun">{city.phone}</span>
              </a>
              <a href={city.dpwPhoneHref} className="block">
                <span className="text-sm text-ink/60">Public Works</span>
                <span className="display block text-4xl transition-colors hover:text-sun">{city.dpwPhone}</span>
              </a>
            </div>
          </div>
        </FadeUp>
        <FadeUp delay={0.12}>
          <ZoomCard />
        </FadeUp>
      </section>

      <section className="px-gutter grid grid-cols-12 gap-6 pb-24">
        <div className="col-span-12 md:col-span-3">
          <p className="eyebrow text-ink/50">Departments</p>
        </div>
        <ul className="col-span-12 grid grid-cols-1 border-t border-ink/12 sm:grid-cols-2 md:col-span-9 lg:grid-cols-3">
          {departments.map((d, i) => (
            <li key={d.name} className="border-b border-ink/12 sm:[&:nth-child(odd)]:border-r lg:[&:nth-child(odd)]:border-r-0 lg:[&:not(:nth-child(3n))]:border-r">
              <a href={d.href} target="_blank" rel="noreferrer" className="group flex h-full items-start justify-between gap-4 p-6 transition-colors hover:bg-paper-2">
                <span>
                  <span className="eyebrow text-ink/40">{String(i + 1).padStart(2, "0")}</span>
                  <span className="display mt-6 block text-2xl md:text-3xl">{d.name}</span>
                </span>
                <span className="text-xl opacity-30 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-sun group-hover:opacity-100">↗</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="px-gutter grid grid-cols-12 gap-6 pb-24">
        <div className="col-span-12 md:col-span-3">
          <p className="eyebrow text-ink/50">Documents & notices</p>
          <p className="mt-4 text-sm text-ink/60">Budgets, plans, schedules and water service line information.</p>
        </div>
        <div className="col-span-12 md:col-span-9">
          <Docs />
        </div>
      </section>

      <section className="bg-lake py-24 text-paper">
        <div className="px-gutter grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-3">
            <p className="eyebrow text-paper/50">Boards & committees</p>
            <p className="mt-4 text-sm text-paper/70">Residents serve the city on {boards.length} boards, commissions and task forces.</p>
          </div>
          <ul className="col-span-12 flex flex-wrap gap-2 md:col-span-9">
            {boards.map((b, i) => (
              <FadeUp key={b} delay={i * 0.02} y={12}>
                <li className="rounded-full border border-paper/20 px-4 py-2 text-sm transition-colors hover:border-sun hover:bg-sun">{b}</li>
              </FadeUp>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-gutter grid grid-cols-12 gap-6 py-24">
        <div className="col-span-12 md:col-span-7">
          <p className="eyebrow text-ink/50">City eNews</p>
          <h2 className="display mt-4 text-5xl md:text-6xl">
            News, notices & <span className="display-italic text-sun">meeting packets</span> — in your inbox.
          </h2>
        </div>
        <div className="col-span-12 flex flex-col justify-end md:col-span-4 md:col-start-9">
          <p className="text-ink/70">Ask City Hall to add you to the eNews list for city news, meeting reminders and information packets.</p>
          <a href="https://www.saugatuckcity.com/contact.html" target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center justify-between rounded-full bg-ink px-6 py-4 text-paper transition-colors hover:bg-sun">
            Contact City Hall <span>→</span>
          </a>
        </div>
      </section>
    </>
  );
}
