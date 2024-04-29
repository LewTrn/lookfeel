"use client";

import Tinycolor from "tinycolor2";

import Typography from "~/components/ui/typography";
import { cn } from "~/lib/utils";
import { strings } from "~/locales/generate";

import { useGenerateStore } from "../../_store/useGenerateStore";
import { ColourType } from "../../_types/Colour";

type ColourProps = {
  colourType: ColourType;
  value: string;
  className?: string;
};

const COLOUR_STRINGS = {
  [ColourType.Primary]: strings.options.colour.palette.primary,
  [ColourType.Secondary]: strings.options.colour.palette.secondary,
  [ColourType.Accent]: strings.options.colour.palette.accent,
  [ColourType.Neutral]: strings.options.colour.palette.neutral,
};

const Colour = ({ colourType, value, className }: ColourProps) => {
  const whiteIsReadable = Tinycolor.isReadable(value, "#fff", {
    size: "large",
  });

  return (
    <div
      className={cn(
        "group flex aspect-square w-full items-end px-2 pb-1",
        whiteIsReadable ? "text-white" : "text-foreground",
        className,
      )}
      style={{ backgroundColor: value }}
    >
      <Typography variant="h4">{COLOUR_STRINGS[colourType]}</Typography>
    </div>
  );
};

export const Palette = () => {
  const colours = useGenerateStore((state) => state.palette);

  return (
    <div>
      <div className="mb-1 ml-2 text-secondary">
        <Typography variant="h3">Colors</Typography>
      </div>
      <div className="overflow-hidden rounded-lg border">
        <Colour
          colourType={ColourType.Primary}
          value={colours[0]!.colour}
          className="h-20"
        />
        <Colour
          colourType={ColourType.Secondary}
          value={colours[1]!.colour}
          className="h-14"
        />
        <Colour
          colourType={ColourType.Accent}
          value={colours[2]!.colour}
          className="h-12"
        />
        <Colour
          colourType={ColourType.Neutral}
          value={colours[3]!.colour}
          className="h-10"
        />
      </div>
    </div>
  );
};
