import { toForeground } from "templates/utils/toForeground";
import { toHsl } from "templates/utils/toHsl";

import { type ThemeProviderTheme } from "./types";

export const getThemeStyle = ({ palette, fonts }: ThemeProviderTheme) => {
  if (!palette || !fonts) return undefined;

  const { primary, accent, secondary, neutral } = palette;
  const { heading, body } = fonts;

  return {
    "--background": "0 0% 100%",
    "--foreground": toHsl(neutral.shades[900]),
    "--card": "0 0% 100%",
    "--card-foreground": toHsl(neutral.shades[900]),
    "--popover": "0 0% 100%",
    "--popover-foreground": toHsl(neutral.shades[900]),
    "--primary": toHsl(primary.baseColour),
    "--primary-foreground": toForeground({
      background: primary.baseColour,
      light: neutral.shades[50],
      dark: neutral.shades[950],
    }),
    "--secondary": toHsl(secondary.baseColour),
    "--secondary-foreground": toForeground({
      background: secondary.baseColour,
      light: neutral.shades[50],
      dark: neutral.shades[950],
    }),
    "--accent": toHsl(accent.baseColour),
    "--accent-foreground": toForeground({
      background: accent.baseColour,
      light: neutral.shades[50],
      dark: neutral.shades[950],
    }),
    "--muted": toHsl(neutral.shades[100]),
    "--muted-foreground": toHsl(neutral.shades[900]),
    "--border": toHsl(neutral.shades[200]),
    "--input": toHsl(neutral.shades[200]),
    "--ring": toHsl(neutral.shades[200]),
    "--radius": "0.5rem",
    "--heading-font": heading,
    "--body-font": body,
    fontFamily: body,
  } as React.CSSProperties;
};
