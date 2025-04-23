import { Metadata } from "next";
import {
  Mail,
  MapPin,
  Phone,
  Clock4,
  MessageSquare,
  Headphones,
} from "lucide-react";
import FAQ from "website/components/sections/faq";
import ContactForm from "website/components/forms/contact-form";
import CTAPlain from "website/components/sections/cta-plain";
import { InfoBox } from "website/components/sections/cards";

export const metadata: Metadata = {
  title: "Contact Us | Praxis Note",
  description:
    "Get in touch with the Praxis Note team. We're here to help with any questions about our ABA session notes tool.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero section */}
      <section className="relative pt-20 md:pt-28 overflow-hidden bg-ivory dark:bg-deep-navy">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute right-1/3 top-0 h-96 w-96 -translate-y-1/2 rounded-full bg-soft-blue/10 blur-3xl" />
          <div className="absolute left-1/4 bottom-0 h-96 w-96 translate-y-1/2 rounded-full bg-lavender/10 blur-3xl" />
        </div>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-soft-blue/20 dark:bg-soft-blue/30 text-charcoal dark:text-off-white text-sm font-medium mb-6">
              <MessageSquare className="w-4 h-4" />
              <span>We&apos;d love to hear from you</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed mb-10">
              Our support team is here to help with any questions about Praxis
              Note.
            </p>
          </div>
        </div>
      </section>

      {/* Contact form and info section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <ContactForm />

              <InfoBox className="mt-8 bg-mint-green/10 dark:bg-mint-green/5 border border-mint-green/20">
                <div className="flex items-center gap-3 text-charcoal dark:text-off-white">
                  <div className="flex items-center gap-2">
                    <Clock4 className="w-5 h-5 text-mint-green" />
                    <span className="text-sm font-medium">
                      Responses within 24 hours
                    </span>
                  </div>
                  <div className="w-px h-5 bg-mint-green/20"></div>
                  <div className="flex items-center gap-2">
                    <Headphones className="w-5 h-5 text-soft-blue" />
                    <span className="text-sm font-medium">
                      Expert support team
                    </span>
                  </div>
                </div>
              </InfoBox>
            </div>

            <div>
              <div className="bg-white dark:bg-slate-800 rounded-xl p-8 -lg border border-gray-200 dark:border-slate-700 h-fit transition-all duration-200">
                <h2 className="text-2xl font-bold mb-6 text-charcoal dark:text-off-white">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-soft-blue/20 dark:bg-blue-900/30 text-soft-blue dark:text-blue-400 mt-0.5 mr-4 flex-shrink-0 transition-colors duration-200">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-charcoal dark:text-off-white">
                        Email
                      </h3>
                      <a
                        href="mailto:support@praxisnotes.com"
                        className="text-muted-foreground hover:text-soft-blue dark:hover:text-blue-400 transition-colors"
                      >
                        support@praxisnotes.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-lavender/20 dark:bg-indigo-900/30 text-lavender dark:text-indigo-400 mt-0.5 mr-4 flex-shrink-0 transition-colors duration-200">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-charcoal dark:text-off-white">
                        Phone
                      </h3>
                      <a
                        href="tel:+13057974357"
                        className="text-muted-foreground hover:text-soft-blue dark:hover:text-blue-400 transition-colors"
                      >
                        +1 (305) 797-4357
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-peach/20 dark:bg-orange-900/30 text-peach dark:text-orange-400 mt-0.5 mr-4 flex-shrink-0 transition-colors duration-200">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-charcoal dark:text-off-white">
                        Office
                      </h3>
                      <p className="text-muted-foreground">
                        Miami, FL
                        <br />
                        United States
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-mint-green/20 dark:bg-green-900/30 text-mint-green dark:text-green-400 mt-0.5 mr-4 flex-shrink-0 transition-colors duration-200">
                      <Clock4 className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-charcoal dark:text-off-white">
                        Hours
                      </h3>
                      <p className="text-muted-foreground">
                        Monday - Friday
                        <br />
                        9:00 AM - 5:00 PM EST
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 mt-8 rounded-lg bg-soft-blue/10 dark:bg-blue-900/20 border border-soft-blue/20 dark:border-blue-800/30 transition-colors duration-200">
                  <p className="text-sm text-charcoal dark:text-slate-200">
                    For urgent inquiries outside of business hours, please email
                    us and we will respond first thing the next business day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ section with updated styling */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-ivory to-soft-gray dark:from-deep-navy dark:to-slate-800">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-charcoal dark:text-off-white">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Find quick answers to common questions about contacting and
              working with us
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white dark:bg-slate-800 rounded-xl p-8 shadow-aba-lg border border-gray-200 dark:border-slate-700 transition-all duration-200">
            <FAQ
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
                  question:
                    "Do you offer custom solutions for larger organizations?",
                  answer:
                    "Yes, we offer customized enterprise solutions for larger ABA practices and organizations. Please contact us through the form and specify &quot;Enterprise Inquiry&quot; in the subject line. Our team will work with you to understand your specific needs and create a tailored solution.",
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Add CTA section */}
      <CTAPlain
        subtitle="Have more questions about how we can help?"
        description="Our team is ready to assist you with any questions about our ABA documentation platform."
        primaryButtonText="Contact us now"
        secondaryButtonText="View pricing"
        secondaryButtonLink="/pricing"
      />
    </>
  );
}
