import { type ComponentProps } from "react";

import { FontRow } from "~/components/theme/view/details/FontRow";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";

type FontPickerRowProps = ComponentProps<typeof FontRow>;

export const FontPickerRow = (props: FontPickerRowProps) => {
  return (
    <Popover>
      <PopoverTrigger className="group relative flex w-full text-left">
        <FontRow {...props} />
        <div className="absolute inset-0 -left-2 -top-1 -z-10 h-[calc(100%+8px)] w-[calc(100%+8px)] rounded-lg bg-accent opacity-0 transition-opacity group-hover:opacity-100" />
      </PopoverTrigger>
      <PopoverContent side="right" className="w-[200px]"></PopoverContent>
    </Popover>
  );
};
