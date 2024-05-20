"use client";

import { useSignedIn } from "~/components/auth/AuthProvider";
import { LinkButton } from "~/components/ui/link-button";
import { strings } from "~/locales/landing";

import { LogInButton } from "./LogInButton";

export const Header = async () => {
  const { signedIn, signInUrl, signUpUrl, signOutUrl } = useSignedIn();

  return (
    <header className="mx-2 mb-4 flex h-16 items-center justify-between">
      <div className="text-2xl font-bold">lookfeel</div>
      <div className="flex gap-2">
        {signedIn ? (
          <>
            <LinkButton variant="ghost" href={signOutUrl}>
              {strings.header.logOut.action}
            </LinkButton>
            <LinkButton href="/generate">
              {strings.header.start.action}
            </LinkButton>
          </>
        ) : (
          <>
            <LogInButton href={signInUrl} />
            <LinkButton href={signUpUrl}>
              {strings.header.signUp.action}
            </LinkButton>
          </>
        )}
      </div>
    </header>
  );
};
