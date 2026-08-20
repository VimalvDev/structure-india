import * as React from "react"
import Image from "next/image"

type Client = {
  name: string
  logo: string | null
}

const trustedByClients: readonly Client[] = [
  { name: "Sify", logo: null },
  { name: "TATA", logo: null },
  { name: "BHEL", logo: null },
  { name: "NTPC", logo: null },
  { name: "Indian Railway", logo: null },
  { name: "State Bank of India", logo: null },
  { name: "Indian Army", logo: null },
  { name: "Indian Air Force", logo: null },
  { name: "BSNL", logo: null },
]

export default function TrustedBy() {
  return (
    <section className="border-t border-border bg-surface-alt px-4 py-16 sm:px-6 md:px-8 lg:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <span className="block text-xs font-semibold uppercase tracking-wider text-ash-orange">
            Trusted By
          </span>
          <h2 className="mt-2 font-display text-2xl font-semibold text-ink sm:text-3xl">
            Organizations We've{" "}
            <span className="border-b-[3px] border-ash-orange pb-0.5">
              worked
            </span>
            
             {" "}With
          </h2>
        </div>

        <div className="grid grid-cols-2  sm:grid-cols-3 lg:grid-cols-6">
          {trustedByClients.map((client) => (
            <div
              key={client.name}
              className="flex items-center justify-center border-b border-border pb-4"
            >
              {client.logo ? (
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={120}
                  height={32}
                  className="h-8 w-auto object-contain"
                />
              ) : (
                <span className="text-center text-base font-semibold text-ink-muted transition-colors duration-150 hover:text-ink sm:text-lg">
                  {client.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
