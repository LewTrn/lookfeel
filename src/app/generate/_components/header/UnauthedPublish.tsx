"use client";

import { useSetRedirect } from "~/app/redirect/_utils/redirect";
import { Button } from "~/components/ui/button";
import { strings } from "~/locales/generate";

export const UnauthedPublish = () => {
  const setRedirect = useSetRedirect();

  const handleOnClick = () => {
    setRedirect();
  };

  return <Button onClick={handleOnClick}>{strings.publish.action}</Button>;
};
