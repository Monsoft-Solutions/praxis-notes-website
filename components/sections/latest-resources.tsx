import Link from 'next/link';
import { BookOpen, ArrowRight } from 'lucide-react';
import { Button } from 'website/components/ui/button';
import ResourceCard from 'website/components/ui/resource-card';
import type { ResourceWithRelations } from 'website/lib/types';

interface LatestResourcesProps {
  resources: ResourceWithRelations[];
}

export default function LatestResources({ resources }: LatestResourcesProps) {
  return (
    <section className="py-20 md:py-28 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-yellow-50 to-orange-100 opacity-90"></div>

      {/* Subtle background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute left-10 top-20 h-12 w-12 rounded-full border-2 border-blue-200 opacity-30"
          style={{ transform: 'rotate(0.1deg)' }}
        ></div>
        <div className="absolute right-16 top-1/4 h-8 w-8 rounded border border-green-200 opacity-40"></div>
        <div className="absolute left-1/4 bottom-20 h-2 w-2 rounded-full bg-orange-200 opacity-50"></div>
        <div className="absolute right-1/3 bottom-32 h-6 w-6 rounded border-2 border-yellow-200 opacity-35"></div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <BookOpen className="w-8 h-8 text-blue-500" />
            <h2
              className="text-4xl md:text-5xl font-quicksand font-bold text-gray-800"
              style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}
            >
              Latest <span className="text-blue-500">Resources</span>
            </h2>
          </div>
          <p className="text-xl font-nunito text-gray-600 leading-relaxed">
            Stay up-to-date with our newest guides and educational content for
            ABA professionals
          </p>
        </div>

        {/* Resources grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {resources.map((resource, index) => (
            <ResourceCard
              key={resource.slug}
              resource={resource}
              index={index}
            />
          ))}
        </div>

        {/* View all resources CTA */}
        <div className="text-center">
          <div
            className="inline-block bg-white p-8 shadow-xl border-2 border-blue-200 relative transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            style={{
              borderRadius: '25px 30px 20px 35px',
              borderStyle: 'solid',
            }}
          >
            {/* Thumb tack for CTA */}
            <div className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 transform">
              <div className="h-full w-full rounded-full bg-blue-400 shadow-md"></div>
              <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
            </div>

            <div className="pt-2">
              <h3
                className="text-xl font-quicksand font-bold text-gray-800 mb-4"
                style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.05)' }}
              >
                Explore Our Complete Resource Library
              </h3>
              <p className="font-nunito text-gray-600 mb-6 leading-relaxed">
                Discover comprehensive guides, best practices, and educational
                content to enhance your ABA practice.
              </p>
              <Button
                asChild
                className="h-12 px-8 bg-blue-400 hover:bg-blue-500 text-white font-quicksand font-semibold transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
                style={{ borderRadius: '14px 18px 12px 16px' }}
              >
                <Link href="/resources">
                  <BookOpen className="w-5 h-5 mr-2" />
                  View All Resources
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
