import { usePathname } from "next/navigation";
import { useCallback } from "react";

import { ColourType, type Palette } from "~/types/Palette";

const makeUrl = ({ url, palette }: { url: string; palette: Palette }) => {
  const queryString = Object.values(palette)
    .map(({ baseColour }) => baseColour.replace("#", ""))
    .join("-");
  const params = new URLSearchParams([["colors", queryString]]).toString();
  return `${url}?${params}`;
};

export const extractBaseColours = (searchParams: URLSearchParams) => {
  const colors = searchParams.get("colors")?.split("-") ?? [];

  if (colors.length < 4) return null;

  return {
    [ColourType.Primary]: `#${colors[0]}`,
    [ColourType.Secondary]: `#${colors[1]}`,
    [ColourType.Accent]: `#${colors[2]}`,
    [ColourType.Neutral]: `#${colors[3]}`,
  };
};

export const usePaletteParams = () => {
  const pathname = usePathname();

  return useCallback(
    (palette: Palette) => {
      const url = makeUrl({ url: pathname, palette });
      window.history.replaceState({}, "", url);
    },
    [pathname],
  );
};
