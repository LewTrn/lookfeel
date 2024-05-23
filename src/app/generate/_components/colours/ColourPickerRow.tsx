import { LockKeyholeIcon, LockKeyholeOpenIcon } from "lucide-react";
import { type ComponentProps } from "react";
import { HexColorInput, HexColorPicker } from "react-colorful";
import tinycolor from "tinycolor2";

import { ColourRow } from "~/components/theme/view/details/ColourRow";
import { IconButton } from "~/components/ui/icon-button";
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

type ColourPickerRowProps = ComponentProps<typeof ColourRow>;

export const ColourPickerRow = (props: ColourPickerRowProps) => {
  const palette = useGenerateStore((state) => state.palette);
  const updatePalette = useGenerateStore((state) => state.updatePalette);
  const locked = useGenerateStore((state) => state.locked);
  const toggleLock = useGenerateStore((state) => state.toggleLock);

  const currentColour = palette[props.colourType].baseColour;
  const setPaletteParams = usePaletteParams();

  const handleSelectColour = (colour: string) => {
    updatePalette({ colourType: props.colourType, baseColour: colour });
  };

  const whiteIsReadable = tinycolor.isReadable(currentColour, "#fff", {
    size: "large",
  });

  const isLocked = locked.includes(props.colourType);

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
        <div
          className={cn(
            "absolute right-1 top-1 transition-opacity group-hover:opacity-100",
            whiteIsReadable ? "text-white" : "text-foreground",
            isLocked ? "opacity-100" : "opacity-0",
          )}
        >
          <IconButton
            Icon={isLocked ? LockKeyholeIcon : LockKeyholeOpenIcon}
            size="sm"
            variant="ghost"
            onClick={(e) => {
              e.stopPropagation();
              toggleLock(props.colourType);
            }}
          />
        </div>
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
