import { LockKeyholeIcon } from "lucide-react";

import { IconButton } from "~/components/ui/icon-button";

type FontProps = {
  font: string;
  type: string;
};

const Font = ({ font, type }: FontProps) => {
  return (
    <div
      className="group flex items-center justify-between rounded-lg bg-card p-4 shadow"
      style={{ fontFamily: font }}
    >
      <div className="flex flex-col">
        <div className="text-2xl">{font}</div>
        <div className="opacity-75">{type}</div>
      </div>
      <div className="opacity-0 transition-opacity group-hover:opacity-100">
        <IconButton Icon={LockKeyholeIcon} />
      </div>
    </div>
  );
};

export const Fonts = () => {
  return (
    <div className="flex flex-col gap-2">
      <Font font="Georgia" type="Heading" />
      <Font font="Arial" type="Body" />
    </div>
  );
};
