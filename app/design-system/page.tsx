import { Metadata } from "next";
import { DesignSystemShowcase } from "../../components/ui/design-system/showcase";

export const metadata: Metadata = {
  title: "Praxis Note Design System",
  description: "Comprehensive UI/UX design system for the Praxis Note platform",
};

export default function DesignSystemPage() {
  return (
    <div className="container max-w-7xl mx-auto py-10 px-4 sm:px-6">
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-extrabold tracking-tight">
            Praxis Note UI/UX Design System
          </h1>
          <p className="text-muted-foreground">
            A comprehensive design system for consistent, accessible, and
            professional user experiences.
          </p>
        </div>

        <div className="mt-10">
          <DesignSystemShowcase />
        </div>
      </div>
    </div>
  );
}
