import { type ColourType, type Palette } from "~/app/generate/_types/Colour";
import { paletteHeadings } from "~/app/generate/_utils/headings";
import Typography from "~/components/ui/typography";

import { Swatch } from "./Swatch";

type ShadesProps = {
  palette: Palette;
};

export const Shades = ({ palette }: ShadesProps) => {
  return (
    <div className="grid gap-4 rounded-lg bg-popover p-8 pt-6">
      {Object.entries(palette).map(([key, colour], index) => (
        <div key={key}>
          <Typography variant="h3">
            {paletteHeadings[key as ColourType]}
          </Typography>
          <Swatch key={index} baseColour={colour} />
        </div>
      ))}
    </div>
  );
};
