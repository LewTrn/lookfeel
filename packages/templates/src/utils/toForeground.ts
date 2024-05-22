import tinycolor from "tinycolor2";

import { toHsl } from "./toHsl";

type Params = {
  background: string;
  light: string;
  dark: string;
};

export const toForeground = ({ background, light, dark }: Params) => {
  const lightIsReadable = tinycolor.isReadable(background, light, {
    size: "large",
  });

  return toHsl(lightIsReadable ? light : dark);
};
