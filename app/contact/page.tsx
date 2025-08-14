import { Metadata } from 'next';
import {
  Mail,
  MapPin,
  Phone,
  Clock4,
  MessageSquare,
  Headphones,
  CheckCircle,
} from 'lucide-react';
import FAQ from 'website/components/sections/faq';
import ContactForm from 'website/components/forms/contact-form';
import CTAPlain from 'website/components/sections/cta-plain';
import { CONTACT_INFO } from 'website/lib/contact-info';

export const metadata: Metadata = {
  title: 'Contact Us | Praxis Notes',
  description:
    "Get in touch with the Praxis Notes team. We're here to help with any questions about our ABA session notes tool.",
};

export default function ContactPage() {
  return (
    <>
      {/* Background with subtle decorations */}
      <div className="min-h-screen bg-gradient-to-br from-blue-100 via-yellow-50 to-orange-100 relative">
        {/* Very subtle background decorations */}
        <div
          className="fixed inset-0 overflow-hidden pointer-events-none"
          aria-hidden="true"
        >
          <div
            className="absolute left-10 top-20 h-12 w-12 rounded-full border-2 border-blue-200 opacity-30 hidden sm:block"
            style={{ transform: 'rotate(0.1deg)' }}
            aria-hidden="true"
          ></div>

          <div
            className="absolute right-16 bottom-32 h-8 w-8 rounded border border-green-200 opacity-40 hidden sm:block"
            aria-hidden="true"
          ></div>

          <div
            className="absolute left-1/4 bottom-20 h-2 w-2 rounded-full bg-orange-200 opacity-50 hidden sm:block"
            aria-hidden="true"
          ></div>
        </div>

        {/* Hero section */}
        <section className="relative pt-20 md:pt-28 pb-16">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative">
            <div className="max-w-3xl mx-auto text-center">
              {/* Badge with thumb tack effect */}
              <div className="relative inline-block mb-8">
                <div
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-blue-200 font-quicksand font-semibold text-gray-800 shadow-lg"
                  style={{
                    borderRadius: '20px 25px 18px 28px',
                  }}
                >
                  <MessageSquare className="w-4 h-4 text-blue-400" />
                  <span>We&apos;d love to hear from you</span>
                </div>
                {/* Thumb tack */}
                <div className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 transform">
                  <div className="h-full w-full rounded-full bg-blue-400 shadow-sm"></div>
                  <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
                </div>
              </div>

              <h1
                className="text-4xl md:text-6xl font-quicksand font-bold mb-6 text-gray-800"
                style={{
                  textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
                }}
              >
                Get in Touch
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 font-nunito leading-relaxed mb-10">
                Our support team is here to help with any questions about Praxis
                Notes.
              </p>
            </div>
          </div>
        </section>

        {/* Contact form and info section */}
        <section className="pb-16 md:pb-24">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                {/* Contact Form Card */}
                <div
                  className="relative bg-white border-2 border-blue-200 p-8 shadow-lg"
                  style={{
                    borderRadius: '25px 30px 20px 35px',
                  }}
                >
                  {/* Thumb tack */}
                  <div
                    className="absolute -top-2 right-12 h-4 w-4"
                    aria-hidden="true"
                  >
                    <div
                      className="h-full w-full rounded-full bg-green-400 shadow-sm"
                      aria-hidden="true"
                    ></div>
                    <div
                      className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
                      aria-hidden="true"
                    ></div>
                  </div>

                  <div className="pt-2">
                    <ContactForm />
                  </div>
                </div>

                {/* Response Time Info */}
                <div
                  className="relative mt-8 bg-white border-2 border-green-200 p-6 shadow-lg"
                  style={{
                    borderRadius: '20px 28px 25px 22px',
                  }}
                >
                  {/* Triangle thumb tack */}
                  <div className="absolute -top-2 left-8" aria-hidden="true">
                    <div
                      className="h-0 w-0 border-l-2 border-r-2 border-b-4 border-l-transparent border-r-transparent border-b-orange-400"
                      aria-hidden="true"
                    ></div>
                  </div>

                  <div className="pt-2">
                    <div className="flex flex-col sm:flex-row items-center gap-4 text-gray-800">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span className="font-quicksand font-semibold">
                          Responses within 24 hours
                        </span>
                      </div>
                      <div className="hidden sm:block w-px h-5 bg-green-200"></div>
                      <div className="flex items-center gap-2">
                        <Headphones className="w-5 h-5 text-blue-400" />
                        <span className="font-quicksand font-semibold">
                          Expert support team
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information Card */}
              <div>
                <div
                  className="relative bg-white border-2 border-orange-200 p-8 shadow-lg h-fit"
                  style={{
                    borderRadius: '28px 25px 30px 20px',
                  }}
                >
                  {/* Square thumb tack */}
                  <div
                    className="absolute -top-1.5 right-8 h-3 w-3 rotate-45 transform bg-blue-400 shadow-sm"
                    aria-hidden="true"
                  ></div>

                  <div className="pt-2">
                    <h2 className="text-2xl font-quicksand font-bold mb-8 text-gray-800">
                      Contact Information
                    </h2>

                    <div className="space-y-8">
                      {/* Email */}
                      <div className="flex items-start">
                        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-200 text-blue-500 mt-0.5 mr-4 flex-shrink-0">
                          <Mail className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="font-quicksand font-semibold text-lg text-gray-800 mb-1">
                            Email
                          </h3>
                          <a
                            href={`mailto:${CONTACT_INFO.email}`}
                            className="text-gray-600 hover:text-blue-500 font-nunito transition-colors"
                          >
                            {CONTACT_INFO.email}
                          </a>
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="flex items-start">
                        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-green-200 text-green-500 mt-0.5 mr-4 flex-shrink-0">
                          <Phone className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="font-quicksand font-semibold text-lg text-gray-800 mb-1">
                            Phone
                          </h3>
                          <a
                            href={`tel:${CONTACT_INFO.phone.e164}`}
                            className="text-gray-600 hover:text-green-500 font-nunito transition-colors"
                          >
                            {CONTACT_INFO.phone.display}
                          </a>
                        </div>
                      </div>

                      {/* Office */}
                      <div className="flex items-start">
                        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-orange-200 text-orange-500 mt-0.5 mr-4 flex-shrink-0">
                          <MapPin className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="font-quicksand font-semibold text-lg text-gray-800 mb-1">
                            Office
                          </h3>
                          <p className="text-gray-600 font-nunito">
                            {CONTACT_INFO.address.city},{' '}
                            {CONTACT_INFO.address.state}
                            <br />
                            {CONTACT_INFO.address.country}
                          </p>
                        </div>
                      </div>

                      {/* Hours */}
                      <div className="flex items-start">
                        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-yellow-200 text-yellow-600 mt-0.5 mr-4 flex-shrink-0">
                          <Clock4 className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="font-quicksand font-semibold text-lg text-gray-800 mb-1">
                            Hours
                          </h3>
                          <p className="text-gray-600 font-nunito">
                            Monday - Friday
                            <br />
                            9:00 AM - 5:00 PM EST
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Urgent inquiries note */}
                    <div
                      className="p-4 mt-8 bg-blue-100 border border-blue-200"
                      style={{
                        borderRadius: '15px 18px 12px 20px',
                      }}
                    >
                      <p className="text-sm text-gray-700 font-nunito">
                        For urgent inquiries outside of business hours, please
                        email us and we will respond first thing the next
                        business day.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ section */}
        <section className="pb-16 md:pb-24">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6">
            <div
              className="relative max-w-4xl mx-auto bg-white border-2 border-yellow-200 p-8 shadow-lg"
              style={{
                borderRadius: '30px 25px 35px 20px',
              }}
            >
              {/* Thumb tack */}
              <div
                className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 transform"
                aria-hidden="true"
              >
                <div
                  className="h-full w-full rounded-full bg-yellow-400 shadow-sm"
                  aria-hidden="true"
                ></div>
                <div
                  className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
                  aria-hidden="true"
                ></div>
              </div>

              <div className="pt-2">
                <FAQ
                  items={[
                    {
                      question: 'How quickly will I receive a response?',
                      answer:
                        'We strive to respond to all inquiries within 24 hours during business days. For complex technical issues, it may take up to 48 hours to provide a complete solution.',
                    },
                    {
                      question: 'Do you offer phone support?',
                      answer:
                        'Yes, phone support is available for all paid plans during business hours (9 AM - 5 PM EST, Monday through Friday). Free trial users are encouraged to reach out via email.',
                    },
                    {
                      question: 'Can I schedule a demo of Praxis Notes?',
                      answer:
                        'Absolutely! You can request a personalized demo through this contact form. Select "Demo Request" as your subject, and our team will reach out to schedule a time that works for you.',
                    },
                    {
                      question: 'How do I report a technical issue?',
                      answer:
                        'For technical issues, please provide as much detail as possible including: your account email, what you were trying to do, any error messages you received, and screenshots if available. This helps us resolve your issue more quickly.',
                    },
                    {
                      question:
                        'Do you offer custom solutions for larger organizations?',
                      answer:
                        'Yes, we offer customized enterprise solutions for larger ABA practices and organizations. Please contact us through the form and specify "Enterprise Inquiry" in the subject line. Our team will work with you to understand your specific needs and create a tailored solution.',
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA section */}
        <CTAPlain
          subtitle="Have more questions about how we can help?"
          description="Our team is ready to assist you with any questions about our ABA documentation platform."
          primaryButtonText="Contact us now"
          secondaryButtonText="View pricing"
          secondaryButtonLink="/pricing"
        />
      </div>
    </>
  );
}
