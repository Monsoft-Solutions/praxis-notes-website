import Hero from 'website/components/sections/hero';
import Features from 'website/components/sections/features';
import Testimonials from 'website/components/sections/testimonials';
import CTA from 'website/components/sections/cta';
import HowItWorks from 'website/components/sections/how-it-works';
import Pricing from 'website/components/sections/pricing';
import { generateSaaSProductSchema, JsonLdScript } from '../lib/jsonld';

export default function Home() {
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

  return (
    <>
      <JsonLdScript data={productSchema} id="saas-product-schema" />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <CTA />
    </>
  );
}
