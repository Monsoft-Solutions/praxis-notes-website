import { Metadata } from 'next';
import Pricing from 'website/components/sections/pricing';
import CTA from 'website/components/sections/cta';
import FAQ from 'website/components/sections/faq';
import PricingHero from 'website/components/sections/pricing/pricing-hero';
import {
  generatePricingPageSchema,
  generateFAQPageSchema,
  JsonLdScript,
} from '../../lib/jsonld';

export const metadata: Metadata = {
  title: 'Pricing Plans - Affordable ABA Documentation Software',
  description:
    'Simple, transparent pricing plans for Praxis Notes - the AI-powered ABA session notes tool for RBTs, BCBAs, and clinics. Start free, scale as you grow.',

  // Keywords for SEO
  keywords: [
    'ABA software pricing',
    'session notes cost',
    'BCBA software plans',
    'RBT documentation pricing',
    'behavioral analysis software cost',
    'ABA clinic pricing',
    'therapy documentation plans',
    'HIPAA compliant software pricing',
    'AI-powered ABA cost',
    'subscription plans',
    'free ABA trial',
    'affordable ABA software',
  ].join(', '),

  // Author information
  authors: [{ name: 'PraxisNote Team' }],

  // Canonical URL
  alternates: {
    canonical: 'https://praxisnotes.com/pricing',
  },

  // Open Graph for social sharing
  openGraph: {
    title:
      'Pricing Plans | Praxis Notes - Affordable ABA Documentation Software',
    description:
      'Simple, transparent pricing for AI-powered ABA session notes. Plans starting from free for RBTs, BCBAs, and clinics.',
    url: 'https://praxisnotes.com/pricing',
    siteName: 'Praxis Notes',
    type: 'website',
    images: [
      {
        url: 'https://praxisnotes.com/images/pricing-hero.jpg',
        alt: 'Praxis Notes Pricing Plans - Affordable ABA Documentation',
        width: 1200,
        height: 630,
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Praxis Notes Pricing - Affordable ABA Documentation',
    description:
      'Simple, transparent pricing for AI-powered ABA session notes. Plans starting from free.',
    images: ['https://praxisnotes.com/images/pricing-hero.jpg'],
  },

  // Additional metadata
  category: 'Pricing',

  // Robots directive
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function PricingPage() {
  const pricingSchema = generatePricingPageSchema({
    plans: [
      {
        name: 'Free',
        price: 0,
        currency: 'USD',
        billingPeriod: 'MONTH',
        description: 'Perfect for trying out Praxis Notes',
        features: [
          '10 notes per month',
          '1 client',
          'Basic templates',
          'Community support',
        ],
      },
      {
        name: 'Individual',
        price: 29,
        currency: 'USD',
        billingPeriod: 'MONTH',
        description: 'For individual ABA professionals',
        features: [
          '30 notes per month',
          '1 client',
          'Advanced templates',
          'Priority support',
          'Export options',
        ],
      },
      {
        name: 'Pro',
        price: 59,
        currency: 'USD',
        billingPeriod: 'MONTH',
        description: 'For growing practices',
        features: [
          '60 notes per month',
          'Unlimited clients',
          'Custom templates',
          'Analytics dashboard',
          'Priority support',
        ],
      },
      {
        name: 'Team',
        price: 199,
        currency: 'USD',
        billingPeriod: 'MONTH',
        description: 'For clinics and teams',
        features: [
          '200 notes per month',
          'Unlimited clients',
          'Team collaboration',
          'Admin dashboard',
          'Dedicated support',
        ],
      },
    ],
  });

  const faqSchema = generateFAQPageSchema({
    faqs: [
      {
        question: 'Can I cancel my subscription at any time?',
        answer:
          "Yes, you can cancel your subscription at any time. You'll continue to have access until the end of your billing period.",
      },
      {
        question: 'Do you offer discounts for larger teams?',
        answer:
          'Yes, we offer volume discounts for teams of 10 or more. Please contact our sales team for custom pricing.',
      },
      {
        question: 'Is there a limit to how many notes I can generate?',
        answer:
          'Yes, each plan has a specific allocation of notes: Free (10 notes), Individual (30 notes), Pro (60 notes), Team (200 notes).',
      },
      {
        question: 'Is my data secure and HIPAA-compliant?',
        answer:
          'Yes, we take security seriously. All data is encrypted in transit and at rest, and our systems are designed to be HIPAA-compliant.',
      },
      {
        question: 'Can I export my notes?',
        answer:
          'Yes, you can export your notes as PDF or CSV files, making it easy to integrate with your existing systems.',
      },
      {
        question: 'Can I upgrade or downgrade my plan?',
        answer:
          "Yes, you can upgrade or downgrade your plan at any time. When upgrading, you'll get immediate access to the new features.",
      },
    ],
    aboutPage: 'ABA session notes pricing and subscription plans',
  });

  return (
    <>
      <JsonLdScript data={pricingSchema} id="pricing-schema" />
      <JsonLdScript data={faqSchema} id="faq-schema" />
      <PricingHero />

      <div id="pricing"></div>
      <Pricing />

      <FAQ
        badge="Pricing Questions"
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about our pricing and subscription options"
        items={[
          {
            question: 'Can I cancel my subscription at any time?',
            answer:
              "Yes, you can cancel your subscription at any time. You'll continue to have access until the end of your billing period.",
          },
          {
            question: 'Do you offer discounts for larger teams?',
            answer:
              'Yes, we offer volume discounts for teams of 10 or more. Please contact our sales team for custom pricing.',
          },
          {
            question: 'Is there a limit to how many notes I can generate?',
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
            question: 'What happens when I run out of notes?',
            answer:
              'You can purchase additional notes at any time or wait until your next billing cycle when your plan refreshes with new notes allocation. Unused notes roll over to the next month (up to 2x your monthly allowance).',
          },
          {
            question: 'Can I switch between monthly and annual billing?',
            answer:
              "Yes, you can switch between monthly and annual billing at any time. Annual billing gives you 2 months free compared to paying monthly. When switching from monthly to annual, you'll be charged the prorated annual amount. When switching from annual to monthly, your annual subscription will continue until the end of your billing cycle.",
          },
          {
            question: 'Is my data secure and HIPAA-compliant?',
            answer:
              'Yes, we take security seriously. All data is encrypted in transit and at rest, and our systems are designed to be HIPAA-compliant.',
          },
          {
            question: 'Can I export my notes?',
            answer:
              'Yes, you can export your notes as PDF or CSV files, making it easy to integrate with your existing systems.',
          },

          {
            question: 'Can I upgrade or downgrade my plan?',
            answer:
              "Yes, you can upgrade or downgrade your plan at any time. When upgrading, you'll get immediate access to the new features. When downgrading, the changes will take effect at the start of your next billing cycle.",
          },
        ]}
      />

      <CTA />
    </>
  );
}
