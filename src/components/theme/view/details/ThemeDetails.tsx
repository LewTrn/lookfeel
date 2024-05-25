import { type ComponentProps } from "react";

import { type Theme } from "~/types/Theme";

import { FontDetails } from "./FontDetails";
import { PaletteDetails } from "./PaletteDetails";

type ThemeDetailsProps = {
  theme: Theme;
  CustomColourRow?: ComponentProps<typeof PaletteDetails>["CustomColourRow"];
  CustomFontRow?: ComponentProps<typeof FontDetails>["CustomFontRow"];
};

export const ThemeDetails = ({
  theme,
  CustomColourRow,
  CustomFontRow,
}: ThemeDetailsProps) => {
  return (
    <div className="sticky top-20 flex flex-col gap-6">
      <PaletteDetails
        palette={theme.palette}
        CustomColourRow={CustomColourRow}
      />
      <FontDetails fonts={theme.fonts} CustomFontRow={CustomFontRow} />
    </div>
  );
};
