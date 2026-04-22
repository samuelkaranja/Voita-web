import { Search, ArrowDownToLine } from 'lucide-react';

export default function SearchSection() {
  return (
    <section className="flex flex-col items-center justify-center py-16 px-6 bg-white w-full">
      {/* Icon Container */}
      <div className="mb-6 flex items-center justify-center w-20 h-20 bg-[#8ff6d0] rounded-full">
        <Search className="w-8 h-8 text-teal-600" strokeWidth={2.5} />
      </div>

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
        Intelligent Search Logic
      </h2>

      {/* Description */}
      <p className="max-w-xl text-center text-gray-600 text-lg leading-relaxed mb-8">
        Voita&apos;s in-app search uses advanced filters to match you with specialists 
        based on location, rating, and specific expertise—all within a seamless mobile interface.
      </p>

      {/* CTA Button */}
      <button className="flex items-center gap-2 bg-[#001810] text-white text-lg px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition-colors duration-200">
        Get Started with Voita
        <ArrowDownToLine className="w-5 h-5" color="white" />
      </button>
    </section>
  );
};

