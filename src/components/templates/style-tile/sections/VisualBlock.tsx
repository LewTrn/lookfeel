import tinycolor from "tinycolor2";

import { useGenerateStore } from "~/app/generate/_store/useGenerateStore";
import { ColourType } from "~/types/Palette";

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
  const palette = useGenerateStore((state) => state.palette);

  return (
    <div className="grid h-[540px] grid-rows-4 gap-4">
      <div
        className="flex items-center justify-center rounded-lg shadow"
        style={getStyles({
          background: palette[ColourType.Primary].baseColour,
          light: palette[ColourType.Neutral].shades[50],
          dark: palette[ColourType.Neutral].shades[950],
        })}
      >
        <span className="text-2xl font-bold">lookfeel</span>
      </div>
      <div
        className="flex items-center justify-center rounded-lg shadow"
        style={getStyles({
          background: palette[ColourType.Secondary].baseColour,
          light: palette[ColourType.Accent].baseColour,
          dark: palette[ColourType.Neutral].shades[950],
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
