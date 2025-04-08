'use client';

import { useState, useRef } from 'react';
import { Button } from 'website/components/ui/button';
import { submitContact } from 'website/app/actions/contact';
import { useRouter } from 'next/navigation';
import { toast } from 'website/components/ui/use-toast';

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [formSuccess, setFormSuccess] = useState(false);
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const resetForm = () => {
    setFormValues({
      name: '',
      email: '',
      company: '',
      message: ''
    });
    
    // Also manually clear form inputs
    if (formRef.current) {
      const inputs = formRef.current.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>(
        'input[type="text"], input[type="email"], textarea'
      );
      inputs.forEach(input => {
        input.value = '';
      });
      
      // Reset checkbox if it exists
      const newsletter = formRef.current.querySelector<HTMLInputElement>('input[type="checkbox"]');
      if (newsletter) {
        newsletter.checked = false;
      }
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setFormError(null);

    try {
      const formData = new FormData(event.currentTarget);
      const response = await submitContact(formData);

      if (response.success) {
        setFormSuccess(true);
        resetForm();
        toast({
          title: "Message sent!",
          description: "We&apos;ve received your message and will get back to you soon.",
          variant: "success",
        });
      } else {
        setFormError(response.error || "Something went wrong. Please try again.");
        toast({
          title: "Error",
          description: response.error || "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setFormError("An unexpected error occurred. Please try again later.");
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
      router.refresh(); // Refresh the page data
    }
  };

  return (
    <form 
      ref={formRef}
      className="p-8 border border-blue-100 dark:border-blue-900/50 rounded-xl shadow-lg bg-white dark:bg-gray-900 space-y-6"
      onSubmit={handleSubmit}
    >
      {formError && (
        <div className="p-4 mb-4 text-red-700 bg-red-100 dark:bg-red-900/20 dark:text-red-400 rounded-lg">
          {formError}
        </div>
      )}

      {formSuccess && (
        <div className="p-4 mb-4 text-green-700 bg-green-100 dark:bg-green-900/20 dark:text-green-400 rounded-lg">
          Thank you for your message! We&apos;ll get back to you soon.
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formValues.name}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
            placeholder="Your name"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formValues.email}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
            placeholder="your.email@example.com"
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium mb-2">
          Organization (Optional)
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formValues.company}
          onChange={handleInputChange}
          className="w-full px-4 py-2 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
          placeholder="Your company or organization"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={formValues.message}
          onChange={handleInputChange}
          className="w-full px-4 py-2 rounded-md border border-input bg-background resize-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
          placeholder="Tell us about your question or concern..."
          required
        />
      </div>

      <div className="flex items-start px-4 py-3 rounded-lg bg-blue-50 dark:bg-blue-900/20">
        <input type="checkbox" id="newsletter" name="newsletter" className="mt-1 mr-2" />
        <label htmlFor="newsletter" className="text-sm">
          Subscribe to our newsletter for product updates and resources for ABA professionals
        </label>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          type="submit"
          variant="gradient"
          size="lg"
          className="w-full sm:w-auto"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
        <Button 
          type="button" 
          variant="outline" 
          size="lg" 
          className="w-full sm:w-auto"
          onClick={resetForm}
        >
          Clear Form
        </Button>
      </div>
    </form>
  );
}