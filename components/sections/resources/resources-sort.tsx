'use client';

import { ArrowDownAZ, TrendingUp, Clock } from 'lucide-react';
import { useCallback } from 'react';

export type SortOption = 'newest' | 'popular' | 'alphabetical';

interface ResourcesSortProps {
  currentSort: SortOption;
  onSortChange: (sort: SortOption) => void;
}

const sortOptions: {
  value: SortOption;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}[] = [
  { value: 'newest', label: 'Newest First', icon: Clock },
  { value: 'popular', label: 'Most Popular', icon: TrendingUp },
  { value: 'alphabetical', label: 'A-Z', icon: ArrowDownAZ },
];

export default function ResourcesSort({
  currentSort,
  onSortChange,
}: ResourcesSortProps) {
  const handleSortChange = useCallback(
    (sort: SortOption) => {
      onSortChange(sort);
    },
    [onSortChange]
  );

  return (
    <div className="flex items-center gap-3 flex-wrap">
      <span className="text-sm font-quicksand font-semibold text-gray-700">
        Sort by:
      </span>
      <div className="flex items-center gap-2 flex-wrap">
        {sortOptions.map(option => {
          const Icon = option.icon;
          const isActive = currentSort === option.value;

          return (
            <button
              key={option.value}
              onClick={() => handleSortChange(option.value)}
              className={`
                flex items-center gap-2 px-4 py-2 font-quicksand font-medium text-sm
                transition-all duration-200
                ${
                  isActive
                    ? 'bg-blue-500 text-white shadow-md hover:bg-blue-600'
                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-300 hover:shadow-sm'
                }
              `}
              style={{ borderRadius: '10px 12px 8px 14px' }}
              aria-label={`Sort by ${option.label}`}
              aria-pressed={isActive}
            >
              <Icon className="h-4 w-4" />
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
