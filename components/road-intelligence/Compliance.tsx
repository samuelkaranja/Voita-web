import Image from "next/image";
import { CheckCircle, AlertTriangle } from "lucide-react";

export default function Compliance() {
  return (
    <section className="bg-[#f3f5f4] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT IMAGE */}
<div className="w-full flex justify-center md:justify-start">
  <div className="relative w-full max-w-lg md:max-w-xl aspect-[2/2] rounded-4xl overflow-hidden">
    <Image
      src="/safety.png"
      alt="Car dashboard"
      fill
      className="object-cover"
      priority
    />
  </div>
</div>

        {/* RIGHT CONTENT */}
        <div className="max-w-lg">
          <p className="text-sm tracking-widest text-green-700 font-semibold mb-3">
            COMPLIANCE FIRST
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0b1f17] leading-tight mb-8">
            Zero Fines.
            <br />
            Maximum Safety.
          </h2>

          {/* FEATURES */}
          <div className="space-y-6">
            {/* Feature 1 */}
            <div className="flex items-start gap-4">
              <div className="bg-green-700 text-white p-3 rounded-full">
                <CheckCircle size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-lg text-[#0b1f17]">
                  Dynamic Speed Limits
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed mt-1">
                  Automatic updates to your HUD as you transition between local
                  roads and expressways. Prevent inadvert fines.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-4">
              <div className="bg-[#0b1f17] text-green-400 p-3 rounded-full">
                <AlertTriangle size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-lg text-[#0b1f17]">
                  Black Spot Alerts
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed mt-1">
                  High-precision warnings when entering zones historically prone
                  to accidents. Stay vigilant when it matters most.
                </p>
              </div>
            </div>
          </div>

          {/* CTA BUTTON */}
          <button className="mt-10 bg-[#0b2a21] text-white px-8 py-4 rounded-full font-medium hover:bg-[#0e3a2d] transition">
            Get Voita App
          </button>
        </div>
      </div>
    </section>
  );
}
