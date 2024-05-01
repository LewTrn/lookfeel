import { create } from "zustand";

import { type Palette } from "../_types/Colour";
import { generatePalette } from "../_utils/generatePalette";

export type GenerateState = {
  palette: Palette | null;
  generatePalette: () => void;
};

export const useGenerateStore = create<GenerateState>((set) => ({
  palette: null,
  generatePalette: () => {
    const palette = generatePalette();
    set({ palette });
  },
}));
