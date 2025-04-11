import { Metadata } from "next";
import Image from "next/image";
import {
  BookOpenText,
  Brain,
  Heart,
  LineChart,
  PencilRuler,
  Puzzle,
} from "lucide-react";
import CTAPlain from "website/components/sections/cta-plain";
import {
  ComparisonBox,
  InfoBox,
  TeamCard,
  ValueCard,
} from "website/components/sections/cards";

export const metadata: Metadata = {
  title: "About Us | Praxis Notes",
  description:
    "Learn about Praxis Notes - our mission is to help ABA professionals focus on therapy, not paperwork.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero section with mission statement */}
      <section className="relative pt-20 md:pt-28 overflow-hidden bg-ivory dark:bg-deep-navy">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute right-1/3 top-0 h-96 w-96 -translate-y-1/2 rounded-full bg-soft-blue/10 blur-3xl" />
          <div className="absolute left-1/4 bottom-0 h-96 w-96 translate-y-1/2 rounded-full bg-lavender/10 blur-3xl" />
        </div>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Story</h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed mb-10">
              A story of tools and the future of ABA documentation
            </p>
          </div>
        </div>
      </section>

      {/* Our Story section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="mb-4">
              Praxis Notes was born from our team&apos;s 30+ years of combined
              experience in ABA therapy. We&apos;ve felt the pain of
              documentation firsthand.
            </p>
            <p>
              But that&apos;s just the beginning. We know today&apos;s
              <strong>documentation crisis</strong> is a symptom of a bigger
              challenge: our field needs technology built specifically for our
              work.
            </p>

            <div className="my-12 relative aspect-square rounded-xl overflow-hidden shadow-md border border-soft-blue/20">
              <Image
                src="/images/illustrations/aba-specilist-illustration.jpg"
                alt="ABA professional working on documentation"
                fill
                className="object-cover m-0"
              />
            </div>

            <p>
              You probably have fifteen tabs open: one for session notes, one
              for graphs, one for program modifications, and on, and on&hellip;
              But have you ever thought about where these &ldquo;ABA
              tools&rdquo; came from? Or why there are so many of them?
            </p>

            <p>
              The short answer: they&apos;re digital copies of paper forms from
              the 1960s.
            </p>

            <div className="my-12 relative aspect-square rounded-xl overflow-hidden shadow-md border border-soft-blue/20">
              <Image
                src="/images/illustrations/professional-too-much-work.jpg"
                alt="Professional too much work"
                fill
                className="object-cover m-0"
              />
            </div>

            <p className="mb-0">
              As ABA therapy became more widely adopted, documentation
              requirements grew exponentially. Therapists found themselves
              spending 1-2 hours writing notes for each hour of therapy
              provided.
            </p>

            <p>Then something magical happened in recent years!</p>

            <p>
              A generation of tech-savvy ABA professionals saw the potential for
              technology to amplify clinical effectiveness, augment data
              collection, and expand our ability to deliver high-quality
              services far beyond what was possible with paper and traditional
              tools.
            </p>

            <ComparisonBox
              title="The Traditional Approach"
              className="my-12"
              items={[
                {
                  text: "Generic notes templates that don't fit ABA needs",
                  type: "negative",
                },
                {
                  text: "Hours spent writing detailed behavioral observations",
                  type: "negative",
                },
                {
                  text: "Disconnected systems for session notes and data collection",
                  type: "negative",
                },
              ]}
            />

            <p>
              At Praxis Notes, we&apos;re designing for what ABA documentation
              <em>should</em> be—not just digitizing what it has been.
            </p>

            <div className="my-12 relative aspect-square rounded-xl overflow-hidden shadow-md border border-soft-blue/20">
              <Image
                src="/images/illustrations/an-aba-specialist-wokring-with-smart-solutions.jpg"
                alt="An ABA specialist working with smart solutions"
                fill
                className="object-cover m-0"
              />
            </div>

            <p>
              As a first step, we are blending clinical knowledge, behavioral
              expertise, and smart technology into an{" "}
              <strong>all-in-one workspace</strong>. Want session notes that
              write themselves? Data analysis that shows trends automatically?
              Program modifications with built-in versioning? They are now all
              in one place.
            </p>

            <ComparisonBox
              title="The Praxis Notes Approach"
              className="my-12"
              bgColor="bg-mint-green/10"
              items={[
                {
                  text: "ABA-specific templates with smart completion",
                  type: "positive",
                },
                {
                  text: "Complete notes in minutes, not hours",
                  type: "positive",
                },
                {
                  text: "Seamless integration of data and narrative reporting",
                  type: "positive",
                },
              ]}
            />

            <InfoBox textCenter className="my-12 p-8">
              <p className="text-xl font-semibold italic mb-4">
                &ldquo;The best way to predict the future is to invent
                it.&rdquo;
              </p>
              <p className="text-muted-foreground">
                - Alan Kay, computing pioneer
              </p>
            </InfoBox>
          </div>
        </div>
      </section>

      {/* Join Us section */}
      <section className="py-16 md:py-24 bg-ivory dark:bg-deep-navy">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Us</h2>
            <p className="text-xl text-muted-foreground">
              Praxis Notes is based in Miami, FL. We are a diverse group of
              people interested in ABA, education, technology, and making a
              difference in how behavioral therapy is documented and delivered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="w-8 h-8 text-soft-blue" />,
                title: "Behavioral Expertise",
                description:
                  "Our team includes BCBAs and RBTs who understand the daily challenges of ABA documentation.",
              },
              {
                icon: <PencilRuler className="w-8 h-8 text-lavender" />,
                title: "Design Focus",
                description:
                  "We create calming, intuitive interfaces that reduce cognitive load for busy practitioners.",
              },
              {
                icon: <Puzzle className="w-8 h-8 text-mint-green" />,
                title: "Innovation Mindset",
                description:
                  "We&apos;re constantly exploring new ways to solve the documentation challenges in ABA.",
              },
            ].map((item, index) => (
              <TeamCard
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">
              Interested in joining us? Learn more about our career
              opportunities.
            </p>
            <a
              href="/careers"
              className="inline-flex items-center justify-center px-6 py-3 bg-soft-blue text-charcoal rounded-lg font-medium hover:bg-soft-blue/90 transition-colors"
            >
              View Open Positions
            </a>
          </div>
        </div>
      </section>

      {/* Press section */}
      {/* <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">In the News</h2>
            <p className="text-xl text-muted-foreground">
              Just a few of the stories about Praxis Notes in the tech and
              business press.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center">
            {[
              "Forbes",
              "Fast Company",
              "TechCrunch",
              "The New York Times",
              "The Wall Street Journal",
              "The Verge",
            ].map((publication, index) => (
              <div key={index} className="text-center">
                <div className="text-xl md:text-2xl font-bold text-muted-foreground">
                  {publication}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Values section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-ivory to-soft-gray dark:from-deep-navy dark:to-steel-blue">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we build and every decision
              we make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="w-8 h-8 text-light-pink" />,
                title: "Client-Centered",
                description:
                  "We build tools that help therapists spend more time with clients and less time on paperwork.",
                points: [
                  "Designed by ABA professionals",
                  "Focus on clinical outcomes",
                ],
              },
              {
                icon: <LineChart className="w-8 h-8 text-soft-blue" />,
                title: "Data-Driven",
                description:
                  "We believe in the power of data to inform treatment decisions and demonstrate progress.",
                points: ["Automatic data analysis", "Visual progress tracking"],
              },
              {
                icon: <BookOpenText className="w-8 h-8 text-lavender" />,
                title: "Continuous Learning",
                description:
                  "We&apos;re constantly learning from our users and the latest research in behavioral science.",
                points: ["Regular feature updates", "Evidence-based approach"],
              },
            ].map((value, index) => (
              <ValueCard
                key={index}
                icon={value.icon}
                title={value.title}
                description={value.description}
                points={value.points}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Add CTAPlain section here */}
      <CTAPlain
        subtitle="Join our growing community of ABA professionals."
        description="Experience the power of AI-assisted documentation and focus on what matters most - your clients."
        primaryButtonText="Get started for free"
        secondaryButtonText="Learn about pricing"
        secondaryButtonLink="/pricing"
      />
    </>
  );
}
