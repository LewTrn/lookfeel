import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

import { cn } from "~/lib/utils";

export const variants = cva("select-none", {
  variants: {
    variant: {
      h1: "mb-4 text-4xl font-bold",
      h2: "mb-2 text-xl font-semibold",
      h3: "mb-1 text-lg font-semibold",
      h4: "text-md font-medium",
      body: "text-md",
      caption: "text-xs",
    },
  },
  defaultVariants: {
    variant: "body",
  },
});

export interface TypographyProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof variants> {
  as?: React.ElementType;
}

const Typography = React.forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ className, variant, as, ...props }, ref) => {
    const Comp = as ?? "div";
    return (
      <Comp
        className={cn(variants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Typography.displayName = "Typography";

export default Typography;
