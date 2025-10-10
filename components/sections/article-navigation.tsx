'use client';

import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from 'website/components/ui/button';
import { AdjacentResource } from 'website/lib/types';

interface ArticleNavigationProps {
  previousResource?: AdjacentResource;
  nextResource?: AdjacentResource;
}

export default function ArticleNavigation({
  previousResource,
  nextResource,
}: ArticleNavigationProps) {
  // If neither prev nor next exist, don't render anything
  if (!previousResource && !nextResource) {
    return null;
  }

  return (
    <nav
      className="border-t-2 border-gray-200 pt-8 mt-12"
      aria-label="Article navigation"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Previous Article */}
        {previousResource ? (
          <div>
            <Button
              asChild
              variant="outline"
              className="w-full h-auto p-6 border-2 border-blue-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 text-left justify-start"
              style={{ borderRadius: '16px 20px 14px 18px' }}
            >
              <Link href={`/resources/${previousResource.slug}`}>
                <div className="flex items-start gap-4 w-full">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-green-100 rounded-full flex items-center justify-center border-2 border-blue-200">
                      <ArrowLeft className="w-5 h-5 text-blue-500" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-quicksand font-semibold text-gray-500 uppercase tracking-wide mb-1">
                      Previous Article
                    </p>
                    <p className="font-nunito text-gray-800 font-semibold line-clamp-2">
                      {previousResource.title}
                    </p>
                  </div>
                </div>
              </Link>
            </Button>
          </div>
        ) : (
          <div className="hidden md:block" />
        )}

        {/* Next Article */}
        {nextResource ? (
          <div>
            <Button
              asChild
              variant="outline"
              className="w-full h-auto p-6 border-2 border-green-200 hover:border-green-300 hover:bg-green-50 transition-all duration-200 text-right justify-end"
              style={{ borderRadius: '16px 20px 14px 18px' }}
            >
              <Link href={`/resources/${nextResource.slug}`}>
                <div className="flex items-start gap-4 w-full">
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-quicksand font-semibold text-gray-500 uppercase tracking-wide mb-1">
                      Next Article
                    </p>
                    <p className="font-nunito text-gray-800 font-semibold line-clamp-2">
                      {nextResource.title}
                    </p>
                  </div>
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-100 to-yellow-100 rounded-full flex items-center justify-center border-2 border-green-200">
                      <ArrowRight className="w-5 h-5 text-green-500" />
                    </div>
                  </div>
                </div>
              </Link>
            </Button>
          </div>
        ) : (
          <div className="hidden md:block" />
        )}
      </div>
    </nav>
  );
}
