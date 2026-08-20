import { z } from "zod/v4";

export const contactSchema = z.object({
  inquiryType: z
    .string()
    .min(1, "Please select an inquiry type."),
  title: z
    .string()
    .min(1, "Title is required.")
    .max(200, "Title must be under 200 characters."),
  name: z
    .string()
    .min(1, "Name is required.")
    .max(100, "Name must be under 100 characters."),
  email: z
    .string()
    .min(1, "Email is required.")
    .email("Please enter a valid email address."),
  phone: z
    .string()
    .max(20, "Phone number is too long.")
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .min(1, "Message is required.")
    .max(5000, "Message must be under 5000 characters."),
});

export type ContactPayload = z.infer<typeof contactSchema>;
