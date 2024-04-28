import { RedoIcon, UndoIcon } from "lucide-react";
import Link from "next/link";

import { Button } from "~/components/ui/button";
import { IconButton } from "~/components/ui/icon-button";
import { strings } from "~/locales/generate";

export const Header = () => {
  return (
    <header className="mx-2 mb-4 flex h-16 items-center justify-between gap-8">
      <Link href="/" className="w-[19.5rem] text-2xl font-bold">
        lookfeel
      </Link>
      <div className="flex w-full justify-between">
        <div className="flex items-center gap-2">
          <IconButton Icon={UndoIcon} variant="ghost" />
          <IconButton Icon={RedoIcon} variant="ghost" />
          <Button variant="ghost">
            {strings.visualise.header.generate.action}
          </Button>
        </div>
        <Button>{strings.visualise.header.publish.action}</Button>
      </div>
    </header>
  );
};
