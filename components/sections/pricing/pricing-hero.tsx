import Link from 'next/link';
import Image from 'next/image';
import {
  Star,
  Users,
  ShieldCheck,
  CheckCircle,
  ArrowRight,
  DollarSign,
} from 'lucide-react';
import { Button } from 'website/components/ui/button';

export default function PricingHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Main background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-yellow-50 to-orange-100"></div>

      {/* Hand-drawn background decorations */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Floating geometric shapes */}
        <div
          className="absolute left-16 top-32 h-16 w-16 rounded-full border-2 border-blue-200 opacity-20 hidden lg:block"
          style={{ transform: 'rotate(0.1deg)' }}
        ></div>

        <div
          className="absolute right-20 top-40 h-12 w-12 border-2 border-green-200 opacity-25 hidden lg:block"
          style={{
            transform: 'rotate(-0.15deg)',
            borderRadius: '16px 20px 14px 22px',
          }}
        ></div>

        <div
          className="absolute left-1/4 bottom-40 h-10 w-10 border-2 border-orange-200 opacity-30 hidden lg:block"
          style={{
            transform: 'rotate(0.2deg)',
            borderRadius: '14px 18px 12px 20px',
          }}
        ></div>

        <div
          className="absolute right-1/3 bottom-32 h-8 w-8 border-2 border-yellow-200 opacity-25 hidden lg:block"
          style={{
            transform: 'rotate(-0.1deg)',
            borderRadius: '12px 16px 10px 18px',
          }}
        ></div>

        {/* Small decorative dots */}
        <div className="absolute right-1/4 top-1/3 h-3 w-3 rounded-full bg-yellow-300 opacity-40 hidden lg:block"></div>
        <div className="absolute left-1/5 bottom-1/3 h-2 w-2 rounded-full bg-blue-300 opacity-35 hidden lg:block"></div>
        <div className="absolute right-1/5 top-1/4 h-4 w-4 rounded-full bg-green-200 opacity-30 hidden lg:block"></div>
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
                <ShieldCheck className="inline w-4 h-4 mr-2" />
                Start free, pay only for what you need
              </span>
            </div>

            {/* Main content */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-quicksand font-bold leading-tight text-gray-800">
                Invest in Your
                <span className="text-blue-500"> Time</span>
                <br />
                <span className="text-green-500">Simple Pricing</span>
              </h1>

              <p className="text-xl md:text-2xl font-nunito text-gray-600 leading-relaxed max-w-2xl">
                Choose the plan that works best for you and your practice.
                Transparent pricing with no hidden fees, designed to grow with
                your needs.
              </p>
            </div>

            {/* Pricing highlight cards */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {[
                {
                  label: 'Free Trial',
                  value: '10 Notes',
                  color: 'blue',
                },
                {
                  label: 'Individual',
                  value: '$29/mo',
                  color: 'green',
                },
                {
                  label: 'Pro',
                  value: '$39/mo',
                  color: 'orange',
                },
              ].map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white p-4 shadow-md border-2 border-${plan.color}-200 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
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
                      className={`h-2 w-2 rounded-full bg-${plan.color}-400 shadow-sm`}
                    ></div>
                  </div>

                  <div className="pt-2">
                    <div
                      className={`text-2xl font-quicksand font-bold text-${plan.color}-600 mb-1`}
                    >
                      {plan.value}
                    </div>
                    <div className="text-xs font-nunito font-semibold text-gray-700 leading-tight">
                      {plan.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust indicators */}
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              {/* Star rating card */}
              <div
                className="relative bg-white border-2 border-green-200 p-4 shadow-lg"
                style={{
                  borderRadius: '20px 24px 18px 26px',
                }}
              >
                {/* Small square thumb tack */}
                <div className="absolute -top-1.5 right-6 h-3 w-3 rotate-45 transform bg-green-400 shadow-sm"></div>

                <div className="pt-1">
                  <div className="flex items-center space-x-1 mb-2">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 text-yellow-400 fill-current"
                        />
                      ))}
                  </div>
                  <p className="text-sm text-muted-foreground font-nunito font-medium">
                    5,000+ ABA professionals
                  </p>
                </div>
              </div>

              {/* Users card */}
              <div
                className="relative bg-white border-2 border-orange-200 p-4 shadow-lg"
                style={{
                  borderRadius: '22px 18px 24px 20px',
                }}
              >
                {/* Triangle thumb tack */}
                <div className="absolute -top-2 left-6">
                  <div className="h-0 w-0 border-l-2 border-r-2 border-b-4 border-l-transparent border-r-transparent border-b-orange-400"></div>
                </div>

                <div className="pt-1 flex items-center gap-2">
                  <Users className="h-4 w-4 text-orange-400" />
                  <p className="text-sm text-muted-foreground font-nunito font-medium">
                    Trusted by clinics nationwide
                  </p>
                </div>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                variant="hero-primary"
                size="lg"
                radius="hero-secondary"
                className="px-8"
              >
                <Link href="#pricing">
                  <DollarSign className="mr-2 h-5 w-5" />
                  View All Plans
                </Link>
              </Button>

              <Button
                asChild
                variant="hero-secondary"
                size="lg"
                radius="hand-drawn-sm"
                className="px-8"
              >
                <Link href="https://app.praxisnotes.com/auth/sign-up?utm_source=website&utm_medium=cta&utm_campaign=pricing-hero&utm_content=start-now-button">
                  Start Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
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
                  src="/images/pricing-hero.jpg"
                  alt="ABA professionals reviewing transparent pricing plans"
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
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm font-quicksand font-semibold text-gray-700">
                        100% Compliant Notes
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
                <DollarSign className="w-5 h-5 mx-auto mb-1 text-green-600" />
                <div className="text-xs font-quicksand font-semibold text-green-700">
                  Free Start
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
                <ShieldCheck className="w-5 h-5 mx-auto mb-1 text-yellow-600" />
                <div className="text-xs font-quicksand font-semibold text-yellow-700">
                  No Hidden Fees
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
