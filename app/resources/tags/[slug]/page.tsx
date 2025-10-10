import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getResourcesByTag, getAllTags } from 'website/lib/tags';
import TagHero from 'website/components/sections/resources/tag-hero';
import TagResourcesGrid from 'website/components/sections/resources/tag-resources-grid';
import CTAPlain from 'website/components/sections/cta-plain';

interface TagPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page?: string }>;
}

// Generate metadata for the tag page
export async function generateMetadata({
  params,
}: TagPageProps): Promise<Metadata> {
  const { slug } = await params;
  const { tag } = await getResourcesByTag(slug, 1, 1);

  if (!tag) {
    return {
      title: 'Tag Not Found',
      description: 'The requested tag could not be found.',
    };
  }

  return {
    title: `#${tag.name} | ABA Resources & Guides`,
    description: `Explore comprehensive ABA therapy resources and guides tagged with #${tag.name}. Learn from expert content on applied behavior analysis, therapeutic techniques, and best practices.`,

    // Keywords for SEO
    keywords: [
      `${tag.name} ABA resources`,
      `${tag.name} behavioral analysis`,
      `${tag.name} therapy guides`,
      'applied behavior analysis',
      'ABA best practices',
      'behavioral intervention',
      'clinical ABA techniques',
      'BCBA resources',
      'RBT training',
      'autism therapy',
      `${tag.name} professional development`,
    ].join(', '),

    // Canonical URL
    alternates: {
      canonical: `https://praxisnotes.com/resources/tags/${tag.slug}`,
    },

    // Open Graph for social sharing
    openGraph: {
      title: `#${tag.name} | ABA Resources & Guides`,
      description: `Explore comprehensive ABA therapy resources and guides tagged with #${tag.name}.`,
      url: `https://praxisnotes.com/resources/tags/${tag.slug}`,
      siteName: 'Praxis Notes',
      type: 'website',
      images: [
        {
          url: 'https://praxisnotes.com/images/resources-hero.jpg',
          alt: `${tag.name} ABA Resources and Guides`,
          width: 1200,
          height: 630,
        },
      ],
    },

    // Twitter Card
    twitter: {
      card: 'summary_large_image',
      title: `#${tag.name} | ABA Resources & Guides`,
      description: `Explore comprehensive ABA therapy resources and guides tagged with #${tag.name}.`,
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
}

// Generate static params for all tags
export async function generateStaticParams() {
  const tags = await getAllTags();

  return tags.map(tag => ({
    slug: tag.slug,
  }));
}

// Enable ISR with 12 hour revalidation (43200 seconds)
// On-demand revalidation via API ensures immediate updates when content is added
export const revalidate = 43200;

export default async function TagPage({ params, searchParams }: TagPageProps) {
  const { slug } = await params;
  const currentPage = Number((await searchParams).page) || 1;
  const pageSize = 6; // Number of resources per page

  const { resources, tag, totalCount, totalPages } = await getResourcesByTag(
    slug,
    currentPage,
    pageSize
  );

  if (!tag) {
    notFound();
  }

  return (
    <>
      {/* Hero section */}
      <TagHero tag={tag} totalResources={totalCount} />

      {/* Resources grid section */}
      <TagResourcesGrid
        resources={resources}
        tag={tag}
        currentPage={currentPage}
        totalPages={totalPages}
      />

      {/* CTA section */}
      <CTAPlain
        subtitle={`Need more resources about ${tag.name}?`}
        description={`Our experts can help you find additional resources and guides specifically tagged with ${tag.name} for your ABA practice.`}
        primaryButtonText="Contact us"
        primaryButtonLink="/contact"
        secondaryButtonText="Browse all tags"
        secondaryButtonLink="/resources/tags"
      />
    </>
  );
}
