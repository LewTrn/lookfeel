import { RedoIcon, UndoIcon } from "lucide-react";
import Link from "next/link";

import { Button } from "~/components/ui/button";
import { IconButton } from "~/components/ui/icon-button";
import { strings } from "~/locales/generate";

export const Header = () => {
  return (
    <div className="mb-2 mr-2 flex h-16 items-center justify-between">
      <div className="flex items-center gap-2">
        <IconButton Icon={UndoIcon} variant="ghost" />
        <IconButton Icon={RedoIcon} variant="ghost" />
        <Button variant="ghost">
          {strings.visualise.header.generate.action}
        </Button>
      </div>
      <div className="flex gap-2">
        <Link href="/theme">
          <Button>{strings.visualise.header.publish.action}</Button>
        </Link>
      </div>
    </div>
  );
};
