import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button } from "website/components/ui/button";
import { getResourceBySlug } from "website/lib/resources";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  ChevronLeft,
  ArrowRight,
  Calendar,
  Clock,
  Share,
  User,
} from "lucide-react";

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
    description: resource.metaDescription,
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
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-yellow-50 to-orange-100 relative">
      {/* Subtle background decorations */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute left-10 top-20 h-12 w-12 rounded-full border-2 border-blue-200 opacity-30 hidden sm:block"
          style={{ transform: "rotate(0.1deg)" }}
        />
        <div className="absolute right-16 bottom-32 h-8 w-8 rounded border border-green-200 opacity-40 hidden sm:block" />
        <div className="absolute left-1/4 bottom-20 h-2 w-2 rounded-full bg-orange-200 opacity-50" />
      </div>

      {/* Main content */}
      <div className="relative z-10">
        {/* Header with breadcrumb */}
        <section className="pt-16 md:pt-24 pb-8">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6">
            <div className="mx-auto max-w-4xl">
              <Link
                href="/resources"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 mb-8 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-quicksand font-medium group"
              >
                <ChevronLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" />
                Back to Resources
              </Link>
            </div>
          </div>
        </section>

        {/* Hero section with article info */}
        <section className="pb-12">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6">
            <div className="mx-auto max-w-4xl">
              {/* Main content card */}
              <div
                className="relative rounded-3xl border-2 border-blue-200 bg-white p-8 shadow-xl"
                style={{
                  borderRadius: "25px 30px 20px 35px",
                }}
              >
                {/* Thumb tack */}
                <div className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 transform">
                  <div className="h-full w-full rounded-full bg-blue-400 shadow-sm" />
                  <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
                </div>

                <div className="pt-2">
                  {/* Tags */}
                  {resource.tags && resource.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {resource.tags.map((tag) => (
                        <span
                          key={tag.toString()}
                          className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium font-quicksand"
                          style={{
                            borderRadius: "18px 25px 15px 22px",
                          }}
                        >
                          {typeof tag === "string" ? tag : tag.name}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Title */}
                  <h1
                    className="text-4xl md:text-5xl font-bold tracking-tight mb-6 font-quicksand text-gray-900"
                    style={{
                      textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
                    }}
                  >
                    {resource.title}
                  </h1>

                  {/* Meta info */}
                  <div className="flex flex-wrap items-center gap-6 text-gray-600">
                    {resource.author && (
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                          <User className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <div className="font-medium font-quicksand text-gray-900">
                            {resource.author.name}
                          </div>
                          {resource.author.title && (
                            <div className="text-sm text-gray-600 font-nunito">
                              {resource.author.title}
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    <div className="flex items-center gap-4">
                      <div className="flex items-center text-sm font-nunito">
                        <Calendar className="w-4 h-4 mr-2 text-blue-500" />
                        {resource.date}
                      </div>

                      {resource.readingTime && (
                        <div className="flex items-center text-sm font-nunito">
                          <Clock className="w-4 h-4 mr-2 text-green-500" />
                          {resource.readingTime}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Image section */}
        {resource.image && (
          <section className="pb-12">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6">
              <div className="mx-auto max-w-4xl">
                <div
                  className="relative rounded-3xl overflow-hidden h-[300px] md:h-[400px] lg:h-[500px] shadow-xl border-2 border-green-200 transition-all duration-300 hover:shadow-2xl hover:scale-[1.01]"
                  style={{
                    borderRadius: "22px 28px 18px 32px",
                  }}
                >
                  {/* Small decorative thumb tack */}
                  <div className="absolute -top-1.5 right-8 h-3 w-3 rotate-45 transform bg-green-400 shadow-sm z-10" />

                  <Image
                    src={resource.image}
                    alt={resource.title}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-50" />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Content section */}
        <section className="py-12">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6">
            <div className="mx-auto max-w-4xl">
              <div
                className="relative rounded-3xl border-2 border-orange-200 bg-white p-8 md:p-12 shadow-lg"
                style={{
                  borderRadius: "28px 35px 22px 38px",
                }}
              >
                {/* Triangle thumb tack */}
                <div className="absolute -top-2 left-8">
                  <div className="h-0 w-0 border-l-2 border-r-2 border-b-4 border-l-transparent border-r-transparent border-b-orange-400" />
                </div>

                <div className="pt-2">
                  <div className="prose prose-lg max-w-none">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {resource.content}
                    </ReactMarkdown>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA section */}
        {resource.cta && (
          <section className="py-12">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6">
              <div className="mx-auto max-w-4xl">
                <div
                  className="relative rounded-3xl border-2 border-yellow-200 bg-gradient-to-br from-yellow-50 to-orange-50 p-8 shadow-lg"
                  style={{
                    borderRadius: "25px 20px 28px 22px",
                  }}
                >
                  {/* Round thumb tack */}
                  <div className="absolute -top-2 right-12 h-4 w-4 -translate-x-1/2 transform">
                    <div className="h-full w-full rounded-full bg-yellow-400 shadow-sm" />
                    <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
                  </div>

                  <div className="pt-2">
                    <h3
                      className="text-2xl md:text-3xl font-bold mb-4 text-orange-700 font-quicksand"
                      style={{
                        textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
                      }}
                    >
                      {resource.cta.title}
                    </h3>
                    <p className="text-lg mb-6 text-gray-700 font-nunito">
                      {resource.cta.content}
                    </p>
                    <Link
                      href={`https://app.praxisnotes.com?utm_source=website&utm_medium=resources&utm_campaign=resource-cta&utm_content=${slug}`}
                      target="_blank"
                    >
                      <Button
                        size="lg"
                        className="bg-orange-400 hover:bg-orange-500 text-gray-900 font-quicksand font-semibold transition-all hover:shadow-md hover:-translate-y-0.5 flex items-center"
                        style={{
                          borderRadius: "15px 18px 12px 20px",
                        }}
                      >
                        {resource.cta.buttonText}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Bottom navigation */}
        <section className="py-16 pb-24">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6">
            <div className="mx-auto max-w-4xl">
              <div
                className="relative rounded-3xl border-2 border-blue-200 bg-white p-6 shadow-lg"
                style={{
                  borderRadius: "20px 25px 18px 30px",
                }}
              >
                {/* Square thumb tack */}
                <div className="absolute -top-1.5 left-8 h-3 w-3 rotate-45 transform bg-blue-400 shadow-sm" />

                <div className="pt-2 flex flex-col sm:flex-row justify-between items-center gap-4">
                  <Link href="/resources">
                    <Button
                      variant="outline"
                      className="group border-blue-200 hover:bg-blue-50 font-quicksand font-medium"
                      style={{
                        borderRadius: "12px 16px 14px 18px",
                      }}
                    >
                      <ChevronLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                      Back to Resources
                    </Button>
                  </Link>

                  <Button
                    variant="ghost"
                    size="sm"
                    className="gap-2 text-gray-600 hover:text-gray-800 font-quicksand"
                    style={{
                      borderRadius: "10px 14px 12px 16px",
                    }}
                  >
                    <Share className="h-4 w-4" />
                    Share Article
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
