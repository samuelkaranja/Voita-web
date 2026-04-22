import Image from "next/image";
import { ArrowRight } from "lucide-react";
import HardwareCard from "./hardware/HardwareCard";

export default function HardwareSection() {
  return (
    <section className="w-full bg-[#f7faf8] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT SIDE */}
        <HardwareCard />

        {/* RIGHT SIDE */}
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0b1f1a] leading-tight">
            Hardware-Enabled Intelligence
          </h2>

          <p className="mt-5 text-gray-600 text-base leading-relaxed">
            Our 'Protect' feature relies on the Voita Neural Network. By requesting
            a dashboard camera or OBD-II tracker, you're not just securing your
            vehicle—you’re proving your excellence.
          </p>

          {/* CTA */}
          <button className="mt-8 flex items-center justify-between w-[320px] md:w-full bg-[#ebefed] hover:bg-gray-300 transition rounded-2xl p-6">
            <span className="font-bold text-[15px] text-gray-800">
              Request Installation
            </span>
            <ArrowRight className="w-5 h-5 text-green-700" />
          </button>

          <p className="text-xs text-gray-400 mt-4 italic">
            *Devices provided and installed at no extra cost for Telematics subscribers.
          </p>
        </div>
      </div>
    </section>
  );
}
