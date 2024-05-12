import Link from "next/link";

import { Button } from "~/components/ui/button";
import { auth } from "~/edgedb";
import { strings } from "~/locales/landing";

const SignedInOptions = () => {
  return (
    <>
      <Link href={auth.getSignoutUrl()}>
        <Button variant="ghost">{strings.header.logOut.action}</Button>
      </Link>
      <Link href="/generate">
        <Button>{strings.header.start.action}</Button>
      </Link>
    </>
  );
};

const SignedOutOptions = () => (
  <>
    <Link href={auth.getBuiltinUIUrl()}>
      <Button variant="ghost">{strings.header.logIn.action}</Button>
    </Link>
    <Link href={auth.getBuiltinUISignUpUrl()}>
      <Button>{strings.header.signUp.action}</Button>
    </Link>
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
