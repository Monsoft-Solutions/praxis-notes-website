import { db } from 'website/db/config';
import { waitlistSubmissions } from 'website/db/schema';
import { WaitlistFormValues } from './validations/waitlist';

export type WaitlistFormData = WaitlistFormValues;

export async function submitWaitlistForm(data: WaitlistFormData) {
  try {
    const result = await db.insert(waitlistSubmissions).values({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      organization: data.organization || null,
      role: data.role,
      interest: data.interest,
      newsletter: data.newsletter,
    }).returning();
    
    return { success: true, data: result[0] };
  } catch (error) {
    console.error('Error submitting waitlist form:', error);
    return { success: false, error: 'Failed to submit waitlist form' };
  }
}
