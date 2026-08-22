"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

interface ProductsRingBadgeProps {
  className?: string
  href?: string
  text?: string
  ariaLabel?: string
}

function ProductsRingBadge({
  className = "",
  href = "/products",
  text = "VIEW PRODUCTS",
  ariaLabel = "Visit our Ash earthing products",
}: ProductsRingBadgeProps) {
  const pathId = React.useId()
  const measureRef = React.useRef<SVGTSpanElement>(null)
  const radius = 36
  const fontSize = 7.2
  const letterSpacing = 1.6
  const separator = " • "
  const unit = `${text}${separator}`
  const circumference = 2 * Math.PI * radius

  const [repeatedText, setRepeatedText] = React.useState(unit.repeat(3))

  React.useLayoutEffect(() => {
    const node = measureRef.current
    if (!node) return

    const unitLength = node.getComputedTextLength()
    if (!unitLength) return

    const repeats = Math.max(2, Math.round(circumference / unitLength))
    setRepeatedText(unit.repeat(repeats))
  }, [unit, circumference])

  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={`group relative flex h-24 w-24 shrink-0 items-center justify-center lg:h-28 lg:w-28 ${className}`}
    >
      <motion.svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      >
        <circle cx="50" cy="50" r="49" className="fill-neutral-900" />
        <defs>
          <path
            id={pathId}
            d={`M 50,50 m -${radius},0 a ${radius},${radius} 0 1,1 ${radius * 2},0 a ${radius},${radius} 0 1,1 -${radius * 2},0`}
          />
        </defs>

        <text fontSize={fontSize} letterSpacing={letterSpacing} opacity={0} aria-hidden="true">
          <tspan ref={measureRef}>{unit}</tspan>
        </text>

        <text
          fill="white"
          fontSize={fontSize}
          letterSpacing={letterSpacing}
          textLength={circumference}
          lengthAdjust="spacingAndGlyphs"
        >
          <textPath href={`#${pathId}`} startOffset="0%">
            {repeatedText}
          </textPath>
        </text>
      </motion.svg>

      <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white text-neutral-900 shadow-md transition-transform duration-300 ease-out group-hover:scale-110">
        <ArrowUpRight className="h-6 w-6" aria-hidden="true" />
      </span>
    </Link>
  )
}

export default ProductsRingBadge