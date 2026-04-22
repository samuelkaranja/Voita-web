import Image from 'next/image';
import { MapPin, Briefcase } from 'lucide-react';

export default function Discovery() {
  return (
    <section className="w-full bg-[#f7faf8] py-24 px-8 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Content */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Proximity-Based Discovery
          </h2>
          
          <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
            The Voita app utilizes real-time proximity mapping to connect you 
            with verified garages and experts in your immediate vicinity.
          </p>

          {/* Info Card */}
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100 max-w-sm shadow-sm">
            <div className="w-16 h-12 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
               <div className="w-full h-full bg-slate-300 flex items-center justify-center">
                 <Briefcase size={20} className="text-slate-500" />
               </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Nearby Expert Node</h3>
              <div className="flex items-center gap-1 text-sm text-gray-500">
                <MapPin size={14} className="text-emerald-600" />
                <span>Active Coverage</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Map Visualization as an Image */}
        <div className="relative w-full h-[400px] md:h-[450px] rounded-3xl overflow-hidden border border-gray-100 shadow-inner">
          <Image 
            src="/discover.png"
            alt="Proximity Map Visualization"
            fill
            className="object-cover"
            priority
          />

          {/* Map Pins (Overlay) */}
          <div className="absolute top-1/4 left-1/3 bg-gray-900 text-white p-2 rounded-full shadow-lg z-10">
            <Briefcase size={16} />
          </div>
          
          <div className="absolute bottom-1/3 right-1/4 bg-emerald-700 text-white p-2 rounded-full shadow-lg z-10">
            <Briefcase size={16} />
          </div>
        </div>

      </div>
    </section>
  );
};
