import * as React from "react"
import Link from "next/link"
import { ImageIcon } from "lucide-react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function RecentWork() {
  return (
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
  )
}
