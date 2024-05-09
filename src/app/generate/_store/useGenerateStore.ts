import { create } from "zustand";

import { DEFAULT_FONTS } from "~/constants/fonts";
import { DEFAULT_PALETTE } from "~/constants/palette";
import { type Fonts } from "~/types/Fonts";
import { GenerateMode } from "~/types/Mode";
import { type BaseColours, type Palette } from "~/types/Palette";

import { selectFonts } from "../_utils/fonts/selectFonts";
import { makePalette } from "../_utils/palette/makePalette";

export type GenerateState = {
  palette: Palette;
  generatePalette: (baseColours?: BaseColours) => Palette;

  history: Palette[];
  pointer: number;
  updateHistory: (type?: "undo" | "redo" | "clear") => Palette;

  mode: GenerateMode;
  setMode: (mode: GenerateMode) => void;

  fonts: Fonts;
  generateFonts: (fonts?: string[]) => Fonts;
};

export const useGenerateStore = create<GenerateState>((set, get) => ({
  palette: DEFAULT_PALETTE,
  generatePalette: (baseColours) => {
    const palette = makePalette(baseColours);
    const { history, pointer } = get();

    // Limit palette history to 20
    const paletteHistory = [palette, ...history.slice(pointer, 19)];

    set({ palette, history: paletteHistory, pointer: 0 });
    return palette;
  },

  history: [],
  pointer: 0,
  updateHistory: (type = "undo") => {
    if (type === "clear") {
      set({ history: [], pointer: 0 });
      return DEFAULT_PALETTE;
    }

    const { history, pointer } = get();
    const newPointer =
      type === "undo"
        ? Math.min(pointer + 1, history.length - 1)
        : Math.max(pointer - 1, 0);
    const palette = history[newPointer]!;

    set({ palette, pointer: newPointer });
    return palette;
  },

  mode: GenerateMode.Colour,
  setMode: (mode) => set({ mode }),

  fonts: DEFAULT_FONTS,
  generateFonts: (fonts) => {
    const selectedFonts = selectFonts(fonts);
    set({ fonts: selectedFonts });
    return selectedFonts;
  },
}));
