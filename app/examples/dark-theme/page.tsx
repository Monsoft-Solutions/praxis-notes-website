import { Metadata } from "next";
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
  DarkComparisonBox,
  DarkInfoBox,
  DarkSection,
  DarkTeamCard,
  DarkValueCard,
} from "website/components/sections/dark-cards";

export const metadata: Metadata = {
  title: "Dark Theme Example | Praxis Notes",
  description: "An example of our dark-themed components",
};

export default function DarkThemeExamplePage() {
  return (
    <>
      {/* Dark Hero section */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute right-1/3 top-0 h-96 w-96 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="absolute left-1/4 bottom-0 h-96 w-96 translate-y-1/2 rounded-full bg-purple-500/10 blur-3xl" />
        </div>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Dark Theme Components
            </h1>
            <p className="text-xl md:text-2xl text-white/70 font-medium leading-relaxed mb-10">
              A showcase of our custom dark-themed components
            </p>
          </div>
        </div>
      </section>

      {/* Dark Info Boxes */}
      <DarkSection
        title="Dark Info Boxes"
        subtitle="Clean, modern information boxes with dark theme styling"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <DarkInfoBox title="Key Documentation Features">
            <p className="mb-0">
              Our AI-assisted documentation helps ABA therapists complete their
              notes in minutes, not hours, with smart templates and automatic
              data integration.
            </p>
          </DarkInfoBox>

          <DarkInfoBox textCenter>
            <p className="text-xl font-semibold italic mb-4">
              &ldquo;Praxis Notes has transformed how we document ABA therapy
              sessions. It&apos;s been a game-changer for our practice.&rdquo;
            </p>
            <p className="text-white/60">- Sarah Johnson, BCBA</p>
          </DarkInfoBox>
        </div>
      </DarkSection>

      {/* Dark Team Cards */}
      <DarkSection
        title="Our Team"
        subtitle="Meet the experts behind Praxis Notes"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Brain className="w-8 h-8 text-blue-400" />,
              title: "Behavioral Expertise",
              description:
                "Our team includes BCBAs and RBTs who understand the daily challenges of ABA documentation.",
            },
            {
              icon: <PencilRuler className="w-8 h-8 text-purple-400" />,
              title: "Design Focus",
              description:
                "We create calming, intuitive interfaces that reduce cognitive load for busy practitioners.",
            },
            {
              icon: <Puzzle className="w-8 h-8 text-green-400" />,
              title: "Innovation Mindset",
              description:
                "We're constantly exploring new ways to solve the documentation challenges in ABA.",
            },
          ].map((item, index) => (
            <DarkTeamCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </DarkSection>

      {/* Dark Comparison Boxes */}
      <DarkSection
        title="The Praxis Difference"
        subtitle="See how our approach compares to traditional methods"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <DarkComparisonBox
            title="Traditional Documentation"
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

          <DarkComparisonBox
            title="The Praxis Way"
            bgColor="bg-blue-900/30"
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
        </div>
      </DarkSection>

      {/* Dark Value Cards */}
      <DarkSection
        title="Our Core Values"
        subtitle="The principles that guide everything we build"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Heart className="w-8 h-8 text-red-400" />,
              title: "Client-Centered",
              description:
                "We build tools that help therapists spend more time with clients and less time on paperwork.",
              points: [
                "Designed by ABA professionals",
                "Focus on clinical outcomes",
              ],
            },
            {
              icon: <LineChart className="w-8 h-8 text-blue-400" />,
              title: "Data-Driven",
              description:
                "We believe in the power of data to inform treatment decisions and demonstrate progress.",
              points: ["Automatic data analysis", "Visual progress tracking"],
            },
            {
              icon: <BookOpenText className="w-8 h-8 text-purple-400" />,
              title: "Continuous Learning",
              description:
                "We're constantly learning from our users and the latest research in behavioral science.",
              points: ["Regular feature updates", "Evidence-based approach"],
            },
          ].map((value, index) => (
            <DarkValueCard
              key={index}
              icon={value.icon}
              title={value.title}
              description={value.description}
              points={value.points}
            />
          ))}
        </div>
      </DarkSection>

      {/* CTA section */}
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
