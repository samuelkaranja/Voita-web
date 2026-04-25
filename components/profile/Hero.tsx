import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/evergreen.png"
          alt="Forest background"
          fill
          priority
          className="object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#001810] via-[#001810cc] to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="max-w-2xl text-white">
          
          {/* Badge */}
          <div className="inline-block px-4 py-1.5 mb-8 text-xs font-bold tracking-[0.2rem] text-emerald-300 uppercase border border-emerald-500/30 backdrop-blur-sm bg-emerald-500/20 rounded-full">
            Automotive Archive
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white leading-[0.9] mb-8">
            Your Car's Vital <br /> Records, <br /> Mastered.
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-emerald-100/80 mb-8 leading-relaxed max-w-xl font-medium">
            From gearbox oil specs to license renewals, Voita keeps your automotive life organized in one secure digital archive. Download the app to start your registry today.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#" 
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#001810] font-semibold rounded-2xl hover:scale-[1.02] transition-transform shadow-xl hover:bg-gray-100 transition-colors shadow-lg"
            >
            <div className="text-left">
            <span className="block text-[9px] text-gray-800 uppercase opacity-60 leading-none mb-1">Download on the</span>
            <span className="text-lg font-bold leading-none">App Store</span>
            </div>
            </a>
            <a 
              href="#" 
              className="inline-flex items-center justify-center px-8 py-4 bg-[#052f23] border border-emerald-800 text-white font-semibold rounded-2xl hover:scale-[1.02] transition-transform shadow-xl"
            >
            	<div className="text-left">
            	  <span className="block text-[10px] uppercase font-black opacity-60 leading-none mb-1">Get it on</span>
            	  <span className="text-white text-lg leading-none">Google Play</span>
            	</div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
