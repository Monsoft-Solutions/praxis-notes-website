import { SCHEMA_CONTEXT } from '../shared/constants';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQPageSchemaProps {
  faqs: FAQItem[];
  aboutPage?: string;
}

export function generateFAQPageSchema({ faqs, aboutPage }: FAQPageSchemaProps) {
  return {
    '@context': SCHEMA_CONTEXT,
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
    ...(aboutPage && {
      about: aboutPage,
    }),
  };
}
