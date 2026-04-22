import Image from "next/image";
import { Camera, SlidersHorizontal } from "lucide-react";

export default function HardwareCard() {
  return (
    <div className="relative w-full max-w-md mx-auto md:mx-0">
      
      {/* OUTER SOFT BACKGROUND */}
      <div className="absolute inset-0 rounded-[3rem] bg-[#e6efea] -rotate-[3deg]"></div>

      {/* CARD */}
      <div className="relative bg-white rounded-[3rem] p-8 shadow-sm">
        
        {/* IMAGE */}
        <div className="relative w-full h-[280px] md:h-[380px] rounded-2xl overflow-hidden">
          <Image
            src="/intelligence.png"
            alt="Car dashboard"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* FEATURES */}
        <div className="mt-6 space-y-5">
          
          {/* Feature 1 */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#c2ecd9]">
              <Camera className="w-5 h-5 text-black" />
            </div>
            <div>
              <p className="font-medium text-[15px] text-[#181c1b]">Smart Dash-Cam</p>
              <p className="text-sm text-gray-500">
                Automated event logging for rapid claim processing.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#c2ecd9]">
              <SlidersHorizontal className="w-5 h-5 text-black" />
            </div>
            <div>
              <p className="font-medium text-[15px] text-[#181c1b]">OBD-II Smart Node</p>
              <p className="text-sm text-gray-500">
                Plug-and-play tracking for Pay-per-KM accuracy.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
