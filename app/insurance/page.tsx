import Hero from "@/components/insurance/Hero";
import ProtectionSection from "@/components/insurance/ProtectionSection";
import HardwareSection from "@/components/insurance/HardwareSection";
import PrecisionSection from "@/components/insurance/PrecisionSection";
import ClaimsSection from "@/components/insurance/ClaimsSection";
import GaragesSection from "@/components/insurance/GaragesSection";

export default function InsurancePage() {
  return (
    <main>
      <Hero />
      <ProtectionSection />
      <HardwareSection />
      <PrecisionSection />
      <ClaimsSection />
      <GaragesSection />
    </main>
  );
}
