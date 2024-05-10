import { cx } from "class-variance-authority";
import { type PropsWithChildren } from "react";

import Typography from "./typography";

type BadgeProps = PropsWithChildren<{
  className?: string;
}>;

export const Badge = ({ children, className }: BadgeProps) => {
  return (
    <div>
      <Typography
        variant="caption"
        className={cx("rounded-full border px-2 py-1", className)}
      >
        {children}
      </Typography>
    </div>
  );
};
