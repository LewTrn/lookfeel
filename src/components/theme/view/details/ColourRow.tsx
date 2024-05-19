"use client";

import tinycolor from "tinycolor2";

import Typography from "~/components/ui/typography";
import { PALETTE_HEADINGS } from "~/constants/palette";
import { cn } from "~/lib/utils";
import { ColourType } from "~/types/Palette";

type ColourProps = {
  colourType: ColourType;
  value: string;
};

const COLOUR_PROPERTIES = {
  [ColourType.Primary]: { className: "h-20" },
  [ColourType.Secondary]: { className: "h-14" },
  [ColourType.Accent]: { className: "h-12" },
  [ColourType.Neutral]: { className: "h-10" },
};

export const ColourRow = ({ colourType, value }: ColourProps) => {
  const whiteIsReadable = tinycolor.isReadable(value, "#fff", {
    size: "large",
  });

  const { className } = COLOUR_PROPERTIES[colourType];

  return (
    <div
      className={cn(
        "group flex aspect-square w-full items-end px-2 pb-1",
        whiteIsReadable ? "text-white" : "text-foreground",
        className,
      )}
      style={{ backgroundColor: value }}
    >
      <div className="opacity-95">
        <Typography variant="h4">{PALETTE_HEADINGS[colourType]}</Typography>
      </div>
    </div>
  );
};
