import { usePathname } from "next/navigation";
import { useCallback } from "react";

import { type Theme } from "~/types/Theme";
import { getThemeParams } from "~/utils/theme/getThemeParams";

export const useThemeParams = () => {
  const pathname = usePathname();

  return useCallback(
    ({ palette, fonts }: Theme) => {
      const params = getThemeParams({ palette, fonts });

      window.history.replaceState({}, "", `${pathname}?${params}`);
    },
    [pathname],
  );
};
