import { RedoIcon, UndoIcon } from "lucide-react";

import { Button } from "~/components/ui/button";
import { IconButton } from "~/components/ui/icon-button";
import { strings } from "~/locales/generate";

export const Header = () => {
  return (
    <div className="mb-4 flex h-16 items-center justify-between">
      <div className="flex items-center gap-2">
        <IconButton Icon={UndoIcon} />
        <IconButton Icon={RedoIcon} />
        <Button variant="ghost">
          {strings.visualise.header.generate.action}
        </Button>
      </div>
      <div className="flex gap-2">
        <Button variant="ghost">
          {strings.visualise.header.preview.action}
        </Button>
        <Button>{strings.visualise.header.publish.action}</Button>
      </div>
    </div>
  );
};
