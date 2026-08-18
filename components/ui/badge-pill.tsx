import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgePillProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function BadgePill({ className, children, ...props }: BadgePillProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full bg-black/40 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm sm:px-4 sm:py-1.5 sm:text-sm",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
