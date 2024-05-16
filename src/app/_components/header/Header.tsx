import { LinkButton } from "~/components/ui/link-button";
import { auth } from "~/edgedb";
import { strings } from "~/locales/landing";

import { LogInButton } from "./LogInButton";

const SignedInOptions = () => {
  return (
    <>
      <LinkButton variant="ghost" href={auth.getSignoutUrl()}>
        {strings.header.logOut.action}
      </LinkButton>
      <LinkButton href="/generate">{strings.header.start.action}</LinkButton>
    </>
  );
};

const SignedOutOptions = () => (
  <>
    <LogInButton href={auth.getBuiltinUIUrl()} />
    <LinkButton href={auth.getBuiltinUISignUpUrl()}>
      {strings.header.signUp.action}
    </LinkButton>
  </>
);

export const Header = async () => {
  const session = auth.getSession();
  const signedIn = await session.isSignedIn();

  return (
    <header className="mx-2 mb-4 flex h-16 items-center justify-between">
      <div className="text-2xl font-bold">lookfeel</div>
      <div className="flex gap-2">
        {signedIn ? <SignedInOptions /> : <SignedOutOptions />}
      </div>
    </header>
  );
};
