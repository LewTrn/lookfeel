export enum ColourType {
  Primary = "Primary",
  Secondary = "Secondary",
  Accent = "Accent",
  Neutral = "Neutral",
}

export type Palette = {
  type: ColourType;
  colour: string;
};
