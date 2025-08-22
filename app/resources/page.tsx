import { Metadata } from 'next';
import { getPaginatedResources } from 'website/lib/resources';
import CTAPlain from 'website/components/sections/cta-plain';
import ResourcesHero from 'website/components/sections/resources/resources-hero';
import ResourcesGrid from 'website/components/sections/resources/resources-grid';

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
  searchParams: Promise<{ page?: string }>;
}) {
  const currentPage = Number((await searchParams).page) || 1;
  const pageSize = 6; // Number of resources per page

  const { resources, totalPages } = await getPaginatedResources(
    currentPage,
    pageSize
  );

  return (
    <>
      {/* Hero section */}
      <ResourcesHero />

      {/* Resources grid section */}
      <ResourcesGrid
        resources={resources}
        currentPage={currentPage}
        totalPages={totalPages}
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
