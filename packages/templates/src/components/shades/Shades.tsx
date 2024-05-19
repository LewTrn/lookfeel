import Typography from "~/components/ui/typography";
import { PALETTE_HEADINGS } from "~/constants/palette";
import { type ColourType, type Palette } from "~/types/Palette";

import { Template } from "../template/Template";
import { Swatch } from "./Swatch";

type ShadesProps = {
  palette: Palette;
};

export const Shades = ({ palette }: ShadesProps) => {
  return (
    <Template>
      <div className="grid gap-4 bg-popover p-8 pt-6">
        {Object.entries(palette).map(([key, { shades, baseStop }], index) => (
          <div key={key}>
            <Typography variant="h3" className="text-secondary">
              {PALETTE_HEADINGS[key as ColourType]}
            </Typography>
            <Swatch key={index} shades={shades} baseStop={baseStop} />
          </div>
        ))}
      </div>
    </Template>
  );
};
