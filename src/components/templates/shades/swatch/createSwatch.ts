import Tinycolor from "tinycolor2";

import { STOPS } from "./constants";
import { type SwatchConfig } from "./types";
import { createLightnessScale } from "./utils/createLightnessScale";

export const createSwatch = ({
  colour,
  colourStop,
  lMin,
  lMax,
}: SwatchConfig) => {
  const { h, s, l } = Tinycolor(colour).toHsl();

  const lightnessScale = createLightnessScale(lMin, lMax, l, colourStop);

  const swatch = STOPS.map((stop, index) => {
    const newL = lightnessScale[index]!.tweak;

    const hex = Tinycolor({ h, s, l: newL }).toHexString();
    const isOriginal = stop === colourStop;

    return {
      hex: isOriginal ? colour : hex,
      stop,
      isOriginal,
    };
  });

  // Omit 0 and 1000 stops
  return swatch.slice(1, -1);
};
