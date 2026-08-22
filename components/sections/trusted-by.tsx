import * as React from "react"
import LogoLoop from "@/components/ui/logo-loop"

const trustedByClientsTop = [
  { name: "Sify", logo: "/logo/sify.png" },
  { name: "TATA", logo: "/logo/tata.png" },
  { name: "BHEL", logo: "/logo/bhel.png" },
  { name: "NTPC", logo: "/logo/ntpc.png" },
  { name: "Indian Railway", logo: "/logo/indian railway.png" },
  { name: "State Bank of India", logo: "/logo/sbi.png" },
  { name: "Indian Army", logo: "/logo/indian army.png" },
  { name: "Indian Air Force", logo: "/logo/indian air force.png" },
  { name: "BSNL", logo: "/logo/bsnl.png" },
  { name: "Hero Honda", logo: "/logo/hero.png" },
]

const trustedByClientsBottom = [
  { name: "hcl", logo: "/logo/hcl.png" },
  { name: "Asian Paints", logo: "/logo/asian paints.png" },
  { name: "vodaphone", logo: "/logo/vodaphone.png" },
  { name: "gail", logo: "/logo/gail.png" },
  { name: "videocon", logo: "/logo/videocon.png" },
]

export default function TrustedBy() {
  const renderClientNode = (client: { name: string; logo: string }, index: number) => ({
    node: (
      <div className="flex flex-col items-center gap-1">
          {client.logo ? (
             <img 
               src={client.logo} 
               alt={client.name} 
               key={index}
             />
          ) : (
            <span className="text-xs text-white/50 text-center">Logo Placeholder</span>
          )}
      </div>
    )
  });

  const logosTop = trustedByClientsTop.map(renderClientNode);
  const logosBottom = trustedByClientsBottom.map(renderClientNode);

  return (
    <section className="bg-[#1C1C28] px-4 py-16 sm:px-6 md:px-8 lg:py-20 overflow-hidden">
      <div className="mx-auto w-full">
        <div className="mb-12 text-center">
          <span className="block text-xs font-semibold uppercase tracking-wider text-ash-orange">
            Trusted By
          </span>
          <h2 className="mt-2 font-display text-2xl font-semibold text-white sm:text-3xl">
            Organizations We've{" "}
            <span className="border-b-[3px] border-si-green pb-0.5">
              worked
            </span>
            {" "}With
          </h2>
        </div>

        <div className="mx-auto max-w-[100vw] flex flex-col gap-12">
           <LogoLoop 
             logos={logosTop}
             speed={50}
             gap={60}
             logoHeight={64}
             fadeOut={true}
           />
           <LogoLoop 
             logos={logosBottom}
             speed={50}
             direction="right"
             gap={60}
             logoHeight={64}
             fadeOut={true}
           />
        </div>
      </div>
    </section>
  )
}
