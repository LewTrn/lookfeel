import { sampleSize } from "lodash";

import { POPULAR_FONTS } from "~/constants/fonts";
import { Typography } from "~/types/Fonts";

export const selectFonts = (fonts?: string[]) => {
  if (fonts) {
    return {
      [Typography.Heading]: fonts[0]!,
      [Typography.Body]: fonts[1]!,
    };
  }

  const sampledFonts = sampleSize(POPULAR_FONTS, 2);

  return {
    [Typography.Heading]: sampledFonts[0]!.family,
    [Typography.Body]: sampledFonts[1]!.family,
  };
};
