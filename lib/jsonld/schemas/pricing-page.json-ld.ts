import { SCHEMA_CONTEXT, WEBSITE_BASE_URL } from '../shared/constants';
import { ORGANIZATION_BASE_DATA } from '../shared/organization-data';

export interface PricingPlan {
  name: string;
  price: number;
  currency: string;
  billingPeriod: 'MONTH' | 'YEAR';
  description: string;
  features: string[];
}

export interface PricingPageSchemaProps {
  plans: PricingPlan[];
}

export function generatePricingPageSchema({ plans }: PricingPageSchemaProps) {
  const offers = plans.map(plan => ({
    '@type': 'Offer',
    name: plan.name,
    description: plan.description,
    price: plan.price,
    priceCurrency: plan.currency,
    priceSpecification: {
      '@type': 'PriceSpecification',
      price: plan.price,
      priceCurrency: plan.currency,
      billingIncrement: plan.billingPeriod === 'MONTH' ? 'P1M' : 'P1Y',
    },
    eligibleQuantity: {
      '@type': 'QuantitativeValue',
      minValue: 1,
    },
    availability: 'https://schema.org/InStock',
    validFrom: new Date().toISOString(),
    seller: ORGANIZATION_BASE_DATA,
  }));

  return {
    '@context': SCHEMA_CONTEXT,
    '@type': 'Product',
    name: 'Praxis Notes Subscription Plans',
    description:
      'AI-powered ABA session notes platform with flexible pricing plans',
    brand: ORGANIZATION_BASE_DATA,
    offers: offers,
    category: 'Software as a Service',
    url: `${WEBSITE_BASE_URL}/pricing`,
  };
}
