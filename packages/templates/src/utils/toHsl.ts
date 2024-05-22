import tinycolor from "tinycolor2";

export const toHsl = (hex: string) => {
  const hsl = tinycolor(hex).toHslString();
  return hsl.match(/\(([^)]+)\)/)?.[1]!.replaceAll(",", "");
};
