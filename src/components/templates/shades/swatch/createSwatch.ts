import tinycolor from "tinycolor2";

import { STOPS } from "./constants";
import { type SwatchConfig } from "./types";
import { createLightnessScale } from "./utils/createLightnessScale";

export const createSwatch = ({ colour, stop, lMin, lMax }: SwatchConfig) => {
  const { h, s, l } = tinycolor(colour).toHsl();

  const lightnessScale = createLightnessScale(lMin, lMax, l, stop);

  const swatch = STOPS.map((stop, index) => {
    const newL = lightnessScale[index]!.tweak;

    const hex = tinycolor({ h, s, l: newL }).toHexString();

    return {
      hex,
      stop,
    };
  });

  // Omit 0 and 1000 stops
  return swatch.slice(1, -1);
};
