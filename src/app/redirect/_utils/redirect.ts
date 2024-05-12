import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect } from "react";
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

  return useCallback(() => {
    const redirectProperties: RedirectProperties = {
      pathname,
      params: params.toString(),
    };
    localStorage.setItem(REDIRECT_KEY, JSON.stringify(redirectProperties));
  }, [pathname, params]);
};

export const useRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    try {
      const { pathname, params } = redirectSchema.parse(
        JSON.parse(localStorage.getItem(REDIRECT_KEY) ?? ""),
      );

      if (pathname) {
        router.push(params ? `${pathname}?${params}` : pathname);
        return;
      }
      router.push("/");
    } catch (error) {
      router.push("/");
    } finally {
      localStorage.removeItem(REDIRECT_KEY);
    }
  }, [router]);
};
