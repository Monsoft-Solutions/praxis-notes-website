import Link from 'next/link';
import { Button } from 'website/components/ui/button';
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Shield,
  Sparkles,
  Quote,
  Star,
} from 'lucide-react';

const benefits = [
  {
    icon: <Clock className="h-5 w-5" />,
    text: 'Save 3+ hours per week',
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-100',
    borderColor: 'border-blue-200',
  },
  {
    icon: <CheckCircle className="h-5 w-5" />,
    text: 'Insurance-ready notes',
    iconColor: 'text-green-600',
    iconBg: 'bg-green-100',
    borderColor: 'border-green-200',
  },
  {
    icon: <Shield className="h-5 w-5" />,
    text: 'HIPAA compliant',
    iconColor: 'text-orange-600',
    iconBg: 'bg-orange-100',
    borderColor: 'border-orange-200',
  },
  {
    icon: <Sparkles className="h-5 w-5" />,
    text: 'Free forever',
    iconColor: 'text-yellow-700',
    iconBg: 'bg-yellow-100',
    borderColor: 'border-yellow-300',
  },
];

const CTA = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Seamless background transition from Pricing */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-50/80 via-yellow-50/60 to-blue-50/40"></div>

      {/* Subtle transition overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-green-50/20"></div>

      {/* Hand-drawn background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large decorative shapes */}
        <div
          className="absolute left-10 top-20 h-32 w-32 rounded-full border-2 border-blue-300 opacity-20 hidden sm:block"
          style={{ transform: 'rotate(0.3deg)' }}
        ></div>

        <div
          className="absolute right-16 top-1/4 h-24 w-24 border-2 border-orange-300 opacity-25 hidden sm:block"
          style={{
            transform: 'rotate(-0.2deg)',
            borderRadius: '25px 35px 22px 40px',
          }}
        ></div>

        <div
          className="absolute left-1/4 bottom-20 h-20 w-20 border-2 border-green-300 opacity-30 hidden sm:block"
          style={{
            transform: 'rotate(0.4deg)',
            borderRadius: '20px 28px 18px 32px',
          }}
        ></div>

        {/* Scattered dots */}
        <div className="absolute right-1/3 bottom-40 h-4 w-4 rounded-full bg-yellow-300 opacity-40 hidden sm:block"></div>
        <div className="absolute left-1/3 top-1/3 h-3 w-3 rounded-full bg-blue-300 opacity-50 hidden sm:block"></div>
        <div className="absolute right-1/4 top-2/3 h-2 w-2 rounded-full bg-orange-300 opacity-45 hidden sm:block"></div>
        <div className="absolute left-1/5 bottom-1/3 h-3 w-3 rounded-full bg-green-300 opacity-40 hidden sm:block"></div>
      </div>

      <div className="relative py-20 md:py-28 px-4 sm:px-6 mx-auto container max-w-7xl">
        <div className="max-w-6xl mx-auto">
          <div
            className="relative bg-white/95 backdrop-blur-sm border-2 border-blue-200 border-dashed shadow-2xl overflow-visible"
            style={{
              borderRadius: '40px 50px 35px 55px',
              transform: 'rotate(-0.1deg)',
            }}
          >
            {/* Large decorative thumb tack */}
            <div className="absolute -top-4 left-1/2 h-8 w-8 -translate-x-1/2 transform z-10">
              <div className="h-full w-full rounded-full bg-blue-400 shadow-lg"></div>
              <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
            </div>

            {/* Corner thumb tacks */}
            <div className="absolute -top-2 right-12 h-5 w-5 rotate-45 transform bg-green-400 shadow-lg z-10"></div>
            <div className="absolute -top-3 left-12 z-10">
              <div className="h-0 w-0 border-l-[8px] border-r-[8px] border-b-[10px] border-l-transparent border-r-transparent border-b-orange-400"></div>
            </div>

            <div className="p-8 md:p-12 pt-16">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
                <div className="lg:col-span-3 space-y-8">
                  {/* Badge */}
                  <div
                    className="inline-flex items-center px-6 py-3 bg-white/90 backdrop-blur-sm border-2 border-green-300 shadow-lg relative"
                    style={{
                      borderRadius: '18px 25px 16px 28px',
                      transform: 'rotate(0.1deg)',
                    }}
                  >
                    {/* Small thumb tack */}
                    <div className="absolute -top-1.5 right-4 h-3 w-3 rotate-45 transform bg-green-400 shadow-sm"></div>

                    <Sparkles className="h-4 w-4 text-green-600 mr-2" />
                    <span className="text-sm font-quicksand font-bold text-green-700">
                      Free Forever - No Credit Card Required
                    </span>
                  </div>

                  <div>
                    <h2
                      className="text-4xl md:text-6xl font-quicksand font-bold tracking-tight mb-6 text-gray-900 leading-tight"
                      style={{
                        textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
                      }}
                    >
                      Start Writing Better
                      <br />
                      <span className="text-blue-600">ABA Notes Today</span>
                    </h2>

                    <p className="text-xl md:text-2xl font-nunito text-gray-700 leading-relaxed">
                      Join 1,000+ RBTs and BCBAs who have eliminated
                      documentation stress with Praxis Notes&apos;s AI-powered
                      session notes.
                    </p>
                  </div>

                  {/* Benefits grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {benefits.map((benefit, index) => (
                      <div
                        key={index}
                        className={`flex items-center space-x-4 p-4 bg-white/80 backdrop-blur-sm border-2 ${benefit.borderColor} border-dashed shadow-md transition-all duration-300 hover:scale-105`}
                        style={{
                          borderRadius: '15px 20px 12px 18px',
                          transform:
                            index % 2 === 0
                              ? 'rotate(-0.1deg)'
                              : 'rotate(0.1deg)',
                        }}
                      >
                        <div
                          className={`flex-shrink-0 w-10 h-10 rounded-full ${benefit.iconBg} ${benefit.iconColor} border-2 ${benefit.borderColor} flex items-center justify-center shadow-sm`}
                        >
                          {benefit.icon}
                        </div>
                        <span className="text-base font-nunito font-medium text-gray-800">
                          {benefit.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Card */}
                <div className="lg:col-span-2">
                  <div
                    className="relative bg-white/90 backdrop-blur-sm border-2 border-orange-200 shadow-xl overflow-visible"
                    style={{
                      borderRadius: '32px 40px 28px 45px',
                      transform: 'rotate(0.2deg)',
                    }}
                  >
                    {/* CTA card thumb tack */}
                    <div className="absolute -top-3 left-1/2 h-5 w-5 -translate-x-1/2 transform z-10">
                      <div className="h-full w-full rounded-full bg-orange-400 shadow-lg"></div>
                      <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
                    </div>

                    <div className="p-8 pt-10">
                      <div className="text-center space-y-6">
                        <div>
                          <p className="font-nunito text-gray-600 mb-2">
                            Get Started Now
                          </p>
                          <h3 className="text-4xl font-quicksand font-bold text-gray-900">
                            Free Forever
                          </h3>
                          <p className="font-nunito text-gray-600 mt-2">
                            No credit card required
                          </p>
                        </div>

                        <div className="space-y-4">
                          <Link href="https://app.praxisnotes.com/auth/sign-up">
                            <Button
                              variant="warning"
                              size="xl"
                              radius="hero-primary"
                              className="w-full"
                            >
                              Start Now <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                          </Link>
                        </div>

                        {/* Testimonial */}
                        <div
                          className="relative p-6 bg-blue-50/80 backdrop-blur-sm border-2 border-blue-200 border-dashed"
                          style={{
                            borderRadius: '20px 28px 18px 32px',
                          }}
                        >
                          {/* Small decorative thumb tack */}
                          <div className="absolute -top-1.5 right-6 h-3 w-3 rotate-45 transform bg-blue-400 shadow-sm"></div>

                          <Quote className="h-5 w-5 text-blue-400 mb-3 mx-auto" />

                          <p className="text-sm font-nunito text-gray-700 italic leading-relaxed">
                            &quot;I never thought AI could write clinical notes
                            this well. Praxis Notes has transformed our
                            workflow.&quot;
                          </p>

                          <div className="flex items-center justify-center mt-4 gap-2">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className="w-3 h-3 text-yellow-500 fill-current"
                                />
                              ))}
                            </div>
                            <span className="text-xs font-quicksand font-bold text-gray-600">
                              — Rebecca M., BCBA
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
