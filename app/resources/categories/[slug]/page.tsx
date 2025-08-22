import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  getResourcesByCategory,
  getAllCategories,
} from 'website/lib/categories';
import CategoryHero from 'website/components/sections/resources/category-hero';
import CategoryResourcesGrid from 'website/components/sections/resources/category-resources-grid';
import CTAPlain from 'website/components/sections/cta-plain';

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page?: string }>;
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

export default async function CategoryPage({
  params,
  searchParams,
}: CategoryPageProps) {
  const { slug } = await params;
  const currentPage = Number((await searchParams).page) || 1;
  const pageSize = 6; // Number of resources per page

  const { resources, category, totalCount, totalPages } =
    await getResourcesByCategory(slug, currentPage, pageSize);

  if (!category) {
    notFound();
  }

  return (
    <>
      {/* Hero section */}
      <CategoryHero category={category} totalResources={totalCount} />

      {/* Resources grid section */}
      <CategoryResourcesGrid
        resources={resources}
        category={category}
        currentPage={currentPage}
        totalPages={totalPages}
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
