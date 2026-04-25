import React from "react";
import { MessageSquare, ArrowRight } from "lucide-react";

export default function CollectiveKnowledge() {
  return (
    <section
      className="w-full max-w-6xl mx-auto px-4 py-16 my-15"
      id="community-chats"
    >
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-[#001810] mb-4 tracking-tight">
          The Collective Knowledge
        </h2>
        <p className="text-[#414845] max-w-xl mx-auto text-lg leading-relaxed">
          Engagement that grows. Join thousands of drivers in specialized
          circles built around shared passion and common routes.
        </p>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[500px]">
        {/* Card 1: Brand-Specific Circles */}
        <div className="md:col-span-2 bg-[#e0e3e1] rounded-[2.5rem] p-10 flex flex-col justify-between overflow-hidden">
          <div>
            <h3 className="text-2xl font-bold text-[#001810] mb-4">
              Brand-Specific Circles
            </h3>
            <p className="text-[#414845] mb-8 max-w-md">
              Connect with the "Subaru Owners Collective" or the "Land Rover
              Archivists." Tailored advice, parts sourcing, and community events
              for your specific make.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 z-10 mt-auto">
            {["#SubaruCrew", "#ToyotaTrust", "#EV_Future"].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-white rounded-full text-xs font-bold text-black shadow-sm border border-[#c1c8c333]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Card 2: Live Chats */}
        <div className="bg-[#011f16] rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between text-white overflow-hidden">
          <div>
            <div className="mb-6">
              <MessageSquare
                className="w-8 h-8 text-emerald-400"
                strokeWidth={1.5}
              />
            </div>
            <h3 className="text-2xl font-bold mb-4">Live Chats</h3>
            <p className="text-sm text-[#719888] leading-relaxed">
              Real-time traffic updates, hazard warnings, and community meetups
              organized by location.
            </p>
          </div>

          <a
            href="#"
            className="inline-flex items-center gap-2 text-[#8ff6d0] text-sm font-bold hover:gap-3 transition-all duration-300 mt-8"
          >
            OPEN ARCHIVE <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
