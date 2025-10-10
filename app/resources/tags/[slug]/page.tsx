import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { BookOpen, Tag as TagIcon } from 'lucide-react';
import { getResourcesByTag, getAllTags } from 'website/lib/tags';
import TagHero from 'website/components/sections/resources/tag-hero';
import TagResourcesContainer from 'website/components/sections/resources/tag-resources-container';
import CTAPlain from 'website/components/sections/cta-plain';
import { Button } from 'website/components/ui/button';

interface TagPageProps {
  params: Promise<{ slug: string }>;
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

export default async function TagPage({ params }: TagPageProps) {
  const { slug } = await params;

  // Fetch first page of resources for this tag
  // Additional pages will be loaded client-side with infinite scroll
  const pageSize = 12;
  const { resources, tag, totalCount } = await getResourcesByTag(
    slug,
    1,
    pageSize
  );

  if (!tag) {
    notFound();
  }

  // Empty state component
  const emptyState = (
    <div className="text-center py-20">
      <div
        className="max-w-md mx-auto bg-white p-12 shadow-xl border-2 border-gray-200"
        style={{
          borderRadius: '25px 30px 20px 35px',
          borderStyle: 'solid',
        }}
      >
        {/* Thumb tack */}
        <div className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 transform">
          <div className="h-full w-full rounded-full bg-gray-400 shadow-md"></div>
          <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
        </div>

        <div className="pt-2">
          <TagIcon className="w-16 h-16 text-gray-400 mx-auto mb-6" />
          <h3 className="text-xl font-quicksand font-bold text-gray-600 mb-4">
            No Resources Available
          </h3>
          <p className="text-gray-500 font-nunito leading-relaxed mb-6">
            This tag is being developed. Check back soon for specialized
            resources.
          </p>
          <Button
            asChild
            className="h-10 px-6 bg-purple-400 hover:bg-purple-500 text-white font-quicksand font-semibold transition-all duration-200"
            style={{ borderRadius: '12px 14px 10px 16px' }}
          >
            <Link href="/resources/tags">Browse Other Tags</Link>
          </Button>
        </div>
      </div>
    </div>
  );

  // Related actions component
  const relatedActions = (
    <div
      className="max-w-4xl mx-auto bg-white p-10 shadow-2xl border-2 border-purple-200"
      style={{
        borderRadius: '28px 35px 22px 38px',
        borderStyle: 'solid',
      }}
    >
      <div className="pt-6">
        <h3
          className="text-2xl font-quicksand font-bold text-gray-800 mb-6"
          style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.05)' }}
        >
          Explore More Resources
        </h3>
        <p className="text-lg font-nunito text-gray-600 mb-8 leading-relaxed">
          Discover more ABA resources across different tags or browse our
          complete collection.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            className="h-12 px-8 bg-purple-400 hover:bg-purple-500 text-white font-quicksand font-semibold transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
            style={{ borderRadius: '14px 18px 12px 16px' }}
          >
            <Link href="/resources/tags">
              <TagIcon className="w-5 h-5 mr-2" />
              Browse Tags
            </Link>
          </Button>

          <Button
            asChild
            className="h-12 px-8 bg-pink-400 hover:bg-pink-500 text-white font-quicksand font-semibold transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
            style={{ borderRadius: '14px 18px 12px 16px' }}
          >
            <Link href="/resources">
              <BookOpen className="w-5 h-5 mr-2" />
              All Resources
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );

  // Background decorations
  const backgroundDecorations = (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute left-10 top-20 h-12 w-12 rounded-full border-2 border-purple-200 opacity-30"
        style={{ transform: 'rotate(0.1deg)' }}
      ></div>
      <div className="absolute right-16 top-1/4 h-8 w-8 rounded border border-pink-200 opacity-40"></div>
      <div className="absolute left-1/4 bottom-20 h-2 w-2 rounded-full bg-yellow-200 opacity-50"></div>
      <div className="absolute right-1/3 bottom-32 h-6 w-6 rounded border-2 border-orange-200 opacity-35"></div>
    </div>
  );

  return (
    <>
      {/* Hero section */}
      <TagHero tag={tag} totalResources={totalCount} />

      {/* Resources grid section with infinite scroll */}
      <TagResourcesContainer
        slug={slug}
        initialResources={resources}
        pageSize={pageSize}
        totalCount={totalCount}
        emptyState={emptyState}
        relatedActions={relatedActions}
        backgroundGradient="from-purple-50 via-pink-50 to-yellow-50"
        backgroundDecorations={backgroundDecorations}
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
