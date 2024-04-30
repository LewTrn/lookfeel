import { strings } from "~/locales/generate";

import { ColourType } from "../_types/Colour";

export const paletteHeadings = {
  [ColourType.Primary]: strings.options.colour.palette.primary,
  [ColourType.Secondary]: strings.options.colour.palette.secondary,
  [ColourType.Accent]: strings.options.colour.palette.accent,
  [ColourType.Neutral]: strings.options.colour.palette.neutral,
};
