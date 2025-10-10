'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useMemo, useState } from 'react';
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
}

export default function ResourcesContainer({
  initialResources,
  categories,
  initialPage = 1,
  pageSize = 6,
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
  const [currentPage, setCurrentPage] = useState(initialPage);

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

  // Handle page change
  const handlePageChange = useCallback(
    (page: number) => {
      setCurrentPage(page);
      const newParams = new URLSearchParams(searchParams.toString());
      newParams.set('page', page.toString());
      router.replace(`/resources?${newParams.toString()}`, { scroll: false });
    },
    [router, searchParams]
  );

  // Handle search
  const handleSearchChange = useCallback(
    (query: string) => {
      setSearchQuery(query);
      updateURL({ search: query, sort: sortOption });
    },
    [sortOption, updateURL]
  );

  // Handle sort
  const handleSortChange = useCallback(
    (sort: SortOption) => {
      setSortOption(sort);
      updateURL({ search: searchQuery, sort });
    },
    [searchQuery, updateURL]
  );

  // Handle clear search
  const handleClearSearch = useCallback(() => {
    setSearchQuery('');
    updateURL({ search: '', sort: sortOption });
  }, [sortOption, updateURL]);

  // Handle clear filters
  const handleClearFilters = useCallback(() => {
    setSearchQuery('');
    setSortOption('newest');
    router.replace('/resources', { scroll: false });
  }, [router]);

  // Filter and sort resources
  const filteredAndSortedResources = useMemo(() => {
    let filtered = [...initialResources];

    // Apply search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.filter(resource => {
        const titleMatch = resource.title.toLowerCase().includes(query);
        const descriptionMatch = resource.excerpt
          ?.toLowerCase()
          .includes(query);
        const tagMatch = resource.tags.some(tag =>
          tag.name.toLowerCase().includes(query)
        );
        const categoryMatch = resource.categories.some(cat =>
          cat.name.toLowerCase().includes(query)
        );

        return titleMatch || descriptionMatch || tagMatch || categoryMatch;
      });
    }

    // Apply sorting
    switch (sortOption) {
      case 'popular':
        filtered.sort((a, b) => (b.views || 0) - (a.views || 0));
        break;
      case 'alphabetical':
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'newest':
      default:
        filtered.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        break;
    }

    return filtered;
  }, [initialResources, searchQuery, sortOption]);

  // Paginate resources
  const paginatedResources = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    const end = start + pageSize;
    return filteredAndSortedResources.slice(start, end);
  }, [filteredAndSortedResources, currentPage, pageSize]);

  const totalPages = Math.ceil(filteredAndSortedResources.length / pageSize);

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
              <span className="font-semibold text-gray-900">
                {filteredAndSortedResources.length}
              </span>{' '}
              {filteredAndSortedResources.length === 1
                ? 'resource'
                : 'resources'}{' '}
              found
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
      {paginatedResources.length > 0 ? (
        <ResourcesGrid
          resources={paginatedResources}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
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
