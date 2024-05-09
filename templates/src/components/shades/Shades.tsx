import { paletteHeadings } from "~/app/generate/_utils/headings";
import Typography from "~/components/ui/typography";
import { type ColourType } from "~/types/Palette";

import { Template } from "../template/Template";
import { type Theme } from "../theme/ThemeContext";
import { Swatch } from "./Swatch";

type ShadesProps = {
  theme: Theme;
};

export const Shades = ({ theme }: ShadesProps) => {
  if (!theme.palette) return null;

  const { palette } = theme;

  return (
    <Template>
      <div className="grid gap-4 bg-popover p-8 pt-6">
        {Object.entries(palette).map(([key, { shades, baseStop }], index) => (
          <div key={key}>
            <Typography variant="h3" className="text-secondary">
              {paletteHeadings[key as ColourType]}
            </Typography>
            <Swatch key={index} shades={shades} baseStop={baseStop} />
          </div>
        ))}
      </div>
    </Template>
  );
};
