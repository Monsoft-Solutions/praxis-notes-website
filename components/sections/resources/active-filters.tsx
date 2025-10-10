'use client';

import { X, Filter } from 'lucide-react';
import Link from 'next/link';

interface ActiveFilter {
  type: 'category' | 'tag' | 'search';
  label: string;
  value: string;
}

interface ActiveFiltersProps {
  filters: ActiveFilter[];
  onClearFilter?: (type: string, value: string) => void;
  onClearAll?: () => void;
}

export default function ActiveFilters({
  filters,
  onClearFilter,
  onClearAll,
}: ActiveFiltersProps) {
  if (filters.length === 0) {
    return null;
  }

  return (
    <div
      className="bg-white border-2 border-blue-200 p-4 shadow-sm"
      style={{ borderRadius: '14px 18px 12px 20px' }}
    >
      <div className="flex items-start justify-between gap-4 flex-wrap">
        {/* Active filters */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-3">
            <Filter className="h-4 w-4 text-blue-600" />
            <h3 className="text-sm font-quicksand font-bold text-gray-900">
              Active Filters
            </h3>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            {filters.map((filter, index) => (
              <div
                key={`${filter.type}-${filter.value}-${index}`}
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-100 text-blue-800 font-nunito text-sm border border-blue-200"
                style={{ borderRadius: '8px 10px 6px 12px' }}
              >
                <span className="font-medium">{filter.type}:</span>
                <span>{filter.label}</span>
                {onClearFilter && (
                  <button
                    onClick={() => onClearFilter(filter.type, filter.value)}
                    className="ml-1 p-0.5 hover:bg-blue-200 rounded-full transition-colors"
                    aria-label={`Remove ${filter.type} filter: ${filter.label}`}
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Clear all button */}
        {onClearAll && filters.length > 1 && (
          <button
            onClick={onClearAll}
            className="flex-shrink-0 px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-quicksand font-semibold text-sm transition-all duration-200 hover:shadow-md"
            style={{ borderRadius: '10px 12px 8px 14px' }}
            aria-label="Clear all filters"
          >
            Clear All
          </button>
        )}

        {/* Browse all link (if only filters active, no custom clear handlers) */}
        {!onClearAll && !onClearFilter && (
          <Link
            href="/resources"
            className="flex-shrink-0 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-quicksand font-semibold text-sm transition-all duration-200 hover:shadow-md"
            style={{ borderRadius: '10px 12px 8px 14px' }}
          >
            Browse All Resources
          </Link>
        )}
      </div>

      {/* Breadcrumb-style navigation */}
      <div className="mt-3 pt-3 border-t border-blue-100">
        <div className="flex items-center gap-2 text-xs text-gray-600 font-nunito flex-wrap">
          <Link
            href="/resources"
            className="hover:text-blue-600 transition-colors"
          >
            All Resources
          </Link>
          {filters.map((filter, index) => (
            <span key={`breadcrumb-${filter.type}-${filter.value}-${index}`}>
              <span className="mx-1">/</span>
              <span className="font-medium">{filter.label}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
