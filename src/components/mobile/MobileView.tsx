"use client";

import { FrownIcon } from "lucide-react";
import { usePathname } from "next/navigation";

import { strings } from "~/locales/lookfeel";

import { Button } from "../ui/button";
import Typography from "../ui/typography";

export const MobileView = () => {
  const pathname = usePathname();

  if (pathname === "/") {
    return null;
  }

  return (
    <div className="absolute inset-0 z-[100] h-screen w-screen bg-background p-8 md:hidden">
      <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-gradient-to-tr from-neutral-200 to-background p-4 text-center wh-full">
        <FrownIcon width={40} height={40} strokeWidth={1.5} />
        <Typography as="h1" variant="h3" className="mb-0">
          {strings.mobileView.title}
        </Typography>
        <Typography as="p">{strings.mobileView.follow.description}</Typography>
        <Button asChild>
          <a href="https://twitter.com/lookfeelio" target="_blank">
            {strings.mobileView.follow.action}
          </a>
        </Button>
      </div>
    </div>
  );
};
