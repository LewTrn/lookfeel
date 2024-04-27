import { cva, type VariantProps } from "class-variance-authority";
import { type LucideIcon } from "lucide-react";
import * as React from "react";

import { cn } from "~/lib/utils";

const variants = cva(
  "inline-flex items-center justify-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-card text-card-foreground hover:bg-accent hover:text-accent-foreground focus-visible:bg-accent focus-visible:text-accent-foreground",
      },
      size: {
        default: "h-10 w-10",
        sm: "h-8 w-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const SIZES = {
  default: { width: 24, height: 24, strokeWidth: 1.75 },
  sm: { width: 20, height: 20, strokeWidth: 2 },
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof variants> {
  as?: React.ElementType;
  Icon?: LucideIcon;
}

const IconButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, Icon, as, children, ...props }, ref) => {
    const Comp = as ?? "button";

    return (
      <Comp
        className={cn(variants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {Icon ? <Icon {...SIZES[size ?? "default"]} /> : children}
      </Comp>
    );
  },
);
IconButton.displayName = "IconButton";

export { IconButton };
