import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  FileText,
  Clock,
} from "lucide-react";
import { Button } from "website/components/ui/button";

interface Resource {
  slug: string;
  title: string;
  metaDescription: string;
  date: string;
  readingTime?: string;
  image?: string | null;
  tags?: (string | { id: string; name: string })[] | null;
}

interface ResourcesGridProps {
  resources: Resource[];
  currentPage: number;
  totalPages: number;
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
        className="w-10 h-10 p-0 pointer-events-none bg-blue-400 hover:bg-blue-400 text-white font-quicksand font-semibold"
        style={{ borderRadius: "10px 12px 8px 14px" }}
      >
        {page}
      </Button>
    );
  }

  return (
    <Link href={`/resources?page=${page}`}>
      <Button
        className="w-10 h-10 p-0 bg-white border-2 border-gray-200 text-gray-600 hover:border-blue-300 hover:text-blue-500 font-quicksand font-semibold transition-all"
        style={{ borderRadius: "10px 12px 8px 14px" }}
      >
        {page}
      </Button>
    </Link>
  );
}

export default function ResourcesGrid({
  resources,
  currentPage,
  totalPages,
}: ResourcesGridProps) {
  return (
    <>
      {/* Resources grid section */}
      <section id="resources" className="py-16 md:py-24 relative">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource, index) => {
              // Cycle through ABA colors and thumb tack styles
              const colors = [
                {
                  border: "border-blue-200",
                  tag: "bg-blue-400",
                  tack: "bg-blue-400",
                },
                {
                  border: "border-green-200",
                  tag: "bg-green-400",
                  tack: "bg-green-400",
                },
                {
                  border: "border-orange-200",
                  tag: "bg-orange-400",
                  tack: "bg-orange-400",
                },
                {
                  border: "border-yellow-200",
                  tag: "bg-yellow-400",
                  tack: "bg-yellow-400",
                },
              ];
              const colorSet = colors[index % colors.length];

              // Irregular border radius variations
              const borderRadiusOptions = [
                "25px 30px 20px 35px",
                "28px 22px 32px 26px",
                "22px 35px 18px 30px",
                "30px 20px 28px 24px",
                "26px 32px 22px 28px",
                "20px 28px 24px 32px",
              ];
              const borderRadius =
                borderRadiusOptions[index % borderRadiusOptions.length];

              // Thumb tack styles
              const thumbTackStyles = [
                { type: "round", position: "left-1/2 -translate-x-1/2" },
                { type: "square", position: "right-8" },
                { type: "triangle", position: "left-8" },
              ];
              const thumbTack = thumbTackStyles[index % thumbTackStyles.length];

              return (
                <Link
                  key={resource.slug}
                  href={`/resources/${resource.slug}`}
                  className="group block"
                >
                  <div
                    className={`relative bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-2 ${colorSet.border} h-full flex flex-col`}
                    style={{ borderRadius }}
                  >
                    {/* Thumb tack */}
                    {thumbTack.type === "round" && (
                      <div
                        className={`absolute -top-2 ${thumbTack.position} h-4 w-4 transform`}
                      >
                        <div
                          className={`h-full w-full rounded-full ${colorSet.tack} shadow-sm`}
                        ></div>
                        <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
                      </div>
                    )}
                    {thumbTack.type === "square" && (
                      <div
                        className={`absolute -top-1.5 ${thumbTack.position} h-3 w-3 rotate-45 transform ${colorSet.tack} shadow-sm`}
                      ></div>
                    )}
                    {thumbTack.type === "triangle" && (
                      <div className={`absolute -top-2 ${thumbTack.position}`}>
                        <div
                          className={`h-0 w-0 border-l-2 border-r-2 border-b-4 border-l-transparent border-r-transparent border-b-${
                            colorSet.tack.split("-")[1]
                          }-400`}
                        ></div>
                      </div>
                    )}

                    {/* Content starts below thumb tack */}
                    <div className="pt-2 flex-1 flex flex-col">
                      {resource.image && (
                        <div className="relative h-48 w-full overflow-hidden mb-6 rounded-lg">
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
                          <Image
                            src={resource.image}
                            alt={resource.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          {resource.tags && resource.tags.length > 0 && (
                            <div className="absolute top-3 right-3 z-20">
                              <span
                                className={`px-3 py-1 ${colorSet.tag} text-white text-xs font-quicksand font-semibold shadow-sm`}
                                style={{ borderRadius: "12px 16px 10px 14px" }}
                              >
                                {typeof resource.tags[0] === "string"
                                  ? resource.tags[0]
                                  : resource.tags[0] &&
                                    "name" in resource.tags[0]
                                  ? resource.tags[0].name
                                  : "Tag"}
                              </span>
                            </div>
                          )}
                        </div>
                      )}

                      <h2 className="text-xl font-quicksand font-bold mb-3 text-gray-800 group-hover:text-blue-500 transition-colors">
                        {resource.title}
                      </h2>

                      <p className="font-nunito text-gray-600 mb-6 flex-1 leading-relaxed">
                        {resource.metaDescription}
                      </p>

                      <div className="mt-auto flex justify-between items-center">
                        <div className="flex items-center text-sm text-gray-500 font-nunito">
                          <Clock className="w-4 h-4 mr-1" />
                          <span>
                            {resource.date}{" "}
                            {resource.readingTime &&
                              `• ${resource.readingTime}`}
                          </span>
                        </div>
                        <div className="flex items-center text-blue-500 font-quicksand font-semibold text-sm group-hover:text-blue-600 transition-colors">
                          Read article{" "}
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-16 flex justify-center items-center gap-3">
              {/* Previous Page Button */}
              {currentPage > 1 ? (
                <Link
                  href={`/resources?page=${currentPage - 1}`}
                  aria-label="Previous page"
                >
                  <Button
                    className="h-11 px-6 bg-blue-400 hover:bg-blue-500 text-white font-quicksand font-semibold transition-all hover:shadow-md"
                    style={{ borderRadius: "12px 14px 12px 16px" }}
                  >
                    <ChevronLeft className="h-4 w-4 mr-1" />
                    Prev
                  </Button>
                </Link>
              ) : (
                <Button
                  disabled
                  className="h-11 px-6 bg-gray-200 text-gray-400 font-quicksand font-semibold cursor-not-allowed"
                  style={{ borderRadius: "12px 14px 12px 16px" }}
                >
                  <ChevronLeft className="h-4 w-4 mr-1" />
                  Prev
                </Button>
              )}

              {/* Page Numbers */}
              <div className="flex items-center gap-2 mx-4">
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
                            className="px-2 font-nunito text-gray-400"
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
                    className="h-11 px-6 bg-blue-400 hover:bg-blue-500 text-white font-quicksand font-semibold transition-all hover:shadow-md"
                    style={{ borderRadius: "12px 14px 12px 16px" }}
                  >
                    Next
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </Link>
              ) : (
                <Button
                  disabled
                  className="h-11 px-6 bg-gray-200 text-gray-400 font-quicksand font-semibold cursor-not-allowed"
                  style={{ borderRadius: "12px 14px 12px 16px" }}
                >
                  Next
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Featured resources section */}
      <section className="py-16 md:py-24 relative">
        {/* Subtle background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-yellow-25 to-orange-50 opacity-50"></div>

        <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-quicksand font-bold mb-6 text-gray-800">
              Featured <span className="text-green-500">Resources</span>
            </h2>
            <p className="text-xl font-nunito text-gray-600">
              Explore our most popular guides and articles for ABA professionals
            </p>
          </div>

          <div
            className="max-w-4xl mx-auto bg-white p-8 shadow-xl border-2 border-green-200 relative transition-all duration-200 hover:shadow-2xl"
            style={{ borderRadius: "28px 35px 22px 38px" }}
          >
            {/* Thumb tack for featured section */}
            <div className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 transform">
              <div className="h-full w-full rounded-full bg-green-400 shadow-sm"></div>
              <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
            </div>

            <div className="pt-4 space-y-6">
              {resources.slice(0, 3).map((resource) => (
                <Link
                  key={`featured-${resource.slug}`}
                  href={`/resources/${resource.slug}`}
                  className="block p-4 rounded-lg hover:bg-blue-50 transition-colors duration-200 group"
                  style={{ borderRadius: "16px 20px 14px 18px" }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <FileText className="w-6 h-6 text-blue-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-quicksand font-semibold text-gray-800 mb-2 group-hover:text-blue-500 transition-colors">
                        {resource.title}
                      </h3>
                      <p className="font-nunito text-gray-600 leading-relaxed">
                        {resource.metaDescription}
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <ArrowRight className="w-5 h-5 text-blue-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
