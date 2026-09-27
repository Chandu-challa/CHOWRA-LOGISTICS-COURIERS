import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { ShipmentTracker } from "@/components/sections/ShipmentTracker";
import { About } from "@/components/sections/About";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Services } from "@/components/sections/Services";
import { NetworkCoverage } from "@/components/sections/NetworkCoverage";
import { QuoteCalculator } from "@/components/sections/QuoteCalculator";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Partners } from "@/components/sections/Partners";
import { CorporateLogistics } from "@/components/sections/CorporateLogistics";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ShipmentTracker />
      <HowItWorks />
      <Services />
      <NetworkCoverage />
      <About />
      <QuoteCalculator />
      <WhyChooseUs />
      <Partners />
      <CorporateLogistics />
      <CTA />
    </>
  );
}
