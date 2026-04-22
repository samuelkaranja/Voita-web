import { Gauge } from "lucide-react";

export default function TelematicsCard() {
  return (
    <div className="bg-white rounded-3xl p-8">
      <div>
        <div className="flex justify-between items-start mb-10">
          <Gauge className="text-[#006c52]" />
          <span className="text-xs bg-[#e5f0ed] text-[#006c52] px-3 py-1 rounded-full font-medium">
            Usage Based
          </span>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Telematics
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed mb-8 max-w-sm">
          Pay-how-you-drive. High safety scores unlock massive premium reductions.
        </p>
      </div>

      <button className="text-[#006c52] font-bold text-sm">
        Learn about Score-Matching →
      </button>
    </div>
  );
}
