'use client';

import Link from 'next/link';
import { ArrowLeft, Tag, BookOpen, FileText } from 'lucide-react';
import { Button } from 'website/components/ui/button';
import type { BaseTag } from 'website/lib/types';

interface TagHeroProps {
  tag: BaseTag;
  totalResources: number;
}

export default function TagHero({ tag, totalResources }: TagHeroProps) {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-purple-100 via-pink-50 to-yellow-100">
      {/* Subtle background decorations */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute left-10 top-20 h-16 w-16 rounded-full border-2 border-purple-200 opacity-30"
          style={{ transform: 'rotate(-0.1deg)' }}
        ></div>
        <div className="absolute right-16 top-1/4 h-10 w-10 rounded border border-pink-200 opacity-40"></div>
        <div className="absolute left-1/4 bottom-20 h-3 w-3 rounded-full bg-yellow-200 opacity-50"></div>
        <div className="absolute right-1/3 bottom-32 h-8 w-8 rounded border-2 border-orange-200 opacity-35"></div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 sm:px-6 relative">
        <div className="text-center">
          {/* Breadcrumb navigation */}
          <div className="mb-8">
            <Button
              asChild
              variant="outline"
              className="h-10 px-6 bg-white border-2 border-purple-200 text-purple-600 hover:bg-purple-50 hover:border-purple-300 font-quicksand font-semibold transition-all duration-200"
              style={{ borderRadius: '12px 14px 10px 16px' }}
            >
              <Link href="/resources/tags">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Tags
              </Link>
            </Button>
          </div>

          {/* Main heading card */}
          <div
            className="relative max-w-4xl mx-auto bg-white p-12 shadow-2xl border-2 border-pink-200 mb-8"
            style={{
              borderRadius: '32px 28px 35px 25px',
              borderStyle: 'solid',
            }}
          >
            {/* Thumb tack */}
            <div className="absolute -top-2 left-1/2 h-5 w-5 -translate-x-1/2 transform">
              <div className="h-full w-full rounded-full bg-pink-400 shadow-lg"></div>
              <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
            </div>

            <div className="pt-4">
              <div className="inline-flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center border-2 border-purple-200">
                  <Tag className="w-8 h-8 text-purple-500" />
                </div>
                <h1
                  className="text-4xl md:text-6xl font-quicksand font-bold text-gray-800"
                  style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}
                >
                  #{tag.name}
                </h1>
              </div>

              <p className="text-xl md:text-2xl font-nunito text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
                Explore resources tagged with <strong>#{tag.name}</strong>
              </p>

              {/* Resource count and features */}
              <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                <div className="flex items-center gap-3 text-gray-600 font-nunito">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center border-2 border-purple-200">
                    <FileText className="w-5 h-5 text-purple-500" />
                  </div>
                  <span className="font-semibold">
                    {totalResources}{' '}
                    {totalResources === 1 ? 'Resource' : 'Resources'}
                  </span>
                </div>

                <div className="flex items-center gap-3 text-gray-600 font-nunito">
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-100 to-yellow-100 rounded-full flex items-center justify-center border-2 border-pink-200">
                    <BookOpen className="w-5 h-5 text-pink-500" />
                  </div>
                  <span className="font-semibold">Expert Content</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
