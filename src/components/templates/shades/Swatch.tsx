import { CircleCheckBigIcon } from "lucide-react";
import Tinycolor from "tinycolor2";

import Typography from "~/components/ui/typography";

import { type TwSwatch } from "./swatch/types";

type SwatchProps = {
  swatch: TwSwatch;
  originalStop: number;
};

type ColourBlockProps = {
  colour: string;
  stop: string;
  check?: boolean;
  textColour: { light: string; dark: string };
};

const ColourBlock = ({ colour, stop, check, textColour }: ColourBlockProps) => {
  const displayColour = colour.replace("#", "").toUpperCase();
  const darkIsReadable = Tinycolor.isReadable(colour, textColour.dark);

  return (
    <div
      className="relative flex aspect-square w-full flex-col justify-end overflow-hidden rounded-sm bg-popover"
      style={{
        backgroundColor: colour,
        color: darkIsReadable ? textColour.dark : textColour.light,
      }}
    >
      {check && (
        <CircleCheckBigIcon
          className="absolute right-1.5 top-1.5"
          width={16}
          height={16}
        />
      )}
      <div className="pb-1.5 pl-2 opacity-95">
        <Typography variant="caption" className="font-semibold">
          {stop}
        </Typography>
        <Typography variant="caption">{displayColour}</Typography>
      </div>
    </div>
  );
};

export const Swatch = ({ swatch, originalStop }: SwatchProps) => {
  const textColour = {
    light: swatch[50],
    dark: swatch[950],
  };

  return (
    <div className="flex gap-2">
      {Object.entries(swatch).map(([stop, colour]) => (
        <ColourBlock
          key={stop}
          colour={colour}
          stop={stop}
          check={stop === originalStop.toString()}
          textColour={textColour}
        />
      ))}
    </div>
  );
};
