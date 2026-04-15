"use client";

import { FaGooglePlay, FaApple } from "react-icons/fa";
import { Download } from "lucide-react";

export default function CTA() {
  return (
    <section className="w-full px-4 py-16 bg-[#f5f7f6]">
      <div className="max-w-6xl mx-auto">
        {/* Container */}
        <div className="bg-linear-to-r from-[#022f26] to-[#064e3b] rounded-[2.5rem] px-6 md:px-12 py-14 md:py-20 text-center text-white">
          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
            Drive with Confidence <br className="hidden md:block" />
            Every Day
          </h2>

          {/* Subtext */}
          <p className="mt-6 text-gray-200 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Join the movement of smarter drivers. Download Voita today and
            transform your relationship with the road.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Google Play */}
            <button className="flex items-center justify-center gap-4 bg-black text-white px-6 py-4 rounded-xl w-full sm:w-auto min-w-[260px] hover:scale-105 transition hover:cursor-pointer">
              <FaGooglePlay className="text-xl" />

              <div className="text-left">
                <p className="text-[10px] text-gray-300">GET IT ON</p>
                <p className="text-sm font-semibold">Google Play</p>
              </div>
            </button>

            {/* App Store */}
            <button className="flex items-center justify-center gap-4 bg-black text-white px-6 py-4 rounded-xl w-full sm:w-auto min-w-[260px] hover:scale-105 transition hover:cursor-pointer">
              <FaApple className="text-xl" />

              <div className="text-left">
                <p className="text-[10px] text-gray-300">DOWNLOAD ON THE</p>
                <p className="text-sm font-semibold">App Store</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
