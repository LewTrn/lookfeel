"use client";

import { useSetRedirect } from "~/app/redirect/_utils/redirect";
import { LinkButton } from "~/components/ui/link-button";
import { strings } from "~/locales/generate";

type UnauthedPublishProps = {
  href: string;
};

export const UnauthedPublish = ({ href }: UnauthedPublishProps) => {
  const setRedirect = useSetRedirect();

  const handleOnClick = () => {
    setRedirect();
  };

  return (
    <LinkButton href={href} onClick={handleOnClick}>
      {strings.publish.action}
    </LinkButton>
  );
};
