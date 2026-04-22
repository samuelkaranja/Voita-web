import AmenitiesSection from "@/components/road-intelligence/amenities/AmenitiesSection";
import Compliance from "@/components/road-intelligence/Compliance";
import GradingSection from "@/components/road-intelligence/grading/GradingSection";
import Hero from "@/components/road-intelligence/Hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Road Intelligence | Voita",
  description:
    "Know the road before it knows you. Real-time situational awareness for floods, traffic, and accidents.",
};

export default function RoadIntelligencePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AmenitiesSection />
      <Compliance />
      <GradingSection />
    </main>
  );
}
