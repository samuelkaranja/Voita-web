"use client";

import { Plane, Smartphone, CloudLightning, Settings } from "lucide-react";

const addons = [
  {
    icon: Plane,
    title: "Passengers",
    description:
      "Travel insurance extension for everyone on board during long-haul transits.",
  },
  {
    icon: Smartphone,
    title: "Personal Items",
    description:
      "In-car protection for phones, laptops, and digital tools while you drive.",
  },
  {
    icon: CloudLightning,
    title: "Global Unrest",
    description:
      "Protection against floods, political volatility, and atmospheric disasters.",
  },
  {
    icon: Settings,
    title: "Car-Specific",
    description:
      "Deep mechanical coverage: Engine, Gearbox, and Windscreens included.",
  },
];

export default function PrecisionSection() {
  return (
    <section className="bg-[#021e17] text-white py-20 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Precision Add-Ons
          </h2>
          <p className="mt-4 text-sm md:text-base text-gray-400">
            Bridge the gaps with coverage tailored to the reality of your
            environment and lifestyle.
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {addons.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group rounded-3xl bg-[#042a21] border border-[#0a3a2f] p-6 md:p-8 transition-all duration-300 hover:bg-[#05352a] hover:border-[#0f5c49]"
              >
                {/* ICON */}
                <div className="mb-6">
                  <Icon className="w-7 h-7 text-[#6ee7b7]" />
                </div>

                {/* TITLE */}
                <h3 className="text-lg font-semibold mb-3">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
