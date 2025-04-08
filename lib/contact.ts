import { db } from 'website/db/config';
import { contactSubmissions } from 'website/db/schema';

export type ContactFormData = {
  name: string;
  email: string;
  company?: string;
  message: string;
};

export async function submitContactForm(data: ContactFormData) {
  try {
    const result = await db.insert(contactSubmissions).values({
      name: data.name,
      email: data.email,
      company: data.company || null,
      message: data.message,
    }).returning();
    
    return { success: true, data: result[0] };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return { success: false, error: 'Failed to submit contact form' };
  }
}