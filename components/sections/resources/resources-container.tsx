'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useMemo, useState, useRef, useEffect } from 'react';
import ResourcesSearch from './resources-search';
import ResourcesSort, { type SortOption } from './resources-sort';
import ActiveFilters from './active-filters';
import EmptyState from './empty-state';
import ResourcesGrid from './resources-grid';
import type { ResourceWithRelations } from 'website/lib/types';
import type { Category } from 'website/db/schema';

interface ResourcesContainerProps {
  initialResources: ResourceWithRelations[];
  categories: (Category & { resourceCount: number })[];
  initialPage?: number;
  pageSize?: number;
  totalCount: number;
  totalPages: number;
}

export default function ResourcesContainer({
  initialResources,
  categories,
  initialPage = 1,
  pageSize = 12,
  totalCount: initialTotalCount,
  totalPages: initialTotalPages,
}: ResourcesContainerProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Get initial values from URL
  const initialSearch = searchParams.get('search') || '';
  const initialSort = (searchParams.get('sort') as SortOption) || 'newest';
  const initialCategory = searchParams.get('category') || '';
  const initialTag = searchParams.get('tag') || '';

  // State
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [sortOption, setSortOption] = useState<SortOption>(initialSort);
  const [resources, setResources] =
    useState<ResourceWithRelations[]>(initialResources);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [displayedPages, setDisplayedPages] = useState(1); // Track how many pages to display for infinite scroll
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [totalCount, setTotalCount] = useState(initialTotalCount);
  const [totalPages, setTotalPages] = useState(initialTotalPages);
  const [hasMore, setHasMore] = useState(displayedPages < initialTotalPages);

  // Refs for scroll position preservation
  const scrollPositionRef = useRef<number>(0);
  const shouldRestoreScrollRef = useRef(false);

  // Update URL when filters change
  const updateURL = useCallback(
    (params: Record<string, string>) => {
      const newParams = new URLSearchParams(searchParams.toString());

      Object.entries(params).forEach(([key, value]) => {
        if (value) {
          newParams.set(key, value);
        } else {
          newParams.delete(key);
        }
      });

      // Always reset to page 1 when filters change (unless page is explicitly set)
      if (
        params.page === undefined &&
        (params.search !== undefined || params.sort !== undefined)
      ) {
        newParams.set('page', '1');
        setCurrentPage(1);
      }

      router.replace(`/resources?${newParams.toString()}`, { scroll: false });
    },
    [router, searchParams]
  );

  // Fetch resources from API
  const fetchResources = useCallback(
    async (page: number, search: string, sort: SortOption) => {
      try {
        const params = new URLSearchParams({
          page: page.toString(),
          pageSize: pageSize.toString(),
          ...(search && { search }),
          sort,
        });

        const response = await fetch(`/api/resources?${params.toString()}`);
        if (!response.ok) {
          throw new Error('Failed to fetch resources');
        }

        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching resources:', error);
        return null;
      }
    },
    [pageSize]
  );

  // Handle page change
  const handlePageChange = useCallback(
    (page: number, preserveScroll = false) => {
      if (!preserveScroll) {
        // Smooth scroll to top of resources section
        const resourcesSection = document.getElementById('resources');
        if (resourcesSection) {
          resourcesSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      } else {
        // Save current scroll position for restoration
        scrollPositionRef.current = window.scrollY;
        shouldRestoreScrollRef.current = true;
      }

      setCurrentPage(page);
      const newParams = new URLSearchParams(searchParams.toString());
      newParams.set('page', page.toString());
      router.replace(`/resources?${newParams.toString()}`, { scroll: false });
    },
    [router, searchParams]
  );

  // Intersection Observer ref for infinite scroll
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  // Handle load more (triggered by Intersection Observer)
  const handleLoadMore = useCallback(async () => {
    if (isLoadingMore || !hasMore) return;

    setIsLoadingMore(true);

    try {
      const nextPage = displayedPages + 1;
      const data = await fetchResources(nextPage, searchQuery, sortOption);

      if (data && data.resources.length > 0) {
        setResources(prev => [...prev, ...data.resources]);
        setDisplayedPages(nextPage);
        setHasMore(data.pagination.hasMore);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error('Error loading more resources:', error);
      setHasMore(false);
    } finally {
      setIsLoadingMore(false);
    }
  }, [
    isLoadingMore,
    hasMore,
    displayedPages,
    searchQuery,
    sortOption,
    fetchResources,
  ]);

  // Handle search
  const handleSearchChange = useCallback(
    async (query: string) => {
      // Reset to first page when search changes
      setDisplayedPages(1);
      setIsLoadingMore(true);

      // Save scroll position for filter changes
      scrollPositionRef.current = window.scrollY;
      shouldRestoreScrollRef.current = true;

      setSearchQuery(query);
      updateURL({ search: query, sort: sortOption });

      // Fetch new results
      const data = await fetchResources(1, query, sortOption);
      if (data) {
        setResources(data.resources);
        setTotalCount(data.pagination.totalCount);
        setTotalPages(data.pagination.totalPages);
        setHasMore(data.pagination.hasMore);
      }

      setIsLoadingMore(false);
    },
    [sortOption, updateURL, fetchResources]
  );

  // Handle sort
  const handleSortChange = useCallback(
    async (sort: SortOption) => {
      // Reset to first page when sort changes
      setDisplayedPages(1);
      setIsLoadingMore(true);

      // Save scroll position for filter changes
      scrollPositionRef.current = window.scrollY;
      shouldRestoreScrollRef.current = true;

      setSortOption(sort);
      updateURL({ search: searchQuery, sort });

      // Fetch new results
      const data = await fetchResources(1, searchQuery, sort);
      if (data) {
        setResources(data.resources);
        setTotalCount(data.pagination.totalCount);
        setTotalPages(data.pagination.totalPages);
        setHasMore(data.pagination.hasMore);
      }

      setIsLoadingMore(false);
    },
    [searchQuery, updateURL, fetchResources]
  );

  // Handle clear search
  const handleClearSearch = useCallback(async () => {
    setDisplayedPages(1);
    setSearchQuery('');
    updateURL({ search: '', sort: sortOption });

    // Fetch new results
    setIsLoadingMore(true);
    const data = await fetchResources(1, '', sortOption);
    if (data) {
      setResources(data.resources);
      setTotalCount(data.pagination.totalCount);
      setTotalPages(data.pagination.totalPages);
      setHasMore(data.pagination.hasMore);
    }
    setIsLoadingMore(false);
  }, [sortOption, updateURL, fetchResources]);

  // Handle clear filters
  const handleClearFilters = useCallback(async () => {
    setDisplayedPages(1);
    setSearchQuery('');
    setSortOption('newest');
    router.replace('/resources', { scroll: false });

    // Fetch new results
    setIsLoadingMore(true);
    const data = await fetchResources(1, '', 'newest');
    if (data) {
      setResources(data.resources);
      setTotalCount(data.pagination.totalCount);
      setTotalPages(data.pagination.totalPages);
      setHasMore(data.pagination.hasMore);
    }
    setIsLoadingMore(false);
  }, [router, fetchResources]);

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

  // Effect to restore scroll position after filter changes
  useEffect(() => {
    if (shouldRestoreScrollRef.current && scrollPositionRef.current > 0) {
      // Use requestAnimationFrame to ensure DOM has updated
      requestAnimationFrame(() => {
        window.scrollTo({
          top: scrollPositionRef.current,
          behavior: 'instant' as ScrollBehavior,
        });
        shouldRestoreScrollRef.current = false;
        scrollPositionRef.current = 0;
      });
    }
  }, [searchQuery, sortOption]);

  // Build active filters
  const activeFilters = useMemo(() => {
    const filters: Array<{
      type: 'category' | 'tag' | 'search';
      label: string;
      value: string;
    }> = [];

    if (searchQuery.trim()) {
      filters.push({
        type: 'search',
        label: searchQuery,
        value: searchQuery,
      });
    }

    if (initialCategory) {
      const category = categories.find(c => c.slug === initialCategory);
      if (category) {
        filters.push({
          type: 'category',
          label: category.name,
          value: category.slug,
        });
      }
    }

    if (initialTag) {
      filters.push({
        type: 'tag',
        label: initialTag,
        value: initialTag,
      });
    }

    return filters;
  }, [searchQuery, initialCategory, initialTag, categories]);

  const hasActiveFilters = activeFilters.length > 0 || sortOption !== 'newest';

  return (
    <>
      {/* Search and Sort Section */}
      <section className="py-8 md:py-10 bg-white border-b-2 border-blue-100">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 space-y-6">
          {/* Search bar */}
          <ResourcesSearch
            onSearchChange={handleSearchChange}
            initialValue={initialSearch}
          />

          {/* Sort options */}
          <div className="flex items-center justify-between flex-wrap gap-4">
            <ResourcesSort
              currentSort={sortOption}
              onSortChange={handleSortChange}
            />

            {/* Results count */}
            <div className="text-sm text-gray-600 font-nunito">
              <span className="font-semibold text-gray-900">{totalCount}</span>{' '}
              {totalCount === 1 ? 'resource' : 'resources'} found
            </div>
          </div>

          {/* Active filters */}
          {activeFilters.length > 0 && (
            <ActiveFilters
              filters={activeFilters}
              onClearAll={handleClearFilters}
              onClearFilter={type => {
                if (type === 'search') {
                  handleClearSearch();
                }
              }}
            />
          )}
        </div>
      </section>

      {/* Resources grid or empty state */}
      {resources.length > 0 ? (
        <ResourcesGrid
          resources={resources}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          hasMore={hasMore}
          isLoadingMore={isLoadingMore}
          loadMoreRef={loadMoreRef}
        />
      ) : (
        <section className="py-16 md:py-24 min-h-screen bg-gradient-to-br from-blue-100 via-yellow-50 to-orange-100">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6">
            <EmptyState
              hasActiveFilters={hasActiveFilters}
              hasSearchQuery={searchQuery.trim().length > 0}
              searchQuery={searchQuery}
              onClearFilters={handleClearFilters}
              onClearSearch={handleClearSearch}
            />
          </div>
        </section>
      )}
    </>
  );
}
