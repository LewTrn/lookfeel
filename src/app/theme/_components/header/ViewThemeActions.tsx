"use client";

import { useSignedIn } from "~/components/auth/AuthProvider";
import { LinkButton } from "~/components/ui/link-button";
import { strings } from "~/locales/theme";
import { type Likes, type Theme } from "~/types/Theme";
import { getThemeParams } from "~/utils/theme/getThemeParams";

import { LikeThemeButton } from "./LikeThemeButton";
import { UnauthedLikeThemeButton } from "./UnauthedLikeThemeButton";

type ViewThemeActionsProps = {
  id: string;
  theme: Theme;
  likes: Likes;
};

export const ViewThemeActions = ({
  id,
  theme,
  likes,
}: ViewThemeActionsProps) => {
  const { signedIn, signInUrl } = useSignedIn();

  const params = getThemeParams(theme);

  return (
    <div className="flex gap-2">
      {signedIn ? (
        <LikeThemeButton id={id} likes={likes} />
      ) : (
        <UnauthedLikeThemeButton href={signInUrl} likeCount={likes.likeCount} />
      )}
      <LinkButton href={`/generate?${params}`}>
        {strings.view.edit.action}
      </LinkButton>
    </div>
  );
};
