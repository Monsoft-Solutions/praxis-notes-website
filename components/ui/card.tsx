import { cn } from "website/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const cardVariants = cva("rounded-lg text-card-foreground", {
  variants: {
    variant: {
      default:
        "bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 p-6",
      interactive:
        "bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 p-6 hover:shadow-lg transition-shadow",
      feature:
        "bg-white dark:bg-slate-800 rounded-xl p-8 shadow-xl hover:shadow-2xl transition-shadow border border-gray-200 dark:border-slate-700",
      gradient:
        "bg-gradient-to-br from-gray-50 to-white dark:from-slate-900 dark:to-slate-800 rounded-xl p-6",
      aboutTeam:
        "bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-slate-700",
      aboutValue:
        "bg-white dark:bg-slate-900 rounded-xl p-8 shadow-xl hover:shadow-2xl transition-shadow border border-gray-200 dark:border-slate-700 relative overflow-hidden group",
      infoBox: "bg-gray-100 dark:bg-slate-800 rounded-xl p-8 shadow-lg",
      comparisonBox:
        "bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg max-w-lg border border-gray-200 dark:border-slate-700",
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
        className
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
