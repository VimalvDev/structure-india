import { notFound } from "next/navigation"
import Link from "next/link"
import type { Metadata } from "next"
import { ashProducts } from "@/lib/data/ash-products"
import { ImageIcon, CircleCheck, Phone } from "lucide-react"
import ProductDetailClient from "./ProductDetailClient"

/* ── Static generation ─────────────────────────────────────────────── */

export function generateStaticParams() {
  return ashProducts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const product = ashProducts.find((p) => p.slug === slug)
  if (!product) return {}
  return {
    title: `${product.name} | Ash`,
    description: product.shortDescription,
  }
}

/* ── Page ──────────────────────────────────────────────────────────── */

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = ashProducts.find((p) => p.slug === slug)
  if (!product) notFound()

  return (
    <div className="bg-surface pb-16 pt-32 sm:pb-24 sm:pt-40">
      <div className="mx-auto w-full max-w-5xl px-5 sm:px-8 lg:px-12">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-ink-muted">
          <ol className="flex items-center gap-1.5">
            <li>
              <Link
                href="/products"
                className="transition-colors hover:text-ink"
              >
                Products
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="font-medium text-ink">{product.name}</li>
          </ol>
        </nav>

        {/* ── Header block ────────────────────────────────────────── */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-14">
          {/* Image placeholder */}
          <div className="w-full lg:w-[45%] lg:shrink-0">
            <div className="flex aspect-[4/3] w-full items-center justify-center rounded-2xl border border-border bg-surface-alt">
              <ImageIcon
                className="h-14 w-14 text-ink-muted/25"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Title + short desc + CTA */}
          <div className="flex flex-col">
            <h1 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
              {product.name}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
              {product.shortDescription}
            </p>

            {/* Primary CTA — rendered client-side for modal interaction */}
            <ProductDetailClient productName={product.name} position="top" />
          </div>
        </div>

        {/* ── Full description ────────────────────────────────────── */}
        <div className="mt-14 border-t border-border pt-10">
          <p className="max-w-3xl text-base leading-relaxed text-ink-muted sm:text-lg">
            {product.fullDescription}
          </p>
        </div>

        {/* ── Key Features ────────────────────────────────────────── */}
        <div className="mt-14">
          <h2 className="mb-6 text-xl font-semibold text-ink sm:text-2xl">
            Key Features
          </h2>
          <ul className="flex flex-col gap-3">
            {product.keyFeatures.map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <CircleCheck
                  className="mt-0.5 h-5 w-5 shrink-0 text-ash-orange"
                  aria-hidden="true"
                />
                <span className="text-sm leading-relaxed text-ink sm:text-base">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Technical Specifications ─────────────────────────────── */}
        {product.specTables.length > 0 && (
          <div className="mt-14">
            <h2 className="mb-6 text-xl font-semibold text-ink sm:text-2xl">
              Technical Specifications
            </h2>
            <div className="flex flex-col gap-10">
              {product.specTables.map((table, ti) => (
                <div key={ti}>
                  {table.title && (
                    <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-ink-muted">
                      {table.title}
                    </h3>
                  )}
                  <div className="overflow-x-auto rounded-xl border border-border">
                    <table className="w-full min-w-[480px] text-sm">
                      <thead>
                        <tr className="bg-surface-alt">
                          {table.columns.map((col, ci) => (
                            <th
                              key={ci}
                              className="whitespace-nowrap px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-ink-muted"
                            >
                              {col}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {table.rows.map((row, ri) => (
                          <tr
                            key={ri}
                            className={
                              ri % 2 === 1 ? "bg-surface-alt/50" : "bg-surface"
                            }
                          >
                            {row.map((cell, ci) => (
                              <td
                                key={ci}
                                className="whitespace-nowrap px-4 py-2.5 text-ink"
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Installation Guidelines ─────────────────────────────── */}
        {product.installationNotes && product.installationNotes.length > 0 && (
          <div className="mt-14">
            <h2 className="mb-6 text-xl font-semibold text-ink sm:text-2xl">
              Installation Guidelines
            </h2>
            <ol className="flex flex-col gap-3 list-none">
              {product.installationNotes.map((note, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ash-orange/10 text-xs font-bold text-ash-orange">
                    {i + 1}
                  </span>
                  <span className="text-sm leading-relaxed text-ink sm:text-base pt-0.5">
                    {note}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        )}

        {/* ── Certifications ──────────────────────────────────────── */}
        {product.certifications && product.certifications.length > 0 && (
          <div className="mt-14">
            <h2 className="mb-4 text-xl font-semibold text-ink sm:text-2xl">
              Certifications
            </h2>
            <div className="flex flex-wrap gap-2">
              {product.certifications.map((cert, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface-alt px-3.5 py-1.5 text-xs font-medium text-ink-muted"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 6 6"
                    className="h-1.5 w-1.5 fill-si-green"
                  >
                    <circle cx="3" cy="3" r="3" />
                  </svg>
                  {cert}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* ── Bottom CTA ──────────────────────────────────────────── */}
        <div className="mt-16 border-t border-border pt-10">
          <div className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left sm:justify-between">
            <div>
              <h3 className="text-lg font-semibold text-ink sm:text-xl">
                Ready to get started?
              </h3>
              <p className="mt-1 text-sm text-ink-muted">
                Leave your number and our team will reach out.
              </p>
            </div>
            <ProductDetailClient productName={product.name} position="bottom" />
          </div>
        </div>
      </div>
    </div>
  )
}
