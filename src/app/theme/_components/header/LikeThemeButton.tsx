"use client";

import { HeartIcon } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

import { Button } from "~/components/ui/button";
import { strings } from "~/locales/theme";
import { api } from "~/trpc/react";

type LikeThemeButtonProps = {
  id: string;
};

export const LikeThemeButton = ({ id }: LikeThemeButtonProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const { mutate } = api.theme.likeTheme.useMutation();

  useEffect(() => {
    if (params.get("like") === "true") {
      mutate({ id, liked: true });
      router.replace(pathname);
    }
  }, [id, mutate, params, pathname, router]);

  return (
    <Button
      onClick={() => mutate({ id, liked: true })}
      Icon={HeartIcon}
      variant="ghost"
    >
      {strings.view.like.action}
    </Button>
  );
};
