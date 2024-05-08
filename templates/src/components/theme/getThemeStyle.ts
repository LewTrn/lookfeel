import tinycolor from "tinycolor2";

import { type Palette } from "~/types/Palette";

const toHsl = (hex: string) => {
  const hsl = tinycolor(hex).toHslString();
  return hsl.match(/\(([^)]+)\)/)?.[1]!.replaceAll(",", "");
};

export const getThemeStyle = (palette?: Palette) => {
  if (!palette) return undefined;

  const { primary, accent, secondary } = palette;

  return {
    "--primary": toHsl(primary.baseColour),
    "--secondary": toHsl(secondary.baseColour),
    "--accent": toHsl(accent.baseColour),
    "--radius": "0.5rem",
  } as React.CSSProperties;
};
