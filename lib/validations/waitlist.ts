import { z } from "zod";

export const waitlistFormSchema = z.object({
  firstName: z
    .string()
    .min(2, "First name must be at least 2 characters")
    .max(100, "First name must be less than 100 characters"),
  lastName: z
    .string()
    .min(2, "Last name must be at least 2 characters")
    .max(100, "Last name must be less than 100 characters"),
  email: z.string().email("Please enter a valid email address"),
  organization: z.string().optional(),
  role: z.string().min(1, "Please select your role"),
  interest: z
    .string()
    .min(0, "Please tell us why you are interested in at least 10 characters")
    .max(1000, "Your message must be less than 1000 characters")
    .optional(),
  newsletter: z.boolean().default(true),
});

export type WaitlistFormValues = z.infer<typeof waitlistFormSchema>;
