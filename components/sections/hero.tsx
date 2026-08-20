"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { BadgePill } from "@/components/ui/badge-pill"

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const childVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const badgeVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.6,
    },
  },
}

export default function Hero() {
  return (

    <section className="relative rounded-xl overflow-hidden flex h-screen flex-col justify-center px-5 sm:min-h-[75dvh] sm:px-8 sm:py-20 md:px-10 lg:min-h-[85dvh] lg:px-20 lg:py-0">
      {/* Background Image */}
      <Image
        src="/img/hero-bg2.png"
        alt="Structure India infrastructure project site, aerial view"
        fill
        priority
        quality={80}
        sizes="100vw"
        className="object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-black/50 md:bg-gradient-to-r md:from-black/40 md:via-black/0 md:to-black/0" />

      {/* Content Container */}
      <div className="relative h-full z-10 mx-auto w-full max-w-7xl">
        <div className="flex flex-col h-screen items-end pt-20 md:pt-[10vw] justify-between pb-5 ">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="wrapper md:pr-[25vw]  "
          >
            <motion.h1
              variants={childVariants}
              className="text-4xl leading-tighter text-white md:text-7xl lg:text-8xl  "
              style={{ fontFamily: "var(--font-geist, var(--font-body))" }}
            >
              Your Turnkey Partner for Infrastructure Projects
            </motion.h1>

            <motion.p
              variants={childVariants}
              className="mt-4 max-w-full text-sm text-white/80 sm:max-w-md sm:text-base lg:max-w-lg lg:text-lg"
            >
              Water treatment, earthing systems, OFC laying and smart metering solutions.
            </motion.p>

            <motion.div variants={childVariants}>
              <Link
                href="/products"
                className="mt-15 inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-ash-orange px-7 text-sm font-semibold text-white transition-colors hover:bg-ash-orange/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ash-orange/50 focus-visible:ring-offset-2 sm:h-12 sm:w-auto sm:text-base"
              >
                View Products
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </motion.div>
          </motion.div>


          {/* ISO Badge - mobile only */}
          <motion.div
            variants={badgeVariants}
            initial="hidden"
            animate="show"
            className="mt-6 sm:hidden"
          >
            <BadgePill>21+ Years of Experience</BadgePill>
          </motion.div>
        </div>
      </div>

      {/* ISO Badge - desktop only */}
      <motion.div
        variants={badgeVariants}
        initial="hidden"
        animate="show"
        className="absolute bottom-6 right-6 z-20 hidden sm:block"
      >
        <BadgePill>21+ Years of Experience</BadgePill>
      </motion.div>
    </section>
  )
}
