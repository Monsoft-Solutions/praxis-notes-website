import { cn } from 'website/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  'inline-flex items-center justify-center font-quicksand font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:shadow-md hover:-translate-y-0.5 active:scale-[0.98] cursor-pointer',
  {
    variants: {
      variant: {
        default: 'bg-blue-400 text-white hover:bg-blue-500 shadow-sm',
        destructive: 'bg-red-500 text-white hover:bg-red-600 shadow-sm',
        outline:
          'border-2 border-blue-200 bg-white text-gray-900 hover:bg-blue-50 hover:border-blue-300',
        secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 shadow-sm',
        ghost: 'hover:bg-blue-100 hover:text-blue-600 text-gray-700',
        link: 'underline-offset-4 hover:underline text-blue-500 hover:text-blue-600',
        success: 'bg-green-400 text-gray-900 hover:bg-green-500 shadow-sm',
        warning: 'bg-orange-400 text-gray-900 hover:bg-orange-500 shadow-sm',
        info: 'bg-yellow-400 text-gray-800 hover:bg-yellow-500 shadow-sm',
        // CTA-specific variants with enhanced styling
        'cta-primary':
          'bg-blue-400 text-white hover:bg-blue-500 hover:shadow-lg shadow-sm',
        'cta-secondary':
          'border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 hover:shadow-md bg-white',
        // Hero-specific variants
        'hero-primary': 'bg-blue-400 text-white hover:bg-blue-500 shadow-sm',
        'hero-secondary':
          'border-2 border-green-300 text-green-500 hover:bg-green-50 bg-white',
        // Header variants
        header: 'bg-blue-400 text-white hover:bg-blue-500 shadow-sm border-0',
        // Form variants
        'form-primary': 'bg-blue-400 text-white hover:bg-blue-500 shadow-sm',
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
        gentle: 'hover:animate-gentle-bounce',
        float: 'animate-subtle-float',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      radius: 'default',
      animation: 'none',
    },
  }
);

// Helper function to get hand-drawn border radius styles
const getHandDrawnStyle = (radius: string | null | undefined) => {
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

  return radius && radiusMap[radius as keyof typeof radiusMap]
    ? { borderRadius: radiusMap[radius as keyof typeof radiusMap] }
    : {};
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = ({
  className,
  variant,
  size,
  radius,
  animation,
  style,
  ...props
}: ButtonProps) => {
  const handDrawnStyle = getHandDrawnStyle(radius);
  const combinedStyle = { ...handDrawnStyle, ...style };

  return (
    <button
      className={cn(
        buttonVariants({ variant, size, radius, animation, className })
      )}
      style={combinedStyle}
      {...props}
    />
  );
};

export { Button, buttonVariants };
