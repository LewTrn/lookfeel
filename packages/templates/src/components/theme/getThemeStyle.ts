import tinycolor from "tinycolor2";

import { type ThemeProviderTheme } from "./types";

const toHsl = (hex: string) => {
  const hsl = tinycolor(hex).toHslString();
  return hsl.match(/\(([^)]+)\)/)?.[1]!.replaceAll(",", "");
};

export const getThemeStyle = ({ palette, fonts }: ThemeProviderTheme) => {
  if (!palette || !fonts) return undefined;

  const { primary, accent, secondary } = palette;
  const { heading, body } = fonts;

  return {
    "--primary": toHsl(primary.baseColour),
    "--secondary": toHsl(secondary.baseColour),
    "--accent": toHsl(accent.baseColour),
    "--radius": "0.5rem",
    "--heading-font": heading,
    "--body-font": body,
    fontFamily: body,
  } as React.CSSProperties;
};
