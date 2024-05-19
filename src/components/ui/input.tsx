import { cva, type VariantProps } from "class-variance-authority";
import { type LucideIcon } from "lucide-react";
import * as React from "react";

import { cn } from "~/lib/utils";

const variants = cva(
  "flex w-full rounded-full placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "text-accent-primary bg-accent placeholder:text-muted-foreground",
      },
      size: {
        default: "h-8 px-2.5 py-1 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof variants> & {
    Icon?: LucideIcon;
  };

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant, size, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(variants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input, variants as inputVariants };
