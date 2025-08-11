import Link from 'next/link';
import Image from 'next/image';
import {
  BookOpen,
  FileText,
  Users,
  Award,
  Star,
  ArrowRight,
  TrendingUp,
} from 'lucide-react';
import { buttonVariants } from 'website/components/ui/button';

export default function ResourcesHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Main background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-yellow-50 to-orange-100"></div>

      {/* Hand-drawn background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating geometric shapes */}
        <div
          aria-hidden="true"
          className="absolute left-16 top-32 h-16 w-16 rounded-full border-2 border-blue-200 opacity-20 hidden lg:block"
          style={{ transform: 'rotate(0.1deg)' }}
        ></div>

        <div
          aria-hidden="true"
          className="absolute right-20 top-40 h-12 w-12 border-2 border-green-200 opacity-25 hidden lg:block"
          style={{
            transform: 'rotate(-0.15deg)',
            borderRadius: '16px 20px 14px 22px',
          }}
        ></div>

        <div
          aria-hidden="true"
          className="absolute left-1/4 bottom-40 h-10 w-10 border-2 border-orange-200 opacity-30 hidden lg:block"
          style={{
            transform: 'rotate(0.2deg)',
            borderRadius: '14px 18px 12px 20px',
          }}
        ></div>

        <div
          aria-hidden="true"
          className="absolute right-1/3 bottom-32 h-8 w-8 border-2 border-yellow-200 opacity-25 hidden lg:block"
          style={{
            transform: 'rotate(-0.1deg)',
            borderRadius: '12px 16px 10px 18px',
          }}
        ></div>

        {/* Small decorative dots */}
        <div
          aria-hidden="true"
          className="absolute right-1/4 top-1/3 h-3 w-3 rounded-full bg-yellow-300 opacity-40 hidden lg:block"
        ></div>
        <div
          aria-hidden="true"
          className="absolute left-[20%] bottom-1/3 h-2 w-2 rounded-full bg-blue-300 opacity-40 hidden lg:block"
        ></div>
        <div
          aria-hidden="true"
          className="absolute right-[20%] top-1/4 h-4 w-4 rounded-full bg-green-200 opacity-30 hidden lg:block"
        ></div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative pt-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-quicksand font-bold leading-tight text-gray-800">
                Master ABA with
                <span className="text-blue-500"> Evidence-Based</span>
                <br />
                <span className="text-green-500">Resources</span>
              </h1>

              <p className="text-xl md:text-2xl font-nunito text-gray-600 leading-relaxed max-w-2xl">
                Unlock your potential with curated guides, research-backed
                strategies, and practical tools designed by ABA professionals
                for ABA professionals.
              </p>
            </div>

            {/* Stats cards */}
            <div className="grid grid-cols-3 gap-4 lg:gap-6">
              {[
                {
                  icon: FileText,
                  number: '150+',
                  label: 'Expert Articles',
                  color: 'blue',
                  borderClass: 'border-blue-200',
                  iconClass: 'text-blue-500',
                  numberClass: 'text-blue-600',
                  thumbTackClass: 'bg-blue-400',
                },
                {
                  icon: Users,
                  number: '25K+',
                  label: 'Professionals',
                  color: 'green',
                  borderClass: 'border-green-200',
                  iconClass: 'text-green-500',
                  numberClass: 'text-green-600',
                  thumbTackClass: 'bg-green-400',
                },
                {
                  icon: Award,
                  number: '98%',
                  label: 'Success Rate',
                  color: 'orange',
                  borderClass: 'border-orange-200',
                  iconClass: 'text-orange-500',
                  numberClass: 'text-orange-600',
                  thumbTackClass: 'bg-orange-400',
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className={`relative bg-white p-4 shadow-md border-2 ${stat.borderClass} text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
                  style={{
                    borderRadius:
                      index === 0
                        ? '16px 20px 14px 22px'
                        : index === 1
                          ? '18px 14px 20px 16px'
                          : '20px 16px 18px 24px',
                  }}
                >
                  {/* Mini thumb tack */}
                  <div
                    className={`absolute -top-1 ${
                      index === 0
                        ? 'left-1/2 -translate-x-1/2'
                        : index === 1
                          ? 'right-3'
                          : 'left-3'
                    }`}
                  >
                    <div
                      className={`h-2 w-2 rounded-full ${stat.thumbTackClass} shadow-sm`}
                    ></div>
                  </div>

                  <div className="pt-2">
                    <stat.icon
                      className={`w-5 h-5 mx-auto mb-2 ${stat.iconClass}`}
                    />
                    <div
                      className={`text-2xl font-quicksand font-bold ${stat.numberClass} mb-1`}
                    >
                      {stat.number}
                    </div>
                    <div className="text-xs font-nunito text-gray-600 leading-tight">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
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
                <Star className="mr-2 h-5 w-5" />
                Explore Resources
              </Link>

              <Link
                href="/contact"
                className={buttonVariants({
                  variant: 'hero-secondary',
                  size: 'lg',
                  radius: 'hero-secondary',
                  className: 'px-8',
                })}
                style={{ borderRadius: '14px 18px 12px 16px' }}
              >
                Get Expert Help
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Right side - Featured visual */}
          <div className="relative">
            {/* Main image container */}
            <div
              className="relative bg-white p-4 shadow-xl border-2 border-orange-200"
              style={{ borderRadius: '32px 28px 36px 30px' }}
            >
              {/* Thumb tack */}
              <div className="absolute -top-2 right-12 h-4 w-4 -translate-x-1/2 transform">
                <div className="h-full w-full rounded-full bg-orange-400 shadow-sm"></div>
                <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
              </div>

              <div
                className="relative h-80 lg:h-96 w-full overflow-hidden"
                style={{ borderRadius: '24px 20px 28px 22px' }}
              >
                <Image
                  src="/images/resources-hero.jpg"
                  alt="ABA professionals learning and collaborating"
                  fill
                  className="object-cover"
                  priority
                />

                {/* Overlay badge */}
                <div className="absolute bottom-4 left-4">
                  <div
                    className="bg-white/95 backdrop-blur-sm px-3 py-2 shadow-md border border-blue-200"
                    style={{ borderRadius: '12px 16px 10px 14px' }}
                  >
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-green-500" />
                      <span className="text-sm font-quicksand font-semibold text-gray-700">
                        Evidence-Based Learning
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating accent cards */}
            <div
              className="absolute -left-6 top-16 bg-green-100 border-2 border-green-200 p-3 shadow-lg hidden lg:block"
              style={{
                borderRadius: '16px 20px 14px 18px',
                transform: 'rotate(-2deg)',
              }}
            >
              <div className="text-center">
                <BookOpen className="w-5 h-5 mx-auto mb-1 text-green-600" />
                <div className="text-xs font-quicksand font-semibold text-green-700">
                  Research
                </div>
              </div>
            </div>

            <div
              className="absolute -right-4 bottom-20 bg-yellow-100 border-2 border-yellow-200 p-3 shadow-lg hidden lg:block"
              style={{
                borderRadius: '14px 18px 12px 16px',
                transform: 'rotate(1.5deg)',
              }}
            >
              <div className="text-center">
                <Star className="w-5 h-5 mx-auto mb-1 text-yellow-600" />
                <div className="text-xs font-quicksand font-semibold text-yellow-700">
                  Quality
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
