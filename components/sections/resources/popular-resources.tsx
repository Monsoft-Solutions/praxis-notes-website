import Link from 'next/link';
import { TrendingUp, Eye, Clock } from 'lucide-react';
import { getPopularResources } from 'website/lib/resources';

type PopularResourcesProps = {
  categoryId?: string;
  categoryName?: string;
  limit?: number;
  excludeId?: string;
};

export default async function PopularResources({
  categoryId,
  categoryName,
  limit = 5,
  excludeId,
}: PopularResourcesProps) {
  const popularResources = await getPopularResources(categoryId, limit + 1); // Get one extra in case we need to exclude current

  // Filter out the current resource if excludeId is provided
  const filteredResources = excludeId
    ? popularResources.filter(r => r.id !== excludeId).slice(0, limit)
    : popularResources.slice(0, limit);

  // Don't render if no resources
  if (filteredResources.length === 0) {
    return null;
  }

  return (
    <div
      className="rounded-2xl border-2 border-orange-200 bg-white p-6 shadow-lg"
      style={{
        borderRadius: '22px 28px 18px 32px',
      }}
    >
      {/* Small decorative thumb tack */}
      <div className="absolute -mt-8 right-8 h-4 w-4 -translate-x-1/2 transform">
        <div className="h-full w-full rounded-full bg-orange-400 shadow-sm" />
        <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
      </div>

      <div className="pt-2">
        {/* Header */}
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="h-5 w-5 text-orange-500" />
          <h3
            className="text-lg font-bold text-gray-900 font-quicksand"
            style={{
              textShadow: '1px 1px 2px rgba(0,0,0,0.05)',
            }}
          >
            Popular{categoryName ? ` in ${categoryName}` : ' Resources'}
          </h3>
        </div>

        {/* Resources list */}
        <ul className="space-y-3">
          {filteredResources.map((resource, index) => (
            <li key={resource.id}>
              <Link
                href={`/resources/${resource.slug}`}
                className="group block"
              >
                <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-orange-50 transition-colors">
                  {/* Ranking number */}
                  <div
                    className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 text-orange-600 font-quicksand font-bold text-xs flex items-center justify-center"
                    style={{
                      borderRadius: '6px 8px 5px 9px',
                    }}
                  >
                    {index + 1}
                  </div>

                  {/* Resource info */}
                  <div className="flex-1 min-w-0">
                    <p className="font-nunito text-sm font-medium text-gray-900 group-hover:text-orange-600 transition-colors line-clamp-2 mb-1">
                      {resource.title}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      {resource.views !== undefined && resource.views > 0 && (
                        <div className="flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          <span>{resource.views.toLocaleString()}</span>
                        </div>
                      )}
                      {resource.readingTime && (
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{resource.readingTime}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        {/* View all link */}
        {categoryId && (
          <div className="mt-4 pt-3 border-t border-orange-100">
            <Link
              href={`/resources/categories/${filteredResources[0]?.categories.find(c => c.id === categoryId)?.slug || ''}`}
              className="text-sm font-quicksand font-medium text-orange-600 hover:text-orange-700 hover:underline transition-colors"
            >
              View all in {categoryName} →
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
