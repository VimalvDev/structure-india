"use client"

import * as React from "react"
import { X, Phone, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CallbackModalProps {
  productName: string
  isOpen: boolean
  onClose: () => void
}

const INDIAN_MOBILE_REGEX = /^[6-9]\d{9}$/

function sanitizePhone(raw: string): string {
  // Strip spaces, dashes, dots, parentheses
  let cleaned = raw.replace(/[\s\-.()+]/g, "")
  // Strip leading country code variants: 91, 091, 0091
  if (cleaned.startsWith("0091")) cleaned = cleaned.slice(4)
  else if (cleaned.startsWith("091")) cleaned = cleaned.slice(3)
  else if (cleaned.startsWith("91") && cleaned.length > 10) cleaned = cleaned.slice(2)
  // Strip single leading zero (STD convention)
  if (cleaned.startsWith("0") && cleaned.length === 11) cleaned = cleaned.slice(1)
  return cleaned
}

export default function CallbackModal({ productName, isOpen, onClose }: CallbackModalProps) {
  const [phone, setPhone] = React.useState("")
  const [error, setError] = React.useState("")
  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle")
  const [apiError, setApiError] = React.useState("")
  const inputRef = React.useRef<HTMLInputElement>(null)

  // Focus the input when the modal opens
  React.useEffect(() => {
    if (isOpen) {
      setStatus("idle")
      setError("")
      setApiError("")
      // Small delay so the DOM is painted
      const t = setTimeout(() => inputRef.current?.focus(), 80)
      return () => clearTimeout(t)
    }
  }, [isOpen])

  // Close on Escape
  React.useEffect(() => {
    if (!isOpen) return
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [isOpen, onClose])

  if (!isOpen) return null

  function validate(value: string): string | null {
    const cleaned = sanitizePhone(value)
    if (!cleaned) return "Please enter your mobile number."
    if (!INDIAN_MOBILE_REGEX.test(cleaned)) return "Enter a valid 10-digit Indian mobile number."
    return null
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const validationError = validate(phone)
    if (validationError) {
      setError(validationError)
      return
    }
    setError("")
    setApiError("")
    setStatus("loading")

    try {
      const res = await fetch("/api/product-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productName, phone: sanitizePhone(phone) }),
      })
      const data = await res.json()
      if (res.ok && data.success) {
        setStatus("success")
      } else {
        setApiError(data.message || "Something went wrong. Please try again.")
        setStatus("error")
      }
    } catch {
      setApiError("Network error — please check your connection and try again.")
      setStatus("error")
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
      role="dialog"
      aria-modal="true"
      aria-label={`Request a callback for ${productName}`}
    >
      <div className="relative w-full max-w-md rounded-2xl bg-surface p-6 sm:p-8">
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-ink-muted transition-colors hover:bg-surface-alt hover:text-ink"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        {status === "success" ? (
          /* ── Success state ─────────────────────────────────── */
          <div className="flex flex-col items-center py-6 text-center">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-si-green/10">
              <Phone className="h-6 w-6 text-si-green" />
            </div>
            <h3 className="text-xl font-semibold text-ink">Thanks!</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">
              Our team will call you shortly about the{" "}
              <span className="font-medium text-ink">{productName}</span>.
            </p>
            <Button
              type="button"
              onClick={onClose}
              className="mt-6 h-10 rounded-xl bg-ink px-6 text-sm font-medium text-white hover:bg-ink/80"
            >
              Close
            </Button>
          </div>
        ) : (
          /* ── Form state ────────────────────────────────────── */
          <>
            <h3 className="pr-8 text-xl font-semibold text-ink sm:text-2xl">
              Interested in {productName}?
            </h3>
            <p className="mt-2 text-sm text-ink-muted">
              Leave your number and we'll call you back.
            </p>

            <form onSubmit={handleSubmit} className="mt-6" noValidate>
              <label htmlFor="callback-phone" className="mb-1.5 block text-sm font-medium text-ink">
                Mobile Number
              </label>
              <div className="relative">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-ink-muted">
                  +91
                </span>
                <input
                  ref={inputRef}
                  id="callback-phone"
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel"
                  placeholder="98685 25835"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value)
                    if (error) setError("")
                    if (apiError) setApiError("")
                  }}
                  className={`h-12 w-full rounded-xl border bg-surface pl-12 pr-4 text-sm text-ink outline-none transition-colors placeholder:text-ink-muted/50 focus:ring-2 focus:ring-ash-orange/40 ${
                    error ? "border-ash-red" : "border-border"
                  }`}
                />
              </div>
              {error && (
                <p className="mt-1.5 text-xs text-ash-red">{error}</p>
              )}
              {apiError && (
                <p className="mt-1.5 text-xs text-ash-red">{apiError}</p>
              )}

              <Button
                type="submit"
                disabled={status === "loading"}
                className="mt-5 h-12 w-full rounded-xl bg-ash-orange text-sm font-semibold text-white hover:bg-ash-orange/90 disabled:opacity-70"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending…
                  </>
                ) : (
                  "Request Callback"
                )}
              </Button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
