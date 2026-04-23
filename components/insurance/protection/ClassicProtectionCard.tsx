import Image from "next/image";

export default function ClassicProtectionCard() {
  return (
    <div className="bg-white rounded-3xl p-8 flex flex-col md:flex-row gap-8 items-center border border-[#c1c8c31a]">
      <div>
        <h3 className="text-2xl text-[#181c30] font-bold mb-4">
          Classic Protection
        </h3>

        <p className="text-sm text-[#414845] mb-6">
          Comprehensive, reliable, and traditional. The gold standard of
          automotive security with Voita's digital edge.
        </p>

        <div className="bg-[#ebefed] rounded-xl p-4 text-sm">
          <p className="text-[#006c52] text-xs font-bold mb-1">BUNDLE & SAVE</p>
          <p className="text-sm text-[#181c1b] font-medium">
            10% Multi-car discount applied automatically
          </p>
        </div>
      </div>

      <div className="relative w-40 md:w-70 h-48 rounded-2xl overflow-hidden">
        <Image
          src="/classic.png"
          alt="Car"
          fill
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
