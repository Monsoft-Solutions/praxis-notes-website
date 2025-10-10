'use client';

import { Search, Filter, BookOpen, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface EmptyStateProps {
  hasActiveFilters?: boolean;
  hasSearchQuery?: boolean;
  searchQuery?: string;
  onClearFilters?: () => void;
  onClearSearch?: () => void;
}

export default function EmptyState({
  hasActiveFilters = false,
  hasSearchQuery = false,
  searchQuery = '',
  onClearFilters,
  onClearSearch,
}: EmptyStateProps) {
  return (
    <div className="py-16 px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Icon */}
        <div className="mb-6 flex justify-center">
          <div
            className="w-24 h-24 bg-gradient-to-br from-blue-100 to-orange-100 flex items-center justify-center"
            style={{ borderRadius: '20px 24px 18px 26px' }}
          >
            {hasSearchQuery ? (
              <Search className="h-12 w-12 text-blue-400" />
            ) : hasActiveFilters ? (
              <Filter className="h-12 w-12 text-orange-400" />
            ) : (
              <BookOpen className="h-12 w-12 text-blue-400" />
            )}
          </div>
        </div>

        {/* Message */}
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 font-quicksand mb-4">
          {hasSearchQuery
            ? 'No resources found'
            : hasActiveFilters
              ? 'No matching resources'
              : 'No resources available'}
        </h3>

        <p className="text-gray-600 font-nunito text-lg mb-8">
          {hasSearchQuery ? (
            <>
              We couldn&apos;t find any resources matching{' '}
              <span className="font-semibold text-gray-900">
                &quot;{searchQuery}&quot;
              </span>
              . Try adjusting your search terms or browse our categories.
            </>
          ) : hasActiveFilters ? (
            <>
              No resources match your current filters. Try removing some filters
              or browse all resources.
            </>
          ) : (
            <>
              There are no resources available at the moment. Please check back
              later.
            </>
          )}
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Clear search/filters */}
          {(hasSearchQuery || hasActiveFilters) && (
            <>
              {hasSearchQuery && onClearSearch && (
                <button
                  onClick={onClearSearch}
                  className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-quicksand font-semibold transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
                  style={{ borderRadius: '12px 14px 12px 16px' }}
                >
                  Clear Search
                </button>
              )}
              {hasActiveFilters && onClearFilters && (
                <button
                  onClick={onClearFilters}
                  className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-quicksand font-semibold transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
                  style={{ borderRadius: '12px 14px 12px 16px' }}
                >
                  Clear Filters
                </button>
              )}
            </>
          )}

          {/* Browse categories */}
          <Link
            href="/resources/categories"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-blue-300 text-blue-600 hover:bg-blue-50 font-quicksand font-semibold transition-all duration-200 hover:shadow-md"
            style={{ borderRadius: '12px 14px 12px 16px' }}
          >
            Browse Categories
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Suggestions */}
        {(hasSearchQuery || hasActiveFilters) && (
          <div className="mt-10 pt-8 border-t border-gray-200">
            <h4 className="text-sm font-quicksand font-bold text-gray-700 mb-3">
              Suggestions:
            </h4>
            <ul className="text-sm text-gray-600 font-nunito space-y-2">
              {hasSearchQuery && (
                <>
                  <li>• Check your spelling or try different keywords</li>
                  <li>• Use more general search terms</li>
                  <li>• Try searching for related topics or concepts</li>
                </>
              )}
              {hasActiveFilters && (
                <>
                  <li>• Try removing one or more filters</li>
                  <li>• Browse resources in related categories</li>
                  <li>• View all resources without filters</li>
                </>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
