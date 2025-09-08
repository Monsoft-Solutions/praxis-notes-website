import {
  Brain,
  FileText,
  MessageSquareText,
  Smartphone,
  Check,
  Sparkles,
  SearchCheck,
  BarChart3,
} from 'lucide-react';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from 'website/components/ui/card';

const featuresData = [
  {
    icon: <MessageSquareText className="h-12 w-12 text-blue-600" />,
    iconBg: 'bg-blue-100',
    title: 'AI-Powered Note Generation',
    description:
      'Supports CPT Codes 97153–97158. Generate detailed session notes in seconds with our advanced AI.',
    benefits: [
      'Save 3+ hours per week',
      'Reduce documentation stress',
      'Maintain clinical quality',
    ],
    cardBorder: 'border-blue-200',
    borderStyle: 'border-solid',
    checkColor: 'text-blue-500',
    thumbTackStyle: 'round',
    thumbTackColor: 'bg-blue-400',
    cardRotation: 'rotate-[-0.5deg]',
  },
  {
    icon: <SearchCheck className="h-12 w-12 text-green-600" />,
    iconBg: 'bg-green-100',
    title: 'Note Review & Enhancement',
    description:
      'Upload existing notes for AI analysis, receive suggestions for improvements, and ensure compliance with billing requirements.',
    benefits: [
      'Identify documentation gaps',
      'Enhance clinical clarity',
      'Ensure billing compliance',
    ],
    cardBorder: 'border-green-200',
    borderStyle: 'border-dashed',
    checkColor: 'text-green-500',
    thumbTackStyle: 'square',
    thumbTackColor: 'bg-green-400',
    cardRotation: 'rotate-[0.3deg]',
  },
  {
    icon: <Brain className="h-12 w-12 text-orange-600" />,
    iconBg: 'bg-orange-100',
    title: 'BCBA & RBT Configurable Templates',
    description:
      "Customize templates to match your clinic's requirements and individual client needs.",
    benefits: [
      "Match your clinic's style",
      'Personalized to each client',
      'Unlimited template options',
    ],
    cardBorder: 'border-orange-200',
    borderStyle: 'border-solid',
    checkColor: 'text-orange-500',
    thumbTackStyle: 'triangle',
    thumbTackColor: 'bg-orange-400',
    cardRotation: 'rotate-[0.8deg]',
  },
  {
    icon: <BarChart3 className="h-12 w-12 text-yellow-700" />,
    iconBg: 'bg-yellow-100',
    title: 'Progress Tracking & Reporting',
    description:
      'Monitor client goals, track behavioral trends, and generate comprehensive progress reports for stakeholders.',
    benefits: [
      'Visualize treatment outcomes',
      'Identify intervention effectiveness',
      'Generate parent-friendly reports',
    ],
    cardBorder: 'border-yellow-300',
    borderStyle: 'border-dashed',
    checkColor: 'text-yellow-600',
    thumbTackStyle: 'round',
    thumbTackColor: 'bg-yellow-400',
    cardRotation: 'rotate-[-0.4deg]',
  },
  {
    icon: <Smartphone className="h-12 w-12 text-blue-600" />,
    iconBg: 'bg-blue-100',
    title: 'Mobile-Friendly & Web Access',
    description:
      'Access your notes from anywhere on any device. Perfect for in-clinic and remote sessions.',
    benefits: [
      'Work from anywhere',
      'Easy mobile notes',
      'Real-time synchronization',
    ],
    cardBorder: 'border-blue-200',
    borderStyle: 'border-solid',
    checkColor: 'text-blue-500',
    thumbTackStyle: 'square',
    thumbTackColor: 'bg-blue-400',
    cardRotation: 'rotate-[0.6deg]',
  },
  {
    icon: <FileText className="h-12 w-12 text-green-600" />,
    iconBg: 'bg-green-100',
    title: 'Billing-Compliant Formatting',
    description:
      'Insurance-ready notes formatted to meet billing requirements and reduce claim rejections.',
    benefits: [
      'Reduce claim rejections',
      'Standardized format',
      'Automatic compliance checks',
    ],
    cardBorder: 'border-green-200',
    borderStyle: 'border-dashed',
    checkColor: 'text-green-500',
    thumbTackStyle: 'triangle',
    thumbTackColor: 'bg-green-400',
    cardRotation: 'rotate-[-0.7deg]',
  },
];

