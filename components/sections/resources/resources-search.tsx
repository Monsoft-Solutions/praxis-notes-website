'use client';

import { Search, X } from 'lucide-react';
import { useCallback, useState, useEffect } from 'react';

interface ResourcesSearchProps {
  onSearchChange: (query: string) => void;
  initialValue?: string;
  placeholder?: string;
}

export default function ResourcesSearch({
  onSearchChange,
  initialValue = '',
  placeholder = 'Search resources by title, description, or tags...',
}: ResourcesSearchProps) {
  const [searchQuery, setSearchQuery] = useState(initialValue);

  // Debounce search to avoid too many updates
  useEffect(() => {
    const timer = setTimeout(() => {
      onSearchChange(searchQuery);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery, onSearchChange]);

  const handleClear = useCallback(() => {
    setSearchQuery('');
  }, []);

  return (
    <div className="relative w-full">
      {/* Search icon */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
        <Search className="h-5 w-5" />
      </div>

      {/* Search input */}
      <input
        type="text"
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        placeholder={placeholder}
        className="w-full h-14 pl-12 pr-12 bg-white border-2 border-blue-200 text-gray-900 placeholder-gray-400 font-nunito text-base focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all duration-200 shadow-sm hover:shadow-md"
        style={{ borderRadius: '14px 18px 12px 20px' }}
        aria-label="Search resources"
      />

      {/* Clear button */}
      {searchQuery && (
        <button
          onClick={handleClear}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100"
          aria-label="Clear search"
        >
          <X className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}
