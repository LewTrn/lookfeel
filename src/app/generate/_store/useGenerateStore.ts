import { create } from "zustand";

import { type Palette } from "../_types/Palette";
import { DEFAULT_PALETTE } from "./constants";

export type GenerateState = {
  palette: Palette[];
};

export const useGenerateStore = create<GenerateState>(() => ({
  palette: DEFAULT_PALETTE,
}));
