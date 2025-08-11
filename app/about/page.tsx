import { Metadata } from 'next';
import Image from 'next/image';
import {
  BookOpenText,
  Brain,
  Heart,
  LineChart,
  PencilRuler,
  Puzzle,
  CheckCircle,
  Users,
  Target,
  Lightbulb,
  Award,
  Coffee,
  Smile,
} from 'lucide-react';
import CTAPlain from 'website/components/sections/cta-plain';
import { Button } from 'website/components/ui/button';

export const metadata: Metadata = {
  title: 'About Us | Praxis Notes',
  description:
    'Learn about Praxis Notes - our mission is to help ABA professionals focus on therapy, not paperwork.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero section with image */}
      <section className="relative pt-20 md:pt-28 pb-16 md:pb-24 overflow-hidden">
        {/* Main background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-yellow-50 to-orange-100"></div>

        {/* Hand-drawn background decorations */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          {/* Floating geometric shapes */}
          <div
            className="absolute left-16 top-32 h-12 w-12 rounded-full border-2 border-blue-200 opacity-30 hidden sm:block"
            style={{ transform: 'rotate(0.1deg)' }}
          ></div>

          <div
            className="absolute right-20 top-40 h-10 w-10 border-2 border-green-200 opacity-40 hidden sm:block"
            style={{
              transform: 'rotate(-0.2deg)',
              borderRadius: '18px 22px 16px 26px',
            }}
          ></div>

          <div
            className="absolute left-1/4 bottom-20 h-8 w-8 border-2 border-orange-200 opacity-35 hidden sm:block"
            style={{
              transform: 'rotate(0.15deg)',
              borderRadius: '16px 20px 14px 22px',
            }}
          ></div>

          {/* Small decorative dots */}
          <div className="absolute right-1/3 top-1/3 h-3 w-3 rounded-full bg-yellow-200 opacity-50 hidden sm:block"></div>
          <div className="absolute left-1/3 bottom-1/3 h-2 w-2 rounded-full bg-blue-200 opacity-45 hidden sm:block"></div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div
                className="relative inline-flex items-center px-4 py-2 bg-white shadow-lg w-fit border-2 border-blue-200"
                style={{ borderRadius: '20px 25px 18px 28px' }}
              >
                {/* Thumb tack */}
                <div className="absolute -top-1.5 left-6 h-3 w-3 rotate-45 transform bg-blue-400 shadow-sm"></div>
                <span className="text-sm font-quicksand font-semibold text-blue-600 pt-1">
                  <Users className="inline w-4 h-4 mr-2" />
                  Meet the Team Behind Praxis Notes
                </span>
              </div>

              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-quicksand font-bold leading-tight text-gray-800">
                  We&apos;re building the future of{' '}
                  <span className="text-blue-500">ABA documentation</span>
                </h1>
                <p className="text-xl md:text-2xl font-nunito text-gray-600 leading-relaxed">
                  A passionate team of ABA professionals, designers, and
                  technologists working together to solve the documentation
                  crisis in behavioral therapy.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                {[
                  { number: '30+', label: 'Years Combined ABA Experience' },
                  { number: '1000+', label: 'Hours Saved Monthly' },
                  { number: '500+', label: 'Therapists Served' },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="relative bg-white shadow-lg border-2 border-green-200 p-4 text-center"
                    style={{
                      borderRadius:
                        index === 0
                          ? '18px 22px 16px 24px'
                          : index === 1
                            ? '20px 16px 24px 18px'
                            : '22px 24px 18px 20px',
                    }}
                  >
                    {/* Small thumb tack */}
                    <div className="absolute -top-1 right-3 h-2 w-2 rounded-full bg-green-400 shadow-sm"></div>

                    <div className="text-2xl md:text-3xl font-quicksand font-bold text-blue-500">
                      {stat.number}
                    </div>
                    <div className="text-sm font-nunito text-gray-600">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Hero Image */}
            <div className="flex justify-center lg:justify-end">
              <div
                className="relative bg-white shadow-2xl border-2 border-yellow-200 p-6"
                style={{
                  borderRadius: '30px 35px 28px 32px',
                }}
              >
                {/* Thumb tack */}
                <div className="absolute -top-2 left-1/2 h-5 w-5 -translate-x-1/2 transform z-10">
                  <div className="h-full w-full rounded-full bg-yellow-400 shadow-md"></div>
                  <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-700"></div>
                </div>

                <div className="pt-2">
                  <div className="w-80 h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden">
                    <Image
                      src="/images/about-hero-section.png"
                      alt="ABA professionals collaborating on documentation solutions"
                      width={384}
                      height={384}
                      className="object-cover w-full h-full"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission section */}
      <section className="py-16 md:py-24 relative">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-orange-100/20 via-white to-green-50/30"></div>

        <div className="container mx-auto max-w-6xl px-4 sm:px-6 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-quicksand font-bold mb-6 text-gray-800">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 font-nunito max-w-3xl mx-auto">
              To revolutionize ABA documentation by creating intelligent,
              intuitive tools that let therapists focus on what they do best -
              helping clients achieve their goals.
            </p>
          </div>

          {/* Mission cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-10 h-10 text-blue-400" />,
                title: 'Clear Purpose',
                description:
                  'We exist to eliminate the documentation burden that keeps ABA professionals from focusing on their clients.',
                color: 'blue',
              },
              {
                icon: <Lightbulb className="w-10 h-10 text-orange-400" />,
                title: 'Smart Innovation',
                description:
                  'We leverage AI and smart technology to automate repetitive tasks while maintaining clinical accuracy.',
                color: 'orange',
              },
              {
                icon: <Heart className="w-10 h-10 text-green-400" />,
                title: 'Human-Centered',
                description:
                  'Every feature we build is designed with real ABA professionals and their daily challenges in mind.',
                color: 'green',
              },
            ].map((mission, index) => {
              // Map color values to explicit Tailwind classes
              const borderColorMap = {
                blue: 'border-blue-200',
                orange: 'border-orange-200',
                green: 'border-green-200',
              } as const;

              const bgColorMap = {
                blue: 'bg-blue-400',
                orange: 'bg-orange-400',
                green: 'bg-green-400',
              } as const;

              return (
                <div
                  key={index}
                  className={`relative bg-white shadow-xl border-2 ${borderColorMap[mission.color as keyof typeof borderColorMap]} p-8`}
                  style={{
                    borderRadius:
                      index === 0
                        ? '25px 30px 22px 28px'
                        : index === 1
                          ? '28px 22px 30px 25px'
                          : '30px 28px 25px 32px',
                  }}
                >
                  {/* Thumb tack */}
                  <div className="absolute -top-2 right-8 h-4 w-4 -translate-x-1/2 transform">
                    <div
                      className={`h-full w-full rounded-full ${bgColorMap[mission.color as keyof typeof bgColorMap]} shadow-sm`}
                    ></div>
                    <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
                  </div>

                  <div className="pt-2 text-center">
                    <div className="w-16 h-16 rounded-xl bg-gray-50 flex items-center justify-center mb-6 mx-auto">
                      {mission.icon}
                    </div>
                    <h3 className="text-xl font-quicksand font-bold mb-4 text-gray-800">
                      {mission.title}
                    </h3>
                    <p className="text-gray-600 font-nunito leading-relaxed">
                      {mission.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Story section */}
      <section className="py-16 md:py-24 relative">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 via-blue-50 to-green-50"></div>

        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute right-20 top-1/4 h-16 w-16 rounded-full border-2 border-yellow-200 opacity-25 hidden sm:block"
            style={{ transform: 'rotate(0.2deg)' }}
          ></div>
          <div className="absolute left-1/3 bottom-20 h-2 w-2 rounded-full bg-blue-200 opacity-40 hidden sm:block"></div>
        </div>

        <div className="container mx-auto max-w-4xl px-4 sm:px-6 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-quicksand font-bold mb-6 text-gray-800">
              Our Story
            </h2>
            <p className="text-xl text-gray-600 font-nunito">
              Born from real frustration, built with genuine passion
            </p>
          </div>

          {/* Story content */}
          <div className="space-y-12">
            {/* Story card 1 */}
            <div
              className="relative bg-white shadow-xl border-2 border-blue-200 p-8 lg:p-12"
              style={{
                borderRadius: '32px 28px 35px 25px',
              }}
            >
              {/* Thumb tack */}
              <div className="absolute -top-2 left-12 h-4 w-4 -translate-x-1/2 transform">
                <div className="h-full w-full rounded-full bg-blue-400 shadow-sm"></div>
                <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
              </div>

              <div className="pt-2 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-quicksand font-bold mb-6 text-gray-800">
                    The Problem We Lived
                  </h3>
                  <p className="text-gray-700 font-nunito leading-relaxed mb-4">
                    Our founders spent years as practicing ABA professionals,
                    watching talented therapists burn out not from the therapy
                    itself, but from endless documentation requirements.
                  </p>
                  <p className="text-gray-700 font-nunito leading-relaxed">
                    <strong>
                      2-3 hours of notes for every hour of therapy.
                    </strong>{' '}
                    Multiple disconnected systems. Generic templates that never
                    quite fit ABA needs. We lived this frustration daily.
                  </p>
                </div>
                <div className="flex justify-center">
                  <div
                    className="relative bg-gray-50 border-2 border-orange-200 p-4"
                    style={{
                      borderRadius: '25px 30px 22px 28px',
                    }}
                  >
                    <div className="absolute -top-1.5 right-6 h-3 w-3 rotate-45 transform bg-orange-400 shadow-sm"></div>
                    <div className="w-full h-full rounded-xl overflow-hidden">
                      <Image
                        src="/images/about-aba-notes-problem.png"
                        alt="Professional overwhelmed with documentation"
                        width={240}
                        height={240}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Story card 2 */}
            <div
              className="relative bg-white shadow-xl border-2 border-green-200 p-8 lg:p-12"
              style={{
                borderRadius: '28px 35px 25px 30px',
              }}
            >
              {/* Thumb tack */}
              <div className="absolute -top-2 right-12 h-4 w-4 -translate-x-1/2 transform">
                <div className="h-full w-full rounded-full bg-green-400 shadow-sm"></div>
                <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
              </div>

              <div className="pt-2 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="lg:order-2">
                  <h3 className="text-2xl font-quicksand font-bold mb-6 text-gray-800">
                    The Vision We&apos;re Building
                  </h3>
                  <p className="text-gray-700 font-nunito leading-relaxed mb-4">
                    We imagined a world where ABA documentation writes itself.
                    Where data collection happens seamlessly. Where therapists
                    spend 90% of their time with clients, not computers.
                  </p>
                  <p className="text-gray-700 font-nunito leading-relaxed">
                    <strong>That vision is becoming reality.</strong> With
                    AI-powered notes, smart templates, and intuitive workflows
                    designed specifically for ABA professionals.
                  </p>
                </div>
                <div className="flex justify-center lg:order-1">
                  <div
                    className="relative bg-gray-50 border-2 border-yellow-200 p-4"
                    style={{
                      borderRadius: '30px 25px 28px 22px',
                    }}
                  >
                    <div className="absolute -top-2 left-1/3 h-4 w-4 -translate-x-1/2 transform">
                      <div className="h-full w-full rounded-full bg-yellow-400 shadow-sm"></div>
                      <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-700"></div>
                    </div>
                    <div className="w-full h-full rounded-xl overflow-hidden pt-2">
                      <Image
                        src="/images/about-the-vision.png"
                        alt="ABA specialist working with smart solutions"
                        width={240}
                        height={240}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team section */}
      <section className="py-16 md:py-24 relative">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-green-50 to-yellow-50"></div>

        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute left-16 top-32 h-14 w-14 border-2 border-orange-200 opacity-30 hidden sm:block"
            style={{
              transform: 'rotate(-0.1deg)',
              borderRadius: '20px 26px 18px 28px',
            }}
          ></div>
          <div className="absolute right-1/4 bottom-24 h-3 w-3 rounded-full bg-green-200 opacity-40 hidden sm:block"></div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-quicksand font-bold mb-6 text-gray-800">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 font-nunito max-w-3xl mx-auto">
              A diverse group of ABA professionals, designers, and technologists
              united by a shared mission to transform behavioral therapy
              documentation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="w-8 h-8 text-blue-400" />,
                title: 'Clinical Expertise',
                description:
                  'BCBAs and RBTs who understand the daily realities of ABA practice and documentation challenges.',
                stats: '30+ years combined experience',
                thumbTackColor: 'bg-blue-400',
                borderColor: 'border-blue-200',
              },
              {
                icon: <PencilRuler className="w-8 h-8 text-green-400" />,
                title: 'Design Excellence',
                description:
                  'UX designers focused on creating calming, intuitive interfaces that reduce cognitive load.',
                stats: '500+ user interviews conducted',
                thumbTackColor: 'bg-green-400',
                borderColor: 'border-green-200',
              },
              {
                icon: <Puzzle className="w-8 h-8 text-orange-400" />,
                title: 'Technical Innovation',
                description:
                  'Engineers building AI-powered solutions specifically designed for behavioral health workflows.',
                stats: '1M+ notes processed safely',
                thumbTackColor: 'bg-orange-400',
                borderColor: 'border-orange-200',
              },
            ].map((team, index) => (
              <div
                key={index}
                className={`relative bg-white shadow-xl border-2 ${team.borderColor} p-8`}
                style={{
                  borderRadius:
                    index === 0
                      ? '25px 30px 20px 35px'
                      : index === 1
                        ? '30px 22px 35px 25px'
                        : '28px 35px 22px 30px',
                }}
              >
                {/* Thumb tack */}
                <div className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 transform">
                  <div
                    className={`h-full w-full rounded-full ${team.thumbTackColor} shadow-sm`}
                  ></div>
                  <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
                </div>

                <div className="pt-2 text-center">
                  <div className="w-16 h-16 rounded-xl bg-gray-50 flex items-center justify-center mb-6 mx-auto">
                    {team.icon}
                  </div>
                  <h3 className="text-xl font-quicksand font-bold mb-4 text-gray-800">
                    {team.title}
                  </h3>
                  <p className="text-gray-600 font-nunito mb-4 leading-relaxed">
                    {team.description}
                  </p>
                  <div className="inline-flex items-center px-3 py-1 bg-gray-100 rounded-full">
                    <Award className="w-4 h-4 mr-2 text-gray-500" />
                    <span className="text-sm font-nunito text-gray-700">
                      {team.stats}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Join team CTA */}
          <div className="mt-16 text-center">
            <div
              className="relative bg-white shadow-xl border-2 border-purple-200 p-8 max-w-2xl mx-auto"
              style={{
                borderRadius: '35px 28px 32px 25px',
              }}
            >
              {/* Thumb tack */}
              <div className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 transform">
                <div className="h-full w-full rounded-full bg-purple-400 shadow-sm"></div>
                <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
              </div>

              <div className="pt-2 text-center">
                <Coffee className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-2xl font-quicksand font-bold mb-4 text-gray-800">
                  Join Our Mission
                </h3>
                <p className="text-gray-600 font-nunito mb-6">
                  We&apos;re always looking for passionate people who want to
                  make a difference in ABA therapy. Coffee chats welcomed!
                </p>
                <Button
                  className="inline-flex items-center justify-center px-6 py-3 h-11 bg-blue-400 text-white font-quicksand font-semibold transition-all hover:bg-blue-500 hover:shadow-md"
                  style={{
                    borderRadius: '12px 14px 12px 16px',
                  }}
                >
                  <Smile className="mr-2 h-4 w-4" />
                  View Open Positions
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values section */}
      <section className="py-16 md:py-24 relative">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 via-white to-orange-50/20"></div>

        <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-quicksand font-bold mb-6 text-gray-800">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 font-nunito max-w-3xl mx-auto">
              The principles that guide every decision we make and every feature
              we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="w-8 h-8 text-red-400" />,
                title: 'Client-First Approach',
                description:
                  'Every feature we build asks: does this help therapists spend more quality time with their clients?',
                points: [
                  'User-centered design',
                  'Clinical outcome focus',
                  'Therapist feedback driven',
                ],
                thumbTackColor: 'bg-red-400',
                borderColor: 'border-red-200',
              },
              {
                icon: <LineChart className="w-8 h-8 text-blue-400" />,
                title: 'Data-Driven Decisions',
                description:
                  'We believe in the power of data to improve both our product and clinical outcomes.',
                points: [
                  'Evidence-based features',
                  'Continuous measurement',
                  'Transparent metrics',
                ],
                thumbTackColor: 'bg-blue-400',
                borderColor: 'border-blue-200',
              },
              {
                icon: <BookOpenText className="w-8 h-8 text-green-400" />,
                title: 'Continuous Learning',
                description:
                  "We're always learning from users, research, and the evolving field of behavioral science.",
                points: [
                  'Regular user research',
                  'Industry collaboration',
                  'Adaptive development',
                ],
                thumbTackColor: 'bg-green-400',
                borderColor: 'border-green-200',
              },
            ].map((value, index) => (
              <div
                key={index}
                className={`relative bg-white shadow-xl border-2 ${value.borderColor} p-8`}
                style={{
                  borderRadius:
                    index === 0
                      ? '32px 25px 30px 28px'
                      : index === 1
                        ? '25px 35px 22px 30px'
                        : '30px 28px 35px 25px',
                }}
              >
                {/* Thumb tack */}
                <div className="absolute -top-2 right-8 h-4 w-4 -translate-x-1/2 transform">
                  <div
                    className={`h-full w-full rounded-full ${value.thumbTackColor} shadow-sm`}
                  ></div>
                  <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
                </div>

                <div className="pt-2">
                  <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gray-50 mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-quicksand font-bold mb-4 text-gray-800">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 font-nunito mb-6 leading-relaxed">
                    {value.description}
                  </p>
                  <ul className="space-y-3">
                    {value.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="w-3 h-3 text-green-600" />
                        </div>
                        <span className="text-sm text-gray-700 font-nunito">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <CTAPlain
        subtitle="Ready to transform your ABA documentation?"
        description="Join hundreds of ABA professionals who've already saved thousands of hours with our intelligent documentation platform."
        primaryButtonText="Start your free trial"
        secondaryButtonText="Schedule a demo"
        secondaryButtonLink="/contact"
      />
    </>
  );
}
