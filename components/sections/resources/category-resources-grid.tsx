'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Clock,
  BookOpen,
  FolderOpen,
} from 'lucide-react';
import { Button } from 'website/components/ui/button';
import { formatDateToStandard } from 'website/lib/utils/date-formatter';
import type { ResourceWithRelations, Category } from '../../../lib/types';

interface CategoryResourcesGridProps {
  resources: ResourceWithRelations[];
  category: Category;
  currentPage: number;
  totalPages: number;
}

// Helper component for pagination numbers
function PaginationNumber({
  page,
  currentPage,
  onPageChange,
}: {
  page: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}) {
  const isActive = page === currentPage;

  if (isActive) {
    return (
      <Button
        className="w-10 h-10 p-0 pointer-events-none bg-green-400 hover:bg-green-400 text-white font-quicksand font-semibold shadow-md"
        style={{ borderRadius: '10px 12px 8px 14px' }}
      >
        {page}
      </Button>
    );
  }

  return (
    <Button
      onClick={() => onPageChange(page)}
      className="w-10 h-10 p-0 bg-white border-2 border-gray-200 text-gray-600 hover:border-green-300 hover:text-green-500 hover:shadow-md font-quicksand font-semibold transition-all duration-200"
      style={{ borderRadius: '10px 12px 8px 14px' }}
    >
      {page}
    </Button>
  );
}

