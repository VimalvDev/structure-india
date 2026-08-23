"use client"

import * as React from "react"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import CallbackModal from "@/components/products/CallbackModal"

interface ProductDetailClientProps {
  productName: string
  position: "top" | "bottom"
}

export default function ProductDetailClient({ productName, position }: ProductDetailClientProps) {
  const [modalOpen, setModalOpen] = React.useState(false)

  return (
    <>
      <Button
        onClick={() => setModalOpen(true)}
        className={`h-12 rounded-full bg-ash-orange px-8 text-sm font-semibold text-white transition-colors hover:bg-ash-orange/90 ${
          position === "top" ? "mt-6 w-fit" : "mt-4 sm:mt-0 w-fit"
        }`}
      >
        <Phone className="mr-2 h-4 w-4" />
        Request a Callback
      </Button>

      <CallbackModal
        productName={productName}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  )
}
