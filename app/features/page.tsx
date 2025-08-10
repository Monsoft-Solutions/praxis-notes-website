import { Metadata } from "next";
import Features from "website/components/sections/features";
import CTA from "website/components/sections/cta";
import FeaturesHero from "website/components/sections/features/features-hero";
import NoteReviewSection from "website/components/sections/features/note-review-section";
import AdvancedReportingSection from "website/components/sections/features/advanced-reporting-section";
import ComplianceSection from "website/components/sections/features/compliance-section";

export const metadata: Metadata = {
  title: "Features | Praxis Notes",
  description:
    "Explore the powerful features of Praxis Notes - AI-powered ABA session notes, reviews, and documentation tools for RBTs, BCBAs, and clinics.",
};

export default function FeaturesPage() {
  return (
    <>
      {/* Hero section */}
      <FeaturesHero />

      <div id="create"></div>
      <Features />

      {/* Note Review & Enhancement */}
      <NoteReviewSection />

      {/* Advanced Reporting & Analytics */}

      <AdvancedReportingSection />

      {/* Compliance Section */}
      <ComplianceSection />

      <CTA />
    </>
  );
}
