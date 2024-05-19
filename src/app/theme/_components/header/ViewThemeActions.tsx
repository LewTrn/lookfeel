"use client";

import copy from "copy-to-clipboard";
import { CopyIcon } from "lucide-react";
import { useState } from "react";

import { useSignedIn } from "~/components/auth/AuthProvider";
import { Button } from "~/components/ui/button";
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
  const [copied, setCopied] = useState(false);
  const { signedIn, signInUrl } = useSignedIn();

  const params = getThemeParams(theme);

  const handleCopy = () => {
    const success = copy(window.location.href);

    if (success) {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  };

  return (
    <div className="flex gap-2">
      {signedIn ? (
        <LikeThemeButton id={id} likes={likes} />
      ) : (
        <UnauthedLikeThemeButton href={signInUrl} likeCount={likes.likeCount} />
      )}
      <Button variant="outline" Icon={CopyIcon} onClick={handleCopy}>
        {copied ? strings.view.copied.action : strings.view.share.action}
      </Button>
      <LinkButton href={`/generate?${params}`}>
        {strings.view.edit.action}
      </LinkButton>
    </div>
  );
};
