import Link from 'next/link';
import Image from 'next/image';
import { Clock, User, ArrowRight } from 'lucide-react';
import { getRelatedResources } from 'website/lib/resources';
import type { ResourceWithRelations } from 'website/lib/types';

type RelatedResourcesProps = {
  currentResource: ResourceWithRelations;
};

export default async function RelatedResources({
  currentResource,
}: RelatedResourcesProps) {
  const categoryIds = currentResource.categories.map(cat => cat.id);
  const tagIds = currentResource.tags.map(tag => tag.id);

  const relatedResources = await getRelatedResources(
    currentResource.id,
    categoryIds,
    tagIds,
    3
  );

  // Don't render anything if no related resources found
  if (relatedResources.length === 0) {
    return null;
  }

  return (
    <section className="py-12">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-4xl">
          {/* Section header */}
          <div
            className="relative rounded-3xl border-2 border-green-200 bg-white p-6 shadow-lg mb-8"
            style={{
              borderRadius: '28px 22px 30px 25px',
            }}
          >
            {/* Thumb tack */}
            <div className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 transform">
              <div className="h-full w-full rounded-full bg-green-400 shadow-sm" />
              <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
            </div>

            <div className="pt-2">
              <h2
                className="text-2xl md:text-3xl font-bold text-gray-900 font-quicksand text-center"
                style={{
                  textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
                }}
              >
                Related Resources
              </h2>
              <p className="text-gray-600 font-nunito text-center mt-2">
                Explore more helpful content on similar topics
              </p>
            </div>
          </div>

          {/* Related resources grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {relatedResources.map((resource, index) => (
              <Link
                key={resource.id}
                href={`/resources/${resource.slug}`}
                className="group block"
              >
                <div
                  className="relative rounded-3xl border-2 border-blue-200 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                  style={{
                    borderRadius:
                      index === 0
                        ? '25px 30px 20px 35px'
                        : index === 1
                          ? '30px 22px 28px 25px'
                          : '22px 28px 25px 30px',
                  }}
                >
                  {/* Different thumb tack styles for visual variety */}
                  {index === 0 && (
                    <div className="absolute -top-2 right-8 h-4 w-4 -translate-x-1/2 transform">
                      <div className="h-full w-full rounded-full bg-blue-400 shadow-sm" />
                      <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
                    </div>
                  )}
                  {index === 1 && (
                    <div className="absolute -top-1.5 left-8 h-3 w-3 rotate-45 transform bg-orange-400 shadow-sm" />
                  )}
                  {index === 2 && (
                    <div className="absolute -top-2 right-12">
                      <div className="h-0 w-0 border-l-2 border-r-2 border-b-4 border-l-transparent border-r-transparent border-b-green-400" />
                    </div>
                  )}

                  <div className="pt-2">
                    {/* Featured image */}
                    {resource.featuredImage && (
                      <div
                        className="relative mb-4 h-40 overflow-hidden rounded-2xl"
                        style={{
                          borderRadius: '18px 22px 16px 25px',
                        }}
                      >
                        <Image
                          src={resource.featuredImage}
                          alt={resource.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    )}

                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900 font-quicksand mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {resource.title}
                    </h3>

                    {/* Excerpt */}
                    {resource.excerpt && (
                      <p className="text-gray-600 text-sm font-nunito mb-4 line-clamp-3">
                        {resource.excerpt}
                      </p>
                    )}

                    {/* Meta info */}
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center gap-3">
                        {resource.author && (
                          <div className="flex items-center gap-1">
                            <User className="h-3 w-3" />
                            <span className="font-medium">
                              {resource.author.name}
                            </span>
                          </div>
                        )}
                        {resource.readingTime && (
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            <span>{resource.readingTime}</span>
                          </div>
                        )}
                      </div>

                      <ArrowRight className="h-4 w-4 text-blue-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </div>

                    {/* Categories/Tags indicators */}
                    {(resource.categories.length > 0 ||
                      resource.tags.length > 0) && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {resource.categories.slice(0, 2).map(category => (
                          <span
                            key={category.id}
                            className="px-2 py-1 text-xs rounded-lg bg-blue-100 text-blue-700 font-quicksand font-medium"
                            style={{
                              borderRadius: '8px 10px 6px 12px',
                            }}
                          >
                            {category.name}
                          </span>
                        ))}
                        {resource.tags.slice(0, 1).map(tag => (
                          <span
                            key={tag.id}
                            className="px-2 py-1 text-xs rounded-lg bg-green-100 text-green-700 font-quicksand font-medium"
                            style={{
                              borderRadius: '6px 12px 8px 10px',
                            }}
                          >
                            {tag.name}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* View all resources link */}
          <div className="text-center mt-8">
            <Link href="/resources">
              <div
                className="inline-block rounded-2xl border-2 border-yellow-200 bg-gradient-to-br from-yellow-50 to-orange-50 px-6 py-3 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
                style={{
                  borderRadius: '20px 25px 18px 28px',
                }}
              >
                <span className="text-orange-700 font-quicksand font-semibold flex items-center gap-2">
                  View All Resources
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
