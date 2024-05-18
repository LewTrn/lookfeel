import { type Fonts } from "./Fonts";
import { type BaseColours, type Palette } from "./Palette";

export type Theme = {
  palette: Palette;
  fonts: Fonts;
};

export type Likes = {
  likeCount: number;
  liked?: boolean;
};

export type PreviewTheme = {
  baseColours: BaseColours;
  fonts: Fonts;
  likes: Likes;
};
