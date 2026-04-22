export default function GradingSectionHeader() {
  return (
    <div className="text-center mb-12 md:mb-16">
      {/* Eyebrow */}
      <p
        className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase mb-3"
        style={{ color: "#4ecba0" }}
      >
        The Voita Standard
      </p>

      {/* Headline */}
      <h2
        className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold tracking-tight mb-4"
        style={{ color: "#111827", fontFamily: "'Georgia', serif" }}
      >
        Road Quality Grading
      </h2>

      {/* Subtitle */}
      <p
        className="text-sm sm:text-[15px] leading-relaxed max-w-[420px] mx-auto"
        style={{ color: "#6b7280" }}
      >
        Our proprietary A-D system ensures your vehicle's health and your
        comfort are never compromised by unexpected road conditions.
      </p>
    </div>
  );
}
