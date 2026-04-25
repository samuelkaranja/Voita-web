import {
  ClipboardList,
  Bell,
  Fingerprint,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

export default function AutomotiveClarity() {
  return (
    <section className="py-20 px-6 bg-[#f7faf8]">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="text-[#006c52] font-black tracking-[0.4em] text-[10px] uppercase mb-4">
            The Digital Archive
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#001810] tracking-tighter">
            Engineered for Automotive Clarity
          </h2>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Profile Records */}
          <div className="bg-[#ffffffb3] p-10 rounded-[2.5rem] border border-emerald-100 shadow-sm flex flex-col gap-6">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-800 rounded-2xl flex items-center justify-center mb-4">
              <ClipboardList size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#001810] tracking-tight mb-4">
                Profile Records
              </h3>
              <p className="text-[#414845] text-sm leading-relaxed mb-4">
                Detailed archival of your vehicle's DNA—from registration plates
                to specialized Subaru Gearbox Oil specifications.
              </p>
            </div>

            <div className="mt-auto space-y-4">
              <div className="bg-[#f1f4f2] p-5 rounded-2xl border border-emerald-50">
                <p className="text-[9px] text-emerald-800/50 font-bold uppercase tracking-wider mb-2">
                  Registry Identifier
                </p>
                <p className="text-xl font-bold text-[#001810] mt-1">
                  KCB 882X
                </p>
                <p className="text-emerald-700 font-semibold text-[12px]">
                  Subaru Forester
                </p>
              </div>

              <div className="bg-[#001810] p-5 rounded-2xl text-white">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[9px] font-bold uppercase opacity-60 text-[#899491]">
                    Gearbox Fluid
                  </span>
                  <CheckCircle2 size={14} className="text-emerald-400" />
                </div>
                <p className="text-sm font-bold text-white">
                  Subaru Gearbox Oil
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Smart Reminders */}
          <div className="bg-emerald-50/30 p-10 rounded-[2.5rem] border border-emerald-100 shadow-sm flex flex-col gap-6">
            <div className="w-14 h-14 bg-[#006c52] rounded-2xl flex items-center justify-center mb-8 shadow-sm text-white">
              <Bell size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Smart Reminders
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Predictive alerts for license renewals, insurance payments,
                service intervals, and tire life forecasting.
              </p>
            </div>

            <div className="mt-4 flex flex-col gap-3">
              <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-3">
                <div className="bg-red-50 p-2 rounded-lg text-red-500">
                  <AlertCircle size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                    Insurance Renewal
                  </p>
                  <p className="font-bold text-gray-900">30 Days Remaining</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-3">
                <div className="bg-emerald-50 p-2 rounded-lg text-emerald-600">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                    Tire Expiry
                  </p>
                  <p className="font-bold text-gray-900">October 2025</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: User Records */}
          <div className="bg-[#ffffffb3] p-10 rounded-[2-5rem] border border-emerald-100/50 flex flex-col gap-6">
            <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center border border-emerald-100 shadow-sm text-emerald-700">
              <Fingerprint size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                User Records
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Secure digital storage for your driver's license with automated
                renewal tracking and archive status.
              </p>
            </div>

            <div className="mt-4">
              <div className="bg-emerald-900 p-6 rounded-2xl text-white shadow-lg relative overflow-hidden">
                <div className="flex justify-between items-start mb-8">
                  <p className="text-[10px] opacity-70 font-bold uppercase tracking-wider">
                    License ID
                  </p>
                  <div className="bg-white/10 p-1.5 rounded-full">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>
                <p className="text-xl font-bold tracking-wider mb-8">
                  DL-29481-B3
                </p>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-[10px] opacity-70 font-bold uppercase tracking-wider">
                      Expiry Date
                    </p>
                    <p className="font-semibold mt-1">14 MAR 2025</p>
                  </div>
                  <div className="px-3 py-1 bg-emerald-700/50 rounded-lg text-xs font-bold border border-emerald-600">
                    VERIFIED
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
