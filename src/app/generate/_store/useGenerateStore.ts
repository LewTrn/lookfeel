import { create } from "zustand";

import { createTwSwatch } from "~/components/templates/shades/swatch/createSwatch";
import { type TwSwatch } from "~/components/templates/shades/swatch/types";

import { type ColourType, type Palette } from "../_types/Colour";
import { generatePalette } from "../_utils/generatePalette";
import { nearestColourStop } from "../_utils/nearestColourStop";

type Shade = { swatch: TwSwatch; originalStop: number };

export type GenerateState = {
  palette: Palette | null;
  shades: Record<ColourType, Shade> | null;
  generatePalette: () => void;
};

export const useGenerateStore = create<GenerateState>((set) => ({
  palette: null,
  shades: null,
  generatePalette: () => {
    const palette = generatePalette();
    set({ palette });

    const shades = Object.entries(palette).reduce(
      (acc, [key, colour]) => {
        const colourStop = nearestColourStop(colour);
        const swatch = createTwSwatch({
          colour,
          colourStop,
          lMin: 15,
          lMax: 100,
        });

        return { ...acc, [key]: { swatch, originalStop: colourStop } };
      },
      {} as Record<ColourType, Shade>,
    );
    set({ shades });
  },
}));
