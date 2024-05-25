"use client";

import { useSignedIn } from "~/components/auth/AuthProvider";
import { LinkButton } from "~/components/ui/link-button";
import { strings } from "~/locales/landing";

import { LogInButton } from "./LogInButton";

export const Header = () => {
  const { signedIn, signInUrl, signOutUrl } = useSignedIn();

  return (
    <header className="mx-2 flex h-20 items-center justify-between md:mb-4">
      <div className="text-2xl font-bold">lookfeel</div>
      <div className="hidden gap-2 md:flex">
        {signedIn ? (
          <LinkButton variant="ghost" href={signOutUrl}>
            {strings.header.logOut.action}
          </LinkButton>
        ) : (
          <LogInButton href={signInUrl} />
        )}
        <LinkButton href="/generate">{strings.header.start.action}</LinkButton>
      </div>
    </header>
  );
};
