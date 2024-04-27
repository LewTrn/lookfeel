import { LockKeyholeIcon } from "lucide-react";
import { type PropsWithChildren } from "react";
import Tinycolor from "tinycolor2";

import { IconButton } from "~/components/ui/icon-button";
import Typography from "~/components/ui/typography";
import { cn } from "~/lib/utils";
import { strings } from "~/locales/generate";

const COLOURS = [
  {
    name: strings.options.colour.palette.primary,
    value: "#99E1D9",
  },
  {
    name: strings.options.colour.palette.secondary,
    value: "#705D56",
  },
  {
    name: strings.options.colour.palette.accent,
    value: "#70ABAF",
  },
  {
    name: strings.options.colour.palette.background,
    value: "#F0F7F4",
  },
  {
    name: strings.options.colour.palette.text,
    value: "#32292F",
  },
];

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
        "group flex h-16 w-full items-center justify-between p-4",
        whiteIsReadable ? "text-white" : "text-black",
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
              : "!text-black hover:bg-black/5",
          )}
        />
      </div>
    </div>
  );
};

export const Palette = () => {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg shadow">
      {COLOURS.map(({ value, name }, index) => (
        <Colour key={`${value}-${index}`} value={value}>
          {name}
        </Colour>
      ))}
    </div>
  );
};