const Features = () => {
  return (
    <section id="features" className="relative">
      {/* Seamless background continuation from Hero */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-100/80 via-orange-50/60 to-blue-50/40"></div>

      {/* Enhanced transition overlay for smooth flow */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/40 via-white/20 to-white/40"></div>

      {/* Enhanced background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating geometric shapes - positioned relative to section */}
        <div
          className="absolute left-12 top-32 h-16 w-16 rounded-full border-2 border-blue-300 opacity-30 hidden sm:block"
          style={{ transform: 'rotate(0.5deg)' }}
        ></div>

        <div
          className="absolute right-20 top-1/4 h-12 w-12 border-2 border-green-300 opacity-25 hidden sm:block"
          style={{
            transform: 'rotate(-0.3deg)',
            borderRadius: '20px 25px 18px 30px',
          }}
        ></div>

        <div
          className="absolute left-1/3 bottom-28 h-8 w-8 border-2 border-orange-300 opacity-35 hidden sm:block"
          style={{
            transform: 'rotate(0.8deg)',
            borderRadius: '15px 18px 12px 22px',
          }}
        ></div>

        {/* Scattered dots */}
        <div className="absolute left-1/4 top-2/3 h-3 w-3 rounded-full bg-yellow-300 opacity-40 hidden sm:block"></div>
        <div className="absolute right-1/3 bottom-1/3 h-2 w-2 rounded-full bg-blue-300 opacity-30 hidden sm:block"></div>
        <div className="absolute left-2/3 top-1/2 h-2 w-2 rounded-full bg-green-300 opacity-35 hidden sm:block"></div>
      </div>

      <div className="relative py-20 md:py-28 px-4 sm:px-6 mx-auto container max-w-7xl">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-20">
          <div
            className="inline-flex items-center px-6 py-3 bg-white/90 backdrop-blur-sm border-2 border-blue-300 mb-8 shadow-lg relative"
            style={{
              borderRadius: '20px 28px 18px 32px',
              transform: 'rotate(-0.2deg)',
            }}
          >
            {/* Badge thumb tack */}
            <div className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 transform">
              <div className="h-full w-full rounded-full bg-blue-400 shadow-sm"></div>
              <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
            </div>

            <Sparkles className="h-5 w-5 text-blue-500 mr-3" />
            <span className="text-base font-quicksand font-bold text-blue-700">
              Save 75% of documentation time
            </span>
          </div>

          <h2
            className="text-4xl md:text-6xl font-quicksand font-bold tracking-tight mb-8 text-gray-900 leading-tight"
            style={{
              textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
            }}
          >
            Features Built for ABA
            <br />
            <span className="text-blue-600">Professionals</span>
          </h2>

          <p className="text-xl md:text-2xl font-nunito text-gray-700 max-w-3xl leading-relaxed">
            Everything you need to streamline documentation and focus on what
            matters most - your clients and their progress.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className={`relative transition-all duration-300 hover:scale-105 hover:z-10 ${feature.cardRotation}`}
            >
              <Card
                className={`relative ${feature.cardBorder} ${feature.borderStyle} border-2 bg-white/95 backdrop-blur-sm shadow-xl transition-all duration-300 hover:shadow-2xl overflow-visible h-full`}
                style={{
                  borderRadius: '28px 35px 25px 40px',
                }}
              >
                {/* Thumb tack effects */}
                {feature.thumbTackStyle === 'round' && (
                  <div className="absolute -top-3 left-1/2 h-5 w-5 -translate-x-1/2 transform z-10">
                    <div
                      className={`h-full w-full rounded-full ${feature.thumbTackColor} shadow-lg`}
                    ></div>
                    <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
                  </div>
                )}

                {feature.thumbTackStyle === 'square' && (
                  <div
                    className={`absolute -top-2 right-8 h-4 w-4 rotate-45 transform ${feature.thumbTackColor} shadow-lg z-10`}
                  ></div>
                )}

                {feature.thumbTackStyle === 'triangle' && (
                  <div className="absolute -top-3 left-8 z-10">
                    <div
                      className="h-0 w-0 border-l-[6px] border-r-[6px] border-b-[8px] border-l-transparent border-r-transparent"
                      style={{
                        borderBottomColor:
                          feature.thumbTackColor === 'bg-orange-400'
                            ? '#fb923c'
                            : feature.thumbTackColor === 'bg-green-400'
                              ? '#4ade80'
                              : '#60a5fa',
                      }}
                    ></div>
                  </div>
                )}

                <CardHeader className="pb-4 pt-8">
                  <div
                    className={`mb-6 w-20 h-20 flex items-center justify-center mx-auto ${feature.iconBg} ${feature.cardBorder} ${feature.borderStyle} border-2 shadow-md`}
                    style={{
                      borderRadius: '15px 20px 12px 25px',
                    }}
                  >
                    {feature.icon}
                  </div>

                  <CardTitle className="text-2xl font-quicksand font-bold text-gray-900 mb-4 leading-tight text-center">
                    {feature.title}
                  </CardTitle>

                  <CardDescription className="text-base font-nunito text-gray-600 leading-relaxed text-center">
                    {feature.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-2">
                  <ul className="space-y-4">
                    {feature.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div
                          className={`h-6 w-6 rounded-full ${feature.checkColor.replace(
                            'text-',
                            'bg-'
                          )} flex items-center justify-center shrink-0 mt-0.5`}
                        >
                          <Check className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-sm font-nunito text-gray-700 leading-relaxed">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div
            className="inline-block px-8 py-4 bg-white/90 backdrop-blur-sm border-2 border-blue-300 shadow-lg relative border-dashed"
            style={{
              borderRadius: '25px 32px 22px 35px',
              transform: 'rotate(0.3deg)',
            }}
          >
            {/* CTA thumb tack */}
            <div className="absolute -top-2 right-8 h-4 w-4 rotate-45 transform bg-green-400 shadow-lg"></div>

            <p className="text-lg font-quicksand font-bold text-blue-700">
              All features included in every plan.{' '}
              <Link
                href="/pricing"
                className="underline font-bold hover:text-blue-800 transition-colors decoration-2 underline-offset-4"
              >
                View pricing →
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
