"use client"

import * as React from "react"
import { Plus } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface AccordionItemProps {
  id: string
  number: string
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}

export function AccordionItem({
  id,
  number,
  question,
  answer,
  isOpen,
  onToggle,
}: AccordionItemProps) {
  return (
    <div className="border-b border-border last:border-b-0">
      <button
        id={`${id}-trigger`}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`${id}-panel`}
        className="group flex w-full items-start gap-4 py-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ash-orange/50 focus-visible:ring-offset-2 sm:gap-6"
      >
        <span
          className="mt-0.5 w-8 shrink-0 font-mono text-xs tabular-nums tracking-wider text-ash-orange/70 transition-colors duration-200 group-hover:text-ash-orange sm:w-10 sm:text-sm"
          aria-hidden="true"
        >
          {number}
        </span>

        <span className="flex-1 text-base font-medium leading-snug text-ink sm:text-lg">
          {question}
        </span>

        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-border text-ink-muted transition-all duration-300 group-hover:border-ash-orange group-hover:text-ash-orange">
          <Plus
            className={`h-3.5 w-3.5 transition-transform duration-300 ${
              isOpen ? "rotate-45" : "rotate-0"
            }`}
            aria-hidden="true"
          />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`${id}-panel`}
            role="region"
            aria-labelledby={`${id}-trigger`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-6 pl-12 pr-10 text-sm leading-relaxed text-ink-muted sm:pl-16 sm:text-base">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}