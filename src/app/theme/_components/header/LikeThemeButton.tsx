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

  const { mutate, variables } = api.theme.likeTheme.useMutation();

  useEffect(() => {
    if (params.get("like") === "true") {
      mutate({ id, like: true });
      router.replace(pathname);
    }
  }, [id, mutate, params, pathname, router]);

  // Psuedo optimistic like updates
  const pseudoLiked = variables?.like ?? likes.liked;
  const getPseudoLikeCount = () => {
    if (variables?.like === undefined) {
      return likes.likeCount;
    }

    if (likes.liked) {
      return variables.like ? likes.likeCount : likes.likeCount - 1;
    } else {
      return variables.like ? likes.likeCount + 1 : likes.likeCount;
    }
  };

  return (
    <Button
      onClick={() => mutate({ id, like: !pseudoLiked })}
      Icon={HeartIcon}
      iconProps={pseudoLiked ? { fill: "#171717" } : {}}
      variant="outline"
      aria-label={
        pseudoLiked ? strings.view.unlike.action : strings.view.like.action
      }
    >
      {getPseudoLikeCount()}
    </Button>
  );
};
