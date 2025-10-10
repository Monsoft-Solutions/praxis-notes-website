import { Metadata } from 'next';
import { getAllResources } from 'website/lib/resources';
import { getAllCategoriesWithCounts } from 'website/lib/categories';
import CTAPlain from 'website/components/sections/cta-plain';
import ResourcesHero from 'website/components/sections/resources/resources-hero';
import ResourcesNavigation from 'website/components/sections/resources/resources-navigation';
import QuickCategoryFilter from 'website/components/sections/resources/quick-category-filter';
import ResourcesContainer from 'website/components/sections/resources/resources-container';

export const metadata: Metadata = {
  title: 'ABA Resources & Educational Content',
  description:
    'Discover comprehensive ABA therapy resources, best practices, and educational content. Learn from expert guides on applied behavior analysis, session documentation, and clinical techniques.',

  // Keywords for SEO
  keywords: [
    'ABA resources',
    'applied behavior analysis guides',
    'ABA therapy education',
    'behavioral analysis resources',
    'ABA best practices',
    'therapy documentation guides',
    'clinical ABA techniques',
    'BCBA resources',
    'RBT training materials',
    'ABA research',
    'behavioral intervention guides',
    'autism therapy resources',
  ].join(', '),

  // Canonical URL
  alternates: {
    canonical: 'https://praxisnotes.com/resources',
  },

  // Open Graph for social sharing
  openGraph: {
    title: 'ABA Resources & Educational Content',
    description:
      'Discover comprehensive ABA therapy resources, best practices, and educational content for behavioral analysis professionals.',
    url: 'https://praxisnotes.com/resources',
    siteName: 'Praxis Notes',
    type: 'website',
    images: [
      {
        url: 'https://praxisnotes.com/images/resources-hero.jpg',
        alt: 'ABA Resources and Educational Content Library',
        width: 1200,
        height: 630,
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'ABA Resources & Educational Content',
    description:
      'Discover comprehensive ABA therapy resources and educational content for behavioral analysis professionals.',
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

export default async function ResourcesPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; search?: string; sort?: string }>;
}) {
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;
  const pageSize = 12; // Number of resources per page (increased from 6 for better UX)

  // Fetch all resources and categories in parallel
  // We fetch all resources for client-side filtering/sorting
  const [resources, categories] = await Promise.all([
    getAllResources(),
    getAllCategoriesWithCounts(),
  ]);

  return (
    <>
      {/* Hero section */}
      <ResourcesHero />

      {/* Navigation and Quick Browse section */}
      <section className="py-6 md:py-8 bg-gradient-to-br from-blue-50 via-yellow-50/50 to-orange-50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 space-y-6">
          {/* Navigation tabs */}
          <ResourcesNavigation className="sticky top-4 z-10" />

          {/* Quick category filter - condensed */}
          <QuickCategoryFilter categories={categories} limit={4} />
        </div>
      </section>

      {/* Interactive resources container with search, sort, and filters */}
      <ResourcesContainer
        initialResources={resources}
        categories={categories}
        initialPage={currentPage}
        pageSize={pageSize}
      />

      {/* Add CTA section */}
      <CTAPlain
        subtitle="Need specific ABA resources?"
        description="Our experts can help you find the right resources for your ABA practice needs."
        primaryButtonText="Contact us"
        primaryButtonLink="/contact"
        secondaryButtonText="View all resources"
        secondaryButtonLink="/resources"
      />
    </>
  );
}
