"use client";

import Image from "next/image";
import { Download, AlertTriangle, Waves } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden text-white">
      
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/aerial-road.png"
          alt="Road background"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* DARK OVERLAY (for readability) */}
      <div className="absolute inset-0 bg-[#031f17]/90 -z-10" />

      {/* GREEN GRADIENT GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.15),transparent_60%)] -z-10" />

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-24 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <p className="text-xs tracking-widest text-gray-400 mb-4">
            REAL-TIME SITUATIONAL AWARENESS
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6">
            Know the Road
            Before It Knows You.
          </h1>

          <p className="text-gray-300 max-w-lg mb-8 text-sm md:text-base">
            Harness the power of archival intelligence and live data to
            anticipate floods, congestion, and accidents before they impact your
            journey.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex items-center justify-center gap-2 bg-[#6ee7b7] text-black px-6 py-3 rounded-full font-medium hover:bg-[#5cd6a6] transition">
              Download the App
              <Download size={18} />
            </button>

            <button className="px-6 py-3 rounded-full border border-gray-600 hover:border-gray-400 transition">
              View Live Map
            </button>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="flex justify-center md:justify-end">
          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 w-full max-w-sm shadow-xl">
            
            {/* Flood Warning */}
            <div className="flex items-start gap-3 bg-emerald-900/40 p-4 rounded-lg mb-4">
              <div className="text-emerald-400 mt-1">
                <Waves size={20} />
              </div>
              <div>
                <p className="text-sm font-semibold">Flood Warning</p>
                <p className="text-xs text-gray-300">
                  Route A4 impassable due to flash flooding.
                </p>
              </div>
            </div>

            {/* Accident */}
            <div className="flex items-start gap-3 bg-emerald-900/40 p-4 rounded-lg">
              <div className="text-red-400 mt-1">
                <AlertTriangle size={20} />
              </div>
              <div>
                <p className="text-sm font-semibold">Major Accident</p>
                <p className="text-xs text-gray-300">
                  Heavy congestion on Eastern Bypass.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
