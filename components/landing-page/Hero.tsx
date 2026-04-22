import { Download } from "lucide-react";
import Image from "next/image";
import { FcApproval } from "react-icons/fc";

export default function Hero() {
  return (
    <section className="bg-[#f7faf8] flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-30 md:py-40 w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center">
        {/* ── Left column ── */}
        <div className="flex flex-col gap-6 order-2 md:order-1">
          {/* Badge */}
          <span className="inline-flex items-center self-start bg-[#c2f0d8] text-[#0d6e4a] text-[11px] font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full">
            Real-Time Intelligence
          </span>

          {/* Headline */}
          <h1 className="text-[clamp(2.6rem,5.5vw,4rem)] font-extrabold leading-[1.08] text-[#0d2b1f] tracking-tight">
            Drive Smarter.
            <br />
            Safer. Simpler.
          </h1>

          {/* Sub-copy */}
          <p className="text-[#4a5a52] text-base md:text-lg leading-relaxed max-w-md">
            Experience real-time road intelligence, trusted verified providers,
            and smart insurance designed for the modern road.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 mt-2">
            <a
              href="/#download"
              className="inline-flex items-center gap-2 bg-[#0d2b1f] text-white font-semibold text-sm px-8 py-4 rounded-full hover:bg-[#0d6e4a] transition-colors duration-200"
            >
              Download App
              <Download size={18} />
            </a>
            <a
              href="/"
              className="inline-flex items-center gap-2 bg-white text-[#0d2b1f] font-semibold text-sm px-8 py-4 rounded-full border border-transparent hover:border-[#0d2b1f] transition-colors duration-200"
            >
              Explore Services
            </a>
          </div>
        </div>

        {/* ── Right column ── */}
        <div className="relative order-1 md:order-2 flex justify-center md:justify-end">
          <div className="relative w-[500px] h-[440px] rounded-[2.5rem] overflow-hidden shadow-3xl">
            <Image
              src="/navigate.png"
              alt="Car navigation system showing real-time map"
              fill
              className="w-full h-auto object-cover"
              priority
            />
          </div>

          {/* Floating trust badge */}
          <div className="absolute -bottom-4 left-4 md:left-10 bg-white rounded-2xl shadow-xl px-5 py-6 flex items-start gap-3 max-w-[230px]">
            <div>
              <p className="flex items-center gap-2 text-[14px] font-extralight text-[#0d2b1f] leading-tight">
                <FcApproval size={23} color="#0d2b1f" />
                Voita Mark of Approval
              </p>
              <p className="text-[12px] text-[#4a5a52] mt-2 leading-snug">
                Trusted by 50,000+ drivers across the continent.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
