import tinycolor from "tinycolor2";

import { ColourType } from "~/types/Palette";

export const extractBaseColours = (coloursString: string | null) => {
  const colours = coloursString?.split("-") ?? [];
  const validColours = colours
    .map((colour) => {
      const hex = `#${colour}`;
      return tinycolor(hex).isValid() ? hex : null;
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
