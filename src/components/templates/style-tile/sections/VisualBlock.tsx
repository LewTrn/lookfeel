import tinycolor from "tinycolor2";

import { useGenerateStore } from "~/app/generate/_store/useGenerateStore";
import { ColourType } from "~/app/generate/_types/Colour";

const getStyles = ({
  background,
  light,
  dark,
}: {
  background: string;
  light: string;
  dark: string;
}) => {
  const lightIsReadable = tinycolor.isReadable(background, light);

  return {
    backgroundColor: background,
    color: lightIsReadable ? light : dark,
  };
};

export const VisualBlock = () => {
  const palette = useGenerateStore((state) => state.palette)!;
  const shades = useGenerateStore((state) => state.shades)!;

  return (
    <div className="grid h-[540px] grid-rows-4 gap-4">
      <div
        className="flex items-center justify-center rounded-lg shadow"
        style={getStyles({
          background: palette[ColourType.Primary],
          light: shades[ColourType.Neutral].swatch[50],
          dark: shades[ColourType.Neutral].swatch[950],
        })}
      >
        <span className="text-2xl font-bold">lookfeel</span>
      </div>
      <div
        className="flex items-center justify-center rounded-lg shadow"
        style={getStyles({
          background: palette[ColourType.Secondary],
          light: palette[ColourType.Accent],
          dark: shades[ColourType.Neutral].swatch[950],
        })}
      >
        <span className="text-2xl font-bold">lookfeel</span>
      </div>
      <div className="row-span-2 overflow-hidden rounded-lg shadow">
        <img
          src="https://source.unsplash.com/random/800x600"
          alt=""
          className="object-cover wh-full"
        />
      </div>
    </div>
  );
};
