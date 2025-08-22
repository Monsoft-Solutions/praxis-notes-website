'use client';

import { BookOpen, Search, Target, Filter } from 'lucide-react';

export default function CategoriesHero() {
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
          {/* Main heading card */}
          <div
            className="relative max-w-4xl mx-auto bg-white p-12 shadow-2xl border-2 border-blue-200 mb-8"
            style={{
              borderRadius: '32px 28px 35px 25px',
              borderStyle: 'solid',
            }}
          >
            {/* Thumb tack */}
            <div className="absolute -top-2 left-1/2 h-5 w-5 -translate-x-1/2 transform">
              <div className="h-full w-full rounded-full bg-blue-400 shadow-lg"></div>
              <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
            </div>

            <div className="pt-4">
              <div className="inline-flex items-center gap-4 mb-6">
                <Filter className="w-10 h-10 text-blue-500" />
                <h1
                  className="text-4xl md:text-6xl font-quicksand font-bold text-gray-800"
                  style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}
                >
                  Resource <span className="text-blue-500">Categories</span>
                </h1>
              </div>

              <p className="text-xl md:text-2xl font-nunito text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
                Browse our ABA resources organized by topic. Find exactly what
                you need for your practice, research, or professional
                development.
              </p>

              {/* Features highlight */}
              <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                <div className="flex items-center gap-3 text-gray-600 font-nunito">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-green-100 rounded-full flex items-center justify-center border-2 border-blue-200">
                    <BookOpen className="w-5 h-5 text-blue-500" />
                  </div>
                  <span className="font-semibold">Expert Content</span>
                </div>

                <div className="flex items-center gap-3 text-gray-600 font-nunito">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-100 to-yellow-100 rounded-full flex items-center justify-center border-2 border-green-200">
                    <Search className="w-5 h-5 text-green-500" />
                  </div>
                  <span className="font-semibold">Easy Discovery</span>
                </div>

                <div className="flex items-center gap-3 text-gray-600 font-nunito">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-full flex items-center justify-center border-2 border-orange-200">
                    <Target className="w-5 h-5 text-orange-500" />
                  </div>
                  <span className="font-semibold">Focused Topics</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
