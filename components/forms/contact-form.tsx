"use client"

import React, { useState } from "react"
import { ArrowRight, CheckCircle2 } from "lucide-react"

type FormData = {
  inquiryType: string
  title: string
  name: string
  email: string
  phone: string
  message: string
}

type FormErrors = Partial<Record<keyof FormData, string>>

const INQUIRY_OPTIONS = [
  "New Project / Tender Enquiry",
  "Existing Order / PO Support",
  "AMC & Service Request",
  "Report an Issue",
  "Other",
]

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    inquiryType: "",
    title: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const validate = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.inquiryType) {
      newErrors.inquiryType = "Please select an inquiry type."
    }
    if (!formData.title.trim()) {
      newErrors.title = "Title is required."
    }
    if (!formData.name.trim()) {
      newErrors.name = "Name is required."
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required."
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address."
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required."
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validate()) {
      return
    }

    setIsSubmitting(true)

    // Simulate network request
    await new Promise((resolve) => setTimeout(resolve, 1500))

    console.log("Form Payload:", JSON.stringify(formData, null, 2))

    setIsSubmitting(false)
    setIsSuccess(true)
    setFormData({
      inquiryType: "",
      title: "",
      name: "",
      email: "",
      phone: "",
      message: "",
    })

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSuccess(false)
    }, 5000)
  }

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-surface p-10 text-center shadow-sm">
        <CheckCircle2 className="mb-4 h-12 w-12 text-si-green" />
        <h3 className="mb-2 text-xl font-bold text-ink">Thank you for reaching out</h3>
        <p className="text-ink-muted">
          Your inquiry has been successfully submitted. Our team will review your message and get back to you shortly.
        </p>
        <button
          onClick={() => setIsSuccess(false)}
          className="mt-8 rounded-xl bg-surface-alt px-6 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ash-orange/50"
        >
          Submit Another Inquiry
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 rounded-2xl border border-border bg-surface p-6 shadow-sm sm:p-10">
      <div className="space-y-6">
        <div>
          <label htmlFor="inquiryType" className="mb-2 block text-sm font-semibold text-ink">
            Inquiry Type <span className="text-red-500">*</span>
          </label>
          <select
            id="inquiryType"
            name="inquiryType"
            value={formData.inquiryType}
            onChange={handleChange}
            className={`w-full rounded-xl border ${
              errors.inquiryType ? "border-red-500" : "border-border"
            } bg-surface-alt px-4 py-3.5 text-ink outline-none transition-colors focus-visible:border-ash-orange focus-visible:ring-1 focus-visible:ring-ash-orange`}
          >
            <option value="" disabled>
              Select an option
            </option>
            {INQUIRY_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {errors.inquiryType && (
            <p className="mt-1.5 text-sm text-red-500">{errors.inquiryType}</p>
          )}
        </div>

        <div>
          <label htmlFor="title" className="mb-2 block text-sm font-semibold text-ink">
            Title <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Brief subject of your query"
            value={formData.title}
            onChange={handleChange}
            className={`w-full rounded-xl border ${
              errors.title ? "border-red-500" : "border-border"
            } bg-surface-alt px-4 py-3 text-ink outline-none transition-colors placeholder:text-ink-muted/50 focus-visible:border-ash-orange focus-visible:ring-1 focus-visible:ring-ash-orange`}
          />
          {errors.title && <p className="mt-1.5 text-sm text-red-500">{errors.title}</p>}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-semibold text-ink">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full rounded-xl border ${
                errors.name ? "border-red-500" : "border-border"
              } bg-surface-alt px-4 py-3 text-ink outline-none transition-colors focus-visible:border-ash-orange focus-visible:ring-1 focus-visible:ring-ash-orange`}
            />
            {errors.name && <p className="mt-1.5 text-sm text-red-500">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-semibold text-ink">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full rounded-xl border ${
                errors.email ? "border-red-500" : "border-border"
              } bg-surface-alt px-4 py-3 text-ink outline-none transition-colors focus-visible:border-ash-orange focus-visible:ring-1 focus-visible:ring-ash-orange`}
            />
            {errors.email && <p className="mt-1.5 text-sm text-red-500">{errors.email}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-ink">
            Phone <span className="text-ink-muted/70 font-normal ml-1">(Optional)</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full rounded-xl border border-border bg-surface-alt px-4 py-3 text-ink outline-none transition-colors focus-visible:border-ash-orange focus-visible:ring-1 focus-visible:ring-ash-orange`}
          />
        </div>

        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-semibold text-ink">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Describe your query in detail"
            value={formData.message}
            onChange={handleChange}
            className={`w-full resize-y rounded-xl border ${
              errors.message ? "border-red-500" : "border-border"
            } bg-surface-alt px-4 py-3 text-ink outline-none transition-colors placeholder:text-ink-muted/50 focus-visible:border-ash-orange focus-visible:ring-1 focus-visible:ring-ash-orange`}
          />
          {errors.message && <p className="mt-1.5 text-sm text-red-500">{errors.message}</p>}
        </div>
      </div>

      <div className="pt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-ash-orange px-8 py-4 text-base font-bold text-white shadow-md transition-colors hover:bg-ash-orange/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ash-orange/50 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
        >
          {isSubmitting ? "Submitting..." : "Submit Inquiry"}
          {!isSubmitting && <ArrowRight className="h-5 w-5" aria-hidden="true" />}
        </button>
      </div>
    </form>
  )
}
