import { WEBSITE_BASE_URL, SCHEMA_CONTEXT } from '../shared/constants';
import { ORGANIZATION_BASE_DATA } from '../shared/organization-data';

export interface WebsiteSchemaProps {
  name?: string;
  description?: string;
  about?: string;
}

export function generateWebsiteSchema(props?: WebsiteSchemaProps) {
  return {
    '@context': SCHEMA_CONTEXT,
    '@type': 'WebSite',
    name: props?.name || 'Praxis Notes',
    description: props?.description || 'AI-Powered ABA Session Notes platform',
    url: WEBSITE_BASE_URL,
    publisher: ORGANIZATION_BASE_DATA,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${WEBSITE_BASE_URL}/resources?search={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
    about:
      props?.about ||
      'Applied Behavior Analysis documentation and session notes',
  };
}
