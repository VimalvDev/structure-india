import * as React from "react";
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
  Row,
  Column,
} from "@react-email/components";
import type { ContactPayload } from "@/lib/validations/contact";

interface InquiryNotificationProps extends ContactPayload {
  submittedAt: string;
}

export default function InquiryNotification({
  inquiryType,
  title,
  name,
  email,
  phone,
  message,
  submittedAt,
}: InquiryNotificationProps) {
  return (
    <Html>
      <Head />
      <Preview>New Inquiry: {inquiryType} — {title}</Preview>
      <Body style={bodyStyle}>
        <Container style={containerStyle}>
          {/* Header accent bar */}
          <Section style={headerStyle}>
            <Heading as="h1" style={headingStyle}>
              New Contact Inquiry
            </Heading>
          </Section>

          <Section style={contentStyle}>
            {/* Inquiry details table */}
            <Row style={rowStyle}>
              <Column style={labelStyle}>Inquiry Type</Column>
              <Column style={valueStyle}>{inquiryType}</Column>
            </Row>

            <Row style={rowStyle}>
              <Column style={labelStyle}>Title</Column>
              <Column style={valueStyle}>{title}</Column>
            </Row>

            <Row style={rowStyle}>
              <Column style={labelStyle}>Name</Column>
              <Column style={valueStyle}>{name}</Column>
            </Row>

            <Row style={rowStyle}>
              <Column style={labelStyle}>Email</Column>
              <Column style={valueStyle}>{email}</Column>
            </Row>

            {phone && (
              <Row style={rowStyle}>
                <Column style={labelStyle}>Phone</Column>
                <Column style={valueStyle}>{phone}</Column>
              </Row>
            )}

            <Row style={rowStyle}>
              <Column style={labelStyle}>Submitted</Column>
              <Column style={valueStyle}>{submittedAt}</Column>
            </Row>

            <Hr style={dividerStyle} />

            <Text style={messageLabelStyle}>Message</Text>
            <Text style={messageStyle}>{message}</Text>
          </Section>

          {/* Footer */}
          <Section style={footerStyle}>
            <Text style={footerTextStyle}>
              This email was sent from the Structure India website contact form.
              Reply directly to this email to respond to the submitter.
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
  backgroundColor: "#F07F1B",
  padding: "24px 32px",
};

const headingStyle: React.CSSProperties = {
  color: "#ffffff",
  fontSize: "20px",
  fontWeight: 700,
  margin: 0,
};

const contentStyle: React.CSSProperties = {
  padding: "28px 32px",
};

const rowStyle: React.CSSProperties = {
  marginBottom: "4px",
};

const labelStyle: React.CSSProperties = {
  color: "#71717a",
  fontSize: "13px",
  fontWeight: 600,
  textTransform: "uppercase" as const,
  letterSpacing: "0.05em",
  padding: "8px 12px 8px 0",
  verticalAlign: "top",
  width: "120px",
};

const valueStyle: React.CSSProperties = {
  color: "#18181b",
  fontSize: "14px",
  padding: "8px 0",
  verticalAlign: "top",
};

const dividerStyle: React.CSSProperties = {
  borderColor: "#e4e4e7",
  margin: "20px 0",
};

const messageLabelStyle: React.CSSProperties = {
  color: "#71717a",
  fontSize: "13px",
  fontWeight: 600,
  textTransform: "uppercase" as const,
  letterSpacing: "0.05em",
  margin: "0 0 8px 0",
};

const messageStyle: React.CSSProperties = {
  color: "#18181b",
  fontSize: "14px",
  lineHeight: "1.6",
  margin: 0,
  whiteSpace: "pre-wrap",
};

const footerStyle: React.CSSProperties = {
  backgroundColor: "#fafafa",
  borderTop: "1px solid #e4e4e7",
  padding: "16px 32px",
};

const footerTextStyle: React.CSSProperties = {
  color: "#a1a1aa",
  fontSize: "12px",
  lineHeight: "1.5",
  margin: 0,
};
