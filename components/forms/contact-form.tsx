"use client";

import { useState, useRef } from "react";
import { Button } from "website/components/ui/button";
import { submitContact } from "website/app/actions/contact";
import { useRouter } from "next/navigation";
import { toast } from "website/components/ui/use-toast";
import { FORM } from "website/components/ui/design-system/design-tokens";
import { cn } from "website/lib/utils";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [formSuccess, setFormSuccess] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const router = useRouter();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormValues({
      name: "",
      email: "",
      company: "",
      message: "",
    });

    // Also manually clear form inputs
    if (formRef.current) {
      const inputs = formRef.current.querySelectorAll<
        HTMLInputElement | HTMLTextAreaElement
      >('input[type="text"], input[type="email"], textarea');
      inputs.forEach((input) => {
        input.value = "";
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
          title: "Message sent!",
          description:
            "We've received your message and will get back to you soon.",
          variant: "success",
        });
      } else {
        setFormError(
          response.error || "Something went wrong. Please try again."
        );
        toast({
          title: "Error",
          description:
            response.error || "Something went wrong. Please try again.",
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
      className="p-8 rounded-xl space-y-6 transition-all duration-200 
                 bg-white border border-gray-200 dark:bg-slate-800 dark:border-slate-700"
      onSubmit={handleSubmit}
    >
      {formError && (
        <div
          className="p-4 mb-4 rounded-lg transition-colors duration-200
                        bg-red-50 border border-red-200 text-red-600
                        dark:bg-red-900/20 dark:border-red-800 dark:text-red-300"
        >
          {formError}
        </div>
      )}

      {formSuccess && (
        <div
          className="p-4 mb-4 rounded-lg transition-colors duration-200
                        bg-green-50 border border-green-200 text-green-700
                        dark:bg-green-900/20 dark:border-green-800 dark:text-green-300"
        >
          Thank you for your message! We&apos;ll get back to you soon.
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className={cn(FORM.LABEL, "text-foreground dark:text-slate-200")}
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formValues.name}
            onChange={handleInputChange}
            className={cn(
              FORM.INPUT,
              "bg-white border-gray-300 text-gray-900 placeholder-gray-500",
              "focus:ring-blue-500 focus:border-blue-500",
              "dark:bg-slate-900 dark:border-slate-600 dark:text-slate-100 dark:placeholder-slate-400",
              "dark:focus:ring-blue-500 dark:focus:border-blue-500",
              "transition-colors duration-200"
            )}
            placeholder="Your name"
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className={cn(FORM.LABEL, "text-foreground dark:text-slate-200")}
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formValues.email}
            onChange={handleInputChange}
            className={cn(
              FORM.INPUT,
              "bg-white border-gray-300 text-gray-900 placeholder-gray-500",
              "focus:ring-blue-500 focus:border-blue-500",
              "dark:bg-slate-900 dark:border-slate-600 dark:text-slate-100 dark:placeholder-slate-400",
              "dark:focus:ring-blue-500 dark:focus:border-blue-500",
              "transition-colors duration-200"
            )}
            placeholder="your.email@example.com"
            required
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="company"
          className={cn(FORM.LABEL, "text-foreground dark:text-slate-200")}
        >
          Organization (Optional)
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formValues.company}
          onChange={handleInputChange}
          className={cn(
            FORM.INPUT,
            "bg-white border-gray-300 text-gray-900 placeholder-gray-500",
            "focus:ring-blue-500 focus:border-blue-500",
            "dark:bg-slate-900 dark:border-slate-600 dark:text-slate-100 dark:placeholder-slate-400",
            "dark:focus:ring-blue-500 dark:focus:border-blue-500",
            "transition-colors duration-200"
          )}
          placeholder="Your company or organization"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className={cn(FORM.LABEL, "text-foreground dark:text-slate-200")}
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={formValues.message}
          onChange={handleInputChange}
          className={cn(
            FORM.INPUT,
            "resize-none bg-white border-gray-300 text-gray-900 placeholder-gray-500",
            "focus:ring-blue-500 focus:border-blue-500",
            "dark:bg-slate-900 dark:border-slate-600 dark:text-slate-100 dark:placeholder-slate-400",
            "dark:focus:ring-blue-500 dark:focus:border-blue-500",
            "transition-colors duration-200"
          )}
          placeholder="Tell us about your question or concern..."
          required
        />
      </div>

      <div
        className="flex items-start p-4 rounded-lg transition-colors duration-200
                      bg-blue-50 border border-blue-200 
                      dark:bg-blue-900/20 dark:border-blue-800"
      >
        <input
          type="checkbox"
          id="newsletter"
          name="newsletter"
          className={cn(
            FORM.CHECKBOX,
            "mt-1 mr-2 border-gray-300 text-blue-600",
            "dark:border-slate-600 dark:bg-slate-900 dark:checked:bg-blue-600",
            "transition-colors duration-200"
          )}
        />
        <label
          htmlFor="newsletter"
          className="text-sm text-gray-800 dark:text-slate-200"
        >
          Subscribe to our newsletter for product updates and resources for ABA
          professionals
        </label>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          type="submit"
          variant="default"
          size="lg"
          className="bg-blue-600 text-white hover:bg-blue-700 
                     dark:bg-blue-700 dark:hover:bg-blue-800 
                     w-full sm:w-auto transition-colors duration-200"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
        <Button
          type="button"
          variant="outline"
          size="lg"
          className="w-full sm:w-auto border border-gray-400 text-gray-700
                     hover:bg-gray-100 hover:text-gray-900
                     dark:border-slate-600 dark:text-slate-200
                     dark:hover:bg-slate-700 dark:hover:text-white
                     transition-colors duration-200"
          onClick={resetForm}
        >
          Clear Form
        </Button>
      </div>
    </form>
  );
}
