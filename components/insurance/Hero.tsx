"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-[#f7faf8]">
      <div className="max-w-7xl mx-auto px-8 lg:px-10 py-16 md:py-30 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div className="space-y-6">
          {/* Tag */}
          <span className="inline-block bg-[#d1fae5] text-[#065f46] text-xs font-semibold px-4 py-2 rounded-full tracking-wide">
            THE FUTURE OF COVERAGE
          </span>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#001810] leading-tight">
            Fairer, Smarter <br />
            Insurance for <br />
            <span className="text-[#006c52]">Every Journey</span>
          </h1>

          {/* Description */}
          <p className="text-gray-600 max-w-lg text-base sm:text-lg">
            Protecting your movement through precision technology and behavioral
            rewards. Insurance that grows with your lifestyle.
          </p>

          {/* CTA + Trust */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <button className="bg-[#001810] hover:bg-[#013220] transition text-white px-6 py-3 rounded-xl flex items-center gap-2 w-fit">
              Explore Models
              <ArrowRight size={18} />
            </button>

            <div className="flex items-center gap-3">
              {/* Avatars */}
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-[#a7f3d0]" />
                <div className="w-8 h-8 rounded-full bg-[#6ee7b7]" />
                <div className="w-8 h-8 rounded-full bg-[#34d399]" />
              </div>

              <span className="text-gray-600 text-sm">
                Trusted by 12k+ drivers
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center md:justify-end">
          <div className="relative w-full max-w-md md:max-w-lg lg:max-w-xl h-[500px] rounded-4xl overflow-hidden">
            <Image
              src="/insurance-hero.png"
              alt="Driving through forest"
              fill
              className="object-cover"
              priority
            />

            {/* Overlay Card */}
            <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md rounded-2xl p-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-[#001810] font-bold">
                  Eco-Driver Bonus
                </span>
                <span className="text-sm font-bold text-[#047857]">
                  +12% Savings
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-1 bg-[#c1c8c34d] rounded-full overflow-hidden">
                <div className="w-3/4 h-full bg-[#006c52]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
