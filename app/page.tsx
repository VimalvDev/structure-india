import Link from "next/link";
import Image from "next/image";
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
  FlaskConical,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { HeroThreadline, StatThreadline } from "@/components/sections/schematic-threadline";
import { PanIndiaPresence } from "@/components/sections/pan-india-presence";
import Hero from "@/components/sections/hero";

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
   FEATURED PRODUCTS DATA
   ──────────────────────────────────────────────────────────────────── */

const featuredProducts = [
  {
    name: "Ash Gel Earthing Electrode",
    category: "Earthing & Lightning Protection",
    icon: Shield,
    spec: "CPRI & RDSO tested. Manufactured under ISO 9001:2008 certified process.",
  },
  {
    name: "ASH Stormflash ESE Air Terminal",
    category: "Earthing & Lightning Protection",
    icon: Shield,
    spec: "Early Streamer Emission lightning protection, NF C 17-102 & UNE 21186:2011 compliant. Stormflash 60 tested to 70kA impulse current (CPRI). 20-year warranty.",
  },
  {
    name: "Industrial Reverse Osmosis System",
    category: "Water & Wastewater Treatment",
    icon: Droplets,
    spec: "Fibreglass-wrapped thin film composite RO membranes, electric control panel with MIMIC diagram.",
  },
  {
    name: "DM Plant & Softener System",
    category: "Water & Wastewater Treatment",
    icon: FlaskConical,
    spec: "Trolley-mounted automatic operation available for small industries and laboratories.",
  },
  {
    name: "Water ATM",
    category: "Water & Wastewater Treatment",
    icon: Droplets,
    spec: "24×7 automated RO water vending with coin/smart-card access and GSM cloud reporting.",
  },
  {
    name: "Bottle Shape FRP Cooling Tower",
    category: "Cooling Towers",
    icon: Wind,
    spec: "18-model range from 7.5 TR to 500 TR capacity, manufactured in-house.",
  },
] as const;



/* ────────────────────────────────────────────────────────────────────
   TRUSTED BY — client names from Ash printed catalog
   ──────────────────────────────────────────────────────────────────── */

const trustedByClients = [
  "Sify",
  "Siemens",
  "TATA",
  "HCL",
  "NTPC",
  "ONGC",
  "Vodafone Idea",
  "State Bank of India",
  "Asian Paints",
  "Bank of Baroda",
  "Hero Honda",
  "ITC",
] as const;

/* ════════════════════════════════════════════════════════════════════
   PAGE
   ════════════════════════════════════════════════════════════════════ */

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* ── 1. HERO ─────────────────────────────────────────────── */}
      <Hero />

      {/* ── 2. PAN-INDIA PRESENCE ───────────────────────────────── */}
      <PanIndiaPresence />

      {/* ── 3. TRUST STRIP ──────────────────────────────────────── */}
      <section className="border-y border-border bg-surface-alt px-4 py-5 sm:px-6 md:px-8">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-x-6 gap-y-2 sm:gap-x-8">
          {[
            "ISO 9001:2015",
            "MSME / UDYAM Registered",
            "NSIC Registered",
            "GST Registered",
            "Make in India — 100% Local Content",
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

      {/* ── 4. FEATURED PRODUCTS ────────────────────────────────── */}
      <section className="bg-surface-alt px-4 py-16 sm:px-6 md:px-8 lg:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            What we&apos;ve built
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product) => {
              const Icon = product.icon;
              return (
                <Link
                  key={product.name}
                  href="/products"
                  className="group block"
                >
                  <Card className="h-full border-border bg-surface transition-shadow duration-150 group-hover:shadow-md group-focus-visible:ring-2 group-focus-visible:ring-ash-orange/40 group-focus-visible:ring-offset-2">
                    {/* PLACEHOLDER — swap with real product photo later.
                        Each featured product needs a photograph; until then
                        this bordered box with an icon fallback is the
                        identifiable placeholder pattern. */}
                    <div className="flex h-44 items-center justify-center border-b border-border bg-surface-alt">
                      <div className="flex flex-col items-center gap-2 text-border">
                        <Icon className="h-8 w-8" aria-hidden="true" />
                        <span className="text-[10px] font-medium uppercase tracking-widest text-ink-muted/50">
                          Photo coming soon
                        </span>
                      </div>
                    </div>

                    <CardHeader className="pb-2">
                      <span className="mb-1.5 inline-flex w-fit rounded-full bg-surface-alt px-2.5 py-0.5 text-[11px] font-medium text-ink-muted">
                        {product.category}
                      </span>
                      <CardTitle className="text-sm font-semibold leading-snug text-ink">
                        {product.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-xs leading-relaxed text-ink-muted">
                        {product.spec}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 5. TRUSTED BY ───────────────────────────────────────── */}
      <section className="bg-surface px-4 py-16 sm:px-6 md:px-8 lg:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            Trusted by
          </h2>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-5 sm:gap-x-12 lg:gap-x-14">
            {trustedByClients.map((client) => (
              <span
                key={client}
                className="font-display text-lg font-semibold tracking-tight text-ink/20 sm:text-xl"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </section>



      {/* ── 7. ABOUT SNIPPET ────────────────────────────────────── */}
      <section className="bg-surface px-4 py-16 sm:px-6 md:px-8 lg:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            About us
          </h2>
          {/* TODO: Founding year conflict — "Estd. 2000" vs "Since 2002"
              appears in different sources. Confirm with client before
              publishing a specific year anywhere on the site. */}
          <p className="mt-4 text-base leading-relaxed text-ink-muted">
            Structure India is an ISO&nbsp;9001:2015 certified engineering firm
            based in Ghaziabad, Uttar Pradesh, manufacturing and installing
            infrastructure systems under the Ash brand. Our earthing and
            lightning protection products are independently tested by CPRI and
            RDSO. We serve government tender platforms — GeM, CPWD, IREPS — and
            private industrial clients across seven engineering categories, from
            earthing and water treatment to fiber infrastructure and smart
            metering. All products are designed and manufactured in India with
            100% local content.
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

      {/* ── 8. RECENT WORK ──────────────────────────────────────── */}
      <section className="bg-surface-alt px-4 py-16 sm:px-6 md:px-8 lg:py-20">
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

      {/* ── 9. CTA BANNER ───────────────────────────────────────── */}
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
    </div>
  );
}
