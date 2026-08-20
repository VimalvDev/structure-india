import * as React from "react";
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface InquiryConfirmationProps {
  name: string;
  inquiryType: string;
  title: string;
}

export default function InquiryConfirmation({
  name,
  inquiryType,
  title,
}: InquiryConfirmationProps) {
  return (
    <Html>
      <Head />
      <Preview>
        We've received your inquiry — our team will respond within 24 hours
      </Preview>
      <Body style={bodyStyle}>
        <Container style={containerStyle}>
          {/* Brand Header */}
          <Section style={headerStyle}>
            <Img
              src="https://structure-india.com/si-logo.avif"
              alt="Structure India"
              width={40}
              height={40}
              style={{ display: "inline-block", verticalAlign: "middle" }}
            />
            <Text style={brandTextStyle}>Structure India</Text>
          </Section>

          {/* Content */}
          <Section style={contentStyle}>
            <Heading as="h1" style={headingStyle}>
              Thank you, {name}
            </Heading>

            <Text style={textStyle}>
              We've received your inquiry and our team is already on it. Here's
              a summary of what you submitted:
            </Text>

            {/* Inquiry summary card */}
            <Section style={summaryCardStyle}>
              <Text style={summaryLabelStyle}>Inquiry Type</Text>
              <Text style={summaryValueStyle}>{inquiryType}</Text>
              <Text style={{ ...summaryLabelStyle, marginTop: "12px" }}>
                Subject
              </Text>
              <Text style={summaryValueStyle}>{title}</Text>
            </Section>

            <Text style={textStyle}>
              <strong>Our team will respond within 24 hours.</strong> If your
              matter is urgent, feel free to call us directly.
            </Text>

            <Hr style={dividerStyle} />

            {/* Company contact details */}
            <Heading as="h2" style={subheadingStyle}>
              Reach Us Directly
            </Heading>

            <Text style={contactDetailStyle}>
              <strong>Corporate Office</strong>
              <br />
              547–548, 5th Floor, Cloud 9, Corporate Tower,
              <br />
              Sector-1, Vaishali, Ghaziabad – 201010 (UP), India
            </Text>

            <Text style={contactDetailStyle}>
              <strong>Phone</strong>
              <br />
              Tel:{" "}
              <Link href="tel:+911204240615" style={linkStyle}>
                +91 120 4240615
              </Link>
              <br />
              Mobile:{" "}
              <Link href="tel:+919868525835" style={linkStyle}>
                +91 98685 25835 / 36
              </Link>
            </Text>

            <Text style={contactDetailStyle}>
              <strong>Email</strong>
              <br />
              <Link
                href="mailto:structureindia_delhi@rediffmail.com"
                style={linkStyle}
              >
                structureindia_delhi@rediffmail.com
              </Link>
            </Text>
          </Section>

          {/* Footer */}
          <Section style={footerStyle}>
            <Text style={footerTextStyle}>
              © {new Date().getFullYear()} Structure India. Turnkey
              infrastructure solutions under the Ash brand since 2005.
            </Text>
            <Text style={footerDisclaimerStyle}>
              This is an automated confirmation. Please do not reply to this
              email.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

// ─── Styles ──────────────────────────────────────────────────────────────────

const bodyStyle: React.CSSProperties = {
  backgroundColor: "#f4f4f5",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  margin: 0,
  padding: "20px 0",
};

const containerStyle: React.CSSProperties = {
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  maxWidth: "600px",
  margin: "0 auto",
  overflow: "hidden",
};

const headerStyle: React.CSSProperties = {
  backgroundColor: "#18181b",
  padding: "20px 32px",
  textAlign: "left" as const,
};

const brandTextStyle: React.CSSProperties = {
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: 700,
  display: "inline-block",
  verticalAlign: "middle",
  marginLeft: "12px",
  margin: "0 0 0 12px",
};

const contentStyle: React.CSSProperties = {
  padding: "32px 32px 24px",
};

const headingStyle: React.CSSProperties = {
  color: "#18181b",
  fontSize: "22px",
  fontWeight: 700,
  margin: "0 0 16px 0",
};

const subheadingStyle: React.CSSProperties = {
  color: "#18181b",
  fontSize: "16px",
  fontWeight: 700,
  margin: "0 0 12px 0",
};

const textStyle: React.CSSProperties = {
  color: "#3f3f46",
  fontSize: "14px",
  lineHeight: "1.6",
  margin: "0 0 16px 0",
};

const summaryCardStyle: React.CSSProperties = {
  backgroundColor: "#fafafa",
  border: "1px solid #e4e4e7",
  borderLeft: "3px solid #F07F1B",
  borderRadius: "6px",
  padding: "16px 20px",
  margin: "16px 0 20px",
};

const summaryLabelStyle: React.CSSProperties = {
  color: "#71717a",
  fontSize: "12px",
  fontWeight: 600,
  textTransform: "uppercase" as const,
  letterSpacing: "0.05em",
  margin: "0 0 2px 0",
};

const summaryValueStyle: React.CSSProperties = {
  color: "#18181b",
  fontSize: "15px",
  fontWeight: 500,
  margin: 0,
};

const dividerStyle: React.CSSProperties = {
  borderColor: "#e4e4e7",
  margin: "24px 0",
};

const contactDetailStyle: React.CSSProperties = {
  color: "#3f3f46",
  fontSize: "13px",
  lineHeight: "1.6",
  margin: "0 0 12px 0",
};

const linkStyle: React.CSSProperties = {
  color: "#F07F1B",
  textDecoration: "none",
};

const footerStyle: React.CSSProperties = {
  backgroundColor: "#fafafa",
  borderTop: "1px solid #e4e4e7",
  padding: "20px 32px",
};

const footerTextStyle: React.CSSProperties = {
  color: "#71717a",
  fontSize: "12px",
  lineHeight: "1.5",
  margin: "0 0 4px 0",
};

const footerDisclaimerStyle: React.CSSProperties = {
  color: "#a1a1aa",
  fontSize: "11px",
  margin: 0,
};
