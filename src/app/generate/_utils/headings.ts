import { strings } from "~/locales/generate";
import { ColourType } from "~/types/Palette";

export const paletteHeadings = {
  [ColourType.Primary]: strings.colour.palette.primary.label,
  [ColourType.Secondary]: strings.colour.palette.secondary.label,
  [ColourType.Accent]: strings.colour.palette.accent.label,
  [ColourType.Neutral]: strings.colour.palette.neutral.label,
};
