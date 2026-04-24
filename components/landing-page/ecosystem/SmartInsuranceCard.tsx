import Image from "next/image";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export default function SmartInsuranceCard() {
  return (
    <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden flex flex-col md:flex-row">
      <div className="p-8 flex-1 flex flex-col justify-between">
        <div className="space-y-6">
          <div className="w-12 h-12 bg-[#eef7f2] rounded-xl flex items-center justify-center">
            <ShieldCheck className="text-[#0d6e4a]" size={24} />
          </div>
          <div>
            <Link href="/insurance" className="text-[#0d2b1f] text-2xl font-bold hover:underline">Smart Insurance</Link>
            <p className="text-[#4a5a52] text-base leading-relaxed mt-3">
              Telematics and Pay-per-KM insurance that rewards safe driving. No
              police abstract required for claims.
            </p>
          </div>
        </div>
        <button className="mt-8 self-start px-6 py-2 rounded-lg border border-gray-200 font-bold text-[#0d2b1f] hover:bg-gray-50">
          Pay-per-KM starting KES 10
        </button>
      </div>
      <div className="relative w-full md:w-1/2 min-h-[250px]">
        <Image
          src="/keys.png"
          alt="Smart Insurance"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
