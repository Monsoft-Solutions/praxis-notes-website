import Link from 'next/link';
import { Button } from 'website/components/ui/button';
import { ArrowRight, CheckCircle, Sparkles } from 'lucide-react';
import { cn } from 'website/lib/utils';
import Image from 'next/image';

type CTAPlainProps = {
  subtitle?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  className?: string;
};

const CTAPlain = ({
  subtitle = 'Join our growing community of ABA professionals.',
  description = 'Experience the power of AI-assisted documentation and focus on what matters most - your clients.',
  primaryButtonText = 'Get started for free',
  primaryButtonLink = 'https://app.praxisnotes.com/auth/sign-up',
  secondaryButtonText = 'Learn about pricing',
  secondaryButtonLink = '/pricing',
  className = '',
}: CTAPlainProps) => {
  return (
    <section
      className={cn('py-16 md:py-24 relative overflow-hidden', className)}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-green-50 to-yellow-50"></div>

      {/* Hand-drawn background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large decorative shapes */}
        <div
          className="absolute left-16 top-20 h-24 w-24 rounded-full border-2 border-blue-200 opacity-25 hidden sm:block"
          style={{ transform: 'rotate(0.2deg)' }}
        ></div>

        <div
          className="absolute right-20 top-1/3 h-20 w-20 border-2 border-orange-200 opacity-30 hidden sm:block"
          style={{
            transform: 'rotate(-0.15deg)',
            borderRadius: '22px 28px 20px 32px',
          }}
        ></div>

        <div
          className="absolute left-1/4 bottom-32 h-16 w-16 border-2 border-green-200 opacity-25 hidden sm:block"
          style={{
            transform: 'rotate(0.3deg)',
            borderRadius: '18px 24px 16px 26px',
          }}
        ></div>

        {/* Small decorative dots */}
        <div className="absolute right-1/3 bottom-40 h-3 w-3 rounded-full bg-yellow-200 opacity-40 hidden sm:block"></div>
        <div className="absolute left-1/3 top-1/4 h-2 w-2 rounded-full bg-blue-200 opacity-50 hidden sm:block"></div>
        <div className="absolute right-1/4 top-2/3 h-2 w-2 rounded-full bg-orange-200 opacity-45 hidden sm:block"></div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 sm:px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            {/* Main CTA Card */}
            <div
              className="relative bg-white shadow-2xl border-2 border-blue-200 p-8 lg:p-12"
              style={{
                borderRadius: '35px 28px 32px 25px',
              }}
            >
              {/* Thumb tack */}
              <div className="absolute -top-2 left-12 h-5 w-5 -translate-x-1/2 transform">
                <div className="h-full w-full rounded-full bg-blue-400 shadow-md"></div>
                <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
              </div>

              <div className="pt-4 text-center lg:text-left">
                {/* Badge */}
                <div
                  className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 mb-6"
                  style={{ borderRadius: '16px 20px 14px 22px' }}
                >
                  <Sparkles className="w-4 h-4 mr-2 text-blue-500" />
                  <span className="text-sm font-quicksand font-semibold text-blue-600">
                    Ready to Get Started?
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-quicksand font-bold mb-6 text-gray-800">
                  {subtitle}
                </h2>

                <p className="text-lg md:text-xl font-nunito text-gray-600 mb-8 leading-relaxed">
                  {description}
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href={primaryButtonLink}>
                    <Button
                      variant="cta-primary"
                      size="cta-default"
                      radius="cta-primary"
                    >
                      <CheckCircle className="mr-2 h-5 w-5" />
                      {primaryButtonText}
                    </Button>
                  </Link>

                  {secondaryButtonText && (
                    <Link href={secondaryButtonLink}>
                      <Button
                        variant="cta-secondary"
                        size="cta-default"
                        radius="cta-secondary"
                      >
                        {secondaryButtonText}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                  )}
                </div>

                {/* Trust indicators */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 text-sm text-gray-600 font-nunito">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      <span>No credit card required</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                      <span>14-day free trial</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-orange-400"></div>
                      <span>Cancel anytime</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="flex justify-center lg:justify-end">
            <div
              className="relative bg-white shadow-xl border-2 border-green-200 p-6"
              style={{
                borderRadius: '28px 35px 25px 30px',
              }}
            >
              {/* Different thumb tack style */}
              <div className="absolute -top-1.5 right-8 h-4 w-4 rotate-45 transform bg-green-400 shadow-sm"></div>

              <div className="pt-2">
                <div className=" rounded-xl overflow-hidden">
                  <Image
                    src="/images/therapist-playing-with-kid.png"
                    alt="Happy ABA therapy session with positive outcomes"
                    width={400}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom testimonial/social proof */}
        <div className="mt-16 text-center">
          <div
            className="relative bg-yellow-50 shadow-lg border-2 border-yellow-200 p-6 max-w-4xl mx-auto"
            style={{
              borderRadius: '30px 25px 35px 22px',
            }}
          >
            {/* Thumb tack */}
            <div className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 transform">
              <div className="h-full w-full rounded-full bg-yellow-400 shadow-sm"></div>
              <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-700"></div>
            </div>

            <div className="pt-2">
              <p className="text-lg font-quicksand font-semibold text-gray-800 mb-2">
                &ldquo;Praxis Notes has saved me 15+ hours per week on
                documentation. Now I can focus on what I love - helping my
                clients grow.&rdquo;
              </p>
              <p className="text-sm font-nunito text-gray-600">
                - Sarah M., BCBA • Miami Children&apos;s Therapy Center
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAPlain;
