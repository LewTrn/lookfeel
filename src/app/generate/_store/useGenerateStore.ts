import { create } from "zustand";

import { type Palette } from "~/types/Palette";

import { makePalette } from "../_utils/palette/makePalette";
import { DEFAULT_PALETTE } from "./constants";

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
