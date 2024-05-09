import { usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";

import { makeFontsUrl } from "~/utils/typography/makeFontsUrl";

export const useFontParams = () => {
  const pathname = usePathname();
  const params = useSearchParams();

  return useCallback(
    (families: string[]) => {
      const url = makeFontsUrl({ url: pathname, params, fonts: families });
      window.history.replaceState({}, "", url);
    },
    [params, pathname],
  );
};
