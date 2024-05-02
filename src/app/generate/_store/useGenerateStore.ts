import { create } from "zustand";

import { DEFAULT_PALETTE } from "~/app/constants/palette";
import { type Palette } from "~/types/Palette";

import { makePalette } from "../_utils/palette/makePalette";

export type GenerateState = {
  palette: Palette;
  generatePalette: () => void;
};

export const useGenerateStore = create<GenerateState>((set) => ({
  palette: DEFAULT_PALETTE,
  generatePalette: () => {
    const palette = makePalette();
    set({ palette });
  },
}));
