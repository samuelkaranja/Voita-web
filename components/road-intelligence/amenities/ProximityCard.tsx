import Image from "next/image";

export default function ProximityCard() {
  return (
    <div className="bg-[#e9ece9] rounded-3xl p-10 flex flex-col h-full">
      {/* Text */}
      <div className="mb-15">
        <h3 className="text-2xl font-semibold text-gray-900 mb-5">
          Proximity Intelligence
        </h3>
        <p className="text-gray-600 text-[17px] font-light leading-relaxed max-w-xs">
          Voita scans your route for clean washrooms, vetted petrol stations,
          and emergency services in real-time.
        </p>
      </div>

      {/* Image */}
      <div className="mt-8 relative w-full h-[220px] md:h-[260px] rounded-2xl overflow-hidden">
        <Image
          src="/terrain.png"
          alt="Map Preview"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}
