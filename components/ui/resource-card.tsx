'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Clock, BookOpen } from 'lucide-react';
import { formatDateToStandard } from 'website/lib/utils/date-formatter';
import type { ResourceWithRelations } from '../../lib/types';

interface ResourceCardProps {
  resource: ResourceWithRelations;
  index: number;
  href?: string;
}

// ABA color themes for consistent styling
const ABA_COLOR_THEMES = [
  {
    border: 'border-blue-200',
    tag: 'bg-blue-400',
    tack: 'bg-blue-400',
    tri: 'border-b-blue-400',
    hover: 'group-hover:border-blue-300',
  },
  {
    border: 'border-green-200',
    tag: 'bg-green-400',
    tack: 'bg-green-400',
    tri: 'border-b-green-400',
    hover: 'group-hover:border-green-300',
  },
  {
    border: 'border-orange-200',
    tag: 'bg-orange-400',
    tack: 'bg-orange-400',
    tri: 'border-b-orange-400',
    hover: 'group-hover:border-orange-300',
  },
  {
    border: 'border-yellow-200',
    tag: 'bg-yellow-400',
    tack: 'bg-yellow-400',
    tri: 'border-b-yellow-400',
    hover: 'group-hover:border-yellow-300',
  },
];

// Hand-drawn irregular border radius variations
const BORDER_RADIUS_OPTIONS = [
  '25px 30px 20px 35px',
  '28px 22px 32px 26px',
  '22px 35px 18px 30px',
  '30px 20px 28px 24px',
  '26px 32px 22px 28px',
  '20px 28px 24px 32px',
];

// Thumb tack styles for hand-drawn aesthetic
const THUMB_TACK_STYLES = [
  { type: 'round', position: 'left-1/2 -translate-x-1/2' },
  { type: 'square', position: 'right-8' },
  { type: 'triangle', position: 'left-8' },
];

export default function ResourceCard({
  resource,
  index,
  href,
}: ResourceCardProps) {
  // Cycle through colors and styles based on index
  const colorSet = ABA_COLOR_THEMES[index % ABA_COLOR_THEMES.length];
  const borderRadius =
    BORDER_RADIUS_OPTIONS[index % BORDER_RADIUS_OPTIONS.length];
  const thumbTack = THUMB_TACK_STYLES[index % THUMB_TACK_STYLES.length];

  // Default href if not provided
  const cardHref = href || `/resources/${resource.slug}`;

  return (
    <Link key={resource.slug} href={cardHref} className="group block">
      <div
        className={`relative bg-white p-8 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-2 ${colorSet.border} ${colorSet.hover} h-full flex flex-col`}
        style={{
          borderRadius,
          borderStyle: 'solid',
        }}
      >
        {/* Thumb tack - hanging from wall effect */}
        {thumbTack.type === 'round' && (
          <div
            className={`absolute -top-2 ${thumbTack.position} h-4 w-4 transform`}
          >
            <div
              className={`h-full w-full rounded-full ${colorSet.tack} shadow-md`}
            />
            <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
          </div>
        )}
        {thumbTack.type === 'square' && (
          <div
            className={`absolute -top-1.5 ${thumbTack.position} h-3 w-3 rotate-45 transform ${colorSet.tack} shadow-md`}
          />
        )}
        {thumbTack.type === 'triangle' && (
          <div className={`absolute -top-2 ${thumbTack.position}`}>
            <div
              className={`h-0 w-0 border-l-2 border-r-2 border-b-4 border-l-transparent border-r-transparent ${colorSet.tri} shadow-sm`}
            />
          </div>
        )}

        {/* Content starts below thumb tack */}
        <div className="pt-2 flex-1 flex flex-col">
          {/* Featured image */}
          {resource.featuredImage && (
            <div className="relative aspect-square w-full overflow-hidden mb-6 rounded-xl border border-gray-100">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
              <Image
                src={resource.featuredImage.url}
                alt={resource.featuredImage.alt}
                title={resource.featuredImage.title || undefined}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                blurDataURL={resource.featuredImage.blurDataUrl || undefined}
                placeholder={
                  resource.featuredImage.blurDataUrl ? 'blur' : 'empty'
                }
              />
              {/* Tag overlay */}
              {resource.tags && resource.tags.length > 0 && (
                <div className="absolute top-3 right-3 z-20">
                  <span
                    className={`px-3 py-1.5 ${colorSet.tag} text-white text-xs font-quicksand font-semibold shadow-md`}
                    style={{
                      borderRadius: '12px 16px 10px 14px',
                      textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
                    }}
                  >
                    {resource.tags[0].name}
                  </span>
                </div>
              )}
            </div>
          )}

          {/* Title */}
          <h2
            className="text-xl font-quicksand font-bold mb-4 text-gray-800 group-hover:text-blue-500 transition-colors duration-200 leading-tight"
            style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.05)' }}
          >
            {resource.title}
          </h2>

          {/* Description */}
          <p className="font-nunito text-gray-600 mb-6 flex-1 leading-relaxed text-sm">
            {resource.metaDescription}
          </p>

          {/* Footer metadata and CTA */}
          <div className="mt-auto space-y-4">
            {/* Date and reading time */}
            <div className="flex items-center text-sm text-gray-500 font-nunito">
              <Clock className="w-4 h-4 mr-2 text-gray-400" />
              <span>
                {formatDateToStandard(resource.date)}{' '}
                {resource.readingTime && `• ${resource.readingTime}`}
              </span>
            </div>

            {/* Read article CTA */}
            <div className="flex items-center justify-between pt-2 border-t border-gray-100">
              <div className="flex items-center text-blue-500 font-quicksand font-semibold text-sm group-hover:text-blue-600 transition-colors">
                <BookOpen className="w-4 h-4 mr-2" />
                Read article
              </div>
              <ArrowRight className="w-5 h-5 text-blue-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-200" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
