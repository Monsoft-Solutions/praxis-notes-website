export const SCHEMA_CONTEXT = 'https://schema.org';
export const WEBSITE_BASE_URL = 'https://praxisnotes.com';

export const COMMON_KEYWORDS = [
  'ABA notes',
  'session notes',
  'applied behavior analysis',
  'RBT notes',
  'BCBA documentation',
  'ABA therapy documentation',
  'behavioral therapy',
  'HIPAA compliant',
] as const;

export const AUTHOR_DEFAULT = {
  '@type': 'Organization',
  name: 'Praxis Notes Team',
  url: 'https://praxisnotes.com/about',
} as const;
