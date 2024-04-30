import Tinycolor from "tinycolor2";

import Typography from "~/components/ui/typography";

import { createSwatch } from "./swatch/createSwatch";

type SwatchProps = {
  baseColour: string;
};

type ColourBlockProps = {
  colour: string;
  stop: number;
  textColour: { light: string; dark: string };
};

const ColourBlock = ({ colour, stop, textColour }: ColourBlockProps) => {
  const displayColour = colour.replace("#", "").toUpperCase();
  const lightIsReadable = Tinycolor.isReadable(colour, textColour.light);

  return (
    <div
      className="flex aspect-square w-full flex-col justify-end overflow-hidden rounded-sm bg-popover shadow"
      style={{
        backgroundColor: colour,
        color: lightIsReadable ? textColour.light : textColour.dark,
      }}
    >
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
  const swatch = createSwatch({
    colour: baseColour,
    stop: 500,
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
      {swatch.map(({ hex, stop }) => (
        <ColourBlock
          key={stop}
          colour={hex}
          stop={stop}
          textColour={textColour}
        />
      ))}
    </div>
  );
};
