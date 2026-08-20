import * as React from "react"
import { Award, ShieldCheck, Clock, Landmark, Factory, Handshake } from "lucide-react"

const features = [
  {
    icon: Award,
    title: "ISO 9001:2015 Certified",
    description: "Quality management systems certified to international standards across all seven engineering categories."
  },
  {
    icon: ShieldCheck,
    title: "CPRI & RDSO Tested",
    description: "Earthing and lightning protection products independently tested by CPRI and RDSO for reliability and compliance."
  },
  {
    icon: Clock,
    title: "Timely Execution",
    description: "Experienced project teams capable of completing tender and private work within stipulated timelines."
  },
  {
    icon: Landmark,
    title: "Tender Ready",
    description: "Registered on GeM, CPWD, and IREPS platforms, with an established track record in government and private tenders."
  },
  {
    icon: Factory,
    title: "In-House Manufacturing",
    description: "Cooling towers, earthing electrodes, and treatment plant components manufactured at our own Ghaziabad facility."
  },
  {
    icon: Handshake,
    title: "Long-Term Client Relationships",
    description: "Trusted by industrial and institutional clients across multiple repeat and multi-site projects."
  }
]

export default function WhyChooseUs() {
  return (
    <section className="bg-surface-alt px-5 py-16 sm:px-8 sm:py-20 lg:px-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 font-display text-2xl font-semibold text-ink sm:text-3xl">
          Why Choose Structure India?
        </h2>

        <div className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="flex flex-col border-t border-border pt-8 sm:pt-10">
                <Icon className="h-8 w-8 text-ash-orange" aria-hidden="true" />
                <h3 className="mt-6 text-lg font-semibold text-ink">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
