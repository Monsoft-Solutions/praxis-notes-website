import { Metadata } from 'next';
import { getAllTagsWithCounts } from 'website/lib/tags';
import CTAPlain from 'website/components/sections/cta-plain';
import TagsHero from 'website/components/sections/resources/tags-hero';
import TagsGrid from 'website/components/sections/resources/tags-grid';
import ResourcesNavigation from 'website/components/sections/resources/resources-navigation';

export const metadata: Metadata = {
  title: 'ABA Resource Tags | Browse by Keyword',
  description:
    'Explore ABA therapy resources organized by tags and keywords. Find specific topics in applied behavior analysis, autism therapy, behavioral interventions, and professional development.',

  // Keywords for SEO
  keywords: [
    'ABA tags',
    'behavioral analysis keywords',
    'ABA therapy topics',
    'autism therapy resources',
    'behavioral intervention topics',
    'ABA professional development',
    'clinical ABA topics',
    'therapeutic resources',
    'BCBA resource tags',
    'RBT training topics',
    'ABA research topics',
    'behavioral strategies',
  ].join(', '),

  // Canonical URL
  alternates: {
    canonical: 'https://praxisnotes.com/resources/tags',
  },

  // Open Graph for social sharing
  openGraph: {
    title: 'ABA Resource Tags | Browse by Keyword',
    description:
      'Explore ABA therapy resources organized by tags and keywords. Find specific topics in applied behavior analysis and autism therapy.',
    url: 'https://praxisnotes.com/resources/tags',
    siteName: 'Praxis Notes',
    type: 'website',
    images: [
      {
        url: 'https://praxisnotes.com/images/resources-hero.jpg',
        alt: 'ABA Resource Tags and Keywords',
        width: 1200,
        height: 630,
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'ABA Resource Tags | Browse by Keyword',
    description:
      'Explore ABA therapy resources organized by tags and keywords. Find specific topics in applied behavior analysis.',
    images: ['https://praxisnotes.com/images/resources-hero.jpg'],
  },

  // Additional metadata
  category: 'Education & Resources',

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

// Enable ISR with 12 hour revalidation (43200 seconds)
// On-demand revalidation via API ensures immediate updates when content is added
export const revalidate = 43200;

export default async function TagsPage() {
  const tags = await getAllTagsWithCounts();

  return (
    <>
      {/* Hero section */}
      <TagsHero />

      {/* Navigation section */}
      <section className="py-8 bg-gradient-to-br from-blue-50 via-yellow-50/50 to-orange-50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <ResourcesNavigation className="sticky top-4 z-10" />
        </div>
      </section>

      {/* Tags grid section */}
      <TagsGrid tags={tags} />

      {/* CTA section */}
      <CTAPlain
        subtitle="Need help finding specific ABA resources?"
        description="Our experts can help you discover the right resources and topics for your ABA practice needs."
        primaryButtonText="Contact us"
        primaryButtonLink="/contact"
        secondaryButtonText="Browse all resources"
        secondaryButtonLink="/resources"
      />
    </>
  );
}
