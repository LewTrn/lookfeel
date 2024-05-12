"use client";

import { LoaderCircleIcon } from "lucide-react";

import Typography from "~/components/ui/typography";
import { strings } from "~/locales/landing";

import { useRedirect } from "./_utils/redirect";

export default function Redirect() {
  useRedirect();

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-4">
      <LoaderCircleIcon
        className="animate-spin text-accent"
        width={64}
        height={64}
        strokeWidth={1.5}
      />
      <Typography variant="h2">{strings.header.logIn.description}</Typography>
    </div>
  );
}
