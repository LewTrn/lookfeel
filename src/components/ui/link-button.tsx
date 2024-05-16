import Link from "next/link";

import { Button, type ButtonProps } from "./button";

type LinkButtonProps = ButtonProps & {
  href: string;
  asAnchor?: boolean;
};

export const LinkButton = ({
  href,
  loading,
  disabled,
  children,
  asAnchor,
  ...buttonProps
}: LinkButtonProps) => {
  if (loading) {
    return (
      <Button loading={loading} {...buttonProps}>
        {children}
      </Button>
    );
  }

  if (disabled) {
    return (
      <Button disabled={disabled} {...buttonProps}>
        {children}
      </Button>
    );
  }

  const Comp = asAnchor ? "a" : Link;

  return (
    <Comp href={href}>
      <Button asChild {...buttonProps}>
        <span>{children}</span>
      </Button>
    </Comp>
  );
};
