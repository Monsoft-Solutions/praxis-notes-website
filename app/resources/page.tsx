import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight, BookOpen } from "lucide-react";
import { Card } from "website/components/ui/card";
import { getPaginatedResources } from "website/lib/resources";
import { Button } from "website/components/ui/button";
import CTAPlain from "website/components/sections/cta-plain";

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
      {/* Hero section */}
      <section className="relative pt-20 md:pt-28 overflow-hidden bg-ivory dark:bg-deep-navy">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute right-1/3 top-0 h-96 w-96 -translate-y-1/2 rounded-full bg-soft-blue/10 blur-3xl" />
          <div className="absolute left-1/4 bottom-0 h-96 w-96 translate-y-1/2 rounded-full bg-lavender/10 blur-3xl" />
        </div>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-soft-blue/20 dark:bg-soft-blue/30 text-charcoal dark:text-off-white text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              <span>ABA Knowledge Base</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Resources</h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed mb-10">
              Helpful articles, guides, and resources for ABA therapists and
              professionals
            </p>
          </div>
        </div>
      </section>

      {/* Resources grid section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource) => (
              <Link
                key={resource.slug}
                href={`/resources/${resource.slug}`}
                className="group"
              >
                <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-aba-lg border border-gray-200 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-800">
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
                          <span className="px-3 py-1 bg-soft-blue/80 text-white rounded-full text-xs font-medium">
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
                    <h2 className="text-xl font-semibold mb-3 text-charcoal dark:text-off-white group-hover:text-soft-blue transition-colors">
                      {resource.title}
                    </h2>
                    <p className="text-muted-foreground mb-5 flex-1">
                      {resource.metaDescription}
                    </p>
                    <div className="mt-auto flex justify-between items-center">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {resource.date}{" "}
                        {resource.readingTime && `• ${resource.readingTime}`}
                      </span>
                      <span className="text-soft-blue dark:text-blue-400 font-medium flex items-center group-hover:underline transition-all">
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
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-200 dark:border-slate-700"
                  >
                    <ChevronLeft className="h-4 w-4 mr-1" />
                    Prev
                  </Button>
                </Link>
              ) : (
                <Button
                  variant="outline"
                  size="sm"
                  disabled
                  className="border-gray-200 dark:border-slate-700"
                >
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
                          <span
                            key={page}
                            className="px-2 text-muted-foreground"
                          >
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
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-200 dark:border-slate-700"
                  >
                    Next
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </Link>
              ) : (
                <Button
                  variant="outline"
                  size="sm"
                  disabled
                  className="border-gray-200 dark:border-slate-700"
                >
                  Next
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              )}
            </div>
          )}
        </div>
      </section>

      {/* FAQ-like featured resources section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-ivory to-soft-gray dark:from-deep-navy dark:to-slate-800">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-charcoal dark:text-off-white">
              Featured Resources
            </h2>
            <p className="text-xl text-muted-foreground">
              Explore our most popular guides and articles for ABA professionals
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white dark:bg-slate-800 rounded-xl p-8 shadow-aba-lg border border-gray-200 dark:border-slate-700 transition-all duration-200">
            <div className="space-y-6">
              {resources.slice(0, 3).map((resource) => (
                <Link
                  key={`featured-${resource.slug}`}
                  href={`/resources/${resource.slug}`}
                  className="block p-4 rounded-lg hover:bg-soft-blue/5 dark:hover:bg-blue-900/10 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-charcoal dark:text-off-white mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {resource.metaDescription}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Add CTA section */}
      <CTAPlain
        subtitle="Need specific ABA resources?"
        description="Our experts can help you find the right resources for your ABA practice needs."
        primaryButtonText="Contact us"
        primaryButtonLink="/contact"
        secondaryButtonText="View all resources"
        secondaryButtonLink="/resources"
      />
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
        className="w-8 h-8 p-0 pointer-events-none bg-soft-blue hover:bg-soft-blue/90 text-white"
      >
        {page}
      </Button>
    );
  }

  return (
    <Link href={`/resources?page=${page}`}>
      <Button
        variant="outline"
        size="sm"
        className="w-8 h-8 p-0 border-gray-200 dark:border-slate-700 hover:border-soft-blue hover:text-soft-blue dark:hover:text-blue-400"
      >
        {page}
      </Button>
    </Link>
  );
}
