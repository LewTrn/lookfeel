"use client";

import { LockKeyholeIcon } from "lucide-react";
import { type PropsWithChildren } from "react";
import Tinycolor from "tinycolor2";

import { IconButton } from "~/components/ui/icon-button";
import Typography from "~/components/ui/typography";
import { cn } from "~/lib/utils";

import { useGenerateStore } from "../../_store/useGenerateStore";

type ColourProps = PropsWithChildren<{
  value: string;
}>;

const Colour = ({ value, children }: ColourProps) => {
  const whiteIsReadable = Tinycolor.isReadable(value, "#fff", {
    size: "large",
  });

  return (
    <div
      className={cn(
        "group flex w-full items-center justify-between px-4 py-2.5",
        whiteIsReadable ? "text-white" : "text-foreground",
      )}
      style={{ backgroundColor: value }}
    >
      <div className="flex flex-col">
        <Typography variant="h3">{children}</Typography>
        <Typography variant="caption" className="uppercase opacity-75">
          {value}
        </Typography>
      </div>
      <div className="opacity-0 transition-opacity group-hover:opacity-100">
        <IconButton
          Icon={LockKeyholeIcon}
          variant="ghost"
          className={cn(
            whiteIsReadable
              ? "!text-white hover:bg-white/5"
              : "!text-foreground hover:bg-foreground/5",
          )}
        />
      </div>
    </div>
  );
};

export const Palette = () => {
  const colours = useGenerateStore((state) => state.palette);

  return (
    <div className="flex flex-col overflow-hidden rounded-lg shadow">
      {colours.map(({ type, colour }, index) => (
        <Colour key={`${type}-${index}`} value={colour}>
          {type}
        </Colour>
      ))}
    </div>
  );
};
