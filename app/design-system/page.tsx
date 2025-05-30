import { Metadata } from "next";
import { DesignSystemShowcase } from "../../components/ui/design-system/showcase";

export const metadata: Metadata = {
  title: "Praxis Notes ABA-Inspired Design System",
  description:
    "ABA-industry focused design system with a pastel color palette and minimalist approach for the Praxis Notes platform",
};

export default function DesignSystemPage() {
  return (
    <div className="container max-w-7xl mx-auto py-10 px-4 sm:px-6">
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-extrabold tracking-tight">
            Praxis Notes ABA-Inspired Design System
          </h1>
          <p className="text-muted-foreground max-w-3xl">
            A calming, professional design system specifically created for ABA
            practitioners, featuring a pastel color palette, minimalist
            approach, and visual elements that reflect data collection, progress
            tracking, and positive reinforcement concepts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-soft-blue/10 p-6 rounded-lg border border-soft-blue/30">
            <h3 className="font-semibold text-lg">ABA-Inspired</h3>
            <p className="mt-2 text-muted-foreground">
              Visual elements that reflect data collection, progress tracking,
              and positive reinforcement concepts from Applied Behavior
              Analysis.
            </p>
          </div>

          <div className="bg-lavender/10 p-6 rounded-lg border border-lavender/30">
            <h3 className="font-semibold text-lg">Pastel Color Palette</h3>
            <p className="mt-2 text-muted-foreground">
              Soft, calming colors that create a soothing workspace for
              professionals who deal with intensive documentation.
            </p>
          </div>

          <div className="bg-mint-green/10 p-6 rounded-lg border border-mint-green/30">
            <h3 className="font-semibold text-lg">Minimalist Approach</h3>
            <p className="mt-2 text-muted-foreground">
              Clean interfaces with reduced visual noise to minimize cognitive
              load for busy practitioners.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <DesignSystemShowcase />
        </div>
      </div>
    </div>
  );
}
