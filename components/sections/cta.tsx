import Link from "next/link";
import { Button } from "website/components/ui/button";
import { ArrowRight, CheckCircle, Clock, Shield, Sparkles } from "lucide-react";

const benefits = [
  { icon: <Clock className="h-5 w-5" />, text: "Save 3+ hours per week" },
  { icon: <CheckCircle className="h-5 w-5" />, text: "Insurance-ready notes" },
  { icon: <Shield className="h-5 w-5" />, text: "HIPAA compliant" },
  { icon: <Sparkles className="h-5 w-5" />, text: "14-day free trial" },
];

const CTA = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Gradient background with better visual appeal */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700"></div>

      {/* Decorative elements */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500 opacity-50 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-500 opacity-50 rounded-full blur-3xl"></div>

      <div className="relative px-4 sm:px-6 mx-auto container max-w-7xl">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
              <div className="lg:col-span-3 space-y-8">
                <div>
                  <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/20 border border-white/30 mb-6">
                    <span className="text-xs font-medium text-white">
                      Limited Time Offer: 20% off Annual Plans
                    </span>
                  </div>

                  <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">
                    Start Writing Better ABA Notes Today
                  </h2>
                  <p className="text-xl text-white/80 md:pr-6">
                    Join 1,000+ RBTs and BCBAs who have eliminated documentation
                    stress with Praxis Note&apos;s AI-powered session notes.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                        {benefit.icon}
                      </div>
                      <span className="text-sm md:text-base font-medium text-white">
                        {benefit.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-2 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-center space-y-6">
                  <div>
                    <p className="text-white/80 mb-1">Start with</p>
                    <h3 className="text-3xl font-bold text-white">
                      14-Day Free Trial
                    </h3>
                    <p className="text-white/80 mt-1">
                      No credit card required
                    </p>
                  </div>

                  <div className="space-y-3">
                    <Link href="/waitlist">
                      <Button
                        size="xl"
                        className="w-full bg-white text-blue-600 hover:bg-white/90 font-semibold"
                      >
                        Get Started Free <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>

                    <Link href="/pricing">
                      <Button
                        variant="outline"
                        size="lg"
                        className="w-full border-white/60 text-white hover:bg-white/10 font-medium"
                      >
                        View Pricing Plans
                      </Button>
                    </Link>
                  </div>

                  <p className="text-sm text-white/70">
                    &quot;I never thought AI could write clinical notes this
                    well. Praxis Note has transformed our workflow.&quot;
                    <span className="block mt-1 font-medium">
                      — Rebecca M., BCBA
                    </span>
                  </p>
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
