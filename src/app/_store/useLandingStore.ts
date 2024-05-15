import { create } from "zustand";

import { type LightweightTheme, type Theme } from "~/types/Theme";

import { makePalette } from "../../utils/colours/palette/makePalette";

export type GenerateState = {
  selectedTheme: Theme | null;
  setSelectedTheme: (lightweightTheme: LightweightTheme | null) => Theme | null;
};

export const useLandingStore = create<GenerateState>((set) => ({
  selectedTheme: null,
  setSelectedTheme: (theme) => {
    if (!theme) {
      set({ selectedTheme: null });
      return null;
    }

    const selectedTheme = {
      palette: makePalette(theme.baseColours),
      fonts: theme.fonts,
    };

    set({ selectedTheme });
    return selectedTheme;
  },
}));
