import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import * as LucideIcons from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ProductFeatureSectionProps {
  eyebrow: string
  title: string
  description: string
  benefits: { icon: string; text: string }[]
  badges: string[]
  imageSrc?: string
  imagePosition: "left" | "right"
  ctaLabel: string
  ctaHref: string
}

export default function ProductFeatureSection({
  eyebrow,
  title,
  description,
  benefits,
  badges,
  imageSrc,
  imagePosition,
  ctaLabel,
  ctaHref,
}: ProductFeatureSectionProps) {
  return (
    <section className="bg-surface px-5 py-16 sm:px-8 sm:py-20 lg:px-20 lg:py-24">
      <div className="mx-auto flex max-w-7xl flex-col lg:flex-row lg:items-center lg:gap-x-16 xl:gap-x-20">
        
        {/* IMAGE COLUMN */}
        <div 
          className={cn(
            "relative w-full lg:w-1/2",
            imagePosition === "right" ? "lg:order-2" : "lg:order-1"
          )}
        >
          <div className="relative w-full overflow-hidden rounded-3xl aspect-[4/3] lg:aspect-[4/5]">
            {imageSrc ? (
              <Image
                src={imageSrc}
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-surface-alt border border-border">
                <LucideIcons.ImageIcon className="h-12 w-12 text-ink-muted/30" aria-hidden="true" />
              </div>
            )}
          </div>
        </div>

        {/* TEXT COLUMN */}
        <div 
          className={cn(
            "mt-10 lg:mt-0 flex flex-col w-full lg:w-1/2",
            imagePosition === "right" ? "lg:order-1" : "lg:order-2"
          )}
        >
          <span className="mb-3 block text-[11px] font-bold uppercase tracking-[0.2em] text-ink-muted">
            {eyebrow}
          </span>
          <h2 className="font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ink-muted sm:text-lg">
            {description}
          </p>

          <div className="mt-8 flex flex-col gap-5">
            {benefits.map((benefit, i) => {
              const Icon = LucideIcons[benefit.icon as keyof typeof LucideIcons] as React.ElementType
              return (
                <div key={i} className="flex items-start gap-4">
                  <div className="mt-1 flex shrink-0 items-center justify-center">
                    {Icon ? (
                      <Icon className="h-6 w-6 text-ash-orange stroke-[1.5]" aria-hidden="true" />
                    ) : (
                      <div className="h-6 w-6 bg-ash-orange/20 rounded-full" />
                    )}
                  </div>
                  <p className="text-sm leading-relaxed text-ink sm:text-base">
                    {benefit.text}
                  </p>
                </div>
              )
            })}
          </div>

          {badges && badges.length > 0 && (
            <div className="mt-10 flex flex-wrap gap-2">
              {badges.map((badge, i) => (
                <span 
                  key={i} 
                  className="inline-flex items-center rounded-full border border-border bg-surface-alt px-3 py-1 text-xs font-medium text-ink-muted"
                >
                  {badge}
                </span>
              ))}
            </div>
          )}

          <div className="mt-10">
            <Button 
              asChild 
              className="h-12 rounded-full bg-ash-orange px-8 text-sm font-semibold text-white hover:bg-ash-orange/90 transition-colors"
            >
              <Link href={ctaHref}>
                {ctaLabel}
              </Link>
            </Button>
          </div>
        </div>

      </div>
    </section>
  )
}
