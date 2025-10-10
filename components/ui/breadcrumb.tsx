'use client';

import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumb({ items, className = '' }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center flex-wrap gap-2 text-sm font-nunito ${className}`}
    >
      {/* Home link */}
      <Link
        href="/"
        className="flex items-center text-gray-500 hover:text-blue-500 transition-colors duration-200"
        aria-label="Home"
      >
        <Home className="w-4 h-4" />
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <div key={index} className="flex items-center gap-2">
            <ChevronRight className="w-4 h-4 text-gray-400" />
            {item.href && !isLast ? (
              <Link
                href={item.href}
                className="text-gray-500 hover:text-blue-500 transition-colors duration-200"
              >
                {item.label}
              </Link>
            ) : (
              <span
                className={`${isLast ? 'text-gray-800 font-semibold' : 'text-gray-500'}`}
                aria-current={isLast ? 'page' : undefined}
              >
                {item.label}
              </span>
            )}
          </div>
        );
      })}
    </nav>
  );
}
