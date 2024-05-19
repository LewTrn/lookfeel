import { type ComponentProps } from "react";

import { ColourRow } from "~/components/theme/view/details/ColourRow";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";

type ColourPickerProps = ComponentProps<typeof ColourRow>;

export const ColourPickerRow = (props: ColourPickerProps) => {
  return (
    <Popover>
      <PopoverTrigger className="flex w-full">
        <ColourRow {...props} />
      </PopoverTrigger>
      <PopoverContent side="right">Colour picker</PopoverContent>
    </Popover>
  );
};
