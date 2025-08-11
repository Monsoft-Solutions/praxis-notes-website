import { cn } from 'website/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { Slot } from '@radix-ui/react-slot';

const buttonVariants = cva(
  'inline-flex items-center justify-center font-quicksand font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:shadow-md hover:-translate-y-0.5 active:scale-[0.98] cursor-pointer border-2 relative overflow-hidden btn-text-sketch',
  {
    variants: {
      variant: {
        default:
          'bg-blue-400 text-white hover:bg-blue-500 shadow-sm border-blue-500 hover:border-blue-600',
        destructive:
          'bg-red-500 text-white hover:bg-red-600 shadow-sm border-red-600 hover:border-red-700',
        outline:
          'border-2 border-blue-200 bg-white text-gray-900 hover:bg-blue-50 hover:border-blue-300',
        secondary:
          'bg-gray-100 text-gray-900 hover:bg-gray-200 shadow-sm border-gray-300 hover:border-gray-400',
        ghost:
          'hover:bg-blue-100 hover:text-blue-600 text-gray-700 border-transparent hover:border-blue-200',
        link: 'underline-offset-4 hover:underline text-blue-500 hover:text-blue-600 border-transparent',
        success:
          'bg-green-400 text-gray-900 hover:bg-green-500 shadow-sm border-green-500 hover:border-green-600',
        warning:
          'bg-orange-400 text-gray-900 hover:bg-orange-500 shadow-sm border-orange-500 hover:border-orange-600',
        info: 'bg-yellow-400 text-gray-800 hover:bg-yellow-500 shadow-sm border-yellow-500 hover:border-yellow-600',
        // CTA-specific variants with enhanced styling
        'cta-primary':
          'bg-blue-400 text-white hover:bg-blue-500 hover:shadow-lg shadow-sm border-blue-500 hover:border-blue-600',
        'cta-secondary':
          'border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 hover:shadow-md bg-white',
        // Hero-specific variants
        'hero-primary':
          'bg-blue-400 text-white hover:bg-blue-500 shadow-sm border-blue-500 hover:border-blue-600',
        'hero-secondary':
          'border-2 border-green-300 text-green-500 hover:bg-green-50 bg-white hover:border-green-400',
        // Header variants
        header:
          'bg-blue-400 text-white hover:bg-blue-500 shadow-sm border-blue-500 hover:border-blue-600',
        // Form variants
        'form-primary':
          'bg-blue-400 text-white hover:bg-blue-500 shadow-sm border-blue-500 hover:border-blue-600',
        'form-secondary':
          'bg-white border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400',
      },
      size: {
        default: 'h-11 py-2 px-4 text-sm',
        sm: 'h-9 px-3 text-sm',
        lg: 'h-12 px-6 text-base',
        xl: 'h-14 px-8 text-lg',
        icon: 'h-9 w-9 p-0',
        // CTA-specific sizes
        'cta-default': 'h-14 px-8 py-4 text-lg',
        'cta-compact': 'h-12 px-6 py-3 text-base',
      },
      radius: {
        default: 'rounded-hand-drawn-sm',
        normal: 'rounded-xl',
        large: 'rounded-hand-drawn',
        irregular: 'rounded-irregular',
        // Specific hand-drawn variants for different use cases
        'hand-drawn-xs': '', // Applied via style prop: 10px 12px 8px 14px
        'hand-drawn-sm': '', // Applied via style prop: 12px 14px 12px 16px
        'hand-drawn-md': '', // Applied via style prop: 16px 20px 14px 22px
        'hand-drawn-lg': '', // Applied via style prop: 20px 26px 18px 30px
        'hand-drawn-xl': '', // Applied via style prop: 24px 30px 20px 35px
        // CTA-specific radius variants
        'cta-primary': '', // Applied via style prop: 16px 18px 14px 20px
        'cta-secondary': '', // Applied via style prop: 14px 20px 16px 18px
        // Additional site-specific patterns
        pricing: '', // Applied via style prop: 15px 20px 12px 18px
        'form-secondary': '', // Applied via style prop: 14px 12px 16px 12px
        'hero-primary': '', // Applied via style prop: 16px 20px 14px 18px
        'hero-secondary': '', // Applied via style prop: 14px 18px 12px 16px
      },
      animation: {
        none: '',
        gentle: 'animate-gentle-sketch-bounce',
        float: 'animate-subtle-sketch-float',
      },
      sketch: {
        none: '',
        subtle: 'btn-sketch-subtle',
        enhanced: 'btn-sketch-enhanced btn-texture',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      radius: 'default',
      animation: 'none',
      sketch: 'subtle',
    },
  }
);

// Helper function to get hand-drawn border radius styles
const getHandDrawnStyle = (
  radius: string | null | undefined,
  sketch: string | null | undefined
) => {
  const radiusMap = {
    'hand-drawn-xs': '10px 12px 8px 14px',
    'hand-drawn-sm': '12px 14px 12px 16px',
    'hand-drawn-md': '16px 20px 14px 22px',
    'hand-drawn-lg': '20px 26px 18px 30px',
    'hand-drawn-xl': '24px 30px 20px 35px',
    'cta-primary': '16px 18px 14px 20px',
    'cta-secondary': '14px 20px 16px 18px',
    // Additional patterns found across the site
    pricing: '15px 20px 12px 18px',
    'form-secondary': '14px 12px 16px 12px',
    'hero-primary': '16px 20px 14px 18px',
    'hero-secondary': '14px 18px 12px 16px',
  };

  const baseStyle =
    radius && radiusMap[radius as keyof typeof radiusMap]
      ? { borderRadius: radiusMap[radius as keyof typeof radiusMap] }
      : {};

  // Add subtle text shadow for hand-drawn effect
  const textShadow =
    sketch !== 'none' ? { textShadow: '1px 1px 2px rgba(0,0,0,0.1)' } : {};

  return { ...baseStyle, ...textShadow };
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  /**
   * Hand-drawn sketch effects for buttons
   * @default "subtle"
   *
   * @example
   * ```tsx
   * // Basic hand-drawn button
   * <Button sketch="subtle">Click me</Button>
   *
   * // Enhanced sketch with texture
   * <Button sketch="enhanced" variant="cta-primary">Get Started</Button>
   *
   * // No sketch effects (clean button)
   * <Button sketch="none">Simple Button</Button>
   * ```
   */
  sketch?: 'none' | 'subtle' | 'enhanced';
}

/**
 * Hand-drawn sketch button component with ABA-themed styling
 *
 * Features:
 * - Irregular border radius for hand-drawn aesthetic
 * - Subtle text shadows and borders
 * - Multiple sketch levels (none, subtle, enhanced)
 * - Gentle hover animations
 * - Full accessibility support
 *
 * @example
 * ```tsx
 * // Default hand-drawn button
 * <Button>Default Button</Button>
 *
 * // CTA with enhanced sketch
 * <Button variant="cta-primary" sketch="enhanced" animation="gentle">
 *   Get Started Today
 * </Button>
 *
 * // Header button with custom radius
 * <Button variant="header" radius="hand-drawn-sm">
 *   Sign In
 * </Button>
 *
 * // Success button with float animation
 * <Button variant="success" animation="float">
 *   Save Changes
 * </Button>
 * ```
 */
const Button = ({
  className,
  variant,
  size,
  radius,
  animation,
  sketch = 'subtle',
  style,
  asChild,
  ...props
}: ButtonProps) => {
  const handDrawnStyle = getHandDrawnStyle(radius, sketch);
  const combinedStyle = { ...handDrawnStyle, ...style };
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      className={cn(
        buttonVariants({ variant, size, radius, animation, sketch, className })
      )}
      style={combinedStyle}
      {...props}
    />
  );
};

export { Button, buttonVariants };
