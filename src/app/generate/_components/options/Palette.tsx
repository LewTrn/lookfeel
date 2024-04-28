"use client";

import { LockKeyholeIcon } from "lucide-react";
import Tinycolor from "tinycolor2";

import { IconButton } from "~/components/ui/icon-button";
import Typography from "~/components/ui/typography";
import { cn } from "~/lib/utils";
import { strings } from "~/locales/generate";

import { useGenerateStore } from "../../_store/useGenerateStore";
import { ColourType } from "../../_types/Colour";

type ColourProps = {
  colourType: ColourType;
  value: string;
};

const COLOUR_STRINGS = {
  [ColourType.Primary]: strings.options.colour.palette.primary,
  [ColourType.Secondary]: strings.options.colour.palette.secondary,
  [ColourType.Accent]: strings.options.colour.palette.accent,
  [ColourType.Neutral]: strings.options.colour.palette.neutral,
};

const Colour = ({ colourType, value }: ColourProps) => {
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
        <Typography variant="h3">{COLOUR_STRINGS[colourType]}</Typography>
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
        <Colour key={`${type}-${index}`} colourType={type} value={colour} />
      ))}
    </div>
  );
};
