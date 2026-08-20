"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { AccordionItem } from "@/components/ui/accordion-item"

const faqData = [
  {
    question: "What industries and sectors do you serve?",
    answer:
      "We work with industrial, institutional, and government clients across manufacturing, railways, defence, banking, and telecom — including organizations like TATA, NTPC, Indian Railway, and BSNL.",
  },
  {
    question: "Do you work on government tenders (GeM, CPWD, IREPS)?",
    answer:
      "Yes. Structure India is registered on GeM, CPWD, and IREPS, and we regularly execute both government tender projects and private industrial contracts.",
  },
  {
    question: "Do you execute projects outside Uttar Pradesh?",
    answer:
      "Yes. While our manufacturing facility is based in Ghaziabad, UP, we deliver and execute projects across every state in India.",
  },
  {
    question: "What information do you need to provide a quote?",
    answer:
      "Project scope, site location, and any technical specifications or drawings you have. Select 'New Project / Tender Enquiry' on our Contact page and our team will follow up with exact requirements.",
  },
  {
    question:
      "Do you offer AMC (Annual Maintenance Contract) after project completion?",
    answer:
      "Yes. We provide AMC and ongoing service support for water treatment plants, earthing systems, and other installations after commissioning.",
  },
  {
    question: "Are your products independently certified?",
    answer:
      "Yes. Structure India is ISO 9001:2015 certified, and our earthing and lightning protection products are independently tested by CPRI and RDSO.",
  },
]


export default function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null)
  const count = faqData.length.toString().padStart(2, "0")

  return (
    <section className="bg-surface-alt px-5 py-16 sm:px-8 sm:py-20 lg:px-20 lg:py-24">
      <div className="mx-auto max-w-6xl lg:grid lg:grid-cols-[minmax(260px,320px)_1fr] lg:gap-x-16">
        {/* LEFT RAIL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="lg:sticky lg:top-32 lg:self-start"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-ash-orange">
              FAQ
            </span>
            <span className="font-mono text-xs text-ink-muted/60">
              {count} Clauses
            </span>
          </div>

          <h2 className="mt-3 font-display text-2xl font-semibold text-ink sm:text-3xl">
            Frequently Asked Questions
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-ink-muted sm:text-base">
            Common questions from tender officers and site engineers,
            answered.
          </p>

          <a
            href="tel:+911204240615"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-ash-orange transition-colors hover:text-ash-orange/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ash-orange/50 focus-visible:ring-offset-2"
          >
            Prefer to talk? Call +91 120 4240615
          </a>

          <div className="mt-10">
          </div>
        </motion.div>

        {/* RIGHT — ACCORDION LIST */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 overflow-hidden rounded-xl border border-border bg-surface px-5 sm:px-8 lg:mt-0"
        >
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              id={`faq-${index}`}
              number={String(index + 1).padStart(2, "0")}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onToggle={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}