export default function Registered() {
    return (
           <section className="border-y border-border bg-surface-alt px-4 py-5 sm:px-6 md:px-8">
        <div className="mx-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-2 sm:gap-x-8">
          {[
            "ISO 9001:2015",
            "ISO 45001:2018",
            "ISO 14001:2015",
            "MSME / UDYAM Registered",
            "NSIC Registered",
            "Make in India",
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
    )
}