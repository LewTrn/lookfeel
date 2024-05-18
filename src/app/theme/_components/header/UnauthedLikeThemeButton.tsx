"use client";

import { HeartIcon } from "lucide-react";

import { useSetRedirect } from "~/app/redirect/_utils/redirect";
import { LinkButton } from "~/components/ui/link-button";
import { strings } from "~/locales/theme";

type UnauthedLikeThemeButtonProps = {
  href: string;
  likeCount: number;
};

export const UnauthedLikeThemeButton = ({
  href,
  likeCount,
}: UnauthedLikeThemeButtonProps) => {
  const setRedirect = useSetRedirect();

  const handleOnClick = () => {
    setRedirect({ like: "true" });
  };

  return (
    <LinkButton
      href={href}
      onClick={handleOnClick}
      Icon={HeartIcon}
      aria-label={strings.view.like.action}
      variant="outline"
    >
      {likeCount}
    </LinkButton>
  );
};
