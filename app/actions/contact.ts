// Using Server Actions
"use server";

import { submitContactForm } from "website/lib/contact";
import { contactFormSchema } from "website/lib/validations/contact";

export async function submitContact(formData: FormData) {
  // Extract form data
  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const companyValue = formData.get("company");
  const company = companyValue ? companyValue.toString().trim() : undefined;
  const message = formData.get("message")?.toString().trim();

  const contactData = {
    name,
    email,
    company: company || undefined,
    message,
  };

  // Validate with Zod
  const validationResult = contactFormSchema.safeParse(contactData);

  if (!validationResult.success) {
    // Return the first error
    const errorMessage =
      validationResult.error.errors[0]?.message || "Invalid form data";
    return {
      success: false,
      error: errorMessage,
    };
  }

  // Submit to database
  return await submitContactForm(validationResult.data);
}
