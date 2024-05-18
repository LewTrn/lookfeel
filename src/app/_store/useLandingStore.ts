import { create } from "zustand";

import { type Likes, type PreviewTheme, type Theme } from "~/types/Theme";

import { makePalette } from "../../utils/colours/palette/makePalette";

export type GenerateState = {
  selectedTheme: Theme | null;
  selectedLikes: Likes | null;
  setSelectedTheme: (preview: PreviewTheme | null) => Theme | null;
};

export const useLandingStore = create<GenerateState>((set) => ({
  selectedTheme: null,
  selectedLikes: null,
  setSelectedTheme: (theme) => {
    if (!theme) {
      set({ selectedTheme: null, selectedLikes: null });
      return null;
    }

    const selectedTheme = {
      palette: makePalette(theme.baseColours),
      fonts: theme.fonts,
    };

    set({ selectedTheme, selectedLikes: theme.likes });
    return selectedTheme;
  },
}));
