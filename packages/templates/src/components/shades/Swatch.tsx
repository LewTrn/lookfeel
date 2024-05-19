import copy from "copy-to-clipboard";
import { Check, CircleCheckBigIcon, CopyIcon } from "lucide-react";
import { useState } from "react";
import tinycolor from "tinycolor2";

import Typography from "~/components/ui/typography";
import { strings } from "~/locales/lookfeel";
import { type Shades } from "~/types/Palette";

type SwatchProps = {
  shades: Shades;
  baseStop: number;
};

type ColourBlockProps = {
  colour: string;
  stop: string;
  check?: boolean;
  textColour: { light: string; dark: string };
};

const ColourBlock = ({ colour, stop, check, textColour }: ColourBlockProps) => {
  const [copied, setCopied] = useState(false);
  const displayColour = colour.replace("#", "").toUpperCase();
  const darkIsReadable = tinycolor.isReadable(colour, textColour.dark);

  const handleCopy = () => {
    const success = copy(colour);

    if (success) {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  };

  return (
    <button
      className="group relative inline-flex aspect-square w-full flex-col justify-end overflow-hidden rounded-sm bg-popover"
      style={{
        backgroundColor: colour,
        color: darkIsReadable ? textColour.dark : textColour.light,
      }}
      data-copied={copied}
      onClick={handleCopy}
      aria-label={strings.shades.copyShade.action}
    >
      {check && (
        <CircleCheckBigIcon
          className="absolute right-1.5 top-1.5 opacity-100 transition-opacity group-hover:opacity-0"
          width={16}
          height={16}
        />
      )}
      <CopyIcon
        className="group absolute right-1.5 top-1.5 opacity-0 transition-opacity group-hover:opacity-100 group-data-[copied=true]:opacity-0"
        width={16}
        height={16}
      />
      {copied && (
        <Check
          className="absolute right-1.5 top-1.5 opacity-0 transition-opacity group-data-[copied=true]:opacity-100"
          width={16}
          height={16}
        />
      )}
      <div className="pb-1.5 pl-2 text-left opacity-95">
        <Typography variant="caption" className="font-semibold">
          {stop}
        </Typography>
        <Typography variant="caption">{displayColour}</Typography>
      </div>
    </button>
  );
};

export const Swatch = ({ shades, baseStop }: SwatchProps) => {
  const textColour = {
    light: shades[50],
    dark: shades[950],
  };

  return (
    <div className="flex gap-2">
      {Object.entries(shades).map(([stop, colour]) => (
        <ColourBlock
          key={stop}
          colour={colour}
          stop={stop}
          check={stop === baseStop.toString()}
          textColour={textColour}
        />
      ))}
    </div>
  );
};
