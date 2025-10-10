import { Metadata } from 'next';
import { getAllCategoriesWithCounts } from 'website/lib/categories';
import CTAPlain from 'website/components/sections/cta-plain';
import CategoriesHero from 'website/components/sections/resources/categories-hero';
import CategoriesGrid from 'website/components/sections/resources/categories-grid';
import ResourcesNavigation from 'website/components/sections/resources/resources-navigation';

export const metadata: Metadata = {
  title: 'ABA Resource Categories | Browse by Topic',
  description:
    'Explore ABA therapy resources organized by categories. Find specific topics in applied behavior analysis, autism therapy, behavioral interventions, and professional development.',

  // Keywords for SEO
  keywords: [
    'ABA categories',
    'behavioral analysis topics',
    'ABA therapy categories',
    'autism therapy resources',
    'behavioral intervention topics',
    'ABA professional development',
    'clinical ABA topics',
    'therapeutic resources',
    'BCBA resource categories',
    'RBT training topics',
    'ABA research categories',
    'behavioral strategies',
  ].join(', '),

  // Canonical URL
  alternates: {
    canonical: 'https://praxisnotes.com/resources/categories',
  },

  // Open Graph for social sharing
  openGraph: {
    title: 'ABA Resource Categories | Browse by Topic',
    description:
      'Explore ABA therapy resources organized by categories. Find specific topics in applied behavior analysis and autism therapy.',
    url: 'https://praxisnotes.com/resources/categories',
    siteName: 'Praxis Notes',
    type: 'website',
    images: [
      {
        url: 'https://praxisnotes.com/images/resources-hero.jpg',
        alt: 'ABA Resource Categories and Topics',
        width: 1200,
        height: 630,
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'ABA Resource Categories | Browse by Topic',
    description:
      'Explore ABA therapy resources organized by categories. Find specific topics in applied behavior analysis.',
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

export default async function CategoriesPage() {
  const categories = await getAllCategoriesWithCounts();

  return (
    <>
      {/* Hero section */}
      <CategoriesHero />

      {/* Navigation section */}
      <section className="py-8 bg-gradient-to-br from-blue-50 via-yellow-50/50 to-orange-50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <ResourcesNavigation className="sticky top-4 z-10" />
        </div>
      </section>

      {/* Categories grid section */}
      <CategoriesGrid categories={categories} />

      {/* CTA section */}
      <CTAPlain
        subtitle="Need help finding specific ABA resources?"
        description="Our experts can help you discover the right resources and categories for your ABA practice needs."
        primaryButtonText="Contact us"
        primaryButtonLink="/contact"
        secondaryButtonText="Browse all resources"
        secondaryButtonLink="/resources"
      />
    </>
  );
}
