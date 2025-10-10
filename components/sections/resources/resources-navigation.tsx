'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BookOpen, FolderOpen, Tag } from 'lucide-react';
import { cn } from 'website/lib/utils';

interface ResourcesNavigationProps {
  className?: string;
}

export default function ResourcesNavigation({
  className,
}: ResourcesNavigationProps) {
  const pathname = usePathname();

  const navItems = [
    {
      label: 'All Resources',
      href: '/resources',
      icon: BookOpen,
      isActive: pathname === '/resources',
    },
    {
      label: 'Browse by Category',
      href: '/resources/categories',
      icon: FolderOpen,
      isActive: pathname?.startsWith('/resources/categories'),
    },
    {
      label: 'Browse by Tag',
      href: '/resources/tags',
      icon: Tag,
      isActive: pathname?.startsWith('/resources/tags'),
    },
  ];

  return (
    <nav
      className={cn(
        'bg-white/80 backdrop-blur-sm border-2 border-gray-200 shadow-lg p-2',
        className
      )}
      style={{ borderRadius: '20px 24px 18px 22px' }}
      aria-label="Resources navigation"
    >
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
        {navItems.map(item => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center justify-center gap-2 px-4 sm:px-6 py-3 font-quicksand font-semibold text-sm sm:text-base transition-all duration-200 flex-1',
                item.isActive
                  ? 'bg-blue-400 text-white shadow-md hover:bg-blue-500'
                  : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-500 border border-gray-200'
              )}
              style={{
                borderRadius: item.isActive
                  ? '14px 16px 12px 18px'
                  : '12px 14px 10px 16px',
              }}
              aria-current={item.isActive ? 'page' : undefined}
            >
              <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">{item.label}</span>
              <span className="sm:hidden">
                {item.label.replace('Browse by ', '')}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
