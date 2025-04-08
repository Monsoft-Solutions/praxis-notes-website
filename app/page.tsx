import Hero from "website/components/sections/hero";
import Features from "website/components/sections/features";
import Testimonials from "website/components/sections/testimonials";
import CTA from "website/components/sections/cta";
import HowItWorks from "website/components/sections/how-it-works";
import Pricing from "website/components/sections/pricing";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <CTA />
    </>
  );
}
