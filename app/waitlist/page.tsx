import { Metadata } from "next";
import { Button } from "website/components/ui/button";
import { Users, CheckCircle, ArrowRight, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Join Our Waitlist | Praxis Note",
  description:
    "Due to high demand, Praxis Note is currently invitation-only. Join our waitlist to get early access to our AI-powered ABA session notes platform.",
};

export default function WaitlistPage() {
  return (
    <>
      <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute right-1/3 top-0 h-96 w-96 -translate-y-1/2 rounded-full bg-blue-400/10 blur-3xl" />
          <div className="absolute left-1/4 bottom-0 h-96 w-96 translate-y-1/2 rounded-full bg-purple-400/10 blur-3xl" />
        </div>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              <span>Limited Availability</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Join Our Waitlist
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Due to high demand, Praxis Note is currently invitation-only. 
              Join our waitlist to get early access.
            </p>
            <div className="flex justify-center gap-8 mb-4">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-green-500" />
                <span className="text-sm font-medium">
                  We&apos;re inviting new users weekly
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <form className="p-8 border border-blue-100 dark:border-blue-900/50 rounded-xl shadow-lg bg-white dark:bg-gray-900 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium mb-2"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-2 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      placeholder="Your first name"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium mb-2"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-2 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                      placeholder="Your last name"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="organization"
                    className="block text-sm font-medium mb-2"
                  >
                    Organization (Optional)
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    className="w-full px-4 py-2 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    placeholder="Your company or organization"
                  />
                </div>

                <div>
                  <label
                    htmlFor="role"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Role
                  </label>
                  <select
                    id="role"
                    name="role"
                    className="w-full px-4 py-2 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    required
                  >
                    <option value="">Select your role</option>
                    <option value="BCBA">BCBA/BCaBA</option>
                    <option value="RBT">RBT</option>
                    <option value="Clinic Owner">ABA Clinic Owner</option>
                    <option value="Administrator">Administrator</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="interest"
                    className="block text-sm font-medium mb-2"
                  >
                    Why are you interested in Praxis Note?
                  </label>
                  <textarea
                    id="interest"
                    name="interest"
                    rows={4}
                    className="w-full px-4 py-2 rounded-md border border-input bg-background resize-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    placeholder="Tell us about your needs and how Praxis Note could help you..."
                    required
                  />
                </div>

                <div className="flex items-start px-4 py-3 rounded-lg bg-blue-50 dark:bg-blue-900/20">
                  <input
                    type="checkbox"
                    id="newsletter"
                    name="newsletter"
                    className="mt-1 mr-2"
                    defaultChecked
                  />
                  <label htmlFor="newsletter" className="text-sm">
                    Subscribe to our newsletter for product updates and
                    resources for ABA professionals
                  </label>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    type="submit"
                    variant="gradient"
                    size="lg"
                    className="w-full sm:w-auto"
                  >
                    Join Waitlist <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </form>
            </div>

            <div className="p-1 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl">
              <div className="bg-white dark:bg-gray-900 p-8 rounded-lg space-y-6 h-fit">
                <h2 className="text-2xl font-bold">Why Join Our Waitlist?</h2>
                
                <div className="space-y-5 mt-6">
                  <div className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">Early Access</h3>
                      <p className="text-sm text-muted-foreground">
                        Get access to Praxis Note before it&apos;s available to the general public.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">Priority Onboarding</h3>
                      <p className="text-sm text-muted-foreground">
                        Receive personalized onboarding and setup assistance from our team.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">Exclusive Discounts</h3>
                      <p className="text-sm text-muted-foreground">
                        Waitlist members receive special pricing when invited to join.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">Product Input</h3>
                      <p className="text-sm text-muted-foreground">
                        Help shape the future of Praxis Note with your valuable feedback.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 mt-6">
                  <p className="text-sm">
                    We&apos;re expanding our user base gradually to ensure the highest quality experience for all users. 
                    Thank you for your patience!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What to Expect After Joining
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              Here&apos;s what happens once you submit your waitlist application
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
                <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-blue-600 dark:text-blue-400">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Confirmation</h3>
                <p className="text-muted-foreground">
                  You&apos;ll receive an immediate email confirmation that you&apos;ve been added to our waitlist.
                </p>
              </div>

              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
                <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-blue-600 dark:text-blue-400">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Invitation</h3>
                <p className="text-muted-foreground">
                  When a spot becomes available, we&apos;ll send you an exclusive invitation with signup instructions.
                </p>
              </div>

              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
                <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-blue-600 dark:text-blue-400">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Onboarding</h3>
                <p className="text-muted-foreground">
                  After signup, our team will help you get set up and make the most of Praxis Note.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}