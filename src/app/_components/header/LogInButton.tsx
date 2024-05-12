"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

import { Button } from "~/components/ui/button";
import { strings } from "~/locales/landing";

export const LogInButton = () => {
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

  return <Button variant="ghost">{strings.header.logIn.action}</Button>;
};
