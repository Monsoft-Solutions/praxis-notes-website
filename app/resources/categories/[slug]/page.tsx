import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { BookOpen, FolderOpen } from 'lucide-react';
import {
  getResourcesByCategory,
  getAllCategories,
} from 'website/lib/categories';
import CategoryHero from 'website/components/sections/resources/category-hero';
import CategoryResourcesContainer from 'website/components/sections/resources/category-resources-container';
import CTAPlain from 'website/components/sections/cta-plain';
import { Button } from 'website/components/ui/button';

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

// Generate metadata for the category page
export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const { category } = await getResourcesByCategory(slug, 1, 1);

  if (!category) {
    return {
      title: 'Category Not Found',
      description: 'The requested category could not be found.',
    };
  }

  return {
    title: `${category.name} | ABA Resources & Guides`,
    description:
      category.description ||
      `Explore comprehensive ABA therapy resources and guides in ${category.name}. Learn from expert content on applied behavior analysis, therapeutic techniques, and best practices.`,

    // Keywords for SEO
    keywords: [
      `${category.name} ABA resources`,
      `${category.name} behavioral analysis`,
      `${category.name} therapy guides`,
      'applied behavior analysis',
      'ABA best practices',
      'behavioral intervention',
      'clinical ABA techniques',
      'BCBA resources',
      'RBT training',
      'autism therapy',
      `${category.name} professional development`,
    ].join(', '),

    // Canonical URL
    alternates: {
      canonical: `https://praxisnotes.com/resources/categories/${category.slug}`,
    },

    // Open Graph for social sharing
    openGraph: {
      title: `${category.name} | ABA Resources & Guides`,
      description:
        category.description ||
        `Explore comprehensive ABA therapy resources and guides in ${category.name}.`,
      url: `https://praxisnotes.com/resources/categories/${category.slug}`,
      siteName: 'Praxis Notes',
      type: 'website',
      images: [
        {
          url: 'https://praxisnotes.com/images/resources-hero.jpg',
          alt: `${category.name} ABA Resources and Guides`,
          width: 1200,
          height: 630,
        },
      ],
    },

    // Twitter Card
    twitter: {
      card: 'summary_large_image',
      title: `${category.name} | ABA Resources & Guides`,
      description:
        category.description ||
        `Explore comprehensive ABA therapy resources and guides in ${category.name}.`,
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

// Generate static params for all categories
export async function generateStaticParams() {
  const categories = await getAllCategories();

  return categories.map(category => ({
    slug: category.slug,
  }));
}

// Enable ISR with 12 hour revalidation (43200 seconds)
// On-demand revalidation via API ensures immediate updates when content is added
export const revalidate = 43200;

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;

  // Fetch first page of resources for this category
  // Additional pages will be loaded client-side with infinite scroll
  const pageSize = 12;
  const { resources, category, totalCount } = await getResourcesByCategory(
    slug,
    1,
    pageSize
  );

  if (!category) {
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
          <FolderOpen className="w-16 h-16 text-gray-400 mx-auto mb-6" />
          <h3 className="text-xl font-quicksand font-bold text-gray-600 mb-4">
            No Resources Available
          </h3>
          <p className="text-gray-500 font-nunito leading-relaxed mb-6">
            This category is being developed. Check back soon for specialized
            resources.
          </p>
          <Button
            asChild
            className="h-10 px-6 bg-blue-400 hover:bg-blue-500 text-white font-quicksand font-semibold transition-all duration-200"
            style={{ borderRadius: '12px 14px 10px 16px' }}
          >
            <Link href="/resources/categories">Browse Other Categories</Link>
          </Button>
        </div>
      </div>
    </div>
  );

  // Related actions component
  const relatedActions = (
    <div
      className="max-w-4xl mx-auto bg-white p-10 shadow-2xl border-2 border-blue-200"
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
          Discover more ABA resources across different categories or browse our
          complete collection.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            className="h-12 px-8 bg-blue-400 hover:bg-blue-500 text-white font-quicksand font-semibold transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
            style={{ borderRadius: '14px 18px 12px 16px' }}
          >
            <Link href="/resources/categories">
              <FolderOpen className="w-5 h-5 mr-2" />
              Browse Categories
            </Link>
          </Button>

          <Button
            asChild
            className="h-12 px-8 bg-green-400 hover:bg-green-500 text-white font-quicksand font-semibold transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
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
        className="absolute left-10 top-20 h-12 w-12 rounded-full border-2 border-green-200 opacity-30"
        style={{ transform: 'rotate(0.1deg)' }}
      ></div>
      <div className="absolute right-16 top-1/4 h-8 w-8 rounded border border-blue-200 opacity-40"></div>
      <div className="absolute left-1/4 bottom-20 h-2 w-2 rounded-full bg-yellow-200 opacity-50"></div>
      <div className="absolute right-1/3 bottom-32 h-6 w-6 rounded border-2 border-orange-200 opacity-35"></div>
    </div>
  );

  return (
    <>
      {/* Hero section */}
      <CategoryHero category={category} totalResources={totalCount} />

      {/* Resources grid section with infinite scroll */}
      <CategoryResourcesContainer
        slug={slug}
        initialResources={resources}
        pageSize={pageSize}
        totalCount={totalCount}
        emptyState={emptyState}
        relatedActions={relatedActions}
        backgroundGradient="from-green-50 via-blue-50 to-yellow-50"
        backgroundDecorations={backgroundDecorations}
      />

      {/* CTA section */}
      <CTAPlain
        subtitle={`Need more ${category.name.toLowerCase()} resources?`}
        description={`Our experts can help you find additional resources and guides specifically for ${category.name.toLowerCase()} in your ABA practice.`}
        primaryButtonText="Contact us"
        primaryButtonLink="/contact"
        secondaryButtonText="Browse all categories"
        secondaryButtonLink="/resources/categories"
      />
    </>
  );
}
