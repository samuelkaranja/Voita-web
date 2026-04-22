import { Fuel } from "lucide-react";

export default function SanitaryCard() {
  return (
    <div className="col-span-1 sm:col-span-2 bg-[#8ff6d0] rounded-3xl p-8 flex justify-between items-center">
      <div>
        <p className="text-xs uppercase font-light tracking-widest text-[#007257]">
          Vetted Facilities
        </p>
        <h3 className="text-xl font-extrabold text-[#007257] mt-2">
          Sanitary & Fuel
        </h3>
        <p className="text-sm text-[#007257cc] mt-1">
          Only showing 4+ star hygiene rated washrooms.
        </p>
      </div>

      <div className="w-20 h-20 bg-[#ffffff33] rounded-full flex items-center justify-center">
        <Fuel size={30} className="text-[#007257]" />
      </div>
    </div>
  );
}
