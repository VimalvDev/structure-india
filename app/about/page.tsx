import CompanyProfile from "@/components/sections/company-profile"
import WhyChooseUs from "@/components/sections/why-choose-us"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Structure India",
  description: "Structure India provides turnkey engineering solutions. ISO 9001:2015 certified, offering end-to-end EPC infrastructure services since 2005.",
}

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col pt-20 sm:pt-24">
      <CompanyProfile />
      <WhyChooseUs />
    </main>
  )
}
