import { create } from "zustand";

import { type Palette } from "../_types/Colour";
import { DEFAULT_PALETTE } from "./constants";

export type GenerateState = {
  palette: Palette;
};

export const useGenerateStore = create<GenerateState>((set) => ({
  palette: DEFAULT_PALETTE,
}));
