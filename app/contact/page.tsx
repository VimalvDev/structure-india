import React from "react"
import { Metadata } from "next"
import ContactForm from "@/components/forms/contact-form"
import { Mail, MapPin, Phone } from "lucide-react"
import FAQ from "@/components/sections/faq"

export const metadata: Metadata = {
  title: "Contact Us | Structure India",
  description: "Get in touch with Structure India for turnkey infrastructure solutions, tender enquiries, existing orders, or AMC service requests.",
}

export default function ContactPage() {
  return (
    <div className="flex flex-col bg-surface-alt">
      {/* Page Header */}
      <section className="bg-ink px-5 pb-16 pt-32 sm:px-8 sm:pb-24 lg:px-12 lg:pt-40">
        <div className="mx-auto max-w-7xl">
          <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Contact Us
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/80 sm:mt-6 sm:text-xl">
            Our team is ready to assist you with new projects, existing orders, and service requests. Reach out using the form below.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-5 py-12 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
            
            {/* Form Column */}
            <div className="lg:col-span-7 xl:col-span-8">
              <div className="-mt-24 sm:-mt-32 relative z-10">
                <ContactForm />
              </div>
            </div>

            {/* Contact Information Column */}
            <div className="lg:col-span-5 xl:col-span-4 lg:pl-8">
              <div className="flex flex-col gap-10">
                <div>
                  <h2 className="font-display text-2xl font-bold text-ink">Get in Touch</h2>
                  <p className="mt-2 text-ink-muted leading-relaxed">
                    Prefer to reach out directly? Use the contact details below to get in touch with our corporate office.
                  </p>
                </div>

                <div className="flex flex-col gap-8">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-ash-orange/10">
                      <MapPin className="h-6 w-6 text-ash-orange" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-ink">Corporate Office</h3>
                      <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                        547–548, 5th Floor, Cloud 9, <br />
                        Corporate Tower, Sector-1, <br />
                        Vaishali, Ghaziabad – 201010 <br />
                        (UP), India
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-ash-orange/10">
                      <Phone className="h-6 w-6 text-ash-orange" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-ink">Phone</h3>
                      <div className="mt-1 flex flex-col gap-1">
                        <a href="tel:+911204240615" className="text-sm text-ink-muted transition-colors hover:text-ash-orange">
                          Tel: +91 120 4240615
                        </a>
                        <a href="tel:+919868525835" className="text-sm text-ink-muted transition-colors hover:text-ash-orange">
                          Mobile: +91 98685 25835 / 36
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-ash-orange/10">
                      <Mail className="h-6 w-6 text-ash-orange" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-ink">Email</h3>
                      <p className="mt-1 text-sm text-ink-muted">
                        <a href="mailto:structureindia_delhi@rediffmail.com" className="transition-colors hover:text-ash-orange">
                          structureindia_delhi@rediffmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />
    </div>
  )
}
