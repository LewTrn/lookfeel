import { create } from "zustand";

import { type Palette } from "../_types/Colour";
import { makePalette } from "../utils/makePalette";

export type GenerateState = {
  palette: Palette | null;
  generatePalette: () => void;
};

export const useGenerateStore = create<GenerateState>((set) => ({
  palette: null,
  generatePalette: () => {
    const palette = makePalette();
    set({ palette });
  },
}));
