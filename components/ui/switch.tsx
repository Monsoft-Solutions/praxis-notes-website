"use client";

import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";

import { cn } from "website/lib/utils";

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        // Base styling with hand-drawn aesthetic
        "peer inline-flex h-6 w-11 shrink-0 items-center border-2 shadow-md transition-all duration-200 outline-none",
        // Unchecked state - ABA themed
        "data-[state=unchecked]:bg-gray-100 data-[state=unchecked]:border-gray-300",
        // Checked state - ABA blue theme
        "data-[state=checked]:bg-blue-400 data-[state=checked]:border-blue-500",
        // Focus styles
        "focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        // Hover effects
        "hover:shadow-lg hover:-translate-y-0.5",
        // Disabled state
        "disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:shadow-md",
        // Dark mode
        "dark:data-[state=unchecked]:bg-gray-800 dark:data-[state=unchecked]:border-gray-700",
        className
      )}
      style={{
        // Hand-drawn irregular border radius
        borderRadius: "15px 18px 14px 20px",
      }}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          // Base thumb styling
          "pointer-events-none block h-4 w-4 border-2 shadow-sm transition-all duration-200",
          // Positioning and movement
          "data-[state=checked]:translate-x-[1.25rem] data-[state=unchecked]:translate-x-0.5",
          // Unchecked state
          "data-[state=unchecked]:bg-white data-[state=unchecked]:border-gray-400",
          // Checked state
          "data-[state=checked]:bg-white data-[state=checked]:border-blue-600",
          // Dark mode
          "dark:data-[state=unchecked]:bg-gray-200 dark:data-[state=unchecked]:border-gray-500",
          "dark:data-[state=checked]:bg-white dark:data-[state=checked]:border-blue-600"
        )}
        style={{
          // Hand-drawn irregular border radius for thumb
          borderRadius: "12px 14px 11px 15px",
        }}
      />
    </SwitchPrimitive.Root>
  );
}

// Switch variants for different ABA colors
const SwitchVariants = {
  blue: {
    checkedBg: "data-[state=checked]:bg-blue-400",
    checkedBorder: "data-[state=checked]:border-blue-500",
    focusRing: "focus-visible:ring-blue-300",
  },
  green: {
    checkedBg: "data-[state=checked]:bg-green-400",
    checkedBorder: "data-[state=checked]:border-green-500",
    focusRing: "focus-visible:ring-green-300",
  },
  orange: {
    checkedBg: "data-[state=checked]:bg-orange-400",
    checkedBorder: "data-[state=checked]:border-orange-500",
    focusRing: "focus-visible:ring-orange-300",
  },
  yellow: {
    checkedBg: "data-[state=checked]:bg-yellow-400",
    checkedBorder: "data-[state=checked]:border-yellow-500",
    focusRing: "focus-visible:ring-yellow-300",
  },
};

// Enhanced Switch with color variants
function SwitchWithVariant({
  variant = "blue",
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root> & {
  variant?: keyof typeof SwitchVariants;
}) {
  const variantStyles = SwitchVariants[variant];

  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        // Base styling with hand-drawn aesthetic
        "peer inline-flex h-6 w-11 shrink-0 items-center border-2 shadow-md transition-all duration-200 outline-none",
        // Unchecked state
        "data-[state=unchecked]:bg-gray-100 data-[state=unchecked]:border-gray-300",
        // Dynamic checked state based on variant
        variantStyles.checkedBg,
        variantStyles.checkedBorder,
        // Focus styles with variant color
        "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        variantStyles.focusRing,
        // Hover effects
        "hover:shadow-lg hover:-translate-y-0.5",
        // Disabled state
        "disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:shadow-md",
        // Dark mode
        "dark:data-[state=unchecked]:bg-gray-800 dark:data-[state=unchecked]:border-gray-700",
        className
      )}
      style={{
        borderRadius: "15px 18px 14px 20px",
      }}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "pointer-events-none block h-4 w-4 border-2 shadow-sm transition-all duration-200",
          "data-[state=checked]:translate-x-[1.25rem] data-[state=unchecked]:translate-x-0.5",
          "data-[state=unchecked]:bg-white data-[state=unchecked]:border-gray-400",
          "data-[state=checked]:bg-white",
          // Dynamic border color for checked state
          variant === "blue" && "data-[state=checked]:border-blue-600",
          variant === "green" && "data-[state=checked]:border-green-600",
          variant === "orange" && "data-[state=checked]:border-orange-600",
          variant === "yellow" && "data-[state=checked]:border-yellow-600",
          "dark:data-[state=unchecked]:bg-gray-200 dark:data-[state=unchecked]:border-gray-500",
          "dark:data-[state=checked]:bg-white"
        )}
        style={{
          borderRadius: "12px 14px 11px 15px",
        }}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch, SwitchWithVariant, SwitchVariants };
