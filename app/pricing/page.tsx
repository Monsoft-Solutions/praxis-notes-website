import { Metadata } from "next";
import Pricing from "website/components/sections/pricing";
import CTA from "website/components/sections/cta";
import FAQ from "website/components/sections/faq";
import PricingHero from "website/components/sections/pricing/pricing-hero";

export const metadata: Metadata = {
  title: "Pricing | Praxis Notes",
  description:
    "Simple, transparent pricing plans for Praxis Notes - the AI-powered ABA session notes tool for RBTs, BCBAs, and clinics.",
};

export default function PricingPage() {
  return (
    <>
      <PricingHero />

      <div id="pricing"></div>
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
