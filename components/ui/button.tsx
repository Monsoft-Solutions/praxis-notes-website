import { cn } from "website/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-quicksand font-semibold text-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:shadow-md hover:-translate-y-0.5 active:scale-[0.98] cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-blue-400 text-white hover:bg-blue-500 shadow-sm",
        destructive: "bg-red-500 text-white hover:bg-red-600 shadow-sm",
        outline:
          "border-2 border-blue-200 bg-white text-gray-900 hover:bg-blue-50 hover:border-blue-300",
        secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 shadow-sm",
        ghost: "hover:bg-blue-100 hover:text-blue-600 text-gray-700",
        link: "underline-offset-4 hover:underline text-blue-500 hover:text-blue-600",
        success: "bg-green-400 text-gray-900 hover:bg-green-500 shadow-sm",
        warning: "bg-orange-400 text-gray-900 hover:bg-orange-500 shadow-sm",
        info: "bg-yellow-400 text-gray-800 hover:bg-yellow-500 shadow-sm",
      },
      size: {
        default: "h-11 py-2 px-4",
        sm: "h-9 px-3 text-sm",
        lg: "h-12 px-6 text-base",
        xl: "h-14 px-8 text-lg",
        icon: "h-9 w-9 p-0",
      },
      radius: {
        default: "rounded-hand-drawn-sm",
        normal: "rounded-xl",
        large: "rounded-hand-drawn",
        irregular: "rounded-irregular",
      },
      animation: {
        none: "",
        gentle: "hover:animate-gentle-bounce",
        float: "animate-subtle-float",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      radius: "default",
      animation: "none",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = ({
  className,
  variant,
  size,
  radius,
  animation,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        buttonVariants({ variant, size, radius, animation, className })
      )}
      {...props}
    />
  );
};

export { Button, buttonVariants };
