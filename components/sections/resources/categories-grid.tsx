'use client';

import Link from 'next/link';
import { ArrowRight, FolderOpen, FileText, BookOpen } from 'lucide-react';
import { Button } from 'website/components/ui/button';
import type { CategoryWithCount } from '../../../lib/types';

interface CategoriesGridProps {
  categories: CategoryWithCount[];
}

export default function CategoriesGrid({ categories }: CategoriesGridProps) {
  return (
    <section className="py-16 md:py-24 relative min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-yellow-50">
      {/* Subtle background decorations */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute left-16 top-32 h-12 w-12 rounded border-2 border-green-200 opacity-30"
          style={{ transform: 'rotate(0.2deg)' }}
        ></div>
        <div className="absolute right-20 top-1/3 h-8 w-8 rounded-full border border-blue-200 opacity-40"></div>
        <div className="absolute left-1/3 bottom-24 h-3 w-3 rounded-full bg-yellow-200 opacity-50"></div>
        <div className="absolute right-1/4 bottom-40 h-6 w-6 rounded border-2 border-orange-200 opacity-35"></div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-quicksand font-bold text-gray-800 mb-4"
            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}
          >
            Browse by <span className="text-green-500">Category</span>
          </h2>
          <p className="text-lg font-nunito text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Find resources tailored to your specific interests and professional
            needs
          </p>
        </div>

        {categories.length === 0 ? (
          <div className="text-center py-20">
            <div
              className="max-w-md mx-auto bg-white p-12 shadow-xl border-2 border-gray-200"
              style={{
                borderRadius: '25px 30px 20px 35px',
                borderStyle: 'solid',
              }}
            >
              {/* Thumb tack */}
              <div className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 transform">
                <div className="h-full w-full rounded-full bg-gray-400 shadow-md"></div>
                <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
              </div>

              <div className="pt-2">
                <FolderOpen className="w-16 h-16 text-gray-400 mx-auto mb-6" />
                <h3 className="text-xl font-quicksand font-bold text-gray-600 mb-4">
                  No Categories Available
                </h3>
                <p className="text-gray-500 font-nunito leading-relaxed">
                  Categories are being organized. Check back soon for curated
                  resource collections.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, index) => {
              // Cycle through ABA colors and thumb tack styles
              const colors = [
                {
                  border: 'border-blue-200',
                  tag: 'bg-blue-400',
                  tack: 'bg-blue-400',
                  tri: 'border-b-blue-400',
                  hover: 'group-hover:border-blue-300',
                  gradient: 'from-blue-100 to-green-100',
                  icon: 'text-blue-500',
                },
                {
                  border: 'border-green-200',
                  tag: 'bg-green-400',
                  tack: 'bg-green-400',
                  tri: 'border-b-green-400',
                  hover: 'group-hover:border-green-300',
                  gradient: 'from-green-100 to-yellow-100',
                  icon: 'text-green-500',
                },
                {
                  border: 'border-orange-200',
                  tag: 'bg-orange-400',
                  tack: 'bg-orange-400',
                  tri: 'border-b-orange-400',
                  hover: 'group-hover:border-orange-300',
                  gradient: 'from-orange-100 to-yellow-100',
                  icon: 'text-orange-500',
                },
                {
                  border: 'border-yellow-200',
                  tag: 'bg-yellow-400',
                  tack: 'bg-yellow-400',
                  tri: 'border-b-yellow-400',
                  hover: 'group-hover:border-yellow-300',
                  gradient: 'from-yellow-100 to-orange-100',
                  icon: 'text-yellow-600',
                },
              ];
              const colorSet = colors[index % colors.length];

              // Irregular border radius variations
              const borderRadiusOptions = [
                '25px 30px 20px 35px',
                '28px 22px 32px 26px',
                '22px 35px 18px 30px',
                '30px 20px 28px 24px',
                '26px 32px 22px 28px',
                '20px 28px 24px 32px',
              ];
              const borderRadius =
                borderRadiusOptions[index % borderRadiusOptions.length];

              // Thumb tack styles
              const thumbTackStyles = [
                { type: 'round', position: 'left-1/2 -translate-x-1/2' },
                { type: 'square', position: 'right-8' },
                { type: 'triangle', position: 'left-8' },
              ];
              const thumbTack = thumbTackStyles[index % thumbTackStyles.length];

              return (
                <Link
                  key={category.slug}
                  href={`/resources/categories/${category.slug}`}
                  className="group block"
                >
                  <div
                    className={`relative bg-white p-8 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-2 ${colorSet.border} ${colorSet.hover} h-full flex flex-col`}
                    style={{
                      borderRadius,
                      borderStyle: 'solid',
                    }}
                  >
                    {/* Thumb tack */}
                    {thumbTack.type === 'round' && (
                      <div
                        className={`absolute -top-2 ${thumbTack.position} h-4 w-4 transform`}
                      >
                        <div
                          className={`h-full w-full rounded-full ${colorSet.tack} shadow-md`}
                        ></div>
                        <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
                      </div>
                    )}
                    {thumbTack.type === 'square' && (
                      <div
                        className={`absolute -top-1.5 ${thumbTack.position} h-3 w-3 rotate-45 transform ${colorSet.tack} shadow-md`}
                      ></div>
                    )}
                    {thumbTack.type === 'triangle' && (
                      <div className={`absolute -top-2 ${thumbTack.position}`}>
                        <div
                          className={`h-0 w-0 border-l-2 border-r-2 border-b-4 border-l-transparent border-r-transparent ${colorSet.tri} shadow-sm`}
                        ></div>
                      </div>
                    )}

                    {/* Content starts below thumb tack */}
                    <div className="pt-2 flex-1 flex flex-col">
                      {/* Icon */}
                      <div className="mb-6">
                        <div
                          className={`w-16 h-16 bg-gradient-to-br ${colorSet.gradient} rounded-full flex items-center justify-center border-2 ${colorSet.border} group-hover:scale-110 transition-transform duration-300`}
                        >
                          <FolderOpen className={`w-8 h-8 ${colorSet.icon}`} />
                        </div>
                      </div>

                      <h2
                        className="text-xl font-quicksand font-bold mb-4 text-gray-800 group-hover:text-blue-500 transition-colors duration-200 leading-tight"
                        style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.05)' }}
                      >
                        {category.name}
                      </h2>

                      {category.description && (
                        <p className="font-nunito text-gray-600 mb-6 flex-1 leading-relaxed text-sm">
                          {category.description}
                        </p>
                      )}

                      <div className="mt-auto space-y-4">
                        {/* Resource count */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-sm text-gray-500 font-nunito">
                            <FileText className="w-4 h-4 mr-2 text-gray-400" />
                            <span>
                              {category.resourceCount}{' '}
                              {category.resourceCount === 1
                                ? 'resource'
                                : 'resources'}
                            </span>
                          </div>

                          {/* Resource count badge */}
                          <span
                            className={`px-3 py-1.5 ${colorSet.tag} text-white text-xs font-quicksand font-semibold shadow-md`}
                            style={{
                              borderRadius: '12px 16px 10px 14px',
                              textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
                            }}
                          >
                            {category.resourceCount}
                          </span>
                        </div>

                        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                          <div className="flex items-center text-blue-500 font-quicksand font-semibold text-sm group-hover:text-blue-600 transition-colors">
                            <BookOpen className="w-4 h-4 mr-2" />
                            Explore category
                          </div>
                          <ArrowRight className="w-5 h-5 text-blue-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-200" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}

        {/* Quick actions section */}
        {categories.length > 0 && (
          <div className="mt-20 text-center">
            <div
              className="max-w-4xl mx-auto bg-white p-10 shadow-2xl border-2 border-blue-200"
              style={{
                borderRadius: '28px 35px 22px 38px',
                borderStyle: 'solid',
              }}
            >
              {/* Thumb tack for quick actions */}
              <div className="absolute -top-2 left-1/2 h-5 w-5 -translate-x-1/2 transform">
                <div className="h-full w-full rounded-full bg-blue-400 shadow-lg"></div>
                <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
              </div>

              <div className="pt-6">
                <h3
                  className="text-2xl font-quicksand font-bold text-gray-800 mb-6"
                  style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.05)' }}
                >
                  Can&apos;t find what you&apos;re looking for?
                </h3>
                <p className="text-lg font-nunito text-gray-600 mb-8 leading-relaxed">
                  Browse all resources or search for specific topics to find
                  exactly what you need.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    className="h-12 px-8 bg-blue-400 hover:bg-blue-500 text-white font-quicksand font-semibold transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
                    style={{ borderRadius: '14px 18px 12px 16px' }}
                  >
                    <Link href="/resources">
                      <BookOpen className="w-5 h-5 mr-2" />
                      Browse All Resources
                    </Link>
                  </Button>

                  <Button
                    asChild
                    className="h-12 px-8 bg-green-400 hover:bg-green-500 text-white font-quicksand font-semibold transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
                    style={{ borderRadius: '14px 18px 12px 16px' }}
                  >
                    <Link href="/contact">
                      <ArrowRight className="w-5 h-5 mr-2" />
                      Get Personalized Help
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
