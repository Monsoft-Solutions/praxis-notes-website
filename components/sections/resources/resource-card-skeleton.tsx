'use client';

export default function ResourceCardSkeleton() {
  return (
    <div
      className="relative bg-white border-2 border-gray-200 overflow-hidden animate-pulse"
      style={{
        borderRadius: '16px 18px 14px 20px',
        minHeight: '380px',
      }}
    >
      {/* Thumb tack decoration */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
        <div className="relative">
          {/* Pin head */}
          <div
            className="w-5 h-5 rounded-full bg-gray-200 shadow-sm"
            style={{ transform: 'rotate(-5deg)' }}
          />
          {/* Pin needle */}
          <div
            className="absolute top-3 left-1/2 -translate-x-1/2 w-0.5 h-4 bg-gray-300"
            style={{ transform: 'rotate(2deg)' }}
          />
        </div>
      </div>

      {/* Card content */}
      <div className="p-8 pt-12 flex flex-col h-full">
        {/* Category pill */}
        <div
          className="inline-flex self-start px-3 py-1.5 rounded-full bg-gray-100 mb-4"
          style={{ borderRadius: '12px 14px 10px 16px' }}
        >
          <div className="h-3 w-20 bg-gray-200 rounded" />
        </div>

        {/* Title */}
        <div className="space-y-2 mb-4">
          <div className="h-6 bg-gray-200 rounded w-full" />
          <div className="h-6 bg-gray-200 rounded w-4/5" />
        </div>

        {/* Excerpt */}
        <div className="space-y-2 mb-6 flex-grow">
          <div className="h-4 bg-gray-100 rounded w-full" />
          <div className="h-4 bg-gray-100 rounded w-full" />
          <div className="h-4 bg-gray-100 rounded w-3/4" />
        </div>

        {/* Footer metadata */}
        <div className="flex items-center justify-between pt-4 border-t-2 border-gray-100">
          <div className="flex items-center gap-4">
            {/* Date */}
            <div className="h-3 w-20 bg-gray-200 rounded" />
            {/* Read time */}
            <div className="h-3 w-16 bg-gray-200 rounded" />
          </div>
          {/* Arrow */}
          <div className="h-6 w-6 bg-gray-200 rounded-full" />
        </div>
      </div>
    </div>
  );
}
