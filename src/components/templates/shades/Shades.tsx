import { useGenerateStore } from "~/app/generate/_store/useGenerateStore";
import { type ColourType } from "~/app/generate/_types/Colour";
import { paletteHeadings } from "~/app/generate/_utils/headings";
import Typography from "~/components/ui/typography";

import { Swatch } from "./Swatch";

export const Shades = () => {
  const shades = useGenerateStore((state) => state.shades)!;

  return (
    <div className="grid gap-4 rounded-lg bg-popover p-8 pt-6">
      {Object.entries(shades).map(([key, swatch], index) => (
        <div key={key}>
          <Typography variant="h3" className="text-secondary">
            {paletteHeadings[key as ColourType]}
          </Typography>
          <Swatch key={index} swatch={swatch} />
        </div>
      ))}
    </div>
  );
};
