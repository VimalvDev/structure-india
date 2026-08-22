"use client"

import ScrollExpand from "@/components/motion/scroll-expand"
import Link from "next/link"

export default function CapabilityReveal() {
  return (
    <ScrollExpand
      className="bg-[#1C1C28]"
      src="/img/bg.png"
      alt="Structure India water treatment plant, aerial construction view"
      title="Maintenance-Free by Design. Grounded for Life."
      subtitle="Engineered for safety, built for reliability"
      scrollHint="Scroll to see the scale"
      useWindowScroll
      startWidth={46}
      startHeight={60}
      startRadius={20}
      endRadius={0}
      mediaZoom={1.25}
      scrollDistance={1.1}
      holdDistance={0.25}
      smoothing={0.12}
      overlayScrim={0.5}
    >
      <h2 className="font-display text-2xl sm:text-5xl font-semibold text-white">
      
        Gel earthing electrodes, backfill compound, and lightning protection systems — engineered to IS/ISI standards, installed pan-India.
      </h2>
   
    
    </ScrollExpand>
  )
}
