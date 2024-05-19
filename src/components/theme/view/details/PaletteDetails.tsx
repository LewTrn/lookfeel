"use client";

import { type ComponentProps } from "react";

import Typography from "~/components/ui/typography";
import { strings } from "~/locales/lookfeel";
import { type ColourType, type Palette } from "~/types/Palette";

import { ColourRow } from "./ColourRow";

type PaletteDetailsProps = {
  palette: Palette;
  CustomColourRow?: React.ComponentType<ComponentProps<typeof ColourRow>>;
};

export const PaletteDetails = ({
  palette,
  CustomColourRow,
}: PaletteDetailsProps) => {
  return (
    <div>
      <div className="mb-1 ml-2 text-secondary">
        <Typography variant="h3">{strings.colour.palette.title}</Typography>
      </div>
      <div className="overflow-hidden rounded-lg">
        {Object.entries(palette).map(([key, { baseColour }]) => {
          const Row = CustomColourRow ? CustomColourRow : ColourRow;
          return (
            <Row key={key} colourType={key as ColourType} value={baseColour} />
          );
        })}
      </div>
    </div>
  );
};
