import Link from "next/link";

import { Button } from "~/components/ui/button";
import { auth } from "~/edgedb";
import { strings } from "~/locales/landing";

export const Header = async () => {
  return (
    <header className="mx-2 mb-4 flex h-16 items-center justify-between">
      <div className="text-2xl font-bold">lookfeel</div>
      <div className="flex gap-2">
        <Link href={auth.getBuiltinUIUrl()}>
          <Button variant="ghost">{strings.header.logIn.action}</Button>
        </Link>
        <Link href={auth.getBuiltinUISignUpUrl()}>
          <Button>{strings.header.signUp.action}</Button>
        </Link>
      </div>
    </header>
  );
};
