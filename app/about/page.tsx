import { Metadata } from "next";
import {
  CheckCircle2,
  Clock,
  FileText,
  Shield,
  Star,
  Users,
} from "lucide-react";
import CTA from "website/components/sections/cta";

export const metadata: Metadata = {
  title: "About Us | Praxis Note",
  description:
    "Learn about Praxis Note - our mission is to help ABA professionals focus on therapy, not paperwork.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero section with mission statement */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute right-1/3 top-0 h-96 w-96 -translate-y-1/2 rounded-full bg-blue-400/10 blur-3xl" />
          <div className="absolute left-1/4 bottom-0 h-96 w-96 translate-y-1/2 rounded-full bg-purple-400/10 blur-3xl" />
        </div>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative">
          <div className="flex items-center justify-center w-16 h-16 mb-8 rounded-full bg-blue-100 dark:bg-blue-900/30 mx-auto">
            <FileText className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Our Mission
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed mb-10">
              Helping ABA professionals{" "}
              <span className="text-blue-600 dark:text-blue-400 font-semibold">
                focus on therapy
              </span>
              , not paperwork.
            </p>
            <div className="inline-flex items-center justify-center px-6 py-3 bg-white dark:bg-gray-800 shadow-lg rounded-full">
              <div className="flex items-center space-x-2 text-sm font-medium">
                <div className="flex -space-x-1.5">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-7 h-7 rounded-full flex items-center justify-center border-2 border-white dark:border-gray-800 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900"
                    >
                      <span className="text-xs">P{i}</span>
                    </div>
                  ))}
                </div>
                <span>
                  Trusted by <span className="font-bold">3,500+</span> ABA
                  professionals
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story section with metrics */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
                <Star className="w-4 h-4" />
                <span>Our Journey</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg mb-6 text-muted-foreground">
                Praxis Note was born from frustration. As ABA therapists
                ourselves, we spent countless evenings writing session notes,
                taking time away from our families and personal lives.
              </p>
              <div className="p-4 border border-blue-100 dark:border-blue-900 rounded-lg bg-blue-50/50 dark:bg-blue-900/20 mb-6">
                <p className="text-lg italic text-muted-foreground">
                  &ldquo;After talking with hundreds of fellow RBTs and BCBAs,
                  we discovered that documentation was the{" "}
                  <span className="font-semibold text-blue-600 dark:text-blue-400">
                    number one pain point
                  </span>{" "}
                  for most professionals in our field.&rdquo;
                </p>
              </div>
              <p className="text-lg mb-6 text-muted-foreground">
                We assembled a team of ABA experts and software engineers to
                create a tool that would make session notes fast, accurate, and
                compliant. After months of development and testing, Praxis Note
                was born.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, we&apos;re proud to help thousands of ABA professionals
                reclaim their time while maintaining the high documentation
                standards required for quality care and insurance compliance.
              </p>
              <div className="grid grid-cols-3 gap-4 mt-10">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                    5000+
                  </div>
                  <div className="text-sm text-muted-foreground">Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                    60%
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Time Saved
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                    99.9%
                  </div>
                  <div className="text-sm text-muted-foreground">Uptime</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 rounded-2xl transform rotate-3 scale-105"></div>
              <div className="rounded-xl overflow-hidden shadow-2xl border border-blue-100 dark:border-blue-800">
                <div className="aspect-square md:aspect-[4/3] w-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 flex items-center justify-center p-4">
                  <div className="w-full max-w-md mx-auto space-y-4">
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        <h3 className="font-medium">Before Praxis Note</h3>
                      </div>
                      <div className="pl-4 space-y-2">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                          <span>2+ hours on session notes</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                          <span>Weekend documentation backlogs</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                          <span>Compliance anxiety</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                        <h3 className="font-medium">With Praxis Note</h3>
                      </div>
                      <div className="pl-4 space-y-2">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                          <span>Notes completed in 15 minutes</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                          <span>More time with clients and family</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                          <span>100% compliant documentation</span>
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

      {/* Values section */}
      <section className="py-16 md:py-24 relative bg-gradient-to-b from-white to-blue-50 dark:from-gray-950 dark:to-blue-950">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <svg
            className="absolute right-0 top-0 h-72 w-72 -translate-y-1/4 translate-x-1/4 transform text-blue-600/10 opacity-20"
            fill="none"
            viewBox="0 0 72 72"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M36 28.5a7.5 7.5 0 100-15 7.5 7.5 0 000 15zm0 0v21m-13.5 0h27"
            />
          </svg>
          <svg
            className="absolute left-0 bottom-0 h-72 w-72 translate-y-1/4 -translate-x-1/4 transform text-blue-600/10 opacity-20"
            fill="none"
            viewBox="0 0 72 72"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M36 28.5a7.5 7.5 0 100-15 7.5 7.5 0 000 15zm0 0v21m-13.5 0h27"
            />
          </svg>
        </div>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
              <Star className="w-4 h-4" />
              <span>What We Stand For</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we build and every decision
              we make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-xl hover:shadow-2xl transition-shadow border border-blue-100 dark:border-blue-900/50 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-100 dark:bg-blue-900/20 rounded-bl-full z-0 transition-transform duration-300 group-hover:scale-110"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-blue-50 dark:bg-blue-900/30 mb-6">
                  <Users className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">Client-Centered</h3>
                <p className="text-muted-foreground mb-4">
                  We build tools that help therapists spend more time with
                  clients and less time on paperwork.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">
                      Designed by ABA professionals
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Focus on clinical outcomes</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-xl hover:shadow-2xl transition-shadow border border-blue-100 dark:border-blue-900/50 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-100 dark:bg-blue-900/20 rounded-bl-full z-0 transition-transform duration-300 group-hover:scale-110"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-blue-50 dark:bg-blue-900/30 mb-6">
                  <Shield className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">Security First</h3>
                <p className="text-muted-foreground mb-4">
                  We treat your client data with the utmost care, implementing
                  the highest security standards.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">
                      HIPAA compliant infrastructure
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">End-to-end encryption</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-xl hover:shadow-2xl transition-shadow border border-blue-100 dark:border-blue-900/50 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-100 dark:bg-blue-900/20 rounded-bl-full z-0 transition-transform duration-300 group-hover:scale-110"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-blue-50 dark:bg-blue-900/30 mb-6">
                  <Star className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  Continuous Innovation
                </h3>
                <p className="text-muted-foreground mb-4">
                  We&apos;re constantly improving our technology to provide the
                  best possible experience.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Regular feature updates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Driven by user feedback</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team section */}
      {/* <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              <span>Meet Our Team</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The People Behind Praxis Note</h2>
            <p className="text-xl text-muted-foreground">
              A diverse team of ABA professionals and software engineers dedicated to transforming documentation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {["Sarah Johnson, BCBA", "Michael Chen, RBT", "Jennifer Smith, Ph.D.", "David Miller, CTO"].map((person, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 p-1 rounded-xl shadow-lg group">
                <div className="bg-white dark:bg-gray-900 rounded-lg p-6 h-full flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 mb-4 flex items-center justify-center">
                    <span className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                      {person.split(" ")[0][0]}{person.split(" ")[1][0]}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg mb-1">{person.split(",")[0]}</h3>
                  <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-3">{person.split(", ")[1]}</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Passionate about improving ABA therapy through better tools and workflows.
                  </p>
                  <div className="flex space-x-3 mt-auto">
                    {["", "", ""].map((_, i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
                        <div className="w-4 h-4 text-blue-600 dark:text-blue-400">•</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <CTA />
    </>
  );
}
