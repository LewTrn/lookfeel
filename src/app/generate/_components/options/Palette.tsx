"use client";

import tinycolor from "tinycolor2";

import Typography from "~/components/ui/typography";
import { cn } from "~/lib/utils";
import { strings } from "~/locales/generate";
import { ColourType } from "~/types/Palette";

import { useGenerateStore } from "../../_store/useGenerateStore";
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
        <Typography variant="h4">{paletteHeadings[colourType]}</Typography>
      </div>
    </div>
  );
};

export const Palette = () => {
  const palette = useGenerateStore((state) => state.palette);

  return (
    <div>
      <div className="mb-1 ml-2 text-secondary">
        <Typography variant="h3">{strings.options.colour.title}</Typography>
      </div>
      <div className="overflow-hidden rounded-lg border">
        {Object.entries(palette).map(([key, { baseColour }]) => (
          <Colour key={key} colourType={key as ColourType} value={baseColour} />
        ))}
      </div>
    </div>
  );
};
