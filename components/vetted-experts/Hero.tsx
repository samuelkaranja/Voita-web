import { Download, VerifiedIcon } from "lucide-react";

export default function Hero() {
  return (
    <section className="w-full bg-[#f7faf8] py-16 md:py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider">
              Experience Voita
            </span>

            <h1 className="text-5xl md:text-6xl font-bold text-emerald-950 leading-tight">
              Vetted Expert <br className="hidden md:block" /> Directory
            </h1>

            <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
              Discover how Voita connects you with verified automotive
              professionals. From precision mechanics to premium upholstery, our
              app ensures your vehicle deserves botanical-grade care through a
              rigorous verification protocol.
            </p>

            <button className="flex items-center gap-2 bg-slate-950 text-white px-8 py-4 rounded-full font-medium hover:bg-slate-800 transition-all duration-300">
              Download App
              <Download size={18} />
            </button>
          </div>

          {/* Right Image/Graphic Area */}
          <div className="relative mt-8 md:mt-16 md:ml-12">
            {/* Main Image Container (Angled) */}
            <div className="relative rounded-4xl overflow-hidden shadow-2xl rotate-3 transform transition-transform hover:rotate-0 duration-500">
              <img
                src="/garage.png"
                alt="Car in a garage"
                className="w-full h-[450px] object-cover filter contrast-[1.1]"
              />

              {/* --- NEW STRONG OVERLAY --- */}
              {/* This overlay creates the green duotone look. Adjust opacity (/70) to your preference */}
              <div className="absolute inset-0 bg-emerald-400/70 mix-blend-multiply" />
              {/* ------------------------- */}
            </div>

            {/* Floating Card (Transparent/Glassmorphism) */}
            <div className="absolute -bottom-10 -left-6 md:-left-12 bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/50 max-w-xs animate-in slide-in-from-bottom-4 duration-500 z-10">
              <div className="flex gap-4 items-start">
                <div className="text-emerald-600 mt-1">
                  <VerifiedIcon
                    size={24}
                    fill="currentColor"
                    className="text-emerald-500"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Verified Network</h3>
                  <p className="text-sm text-slate-700 mt-1">
                    Every professional passes our 12-point quality archival
                    check within the platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
