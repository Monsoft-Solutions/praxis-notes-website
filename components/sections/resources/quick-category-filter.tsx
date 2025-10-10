'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { CategoryWithCount } from 'website/lib/types';
import { cn } from 'website/lib/utils';

interface QuickCategoryFilterProps {
  categories: CategoryWithCount[];
  limit?: number;
  className?: string;
}

// Color themes for category pills matching the resource card themes
const CATEGORY_THEMES = [
  {
    bg: 'bg-blue-100',
    text: 'text-blue-700',
    border: 'border-blue-300',
    hover: 'hover:bg-blue-200 hover:border-blue-400',
  },
  {
    bg: 'bg-green-100',
    text: 'text-green-700',
    border: 'border-green-300',
    hover: 'hover:bg-green-200 hover:border-green-400',
  },
  {
    bg: 'bg-orange-100',
    text: 'text-orange-700',
    border: 'border-orange-300',
    hover: 'hover:bg-orange-200 hover:border-orange-400',
  },
  {
    bg: 'bg-yellow-100',
    text: 'text-yellow-700',
    border: 'border-yellow-300',
    hover: 'hover:bg-yellow-200 hover:border-yellow-400',
  },
  {
    bg: 'bg-teal-100',
    text: 'text-teal-700',
    border: 'border-teal-300',
    hover: 'hover:bg-teal-200 hover:border-teal-400',
  },
];

export default function QuickCategoryFilter({
  categories,
  limit = 6,
  className,
}: QuickCategoryFilterProps) {
  const displayCategories = categories.slice(0, limit);

  if (displayCategories.length === 0) {
    return null;
  }

  return (
    <div className={cn('space-y-3', className)}>
      {/* Section heading - more compact */}
      <div className="text-center">
        <h2 className="text-base sm:text-lg font-quicksand font-semibold text-gray-700">
          Popular Topics
        </h2>
      </div>

      {/* Category pills */}
      <div className="flex flex-wrap justify-center gap-2">
        {displayCategories.map((category, index) => {
          const theme = CATEGORY_THEMES[index % CATEGORY_THEMES.length];
          return (
            <Link
              key={category.slug}
              href={`/resources/categories/${category.slug}`}
              className={cn(
                'group flex items-center gap-1.5 px-3 sm:px-4 py-2 font-quicksand font-medium text-xs sm:text-sm border-2 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5',
                theme.bg,
                theme.text,
                theme.border,
                theme.hover
              )}
              style={{ borderRadius: '12px 14px 10px 13px' }}
            >
              <span>{category.name}</span>
              {category.resourceCount > 0 && (
                <span
                  className="px-1.5 py-0.5 bg-white/80 rounded-full text-xs font-semibold"
                  style={{ borderRadius: '6px 8px 5px 7px' }}
                >
                  {category.resourceCount}
                </span>
              )}
            </Link>
          );
        })}

        {/* View all categories link - smaller */}
        <Link
          href="/resources/categories"
          className="group flex items-center gap-1.5 px-3 sm:px-4 py-2 font-quicksand font-medium text-xs sm:text-sm border-2 border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
          style={{ borderRadius: '12px 14px 10px 13px' }}
        >
          <span>All Categories</span>
          <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
