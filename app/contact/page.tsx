import { Metadata } from "next";
import { Button } from "website/components/ui/button";
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  MessageSquare,
  Headphones,
  Clock4,
} from "lucide-react";
import FAQ from "website/components/sections/faq";

export const metadata: Metadata = {
  title: "Contact Us | Praxis Note",
  description:
    "Get in touch with the Praxis Note team. We're here to help with any questions about our ABA session notes tool.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute right-1/3 top-0 h-96 w-96 -translate-y-1/2 rounded-full bg-blue-400/10 blur-3xl" />
          <div className="absolute left-1/4 bottom-0 h-96 w-96 translate-y-1/2 rounded-full bg-purple-400/10 blur-3xl" />
        </div>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
              <MessageSquare className="w-4 h-4" />
              <span>We&apos;d love to hear from you</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Our support team is here to help with any questions about Praxis
              Note.
            </p>
            <div className="flex justify-center gap-8 mb-4">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-green-500" />
                <span className="text-sm font-medium">
                  Responses within 24 hours
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Headphones className="w-5 h-5 text-blue-500" />
                <span className="text-sm font-medium">Expert support team</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <form className="p-8 border border-blue-100 dark:border-blue-900/50 rounded-xl shadow-lg bg-white dark:bg-gray-900 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-2 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      placeholder="Your name"
                      required
                    />
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
                    />
                  </div>
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
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-2 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    placeholder="How can we help you?"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-2 rounded-md border border-input bg-background resize-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    placeholder="Tell us about your question or concern..."
                    required
                  />
                </div>

                <div className="flex items-start px-4 py-3 rounded-lg bg-blue-50 dark:bg-blue-900/20">
                  <input
                    type="checkbox"
                    id="newsletter"
                    name="newsletter"
                    className="mt-1 mr-2"
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
                  >
                    Send Message
                  </Button>
                  <Button
                    type="reset"
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    Clear Form
                  </Button>
                </div>
              </form>
            </div>

            <div className="p-1 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl">
              <div className="bg-white dark:bg-gray-900 p-8 rounded-lg space-y-8 h-fit">
                <div>
                  <h2 className="text-2xl font-bold mb-6">
                    Contact Information
                  </h2>
                  <div className="space-y-5">
                    <div className="flex items-start">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mt-0.5 mr-4 flex-shrink-0">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg">Email</h3>
                        <a
                          href="mailto:support@praxisnote.com"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          support@praxisnote.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mt-0.5 mr-4 flex-shrink-0">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg">Phone</h3>
                        <a
                          href="tel:+13057974357"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          +1 (305) 797-4357
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mt-0.5 mr-4 flex-shrink-0">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg">Office</h3>
                        <p className="text-muted-foreground">
                          Miami, FL
                          <br />
                          United States
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mt-0.5 mr-4 flex-shrink-0">
                        <Clock4 className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg">Hours</h3>
                        <p className="text-muted-foreground">
                          Monday - Friday
                          <br />
                          9:00 AM - 5:00 PM EST
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20">
                  <p className="text-sm">
                    For urgent inquiries outside of business hours, please email
                    us and we will respond first thing the next business day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ
        badge="Common Questions"
        title="Frequently Asked Questions"
        subtitle="Find quick answers to common questions about contacting and working with us"
        items={[
          {
            question: "How quickly will I receive a response?",
            answer:
              "We strive to respond to all inquiries within 24 hours during business days. For complex technical issues, it may take up to 48 hours to provide a complete solution.",
          },
          {
            question: "Do you offer phone support?",
            answer:
              "Yes, phone support is available for all paid plans during business hours (9 AM - 5 PM EST, Monday through Friday). Free trial users are encouraged to reach out via email.",
          },
          {
            question: "Can I schedule a demo of Praxis Note?",
            answer:
              "Absolutely! You can request a personalized demo through this contact form. Select &quot;Demo Request&quot; as your subject, and our team will reach out to schedule a time that works for you.",
          },
          {
            question: "How do I report a technical issue?",
            answer:
              "For technical issues, please provide as much detail as possible including: your account email, what you were trying to do, any error messages you received, and screenshots if available. This helps us resolve your issue more quickly.",
          },
          {
            question: "Do you offer custom solutions for larger organizations?",
            answer:
              "Yes, we offer customized enterprise solutions for larger ABA practices and organizations. Please contact us through the form and specify &quot;Enterprise Inquiry&quot; in the subject line. Our team will work with you to understand your specific needs and create a tailored solution.",
          },
        ]}
      />
    </>
  );
}
