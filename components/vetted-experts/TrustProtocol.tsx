import { ShieldCheck, MessageSquareText, CheckCircle2 } from 'lucide-react';

export default function TrustProtocol() {
  return (
    <section className="bg-[#011f16] py-18 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            The Trust Protocol
          </h2>
          <p className="text-emerald-100/70 text-lg">
            Seamless integration between your insurance and our service network, managed in the app.
          </p>
        </div>

        {/* Protocol Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Insurance Integration Card */}
          <div className="bg-white/5 p-10 rounded-[2.5rem] border border-white/10 flex flex-col gap-6">
          <div className="flex items-center gap-4 mb-2">
            <div className="bg-[#8ff6d0] w-14 h-16 rounded-2xl flex items-center justify-center text-emerald-400">
              <ShieldCheck size={28} color="black" />
            </div>
            
            <h3 className="text-2xl font-bold text-white">Insurance Integration</h3>
            </div>
            <p className="text-emerald-100/60 leading-relaxed">
              The platform identifies garages that are pre-approved by your insurance provider, facilitating smooth claims and authorized repairs without manual searching.
            </p>

            {/* Premium Link Box */}
            <div className="bg-[#052f23] border border-white/5 p-6 rounded-2xl mt-auto">
              <div>
              <div className="flex items-center justify-between mb-2">
                <p className="font-semibold text-white">Voita Premium Link</p>
                <CheckCircle2 className="text-emerald-500" size={20} />
              </div>
              <p className="text-xs text-emerald-100/50 mt-1">Automated verification of coverage eligibility for nearby service nodes.</p>
              </div>
            </div>
          </div>

          {/* Verified Community Card */}
          <div className="bg-[#0d2620] p-8 rounded-3xl border border-emerald-900/30 flex flex-col gap-6">
          <div className="flex items-center gap-4 mb-2">
            <div className="bg-[#8ff6d0] w-14 h-16 rounded-2xl flex items-center justify-center text-emerald-400">
              <MessageSquareText size={28} color="black" />
            </div>
            
            <h3 className="text-2xl font-semibold text-white">Verified Community</h3>
            </div>
            <div className="flex flex-col gap-4">
              <blockquote className="bg-[#0a1e19] p-5 rounded-xl text-emerald-100/70 italic border-l-4 border-emerald-700/50">
                "The verified badge gave me the confidence to trust specialists with my restoration. Total transparency within the app ecosystem."
              </blockquote>
              <blockquote className="bg-[#0a1e19] p-5 rounded-xl text-emerald-100/70 italic border-l-4 border-emerald-700/50">
                "Love the gender-filtering feature for instructors. It's thoughtful, respectful, and easily accessible."
              </blockquote>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
