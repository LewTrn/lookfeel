"use client";

import { HeartIcon } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

import { Button } from "~/components/ui/button";
import { strings } from "~/locales/theme";
import { api } from "~/trpc/react";

type LikeThemeButtonProps = {
  id: string;
  liked?: boolean;
};

export const LikeThemeButton = ({ id, liked }: LikeThemeButtonProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const { mutate } = api.theme.likeTheme.useMutation();

  useEffect(() => {
    if (params.get("like") === "true") {
      mutate({ id, like: true });
      router.replace(pathname);
    }
  }, [id, mutate, params, pathname, router]);

  return (
    <Button
      onClick={() => mutate({ id, like: !liked })}
      Icon={HeartIcon}
      iconProps={liked ? { fill: "#fafafa", stroke: "#fafafa" } : {}}
    >
      {liked ? strings.view.liked.action : strings.view.like.action}
    </Button>
  );
};
