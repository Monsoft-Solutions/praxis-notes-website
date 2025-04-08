import { cn } from "website/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const cardVariants = cva("rounded-lg text-card-foreground", {
  variants: {
    variant: {
      default: "bg-background border border-border p-6",
      interactive:
        "bg-background border border-border p-6 hover:shadow-lg transition-shadow",
      feature:
        "bg-white dark:bg-gray-900 rounded-xl p-8 shadow-xl hover:shadow-2xl transition-shadow border border-blue-100 dark:border-blue-900/50",
      gradient:
        "bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 rounded-xl p-6",
    },
    shadow: {
      none: "shadow-none",
      sm: "shadow-sm",
      md: "shadow",
      lg: "shadow-lg",
      xl: "shadow-xl",
      "2xl": "shadow-2xl",
    },
  },
  defaultVariants: {
    variant: "default",
    shadow: "sm",
  },
});

interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card = ({ className, variant, shadow, ...props }: CardProps) => {
  return (
    <div
      className={cn(cardVariants({ variant, shadow, className }))}
      {...props}
    />
  );
};

const CardHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn("flex flex-col space-y-1.5 p-6", className)}
      {...props}
    />
  );
};

const CardTitle = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h3
      className={cn(
        "text-2xl font-semibold leading-none tracking-tight",
        className,
      )}
      {...props}
    />
  );
};

const CardDescription = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => {
  return (
    <p className={cn("text-sm text-muted-foreground", className)} {...props} />
  );
};

const CardContent = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className={cn("pt-0", className)} {...props} />;
};

const CardFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className={cn("flex items-center pt-4", className)} {...props} />;
};

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
};
