'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  FileText,
  Clock,
  BookOpen,
  Target,
} from 'lucide-react';
import { formatDateToStandard } from 'website/lib/utils/date-formatter';
import { Button } from 'website/components/ui/button';
import ResourceCard from 'website/components/ui/resource-card';
import type { ResourceWithRelations } from '../../../lib/types';

interface ResourcesGridProps {
  resources: ResourceWithRelations[];
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
        className="w-10 h-10 p-0 pointer-events-none bg-blue-400 hover:bg-blue-400 text-white font-quicksand font-semibold shadow-md"
        style={{ borderRadius: '10px 12px 8px 14px' }}
      >
        {page}
      </Button>
    );
  }

  return (
    <Button
      onClick={() => onPageChange(page)}
      className="w-10 h-10 p-0 bg-white border-2 border-gray-200 text-gray-600 hover:border-blue-300 hover:text-blue-500 hover:shadow-md font-quicksand font-semibold transition-all duration-200"
      style={{ borderRadius: '10px 12px 8px 14px' }}
    >
      {page}
    </Button>
  );
}

export default function ResourcesGrid({
  resources,
  currentPage,
  totalPages,
}: ResourcesGridProps) {
  const router = useRouter();

  const handlePageChange = (page: number) => {
    router.replace(`/resources?page=${page}`, { scroll: false });
  };
  return (
    <>
      {/* Resources grid section */}
      <section
        id="resources"
        className="py-16 md:py-24 relative min-h-screen bg-gradient-to-br from-blue-100 via-yellow-50 to-orange-100"
      >
        {/* Subtle background decorations */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute left-10 top-20 h-12 w-12 rounded-full border-2 border-blue-200 opacity-30"
            style={{ transform: 'rotate(0.1deg)' }}
          ></div>
          <div className="absolute right-16 top-1/4 h-8 w-8 rounded border border-green-200 opacity-40"></div>
          <div className="absolute left-1/4 bottom-20 h-2 w-2 rounded-full bg-orange-200 opacity-50"></div>
          <div className="absolute right-1/3 bottom-32 h-6 w-6 rounded border-2 border-yellow-200 opacity-35"></div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource, index) => (
              <ResourceCard
                key={resource.slug}
                resource={resource}
                index={index}
              />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-20 flex justify-center items-center gap-4">
              {/* Previous Page Button */}
              {currentPage > 1 ? (
                <Button
                  onClick={() => handlePageChange(currentPage - 1)}
                  aria-label="Previous page"
                  className="h-12 px-8 bg-blue-400 hover:bg-blue-500 text-white font-quicksand font-semibold transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
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
                  className="h-12 px-8 bg-blue-400 hover:bg-blue-500 text-white font-quicksand font-semibold transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
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
        </div>
      </section>

      {/* Featured resources section */}
      <section className="py-20 md:py-28 relative">
        {/* Subtle background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-blue-50 to-yellow-50 opacity-60"></div>

        {/* Additional background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute right-20 top-16 h-10 w-10 rounded border-2 border-green-200 opacity-25"></div>
          <div className="absolute left-16 bottom-24 h-3 w-3 rounded-full bg-blue-200 opacity-40"></div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <div className="inline-flex items-center gap-3 mb-6">
              <Target className="w-8 h-8 text-green-500" />
              <h2
                className="text-4xl md:text-5xl font-quicksand font-bold text-gray-800"
                style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}
              >
                Featured <span className="text-green-500">Resources</span>
              </h2>
            </div>
            <p className="text-xl font-nunito text-gray-600 leading-relaxed">
              Explore our most popular guides and articles for ABA professionals
            </p>
          </div>

          <div
            className="max-w-5xl mx-auto bg-white p-10 shadow-2xl border-2 border-green-200 relative transition-all duration-300 hover:shadow-3xl hover:-translate-y-1"
            style={{
              borderRadius: '28px 35px 22px 38px',
              borderStyle: 'solid',
            }}
          >
            {/* Thumb tack for featured section */}
            <div className="absolute -top-2 left-1/2 h-5 w-5 -translate-x-1/2 transform">
              <div className="h-full w-full rounded-full bg-green-400 shadow-lg"></div>
              <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
            </div>

            <div className="pt-6 space-y-6">
              {resources.slice(0, 3).map(resource => (
                <Link
                  key={`featured-${resource.slug}`}
                  href={`/resources/${resource.slug}`}
                  className="block p-6 rounded-2xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-green-50 transition-all duration-300 group border border-transparent hover:border-green-200"
                  style={{ borderRadius: '16px 20px 14px 18px' }}
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-blue-100 rounded-full flex items-center justify-center border-2 border-green-200 group-hover:border-green-300 transition-colors">
                        <FileText className="w-6 h-6 text-green-500" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3
                        className="text-xl font-quicksand font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors leading-tight"
                        style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.05)' }}
                      >
                        {resource.title}
                      </h3>
                      <p className="font-nunito text-gray-600 leading-relaxed">
                        {resource.metaDescription}
                      </p>
                      <div className="flex items-center mt-3 text-sm text-gray-500 font-nunito">
                        <Clock className="w-4 h-4 mr-2 text-gray-400" />
                        <span>
                          {formatDateToStandard(resource.date)}{' '}
                          {resource.readingTime && `• ${resource.readingTime}`}
                        </span>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                        <ArrowRight className="w-5 h-5 text-green-500 group-hover:text-green-600 group-hover:translate-x-1 transition-all duration-200" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* View all resources button */}
            <div className="mt-10 pt-8 border-t border-gray-100 text-center">
              <Button
                asChild
                className="h-12 px-8 bg-green-400 hover:bg-green-500 text-white font-quicksand font-semibold transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
                style={{ borderRadius: '14px 18px 12px 16px' }}
              >
                <Link href="/resources">
                  <BookOpen className="w-5 h-5 mr-2" />
                  View All Resources
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
