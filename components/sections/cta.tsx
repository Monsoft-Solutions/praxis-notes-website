import Link from "next/link";
import { Button } from "website/components/ui/button";
import { ArrowRight, CheckCircle, Clock, Shield, Sparkles } from "lucide-react";

const benefits = [
  { icon: <Clock className="h-5 w-5" />, text: "Save 3+ hours per week" },
  { icon: <CheckCircle className="h-5 w-5" />, text: "Insurance-ready notes" },
  { icon: <Shield className="h-5 w-5" />, text: "HIPAA compliant" },
  { icon: <Sparkles className="h-5 w-5" />, text: "Free forever" },
];

const CTA = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-white dark:bg-gray-900">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-soft-blue to-lavender"></div>

      {/* Decorative elements */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-soft-blue opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-lavender opacity-30 rounded-full blur-3xl"></div>

      <div className="relative px-4 sm:px-6 mx-auto container max-w-7xl bg-card">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
              <div className="lg:col-span-3 space-y-8">
                <div>
                  <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/20 border border-white/30 mb-6">
                    <span className="text-xs font-medium ">
                      Free Forever - No Credit Card Required
                    </span>
                  </div>

                  <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 ">
                    Start Writing Better ABA Notes Today
                  </h2>
                  <p className="text-xl  md:pr-6">
                    Join 1,000+ RBTs and BCBAs who have eliminated documentation
                    stress with Praxis Note&apos;s AI-powered session notes.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full  flex items-center justify-center">
                        {benefit.icon}
                      </div>
                      <span className="text-sm md:text-base font-medium ">
                        {benefit.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-2 bg-white/10 backdrop-blur-sm rounded-xl p-6 border ">
                <div className="text-center space-y-6">
                  <div>
                    <p className=" mb-1">Get Started Now</p>
                    <h3 className="text-3xl font-bold">Free Forever</h3>
                    <p className=" mt-1">No credit card required</p>
                  </div>

                  <div className="space-y-3">
                    <Link href="https://app.praxisnotes.com/auth/sign-up">
                      <Button size="lg" variant="default" className="w-full">
                        Start Now <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>

                  <p className="text-sm ">
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
