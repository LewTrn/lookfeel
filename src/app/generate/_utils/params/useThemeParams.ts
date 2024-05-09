import { usePathname } from "next/navigation";
import { useCallback } from "react";

import { type Theme } from "~/types/Theme";

export const useThemeParams = () => {
  const pathname = usePathname();

  return useCallback(
    ({ palette, fonts }: Theme) => {
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
