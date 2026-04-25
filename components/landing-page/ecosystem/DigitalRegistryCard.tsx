import Link from "next/link";
import { FolderHeart, Car, Bell, User } from "lucide-react";

const carDetails = [
  "Registration & Specs",
  "Oil Type & Model Year",
  "Service History",
];

const smartReminders = [
  "License Renewal Alerts",
  "Tire Expiry Tracking",
  "Next Service Countdown",
];

export default function DigitalRegistryCard() {
  return (
    <div className="bg-white rounded-4xl flex flex-col lg:flex-row min-h-[450px] overflow-hidden">
      {/* Left Section: Content */}
      <div className="flex-1 p-8 lg:p-12 flex flex-col justify-between">
        <div className="space-y-8">
          <div className="w-12 h-12 bg-[#c2f0d8] rounded-xl flex items-center justify-center">
            <FolderHeart className="text-[#0d6e4a]" size={24} />
          </div>

          <div>
            <Link href="/profile" className="text-[#0d2b1f] text-2xl lg:text-3xl font-bold mb-3 hover:underline hover:cursor-pointer">Digital Registry (Profile)</Link>
            <p className="text-[#4a5a52] text-sm lg:text-base leading-relaxed max-w-lg mt-3">
              Complete car and driver management in one place. Track everything
              from mechanical specs to legal renewals with automated
              intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 pt-4">
            {/* Car Details */}
            <div className="space-y-4">
              <h4 className="flex items-center gap-2 text-[#0d6e4a] text-[11px] font-bold uppercase tracking-widest">
                <Car size={14} strokeWidth={2.5} /> Car Details
              </h4>
              <ul className="space-y-2">
                {carDetails.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-[#4a5a52]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#b0c4b8]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Smart Reminders */}
            <div className="space-y-4">
              <h4 className="flex items-center gap-2 text-[#0d6e4a] text-[11px] font-bold uppercase tracking-widest">
                <Bell size={14} strokeWidth={2.5} /> Smart Reminders
              </h4>
              <ul className="space-y-2">
                {smartReminders.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-[#4a5a52]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#b0c4b8]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section: Mockup Dashboard Container */}
      <div className="p-4 lg:p-6 lg:w-[45%] flex">
        <div className="bg-[#e8ebea] w-full rounded-4xl flex items-center justify-center px-10 py-2">
          {/* Floating Dashboard Card */}
          <div className="bg-white rounded-2xl shadow-xl shadow-black/5 w-full max-w-[280px] p-6 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#eef7f2] rounded-full flex items-center justify-center">
                <User className="text-[#0d6e4a]" size={20} />
              </div>
              <div>
                <p className="text-[#0d2b1f] text-sm font-bold leading-tight">
                  KCB 001A
                </p>
                <p className="text-[#7a8a82] text-[10px] font-bold uppercase tracking-tight">
                  Toyota Land Cruiser
                </p>
              </div>
            </div>

            <div className="h-px bg-gray-100" />

            {/* License Renewal */}
            <div className="space-y-2">
              <div className="flex justify-between items-end">
                <span className="text-[9px] font-bold text-[#7a8a82] uppercase tracking-wider">
                  License Renewal
                </span>
                <span className="text-[9px] font-bold text-red-500 uppercase">
                  12 Days Left
                </span>
              </div>
              <div className="h-2 w-full bg-[#f0f4f0] rounded-full overflow-hidden">
                <div className="h-full w-[90%] bg-red-400 rounded-full" />
              </div>
            </div>

            {/* Oil Service */}
            <div className="space-y-2">
              <div className="flex justify-between items-end">
                <span className="text-[9px] font-bold text-[#7a8a82] uppercase tracking-wider">
                  Oil Service
                </span>
                <span className="text-[9px] font-bold text-[#0d6e4a] uppercase">
                  3,400 KM Left
                </span>
              </div>
              <div className="h-2 w-full bg-[#f0f4f0] rounded-full overflow-hidden">
                <div className="h-full w-[55%] bg-[#0d6e4a] rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
