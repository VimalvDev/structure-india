import { NextRequest, NextResponse } from "next/server";
import { resend } from "@/lib/resend";

const INDIAN_MOBILE_REGEX = /^[6-9]\d{9}$/;

function formatTimestampIST(): string {
  return new Intl.DateTimeFormat("en-IN", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "Asia/Kolkata",
  }).format(new Date());
}

export async function POST(request: NextRequest) {
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

  const { productName, phone } = body as {
    productName?: string;
    phone?: string;
  };

  // Validate productName
  if (!productName || typeof productName !== "string" || !productName.trim()) {
    return NextResponse.json(
      { success: false, message: "Product name is required." },
      { status: 400 }
    );
  }

  // Validate phone — server-side, never trust client
  if (!phone || typeof phone !== "string" || !INDIAN_MOBILE_REGEX.test(phone)) {
    return NextResponse.json(
      {
        success: false,
        message: "Enter a valid 10-digit Indian mobile number.",
      },
      { status: 400 }
    );
  }

  const submittedAt = formatTimestampIST();
  const fromEmail =
    process.env.RESEND_FROM_EMAIL ?? "noreply@ashelectrode.com";
  const notificationEmail =
    process.env.NOTIFICATION_EMAIL ?? "structureindia_delhi@rediffmail.com";

  try {
    const { error } = await resend.emails.send({
      from: `Ash Electrode <${fromEmail}>`,
      to: [notificationEmail],
      subject: `New product enquiry: ${productName.trim()}`,
      html: `
        <h2>New Product Enquiry</h2>
        <table style="border-collapse:collapse;font-family:sans-serif;font-size:14px">
          <tr><td style="padding:6px 12px 6px 0;font-weight:600;color:#555">Product</td><td style="padding:6px 0">${productName.trim()}</td></tr>
          <tr><td style="padding:6px 12px 6px 0;font-weight:600;color:#555">Phone</td><td style="padding:6px 0"><a href="tel:+91${phone}">+91 ${phone}</a></td></tr>
          <tr><td style="padding:6px 12px 6px 0;font-weight:600;color:#555">Submitted</td><td style="padding:6px 0">${submittedAt}</td></tr>
        </table>
      `,
    });

    if (error) {
      console.error(
        "[product-enquiry/route] Email send failed:",
        error.message
      );
      return NextResponse.json(
        {
          success: false,
          message:
            "Something went wrong sending your enquiry. Please try again or call us directly.",
        },
        { status: 500 }
      );
    }
  } catch (err) {
    console.error(
      "[product-enquiry/route] Email exception:",
      err instanceof Error ? err.message : err
    );
    return NextResponse.json(
      {
        success: false,
        message:
          "Something went wrong sending your enquiry. Please try again or call us directly.",
      },
      { status: 500 }
    );
  }

  return NextResponse.json({
    success: true,
    message: "Your enquiry has been submitted. We will call you shortly.",
  });
}
