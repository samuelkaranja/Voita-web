export default function CTASection() {
  return (
    <section className="mt-16 md:mt-20" id="intelligence-download">
      <div
        className="rounded-3xl px-8 sm:px-14 md:px-20 py-14 md:py-20 text-center"
        style={{ backgroundColor: "#0d1f1a" }}
      >
        {/* Headline */}
        <h2
          className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold tracking-tight mb-5 text-white"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          Ready for the Intelligent Road?
        </h2>

        {/* Subtext */}
        <p
          className="text-sm sm:text-[15px] leading-relaxed max-w-[460px] mx-auto mb-10"
          style={{ color: "#9ca3af" }}
        >
          Join thousands of drivers who trust Voita for safer, smarter, and more
          efficient journeys.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Primary: iOS */}
          <button
            className="w-full sm:w-auto px-8 py-3.5 rounded-full text-sm font-semibold transition-opacity duration-200 hover:opacity-90 hover:cursor-pointer"
            style={{
              backgroundColor: "#4ecba0",
              color: "#0d1f1a",
            }}
          >
            Download for iOS
          </button>

          {/* Secondary: Android */}
          <button
            className="w-full sm:w-auto px-8 py-3.5 rounded-full text-sm font-semibold border transition-colors duration-200 hover:bg-white/10 hover:cursor-pointer"
            style={{
              borderColor: "rgba(255,255,255,0.35)",
              color: "#0d1f1a",
              backgroundColor: "#ffffff",
            }}
          >
            Download for Android
          </button>
        </div>
      </div>
    </section>
  );
}
