import { ExternalLinkIcon } from "lucide-react";
import { type ComponentProps } from "react";

import { FontRow } from "~/components/theme/view/details/FontRow";
import { IconButton } from "~/components/ui/icon-button";

type CopyColourRowProps = ComponentProps<typeof FontRow>;

export const FontLinkRow = (props: CopyColourRowProps) => {
  const url = new URL(props.font, "https://fonts.google.com/specimen/");

  return (
    <a
      href={url.toString()}
      target="_blank"
      className="group relative flex w-full"
    >
      <FontRow {...props} />
      <div className="absolute inset-0 -left-2 -top-1 -z-10 h-[calc(100%+8px)] w-[calc(100%+8px)] rounded-lg bg-accent opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="absolute right-1 top-0 opacity-0 transition-opacity group-hover:opacity-100">
        <IconButton
          Icon={ExternalLinkIcon}
          size="sm"
          variant="ghost"
          as="div"
        />
      </div>
    </a>
  );
};
