import { type ComponentProps, useEffect, useState } from "react";
import { HexColorInput, HexColorPicker } from "react-colorful";

import { ColourRow } from "~/components/theme/view/details/ColourRow";
import { inputVariants } from "~/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { cn } from "~/lib/utils";

import { useGenerateStore } from "../../_store/useGenerateStore";
import { usePaletteParams } from "../../_utils/params/usePaletteParams";
import { EyeDropperButton } from "./EyeDropperButton";

type ColourPickerProps = ComponentProps<typeof ColourRow>;

export const ColourPickerRow = (props: ColourPickerProps) => {
  const palette = useGenerateStore((state) => state.palette);
  const updatePalette = useGenerateStore((state) => state.updatePalette);

  const currentColour = palette[props.colourType].baseColour;
  const [colour, setColour] = useState(currentColour);
  const setPaletteParams = usePaletteParams();

  useEffect(() => {
    setColour(currentColour);
  }, [currentColour]);

  return (
    <Popover
      onOpenChange={(open) => {
        if (!open) {
          const palette = updatePalette({
            colourType: props.colourType,
            baseColour: colour,
          });
          setPaletteParams(palette);
        }
      }}
    >
      <PopoverTrigger className="flex w-full">
        <ColourRow {...props} />
      </PopoverTrigger>
      <PopoverContent side="right" className="flex w-[200px] flex-col gap-2">
        <HexColorPicker
          className="custom"
          color={colour}
          onChange={setColour}
        />
        <div className="flex gap-1">
          <HexColorInput
            prefixed
            color={colour}
            onChange={setColour}
            className={cn(inputVariants())}
          />
          <div>
            <EyeDropperButton
              onSelectColour={setColour}
              onClose={() => {
                //
              }}
            />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
