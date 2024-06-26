import { omit } from "lodash";
import { create } from "zustand";

import { DEFAULT_FONTS } from "~/constants/fonts";
import { DEFAULT_PALETTE } from "~/constants/palette";
import { type Fonts, type Typography } from "~/types/Fonts";
import { GenerateMode } from "~/types/Mode";
import {
  type BaseColours,
  type ColourType,
  type Palette,
} from "~/types/Palette";
import { type Theme } from "~/types/Theme";

import {
  makePalette,
  makeSwatch,
} from "../../../utils/colours/palette/makePalette";
import { selectFonts } from "../_utils/fonts/selectFonts";

type UpdatePaletteParams = {
  colourType: ColourType;
  baseColour: string;
  updateHistory?: boolean;
};

type UpdateFontsParams = {
  typographyType: Typography;
  font: string;
};

export type GenerateState = {
  palette: Palette;
  generatePalette: (baseColours?: BaseColours) => Palette;
  updatePalette: (params: UpdatePaletteParams) => Palette;

  history: Theme[];
  pointer: number;
  updateHistory: (type?: "undo" | "redo" | "reset") => Theme;

  mode: GenerateMode;
  setMode: (mode: GenerateMode) => void;

  fonts: Fonts;
  generateFonts: (fonts?: string[]) => Fonts;
  updateFont: (params: UpdateFontsParams) => Fonts;

  tags: string[];
  setTags: (tags: string[]) => void;

  locked: (ColourType | Typography)[];
  toggleLock: (property: ColourType | Typography | null) => void;
};

const HISTORY_LIMIT = 30 - 1;

export const useGenerateStore = create<GenerateState>((set, get) => ({
  palette: DEFAULT_PALETTE,
  generatePalette: (baseColours) => {
    const generatedPalette = makePalette(baseColours);
    const { fonts, history, pointer, locked, palette: storedPalette } = get();
    const palette = { ...storedPalette, ...omit(generatedPalette, locked) };

    const themeHistory = [
      { palette, fonts },
      ...history.slice(pointer, HISTORY_LIMIT),
    ];

    set({ palette, history: themeHistory, pointer: 0 });
    return palette;
  },
  updatePalette: ({ colourType, baseColour, updateHistory = false }) => {
    const { palette, fonts, history, pointer } = get();
    const newPalette = {
      ...palette,
      [colourType]: makeSwatch(baseColour),
    };

    if (updateHistory) {
      const themeHistory = [
        { palette: newPalette, fonts },
        ...history.slice(pointer, HISTORY_LIMIT),
      ];
      set({ palette: newPalette, history: themeHistory, pointer: 0 });
    } else {
      set({ palette: newPalette });
    }

    return newPalette;
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
  generateFonts: (fontsParams) => {
    const selectedFonts = selectFonts(fontsParams);
    const { palette, history, pointer, fonts: storedFonts, locked } = get();
    const fonts = { ...storedFonts, ...omit(selectedFonts, locked) };

    const themeHistory = [
      { fonts: selectedFonts, palette },
      ...history.slice(pointer, HISTORY_LIMIT),
    ];

    set({ fonts, history: themeHistory, pointer: 0 });
    return fonts;
  },
  updateFont: ({ typographyType, font }) => {
    const { palette, fonts, history, pointer } = get();
    const newFonts = { ...fonts, [typographyType]: font };

    const themeHistory = [
      { fonts: newFonts, palette },
      ...history.slice(pointer, HISTORY_LIMIT),
    ];

    set({ fonts: newFonts, history: themeHistory, pointer: 0 });
    return newFonts;
  },

  tags: [],
  setTags: (tags) => set({ tags }),

  locked: [],
  toggleLock: (property) => {
    if (property === null) return set({ locked: [] });

    const { locked } = get();
    const lockedSet = new Set(locked);

    lockedSet.has(property)
      ? lockedSet.delete(property)
      : lockedSet.add(property);

    set({ locked: Array.from(lockedSet) });
  },
}));
