import CTASection from "./CTASection";
import GradeCardsGrid from "./GradeCardsGrid";
import GradingSectionHeader from "./GradingSectionHeader";

export default function GradingSection() {
  return (
    <main className="bg-[#f7faf8] py-20">
      {/* Centralize the width once and apply horizontal padding */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-24">
        {/* Grading Section Wrapper */}
        <section className="mb-20">
          <GradingSectionHeader />
          <GradeCardsGrid />
        </section>

        {/* CTA Section */}
        <CTASection />
      </div>
    </main>
  );
}
