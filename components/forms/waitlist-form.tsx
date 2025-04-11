"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Button } from "website/components/ui/button";
import { useToast } from "website/components/ui/use-toast";
import { ArrowRight } from "lucide-react";
import { submitWaitlist } from "website/app/actions/waitlist";
import { FORM } from "website/components/ui/design-system/design-tokens";
import { cn } from "website/lib/utils";

export default function WaitlistForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [formSuccess, setFormSuccess] = useState(false);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    organization: "",
    role: "",
    interest: "",
  });
  const router = useRouter();
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormValues({
      firstName: "",
      lastName: "",
      email: "",
      organization: "",
      role: "",
      interest: "",
    });

    // Also manually clear form inputs
    if (formRef.current) {
      const inputs = formRef.current.querySelectorAll<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >('input[type="text"], input[type="email"], select, textarea');
      inputs.forEach((input) => {
        input.value = "";
      });

      // Reset checkbox if it exists
      const newsletter = formRef.current.querySelector<HTMLInputElement>(
        'input[type="checkbox"]'
      );
      if (newsletter) {
        newsletter.checked = true; // Default is checked for waitlist form
      }
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
          title: "Success!",
          description:
            "You have been added to our waitlist. We will be in touch soon!",
          variant: "default",
        });
      } else {
        setFormError(response.error || "Something went wrong");
        toast({
          title: "Error",
          description: response.error || "Failed to submit. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormError("An unexpected error occurred. Please try again.");
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
      router.refresh();
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="p-8 rounded-xl space-y-6 transition-all duration-200 
                 bg-white border border-gray-200 dark:bg-slate-800 dark:border-slate-700"
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
          You have been added to our waitlist. We will be in touch soon!
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="firstName"
            className={cn(FORM.LABEL, "text-foreground dark:text-slate-200")}
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formValues.firstName}
            onChange={handleInputChange}
            className={cn(
              FORM.INPUT,
              "bg-white border-gray-300 text-gray-900 placeholder-gray-500",
              "focus:ring-blue-500 focus:border-blue-500",
              "dark:bg-slate-900 dark:border-slate-600 dark:text-slate-100 dark:placeholder-slate-400",
              "dark:focus:ring-blue-500 dark:focus:border-blue-500",
              "transition-colors duration-200"
            )}
            placeholder="Your first name"
            required
            disabled={isSubmitting}
          />
        </div>
        <div>
          <label
            htmlFor="lastName"
            className={cn(FORM.LABEL, "text-foreground dark:text-slate-200")}
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formValues.lastName}
            onChange={handleInputChange}
            className={cn(
              FORM.INPUT,
              "bg-white border-gray-300 text-gray-900 placeholder-gray-500",
              "focus:ring-blue-500 focus:border-blue-500",
              "dark:bg-slate-900 dark:border-slate-600 dark:text-slate-100 dark:placeholder-slate-400",
              "dark:focus:ring-blue-500 dark:focus:border-blue-500",
              "transition-colors duration-200"
            )}
            placeholder="Your last name"
            required
            disabled={isSubmitting}
          />
        </div>
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
          disabled={isSubmitting}
        />
      </div>

      <div>
        <label
          htmlFor="organization"
          className={cn(FORM.LABEL, "text-foreground dark:text-slate-200")}
        >
          Organization (Optional)
        </label>
        <input
          type="text"
          id="organization"
          name="organization"
          value={formValues.organization}
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
          disabled={isSubmitting}
        />
      </div>

      <div>
        <label
          htmlFor="role"
          className={cn(FORM.LABEL, "text-foreground dark:text-slate-200")}
        >
          Your Role
        </label>
        <select
          id="role"
          name="role"
          value={formValues.role}
          onChange={handleInputChange}
          className={cn(
            FORM.INPUT,
            "bg-white border-gray-300 text-gray-900",
            "focus:ring-blue-500 focus:border-blue-500",
            "dark:bg-slate-900 dark:border-slate-600 dark:text-slate-100",
            "dark:focus:ring-blue-500 dark:focus:border-blue-500",
            "transition-colors duration-200"
          )}
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
          className={cn(FORM.LABEL, "text-foreground dark:text-slate-200")}
        >
          Why are you interested in Praxis Note?
        </label>
        <textarea
          id="interest"
          name="interest"
          rows={4}
          value={formValues.interest}
          onChange={handleInputChange}
          className={cn(
            FORM.INPUT,
            "resize-none bg-white border-gray-300 text-gray-900 placeholder-gray-500",
            "focus:ring-blue-500 focus:border-blue-500",
            "dark:bg-slate-900 dark:border-slate-600 dark:text-slate-100 dark:placeholder-slate-400",
            "dark:focus:ring-blue-500 dark:focus:border-blue-500",
            "transition-colors duration-200"
          )}
          placeholder="Tell us about your needs and how Praxis Note could help you..."
          required
          disabled={isSubmitting}
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
          defaultChecked
          disabled={isSubmitting}
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
          {isSubmitting ? "Processing..." : "Join Waitlist"}{" "}
          {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5" />}
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
