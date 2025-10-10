import Link from 'next/link';
import { ArrowRight, BookOpen, Clock } from 'lucide-react';
import { Button } from 'website/components/ui/button';
import type {
  AdjacentResource,
  ResourceWithRelations,
} from 'website/lib/types';

type ContinueReadingProps = {
  nextResource?: AdjacentResource;
  sameHubResources?: ResourceWithRelations[];
};

export default function ContinueReading({
  nextResource,
  sameHubResources = [],
}: ContinueReadingProps) {
  // If we have a suggested next resource, show it
  if (nextResource) {
    return (
      <div
        className="rounded-3xl border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50 p-8 shadow-lg"
        style={{
          borderRadius: '28px 35px 22px 38px',
        }}
      >
        {/* Decorative thumb tack */}
        <div className="absolute -mt-10 right-12 h-4 w-4 -translate-x-1/2 transform">
          <div className="h-full w-full rounded-full bg-purple-400 shadow-sm" />
          <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
        </div>

        <div className="pt-2">
          {/* Header */}
          <div className="flex items-center gap-2 mb-6">
            <BookOpen className="h-6 w-6 text-purple-600" />
            <h3
              className="text-2xl font-bold text-gray-900 font-quicksand"
              style={{
                textShadow: '1px 1px 2px rgba(0,0,0,0.05)',
              }}
            >
              Continue Reading
            </h3>
          </div>

          {/* Resource info */}
          <div className="flex-1">
            <h4 className="text-xl font-bold text-gray-900 font-quicksand mb-4 hover:text-purple-600 transition-colors">
              <Link href={`/resources/${nextResource.slug}`}>
                {nextResource.title}
              </Link>
            </h4>

            {/* CTA button */}
            <Link href={`/resources/${nextResource.slug}`}>
              <Button
                className="bg-purple-500 hover:bg-purple-600 text-white font-quicksand font-semibold transition-all hover:shadow-md hover:-translate-y-0.5 flex items-center"
                style={{
                  borderRadius: '12px 16px 10px 18px',
                }}
              >
                Read Next Article
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // If we have hub resources, show them instead
  if (sameHubResources.length > 0) {
    return (
      <div
        className="rounded-3xl border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50 p-8 shadow-lg"
        style={{
          borderRadius: '28px 35px 22px 38px',
        }}
      >
        <div className="pt-2">
          {/* Header */}
          <div className="flex items-center gap-2 mb-6">
            <BookOpen className="h-6 w-6 text-purple-600" />
            <h3
              className="text-2xl font-bold text-gray-900 font-quicksand"
              style={{
                textShadow: '1px 1px 2px rgba(0,0,0,0.05)',
              }}
            >
              More from this Topic
            </h3>
          </div>

          {/* Resources grid */}
          <div className="grid gap-4 md:grid-cols-2">
            {sameHubResources.slice(0, 2).map(resource => (
              <Link
                key={resource.id}
                href={`/resources/${resource.slug}`}
                className="group block"
              >
                <div className="p-4 rounded-xl border border-purple-100 hover:border-purple-300 hover:bg-white transition-all">
                  <h4 className="font-quicksand font-bold text-gray-900 group-hover:text-purple-600 transition-colors mb-2 line-clamp-2">
                    {resource.title}
                  </h4>
                  {resource.readingTime && (
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Clock className="h-3 w-3" />
                      <span>{resource.readingTime}</span>
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Don't render anything if no suggestions
  return null;
}
