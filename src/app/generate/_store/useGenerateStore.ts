import { create } from "zustand";

import { DEFAULT_PALETTE } from "~/app/constants/palette";
import { type BaseColours, type Palette } from "~/types/Palette";

import { makePalette } from "../_utils/palette/makePalette";

export type GenerateState = {
  palette: Palette;
  paletteLoaded?: boolean;
  generatePalette: (baseColours?: BaseColours) => Palette;
};

export const useGenerateStore = create<GenerateState>((set) => ({
  palette: DEFAULT_PALETTE,
  paletteLoaded: false,
  generatePalette: (baseColours) => {
    const palette = makePalette(baseColours);
    set({ palette, paletteLoaded: true });
    return palette;
  },
}));
