import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "website/components/ui/card";
import { getPaginatedResources } from "website/lib/resources";
import { Button } from "website/components/ui/button";

export const metadata: Metadata = {
  title: "Resources | PraxisNote",
  description:
    "Learn more about ABA therapy, terms, and best practices in our resources section.",
};

export default async function ResourcesPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const currentPage = Number((await searchParams).page) || 1;
  const pageSize = 6; // Number of resources per page

  const { resources, totalPages } = await getPaginatedResources(
    currentPage,
    pageSize
  );

  return (
    <>
      <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50/70 to-transparent dark:from-blue-950/10 dark:to-transparent">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
              ABA Knowledge Base
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Resources
            </h1>
            <p className="text-xl text-muted-foreground">
              Helpful articles, guides, and resources for ABA therapists and
              professionals
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource) => (
              <Link
                key={resource.slug}
                href={`/resources/${resource.slug}`}
                className="group"
              >
                <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-md border border-gray-200 dark:border-gray-700">
                  {resource.image && (
                    <div className="relative h-48 w-full overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10" />
                      <Image
                        src={resource.image}
                        alt={resource.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      {resource.tags && resource.tags.length > 0 && (
                        <div className="absolute top-4 right-4 z-20">
                          <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-xs font-medium">
                            {typeof resource.tags[0] === "string"
                              ? resource.tags[0]
                              : resource.tags[0] && "name" in resource.tags[0]
                              ? resource.tags[0].name
                              : "Tag"}
                          </span>
                        </div>
                      )}
                    </div>
                  )}
                  <div className="p-6 flex-1 flex flex-col">
                    <h2 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">
                      {resource.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-5 flex-1">
                      {resource.metaDescription}
                    </p>
                    <div className="mt-auto flex justify-between items-center">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {resource.date}{" "}
                        {resource.readingTime && `• ${resource.readingTime}`}
                      </span>
                      <span className="text-blue-600 dark:text-blue-400 font-medium flex items-center group-hover:underline transition-all">
                        Read more <ArrowRight className="ml-1 w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12 flex justify-center items-center gap-2">
              {/* Previous Page Button */}
              {currentPage > 1 ? (
                <Link
                  href={`/resources?page=${currentPage - 1}`}
                  aria-label="Previous page"
                >
                  <Button variant="outline" size="sm">
                    <ChevronLeft className="h-4 w-4 mr-1" />
                    Prev
                  </Button>
                </Link>
              ) : (
                <Button variant="outline" size="sm" disabled>
                  <ChevronLeft className="h-4 w-4 mr-1" />
                  Prev
                </Button>
              )}

              {/* Page Numbers */}
              <div className="flex items-center gap-1 mx-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => {
                    // For many pages, show a limited range
                    if (totalPages > 7) {
                      // Always show first, last, current, and pages adjacent to current
                      if (
                        page === 1 ||
                        page === totalPages ||
                        (page >= currentPage - 1 && page <= currentPage + 1)
                      ) {
                        return (
                          <PaginationNumber
                            key={page}
                            page={page}
                            currentPage={currentPage}
                          />
                        );
                      }
                      // Show ellipses for gaps
                      if (
                        (page === 2 && currentPage > 3) ||
                        (page === totalPages - 1 &&
                          currentPage < totalPages - 2)
                      ) {
                        return (
                          <span key={page} className="px-2">
                            ...
                          </span>
                        );
                      }
                      return null;
                    }

                    // For fewer pages, show all page numbers
                    return (
                      <PaginationNumber
                        key={page}
                        page={page}
                        currentPage={currentPage}
                      />
                    );
                  }
                )}
              </div>

              {/* Next Page Button */}
              {currentPage < totalPages ? (
                <Link
                  href={`/resources?page=${currentPage + 1}`}
                  aria-label="Next page"
                >
                  <Button variant="outline" size="sm">
                    Next
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </Link>
              ) : (
                <Button variant="outline" size="sm" disabled>
                  Next
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

// Helper component for pagination numbers
function PaginationNumber({
  page,
  currentPage,
}: {
  page: number;
  currentPage: number;
}) {
  const isActive = page === currentPage;

  if (isActive) {
    return (
      <Button
        variant="default"
        size="sm"
        className="w-8 h-8 p-0 pointer-events-none"
      >
        {page}
      </Button>
    );
  }

  return (
    <Link href={`/resources?page=${page}`}>
      <Button variant="outline" size="sm" className="w-8 h-8 p-0">
        {page}
      </Button>
    </Link>
  );
}
