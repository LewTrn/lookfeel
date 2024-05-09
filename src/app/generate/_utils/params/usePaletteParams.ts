import { usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";

import { type Palette } from "~/types/Palette";
import { makeColoursUrl } from "~/utils/colours/makeColoursUrl";

export const usePaletteParams = () => {
  const pathname = usePathname();
  const params = useSearchParams();

  return useCallback(
    (palette: Palette) => {
      const colours = Object.values(palette).map(
        ({ baseColour }) => baseColour,
      );
      const url = makeColoursUrl({ url: pathname, params, colours });
      window.history.replaceState({}, "", url);
    },
    [params, pathname],
  );
};
