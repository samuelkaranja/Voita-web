import { Check } from 'lucide-react';

export default function Excellence() {
  return (
    <section className="w-full bg-[#03140C] py-16 px-6 md:px-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Side: Text Content */}
        <div className="flex flex-col gap-6 max-w-xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            The Mark of Archival Excellence
          </h2>
          <p className="text-lg text-emerald-100/70 leading-relaxed">
            Join over 12,000 collectors and daily drivers who trust Voita to safeguard their automotive history.
          </p>
          
          {/* Stats Section */}
          <div className="flex items-center gap-4 mt-2">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-emerald-600 border-2 border-[#03140C]" />
              ))}
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg">12k+</span>
              <span className="text-emerald-500 text-xs font-semibold uppercase tracking-wider">
                Verified Archives
              </span>
            </div>
          </div>
        </div>

        {/* Right Side: Badge & Rings */}
        <div className="relative flex items-center justify-center w-64 h-64">
          {/* Outer Ring */}
          <div className="absolute w-64 h-64 rounded-full border border-emerald-900/40" />
          
          {/* Inner Ring */}
          <div className="absolute w-44 h-44 rounded-full border border-emerald-900/60" />
          
          {/* Main Badge */}
          <div className="w-24 h-24 rounded-full bg-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-900/20">
            <Check className="w-10 h-10 text-white stroke-[3]" />
          </div>
        </div>
      </div>
    </section>
  );
};
