import Hero from "@/components/home/Hero";
import Intro from "@/components/home/Intro";
import Shores from "@/components/home/Shores";
import Baldhead from "@/components/home/Baldhead";
import Ferry from "@/components/home/Ferry";
import ParksRail from "@/components/home/ParksRail";
import Gallery from "@/components/home/Gallery";
import HistoryTeaser from "@/components/home/HistoryTeaser";
import ResidentHub from "@/components/home/ResidentHub";
import Outro from "@/components/home/Outro";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Shores />
      <Baldhead />
      <Ferry />
      <ParksRail />
      <Gallery />
      <HistoryTeaser />
      <ResidentHub />
      <Outro />
    </>
  );
}
