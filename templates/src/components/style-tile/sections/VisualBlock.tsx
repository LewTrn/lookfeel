import tinycolor from "tinycolor2";

import { useGenerateStore } from "~/app/generate/_store/useGenerateStore";

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
  const { primary, secondary, accent, neutral } = useGenerateStore(
    (state) => state.palette,
  );

  return (
    <div className="flex w-60 max-w-60 flex-col gap-4">
      <div
        className="flex h-32 items-center justify-center rounded-lg shadow"
        style={getStyles({
          background: primary.baseColour,
          light: neutral.shades[50],
          dark: neutral.shades[950],
        })}
      >
        <span className="text-2xl font-bold">lookfeel</span>
      </div>
      <div
        className="flex h-32 items-center justify-center rounded-lg shadow"
        style={getStyles({
          background: secondary.baseColour,
          light: accent.baseColour,
          dark: neutral.shades[950],
        })}
      >
        <span className="text-2xl font-bold">lookfeel</span>
      </div>
      <div
        className="aspect-square overflow-hidden rounded-lg shadow"
        style={{ backgroundColor: primary.baseColour }}
      >
        <img
          src="https://source.unsplash.com/blue-orange-and-yellow-wallpaper-E8Ufcyxz514"
          alt=""
          className="object-cover mix-blend-luminosity wh-full"
        />
      </div>
    </div>
  );
};
