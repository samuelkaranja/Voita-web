import GarageCard from "./garage/GarageCard";
import { Map } from "lucide-react";

export default function GaragesSection() {
  return (
    <section className="w-full bg-[#e6e9e7] py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-lg md:text-xl font-semibold text-[#0b1f1a]">
            Voita Network Garages
          </h2>

          <button className="flex items-center gap-2 text-sm text-[#0a7f5a] font-medium hover:underline">
            View Map
            <Map size={16} />
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <GarageCard
            title="Prestige Motors"
            subtitle="Certified Bodyworks"
            icon="wrench"
          />
          <GarageCard
            title="Electron Hub"
            subtitle="EV Specialists"
            icon="car"
          />
          <GarageCard
            title="Mint Auto"
            subtitle="Voita Gold Tier"
            icon="settings"
          />
          <GarageCard
            title="Swift Repair Co."
            subtitle="Same-Day Service"
            icon="tool"
          />
        </div>
      </div>
    </section>
  );
}
