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

import { useGenerateStore } from "../../_store/useGenerateStore";
import { usePaletteParams } from "../../_utils/params/usePaletteParams";
import { EyeDropperButton } from "./EyeDropperButton";

type ColourPickerProps = ComponentProps<typeof ColourRow>;

export const ColourPickerRow = (props: ColourPickerProps) => {
  const palette = useGenerateStore((state) => state.palette);
  const updatePalette = useGenerateStore((state) => state.updatePalette);

  const currentColour = palette[props.colourType].baseColour;
  const setPaletteParams = usePaletteParams();

  const handleSelectColour = (colour: string) => {
    updatePalette({ colourType: props.colourType, baseColour: colour });
  };

  return (
    <Popover
      onOpenChange={(open) => {
        if (!open) {
          const palette = updatePalette({
            colourType: props.colourType,
            baseColour: currentColour,
            updateHistory: true,
          });
          setPaletteParams(palette);
        }
      }}
    >
      <PopoverTrigger className="group relative flex w-full">
        <ColourRow {...props} />
        <div className="absolute inset-0 bg-white opacity-0 transition-opacity wh-full group-hover:opacity-10" />
      </PopoverTrigger>
      <PopoverContent side="right" className="flex w-[200px] flex-col gap-2">
        <HexColorPicker
          className="custom"
          color={currentColour}
          onChange={handleSelectColour}
        />
        <div className="flex gap-1">
          <HexColorInput
            prefixed
            color={currentColour}
            onChange={handleSelectColour}
            className={cn(inputVariants())}
          />
          <div>
            <EyeDropperButton onSelectColour={handleSelectColour} />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};
