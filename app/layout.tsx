import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "website/components/layout/header";
import Footer from "website/components/layout/footer";
import { ThemeProvider } from "../components/ui/design-system/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Praxis Note | AI-Powered ABA Session Notes",
  description:
    "Generate detailed, insurance-ready ABA session notes with AI. For RBTs, BCBAs, and clinics.",
  keywords:
    "ABA notes, session notes, applied behavior analysis, RBT notes, BCBA documentation, ABA therapy documentation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth w-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider defaultTheme="system">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
