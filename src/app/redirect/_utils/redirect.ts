import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useRef } from "react";
import { z } from "zod";

const redirectSchema = z.object({
  pathname: z.string(),
  params: z.string(),
  hard: z.boolean().optional(),
});

type RedirectProperties = z.infer<typeof redirectSchema>;

const REDIRECT_KEY = "redirect";

export const useSetRedirect = (options?: { hard?: boolean }) => {
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
        hard: options?.hard,
      };
      localStorage.setItem(REDIRECT_KEY, JSON.stringify(redirectProperties));
    },
    [params, pathname, options?.hard],
  );
};

export const useRedirect = () => {
  const redirectOnce = useRef(false);
  const router = useRouter();

  useEffect(() => {
    if (!redirectOnce.current) {
      try {
        const item = localStorage.getItem(REDIRECT_KEY);

        if (item) {
          const { pathname, params, hard } = redirectSchema.parse(
            JSON.parse(item),
          );

          if (pathname) {
            const redirectPath = params ? `${pathname}?${params}` : pathname;

            if (hard) {
              window.location.href = redirectPath;
            } else {
              router.push(redirectPath);
            }
            return;
          }
        }

        router.push("/");
      } catch (error) {
        router.push("/");
      } finally {
        localStorage.removeItem(REDIRECT_KEY);
        redirectOnce.current = true;
      }
    }
  }, [router]);
};
