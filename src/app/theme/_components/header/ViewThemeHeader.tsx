import Link from "next/link";

import { Button } from "~/components/ui/button";
import { strings } from "~/locales/theme";

export const ViewThemeHeader = () => {
  return (
    <header className="sticky top-0 z-50 mx-2 mb-4 flex h-16 items-center justify-between bg-background px-8">
      <Link href="/" className="text-2xl font-bold">
        lookfeel
      </Link>
      <Button>{strings.view.edit.action}</Button>
    </header>
  );
};
