"use client";

import Tinycolor from "tinycolor2";

import Typography from "~/components/ui/typography";
import { cn } from "~/lib/utils";

import { useGenerateStore } from "../../_store/useGenerateStore";
import { ColourType } from "../../_types/Colour";
import { paletteHeadings } from "../../_utils/headings";

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

const Colour = ({ colourType, value }: ColourProps) => {
  const whiteIsReadable = Tinycolor.isReadable(value, "#fff", {
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
      <Typography variant="h4">{paletteHeadings[colourType]}</Typography>
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
        {Object.entries(colours).map(([key, value]) => (
          <Colour key={key} colourType={key as ColourType} value={value} />
        ))}
      </div>
    </div>
  );
};
