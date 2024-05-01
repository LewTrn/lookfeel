import { CircleCheckBigIcon } from "lucide-react";
import Tinycolor from "tinycolor2";

import { useColourStop } from "~/app/generate/_utils/useColourStop";
import Typography from "~/components/ui/typography";

import { createSwatch } from "./swatch/createSwatch";

type SwatchProps = {
  baseColour: string;
};

type ColourBlockProps = {
  colour: string;
  stop: number;
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

export const Swatch = ({ baseColour }: SwatchProps) => {
  const stop = useColourStop(baseColour);

  const swatch = createSwatch({
    colour: baseColour,
    colourStop: stop,
    saturation: 0,
    lMin: 15,
    lMax: 100,
  });

  const textColour = {
    light: swatch[0]!.hex,
    dark: swatch[swatch.length - 1]!.hex,
  };

  return (
    <div className="flex gap-2">
      {swatch.map(({ hex, stop, isOriginal }) => (
        <ColourBlock
          key={stop}
          colour={hex}
          stop={stop}
          check={isOriginal}
          textColour={textColour}
        />
      ))}
    </div>
  );
};