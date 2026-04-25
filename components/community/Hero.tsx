import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full rounded-4xl overflow-hidden min-h-[350px] flex flex-col justify-center p-12 mb-20 text-white"
    >
      {/* Background Image Layer */}
      <Image
        src="/shop.png"
        alt="Automotive workshop background"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      <div className="absolute inset-0 z-10 bg-emerald-950/90" />

      {/* Content Layer */}
      <div className="relative z-10 max-w-2xl mt-5">
        <p className="text-[#8ff6d0] font-bold text-xs tracking-[0.2em] mb-4 uppercase">
          THE DIGITAL SANCTUARY
        </p>
        <h2 className="text-white text-3xl md:text-4xl font-extrabold mb-5 leading-tight">
          Expertise Rooted in Trust, Community Built on Care.
        </h2>
        <p className="text-[#719888] text-sm leading-relaxed max-w-lg">
          Voita is more than an app; it is a botanical archive of automotive
          knowledge and a safe haven for every driver on the Kenyan road.
        </p>
      </div>
    </section>
  );
}
