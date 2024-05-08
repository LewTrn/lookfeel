import { sampleSize } from "lodash";

import { POPULAR_FONTS } from "~/constants/fonts";
import { Typography } from "~/types/Fonts";

export const selectFonts = () => {
  const fonts = sampleSize(POPULAR_FONTS, 2);

  return {
    [Typography.Heading]: fonts[0]!,
    [Typography.Body]: fonts[1]!,
  };
};
