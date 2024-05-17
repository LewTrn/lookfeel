"use client";

import { HeartIcon } from "lucide-react";

import { useSetRedirect } from "~/app/redirect/_utils/redirect";
import { LinkButton } from "~/components/ui/link-button";
import { strings } from "~/locales/theme";

type UnauthedLikeThemeButtonProps = {
  href: string;
};

export const UnauthedLikeThemeButton = ({
  href,
}: UnauthedLikeThemeButtonProps) => {
  const setRedirect = useSetRedirect();

  const handleOnClick = () => {
    setRedirect({ like: "true" });
  };

  return (
    <LinkButton href={href} onClick={handleOnClick} Icon={HeartIcon}>
      {strings.view.like.action}
    </LinkButton>
  );
};
