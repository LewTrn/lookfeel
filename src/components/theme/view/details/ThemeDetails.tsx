import { type Theme } from "~/types/Theme";

import { FontDetails } from "./FontDetails";
import { PaletteDetails } from "./PaletteDetails";

type ThemeDetailsProps = {
  theme: Theme;
};

export const ThemeDetails = ({ theme }: ThemeDetailsProps) => {
  return (
    <div className="sticky top-20 flex flex-col gap-6">
      <PaletteDetails palette={theme.palette} />
      <FontDetails fonts={theme.fonts} />
    </div>
  );
};
