import { Metadata } from "next";
import { getPaginatedResources } from "website/lib/resources";
import CTAPlain from "website/components/sections/cta-plain";
import ResourcesHero from "website/components/sections/resources/resources-hero";
import ResourcesGrid from "website/components/sections/resources/resources-grid";

export const metadata: Metadata = {
  title: "Resources | PraxisNote",
  description:
    "Learn more about ABA therapy, terms, and best practices in our resources section.",
};

export default async function ResourcesPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const currentPage = Number((await searchParams).page) || 1;
  const pageSize = 6; // Number of resources per page

  const { resources, totalPages } = await getPaginatedResources(
    currentPage,
    pageSize
  );

  return (
    <>
      {/* Hero section */}
      <ResourcesHero />

      {/* Resources grid section */}
      <ResourcesGrid
        resources={resources}
        currentPage={currentPage}
        totalPages={totalPages}
      />

      {/* Add CTA section */}
      <CTAPlain
        subtitle="Need specific ABA resources?"
        description="Our experts can help you find the right resources for your ABA practice needs."
        primaryButtonText="Contact us"
        primaryButtonLink="/contact"
        secondaryButtonText="View all resources"
        secondaryButtonLink="/resources"
      />
    </>
  );
}
