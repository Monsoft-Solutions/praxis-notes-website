import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Lock,
  Shield,
  Download,
} from "lucide-react";
import Image from "next/image";

const resources = [
  { name: "Features", href: "/features" },
  { name: "Pricing", href: "/pricing" },
  { name: "Login", href: "https://app.praxisnotes.com/auth/log-in" },
  { name: "Sign Up", href: "https://app.praxisnotes.com/auth/sign-up" },
];

const company = [
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
];

const highlights = [
  {
    icon: <Shield className="h-4 w-4 mr-2 text-blue-500" />,
    text: "HIPAA Compliant",
  },
  {
    icon: <Lock className="h-4 w-4 mr-2 text-green-500" />,
    text: "Secure Data Storage",
  },
  {
    icon: <Download className="h-4 w-4 mr-2 text-orange-500" />,
    text: "Export to PDF/Word",
  },
];

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-100 via-yellow-50 to-orange-100 relative overflow-hidden">
      {/* Very subtle background decorations */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute left-10 top-20 h-12 w-12 rounded-full border-2 border-blue-200 opacity-30 hidden sm:block"
          style={{ transform: "rotate(0.1deg)" }}
        ></div>
        <div className="absolute right-16 bottom-32 h-8 w-8 rounded border border-green-200 opacity-40 hidden sm:block"></div>
        <div className="absolute left-1/4 bottom-20 h-2 w-2 rounded-full bg-orange-200 opacity-50"></div>
        <div className="absolute right-1/3 top-40 h-3 w-3 rounded-full bg-yellow-300 opacity-40 hidden sm:block"></div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info Card */}
          <div className="lg:col-span-2">
            <div
              className="relative rounded-3xl border-2 border-blue-200 bg-white p-6 shadow-lg"
              style={{
                borderRadius: "25px 30px 20px 35px",
              }}
            >
              {/* Round thumb tack */}
              <div className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 transform">
                <div className="h-full w-full rounded-full bg-blue-400 shadow-sm"></div>
                <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
              </div>

              <div className="pt-2 space-y-6">
                <div>
                  <Link href="/" className="flex items-center space-x-2">
                    <Image
                      src="/images/logo/praxis-note-logo-main.png"
                      alt="Praxis Notes Logo"
                      width={80}
                      height={80}
                    />
                  </Link>
                  <p className="mt-4 text-md text-gray-600 max-w-md font-nunito">
                    AI-powered ABA session notes that save RBTs and BCBAs hours
                    each week. Detailed, insurance-ready documentation in
                    seconds.
                  </p>
                </div>

                <div className="space-y-3">
                  {highlights.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center text-gray-700"
                    >
                      {item.icon}
                      <span className="font-nunito">{item.text}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center space-x-4">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-500 transition-all duration-200 hover:scale-110"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-500 transition-all duration-200 hover:scale-110"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-500 transition-all duration-200 hover:scale-110"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-500 transition-all duration-200 hover:scale-110"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Resources Card */}
          <div>
            <div
              className="relative rounded-3xl border-2 border-green-200 bg-white p-6 shadow-lg h-full"
              style={{
                borderRadius: "22px 28px 18px 32px",
              }}
            >
              {/* Square thumb tack */}
              <div className="absolute -top-1.5 right-8 h-3 w-3 rotate-45 transform bg-green-400 shadow-sm"></div>

              <div className="pt-2">
                <h4 className="text-sm font-quicksand font-bold uppercase tracking-wider mb-4 text-gray-800">
                  Resources
                </h4>
                <ul className="space-y-3">
                  {resources.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="text-gray-600 hover:text-green-500 transition-colors font-nunito hover:font-medium"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Company Card */}
          <div>
            <div
              className="relative rounded-3xl border-2 border-orange-200 bg-white p-6 shadow-lg h-full"
              style={{
                borderRadius: "25px 20px 28px 22px",
              }}
            >
              {/* Triangle thumb tack */}
              <div className="absolute -top-2 left-8">
                <div className="h-0 w-0 border-l-2 border-r-2 border-b-4 border-l-transparent border-r-transparent border-b-orange-400"></div>
              </div>

              <div className="pt-2">
                <h4 className="text-sm font-quicksand font-bold uppercase tracking-wider mb-4 text-gray-800">
                  Company
                </h4>
                <ul className="space-y-3">
                  {company.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="text-gray-600 hover:text-orange-500 transition-colors font-nunito hover:font-medium"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section Card */}
        <div className="mb-12">
          <div
            className="relative rounded-3xl border-2 border-yellow-200 bg-white p-6 shadow-lg max-w-md mx-auto"
            style={{
              borderRadius: "28px 35px 22px 38px",
            }}
          >
            {/* Round thumb tack with different color */}
            <div className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 transform">
              <div className="h-full w-full rounded-full bg-yellow-400 shadow-sm"></div>
              <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"></div>
            </div>

            <div className="pt-2">
              <h4 className="text-sm font-quicksand font-bold uppercase tracking-wider mb-4 text-gray-800 text-center">
                Contact
              </h4>
              <div className="space-y-4 text-center">
                <p className="text-gray-600 font-nunito">
                  Have questions? We&apos;re here to help.
                </p>
                <div className="flex items-center justify-center space-x-2">
                  <Mail className="h-4 w-4 text-yellow-500" />
                  <a
                    href="mailto:support@praxisnotes.com"
                    className="text-sm font-medium text-gray-600 hover:text-yellow-500 transition-colors font-nunito"
                  >
                    support@praxisnotes.com
                  </a>
                </div>
                <div className="pt-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 text-sm font-quicksand font-semibold bg-yellow-400 text-gray-800 transition-all hover:bg-yellow-500 hover:shadow-md hover:-translate-y-0.5"
                    style={{
                      borderRadius: "12px 14px 12px 16px",
                    }}
                  >
                    Contact Support
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 font-nunito">
            &copy; {new Date().getFullYear()} Praxis Notes. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex items-center space-x-6">
            <Link
              href="/privacy"
              className="text-xs text-gray-500 hover:text-blue-500 transition-colors font-nunito"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-gray-500 hover:text-blue-500 transition-colors font-nunito"
            >
              Terms
            </Link>
            <Link
              href="/cookies"
              className="text-xs text-gray-500 hover:text-blue-500 transition-colors font-nunito"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
