import { create } from "zustand";

import { createSwatch } from "~/components/templates/shades/swatch/createSwatch";

import { type ColourType, type Palette, type Swatch } from "../_types/Colour";
import { generatePalette } from "../_utils/generatePalette";
import { nearestColourStop } from "../_utils/nearestColourStop";

export type GenerateState = {
  palette: Palette | null;
  shades: Record<ColourType, Swatch[]> | null;
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
        acc[key as ColourType] = createSwatch({
          colour,
          colourStop,
          lMin: 15,
          lMax: 100,
        });

        return acc;
      },
      {} as Record<ColourType, Swatch[]>,
    );
    set({ shades });
  },
}));
