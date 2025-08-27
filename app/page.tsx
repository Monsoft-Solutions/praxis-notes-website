import { Metadata } from 'next';
import Hero from 'website/components/sections/hero';
import Features from 'website/components/sections/features';
import Testimonials from 'website/components/sections/testimonials';
import FAQ from 'website/components/sections/faq';
import CTA from 'website/components/sections/cta';
import HowItWorks from 'website/components/sections/how-it-works';
import LatestResources from 'website/components/sections/latest-resources';
import {
  generateSaaSProductSchema,
  generateFAQPageSchema,
  JsonLdScript,
} from '../lib/jsonld';
import { getLatestResources } from 'website/lib/resources';
import { homepageFAQs } from 'website/data/faqs';

export const metadata: Metadata = {
  // Use default title from layout (will become "Praxis Notes - AI-Powered ABA Session Notes for RBTs & BCBAs")
};

export default async function Home() {
  // Fetch latest resources for the homepage
  const latestResources = await getLatestResources(6);

  const productSchema = generateSaaSProductSchema({
    features: [
      'AI-powered session note generation',
      'HIPAA-compliant documentation',
      'Insurance-ready notes',
      'Multi-client management',
      'Real-time collaboration',
      'Smart templates and workflows',
      'Progress tracking and analytics',
      'Team collaboration tools',
    ],
    pricing: {
      currency: 'USD',
      minPrice: 0, // Free plan
      maxPrice: 199, // Team plan
    },
  });

  const faqSchema = generateFAQPageSchema({
    faqs: homepageFAQs,
    aboutPage: 'https://www.praxisnotes.com/about',
  });

  return (
    <>
      <JsonLdScript data={productSchema} id="saas-product-schema" />
      <JsonLdScript data={faqSchema} id="faq-schema" />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <FAQ items={homepageFAQs} />
      <LatestResources resources={latestResources} />
      <CTA />
    </>
  );
}
