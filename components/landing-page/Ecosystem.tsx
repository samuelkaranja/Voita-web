import Image from "next/image";
import RoadIntelligenceCard from "./ecosystem/RoadIntelligenceCard";
import VerifiedProvidersCard from "./ecosystem/VerifiedProvidersCard";
import ExpertCommunityCard from "./ecosystem/ExpertCommunityCard";
import SmartInsuranceCard from "./ecosystem/SmartInsuranceCard";
import DigitalRegistryCard from "./ecosystem/DigitalRegistryCard";

export default function Ecosystem() {
  return (
    <section className="bg-[#f1f4f2] py-2 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto flex flex-col gap-4">
        <p className="text-[#0d6e4a] text-xs font-semibold tracking-widest uppercase mb-1">
          Our Ecosystem
        </p>

        <h2 className="text-[#0d2b1f] text-3xl md:text-4xl lg:text-[2.6rem] font-bold tracking-tight mb-10">
          Intelligence for the Open Road
        </h2>
        {/* Row 1: Road Intel spans 2 cols, Providers spans 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <RoadIntelligenceCard />
          <VerifiedProvidersCard />
        </div>

        {/* Row 2: Expert Community | Smart Insurance */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-4">
          <ExpertCommunityCard />
          <SmartInsuranceCard />
        </div>

        {/* Row 3: Digital Registry */}
        <DigitalRegistryCard />
      </div>
    </section>
  );
}
