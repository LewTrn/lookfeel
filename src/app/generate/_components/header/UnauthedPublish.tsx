"use client";

import { Button } from "~/components/ui/button";
import { strings } from "~/locales/generate";

export const UnauthedPublish = () => {
  return <Button>{strings.publish.action}</Button>;
};
