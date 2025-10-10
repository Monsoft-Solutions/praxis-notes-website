'use client';

import { useCallback } from 'react';
import FilteredResourcesGrid from './filtered-resources-grid';
import type { ResourceWithRelations } from 'website/lib/types';

interface CategoryResourcesContainerProps {
  slug: string;
  initialResources: ResourceWithRelations[];
  pageSize: number;
  totalCount: number;
  emptyState?: React.ReactNode;
  relatedActions?: React.ReactNode;
  backgroundGradient?: string;
  backgroundDecorations?: React.ReactNode;
}

export default function CategoryResourcesContainer({
  slug,
  initialResources,
  pageSize,
  totalCount,
  emptyState,
  relatedActions,
  backgroundGradient,
  backgroundDecorations,
}: CategoryResourcesContainerProps) {
  // Fetch more resources from API
  const handleLoadMore = useCallback(
    async (page: number): Promise<ResourceWithRelations[]> => {
      try {
        const params = new URLSearchParams({
          page: page.toString(),
          pageSize: pageSize.toString(),
        });

        const response = await fetch(
          `/api/resources/categories/${slug}?${params.toString()}`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch resources');
        }

        const data = await response.json();
        return data.resources || [];
      } catch (error) {
        console.error('Error loading more resources:', error);
        return [];
      }
    },
    [slug, pageSize]
  );

  return (
    <FilteredResourcesGrid
      resources={initialResources}
      pageSize={pageSize}
      totalCount={totalCount}
      onLoadMore={handleLoadMore}
      emptyState={emptyState}
      relatedActions={relatedActions}
      backgroundGradient={backgroundGradient}
      backgroundDecorations={backgroundDecorations}
    />
  );
}
