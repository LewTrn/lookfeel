import Tinycolor from "tinycolor2";

import { STOPS } from "./constants";
import { type SwatchConfig, type TwSwatch } from "./types";
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

export const createTwSwatch = (config: SwatchConfig): TwSwatch => {
  const swatch = createSwatch(config);

  return {
    50: swatch[0]!.hex,
    100: swatch[1]!.hex,
    200: swatch[2]!.hex,
    300: swatch[3]!.hex,
    400: swatch[4]!.hex,
    500: swatch[5]!.hex,
    600: swatch[6]!.hex,
    700: swatch[7]!.hex,
    800: swatch[8]!.hex,
    900: swatch[9]!.hex,
    950: swatch[10]!.hex,
  };
};
