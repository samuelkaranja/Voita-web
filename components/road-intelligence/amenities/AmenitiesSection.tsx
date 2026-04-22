import ProximityCard from "./ProximityCard";
import SanitaryCard from "./SanitaryCard";
import InfoCard from "./InfoCard";
import { Shield, Plus } from "lucide-react";

export default function AmenitiesSection() {
  return (
    <section className="bg-[#f5f7f5] py-16 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-xs tracking-widest text-green-600 font-semibold uppercase">
            Essentials
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mt-3">
            Smart Trip Amenities
          </h2>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left */}
          <ProximityCard />

          {/* Right */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <SanitaryCard />

            <InfoCard title="Police & Roadblocks" icon={<Shield />} />

            <InfoCard
              title="Ambulance Services"
              icon={<Plus />}
              variant="dark"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
