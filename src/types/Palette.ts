export enum ColourType {
  Primary = "primary",
  Secondary = "secondary",
  Accent = "accent",
  Neutral = "neutral",
}

export type Shades = {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  950: string;
};

export type Swatch = {
  baseColour: string;
  baseStop: number;
  shades: Shades;
};

export type BaseColours = {
  [ColourType.Primary]: string;
  [ColourType.Secondary]: string;
  [ColourType.Accent]: string;
  [ColourType.Neutral]: string;
};

export type Palette = {
  [ColourType.Primary]: Swatch;
  [ColourType.Secondary]: Swatch;
  [ColourType.Accent]: Swatch;
  [ColourType.Neutral]: Swatch;
};
