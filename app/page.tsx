import Link from "next/link";
import Hero from "@/components/sections/hero";
import AboutSnippet from "@/components/sections/about-snippet";
import TrustedBy from "@/components/sections/trusted-by";
import CategoryShowcase from "@/components/sections/category-showcase";
import Registered from "@/components/sections/registered";
import CtaSection from "@/components/sections/cta-section";
import FAQ from "@/components/sections/faq";
import CapabilityReveal from "@/components/sections/capability-reveal";
import ProductFeatureSection from "@/components/home/ProductFeatureSection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Hero />
      <TrustedBy />
      <AboutSnippet />
      <Registered />

      {/* Earthing Feature Section */}
      <ProductFeatureSection
        eyebrow="MAINTENANCE-FREE EARTHING"
        title="Earthing That Doesn't Need You to Remember It"
        description="Ash Gel Earthing Electrode uses a dual-pipe protection design — an ISI-marked G.I. or copper pipe filled with a conductive, non-corrosive gel compound. Unlike traditional earthing, the electrode never sits in direct contact with soil, so there's no corrosion and no fluctuating resistance to chase down every few years."
        benefits={[
          { icon: "ShieldCheck", text: "Fit and forget — no replacement every 3-4 years like traditional salt/charcoal backfill earthing." },
          { icon: "Zap", text: "Stable ohmic value that holds steady over time instead of drifting upward with age." },
          { icon: "ShieldOff", text: "Zero direct soil contact means zero corrosion of the electrode itself." },
          { icon: "Ruler", text: "Smaller installation footprint — less space and time to install than conventional grid earthing." }
        ]}
        badges={["ISO 9001:2008 Certified", "CPRI & RDSO Tested", "Eco-Friendly Compound"]}
        imageSrc={undefined}
        imagePosition="right"
        ctaLabel="Learn More"
        ctaHref="/products"
      />

      {/* Lightning Arrestor Feature Section */}
      <ProductFeatureSection
        eyebrow="LIGHTNING PROTECTION"
        title="Intercepts the Strike Before It Reaches You"
        description="The Ash Stormflash Early Streamer Emission (ESE) Air Terminal generates an early upward leader ahead of a natural lightning strike, capturing it at a controlled point and guiding the current safely to the earth termination system — no battery, no external power, active the moment it's installed."
        benefits={[
          { icon: "BatteryOff", text: "No battery or external power source required — fully passive, always on." },
          { icon: "BadgeCheck", text: "Certified to NF C 17-102 (2011) and UNE 21186 international standards." },
          { icon: "Gauge", text: "CPRI-tested to a 70kA impulse current rating (8/20 µSec)." },
          { icon: "ShieldCheck", text: "304L stainless steel construction, built for any environmental condition." },
          { icon: "CalendarCheck", text: "20-year warranty." }
        ]}
        badges={["NF C 17-102 Certified", "CPRI Tested", "20-Year Warranty"]}
        imageSrc={undefined}
        imagePosition="left"
        ctaLabel="Learn More"
        ctaHref="/products"
      />

      <CategoryShowcase />
      <FAQ />
      <CapabilityReveal />
      <CtaSection />
    </div>
  );
}
