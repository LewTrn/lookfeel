import { type PropsWithChildren } from "react";

import Typography from "~/components/ui/typography";
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
  return (
    <div
      className="flex h-16 w-full items-center p-4"
      style={{ backgroundColor: value }}
    >
      <div className="text-white">
        <Typography variant="h3">{children}</Typography>
      </div>
    </div>
  );
};

export const Palette = () => {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg">
      {COLOURS.map(({ value, name }, index) => (
        <Colour key={`${value}-${index}`} value={value}>
          {name}
        </Colour>
      ))}
    </div>
  );
};
