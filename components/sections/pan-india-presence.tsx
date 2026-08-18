import { InteractiveWorldMap } from "./interactive-world-map";
import { companyStats, panIndiaStates } from "@/lib/data/company-stats";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";

export function PanIndiaPresence() {
  return (
    <section className="bg-surface px-4 py-16 sm:px-6 md:px-8 lg:py-20">
      <div className="mx-auto max-w-5xl">
        {/* 1. Section heading */}
        <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl text-center mb-10">
          Trusted across India
        </h2>

        {/* 2. Stat row */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4 mb-10">
          {companyStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card
                key={stat.label}
                className="bg-surface-alt border-border rounded-xl transition-colors duration-200 hover:border-ash-orange/40"
              >
                <CardContent className="p-6 relative">
                  <div className="absolute top-5 right-5 flex h-8 w-8 items-center justify-center rounded-full bg-surface">
                    <Icon className="h-4 w-4 text-ink-muted" aria-hidden="true" />
                  </div>
                  <div className="text-[10px] sm:text-xs uppercase tracking-wide text-ink-muted mb-2 font-medium">
                    {stat.label}
                  </div>
                  <div className="font-display text-3xl font-bold text-ink">
                    {stat.value}
                    {stat.suffix && (
                      <sup className="text-ash-orange text-lg ml-0.5">{stat.suffix}</sup>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* 3 & 4. Map block & "We are pan-India" list block */}
        <div className="w-full relative mt-10">
          <InteractiveWorldMap />

          <div className="mt-16 border-t border-border/50 pt-10">
            <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-ink mb-6 justify-center sm:justify-start">
              <MapPin className="h-5 w-5 text-ash-orange" aria-hidden="true" />
              We are pan-India
            </h3>
            
            <div className="grid grid-cols-2 gap-y-3 gap-x-4 sm:grid-cols-4 sm:gap-y-4">
              {panIndiaStates.map((state) => {
                const isServed = state.status === "served" || state.status === "hq";
                return (
                  <div key={state.code} className="flex items-center gap-2">
                    <span
                      className={`text-[10px] leading-none ${isServed ? "text-ash-red" : "text-ink-muted/40"}`}
                      aria-hidden="true"
                    >
                      {isServed ? "●" : "○"}
                    </span>
                    <span
                      className={`text-sm ${isServed ? "text-ink font-medium" : "text-ink-muted"}`}
                    >
                      {state.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
