import Image from "next/image";
import { Map } from "lucide-react";

export default function RoadIntelligenceCard() {
  return (
    <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden flex flex-col md:flex-row min-h-[300px] transition group-hover:shadow-md">
      
      <div className="p-8 flex-1 flex flex-col justify-between">
        <div className="space-y-4">
          <div className="w-12 h-12 bg-[#eef7f2] rounded-xl flex items-center justify-center">
            <Map className="text-[#0d6e4a]" size={24} />
          </div>

          <div>
            <h3 className="text-[#0d2b1f] text-2xl font-bold">
              Road Intelligence
            </h3>

            <p className="text-[#4a5a52] text-base leading-relaxed max-w-xs mt-2">
              Real-time alerts and comprehensive road quality grading from A to D to help you navigate with precision.
            </p>
          </div>
        </div>

        <div className="flex gap-2 mt-6">
          <span className="bg-[#e7f6ed] text-[#0d6e4a] text-[10px] font-bold px-3 py-1 rounded-full uppercase">
            Grade A
          </span>
          <span className="bg-[#fef9c3] text-[#854d0e] text-[10px] font-bold px-3 py-1 rounded-full uppercase">
            Grade B
          </span>
        </div>
      </div>

      <div className="relative w-full md:w-[45%] min-h-[200px]">
        <Image
          src="/network.png"
          alt="Road network map"
          fill
          className="object-cover opacity-80 group-hover:scale-105 transition"
        />
      </div>
    </div>
  );
}
