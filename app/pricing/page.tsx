import { Metadata } from "next";
import Pricing from "website/components/sections/pricing";
import CTA from "website/components/sections/cta";
import FAQ from "website/components/sections/faq";

export const metadata: Metadata = {
  title: "Pricing | Praxis Notes",
  description:
    "Simple, transparent pricing plans for Praxis Notes - the AI-powered ABA session notes tool for RBTs, BCBAs, and clinics.",
};

export default function PricingPage() {
  return (
    <>
      <section className="relative py-20 overflow-hidden bg-ivory dark:bg-deep-navy">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute right-1/3 top-0 h-96 w-96 -translate-y-1/2 rounded-full bg-soft-blue/10 blur-3xl" />
          <div className="absolute left-1/4 bottom-0 h-96 w-96 translate-y-1/2 rounded-full bg-lavender/10 blur-3xl" />
        </div>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
              <span>Start free, pay only for what you need</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Invest in your Time
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed mb-10">
              Choose the plan that works best for you and your practice. No
              hidden fees.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="inline-block">
                <div className="flex items-center space-x-2 mb-2 justify-center">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <div key={i} className="text-yellow-500">
                        ⭐
                      </div>
                    ))}
                </div>
                <p className="text-sm text-muted-foreground font-medium">
                  Trusted by 5,000+ ABA professionals
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Pricing />

      <FAQ
        badge="Pricing Questions"
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about our pricing and subscription options"
        items={[
          {
            question: "Can I cancel my subscription at any time?",
            answer:
              "Yes, you can cancel your subscription at any time. You'll continue to have access until the end of your billing period.",
          },
          {
            question: "Do you offer discounts for larger teams?",
            answer:
              "Yes, we offer volume discounts for teams of 10 or more. Please contact our sales team for custom pricing.",
          },
          {
            question: "Is there a limit to how many notes I can generate?",
            answer: (
              <>
                Yes, each plan has a specific allocation of notes:
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Free: 10 notes and 10 revisions with 1 client</li>
                  <li>Individual: 30 notes/revisions with 1 client</li>
                  <li>Pro: 60 notes/revisions with unlimited clients</li>
                  <li>Team: 200 notes/revisions with unlimited clients</li>
                </ul>
              </>
            ),
          },
          {
            question: "What happens when I run out of notes?",
            answer:
              "You can purchase additional notes at any time or wait until your next billing cycle when your plan refreshes with new notes allocation. Unused notes roll over to the next month (up to 2x your monthly allowance).",
          },
          {
            question: "Can I switch between monthly and annual billing?",
            answer:
              "Yes, you can switch between monthly and annual billing at any time. Annual billing gives you 2 months free compared to paying monthly. When switching from monthly to annual, you'll be charged the prorated annual amount. When switching from annual to monthly, your annual subscription will continue until the end of your billing cycle.",
          },
          {
            question: "Is my data secure and HIPAA-compliant?",
            answer:
              "Yes, we take security seriously. All data is encrypted in transit and at rest, and our systems are designed to be HIPAA-compliant.",
          },
          {
            question: "Can I export my notes?",
            answer:
              "Yes, you can export your notes as PDF or CSV files, making it easy to integrate with your existing systems.",
          },
          {
            question: "Do you offer a money-back guarantee?",
            answer:
              "Yes, we offer a 30-day money-back guarantee if you're not satisfied with our service for any reason.",
          },
          {
            question: "Can I upgrade or downgrade my plan?",
            answer:
              "Yes, you can upgrade or downgrade your plan at any time. When upgrading, you'll get immediate access to the new features. When downgrading, the changes will take effect at the start of your next billing cycle.",
          },
        ]}
      />

      <CTA />
    </>
  );
}
