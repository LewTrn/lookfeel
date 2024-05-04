import { create } from "zustand";

import { DEFAULT_PALETTE } from "~/app/constants/palette";
import { type BaseColours, type Palette } from "~/types/Palette";

import { makePalette } from "../_utils/palette/makePalette";

export type GenerateState = {
  palette: Palette;
  generatePalette: (baseColours?: BaseColours) => Palette;
};

export const useGenerateStore = create<GenerateState>((set) => ({
  palette: DEFAULT_PALETTE,
  generatePalette: (baseColours) => {
    const palette = makePalette(baseColours);
    set({ palette });
    return palette;
  },
}));
