import React from "react";
import { Shield, Map, Car, Plus } from "lucide-react";

const directoryData = [
  {
    title: "Police Dispatch",
    category: "FEDERAL",
    description: "National emergency response and incident reporting.",
    phone: "999 / 112",
    icon: <Shield className="w-6 h-6 text-red-500" />,
  },
  {
    title: "KeNHA Support",
    category: "ROADS",
    description: "Road damage, obstruction, and highway maintenance reporting.",
    phone: "020 4971224",
    icon: <Map className="w-6 h-6 text-green-600" />,
  },
  {
    title: "AA Kenya",
    category: "RESCUE",
    description: "Official road rescue and breakdown towing services.",
    phone: "0709 933 000",
    icon: <Car className="w-6 h-6 text-blue-600" />,
  },
  {
    title: "St. John Ambulance",
    category: "MEDICAL",
    description: "Emergency medical dispatch and on-site paramedics.",
    phone: "0721 225252",
    icon: <Plus className="w-6 h-6 text-emerald-600" />,
  },
];

export default function EmergencyDirectory() {
  return (
    <div className="my-15" id="emergency">
      <div className="max-w-6xl mx-auto bg-[#f1f4f2] rounded-[3rem] p-8 md:p-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-start justify-between mb-8 gap-4">
          <div className="max-w-xl space-y-4">
            <div className="w-12 h-1 bg-[#006c52]"></div>
            <h1 className="text-4xl font-extrabold text-[#001810] mb-2">
              Emergency Help Directory
            </h1>
            <p className="text-slate-600 max-w-md">
              The Archive keeps your safety prioritized. Access vital contacts
              across Kenya with one-tap visibility.
            </p>
          </div>
          <div className="flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full self-start">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            <span className="text-xs font-bold text-slate-700 tracking-wider">
              SYSTEM STATUS: ONLINE
            </span>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {directoryData.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-slate-100 p-6 rounded-2xl hover:shadow-md transition-shadow duration-300 hover:cursor-pointer"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-slate-50 rounded-lg">{item.icon}</div>
                <span className="text-[8px] font-bold text-[#717974] tracking-widest uppercase">
                  {item.category}
                </span>
              </div>
              <h3 className="font-bold text-lg text-[#001810] mb-1">
                {item.title}
              </h3>
              <p className="text-xs text-[#414845] mb-4 leading-relaxed">
                {item.description}
              </p>
              <div className="text-lg font-bold text-[#001810] tracking-tighter">
                {item.phone}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
