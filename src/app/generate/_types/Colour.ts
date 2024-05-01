export enum ColourType {
  Primary = "Primary",
  Secondary = "Secondary",
  Accent = "Accent",
  Neutral = "Neutral",
}

export type Palette = {
  [ColourType.Primary]: string;
  [ColourType.Secondary]: string;
  [ColourType.Accent]: string;
  [ColourType.Neutral]: string;
};
