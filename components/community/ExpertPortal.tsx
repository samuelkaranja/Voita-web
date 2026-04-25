import Image from "next/image";
import { Search, ShieldCheck } from "lucide-react";
import { MdPsychology } from "react-icons/md";

export default function ExpertPortal() {
  return (
    <section
      id="request-scout"
      className="grid md:grid-cols-2 gap-12 items-start my-15"
    >
      <div>
        <div className="bg-[#c2ecd9] flex items-center gap-2 px-3 py-1 rounded-full max-w-xs">
          <ShieldCheck color="#002117" size={16} />
          <span className="text-[#002117] text-xs font-semibold uppercase">
            Automotive Expertise
          </span>
        </div>

        <div>
          <h3 className="text-4xl text-[#001810] font-extrabold tracking-tight mt-6 mb-6">
            On-Ground Scouts & Technical Masters
          </h3>
          <p className="text-[16px] text-gray-600 mb-8 leading-relaxed">
            When the road gets uncertain, the Archivist provides clarity. Our
            network of verified experts is available 24/7 for digital
            consultations. Need a second opinion on a mechanic's quote? Our
            experts review diagnostic reports with editorial precision.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-[#f1f4f2]">
            <MdPsychology size={30} color="#006c52" />
            <h4 className="font-bold text-sm mt-2">Expert Advice</h4>
            <p className="text-xs text-gray-500 mt-1">
              Direct access to certified mechanical engineers for diagnostic
              second opinions.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-[#f1f4f2]">
            <Search size={30} color="#006c52" />
            <h4 className="font-bold text-sm mt-2">Volta Scouts</h4>
            <p className="text-xs text-gray-500 mt-1">
              Request a physical scout—a trusted representative—to assist with
              on-site verification.
            </p>
          </div>
        </div>
      </div>

      <div className="relative min-h-[440px] rounded-3xl overflow-hidden shadow-lgl">
        <Image
          src="/technical.png"
          alt="Mechanic"
          className="w-full h-full object-cover"
          fill
          priority
        />
      </div>
    </section>
  );
}
