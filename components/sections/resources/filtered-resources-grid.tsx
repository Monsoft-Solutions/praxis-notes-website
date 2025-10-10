'use client';

import { useCallback, useMemo, useState, useRef, useEffect } from 'react';
import ResourceCard from 'website/components/ui/resource-card';
import type { ResourceWithRelations } from 'website/lib/types';

interface FilteredResourcesGridProps {
  resources: ResourceWithRelations[];
  pageSize?: number;
  emptyState?: React.ReactNode;
  relatedActions?: React.ReactNode;
  backgroundGradient?: string;
  backgroundDecorations?: React.ReactNode;
}

export default function FilteredResourcesGrid({
  resources,
  pageSize = 12,
  emptyState,
  relatedActions,
  backgroundGradient = 'from-blue-50 via-yellow-50/50 to-orange-50',
  backgroundDecorations,
}: FilteredResourcesGridProps) {
  // State for infinite scroll
  const [displayedPages, setDisplayedPages] = useState(1);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  // Intersection Observer ref for infinite scroll
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  // Handle load more (triggered by Intersection Observer)
  const handleLoadMore = useCallback(() => {
    if (isLoadingMore) return;

    setIsLoadingMore(true);

    // Simulate async loading with a small delay for smooth UX
    setTimeout(() => {
      setDisplayedPages(prev => prev + 1);
      setIsLoadingMore(false);
    }, 300);
  }, [isLoadingMore]);

  // Paginate resources for infinite scroll
  const paginatedResources = useMemo(() => {
    const end = displayedPages * pageSize;
    return resources.slice(0, end);
  }, [resources, displayedPages, pageSize]);

  const totalPages = Math.ceil(resources.length / pageSize);
  const hasMore = displayedPages < totalPages;

  // Set up Intersection Observer for infinite scroll
  useEffect(() => {
    if (!loadMoreRef.current) return;

    const observer = new IntersectionObserver(
      entries => {
        const target = entries[0];
        if (target.isIntersecting && hasMore && !isLoadingMore) {
          handleLoadMore();
        }
      },
      {
        // Trigger when the sentinel is 200px away from the viewport
        rootMargin: '200px',
        threshold: 0.1,
      }
    );

    observer.observe(loadMoreRef.current);

    return () => {
      observer.disconnect();
    };
  }, [hasMore, isLoadingMore, handleLoadMore]);

  return (
    <section
      className={`py-16 md:py-24 relative min-h-screen bg-gradient-to-br ${backgroundGradient}`}
    >
      {/* Background decorations */}
      {backgroundDecorations || (
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute left-10 top-20 h-12 w-12 rounded-full border-2 border-blue-200 opacity-30"
            style={{ transform: 'rotate(0.1deg)' }}
          ></div>
          <div className="absolute right-16 top-1/4 h-8 w-8 rounded border border-yellow-200 opacity-40"></div>
          <div className="absolute left-1/4 bottom-20 h-2 w-2 rounded-full bg-orange-200 opacity-50"></div>
          <div className="absolute right-1/3 bottom-32 h-6 w-6 rounded border-2 border-pink-200 opacity-35"></div>
        </div>
      )}

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative">
        {resources.length === 0 ? (
          // Empty state
          emptyState || (
            <div className="text-center py-20">
              <div
                className="max-w-md mx-auto bg-white p-12 shadow-xl border-2 border-gray-200"
                style={{
                  borderRadius: '25px 30px 20px 35px',
                  borderStyle: 'solid',
                }}
              >
                <p className="text-gray-500 font-nunito">No resources found.</p>
              </div>
            </div>
          )
        ) : (
          <>
            {/* Resources grid */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {paginatedResources.map((resource, index) => (
                <ResourceCard
                  key={resource.slug}
                  resource={resource}
                  index={index}
                />
              ))}
            </div>

            {/* Infinite scroll sentinel and loading indicator */}
            {hasMore && (
              <div className="mt-12 flex justify-center">
                <div ref={loadMoreRef} className="h-20 flex items-center">
                  {isLoadingMore && (
                    <div className="flex items-center gap-3">
                      <div
                        className="h-8 w-8 animate-spin rounded-full border-4 border-blue-200 border-t-blue-500"
                        aria-label="Loading more resources"
                      ></div>
                      <span className="text-gray-600 font-nunito">
                        Loading more resources...
                      </span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Show total loaded count */}
            {!hasMore && resources.length > pageSize && (
              <div className="mt-12 text-center">
                <p className="text-gray-600 font-nunito">
                  Showing all {resources.length} resources
                </p>
              </div>
            )}
          </>
        )}

        {/* Related actions section */}
        {relatedActions && (
          <div className="mt-32 text-center">{relatedActions}</div>
        )}
      </div>
    </section>
  );
}
