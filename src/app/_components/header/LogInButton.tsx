"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

import { LinkButton } from "~/components/ui/link-button";
import { strings } from "~/locales/landing";

type LogInButtonProps = {
  href: string;
};

export const LogInButton = ({ href }: LogInButtonProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();

  useEffect(() => {
    // Clear update param (u) set on logging out
    if (params.has("u")) {
      const newParams = new URLSearchParams(params);
      newParams.delete("u");
      router.replace(`${pathname}?${newParams.toString()}`);
      // Refresh to get up to date page
      router.refresh();
    }
  }, [params, pathname, router]);

  return (
    <LinkButton href={href} variant="ghost">
      {strings.header.logIn.action}
    </LinkButton>
  );
};
