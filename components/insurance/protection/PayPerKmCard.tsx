import { MapPin } from "lucide-react";

export default function PayPerKmCard() {
  return (
    <div className="bg-[#e0e3e1] rounded-3xl p-8 flex flex-col justify-between">
      <div>
        <MapPin className="mb-6 text-[#001810]" />

        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
          Pay-per-KM
        </h3>

        <p className="text-gray-600 text-sm max-w-sm">
          Perfect for urban commuters. Only pay for the distance you actually cover. No ghost premiums.
        </p>
      </div>

      <div className="flex justify-between items-end mt-7 border-t border-gray-200 pt-5">
        <span className="text-xs text-[#414845] font-bold uppercase">STARTING FROM</span>
        <span className="text-xl text-[#001810] font-bold">$0.04/km</span>
      </div>
    </div>
  );
}
