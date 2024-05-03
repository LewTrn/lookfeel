import { useGenerateStore } from "~/app/generate/_store/useGenerateStore";
import { paletteHeadings } from "~/app/generate/_utils/headings";
import Typography from "~/components/ui/typography";
import { type ColourType } from "~/types/Palette";

import { Swatch } from "./Swatch";

export const Shades = () => {
  const palette = useGenerateStore((state) => state.palette);

  return (
    <div className="grid gap-4 rounded-lg bg-popover p-8 pt-6">
      {Object.entries(palette).map(([key, { shades, baseStop }], index) => (
        <div key={key}>
          <Typography variant="h3" className="text-secondary">
            {paletteHeadings[key as ColourType]}
          </Typography>
          <Swatch key={index} shades={shades} baseStop={baseStop} />
        </div>
      ))}
    </div>
  );
};
