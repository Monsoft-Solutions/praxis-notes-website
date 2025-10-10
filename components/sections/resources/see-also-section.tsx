import Link from 'next/link';
import { BookOpen, ArrowRight } from 'lucide-react';
import type { ResourceWithRelations } from 'website/lib/types';

type SeeAlsoSectionProps = {
  resources: ResourceWithRelations[];
};

export default function SeeAlsoSection({ resources }: SeeAlsoSectionProps) {
  // Don't render if no resources
  if (resources.length === 0) {
    return null;
  }

  return (
    <aside
      className="my-8 rounded-2xl border-2 border-green-200 bg-gradient-to-br from-green-50 to-blue-50 p-6 shadow-md"
      style={{
        borderRadius: '20px 25px 18px 28px',
      }}
    >
      {/* Small decorative thumb tack */}
      <div className="absolute -mt-8 ml-8 h-3 w-3 rotate-45 transform bg-green-400 shadow-sm" />

      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 mt-1">
          <BookOpen className="h-5 w-5 text-green-600" />
        </div>
        <div className="flex-1">
          <h3
            className="text-lg font-bold text-gray-900 font-quicksand mb-3"
            style={{
              textShadow: '1px 1px 2px rgba(0,0,0,0.05)',
            }}
          >
            See Also
          </h3>
          <ul className="space-y-2">
            {resources.map(resource => (
              <li key={resource.id}>
                <Link
                  href={`/resources/${resource.slug}`}
                  className="group flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <ArrowRight className="h-3 w-3 text-green-500 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                  <span className="font-nunito text-sm font-medium group-hover:underline">
                    {resource.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}
