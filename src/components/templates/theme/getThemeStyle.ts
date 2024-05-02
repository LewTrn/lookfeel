import tinycolor from "tinycolor2";

import { type Palette } from "~/types/Palette";

const toHsl = (hex: string) => {
  const hsl = tinycolor(hex).toHslString();
  return hsl.replace("hsl(", "").replace(")", "").replace(",", "");
};

export const getThemeStyle = (palette: Palette) => {
  const { primary, accent, secondary } = palette;

  return {
    "--primary": toHsl(primary.baseColour),
    "--secondary": toHsl(secondary.baseColour),
    "--accent": toHsl(accent.baseColour),
  } as React.CSSProperties;
};
