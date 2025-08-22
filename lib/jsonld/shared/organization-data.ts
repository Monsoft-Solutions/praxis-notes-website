import { CONTACT_INFO } from '../../contact-info';

export const ORGANIZATION_BASE_DATA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Praxis Notes',
  alternateName: 'PraxisNotes',
  description:
    'AI-Powered ABA Session Notes platform for RBTs, BCBAs, and clinics',
  url: 'https://praxisnotes.com',
  logo: 'https://praxisnotes.com/images/logo/praxis-note-logo-main.png',
  email: CONTACT_INFO.email,
  telephone: CONTACT_INFO.phone.e164,
  address: {
    '@type': 'PostalAddress',
    addressLocality: CONTACT_INFO.address.city,
    addressRegion: CONTACT_INFO.address.state,
    addressCountry: CONTACT_INFO.address.country,
  },
  sameAs: [
    CONTACT_INFO.social.facebook,
    CONTACT_INFO.social.instagram,
    CONTACT_INFO.social.tiktok,
  ],
  foundingDate: '2023',
  industryIdentifier: 'Healthcare Technology',
  keywords: [
    'ABA notes',
    'ABA session notes',
    'applied behavior analysis',
    'healthcare technology',
    'RBT notes',
    'BCBA notes',
    'ABA notes',
    'ABA session notes',
    'applied behavior analysis',
    'healthcare technology',
    'RBT notes',
    'BCBA notes',
  ],
} as const;
