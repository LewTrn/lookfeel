import { type Fonts } from "./Fonts";
import { type BaseColours, type Palette } from "./Palette";

export type Theme = {
  palette: Palette;
  fonts: Fonts;
};

export type LightweightTheme = {
  baseColours: BaseColours;
  fonts: Fonts;
};
