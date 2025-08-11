'use client';

import { useState, useRef } from 'react';
import { Button } from 'website/components/ui/button';
import { submitContact } from 'website/app/actions/contact';
import { useRouter } from 'next/navigation';
import { toast } from 'website/components/ui/use-toast';
import { Send, RefreshCw, CheckCircle, AlertCircle } from 'lucide-react';

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [formSuccess, setFormSuccess] = useState(false);
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const router = useRouter();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormValues({
      name: '',
      email: '',
      company: '',
      message: '',
    });

    // Also manually clear form inputs
    if (formRef.current) {
      const inputs = formRef.current.querySelectorAll<
        HTMLInputElement | HTMLTextAreaElement
      >('input[type="text"], input[type="email"], textarea');
      inputs.forEach(input => {
        input.value = '';
      });

      // Reset checkbox if it exists
      const newsletter = formRef.current.querySelector<HTMLInputElement>(
        'input[type="checkbox"]'
      );
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
          title: 'Message sent!',
          description:
            "We've received your message and will get back to you soon.",
          variant: 'success',
        });
      } else {
        setFormError(
          response.error || 'Something went wrong. Please try again.'
        );
        toast({
          title: 'Error',
          description:
            response.error || 'Something went wrong. Please try again.',
          variant: 'destructive',
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setFormError('An unexpected error occurred. Please try again later.');
      toast({
        title: 'Error',
        description: 'An unexpected error occurred. Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
      router.refresh(); // Refresh the page data
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h2
          className="text-3xl font-quicksand font-bold mb-4 text-gray-800"
          style={{
            textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
          }}
        >
          Send us a message
        </h2>
        <p className="text-gray-600 font-nunito">
          Have a question about Praxis Notes? We&apos;d love to help you get
          started.
        </p>
      </div>

      <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
        {/* Error Message */}
        {formError && (
          <div
            className="relative p-4 bg-white border-2 border-red-300 shadow-lg"
            style={{
              borderRadius: '15px 18px 12px 20px',
            }}
            role="alert"
            aria-live="assertive"
          >
            <div className="flex items-center gap-3">
              <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
              <p className="text-red-700 font-nunito">{formError}</p>
            </div>
          </div>
        )}

        {/* Success Message */}
        {formSuccess && (
          <div
            className="relative p-4 bg-white border-2 border-green-300 shadow-lg"
            style={{
              borderRadius: '18px 15px 20px 12px',
            }}
            role="alert"
            aria-live="assertive"
          >
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
              <p className="text-green-700 font-nunito">
                Thank you for your message! We&apos;ll get back to you soon.
              </p>
            </div>
          </div>
        )}

        {/* Name and Email Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-quicksand font-semibold text-gray-800 mb-2"
            >
              Name
            </label>
            <div
              className="relative bg-white border-2 border-blue-200 shadow-lg"
              style={{
                borderRadius: '12px 15px 10px 18px',
              }}
            >
              <input
                type="text"
                id="name"
                name="name"
                value={formValues.name}
                onChange={handleInputChange}
                className="w-full h-12 px-4 bg-transparent border-0 text-gray-800 font-nunito placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-xl"
                placeholder="Your name"
                required
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-quicksand font-semibold text-gray-800 mb-2"
            >
              Email
            </label>
            <div
              className="relative bg-white border-2 border-green-200 shadow-lg"
              style={{
                borderRadius: '15px 12px 16px 10px',
              }}
            >
              <input
                type="email"
                id="email"
                name="email"
                value={formValues.email}
                onChange={handleInputChange}
                className="w-full h-12 px-4 bg-transparent border-0 text-gray-800 font-nunito placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-300 rounded-xl"
                placeholder="your.email@example.com"
                required
              />
            </div>
          </div>
        </div>

        {/* Company Field */}
        <div>
          <label
            htmlFor="company"
            className="block text-sm font-quicksand font-semibold text-gray-800 mb-2"
          >
            Organization (Optional)
          </label>
          <div
            className="relative bg-white border-2 border-orange-200 shadow-lg"
            style={{
              borderRadius: '10px 18px 14px 12px',
            }}
          >
            <input
              type="text"
              id="company"
              name="company"
              value={formValues.company}
              onChange={handleInputChange}
              className="w-full h-12 px-4 bg-transparent border-0 text-gray-800 font-nunito placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-300 rounded-xl"
              placeholder="Your company or organization"
            />
          </div>
        </div>

        {/* Message Field */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-quicksand font-semibold text-gray-800 mb-2"
          >
            Message
          </label>
          <div
            className="relative bg-white border-2 border-yellow-200 shadow-lg"
            style={{
              borderRadius: '16px 12px 18px 14px',
            }}
          >
            <textarea
              id="message"
              name="message"
              rows={6}
              value={formValues.message}
              onChange={handleInputChange}
              className="w-full p-4 bg-transparent border-0 text-gray-800 font-nunito placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-300 rounded-xl resize-none"
              placeholder="Tell us about your question or concern..."
              required
            />
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div
          className="relative p-4 bg-blue-100 border-2 border-blue-200 shadow-lg"
          style={{
            borderRadius: '14px 20px 12px 16px',
          }}
        >
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="newsletter"
              name="newsletter"
              className="mt-1 h-4 w-4 rounded border-2 border-blue-300 text-blue-500 focus:ring-2 focus:ring-blue-300"
            />
            <label
              htmlFor="newsletter"
              className="text-sm text-gray-700 font-nunito leading-relaxed"
            >
              Subscribe to our newsletter for product updates and resources for
              ABA professionals
            </label>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Button
            type="submit"
            variant="form-primary"
            size="lg"
            radius="hand-drawn-sm"
            className="px-8 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </>
            )}
          </Button>

          <Button
            type="button"
            variant="form-secondary"
            size="lg"
            radius="form-secondary"
            className="px-8"
            onClick={resetForm}
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            Clear Form
          </Button>
        </div>
      </form>
    </div>
  );
}
