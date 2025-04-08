import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Card } from "website/components/ui/card";
import { getAllResources } from "website/lib/resources";

export const metadata: Metadata = {
  title: "Resources | PraxisNote",
  description:
    "Learn more about ABA therapy, terms, and best practices in our resources section.",
};

export default function ResourcesPage() {
  const resources = getAllResources();

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
                            {resource.tags[0]}
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
                      {resource.description}
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
        </div>
      </section>
    </>
  );
}
