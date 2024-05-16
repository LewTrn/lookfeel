import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useRef } from "react";
import { z } from "zod";

const redirectSchema = z.object({
  pathname: z.string(),
  params: z.string(),
});

type RedirectProperties = z.infer<typeof redirectSchema>;

const REDIRECT_KEY = "redirect";

export const useSetRedirect = () => {
  const pathname = usePathname();
  const params = useSearchParams();

  return useCallback(
    (additionalParams?: Record<string, string>) => {
      const fullParams = new URLSearchParams(params);
      Object.entries(additionalParams ?? {}).forEach(([key, value]) => {
        fullParams.set(key, value);
      });

      const redirectProperties: RedirectProperties = {
        pathname,
        params: fullParams.toString(),
      };
      localStorage.setItem(REDIRECT_KEY, JSON.stringify(redirectProperties));
    },
    [pathname, params],
  );
};

export const useRedirect = () => {
  const redirectOnce = useRef(false);
  const router = useRouter();

  useEffect(() => {
    if (!redirectOnce.current) {
      try {
        let redirectPath = "/";
        const item = localStorage.getItem(REDIRECT_KEY);

        if (item) {
          const { pathname, params } = redirectSchema.parse(JSON.parse(item));

          if (pathname) {
            redirectPath = params ? `${pathname}?${params}` : pathname;
          }
        }

        router.push(redirectPath);
      } catch (error) {
        router.push("/");
      } finally {
        localStorage.removeItem(REDIRECT_KEY);
        redirectOnce.current = true;
      }
    }
  }, [router]);
};
