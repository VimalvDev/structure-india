import Link from "next/link";
import {
  Shield,
  Droplets,
  Wind,
  Cable,
  Gauge,
  Zap,
  Sun,
  Award,
  Layers,
  Building2,
  MapPin,
  ArrowRight,
  ImageIcon,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { HeroThreadline, StatThreadline } from "@/components/sections/schematic-threadline";

/* ────────────────────────────────────────────────────────────────────
   CATEGORY DATA
   ──────────────────────────────────────────────────────────────────── */

const categories = [
  {
    name: "Earthing & Lightning Protection",
    slug: "earthing-lightning-protection",
    icon: Shield,
    description:
      "Gel, pipe, and strip earthing electrodes with maintenance-free chemical compounds for reliable grounding in any soil condition.",
  },
  {
    name: "Water & Wastewater Treatment",
    slug: "water-wastewater-treatment",
    icon: Droplets,
    description:
      "STP, ETP, WTP, RO systems, softeners, DM plants, and mineral water plants — from 100 LPH domestic units to industrial-scale installations.",
  },
  {
    name: "Cooling Towers",
    slug: "cooling-towers",
    icon: Wind,
    description:
      "FRP and timber cooling towers for HVAC, process cooling, and industrial applications, manufactured in-house at our Ghaziabad facility.",
  },
  {
    name: "OFC / Fiber Infrastructure",
    slug: "ofc-fiber-infrastructure",
    icon: Cable,
    description:
      "End-to-end optical fiber cable installation — trenching, blowing, splicing, and OTDR testing for telecom and enterprise networks.",
  },
  {
    name: "Smart Metering",
    slug: "smart-metering",
    icon: Gauge,
    description:
      "AMI/AMR smart meter deployment, MDMS integration, and field installation for utility modernization and government smart-grid tenders.",
  },
  {
    name: "Electrical Installation",
    slug: "electrical-installation",
    icon: Zap,
    description:
      "HT/LT panel installation, transformer commissioning, cable laying, and complete electrical infrastructure for industrial and commercial projects.",
  },
  {
    name: "Solar Power Solutions",
    slug: "solar-power-solutions",
    icon: Sun,
    description:
      "Rooftop and ground-mounted solar PV systems — design, procurement, installation, and net metering for commercial and government buildings.",
  },
] as const;

/* ────────────────────────────────────────────────────────────────────
   WHY-US STATS
   ──────────────────────────────────────────────────────────────────── */

const stats = [
  {
    icon: Award,
    value: "ISO 9001:2015",
    label: "Certified quality management",
  },
  {
    icon: Layers,
    value: "7",
    label: "Engineering categories under one roof",
  },
  {
    icon: Building2,
    value: "MSME · NSIC",
    label: "Registered for government procurement",
  },
  {
    icon: MapPin,
    value: "Ghaziabad, UP",
    label: "In-house manufacturing facility",
  },
] as const;

/* ════════════════════════════════════════════════════════════════════
   PAGE
   ════════════════════════════════════════════════════════════════════ */

export default function Home() {
  return (
    <main>
      {/* ── 1. HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-surface px-4 pb-16 pt-20 sm:px-6 md:px-8 lg:pb-24 lg:pt-28">
        {/* Schematic threadline motif — behind everything */}
        <HeroThreadline />

        <div className="relative mx-auto max-w-4xl">
          <h1 className="hero-fade-up hero-fade-up-1 font-display text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Built to pass inspection.
          </h1>

          <p className="hero-fade-up hero-fade-up-2 mt-5 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg sm:leading-relaxed">
            Structure India designs, manufactures, and installs earthing
            systems, water &amp; wastewater treatment plants, cooling towers,
            solar power systems, fiber infrastructure, smart metering, and
            electrical installations — under the Ash brand. ISO&nbsp;9001:2015
            certified. MSME and NSIC registered.
          </p>

          <div className="hero-fade-up hero-fade-up-3 mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center rounded-lg bg-ash-orange px-6 text-sm font-semibold text-white transition-colors duration-150 hover:bg-ash-orange/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ash-orange/50 focus-visible:ring-offset-2"
            >
              Get a Quote
            </Link>
            <Link
              href="/products"
              className="inline-flex h-11 items-center justify-center rounded-lg border border-border px-6 text-sm font-semibold text-ink transition-colors duration-150 hover:bg-surface-alt focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/20 focus-visible:ring-offset-2"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </section>

      {/* ── 2. TRUST STRIP ──────────────────────────────────────── */}
      <section className="border-y border-border bg-surface-alt px-4 py-5 sm:px-6 md:px-8">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-x-6 gap-y-2 sm:gap-x-8">
          {[
            "ISO 9001:2015",
            "MSME / UDYAM Registered",
            "NSIC Registered",
            "GST Registered",
          ].map((badge) => (
            <span
              key={badge}
              className="inline-flex items-center gap-1.5 text-xs font-medium tracking-wide text-ink-muted sm:text-sm"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 6 6"
                className="h-1.5 w-1.5 fill-si-green"
              >
                <circle cx="3" cy="3" r="3" />
              </svg>
              {badge}
            </span>
          ))}
        </div>
      </section>

      {/* ── 3. CATEGORY GRID ────────────────────────────────────── */}
      <section className="bg-surface px-4 py-16 sm:px-6 md:px-8 lg:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            What we build
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <Link
                  key={cat.slug}
                  href={`/products/${cat.slug}`}
                  className="group block"
                >
                  <Card className="h-full border-border bg-surface transition-shadow duration-150 group-hover:shadow-md group-focus-visible:ring-2 group-focus-visible:ring-ash-orange/40 group-focus-visible:ring-offset-2">
                    <CardHeader>
                      <div className="mb-1 flex h-9 w-9 items-center justify-center rounded-md bg-surface-alt text-ink-muted transition-colors duration-150 group-hover:bg-ash-orange/10 group-hover:text-ash-orange">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <CardTitle className="text-sm font-semibold text-ink">
                        {cat.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm leading-relaxed text-ink-muted">
                        {cat.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. ABOUT SNIPPET ────────────────────────────────────── */}
      <section className="bg-surface-alt px-4 py-16 sm:px-6 md:px-8 lg:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            About us
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-muted">
            Structure India is an ISO&nbsp;9001:2015 certified engineering firm
            based in Ghaziabad, Uttar Pradesh, manufacturing and installing
            infrastructure systems under the Ash brand. We serve government
            tender platforms — GeM, CPWD, IREPS — and private industrial clients
            across seven engineering categories, from earthing and water
            treatment to fiber infrastructure and smart metering.
          </p>
          <Link
            href="/about"
            className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-ash-orange transition-colors duration-150 hover:text-ash-orange/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ash-orange/50 focus-visible:ring-offset-2"
          >
            Learn more about us
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* ── 5. FEATURED PROJECTS ────────────────────────────────── */}
      <section className="bg-surface px-4 py-16 sm:px-6 md:px-8 lg:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            Recent work
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {/* TODO: Replace with real project data once seeded */}
            {[
              {
                category: "Earthing & Lightning Protection",
                year: "TODO",
                client: "TODO — client name",
              },
              {
                category: "Water & Wastewater Treatment",
                year: "TODO",
                client: "TODO — client name",
              },
              {
                category: "Cooling Towers",
                year: "TODO",
                client: "TODO — client name",
              },
            ].map((project, i) => (
              <Link
                key={i}
                href="/projects"
                className="group block"
              >
                <Card className="h-full border-border bg-surface transition-shadow duration-150 group-hover:shadow-md group-focus-visible:ring-2 group-focus-visible:ring-ash-orange/40 group-focus-visible:ring-offset-2">
                  {/* Placeholder image area */}
                  <div className="flex h-40 items-center justify-center bg-surface-alt">
                    <ImageIcon
                      className="h-8 w-8 text-border"
                      aria-hidden="true"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-sm font-semibold text-ink">
                      {project.client}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2">
                      <span className="inline-flex rounded-full bg-surface-alt px-2.5 py-0.5 text-xs font-medium text-ink-muted">
                        {project.category}
                      </span>
                      <span className="font-mono text-xs text-ink-muted">
                        {project.year}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. WHY STRUCTURE INDIA / ASH ────────────────────────── */}
      <section className="bg-surface-alt px-4 py-16 sm:px-6 md:px-8 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            Why tender teams work with us
          </h2>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="flex flex-col items-center text-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-surface text-ink-muted">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>

                  {/* Schematic connector line */}
                  <StatThreadline />

                  <span className="font-mono text-lg font-medium tracking-tight text-ink">
                    {stat.value}
                  </span>
                  <span className="mt-1 text-xs leading-snug text-ink-muted">
                    {stat.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 7. CTA BANNER ───────────────────────────────────────── */}
      <section className="bg-ash-orange px-4 py-14 sm:px-6 md:px-8 lg:py-16">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <h2 className="font-display text-xl font-semibold text-white sm:text-2xl">
            Have a project or tender requirement?
          </h2>
          <Link
            href="/contact"
            className="inline-flex h-11 shrink-0 items-center justify-center rounded-lg bg-white px-6 text-sm font-semibold text-ash-orange transition-colors duration-150 hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-ash-orange"
          >
            Get a Quote
          </Link>
        </div>
      </section>
    </main>
  );
}
