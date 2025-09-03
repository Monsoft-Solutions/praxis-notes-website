import Link from 'next/link';
import Image from 'next/image';
import { BookOpen } from 'lucide-react';
import { buttonVariants } from 'website/components/ui/button';

export default function ResourcesHero() {
  return (
    <section className="relative py-16 lg:py-20 overflow-hidden">
      {/* Main background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-yellow-50 to-orange-100"></div>

      {/* Minimal hand-drawn background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          aria-hidden="true"
          className="absolute left-16 top-16 h-12 w-12 rounded-full border-2 border-blue-200 opacity-30 hidden lg:block"
          style={{ transform: 'rotate(0.1deg)' }}
        ></div>
        <div
          aria-hidden="true"
          className="absolute right-20 bottom-16 h-8 w-8 border-2 border-green-200 opacity-25 hidden lg:block"
          style={{
            borderRadius: '14px 18px 12px 16px',
          }}
        ></div>
        <div
          aria-hidden="true"
          className="absolute left-1/4 bottom-12 h-3 w-3 rounded-full bg-orange-300 opacity-40 hidden lg:block"
        ></div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 sm:px-6 relative">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8 lg:space-y-10">
            {/* Badge */}
            <div
              className="relative inline-flex items-center px-5 py-3 bg-white shadow-lg w-fit border-2 border-blue-200"
              style={{ borderRadius: '20px 26px 18px 30px' }}
            >
              {/* Thumb tack */}
              <div className="absolute -top-1.5 left-8 h-3 w-3 rotate-45 transform bg-green-400 shadow-sm"></div>
              <span className="text-sm font-quicksand font-semibold text-blue-600 pt-1">
                <BookOpen className="inline w-4 h-4 mr-2" />
                Expert ABA Knowledge Hub
              </span>
            </div>

            {/* Main content */}
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-quicksand font-bold leading-tight text-gray-800">
                Evidence-Based
                <span className="text-blue-500"> ABA Resources</span>
                <br />
                for Professionals
              </h1>

              <p className="text-lg md:text-xl font-nunito text-gray-600 leading-relaxed max-w-xl">
                Expert guides, research-backed strategies, and practical tools
                to enhance your ABA practice.
              </p>
            </div>

            {/* Single CTA button */}
            <div className="pt-2">
              <Link
                href="#resources"
                className={buttonVariants({
                  variant: 'hero-primary',
                  size: 'lg',
                  radius: 'hero-primary',
                  className: 'px-8',
                })}
                style={{ borderRadius: '16px 20px 14px 18px' }}
              >
                <BookOpen className="mr-2 h-5 w-5" />
                Explore Resources
              </Link>
            </div>
          </div>

          {/* Right side - Featured visual */}
          <div className="relative">
            {/* Main image container */}
            <div
              className="relative bg-white p-3 shadow-lg border-2 border-blue-200"
              style={{ borderRadius: '24px 28px 20px 26px' }}
            >
              {/* Thumb tack */}
              <div className="absolute -top-2 right-8 h-4 w-4 -translate-x-1/2 transform">
                <div className="h-full w-full rounded-full bg-blue-400 shadow-sm"></div>
                <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
              </div>

              <div
                className="relative h-64 lg:h-80 w-full overflow-hidden"
                style={{ borderRadius: '18px 22px 16px 20px' }}
              >
                <Image
                  src="/images/resources-hero.jpg"
                  alt="ABA professionals learning and collaborating"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
