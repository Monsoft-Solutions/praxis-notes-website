'use client';

import Link from 'next/link';
import { ArrowLeft, FolderOpen, BookOpen, FileText } from 'lucide-react';
import { Button } from 'website/components/ui/button';
import type { Category } from '../../../lib/types';

interface CategoryHeroProps {
  category: Category;
  totalResources: number;
}

export default function CategoryHero({
  category,
  totalResources,
}: CategoryHeroProps) {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-blue-100 via-yellow-50 to-orange-100">
      {/* Subtle background decorations */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute left-10 top-20 h-16 w-16 rounded-full border-2 border-blue-200 opacity-30"
          style={{ transform: 'rotate(-0.1deg)' }}
        ></div>
        <div className="absolute right-16 top-1/4 h-10 w-10 rounded border border-green-200 opacity-40"></div>
        <div className="absolute left-1/4 bottom-20 h-3 w-3 rounded-full bg-orange-200 opacity-50"></div>
        <div className="absolute right-1/3 bottom-32 h-8 w-8 rounded border-2 border-yellow-200 opacity-35"></div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 sm:px-6 relative">
        <div className="text-center">
          {/* Breadcrumb navigation */}
          <div className="mb-8">
            <Button
              asChild
              variant="outline"
              className="h-10 px-6 bg-white border-2 border-blue-200 text-blue-600 hover:bg-blue-50 hover:border-blue-300 font-quicksand font-semibold transition-all duration-200"
              style={{ borderRadius: '12px 14px 10px 16px' }}
            >
              <Link href="/resources/categories">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Categories
              </Link>
            </Button>
          </div>

          {/* Main heading card */}
          <div
            className="relative max-w-4xl mx-auto bg-white p-12 shadow-2xl border-2 border-green-200 mb-8"
            style={{
              borderRadius: '32px 28px 35px 25px',
              borderStyle: 'solid',
            }}
          >
            {/* Thumb tack */}
            <div className="absolute -top-2 left-1/2 h-5 w-5 -translate-x-1/2 transform">
              <div className="h-full w-full rounded-full bg-green-400 shadow-lg"></div>
              <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
            </div>

            <div className="pt-4">
              <div className="inline-flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-blue-100 rounded-full flex items-center justify-center border-2 border-green-200">
                  <FolderOpen className="w-8 h-8 text-green-500" />
                </div>
                <h1
                  className="text-4xl md:text-6xl font-quicksand font-bold text-gray-800"
                  style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}
                >
                  {category.name}
                </h1>
              </div>

              {category.description && (
                <p className="text-xl md:text-2xl font-nunito text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
                  {category.description}
                </p>
              )}

              {/* Resource count and features */}
              <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                <div className="flex items-center gap-3 text-gray-600 font-nunito">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-green-100 rounded-full flex items-center justify-center border-2 border-blue-200">
                    <FileText className="w-5 h-5 text-blue-500" />
                  </div>
                  <span className="font-semibold">
                    {totalResources}{' '}
                    {totalResources === 1 ? 'Resource' : 'Resources'}
                  </span>
                </div>

                <div className="flex items-center gap-3 text-gray-600 font-nunito">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-100 to-yellow-100 rounded-full flex items-center justify-center border-2 border-green-200">
                    <BookOpen className="w-5 h-5 text-green-500" />
                  </div>
                  <span className="font-semibold">Expert Content</span>
                </div>
              </div>
            </div>
          </div>

          {/* Subtitle card */}
          {totalResources > 0 ? (
            <div
              className="max-w-2xl mx-auto bg-white p-8 shadow-xl border-2 border-blue-200"
              style={{
                borderRadius: '25px 30px 20px 28px',
                borderStyle: 'solid',
              }}
            >
              {/* Small thumb tack */}
              <div className="absolute -top-1.5 right-8 h-3 w-3 rotate-45 transform bg-blue-400 shadow-sm"></div>

              <p className="text-lg font-nunito text-gray-700 leading-relaxed">
                Discover carefully curated resources designed to enhance your
                understanding and practice in this specialized area of ABA.
              </p>
            </div>
          ) : (
            <div
              className="max-w-2xl mx-auto bg-white p-8 shadow-xl border-2 border-gray-200"
              style={{
                borderRadius: '25px 30px 20px 28px',
                borderStyle: 'solid',
              }}
            >
              {/* Small thumb tack */}
              <div className="absolute -top-1.5 right-8 h-3 w-3 rotate-45 transform bg-gray-400 shadow-sm"></div>

              <p className="text-lg font-nunito text-gray-700 leading-relaxed">
                This category is being developed. Check back soon for
                specialized resources, or explore other categories.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
