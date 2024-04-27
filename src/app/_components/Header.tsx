import Link from "next/link";

import { Button } from "~/components/ui/button";
import { strings } from "~/locales/landing";

export const Header = () => {
  return (
    <header className="mb-4 flex h-16 items-center justify-between px-2">
      <div className="text-2xl font-bold">lookfeel</div>
      <div className="flex gap-2">
        <Button variant="ghost">{strings.header.logIn.action}</Button>
        <Link href="/generate">
          <Button>{strings.header.start.action}</Button>
        </Link>
      </div>
    </header>
  );
};
