import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from 'website/components/ui/button';
import {
  getResourceBySlug,
  getResourceBySlugForMetadata,
} from 'website/lib/resources';
import RelatedResources from 'website/components/sections/related-resources';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ChevronLeft, ArrowRight, Clock, Share, User } from 'lucide-react';
import {
  generateBlogPostingSchema,
  generateBreadcrumbSchema,
  JsonLdScript,
  SchemaValidator,
} from '../../../lib/jsonld';

type ResourceParams = {
  slug: string;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<ResourceParams>;
}): Promise<Metadata> {
  const slug = (await params).slug;
  const resource = await getResourceBySlugForMetadata(slug);

  if (!resource) {
    return {
      title: 'Resource Not Found',
    };
  }

  const resourceUrl = `https://www.praxisnotes.com/resources/${slug}`;

  return {
    title: `${resource.title}`,
    description: resource.metaDescription,

    // Keywords for SEO
    keywords: [
      ...(resource.metaKeywords?.split(',').map(k => k.trim()) || []),
      ...resource.categories.map(cat => cat.name),
      ...resource.tags.map(tag => tag.name),
      'ABA therapy',
      'session notes',
      'applied behavior analysis',
      'behavioral analysis',
      'therapy documentation',
    ].join(', '),

    // Author information
    authors: resource.author
      ? [
          {
            name: resource.author.name,
          },
        ]
      : [{ name: 'PraxisNote Team' }],

    // Canonical URL
    alternates: {
      canonical: resourceUrl,
    },

    // Open Graph for social sharing
    openGraph: {
      title: resource.title,
      description: resource.metaDescription,
      url: resourceUrl,
      siteName: 'PraxisNote Resources',
      type: 'article',
      publishedTime: resource.date
        ? new Date(resource.date).toISOString()
        : undefined,
      modifiedTime: resource.updatedAt
        ? new Date(resource.updatedAt).toISOString()
        : undefined,
      authors: resource.author ? [resource.author.name] : ['PraxisNote Team'],
      tags: resource.tags.map(tag => tag.name),
      ...(resource.featuredImage && {
        images: [
          {
            url: resource.featuredImage.url,
            alt: resource.featuredImage.alt,
            ...(resource.featuredImage.width && {
              width: resource.featuredImage.width,
            }),
            ...(resource.featuredImage.height && {
              height: resource.featuredImage.height,
            }),
          },
        ],
      }),
    },

    // Twitter Card
    twitter: {
      card: 'summary_large_image',
      title: resource.title,
      description: resource.metaDescription,
      ...(resource.featuredImage && {
        images: [resource.featuredImage.url],
      }),
    },

    // Additional metadata
    category: resource.categories[0]?.name,

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

export default async function ResourcePage({
  params,
}: {
  params: Promise<ResourceParams>;
}) {
  const slug = (await params).slug;
  const resource = await getResourceBySlug(slug);

  if (!resource) {
    notFound();
  }

  const resourceUrl = `https://www.praxisnotes.com/resources/${slug}`;

  const blogPostingSchema = generateBlogPostingSchema({
    resource,
    url: resourceUrl,
  });

  const breadcrumbSchema = generateBreadcrumbSchema({
    items: [
      { name: 'Home', url: 'https://www.praxisnotes.com' },
      { name: 'Resources', url: 'https://www.praxisnotes.com/resources' },
      { name: resource.title, url: resourceUrl },
    ],
  });

  SchemaValidator.validateInDevelopment(blogPostingSchema, 'BlogPosting');
  SchemaValidator.validateInDevelopment(breadcrumbSchema, 'BreadcrumbList');

  return (
    <>
      <JsonLdScript data={blogPostingSchema} id="blog-posting-schema" />
      <JsonLdScript data={breadcrumbSchema} id="breadcrumb-schema" />
      <div className="min-h-screen bg-gradient-to-br from-blue-100 via-yellow-50 to-orange-100 relative pt-16 pb-16">
        {/* Subtle background decorations */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute left-10 top-20 h-12 w-12 rounded-full border-2 border-blue-200 opacity-30 hidden sm:block"
            style={{ transform: 'rotate(0.1deg)' }}
          />
          <div className="absolute right-16 bottom-32 h-8 w-8 rounded border border-green-200 opacity-40 hidden sm:block" />
          <div className="absolute left-1/4 bottom-20 h-2 w-2 rounded-full bg-orange-200 opacity-50" />
        </div>

        {/* Main content */}
        <div className="relative z-10">
          {/* Header with breadcrumb */}

          {/* Hero section with article info */}
          <section className="pb-12">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6">
              <div className="mx-auto max-w-4xl">
                {/* Main content card */}
                <div
                  className="relative rounded-3xl border-2 border-blue-200 bg-white p-12 shadow-xl"
                  style={{
                    borderRadius: '25px 30px 20px 35px',
                  }}
                >
                  {/* Thumb tack */}
                  <div className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 transform">
                    <div className="h-full w-full rounded-full bg-blue-400 shadow-sm" />
                    <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
                  </div>

                  <div className="pt-2">
                    {/* Title */}
                    <h1
                      className="text-4xl md:text-5xl font-bold tracking-tight mb-6 font-quicksand text-gray-900 text-center"
                      style={{
                        textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
                      }}
                    >
                      {resource.title}
                    </h1>

                    {/* Meta info */}
                    <div className="flex flex-wrap flex-col items-center gap-6 text-gray-600 w-full justify-center">
                      {resource.author && (
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                            <User className="w-5 h-5 text-blue-600" />
                          </div>
                          <div>
                            <div className="font-medium font-quicksand text-gray-900">
                              {resource.author.name}
                            </div>
                          </div>
                        </div>
                      )}

                      <div className="flex items-center gap-4">
                        {resource.readingTime && (
                          <div className="flex items-center text-sm font-nunito">
                            <Clock className="w-4 h-4 mr-2 text-green-500" />
                            {resource.readingTime}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Image section */}
          {resource.featuredImage && (
            <section className="pb-12">
              <div className="container mx-auto max-w-7xl px-4 sm:px-6">
                <div className="mx-auto max-w-4xl">
                  <div
                    className="relative rounded-3xl overflow-hidden aspect-square md:aspect-[4/3] lg:aspect-[3/2] shadow-xl border-2 border-green-200 transition-all duration-300 hover:shadow-2xl hover:scale-[1.01]"
                    style={{
                      borderRadius: '22px 28px 18px 32px',
                    }}
                  >
                    {/* Small decorative thumb tack */}
                    <div className="absolute -top-1.5 right-8 h-3 w-3 rotate-45 transform bg-green-400 shadow-sm z-10" />

                    <Image
                      src={resource.featuredImage.url}
                      alt={resource.featuredImage.alt}
                      title={resource.featuredImage.title || undefined}
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                      className="object-cover object-center"
                      blurDataURL={
                        resource.featuredImage.blurDataUrl || undefined
                      }
                      placeholder={
                        resource.featuredImage.blurDataUrl ? 'blur' : 'empty'
                      }
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-50" />
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Content section */}
          <section className="py-12">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6">
              <div className="mx-auto max-w-4xl">
                <div
                  className="relative rounded-3xl border-2 border-orange-200 bg-white p-8 md:p-12 shadow-lg"
                  style={{
                    borderRadius: '28px 35px 22px 38px',
                  }}
                >
                  {/* Triangle thumb tack */}
                  <div className="absolute -top-2 left-8">
                    <div className="h-0 w-0 border-l-2 border-r-2 border-b-4 border-l-transparent border-r-transparent border-b-orange-400" />
                  </div>

                  <div className="pt-2">
                    <div className="prose prose-lg max-w-none">
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {resource.content}
                      </ReactMarkdown>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA section */}
          {true && (
            <section className="py-12">
              <div className="container mx-auto max-w-7xl px-4 sm:px-6">
                <div className="mx-auto max-w-4xl">
                  <div
                    className="relative rounded-3xl border-2 border-yellow-200 bg-gradient-to-br from-yellow-50 to-orange-50 p-8 shadow-lg"
                    style={{
                      borderRadius: '25px 20px 28px 22px',
                    }}
                  >
                    {/* Round thumb tack */}
                    <div className="absolute -top-2 right-12 h-4 w-4 -translate-x-1/2 transform">
                      <div className="h-full w-full rounded-full bg-yellow-400 shadow-sm" />
                      <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
                    </div>

                    <div className="pt-2">
                      <h3
                        className="text-2xl md:text-3xl font-bold mb-4 text-orange-700 font-quicksand"
                        style={{
                          textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
                        }}
                      >
                        Ready to streamline your ABA practice?
                      </h3>
                      <p className="text-lg mb-6 text-gray-700 font-nunito">
                        Start creating professional session notes with our
                        easy-to-use platform.
                      </p>
                      <Link
                        href={`https://app.praxisnotes.com?utm_source=website&utm_medium=resources&utm_campaign=resource-cta&utm_content=${slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          size="lg"
                          className="bg-orange-400 hover:bg-orange-500 text-gray-900 font-quicksand font-semibold transition-all hover:shadow-md hover:-translate-y-0.5 flex items-center"
                          style={{
                            borderRadius: '15px 18px 12px 20px',
                          }}
                        >
                          Get Started Free
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Related Resources */}
          <RelatedResources currentResource={resource} />

          {/* Bottom navigation */}
          <section className="py-16 pb-24">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6">
              <div className="mx-auto max-w-4xl">
                <div
                  className="relative rounded-3xl border-2 border-blue-200 bg-white p-6 shadow-lg"
                  style={{
                    borderRadius: '20px 25px 18px 30px',
                  }}
                >
                  {/* Square thumb tack */}
                  <div className="absolute -top-1.5 left-8 h-3 w-3 rotate-45 transform bg-blue-400 shadow-sm" />

                  <div className="pt-2 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <Link href="/resources">
                      <Button
                        variant="outline"
                        className="group border-blue-200 hover:bg-blue-50 font-quicksand font-medium"
                        style={{
                          borderRadius: '12px 16px 14px 18px',
                        }}
                      >
                        <ChevronLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Resources
                      </Button>
                    </Link>

                    <Button
                      variant="ghost"
                      size="sm"
                      className="gap-2 text-gray-600 hover:text-gray-800 font-quicksand"
                      style={{
                        borderRadius: '10px 14px 12px 16px',
                      }}
                    >
                      <Share className="h-4 w-4" />
                      Share Article
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
