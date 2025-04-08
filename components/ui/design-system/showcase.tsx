"use client";

import { cn } from "../../../lib/utils";
import { GRADIENTS, SHADOWS, BUTTON, CARD, FORM, GRID } from "./design-tokens";

export function DesignSystemShowcase() {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tight">Color Palette</h2>
        <div className={GRID.FOUR_COLUMNS}>
          <ColorSwatch
            name="Primary Blue"
            color="bg-blue-500"
            textColor="text-white"
          />
          <ColorSwatch
            name="Primary Purple"
            color="bg-purple-500"
            textColor="text-white"
          />
          <ColorSwatch
            name="Secondary Blue"
            color="bg-blue-400"
            textColor="text-white"
          />
          <ColorSwatch
            name="Secondary Purple"
            color="bg-purple-400"
            textColor="text-white"
          />
          <ColorSwatch
            name="Success"
            color="bg-emerald-500"
            textColor="text-white"
          />
          <ColorSwatch
            name="Warning"
            color="bg-amber-500"
            textColor="text-white"
          />
          <ColorSwatch name="Error" color="bg-red-500" textColor="text-white" />
          <ColorSwatch name="Info" color="bg-blue-500" textColor="text-white" />
        </div>

        <h3 className="text-xl font-semibold mt-6">Gradients</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <GradientSwatch
            name="Primary Gradient"
            gradient={GRADIENTS.PRIMARY}
          />
          <GradientSwatch name="Soft Gradient" gradient={GRADIENTS.SOFT} />
          <GradientSwatch
            name="Dark Gradient"
            gradient={GRADIENTS.DARK}
            textColor="text-white"
          />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tight">Typography</h2>
        <div className="space-y-4">
          <div className="flex flex-col gap-3">
            <h1 className="text-6xl font-extrabold">Heading 1 (6XL)</h1>
            <h2 className="text-5xl font-bold">Heading 2 (5XL)</h2>
            <h3 className="text-4xl font-bold">Heading 3 (4XL)</h3>
            <h4 className="text-3xl font-semibold">Heading 4 (3XL)</h4>
            <h5 className="text-2xl font-semibold">Heading 5 (2XL)</h5>
            <h6 className="text-xl font-medium">Heading 6 (XL)</h6>
          </div>

          <div className="mt-6 space-y-4">
            <p className="text-base">
              Base paragraph text (16px). The Praxis Note platform offers
              comprehensive tools for ABA professionals to document and analyze
              client behaviors.
            </p>
            <p className="text-sm">
              Small text (14px). Used for secondary information and form labels.
            </p>
            <p className="text-xs">
              Extra small text (12px). Typically used for footnotes and small
              labels.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tight">
          Shadows & Elevation
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <ShadowSwatch name="SM" shadow="shadow-sm" />
          <ShadowSwatch name="MD" shadow="shadow" />
          <ShadowSwatch name="LG" shadow="shadow-lg" />
          <ShadowSwatch name="XL" shadow="shadow-xl" />
          <ShadowSwatch name="2XL" shadow="shadow-2xl" />
          <ShadowSwatch name="Active Card" shadow={SHADOWS.ACTIVE_CARD} />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tight">Buttons</h2>
        <div className="flex flex-wrap gap-4">
          <div className={cn(BUTTON.VARIANT.PRIMARY, BUTTON.SIZE.DEFAULT)}>
            Primary Button
          </div>
          <div className={cn(BUTTON.VARIANT.SECONDARY, BUTTON.SIZE.DEFAULT)}>
            Secondary Button
          </div>
          <div className={cn(BUTTON.VARIANT.OUTLINE, BUTTON.SIZE.DEFAULT)}>
            Outline Button
          </div>
          <div className={cn(BUTTON.VARIANT.GHOST, BUTTON.SIZE.DEFAULT)}>
            Ghost Button
          </div>
        </div>

        <h3 className="text-xl font-semibold mt-6">Button Sizes</h3>
        <div className="flex flex-wrap items-center gap-4">
          <div className={cn(BUTTON.VARIANT.PRIMARY, BUTTON.SIZE.SM)}>
            Small
          </div>
          <div className={cn(BUTTON.VARIANT.PRIMARY, BUTTON.SIZE.DEFAULT)}>
            Default
          </div>
          <div className={cn(BUTTON.VARIANT.PRIMARY, BUTTON.SIZE.LG)}>
            Large
          </div>
          <div className={cn(BUTTON.VARIANT.PRIMARY, BUTTON.SIZE.XL)}>
            Extra Large
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tight">Cards</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className={CARD.VARIANT.BASIC}>
            <h3 className="text-lg font-semibold">Basic Card</h3>
            <p className="text-muted-foreground mt-2">
              A simple card for displaying content.
            </p>
          </div>

          <div className={CARD.VARIANT.INTERACTIVE}>
            <h3 className="text-lg font-semibold">Interactive Card</h3>
            <p className="text-muted-foreground mt-2">
              Hover over me to see the shadow effect.
            </p>
          </div>

          <div className={CARD.VARIANT.FEATURE}>
            <h3 className="text-lg font-semibold">Feature Card</h3>
            <p className="text-muted-foreground mt-2">
              Used for highlighting important features.
            </p>
          </div>

          <div className={CARD.VARIANT.GRADIENT}>
            <h3 className="text-lg font-semibold">Gradient Card</h3>
            <p className="text-muted-foreground mt-2">
              A card with a subtle gradient background.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tight">Forms</h2>
        <div className="max-w-md space-y-6">
          <div className="space-y-2">
            <label className={FORM.LABEL}>Text Input</label>
            <input
              type="text"
              placeholder="Enter your name"
              className={FORM.INPUT}
            />
          </div>

          <div className="space-y-2">
            <label className={FORM.LABEL}>Select Input</label>
            <select className={FORM.SELECT}>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className={FORM.LABEL}>Textarea</label>
            <textarea
              placeholder="Enter your message"
              className={FORM.INPUT}
              rows={4}
            ></textarea>
          </div>

          <div className="flex items-center space-x-2">
            <input type="checkbox" id="terms" className={FORM.CHECKBOX} />
            <label htmlFor="terms" className="text-sm">
              I agree to the terms and conditions
            </label>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tight">Grid Layouts</h2>

        <h3 className="text-xl font-semibold mt-6">Two Columns</h3>
        <div className={GRID.TWO_COLUMNS}>
          <div className="bg-muted p-6 rounded-lg">Column 1</div>
          <div className="bg-muted p-6 rounded-lg">Column 2</div>
        </div>

        <h3 className="text-xl font-semibold mt-6">Three Columns</h3>
        <div className={GRID.THREE_COLUMNS}>
          <div className="bg-muted p-6 rounded-lg">Column 1</div>
          <div className="bg-muted p-6 rounded-lg">Column 2</div>
          <div className="bg-muted p-6 rounded-lg">Column 3</div>
        </div>

        <h3 className="text-xl font-semibold mt-6">Four Columns</h3>
        <div className={GRID.FOUR_COLUMNS}>
          <div className="bg-muted p-6 rounded-lg">Column 1</div>
          <div className="bg-muted p-6 rounded-lg">Column 2</div>
          <div className="bg-muted p-6 rounded-lg">Column 3</div>
          <div className="bg-muted p-6 rounded-lg">Column 4</div>
        </div>
      </section>
    </div>
  );
}

function ColorSwatch({
  name,
  color,
}: {
  name: string;
  color: string;
  textColor?: string;
}) {
  return (
    <div className="flex flex-col">
      <div className={cn("h-20 rounded-md", color)} />
      <div className="mt-2">
        <p className="font-medium">{name}</p>
        <p className="text-sm text-muted-foreground">
          Tailwind class: {color.replace("bg-", "")}
        </p>
      </div>
    </div>
  );
}

function GradientSwatch({
  name,
  gradient,
  textColor = "text-gray-900",
}: {
  name: string;
  gradient: string;
  textColor?: string;
}) {
  return (
    <div className="flex flex-col">
      <div className={cn("h-20 rounded-md", gradient)} />
      <p className={cn("font-medium mt-2", textColor)}>{name}</p>
    </div>
  );
}

function ShadowSwatch({ name, shadow }: { name: string; shadow: string }) {
  return (
    <div
      className={cn(
        "p-6 rounded-lg bg-background border border-border",
        shadow,
      )}
    >
      <p className="font-medium">{name}</p>
      <p className="text-sm text-muted-foreground mt-1">Shadow: {shadow}</p>
    </div>
  );
}
