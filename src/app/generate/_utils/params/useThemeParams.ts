import { usePathname } from "next/navigation";
import { useCallback } from "react";

import { type Fonts } from "~/types/Fonts";
import { type Palette } from "~/types/Palette";

type ThemeArgs = {
  palette: Palette;
  fonts: Fonts;
};

export const useThemeParams = () => {
  const pathname = usePathname();

  return useCallback(
    ({ palette, fonts }: ThemeArgs) => {
      const colours = Object.values(palette).map(
        ({ baseColour }) => baseColour,
      );

      const params = new URLSearchParams();
      params.set("colors", colours.join("-").replaceAll("#", ""));
      params.set("fonts", Object.values(fonts).join("-"));

      window.history.replaceState({}, "", `${pathname}?${params.toString()}`);
    },
    [pathname],
  );
};
