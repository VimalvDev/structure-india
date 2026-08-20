import { NextRequest, NextResponse } from "next/server";
import { resend } from "@/lib/resend";
import { contactSchema } from "@/lib/validations/contact";
import InquiryNotification from "@/lib/email/templates/inquiry-notification";
import InquiryConfirmation from "@/lib/email/templates/inquiry-confirmation";

// ─── In-memory rate limiter ──────────────────────────────────────────────────
// TODO: Replace with Upstash rate limiter once Redis is configured.
// @upstash/ratelimit and @upstash/redis are already installed.
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX = 5;

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

// Periodically clean stale entries to prevent memory leak
setInterval(() => {
  const now = Date.now();
  for (const [ip, entry] of rateLimitMap) {
    if (now > entry.resetAt) {
      rateLimitMap.delete(ip);
    }
  }
}, RATE_LIMIT_WINDOW_MS);

// ─── Helpers ─────────────────────────────────────────────────────────────────

/** Mask email for safe logging: "user@example.com" → "us***@ex***.com" */
function maskEmail(email: string): string {
  const [local, domain] = email.split("@");
  if (!domain) return "***";
  const domainParts = domain.split(".");
  const maskedLocal = local.slice(0, 2) + "***";
  const maskedDomain =
    domainParts[0].slice(0, 2) + "***." + domainParts.slice(1).join(".");
  return `${maskedLocal}@${maskedDomain}`;
}

function formatTimestampIST(): string {
  return new Intl.DateTimeFormat("en-IN", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "Asia/Kolkata",
  }).format(new Date());
}

// ─── Route Handler ───────────────────────────────────────────────────────────

export async function POST(request: NextRequest) {
  // Rate limiting
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      {
        success: false,
        message: "Too many requests. Please try again in a few minutes.",
      },
      { status: 429 }
    );
  }

  // Parse body
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request body." },
      { status: 400 }
    );
  }

  // Validate
  const result = contactSchema.safeParse(body);

  if (!result.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of result.error.issues) {
      const field = issue.path[0];
      if (typeof field === "string" && !fieldErrors[field]) {
        fieldErrors[field] = issue.message;
      }
    }
    return NextResponse.json(
      {
        success: false,
        message: "Please fix the errors below.",
        errors: fieldErrors,
      },
      { status: 400 }
    );
  }

  const { inquiryType, title, name, email, phone, message } = result.data;
  const submittedAt = formatTimestampIST();

  const fromEmail =
    process.env.RESEND_FROM_EMAIL ?? "noreply@structure-india.com";
  const notificationEmail =
    process.env.NOTIFICATION_EMAIL ?? "structureindia_delhi@rediffmail.com";

  // ── 1. Send notification to team ──────────────────────────────────────────
  try {
    const { error } = await resend.emails.send({
      from: `Structure India <${fromEmail}>`,
      to: [notificationEmail],
      replyTo: email,
      subject: `New Inquiry: ${inquiryType} — ${title}`,
      react: InquiryNotification({
        inquiryType,
        title,
        name,
        email,
        phone: phone ?? "",
        message,
        submittedAt,
      }),
    });

    if (error) {
      console.error(
        "[contact/route] Notification email failed:",
        error.message,
        "| Submitter:",
        maskEmail(email)
      );
      return NextResponse.json(
        {
          success: false,
          message:
            "Something went wrong sending your inquiry. Please try again or contact us directly.",
        },
        { status: 500 }
      );
    }
  } catch (err) {
    console.error(
      "[contact/route] Notification email exception:",
      err instanceof Error ? err.message : err,
      "| Submitter:",
      maskEmail(email)
    );
    return NextResponse.json(
      {
        success: false,
        message:
          "Something went wrong sending your inquiry. Please try again or contact us directly.",
      },
      { status: 500 }
    );
  }

  // ── 2. Send confirmation to submitter ─────────────────────────────────────
  try {
    const { error } = await resend.emails.send({
      from: `Structure India <${fromEmail}>`,
      to: [email],
      subject: `We've received your inquiry — ${title}`,
      react: InquiryConfirmation({
        name,
        inquiryType,
        title,
      }),
    });

    if (error) {
      // Notification succeeded, so we still return 200 but log the failure
      console.warn(
        "[contact/route] Confirmation email failed:",
        error.message,
        "| Submitter:",
        maskEmail(email),
        "— manual follow-up needed"
      );
    }
  } catch (err) {
    console.warn(
      "[contact/route] Confirmation email exception:",
      err instanceof Error ? err.message : err,
      "| Submitter:",
      maskEmail(email),
      "— manual follow-up needed"
    );
  }

  return NextResponse.json({
    success: true,
    message: "Your inquiry has been submitted successfully.",
  });
}
