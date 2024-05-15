import { type Theme } from "~/types/Theme";

export const getThemeParams = ({ palette, fonts }: Theme) => {
  const colours = Object.values(palette).map(({ baseColour }) => baseColour);

  const params = new URLSearchParams();
  params.set("colors", colours.join("-").replaceAll("#", ""));
  params.set("fonts", Object.values(fonts).join("-"));

  return params.toString();
};
