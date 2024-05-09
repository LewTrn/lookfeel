import ColorScheme from "color-scheme";
import { sample } from "lodash";
import tinycolor from "tinycolor2";

import { ColourType } from "~/types/Palette";
import { shuffle } from "~/utils/shuffle";

const PICK = 3;

const selectFromFour = (colours: string[]) => shuffle(colours).slice(0, PICK);
const selectFromEight = (colours: string[]) => {
  const chunks = shuffle([
    shuffle(colours.slice(0, 4)),
    shuffle(colours.slice(4, 8)),
  ]);
  return [chunks[0]![0]!, chunks[0]![1]!, chunks[1]![0]!];
};
const selectFromTwelve = (colours: string[]) => {
  const chunks = shuffle([
    shuffle(colours.slice(0, 4)),
    shuffle(colours.slice(4, 8)),
    shuffle(colours.slice(8, 12)),
  ]);
  return chunks.map((chunk) => chunk[0]!);
};

const SCHEMES = [
  { scheme: "mono", select: selectFromFour },
  { scheme: "contrast", select: selectFromEight },
  { scheme: "triade", select: selectFromTwelve },
] as const;

const VARIATIONS = ["default", "pastel", "soft", "light", "hard"] as const;

export const generateBaseColours = () => {
  const hue = Math.floor(Math.random() * 360);
  const { scheme, select } = sample(SCHEMES)!;
  const variation = sample(VARIATIONS);

  const s = new ColorScheme().from_hue(hue).scheme(scheme).variation(variation);

  const colours = select(s.colors()).map((colour) => `#${colour}`);

  const sorted = colours.sort(
    (a, b) => tinycolor(a).getLuminance() - tinycolor(b).getLuminance(),
  );

  const neutral = tinycolor(sorted[0]).desaturate(90).darken().toHexString();

  return {
    [ColourType.Primary]: sorted[0]!,
    [ColourType.Secondary]: sorted[1]!,
    [ColourType.Accent]: sorted[2]!,
    [ColourType.Neutral]: neutral,
  };
};
