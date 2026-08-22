"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"
import { BadgePill } from "@/components/ui/badge-pill"
import ProductsRingBadge from "@/components/ProductsRingBadge"

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
}

const imageVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      delay: 0.25,
    },
  },
}


export default function Hero() {
  return (
    <section className="relative flex min-h-dvh flex-col justify-center overflow-hidden bg-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/HERO-BG-light.avif"
          alt="Background"
          fill
          priority
          quality={100}
          unoptimized
          className="object-cover object-left lg:object-center"
        />
      </div>

      <div className="relative z-10 mx-auto grid w-full  grid-cols-1 items-center gap-6 px-5 py-24 sm:gap-8 sm:px-8 md:px-10 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:px-20 lg:py-0">
        {/* Left: Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={childVariants}>
            <BadgePill className="border border-neutral-200 bg-white text-neutral-700">
              21+ Years of Experience
            </BadgePill>
          </motion.div>

          <motion.h1
            variants={childVariants}
            className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl"
          >
            Maintenance-Free Earthing & Lightning Protection
          </motion.h1>

          <motion.p
            variants={childVariants}
            className="mt-6 max-w-md text-base text-neutral-500 sm:text-lg"
          >
            Ash gel earthing electrodes, backfill compound, and lightning protection systems — engineered for reliable grounding, installed pan-India.
          </motion.p>

          <motion.div variants={childVariants}>
            <Link
              href="/products"
              className="mt-8 inline-flex  h-12 items-center justify-center gap-2 rounded-full bg-ash-orange px-7 text-sm font-semibold text-white transition-colors hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 sm:text-base"
            >
              View Products
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Right: Image, wrapped so the badge sits outside the clipped area */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate="show"
          className="relative aspect-[4/5] w-full max-w-sm mx-auto sm:aspect-square lg:aspect-[3/4] lg:max-w-[26rem] lg:ml-auto lg:mr-4"
        >
          <div className="absolute inset-0 overflow-hidden rounded-3xl">
            <Image
              src="/img/hero-image.png"
              alt="Structure India infrastructure project site, aerial view"
              fill
              priority
              quality={80}
              sizes="(min-width: 500px) 20vw, 55vw"
              className="object-cover"
            />
          </div>

          {/* Mobile/tablet: centered on the image's bottom edge. Desktop: centered on the left edge. */}
          <div className="absolute bottom-0 left-1/2 z-30 -translate-x-1/2 translate-y-1/2 lg:bottom-auto lg:left-0 lg:top-1/2 lg:-translate-y-1/2">
            <ProductsRingBadge />
          </div>
        </motion.div>
      </div>
    </section>
  )
}