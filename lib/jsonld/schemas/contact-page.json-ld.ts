import { SCHEMA_CONTEXT } from '../shared/constants';
import { ORGANIZATION_BASE_DATA } from '../shared/organization-data';

export function generateContactPageSchema() {
  return {
    '@context': SCHEMA_CONTEXT,
    '@type': 'ContactPage',
    mainEntity: ORGANIZATION_BASE_DATA,
    significantLink: ['mailto:support@praxisnotes.com', 'tel:+13057974357'],
    about: 'Contact information for Praxis Notes customer support and sales',
  };
}
