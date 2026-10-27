import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ParksIndex from "@/components/ParksIndex";

export const metadata: Metadata = { title: "Parks & Beaches" };

export default function ParksPage() {
  return (
    <>
      <PageHeader
        index="01"
        eyebrow="Parks & Recreation"
        title={"Fourteen places\nto *slow down.*"}
        intro="From a world-ranked beach to a hand-cranked ferry and 169 acres of floodplain forest, the City of Saugatuck cares for parks across the lake, the river, the dunes and downtown."
      />
      <ParksIndex />
    </>
  );
}
