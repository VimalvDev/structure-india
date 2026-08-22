import Link from "next/link";
import Hero from "@/components/sections/hero";
import AboutSnippet from "@/components/sections/about-snippet";
import TrustedBy from "@/components/sections/trusted-by";
import CategoryShowcase from "@/components/sections/category-showcase";
import Registered from "@/components/sections/registered";
import CtaSection from "@/components/sections/cta-section";
import FAQ from "@/components/sections/faq";
import CapabilityReveal from "@/components/sections/capability-reveal";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Hero />
      <TrustedBy />
      <AboutSnippet />
      <Registered />
      <CategoryShowcase />
      <FAQ />
      <CapabilityReveal />
      <CtaSection />
    </div>
  );
}
