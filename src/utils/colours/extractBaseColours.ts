import tinycolor from "tinycolor2";

import { ColourType } from "~/types/Palette";

export const extractBaseColours = (coloursString: string | null) => {
  const colours = coloursString?.split("-") ?? [];
  const validColours = colours
    .map((colour) => {
      // TODO: Add stricter hex code string validation
      return tinycolor(colour).isValid()
        ? tinycolor(colour).toHexString()
        : null;
    })
    .filter(Boolean);

  if (validColours.length === 4) {
    return {
      [ColourType.Primary]: validColours[0]!,
      [ColourType.Secondary]: validColours[1]!,
      [ColourType.Accent]: validColours[2]!,
      [ColourType.Neutral]: validColours[3]!,
    };
  }

  return null;
};
