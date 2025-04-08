'use server';

import { waitlistFormSchema } from 'website/lib/validations/waitlist';
import { submitWaitlistForm } from 'website/lib/waitlist';

export async function submitWaitlist(formData: FormData) {
  // Extract form data from FormData object
  const firstName = formData.get('firstName') as string;
  const lastName = formData.get('lastName') as string;
  const email = formData.get('email') as string;
  const organization = formData.get('organization') as string | undefined;
  const role = formData.get('role') as string;
  const interest = formData.get('interest') as string;
  const newsletter = formData.get('newsletter') ? true : false;

  const waitlistData = { 
    firstName, 
    lastName, 
    email, 
    organization: organization || undefined, 
    role, 
    interest,
    newsletter
  };

  // Validate with Zod schema
  const validationResult = waitlistFormSchema.safeParse(waitlistData);
  
  if (!validationResult.success) {
    // Return first error message if validation fails
    const errorMessage = validationResult.error.errors[0]?.message || 'Invalid form data';
    return { success: false, error: errorMessage };
  }

  // Submit validated data to database
  return await submitWaitlistForm(validationResult.data);
}
