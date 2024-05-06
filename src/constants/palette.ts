import { ColourType, type Palette } from "~/types/Palette";

const SHADES = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#e5e5e5",
  300: "#d4d4d4",
  400: "#a3a3a3",
  500: "#737373",
  600: "#525252",
  700: "#404040",
  800: "#262626",
  900: "#171717",
  950: "#0a0a0a",
};

export const DEFAULT_PALETTE: Palette = {
  [ColourType.Primary]: {
    baseColour: SHADES[500],
    baseStop: 500,
    shades: SHADES,
  },
  [ColourType.Secondary]: {
    baseColour: SHADES[700],
    baseStop: 700,
    shades: SHADES,
  },
  [ColourType.Accent]: {
    baseColour: SHADES[300],
    baseStop: 300,
    shades: SHADES,
  },
  [ColourType.Neutral]: {
    baseColour: SHADES[900],
    baseStop: 900,
    shades: SHADES,
  },
};
