import { type ComponentProps } from "react";
import { HexColorInput, HexColorPicker } from "react-colorful";

import { ColourRow } from "~/components/theme/view/details/ColourRow";
import { inputVariants } from "~/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { cn } from "~/lib/utils";

type ColourPickerProps = ComponentProps<typeof ColourRow>;

export const ColourPickerRow = (props: ColourPickerProps) => {
  return (
    <Popover>
      <PopoverTrigger className="flex w-full">
        <ColourRow {...props} />
      </PopoverTrigger>
      <PopoverContent side="right" className="flex w-[200px] flex-col gap-2">
        <HexColorPicker className="custom" />
        <HexColorInput prefixed className={cn(inputVariants())} />
      </PopoverContent>
    </Popover>
  );
};
