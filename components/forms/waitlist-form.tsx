'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from 'website/components/ui/button';
import { useToast } from 'website/components/ui/use-toast';
import { ArrowRight } from 'lucide-react';
import { submitWaitlist } from 'website/app/actions/waitlist';

export default function WaitlistForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [formSuccess, setFormSuccess] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const resetForm = () => {
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setFormError(null);

    try {
      const formData = new FormData(event.currentTarget);
      const response = await submitWaitlist(formData);

      if (response.success) {
        setFormSuccess(true);
        resetForm();
        toast({
          title: 'Success!',
          description: 'You have been added to our waitlist. We will be in touch soon!',
          variant: 'default',
        });
      } else {
        setFormError(response.error || 'Something went wrong');
        toast({
          title: 'Error',
          description: response.error || 'Failed to submit. Please try again.',
          variant: 'destructive',
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormError('An unexpected error occurred. Please try again.');
      toast({
        title: 'Error',
        description: 'An unexpected error occurred. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
      router.refresh();
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="p-8 border border-blue-100 dark:border-blue-900/50 rounded-xl shadow-lg bg-white dark:bg-gray-900 space-y-6">
      {formError && (
        <div className="p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg text-sm">
          {formError}
        </div>
      )}

      {formSuccess && (
        <div className="p-4 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-lg text-sm">
          You have been added to our waitlist. We will be in touch soon!
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-medium mb-2"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="w-full px-4 py-2 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
            placeholder="Your first name"
            required
            disabled={isSubmitting}
          />
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-medium mb-2"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="w-full px-4 py-2 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
            placeholder="Your last name"
            required
            disabled={isSubmitting}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full px-4 py-2 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
          placeholder="your.email@example.com"
          required
          disabled={isSubmitting}
        />
      </div>

      <div>
        <label
          htmlFor="organization"
          className="block text-sm font-medium mb-2"
        >
          Organization (Optional)
        </label>
        <input
          type="text"
          id="organization"
          name="organization"
          className="w-full px-4 py-2 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
          placeholder="Your company or organization"
          disabled={isSubmitting}
        />
      </div>

      <div>
        <label
          htmlFor="role"
          className="block text-sm font-medium mb-2"
        >
          Your Role
        </label>
        <select
          id="role"
          name="role"
          className="w-full px-4 py-2 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
          required
          disabled={isSubmitting}
        >
          <option value="">Select your role</option>
          <option value="BCBA">BCBA/BCaBA</option>
          <option value="RBT">RBT</option>
          <option value="Clinic Owner">ABA Clinic Owner</option>
          <option value="Administrator">Administrator</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="interest"
          className="block text-sm font-medium mb-2"
        >
          Why are you interested in Praxis Note?
        </label>
        <textarea
          id="interest"
          name="interest"
          rows={4}
          className="w-full px-4 py-2 rounded-md border border-input bg-background resize-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
          placeholder="Tell us about your needs and how Praxis Note could help you..."
          required
          disabled={isSubmitting}
        />
      </div>

      <div className="flex items-start px-4 py-3 rounded-lg bg-blue-50 dark:bg-blue-900/20">
        <input
          type="checkbox"
          id="newsletter"
          name="newsletter"
          className="mt-1 mr-2"
          defaultChecked
          disabled={isSubmitting}
        />
        <label htmlFor="newsletter" className="text-sm">
          Subscribe to our newsletter for product updates and
          resources for ABA professionals
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
          {isSubmitting ? 'Processing...' : 'Join Waitlist'} {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5" />}
        </Button>
      </div>
    </form>
  );
}
