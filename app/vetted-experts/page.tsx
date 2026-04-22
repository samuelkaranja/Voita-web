import Directory from "@/components/vetted-experts/Directory";
import Discovery from "@/components/vetted-experts/Discovery";
import TrustProtocol from "@/components/vetted-experts/TrustProtocol";
import SearchSection from "@/components/vetted-experts/SearchSection";
import Hero from "@/components/vetted-experts/Hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vetted Experts | Voita",
  description:
    "Connect with verified automotive professionals. From precision mechanics to premium upholstery, Voita ensures your vehicle receives elite-level, verified care.",
};

export default function VettedExpertsPage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Directory />
      <Discovery />
      <TrustProtocol />
      <SearchSection />
    </main>
  );
}
