import { create } from "zustand";

import { DEFAULT_FONTS } from "~/constants/fonts";
import { DEFAULT_PALETTE } from "~/constants/palette";
import { type Fonts } from "~/types/Fonts";
import { GenerateMode } from "~/types/Mode";
import { type BaseColours, type Palette } from "~/types/Palette";
import { type Theme } from "~/types/Theme";

import { selectFonts } from "../_utils/fonts/selectFonts";
import { makePalette } from "../_utils/palette/makePalette";

export type GenerateState = {
  palette: Palette;
  generatePalette: (baseColours?: BaseColours) => Palette;

  history: Theme[];
  pointer: number;
  updateHistory: (type?: "undo" | "redo" | "reset") => Theme;

  mode: GenerateMode;
  setMode: (mode: GenerateMode) => void;

  fonts: Fonts;
  generateFonts: (fonts?: string[]) => Fonts;
};

const HISTORY_LIMIT = 30 - 1;

export const useGenerateStore = create<GenerateState>((set, get) => ({
  palette: DEFAULT_PALETTE,
  generatePalette: (baseColours) => {
    const palette = makePalette(baseColours);
    const { fonts, history, pointer } = get();

    const themeHistory = [
      { palette, fonts },
      ...history.slice(pointer, HISTORY_LIMIT),
    ];

    set({ palette, history: themeHistory, pointer: 0 });
    return palette;
  },

  history: [],
  pointer: 0,
  updateHistory: (type = "undo") => {
    if (type === "reset") {
      const { palette, fonts } = get();
      const theme = { palette, fonts };
      set({ history: [theme], pointer: 0 });
      return theme;
    }

    const { history, pointer } = get();
    const newPointer =
      type === "undo"
        ? Math.min(pointer + 1, history.length - 1)
        : Math.max(pointer - 1, 0);
    const { palette, fonts } = history[newPointer]!;

    set({ palette, fonts, pointer: newPointer });
    return { palette, fonts };
  },

  mode: GenerateMode.Colour,
  setMode: (mode) => set({ mode }),

  fonts: DEFAULT_FONTS,
  generateFonts: (fonts) => {
    const selectedFonts = selectFonts(fonts);
    const { palette, history, pointer } = get();

    const themeHistory = [
      { fonts: selectedFonts, palette },
      ...history.slice(pointer, HISTORY_LIMIT),
    ];

    set({ fonts: selectedFonts, history: themeHistory, pointer: 0 });
    return selectedFonts;
  },
}));
