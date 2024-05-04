import { usePathname } from "next/navigation";
import { useCallback } from "react";

import { type Palette } from "~/types/Palette";
import { makeColoursUrl } from "~/utils/colours/makeColoursUrl";

export const usePaletteParams = () => {
  const pathname = usePathname();

  return useCallback(
    (palette: Palette) => {
      const colours = Object.values(palette).map(
        ({ baseColour }) => baseColour,
      );
      const url = makeColoursUrl({ url: pathname, colours });
      window.history.replaceState({}, "", url);
    },
    [pathname],
  );
};
