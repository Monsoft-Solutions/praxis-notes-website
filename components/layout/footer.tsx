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

const resources = [
  { name: "Features", href: "/features" },
  { name: "Pricing", href: "/pricing" },
  { name: "Login", href: "/auth" },
  { name: "Sign Up", href: "/waitlist" },
];

const company = [
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
];

const highlights = [
  {
    icon: <Shield className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />,
    text: "HIPAA Compliant",
  },
  {
    icon: <Lock className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />,
    text: "Secure Data Storage",
  },
  {
    icon: (
      <Download className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />
    ),
    text: "Export to PDF/Word",
  },
];

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray dark:border-gray-800">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-9 h-9 rounded-full  flex items-center justify-center  font-bold text-lg border border-gray-200 dark:border-gray-800">
                  P
                </div>
                <span className="text-xl font-bold">Praxis Note</span>
              </Link>
              <p className="mt-4 text-md text-muted-foreground max-w-md">
                AI-powered ABA session notes that save RBTs and BCBAs hours each
                week. Detailed, insurance-ready documentation in seconds.
              </p>
            </div>

            <div className="space-y-3">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center dark:text-gray-400"
                >
                  {item.icon}
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Resources
            </h4>
            <ul className="space-y-3">
              {resources.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className=" dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className=" dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Contact
            </h4>
            <div className="space-y-4">
              <p className=" dark:text-gray-400">
                Have questions? We&apos;re here to help.
              </p>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                <a
                  href="mailto:support@praxisnote.com"
                  className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  support@praxisnote.com
                </a>
              </div>
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
                >
                  Contact Support
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Praxis Note. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex items-center space-x-6">
            <Link
              href="/privacy"
              className="text-xs text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/cookies"
              className="text-xs text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
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
