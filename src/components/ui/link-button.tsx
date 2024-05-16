import Link, { type LinkProps } from "next/link";

import { Button, type ButtonProps } from "./button";

type LinkButtonProps = ButtonProps & Pick<LinkProps, "href">;

export const LinkButton = ({
  href,
  loading,
  disabled,
  children,
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

  return (
    <Button asChild {...buttonProps}>
      <Link href={href}>{children}</Link>
    </Button>
  );
};
