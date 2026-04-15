import Ecosystem from "@/components/landing-page/Ecosystem";
import Hero from "@/components/landing-page/Hero";
import Pricing from "../components/landing-page/Pricing";
import CTA from "@/components/landing-page/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Ecosystem />
      <Pricing />
      <CTA />
    </>
  );
}
