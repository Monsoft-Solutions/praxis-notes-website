'use client';

import { Loader2 } from 'lucide-react';
import { Button } from 'website/components/ui/button';

interface LoadMoreButtonProps {
  isLoading: boolean;
  hasMore: boolean;
  onLoadMore: () => void;
}

export default function LoadMoreButton({
  isLoading,
  hasMore,
  onLoadMore,
}: LoadMoreButtonProps) {
  if (!hasMore) return null;

  return (
    <div className="mt-12 flex justify-center">
      <Button
        onClick={onLoadMore}
        disabled={isLoading}
        className="h-14 px-12 bg-blue-400 hover:bg-blue-500 text-white font-quicksand font-semibold text-lg transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
        style={{ borderRadius: '14px 16px 14px 18px' }}
      >
        {isLoading ? (
          <>
            <Loader2 className="h-5 w-5 mr-3 animate-spin" />
            Loading more resources...
          </>
        ) : (
          'Load More Resources'
        )}
      </Button>
    </div>
  );
}
