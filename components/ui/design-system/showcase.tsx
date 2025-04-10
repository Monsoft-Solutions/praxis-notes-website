"use client";

import { cn } from "../../../lib/utils";
import {
  GRADIENTS,
  SHADOWS,
  BUTTON,
  CARD,
  FORM,
  GRID,
  BADGES,
} from "./design-tokens";

export function DesignSystemShowcase() {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tight">
          ABA-Inspired Pastel Color Palette
        </h2>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Primary Colors</h3>
          <div className={GRID.FOUR_COLUMNS}>
            <ColorSwatch
              name="Soft Blue"
              color="bg-soft-blue"
              textColor="text-charcoal"
              hex="#A8D8EA"
              usage="Primary actions, buttons, links"
            />
            <ColorSwatch
              name="Lavender"
              color="bg-lavender"
              textColor="text-charcoal"
              hex="#CDB4DB"
              usage="Secondary elements, highlights"
            />
            <ColorSwatch
              name="Mint Green"
              color="bg-mint-green"
              textColor="text-charcoal"
              hex="#BEFFC7"
              usage="Success states, progress indicators"
            />
            <ColorSwatch
              name="Peach"
              color="bg-peach"
              textColor="text-charcoal"
              hex="#FFD6BA"
              usage="Warnings, notifications"
            />
            <ColorSwatch
              name="Light Pink"
              color="bg-light-pink"
              textColor="text-charcoal"
              hex="#FFACC7"
              usage="Error states, critical information"
            />
          </div>
        </div>

        <div className="space-y-2 mt-6">
          <h3 className="text-xl font-semibold">Neutral Colors (Light Mode)</h3>
          <div className={GRID.FOUR_COLUMNS}>
            <ColorSwatch
              name="Ivory"
              color="bg-ivory"
              textColor="text-charcoal"
              hex="#FFFDF9"
              usage="Background"
            />
            <ColorSwatch
              name="Soft Gray"
              color="bg-soft-gray"
              textColor="text-charcoal"
              hex="#F3F3F3"
              usage="Cards, containers"
            />
            <ColorSwatch
              name="Medium Gray"
              color="bg-medium-gray"
              textColor="text-charcoal"
              hex="#CDCDCD"
              usage="Borders, dividers"
            />
            <ColorSwatch
              name="Charcoal"
              color="bg-charcoal"
              textColor="text-white"
              hex="#333333"
              usage="Text, icons"
            />
          </div>
        </div>

        <div className="space-y-2 mt-6">
          <h3 className="text-xl font-semibold">Dark Mode Colors</h3>
          <div className={GRID.FOUR_COLUMNS}>
            <ColorSwatch
              name="Deep Navy"
              color="bg-deep-navy"
              textColor="text-white"
              hex="#1A2238"
              usage="Background (dark mode)"
            />
            <ColorSwatch
              name="Steel Blue"
              color="bg-steel-blue"
              textColor="text-white"
              hex="#394867"
              usage="Cards, containers"
            />
            <ColorSwatch
              name="Soft Lavender"
              color="bg-soft-lavender"
              textColor="text-deep-navy"
              hex="#9BA4B4"
              usage="Borders, dividers"
            />
            <ColorSwatch
              name="Off White"
              color="bg-off-white"
              textColor="text-deep-navy"
              hex="#F1F6F9"
              usage="Text, icons"
            />
          </div>
        </div>

        <h3 className="text-xl font-semibold mt-6">Gradients</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <GradientSwatch
            name="Primary Gradient"
            gradient={GRADIENTS.PRIMARY}
            textColor="text-charcoal"
          />
          <GradientSwatch
            name="Secondary Gradient"
            gradient={GRADIENTS.SECONDARY}
            textColor="text-charcoal"
          />
          <GradientSwatch
            name="Soft Gradient"
            gradient={GRADIENTS.SOFT}
            textColor="text-charcoal"
          />
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
              Base paragraph text (16px). The Praxis Notes platform offers
              comprehensive tools for ABA professionals to document and analyze
              client behaviors using a calming pastel design.
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
          <ShadowSwatch name="SM" shadow={SHADOWS.SM} />
          <ShadowSwatch name="MD" shadow={SHADOWS.MD} />
          <ShadowSwatch name="LG" shadow={SHADOWS.LG} />
          <ShadowSwatch name="XL" shadow={SHADOWS.XL} />
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
          <div className={cn(BUTTON.VARIANT.SUCCESS, BUTTON.SIZE.DEFAULT)}>
            Success Button
          </div>
          <div className={cn(BUTTON.VARIANT.WARNING, BUTTON.SIZE.DEFAULT)}>
            Warning Button
          </div>
          <div className={cn(BUTTON.VARIANT.ERROR, BUTTON.SIZE.DEFAULT)}>
            Error Button
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mt-4">
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
        <h2 className="text-3xl font-bold tracking-tight">Badges</h2>
        <div className="flex flex-wrap gap-4">
          <div className={cn(BADGES.DEFAULT, BADGES.PRIMARY)}>Primary</div>
          <div className={cn(BADGES.DEFAULT, BADGES.SECONDARY)}>Secondary</div>
          <div className={cn(BADGES.DEFAULT, BADGES.SUCCESS)}>Success</div>
          <div className={cn(BADGES.DEFAULT, BADGES.WARNING)}>Warning</div>
          <div className={cn(BADGES.DEFAULT, BADGES.ERROR)}>Error</div>
          <div className={cn(BADGES.DEFAULT, BADGES.OUTLINE)}>Outline</div>
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

        <h3 className="text-xl font-semibold mt-6">Pastel-Themed Cards</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className={CARD.VARIANT.SOFT_BLUE}>
            <h3 className="text-lg font-semibold">Soft Blue Card</h3>
            <p className="text-muted-foreground mt-2">
              For primary data or important information.
            </p>
          </div>

          <div className={CARD.VARIANT.LAVENDER}>
            <h3 className="text-lg font-semibold">Lavender Card</h3>
            <p className="text-muted-foreground mt-2">
              For secondary data or supporting information.
            </p>
          </div>

          <div className={CARD.VARIANT.MINT}>
            <h3 className="text-lg font-semibold">Mint Card</h3>
            <p className="text-muted-foreground mt-2">
              For progress tracking or positive reinforcement.
            </p>
          </div>

          <div className={CARD.VARIANT.PEACH}>
            <h3 className="text-lg font-semibold">Peach Card</h3>
            <p className="text-muted-foreground mt-2">
              For warnings or important notifications.
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
  textColor = "text-charcoal",
  hex,
  usage,
}: {
  name: string;
  color: string;
  textColor?: string;
  hex?: string;
  usage?: string;
}) {
  return (
    <div className="flex flex-col">
      <div className={cn("h-20 rounded-lg", color)} />
      <div className={cn("mt-2", textColor)}>
        <p className="font-medium">{name}</p>
        {hex && <p className="text-xs text-muted-foreground">{hex}</p>}
        {usage && <p className="text-xs text-muted-foreground mt-1">{usage}</p>}
      </div>
    </div>
  );
}

function GradientSwatch({
  name,
  gradient,
  textColor = "text-charcoal",
}: {
  name: string;
  gradient: string;
  textColor?: string;
}) {
  return (
    <div
      className={cn(
        "h-24 rounded-lg flex items-center justify-center p-4",
        gradient,
        textColor
      )}
    >
      <p className="font-medium text-center">{name}</p>
    </div>
  );
}

function ShadowSwatch({ name, shadow }: { name: string; shadow: string }) {
  return (
    <div
      className={cn(
        "h-24 rounded-lg bg-background flex items-center justify-center p-4",
        shadow
      )}
    >
      <p className="font-medium text-center">{name}</p>
    </div>
  );
}
