import { Wrench, ArrowRight } from "lucide-react";

export default function VerifiedProvidersCard() {
  return (
    <div className="bg-[#0d2b1f] rounded-3xl p-8 flex flex-col justify-between min-h-[300px]">
      <div>
        <div className="w-12 h-12 bg-[#0d6e4a] rounded-xl flex items-center justify-center mb-6">
          <Wrench className="text-white" size={24} />
        </div>
        <h3 className="text-white text-2xl font-bold mb-3">
          Verified Service Providers
        </h3>
        <p className="text-[#a3b8ae] text-base leading-relaxed">
          Only the best mechanics, towing services, and dealers earn the Voita
          Mark of Approval.
        </p>
      </div>
      <a
        href="#"
        className="flex items-center gap-2 text-[#4de8a0] font-semibold hover:underline"
      >
        Find a provider <ArrowRight size={18} />
      </a>
    </div>
  );
}
