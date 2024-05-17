"use client";

import { HeartIcon } from "lucide-react";

import { Button } from "~/components/ui/button";
import { strings } from "~/locales/theme";
import { api } from "~/trpc/react";

type LikeThemeButtonProps = {
  id: string;
};

export const LikeThemeButton = ({ id }: LikeThemeButtonProps) => {
  const { mutate } = api.theme.likeTheme.useMutation();

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