export default function CategoryResourcesGrid({
  resources,
  category,
  currentPage,
  totalPages,
}: CategoryResourcesGridProps) {
  const router = useRouter();

  const handlePageChange = (page: number) => {
    router.replace(`/resources/categories/${category.slug}?page=${page}`, {
      scroll: false,
    });
  };

  return (
    <section className="py-16 md:py-24 relative min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-yellow-50">
      {/* Subtle background decorations */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute left-10 top-20 h-12 w-12 rounded-full border-2 border-green-200 opacity-30"
          style={{ transform: 'rotate(0.1deg)' }}
        ></div>
        <div className="absolute right-16 top-1/4 h-8 w-8 rounded border border-blue-200 opacity-40"></div>
        <div className="absolute left-1/4 bottom-20 h-2 w-2 rounded-full bg-yellow-200 opacity-50"></div>
        <div className="absolute right-1/3 bottom-32 h-6 w-6 rounded border-2 border-orange-200 opacity-35"></div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative">
        {resources.length === 0 ? (
          // Empty state
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
                  This category is being developed. Check back soon for
                  specialized resources.
                </p>
                <Button
                  asChild
                  className="h-10 px-6 bg-blue-400 hover:bg-blue-500 text-white font-quicksand font-semibold transition-all duration-200"
                  style={{ borderRadius: '12px 14px 10px 16px' }}
                >
                  <Link href="/resources/categories">
                    Browse Other Categories
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* Section header */}
            <div className="text-center mb-16">
              <h2
                className="text-3xl md:text-4xl font-quicksand font-bold text-gray-800 mb-4"
                style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}
              >
                {category.name}{' '}
                <span className="text-green-500">Resources</span>
              </h2>
              <p className="text-lg font-nunito text-gray-600 max-w-2xl mx-auto leading-relaxed">
                {resources.length}{' '}
                {resources.length === 1 ? 'resource' : 'resources'} to help you
                excel in this area
              </p>
            </div>

            {/* Resources grid */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {resources.map((resource, index) => {
                // Cycle through ABA colors and thumb tack styles
                const colors = [
                  {
                    border: 'border-green-200',
                    tag: 'bg-green-400',
                    tack: 'bg-green-400',
                    tri: 'border-b-green-400',
                    hover: 'group-hover:border-green-300',
                  },
                  {
                    border: 'border-blue-200',
                    tag: 'bg-blue-400',
                    tack: 'bg-blue-400',
                    tri: 'border-b-blue-400',
                    hover: 'group-hover:border-blue-300',
                  },
                  {
                    border: 'border-yellow-200',
                    tag: 'bg-yellow-400',
                    tack: 'bg-yellow-400',
                    tri: 'border-b-yellow-400',
                    hover: 'group-hover:border-yellow-300',
                  },
                  {
                    border: 'border-orange-200',
                    tag: 'bg-orange-400',
                    tack: 'bg-orange-400',
                    tri: 'border-b-orange-400',
                    hover: 'group-hover:border-orange-300',
                  },
                ];
                const colorSet = colors[index % colors.length];

                // Irregular border radius variations
                const borderRadiusOptions = [
                  '25px 30px 20px 35px',
                  '28px 22px 32px 26px',
                  '22px 35px 18px 30px',
                  '30px 20px 28px 24px',
                  '26px 32px 22px 28px',
                  '20px 28px 24px 32px',
                ];
                const borderRadius =
                  borderRadiusOptions[index % borderRadiusOptions.length];

                // Thumb tack styles
                const thumbTackStyles = [
                  { type: 'round', position: 'left-1/2 -translate-x-1/2' },
                  { type: 'square', position: 'right-8' },
                  { type: 'triangle', position: 'left-8' },
                ];
                const thumbTack =
                  thumbTackStyles[index % thumbTackStyles.length];

                return (
                  <Link
                    key={resource.slug}
                    href={`/resources/${resource.slug}`}
                    className="group block"
                  >
                    <div
                      className={`relative bg-white p-8 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-2 ${colorSet.border} ${colorSet.hover} h-full flex flex-col`}
                      style={{
                        borderRadius,
                        borderStyle: 'solid',
                      }}
                    >
                      {/* Thumb tack */}
                      {thumbTack.type === 'round' && (
                        <div
                          className={`absolute -top-2 ${thumbTack.position} h-4 w-4 transform`}
                        >
                          <div
                            className={`h-full w-full rounded-full ${colorSet.tack} shadow-md`}
                          ></div>
                          <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
                        </div>
                      )}
                      {thumbTack.type === 'square' && (
                        <div
                          className={`absolute -top-1.5 ${thumbTack.position} h-3 w-3 rotate-45 transform ${colorSet.tack} shadow-md`}
                        ></div>
                      )}
                      {thumbTack.type === 'triangle' && (
                        <div
                          className={`absolute -top-2 ${thumbTack.position}`}
                        >
                          <div
                            className={`h-0 w-0 border-l-2 border-r-2 border-b-4 border-l-transparent border-r-transparent ${colorSet.tri} shadow-sm`}
                          ></div>
                        </div>
                      )}

                      {/* Content starts below thumb tack */}
                      <div className="pt-2 flex-1 flex flex-col">
                        {resource.featuredImage && (
                          <div className="relative h-48 w-full overflow-hidden mb-6 rounded-xl border border-gray-100">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
                            <Image
                              src={resource.featuredImage.url}
                              alt={resource.featuredImage.alt}
                              title={resource.featuredImage.title || undefined}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-110"
                              blurDataURL={
                                resource.featuredImage.blurDataUrl || undefined
                              }
                              placeholder={
                                resource.featuredImage.blurDataUrl
                                  ? 'blur'
                                  : 'empty'
                              }
                            />
                            {resource.tags && resource.tags.length > 0 && (
                              <div className="absolute top-3 right-3 z-20">
                                <span
                                  className={`px-3 py-1.5 ${colorSet.tag} text-white text-xs font-quicksand font-semibold shadow-md`}
                                  style={{
                                    borderRadius: '12px 16px 10px 14px',
                                    textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
                                  }}
                                >
                                  {resource.tags[0].name}
                                </span>
                              </div>
                            )}
                          </div>
                        )}

                        <h2
                          className="text-xl font-quicksand font-bold mb-4 text-gray-800 group-hover:text-green-500 transition-colors duration-200 leading-tight"
                          style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.05)' }}
                        >
                          {resource.title}
                        </h2>

                        <p className="font-nunito text-gray-600 mb-6 flex-1 leading-relaxed text-sm">
                          {resource.metaDescription}
                        </p>

                        <div className="mt-auto space-y-4">
                          <div className="flex items-center text-sm text-gray-500 font-nunito">
                            <Clock className="w-4 h-4 mr-2 text-gray-400" />
                            <span>
                              {formatDateToStandard(resource.date)}{' '}
                              {resource.readingTime &&
                                `• ${resource.readingTime}`}
                            </span>
                          </div>

                          <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                            <div className="flex items-center text-green-500 font-quicksand font-semibold text-sm group-hover:text-green-600 transition-colors">
                              <BookOpen className="w-4 h-4 mr-2" />
                              Read article
                            </div>
                            <ArrowRight className="w-5 h-5 text-green-400 group-hover:text-green-500 group-hover:translate-x-1 transition-all duration-200" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-20 flex justify-center items-center gap-4">
                {/* Previous Page Button */}
                {currentPage > 1 ? (
                  <Button
                    onClick={() => handlePageChange(currentPage - 1)}
                    aria-label="Previous page"
                    className="h-12 px-8 bg-green-400 hover:bg-green-500 text-white font-quicksand font-semibold transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
                    style={{ borderRadius: '12px 14px 12px 16px' }}
                  >
                    <ChevronLeft className="h-4 w-4 mr-2" />
                    Previous
                  </Button>
                ) : (
                  <Button
                    disabled
                    className="h-12 px-8 bg-gray-200 text-gray-400 font-quicksand font-semibold cursor-not-allowed"
                    style={{ borderRadius: '12px 14px 12px 16px' }}
                  >
                    <ChevronLeft className="h-4 w-4 mr-2" />
                    Previous
                  </Button>
                )}

                {/* Page Numbers */}
                <div className="flex items-center gap-3 mx-6">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    page => {
                      // For many pages, show a limited range
                      if (totalPages > 7) {
                        // Always show first, last, current, and pages adjacent to current
                        if (
                          page === 1 ||
                          page === totalPages ||
                          (page >= currentPage - 1 && page <= currentPage + 1)
                        ) {
                          return (
                            <PaginationNumber
                              key={page}
                              page={page}
                              currentPage={currentPage}
                              onPageChange={handlePageChange}
                            />
                          );
                        }
                        // Show ellipses for gaps
                        if (
                          (page === 2 && currentPage > 3) ||
                          (page === totalPages - 1 &&
                            currentPage < totalPages - 2)
                        ) {
                          return (
                            <span
                              key={page}
                              className="px-3 font-nunito text-gray-400 text-lg"
                            >
                              ...
                            </span>
                          );
                        }
                        return null;
                      }

                      // For fewer pages, show all page numbers
                      return (
                        <PaginationNumber
                          key={page}
                          page={page}
                          currentPage={currentPage}
                          onPageChange={handlePageChange}
                        />
                      );
                    }
                  )}
                </div>

                {/* Next Page Button */}
                {currentPage < totalPages ? (
                  <Button
                    onClick={() => handlePageChange(currentPage + 1)}
                    aria-label="Next page"
                    className="h-12 px-8 bg-green-400 hover:bg-green-500 text-white font-quicksand font-semibold transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
                    style={{ borderRadius: '12px 14px 12px 16px' }}
                  >
                    Next
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                ) : (
                  <Button
                    disabled
                    className="h-12 px-8 bg-gray-200 text-gray-400 font-quicksand font-semibold cursor-not-allowed"
                    style={{ borderRadius: '12px 14px 12px 16px' }}
                  >
                    Next
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                )}
              </div>
            )}
          </>
        )}

        {/* Related actions section */}
        <div className="mt-20 text-center">
          <div
            className="max-w-4xl mx-auto bg-white p-10 shadow-2xl border-2 border-blue-200"
            style={{
              borderRadius: '28px 35px 22px 38px',
              borderStyle: 'solid',
            }}
          >
            {/* Thumb tack for related actions */}
            <div className="absolute -top-2 left-1/2 h-5 w-5 -translate-x-1/2 transform">
              <div className="h-full w-full rounded-full bg-blue-400 shadow-lg"></div>
              <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
            </div>

            <div className="pt-6">
              <h3
                className="text-2xl font-quicksand font-bold text-gray-800 mb-6"
                style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.05)' }}
              >
                Explore More Resources
              </h3>
              <p className="text-lg font-nunito text-gray-600 mb-8 leading-relaxed">
                Discover more ABA resources across different categories or
                browse our complete collection.
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
        </div>
      </div>
    </section>
  );
}
