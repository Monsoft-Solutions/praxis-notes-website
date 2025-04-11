import { Metadata } from "next";
import { Users, CheckCircle, Clock } from "lucide-react";
import WaitlistForm from "website/components/forms/waitlist-form";
import CTAPlain from "website/components/sections/cta-plain";

export const metadata: Metadata = {
  title: "Join Our Waitlist | Praxis Note",
  description:
    "Due to high demand, Praxis Note is currently invitation-only. Join our waitlist to get early access to our AI-powered ABA session notes platform.",
};

export default function WaitlistPage() {
  return (
    <>
      {/* Hero section */}
      <section className="relative pt-20 md:pt-28 overflow-hidden bg-ivory dark:bg-deep-navy">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute right-1/3 top-0 h-96 w-96 -translate-y-1/2 rounded-full bg-soft-blue/10 blur-3xl" />
          <div className="absolute left-1/4 bottom-0 h-96 w-96 translate-y-1/2 rounded-full bg-lavender/10 blur-3xl" />
        </div>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-soft-blue/20 dark:bg-soft-blue/30 text-charcoal dark:text-off-white text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              <span>Limited Availability</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Join Our Waitlist
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed mb-10">
              Due to high demand, Praxis Note is currently invitation-only. Join
              our waitlist to get early access.
            </p>
            <div className="flex justify-center gap-8 mb-4">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-mint-green" />
                <span className="text-sm font-medium text-charcoal dark:text-off-white">
                  We&apos;re inviting new users weekly
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist form and info section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <WaitlistForm />
            </div>

            <div>
              <div className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-gray-200 dark:border-slate-700 h-fit transition-all duration-200 shadow-aba-lg">
                <h2 className="text-2xl font-bold mb-6 text-charcoal dark:text-off-white">
                  Why Join Our Waitlist?
                </h2>

                <div className="space-y-5">
                  <div className="flex gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-mint-green/20 dark:bg-green-900/30 text-mint-green dark:text-green-400 flex-shrink-0 transition-colors duration-200">
                      <CheckCircle className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-charcoal dark:text-off-white">
                        Early Access
                      </h3>
                      <p className="text-muted-foreground">
                        Get access to Praxis Note before it&apos;s available to
                        the general public.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-soft-blue/20 dark:bg-blue-900/30 text-soft-blue dark:text-blue-400 flex-shrink-0 transition-colors duration-200">
                      <CheckCircle className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-charcoal dark:text-off-white">
                        Priority Onboarding
                      </h3>
                      <p className="text-muted-foreground">
                        Receive personalized onboarding and setup assistance
                        from our team.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-lavender/20 dark:bg-indigo-900/30 text-lavender dark:text-indigo-400 flex-shrink-0 transition-colors duration-200">
                      <CheckCircle className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-charcoal dark:text-off-white">
                        Exclusive Discounts
                      </h3>
                      <p className="text-muted-foreground">
                        Waitlist members receive special pricing when invited to
                        join.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-peach/20 dark:bg-orange-900/30 text-peach dark:text-orange-400 flex-shrink-0 transition-colors duration-200">
                      <CheckCircle className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-charcoal dark:text-off-white">
                        Product Input
                      </h3>
                      <p className="text-muted-foreground">
                        Help shape the future of Praxis Note with your valuable
                        feedback.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 mt-8 rounded-lg bg-soft-blue/10 dark:bg-blue-900/20 border border-soft-blue/20 dark:border-blue-800/30 transition-colors duration-200">
                  <p className="text-sm text-charcoal dark:text-slate-200">
                    We&apos;re expanding our user base gradually to ensure the
                    highest quality experience for all users. Thank you for your
                    patience!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-ivory to-soft-gray dark:from-deep-navy dark:to-slate-800">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-charcoal dark:text-off-white">
              What to Expect After Joining
            </h2>
            <p className="text-xl text-muted-foreground">
              Here&apos;s what happens once you submit your waitlist application
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white dark:bg-slate-800 rounded-xl shadow-aba-lg border border-gray-200 dark:border-slate-700 transition-all duration-200">
              <div className="h-14 w-14 rounded-full bg-soft-blue/20 dark:bg-blue-900/30 flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-soft-blue dark:text-blue-400">
                  1
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-charcoal dark:text-off-white">
                Confirmation
              </h3>
              <p className="text-muted-foreground">
                You&apos;ll receive an immediate email confirmation that
                you&apos;ve been added to our waitlist.
              </p>
            </div>

            <div className="p-8 bg-white dark:bg-slate-800 rounded-xl shadow-aba-lg border border-gray-200 dark:border-slate-700 transition-all duration-200">
              <div className="h-14 w-14 rounded-full bg-lavender/20 dark:bg-indigo-900/30 flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-lavender dark:text-indigo-400">
                  2
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-charcoal dark:text-off-white">
                Invitation
              </h3>
              <p className="text-muted-foreground">
                When a spot becomes available, we&apos;ll send you an exclusive
                invitation with signup instructions.
              </p>
            </div>

            <div className="p-8 bg-white dark:bg-slate-800 rounded-xl shadow-aba-lg border border-gray-200 dark:border-slate-700 transition-all duration-200">
              <div className="h-14 w-14 rounded-full bg-mint-green/20 dark:bg-green-900/30 flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-mint-green dark:text-green-400">
                  3
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-charcoal dark:text-off-white">
                Onboarding
              </h3>
              <p className="text-muted-foreground">
                After signup, our team will help you get set up and make the
                most of Praxis Note.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Add CTA section */}
      <CTAPlain
        subtitle="Have questions about the waitlist?"
        description="Our team is ready to assist you with any questions about the onboarding process."
        primaryButtonText="Contact us"
        primaryButtonLink="/contact"
        secondaryButtonText="Learn more"
        secondaryButtonLink="/about"
      />
    </>
  );
}
