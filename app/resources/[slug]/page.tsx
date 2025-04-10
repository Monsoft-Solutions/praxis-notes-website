import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button } from "website/components/ui/button";
import { getResourceBySlug } from "website/lib/resources";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ChevronLeft, ArrowRight, Calendar, Clock, Share } from "lucide-react";

type ResourceParams = {
  slug: string;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<ResourceParams>;
}): Promise<Metadata> {
  const slug = (await params).slug;
  const resource = await getResourceBySlug(slug);

  if (!resource) {
    return {
      title: "Resource Not Found",
    };
  }

  return {
    title: `${resource.title} | PraxisNote Resources`,
    description: resource.description,
  };
}

export default async function ResourcePage({
  params,
}: {
  params: Promise<ResourceParams>;
}) {
  const slug = (await params).slug;
  const resource = await getResourceBySlug(slug);

  if (!resource) {
    notFound();
  }

  return (
    <>
      <section className="pt-16 md:pt-24 bg-gradient-to-b from-blue-50/70 to-transparent dark:from-blue-950/10 dark:to-transparent">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <Link
              href="/resources"
              className="flex items-center text-blue-600 dark:text-blue-400 mb-6 hover:underline"
            >
              <ChevronLeft className="w-4 h-4 mr-1" /> Back to Resources
            </Link>

            <div className="max-w-3xl">
              {resource.tags && resource.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {resource.tags.map((tag) => (
                    <span
                      key={tag.toString()}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium"
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
              )}

              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6  bg-clip-text">
                {resource.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 mb-8 text-muted-foreground">
                {resource.author && (
                  <div className="flex items-center">
                    <div>
                      <div className="font-medium">{resource.author.name}</div>
                      {resource.author.title && (
                        <div className="text-sm text-muted-foreground">
                          {resource.author.title}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                <div className="text-gray-500 dark:text-gray-400 text-sm flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {resource.date}
                </div>

                {resource.readingTime && (
                  <div className="text-gray-500 dark:text-gray-400 text-sm flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {resource.readingTime}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {resource.image && (
        <section className="pb-12">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6">
            <div className="mx-auto max-w-4xl">
              <div className="relative w-full rounded-xl overflow-hidden h-[300px] md:h-[400px] lg:h-[500px] shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.01] border border-gray-200 dark:border-gray-800">
                <Image
                  src={resource.image}
                  alt={resource.title}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                  className="object-cover object-center transition-opacity duration-300 hover:opacity-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-50 dark:from-black/30"></div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="py-16 pt-2">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="prose prose-lg dark:prose-invert">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {resource.content}
              </ReactMarkdown>
            </div>

            {resource.cta && (
              <div className="my-16 p-8 bg-blue-50 dark:bg-blue-900/10 rounded-xl border border-blue-200 dark:border-blue-800/40">
                <h3 className="text-2xl font-semibold mb-4 text-blue-700 dark:text-blue-300">
                  {resource.cta.title}
                </h3>
                <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
                  {resource.cta.content}
                </p>
                <Link href={resource.cta.buttonLink}>
                  <Button
                    size="lg"
                    className="font-medium bg-blue-600 hover:bg-blue-700 text-white flex items-center"
                  >
                    {resource.cta.buttonText}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            )}

            <div className="mt-16 border-t border-gray-200 dark:border-gray-800 pt-8">
              <div className="flex justify-between items-center">
                <Link href="/resources">
                  <Button variant="outline" className="group">
                    <ChevronLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Resources
                  </Button>
                </Link>

                <div className="flex items-center gap-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="gap-2 text-gray-600 dark:text-gray-400"
                  >
                    <Share className="h-4 w-4" />
                    Share
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
