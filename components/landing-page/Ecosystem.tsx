import Image from "next/image";
import ClickableCard from "./ecosystem/ClickableCard";
import RoadIntelligenceCard from "./ecosystem/RoadIntelligenceCard";
import VerifiedProvidersCard from "./ecosystem/VerifiedProvidersCard";
import ExpertCommunityCard from "./ecosystem/ExpertCommunityCard";
import SmartInsuranceCard from "./ecosystem/SmartInsuranceCard";
import DigitalRegistryCard from "./ecosystem/DigitalRegistryCard";

export default function Ecosystem() {
  return (
    <section className="bg-[#f1f4f2] py-12 px-6 lg:px-10" id="services">
      <div className="max-w-7xl mx-auto flex flex-col gap-4">

        <p className="text-[#0d6e4a] text-xs font-semibold tracking-widest uppercase">
          Our Ecosystem
        </p>

        <h2 className="text-[#0d2b1f] text-3xl md:text-4xl lg:text-[2.6rem] font-bold mb-10">
          Intelligence for the Open Road
        </h2>

        {/* Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          
          <ClickableCard href="/road-intelligence" className="lg:col-span-2">
            <RoadIntelligenceCard />
          </ClickableCard>

          <ClickableCard href="/vetted-experts">
            <VerifiedProvidersCard />
          </ClickableCard>

        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-4">
          
          <ClickableCard href="/community">
            <ExpertCommunityCard />
          </ClickableCard>

          <ClickableCard href="/insurance">
            <SmartInsuranceCard />
          </ClickableCard>

        </div>

        {/* Row 3 */}
        <ClickableCard href="/profile">
          <DigitalRegistryCard />
        </ClickableCard>

      </div>
    </section>
  );
}
