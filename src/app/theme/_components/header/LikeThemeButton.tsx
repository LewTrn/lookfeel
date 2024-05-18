"use client";

import { HeartIcon } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

import { Button } from "~/components/ui/button";
import { strings } from "~/locales/theme";
import { api } from "~/trpc/react";
import { type Likes } from "~/types/Theme";

type LikeThemeButtonProps = {
  id: string;
  likes: Likes;
};

export const LikeThemeButton = ({ id, likes }: LikeThemeButtonProps) => {
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

  const { liked, likeCount } = likes;

  return (
    <Button
      onClick={() => mutate({ id, like: !liked })}
      Icon={HeartIcon}
      iconProps={liked ? { fill: "#fafafa", stroke: "#fafafa" } : {}}
      variant="outline"
      aria-label={liked ? strings.view.unlike.action : strings.view.like.action}
    >
      {likeCount}
    </Button>
  );
};
