import { SCHEMA_CONTEXT, WEBSITE_BASE_URL } from '../shared/constants';
import { ORGANIZATION_BASE_DATA } from '../shared/organization-data';

export interface SaaSProductSchemaProps {
  name?: string;
  description?: string;
  features?: string[];
  pricing?: {
    currency: string;
    minPrice: number;
    maxPrice: number;
  };
}

export function generateSaaSProductSchema(props?: SaaSProductSchemaProps) {
  return {
    '@context': SCHEMA_CONTEXT,
    '@type': 'SoftwareApplication',
    name: props?.name || 'Praxis Notes',
    description:
      props?.description ||
      'AI-Powered ABA Session Notes platform for behavioral therapy professionals',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Web Browser',
    url: WEBSITE_BASE_URL,
    publisher: ORGANIZATION_BASE_DATA,
    offers: props?.pricing
      ? {
          '@type': 'AggregateOffer',
          priceCurrency: props.pricing.currency,
          lowPrice: props.pricing.minPrice,
          highPrice: props.pricing.maxPrice,
          offerCount: 4, // Free, Individual, Pro, Team
          availability: 'https://schema.org/InStock',
        }
      : undefined,
    featureList: props?.features || [
      'AI-powered session note generation',
      'HIPAA-compliant documentation',
      'Insurance-ready notes',
      'Multi-client management',
      'Real-time collaboration',
    ],
    screenshot: `${WEBSITE_BASE_URL}/images/session-screenshot.png`,
    softwareVersion: '2.0',
    datePublished: '2023-01-01',
    dateModified: new Date().toISOString().split('T')[0],
  };
}
