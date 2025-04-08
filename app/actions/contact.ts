// Using Server Actions
'use server';

import { submitContactForm } from 'website/lib/contact';
import { contactFormSchema } from 'website/lib/validations/contact';

export async function submitContact(formData: FormData) {
  // Extract form data
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const company = formData.get('company') as string | undefined;
  const message = formData.get('message') as string;

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
    const errorMessage = validationResult.error.errors[0]?.message || 'Invalid form data';
    return {
      success: false,
      error: errorMessage,
    };
  }

  // Submit to database
  return await submitContactForm(validationResult.data);
}