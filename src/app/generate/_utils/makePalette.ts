const please = require("pleasejs");
import Tinycolor from "tinycolor2";

import { ColourType, type Palette } from "../_types/Colour";

export const makePalette = (): Palette => {
  const colours = please.make_color({
    colors_returned: 4,
    full_random: true,
  }) as string[];
  const sorted = colours.sort(
    (a, b) => Tinycolor(a).getBrightness() - Tinycolor(b).getBrightness(),
  );

  return {
    [ColourType.Primary]: sorted[1]!,
    [ColourType.Secondary]: sorted[3]!,
    [ColourType.Accent]: sorted[2]!,
    [ColourType.Neutral]: sorted[0]!,
  };
};
