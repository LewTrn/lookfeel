import tinycolor from "tinycolor2";

import {
  type BaseColours,
  type Palette,
  type Shades,
  type Swatch,
} from "~/types/Palette";
import { generateBaseColours } from "~/utils/colours/generateBaseColours";

import { createLightnessScale } from "./createLightnessScale";
import { nearestColourStop } from "./nearestColourStop";

type ShadesConfig = {
  colour: string;
  colourStop: number;
};

const lMin = 15;
const lMax = 100;

const makeShades = ({ colour, colourStop }: ShadesConfig) => {
  const { h, s, l } = tinycolor(colour).toHsl();
  const lightnessScale = createLightnessScale(lMin, lMax, l, colourStop);

  const swatch = lightnessScale
    .map(({ stop }, index) => {
      const newL = lightnessScale[index]!.tweak;

      const hex = tinycolor({ h, s, l: newL }).toHexString();
      const isBase = stop === colourStop;

      return [stop, isBase ? colour : hex] as const;
    })
    // Omit 0 and 1000 stops
    .slice(1, -1);

  // Omit 0 and 1000 stops
  return Object.fromEntries(swatch) as Shades;
};

export const makeSwatch = (colour: string) => {
  const colourStop = nearestColourStop(colour);
  const shades = makeShades({ colour, colourStop });
  return { baseColour: colour, baseStop: colourStop, shades };
};

export const makePalette = (baseColours?: BaseColours) => {
  const colours = baseColours ?? generateBaseColours();

  return Object.entries(colours).reduce((acc, [key, colour]) => {
    const swatch: Swatch = makeSwatch(colour);
    return { ...acc, [key]: swatch };
  }, {} as Palette);
};
